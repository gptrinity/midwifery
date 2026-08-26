import { Router } from "express";
import { prisma } from "../index.js";
import { getSessionUser } from "../lib/auth.js";

const router = Router();

router.get("/", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user) return res.status(401).json({ error: "Not authenticated" });

  const [attempts, subjects, topicCount] = await Promise.all([
    prisma.quizAttempt.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 30,
      include: { subject: { select: { id: true, name: true, color: true } } },
    }),
    prisma.subject.findMany({
      include: { _count: { select: { questions: true } } },
      orderBy: { order: "asc" },
    }),
    prisma.topic.count(),
  ]);

  res.json({ attempts, subjects, topicCount });
});

export default router;
