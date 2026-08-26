import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Upload, Inbox, FileText, Database, BookOpen } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [subjectCount, questionCount, paperCount, openMisses, studentCount] = await Promise.all([
    prisma.subject.count(),
    prisma.question.count(),
    prisma.paper.count(),
    prisma.missedQuery.count({ where: { status: "OPEN" } }),
    prisma.user.count({ where: { role: "STUDENT" } }),
  ]);

  const cards = [
    {
      title: "Import a past paper",
      desc: "Upload PDF, Word, Excel or text files. Text is extracted automatically and added to the archive.",
      icon: Upload,
      href: "/admin/import",
      cta: "Go to importer",
    },
    {
      title: `Review AI misses (${openMisses})`,
      desc: "Questions the tutor couldn't answer well, or students rated poorly. Convert them into study content.",
      icon: Inbox,
      href: "/admin/misses",
      cta: "Open the queue",
    },
    {
      title: "View the paper archive",
      desc: `${paperCount} papers currently in the archive.`,
      icon: FileText,
      href: "/papers",
      cta: "View archive",
    },
  ];

  const stats = [
    { label: "Subjects", value: subjectCount },
    { label: "Questions", value: questionCount },
    { label: "Papers imported", value: paperCount },
    { label: "Students", value: studentCount },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Admin dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">Manage content, imports and the tutor's learning loop.</p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card p-5 text-center">
            <div className="text-3xl font-bold text-brand-700">{s.value}</div>
            <div className="mt-1 text-sm text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <Link key={c.href} href={c.href} className="card group p-6 transition hover:shadow-md">
            <c.icon className="mb-3 h-6 w-6 text-brand-600" />
            <h2 className="font-bold text-slate-900">{c.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{c.desc}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-brand-600 group-hover:underline">
              {c.cta} →
            </span>
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