import { Router } from "express";
import { prisma } from "../index.js";
import { getSessionUser } from "../lib/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const [subjectCount, questionCount, user, recentQuestions] = await Promise.all([
    prisma.subject.count(),
    prisma.question.count(),
    getSessionUser(req),
    prisma.question.findMany({
      take: 5,
      orderBy: { id: "asc" },
      include: { subject: { select: { name: true, color: true } } },
    }),
  ]);

  res.json({ subjectCount, questionCount, user, recentQuestions });
});

export default router;
