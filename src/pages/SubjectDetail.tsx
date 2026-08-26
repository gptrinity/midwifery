import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BookOpen, ChevronRight, ListChecks, Target } from "lucide-react";
import { levelColor, LEVEL_LABEL } from "@/lib/constants";
import { api } from "@/lib/api";

export default function SubjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [subject, setSubject] = useState<any>(null);

  useEffect(() => {
    if (slug) api.subjectBySlug(slug).then((d) => setSubject(d.subject)).catch(() => {});
  }, [slug]);

  if (!subject) return <div className="card p-10 text-center text-slate-400">Loading…</div>;

  const levelCounts: Record<string, number> = {};
  subject.questions.forEach((q: any) => {
    levelCounts[q.level] = (levelCounts[q.level] || 0) + 1;
  });

  return (
    <div>
      <div className="mb-6">
        <Link to="/subjects" className="text-sm font-medium text-brand-600 hover:underline">
          ← All subjects
        </Link>
        <div className="mt-2 flex items-center gap-3">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
            style={{ background: subject.color }}
          >
            <BookOpen size={24} />
          </span>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{subject.name}</h1>
            <p className="text-sm text-slate-500">{subject.description}</p>
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {Object.entries(levelCounts).map(([level, count]) => (
          <span key={level} className={`rounded-full px-3 py-1 text-xs font-semibold ${levelColor(level)}`}>
            {LEVEL_LABEL[level] || level}: {count as number}
          </span>
        ))}
        <Link to={`/practice?subject=${subject.id}`} className="btn-primary ml-auto">
          <Target size={15} />
          Practice this subject
        </Link>
      </div>

      <div className="space-y-3">
        {subject.topics.map((t: any) => (
          <Link
            key={t.id}
            to={`/topics/${t.id}`}
            className="card flex items-center gap-4 p-4 transition hover:border-brand-300 hover:shadow-sm"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <ListChecks size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-slate-900">{t.name}</h3>
              <p className="line-clamp-2 text-sm text-slate-500">{t.summary}</p>
            </div>
            <div className="shrink-0 text-right">
              <span className="text-sm font-bold text-brand-700">{t._count.questions}</span>
              <p className="text-xs text-slate-400">questions</p>
            </div>
            <ChevronRight className="shrink-0 text-slate-300" size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
}
