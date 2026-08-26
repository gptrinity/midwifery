import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BarChart3, BookOpen, TrendingUp, Award } from "lucide-react";
import { LEVEL_LABEL } from "@/lib/constants";
import { api } from "@/lib/api";

export default function Progress() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    api.progress().then(setData).catch(() => {});
  }, []);

  if (!data) return <div className="card p-10 text-center text-slate-400">Loading…</div>;

  const { attempts, subjects, topicCount } = data;
  const totalAttempts = attempts.length;
  const totalAnswered = attempts.reduce((a: number, b: any) => a + b.total, 0);
  const totalCorrect = attempts.reduce((a: number, b: any) => a + b.score, 0);
  const avgPct = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const bySubject = new Map<string, { name: string; color: string; correct: number; total: number }>();
  for (const a of attempts) {
    if (!a.subject) continue;
    const key = a.subject.id;
    const cur = bySubject.get(key) || { name: a.subject.name, color: a.subject.color, correct: 0, total: 0 };
    cur.correct += a.score;
    cur.total += a.total;
    bySubject.set(key, cur);
  }

  const coveredSubjects = new Set(attempts.filter((a: any) => a.subjectId).map((a: any) => a.subjectId));

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Your progress</h1>
        <p className="mt-1 text-sm text-slate-500">Track how you're growing across subjects and levels.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        <div className="card p-5">
          <BarChart3 className="mb-2 text-brand-600" size={20} />
          <div className="text-2xl font-bold text-slate-900">{totalAttempts}</div>
          <div className="text-sm text-slate-500">sessions taken</div>
        </div>
        <div className="card p-5">
          <BookOpen className="mb-2 text-brand-600" size={20} />
          <div className="text-2xl font-bold text-slate-900">{totalAnswered}</div>
          <div className="text-sm text-slate-500">questions answered</div>
        </div>
        <div className="card p-5">
          <TrendingUp className="mb-2 text-brand-600" size={20} />
          <div className="text-2xl font-bold text-slate-900">{avgPct}%</div>
          <div className="text-sm text-slate-500">average score</div>
        </div>
        <div className="card p-5">
          <Award className="mb-2 text-brand-600" size={20} />
          <div className="text-2xl font-bold text-slate-900">
            {coveredSubjects.size}<span className="text-base text-slate-400">/{subjects.length}</span>
          </div>
          <div className="text-sm text-slate-500">subjects practiced</div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="mb-4 font-bold text-slate-900">Performance by subject</h2>
          {bySubject.size === 0 && (
            <p className="text-sm text-slate-400">
              No practice yet.{" "}
              <Link to="/practice" className="font-semibold text-brand-600 hover:underline">
                Start a session
              </Link>
            </p>
          )}
          <div className="space-y-3">
            {[...bySubject.entries()].map(([id, s]) => {
              const pct = s.total ? Math.round((s.correct / s.total) * 100) : 0;
              return (
                <div key={id}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{s.name}</span>
                    <span className="text-slate-500">{s.correct}/{s.total} ({pct}%)</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: s.color }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="mb-4 font-bold text-slate-900">Recent sessions</h2>
          {attempts.length === 0 && <p className="text-sm text-slate-400">No sessions yet.</p>}
          <ul className="space-y-2">
            {attempts.slice(0, 10).map((a: any) => {
              const pct = a.total ? Math.round((a.score / a.total) * 100) : 0;
              return (
                <li key={a.id} className="flex items-center justify-between rounded-xl border border-slate-100 px-3 py-2 text-sm">
                  <div>
                    <span className="font-medium text-slate-700">
                      {a.subject?.name || "All subjects"} {a.level ? `· ${LEVEL_LABEL[a.level]}` : ""}
                    </span>
                    <span className="ml-2 text-xs text-slate-400">{a.mode}</span>
                  </div>
                  <span className={`font-bold ${pct >= 60 ? "text-emerald-600" : "text-rose-500"}`}>{pct}%</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
