import { Router } from "express";
import { prisma } from "../index.js";

const router = Router();

router.get("/", async (_req, res) => {
  const subjects = await prisma.subject.findMany({
    orderBy: { order: "asc" },
    include: { _count: { select: { questions: true, topics: true } } },
  });
  res.json({ subjects });
});

router.get("/:slug", async (req, res) => {
  const subject = await prisma.subject.findUnique({
    where: { slug: req.params.slug },
    include: {
      topics: {
        orderBy: { order: "asc" },
        include: { _count: { select: { questions: true } } },
      },
      questions: true,
    },
  });
  if (!subject) return res.status(404).json({ error: "Not found" });
  res.json({ subject });
});

export default router;
