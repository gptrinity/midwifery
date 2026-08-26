import { selectQuestions } from "@/lib/quiz";
import QuizRunner from "@/components/QuizRunner";

export default async function ExamRunPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string; topic?: string; level?: string; type?: string; count?: string }>;
}) {
  const sp = await searchParams;
  const questions = await selectQuestions({
    subjectId: sp.subject || undefined,
    topicId: sp.topic || undefined,
    level: sp.level || undefined,
    type: sp.type || undefined,
    count: Math.max(1, Math.min(50, parseInt(sp.count || "10", 10))),
  });

  return (
    <div>
      <QuizRunner questions={questions} mode="EXAM" />
    </div>
  );
}