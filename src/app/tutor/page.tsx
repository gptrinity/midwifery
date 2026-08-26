import { prisma } from "@/lib/prisma";
import { aiConfigured } from "@/lib/ai";
import TutorChat from "@/components/TutorChat";

export const dynamic = "force-dynamic";

export default async function TutorPage() {
  const subjects = await prisma.subject.findMany({
    orderBy: { order: "asc" },
    select: { id: true, name: true },
  });

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900">AI Tutor — MamaWise</h1>
        <p className="mt-1 text-sm text-slate-500">
          A teaching tutor for all of midwifery and nursing. Grounds answers in the question bank, remembers your
          sessions, and improves from your feedback.
        </p>
      </div>
      <TutorChat subjects={subjects} configured={aiConfigured()} />
    </div>
  );
}