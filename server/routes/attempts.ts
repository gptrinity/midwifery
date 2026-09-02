import { Router } from "express";
import { prisma } from "../index.js";
import { getSessionUser } from "../lib/auth.js";

const router = Router();

router.post("/", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user) return res.status(401).json({ error: "Not authenticated" });

  try {
    const body = req.body;
    const attempt = await prisma.quizAttempt.create({
      data: {
        userId: user.id,
        mode: body.mode || "PRACTICE",
        subjectId: body.subjectId || null,
        topicId: body.topicId || null,
        level: body.level || "",
        score: body.score || 0,
        total: body.total || 0,
        durationSec: body.durationSec || 0,
        answers: body.answers || "[]",
      },
    });

    // Record seen questions for deduplication
    if (body.questionIds && Array.isArray(body.questionIds) && body.questionIds.length > 0) {
      const seenRecords = body.questionIds.map((qid: string) => ({
        userId: user.id,
        questionId: qid,
      }));
      // Insert one by one, ignoring duplicates via upsert-like logic
      for (const record of seenRecords) {
        try {
          await prisma.seenQuestion.create({ data: record });
        } catch {
          // Ignore duplicate key errors
        }
      }
    }

    res.json({ ok: true, id: attempt.id });
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

export default router;
