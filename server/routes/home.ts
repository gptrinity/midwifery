import { Router } from "express";
import { prisma } from "../index.js";
import { getSessionUser } from "../lib/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const [subjectCount, questionCount, user, recentQuestions, subjects] = await Promise.all([
    prisma.subject.count(),
    prisma.question.count(),
    getSessionUser(req),
    prisma.question.findMany({
      take: 5,
      orderBy: { id: "asc" },
      include: { subject: { select: { name: true, color: true } } },
    }),
    prisma.subject.findMany({
      orderBy: { order: "asc" },
      include: { _count: { select: { topics: true, questions: true } } },
    }),
  ]);

  res.json({ subjectCount, questionCount, user, recentQuestions, subjects });
});

export default router;
