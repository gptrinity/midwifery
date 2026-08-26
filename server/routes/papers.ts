import { Router } from "express";
import multer from "multer";
import { prisma } from "../index.js";
import { getSessionUser } from "../lib/auth.js";

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.post("/import", upload.single("file"), async (req, res) => {
  const user = await getSessionUser(req);
  if (!user || user.role !== "ADMIN") return res.status(403).json({ error: "Admins only" });

  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const subjectId = req.body.subject || null;
    const year = req.body.year || "";
    const level = req.body.level || "";
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

    res.json({ ok: true, paper, chars: content.length, preview: content.slice(0, 500) });
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

export default router;
