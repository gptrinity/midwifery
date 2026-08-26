import { prisma } from "@/lib/prisma";
import PracticeSetup from "@/components/PracticeSetup";

export default async function PracticePage() {
  const subjects = await prisma.subject.findMany({
    orderBy: { order: "asc" },
    select: {
      id: true,
      name: true,
      topics: { orderBy: { order: "asc" }, select: { id: true, name: true } },
    },
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Practice</h1>
        <p className="mt-1 text-sm text-slate-500">
          Drill down by subject, topic and level for instant, exam-style feedback.
        </p>
      </div>
      <PracticeSetup subjects={subjects} mode="PRACTICE" />
    </div>
  );
}