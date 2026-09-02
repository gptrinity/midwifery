import { Router } from "express";
import { prisma } from "../index.js";
import { getSessionUser } from "../lib/auth.js";
import { shuffle } from "../lib/utils.js";

const router = Router();

router.get("/select", async (req, res) => {
  const { subject, topic, level, type, count, reset } = req.query;
  const user = await getSessionUser(req);

  const where: Record<string, unknown> = {};
  if (subject) where.subjectId = subject;
  if (topic) where.topicId = topic;
  if (level) where.level = level;
  if (type) where.type = type;

  // Get all matching questions
  const allRows = await prisma.question.findMany({
    where,
    include: { subject: { select: { name: true } } },
  });

  let rows = allRows;

  // If authenticated, exclude previously seen questions
  if (user) {
    const seenIds = await prisma.seenQuestion.findMany({
      where: { userId: user.id, questionId: { in: allRows.map((r) => r.id) } },
      select: { questionId: true },
    });
    const seenSet = new Set(seenIds.map((s) => s.questionId));
    rows = allRows.filter((r) => !seenSet.has(r.id));

    // If all questions have been seen or reset requested, use full pool
    if (rows.length === 0 || reset === "true") {
      if (reset === "true" && user) {
        // Clear seen records for this user+subject scope
        const topicIds = allRows.map((r) => r.topicId);
        await prisma.seenQuestion.deleteMany({
          where: {
            userId: user.id,
            question: { topicId: { in: topicIds } },
          },
        });
      }
      rows = allRows;
    }
  }

  const n = Math.max(1, Math.min(50, parseInt(count as string || "10", 10)));
  const shuffled = shuffle(rows);
  const selected = shuffled.slice(0, Math.min(n, rows.length));
  const remaining = rows.length - selected.length;

  const questions = selected.map((q) => {
    let options: string[] = [];
    try { options = JSON.parse(q.options); } catch { options = []; }
    return {
      id: q.id,
      subjectId: q.subjectId,
      text: q.text,
      type: q.type,
      level: q.level,
      options,
      correctIndex: q.correctIndex,
      answer: q.answer,
      marks: q.marks,
      subjectName: q.subject.name,
    };
  });

  res.json({ questions, remaining, total: allRows.length });
});

export default router;
