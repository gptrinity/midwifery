import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ChevronRight } from "lucide-react";
import { api } from "@/lib/api";

export default function Subjects() {
  const [subjects, setSubjects] = useState<any[]>([]);

  useEffect(() => {
    api.subjects().then((d) => setSubjects(d.subjects)).catch(() => {});
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">The curriculum</h1>
        <p className="mt-1 text-sm text-slate-500">
          Seven core subjects, each broken down topic by topic with questions at every level —
          newbie, intermediate, advanced and professional.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((s) => (
          <Link key={s.id} to={`/subjects/${s.slug}`} className="card group p-6 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center justify-between">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                style={{ background: s.color }}
              >
                <BookOpen size={20} />
              </span>
              <ChevronRight className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-brand-600" size={20} />
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-900">{s.name}</h2>
            <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-slate-500">{s.description}</p>
            <div className="mt-4 flex gap-4 text-xs font-medium text-slate-400">
              <span>{s._count.topics} topics</span>
              <span>{s._count.questions} questions</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
