import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Target, Bot, FileText, ArrowRight, Brain } from "lucide-react";
import { api } from "@/lib/api";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    api.homePage().then(setData).catch(() => setError(true));
  }, []);

  if (error) return <div className="card p-10 text-center text-rose-600">Failed to load. Is the server running?</div>;
  if (!data) return <div className="card p-10 text-center text-slate-400">Loading…</div>;

  const features = [
    {
      title: "Deep topic-by-topic questions",
      desc: `${data.questionCount}+ original questions across 7 subjects, from newbie to professional level, organised topic by topic.`,
      icon: BookOpen,
      href: "/subjects",
      cta: "Browse subjects",
    },
    {
      title: "Practice & mock exams",
      desc: "Timed practice by subject, topic and level with instant grading and explanations — then full mock exam papers.",
      icon: Target,
      href: "/practice",
      cta: "Start practicing",
    },
    {
      title: "AI teaching tutor",
      desc: "MamaWise, a tutor that learns with you: it grounds answers in your question bank and improves with your feedback.",
      icon: Bot,
      href: "/tutor",
      cta: "Chat with the tutor",
    },
    {
      title: "Past papers archive",
      desc: "A growing archive of imported past exam papers, filterable by year, subject and level.",
      icon: FileText,
      href: "/papers",
      cta: "View archive",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="card relative overflow-hidden p-8 text-white">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #1a5e47 0%, #2e8b68 60%, #3b8c68 100%)" }}
        />
        <div className="relative">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight">
            Master Midwifery &amp; Nursing — from your first year to professional exams
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-50/90">
            {data.subjectCount} subjects, {data.questionCount}+ past-style questions broken down topic by topic, mock exams,
            a past-papers archive, and an AI tutor that grows smarter the more you use the site.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/subjects"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow transition hover:bg-brand-50"
            >
              Explore the curriculum
            </Link>
            <Link
              to={data.user ? "/practice" : "/register"}
              className="rounded-xl border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {data.user ? "Start a practice session" : "Create a free account"}
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Link key={f.title} to={f.href} className="card group p-5 transition hover:-translate-y-0.5 hover:shadow-md">
            <f.icon className="mb-3 h-6 w-6 text-brand-600" />
            <h3 className="font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{f.desc}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2">
              {f.cta} <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Browse the curriculum</h2>
          <Link to="/subjects" className="text-sm font-semibold text-brand-600 hover:underline">
            All subjects →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.subjects.map((s: any) => (
            <Link key={s.id} to={`/subjects/${s.slug}`} className="card group p-5 transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                  style={{ background: s.color }}
                >
                  <BookOpen size={18} />
                </span>
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{s.name}</h3>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-500">{s.description}</p>
              <div className="mt-3 flex gap-4 text-xs font-medium text-slate-400">
                <span>{s._count.topics} topics</span>
                <span>{s._count.questions} questions</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Fresh questions to try</h2>
          <Link to="/practice" className="text-sm font-semibold text-brand-600 hover:underline">
            More practice →
          </Link>
        </div>
        <ul className="space-y-3">
          {data.recentQuestions.map((q: any) => (
            <li key={q.id} className="flex items-start gap-3 rounded-xl border border-slate-100 p-3">
              <span
                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: q.subject.color }}
              />
              <div className="min-w-0">
                <p className="line-clamp-2 text-sm text-slate-700">{q.text}</p>
                <p className="mt-0.5 text-xs text-slate-400">
                  {q.subject.name} · {q.type} · {q.level}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="card p-6">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-brand-600" />
          <h2 className="text-lg font-bold text-slate-900">How the tutor grows with you</h2>
        </div>
        <div className="mt-3 grid gap-4 text-sm leading-relaxed text-slate-600 sm:grid-cols-3">
          <div>
            <strong className="text-slate-900">1. It reads the bank.</strong> Every answer is grounded in the
            question bank and study notes, so explanations match your exams.
          </div>
          <div>
            <strong className="text-slate-900">2. It listens.</strong> Rate answers with 👍/👎. Poor ratings and
            unanswered questions go to an admin review queue and get turned into better study content.
          </div>
          <div>
            <strong className="text-slate-900">3. It tracks weak spots.</strong> Your quiz results teach the tutor
            which topics to drill with you next.
          </div>
        </div>
      </section>
    </div>
  );
}
