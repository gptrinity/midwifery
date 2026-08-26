import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  try {
    const body = await request.json();
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
    return NextResponse.json({ ok: true, id: attempt.id });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}