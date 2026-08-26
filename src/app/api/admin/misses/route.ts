import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

export async function GET() {
  const user = await getSessionUser();
  if (!user || user.role !== "ADMIN") return NextResponse.json({ error: "Admins only" }, { status: 403 });
  const misses = await prisma.missedQuery.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: { select: { name: true, email: true } }, subject: { select: { name: true } } },
  });
  return NextResponse.json({ misses });
}

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user || user.role !== "ADMIN") return NextResponse.json({ error: "Admins only" }, { status: 403 });
  const { id, status } = await request.json();
  const updated = await prisma.missedQuery.update({
    where: { id },
    data: { status: status || "RESOLVED", resolvedAt: new Date() },
  });
  return NextResponse.json({ ok: true, updated });
}