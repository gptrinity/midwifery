import { Router } from "express";
import { prisma } from "../index.js";
import { getSessionUser } from "../lib/auth.js";
import { streamChat, retrieveContext, contextToPrompt, ChatMsg, aiConfigured } from "../lib/ai.js";

const router = Router();

router.get("/sessions", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user) return res.status(401).json({ error: "Not authenticated" });
  const sessions = await prisma.chatSession.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { messages: true } } },
  });
  res.json({ sessions });
});

router.post("/sessions", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user) return res.status(401).json({ error: "Not authenticated" });
  const { subjectId, title } = req.body;
  const session = await prisma.chatSession.create({
    data: { userId: user.id, subjectId: subjectId || null, title: title || "New session" },
  });
  res.json({ session });
});

router.get("/messages", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user) return res.status(401).json({ error: "Not authenticated" });
  const sessionId = req.query.session as string;
  if (!sessionId) return res.status(400).json({ error: "Missing session" });

  const session = await prisma.chatSession.findFirst({ where: { id: sessionId, userId: user.id } });
  if (!session) return res.status(404).json({ error: "Session not found" });

  const messages = await prisma.chatMessage.findMany({
    where: { sessionId },
    orderBy: { createdAt: "asc" },
  });
  res.json({ session, messages });
});

router.post("/chat", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user) return res.status(401).json({ error: "Not authenticated" });

  if (!aiConfigured()) {
    return res.status(503).json({ error: "AI tutor is not configured. Add your OPENAI_API_KEY to .env." });
  }

  const { sessionId, message, subjectId } = req.body;
  if (!message?.trim()) return res.status(400).json({ error: "Empty message" });

  let session;
  if (sessionId) {
    session = await prisma.chatSession.findFirst({ where: { id: sessionId, userId: user.id } });
  }
  if (!session) {
    session = await prisma.chatSession.create({
      data: {
        userId: user.id,
        subjectId: subjectId || null,
        title: message.trim().slice(0, 60),
      },
    });
  }

  await prisma.chatMessage.create({
    data: { sessionId: session.id, role: "USER", content: message.trim() },
  });

  const [ctx, history, aiRecord] = await Promise.all([
    retrieveContext(message, session.subjectId || subjectId || null),
    prisma.chatMessage.findMany({
      where: { sessionId: session.id, role: { in: ["USER", "AI"] } },
      orderBy: { createdAt: "asc" },
      take: 20,
    }),
    prisma.chatMessage.create({
      data: { sessionId: session.id, role: "AI", content: "" },
    }),
  ]);
  const missed = ctx.questions.length === 0 && ctx.topics.length === 0;

  const historyMsgs: ChatMsg[] = history
    .slice(-10)
    .map((m) => ({ role: m.role === "USER" ? "user" : "assistant", content: m.content }));

  const prompt = contextToPrompt(ctx, message.trim());
  const messages: ChatMsg[] = [...prompt, ...historyMsgs.slice(0, -1)];

  const encoder = new TextEncoder();
  let full = "";

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const upstream = await streamChat(messages);
        const reader = upstream.getReader();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const text = new TextDecoder().decode(value);
          full += text;
          controller.enqueue(encoder.encode(text));
        }
      } catch (e) {
        full += `\n\n[Error: ${(e as Error).message}]`;
        controller.enqueue(encoder.encode(full.slice(full.indexOf("\n\n[Error:"))));
      } finally {
        try {
          await prisma.chatMessage.update({
            where: { id: aiRecord.id },
            data: { content: full || "(no response)" },
          });
          if (missed) {
            await prisma.missedQuery.create({
              data: { userId: user.id, subjectId: session.subjectId || null, query: message.trim() },
            });
          }
        } catch {
          // best effort
        }
        controller.enqueue(encoder.encode(`\n__MW_SESSION__${session.id}`));
        controller.close();
      }
    },
  });

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache");
  const nodeStream = new (require("stream").Readable)({
    async read() {
      const reader = stream.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          this.push(value);
        }
      } finally {
        this.push(null);
      }
    },
  });
  nodeStream.pipe(res);
});

router.post("/rate", async (req, res) => {
  const user = await getSessionUser(req);
  if (!user) return res.status(401).json({ error: "Not authenticated" });

  const { messageId, rating, feedback } = req.body;
  const message = await prisma.chatMessage.findFirst({ where: { id: messageId, session: { userId: user.id } } });
  if (!message) return res.status(404).json({ error: "Message not found" });

  await prisma.chatMessage.update({
    where: { id: message.id },
    data: { rating: Number(rating) || null, feedback: feedback || "" },
  });

  if (Number(rating) <= 2) {
    const prev = await prisma.chatMessage.findFirst({
      where: { sessionId: message.sessionId, role: "USER", id: { lt: message.id } },
      orderBy: { createdAt: "desc" },
    });
    const session = await prisma.chatSession.findUnique({ where: { id: message.sessionId } });
    await prisma.missedQuery.create({
      data: {
        userId: user.id,
        subjectId: session?.subjectId || null,
        query: prev?.content || message.content.slice(0, 200),
        status: "OPEN",
      },
    });
  }

  res.json({ ok: true });
});

export default router;
