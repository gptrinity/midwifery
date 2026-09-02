import { Router } from "express";
import multer from "multer";
import { prisma } from "../index.js";
import { getSessionUser } from "../lib/auth.js";
import { parsePaperContent } from "../lib/paperParser.js";

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

// In-memory store for pending parsed questions (by paper ID)
const pendingQuestions = new Map<string, any[]>();

router.post("/import", upload.single("file"), async (req, res) => {
  const user = await getSessionUser(req);
  if (!user || user.role !== "ADMIN") return res.status(403).json({ error: "Admins only" });

  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const subjectId = req.body.subject || null;
    const year = req.body.year || "";
    const level = req.body.level || "PROFESSIONAL";
    const title = req.body.title || "";

    const ext = file.originalname.split(".").pop()?.toLowerCase() || "";
    let content = "";

    if (ext === "txt" || ext === "md") {
      content = file.buffer.toString("utf8");
    } else if (ext === "pdf") {
      const pdfModule = await import("pdf-parse") as any;
      const pdfParse = pdfModule.default || pdfModule;
      const parsed = await pdfParse(file.buffer);
      content = parsed.text || "";
    } else if (ext === "docx") {
      const mammoth = await import("mammoth");
      const result = await mammoth.extractRawText({ buffer: file.buffer as any });
      content = result.value || "";
    } else if (ext === "xlsx" || ext === "xls") {
      const XLSX = await import("xlsx");
      const wb = XLSX.read(file.buffer, { type: "buffer" });
      const sheets = wb.SheetNames.map((n) => {
        const rows = XLSX.utils.sheet_to_json(wb.Sheets[n], { header: 1 }) as unknown[][];
        return rows.map((r) => r.join("\t")).join("\n");
      });
      content = sheets.join("\n\n--- SHEET ---\n\n");
    } else {
      return res.status(400).json({ error: "Unsupported file type. Use PDF, DOCX, XLSX, TXT." });
    }

    if (!content.trim()) {
      return res.status(422).json({ error: "No readable text found in this file." });
    }

    const paper = await prisma.paper.create({
      data: {
        title: title || file.originalname.replace(/\.[^.]+$/, ""),
        subjectId,
        level,
        year,
        fileName: file.originalname,
        fileType: ext.toUpperCase(),
        content: content.slice(0, 200000),
        status: "IMPORTED",
      },
    });

    // Auto-parse MCQs from the content
    const parsed = parsePaperContent(content, { level, year });
    const withMeta = parsed.map((q) => ({
      ...q,
      subjectId: subjectId || null,
    }));
    pendingQuestions.set(paper.id, withMeta);

    res.json({
      ok: true,
      paper,
      chars: content.length,
      preview: content.slice(0, 500),
      parsedCount: withMeta.length,
      parsedQuestions: withMeta.slice(0, 20), // Return first 20 for preview
    });
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// Get pending parsed questions for a paper
router.get("/:paperId/pending", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user || user.role !== "ADMIN") return res.status(403).json({ error: "Admins only" });

  const questions = pendingQuestions.get(req.params.paperId) || [];
  res.json({ questions });
});

// Update a single pending question
router.put("/:paperId/pending/:index", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user || user.role !== "ADMIN") return res.status(403).json({ error: "Admins only" });

  const questions = pendingQuestions.get(req.params.paperId);
  if (!questions) return res.status(404).json({ error: "No pending questions" });

  const idx = parseInt(req.params.index, 10);
  if (idx < 0 || idx >= questions.length) return res.status(400).json({ error: "Invalid index" });

  questions[idx] = { ...questions[idx], ...req.body };
  res.json({ ok: true, question: questions[idx] });
});

// Delete a pending question
router.delete("/:paperId/pending/:index", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user || user.role !== "ADMIN") return res.status(403).json({ error: "Admins only" });

  const questions = pendingQuestions.get(req.params.paperId);
  if (!questions) return res.status(404).json({ error: "No pending questions" });

  const idx = parseInt(req.params.index, 10);
  if (idx < 0 || idx >= questions.length) return res.status(400).json({ error: "Invalid index" });

  questions.splice(idx, 1);
  res.json({ ok: true });
});

// Commit all pending questions to the database
router.post("/:paperId/commit", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user || user.role !== "ADMIN") return res.status(403).json({ error: "Admins only" });

  const questions = pendingQuestions.get(req.params.paperId);
  if (!questions || questions.length === 0) return res.status(400).json({ error: "No pending questions" });

  const paper = await prisma.paper.findUnique({ where: { id: req.params.paperId } });
  if (!paper) return res.status(404).json({ error: "Paper not found" });

  const subjectId = paper.subjectId;
  // Find default topic for the subject
  let defaultTopicId: string | null = null;
  if (subjectId) {
    const topic = await prisma.topic.findFirst({ where: { subjectId }, orderBy: { order: "asc" } });
    defaultTopicId = topic?.id || null;
  }

  let created = 0;
  for (const q of questions) {
    if (!q.text || q.text.trim().length < 10) continue;
    await prisma.question.create({
      data: {
        subjectId: q.subjectId || subjectId || "",
        topicId: defaultTopicId || "",
        text: q.text,
        type: q.type || "MCQ",
        level: q.level || paper.level || "PROFESSIONAL",
        options: JSON.stringify(q.options || []),
        correctIndex: q.correctIndex ?? null,
        answer: q.answer || "",
        marks: q.marks || 1,
        year: q.year || paper.year || "",
        source: "past-paper",
      },
    });
    created++;
  }

  // Update paper status
  await prisma.paper.update({
    where: { id: req.params.paperId },
    data: { status: "REVIEWED" },
  });

  pendingQuestions.delete(req.params.paperId);

  res.json({ ok: true, created });
});

export default router;
