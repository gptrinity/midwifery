import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Upload, Inbox, FileText, BookOpen } from "lucide-react";
import { api } from "@/lib/api";

export default function Admin() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    api.adminStats().then(setStats).catch(() => {});
  }, []);

  if (!stats) return <div className="card p-10 text-center text-slate-400">Loading…</div>;

  const cards = [
    { title: "Import a past paper", desc: "Upload PDF, Word, Excel or text files.", icon: Upload, href: "/admin/import", cta: "Go to importer" },
    { title: `Review AI misses (${stats.openMisses})`, desc: "Questions the tutor couldn't answer well.", icon: Inbox, href: "/admin/misses", cta: "Open the queue" },
    { title: "View the paper archive", desc: `${stats.paperCount} papers currently in the archive.`, icon: FileText, href: "/papers", cta: "View archive" },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Admin dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">Manage content, imports and the tutor's learning loop.</p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Subjects", value: stats.subjectCount },
          { label: "Questions", value: stats.questionCount },
          { label: "Papers imported", value: stats.paperCount },
          { label: "Students", value: stats.studentCount },
        ].map((s) => (
          <div key={s.label} className="card p-5 text-center">
            <div className="text-3xl font-bold text-brand-700">{s.value}</div>
            <div className="mt-1 text-sm text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <Link key={c.href} to={c.href} className="card group p-6 transition hover:shadow-md">
            <c.icon className="mb-3 h-6 w-6 text-brand-600" />
            <h2 className="font-bold text-slate-900">{c.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{c.desc}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-brand-600 group-hover:underline">{c.cta} →</span>
          </Link>
        ))}
      </div>

      <div className="card mt-6 flex items-center gap-4 p-6">
        <BookOpen className="h-6 w-6 text-brand-600" />
        <div>
          <h2 className="font-bold text-slate-900">Grow the question bank</h2>
          <p className="text-sm text-slate-500">
            Questions live in the database. Use Prisma Studio for advanced editing:{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">npm run db:studio</code>
          </p>
        </div>
      </div>
    </div>
  );
}
