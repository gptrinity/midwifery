import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { messageId, rating, feedback } = await request.json();
  const message = await prisma.chatMessage.findFirst({ where: { id: messageId, session: { userId: user.id } } });
  if (!message) return NextResponse.json({ error: "Message not found" }, { status: 404 });

  await prisma.chatMessage.update({
    where: { id: message.id },
    data: { rating: Number(rating) || null, feedback: feedback || "" },
  });

  // Growth loop: poor rating → log a missed query for admin review
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

  return NextResponse.json({ ok: true });
}