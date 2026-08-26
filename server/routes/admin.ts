import { Router } from "express";
import { prisma } from "../index.js";
import { getSessionUser } from "../lib/auth.js";

const router = Router();

router.get("/stats", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user || user.role !== "ADMIN") return res.status(403).json({ error: "Admins only" });

  const [subjectCount, questionCount, paperCount, openMisses, studentCount] = await Promise.all([
    prisma.subject.count(),
    prisma.question.count(),
    prisma.paper.count(),
    prisma.missedQuery.count({ where: { status: "OPEN" } }),
    prisma.user.count({ where: { role: "STUDENT" } }),
  ]);

  res.json({ subjectCount, questionCount, paperCount, openMisses, studentCount });
});

router.get("/misses", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user || user.role !== "ADMIN") return res.status(403).json({ error: "Admins only" });

  const misses = await prisma.missedQuery.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: { select: { name: true, email: true } }, subject: { select: { name: true } } },
  });
  res.json({ misses });
});

router.post("/misses", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user || user.role !== "ADMIN") return res.status(403).json({ error: "Admins only" });

  const { id, status } = req.body;
  const updated = await prisma.missedQuery.update({
    where: { id },
    data: { status: status || "RESOLVED", resolvedAt: new Date() },
  });
  res.json({ ok: true, updated });
});

export default router;
