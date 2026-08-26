import { Router } from "express";
import { prisma } from "../index.js";
import { shuffle } from "../lib/utils.js";

const router = Router();

router.get("/select", async (req, res) => {
  const { subject, topic, level, type, count } = req.query;
  const where: Record<string, unknown> = {};
  if (subject) where.subjectId = subject;
  if (topic) where.topicId = topic;
  if (level) where.level = level;
  if (type) where.type = type;

  const rows = await prisma.question.findMany({
    where,
    include: { subject: { select: { name: true } } },
  });

  const n = Math.max(1, Math.min(50, parseInt(count as string || "10", 10)));
  const questions = shuffle(rows).slice(0, Math.min(n, rows.length)).map((q) => {
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

  res.json({ questions });
});

export default router;
