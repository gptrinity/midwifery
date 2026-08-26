import { Router } from "express";
import { prisma } from "../index.js";

const router = Router();

router.get("/:id", async (req, res) => {
  const topic = await prisma.topic.findUnique({
    where: { id: req.params.id },
    include: {
      subject: { select: { name: true, slug: true, color: true } },
      questions: { orderBy: [{ level: "asc" }, { id: "asc" }] },
    },
  });
  if (!topic) return res.status(404).json({ error: "Not found" });
  res.json({ topic });
});

export default router;
