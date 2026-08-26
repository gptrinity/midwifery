import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import QuestionItem from "@/components/QuestionItem";
import { ChevronLeft, Target } from "lucide-react";

export default async function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const topic = await prisma.topic.findUnique({
    where: { id },
    include: {
      subject: { select: { name: true, slug: true, color: true } },
      questions: { orderBy: [{ level: "asc" }, { id: "asc" }] },
    },
  });

  if (!topic) notFound();

  return (
    <div>
      <div className="mb-6">
        <Link
          href={`/subjects/${topic.subject.slug}`}
          className="text-sm font-medium text-brand-600 hover:underline"
        >
          ← {topic.subject.name}
        </Link>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">{topic.name}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{topic.summary}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link href={`/practice?subject=${topic.subjectId}&topic=${topic.id}`} className="btn-primary">
            <Target size={15} />
            Practice this topic
          </Link>
          <span className="text-sm text-slate-500">{topic.questions.length} questions</span>
        </div>
      </div>

      <div className="space-y-4">
        {topic.questions.map((q) => {
          let options: string[] = [];
          try {
            options = JSON.parse(q.options);
          } catch {
            options = [];
          }
          return (
            <QuestionItem
              key={q.id}
              id={q.id}
              text={q.text}
              type={q.type}
              level={q.level}
              options={options}
              correctIndex={q.correctIndex}
              answer={q.answer}
              marks={q.marks}
            />
          );
        })}
      </div>
    </div>
  );
}