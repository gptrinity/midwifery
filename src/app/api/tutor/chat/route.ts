import { streamChat, retrieveContext, contextToPrompt, ChatMsg, aiConfigured } from "@/lib/ai";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) return new Response("Not authenticated", { status: 401 });

  if (!aiConfigured()) {
    return new Response(
      JSON.stringify({ error: "AI tutor is not configured. Add your OPENAI_API_KEY to .env to enable the tutor." }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  const { sessionId, message, subjectId } = await request.json();
  if (!message?.trim()) return new Response("Empty message", { status: 400 });

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

  // Save user message
  await prisma.chatMessage.create({
    data: { sessionId: session.id, role: "USER", content: message.trim() },
  });

  // Run retrieval, history, and the AI message record in parallel
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

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}