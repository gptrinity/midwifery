import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { FileText, Upload } from "lucide-react";

export default async function PapersPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string; year?: string }>;
}) {
  const sp = await searchParams;
  const subjects = await prisma.subject.findMany({ orderBy: { order: "asc" }, select: { id: true, name: true } });

  const where: Record<string, unknown> = {};
  if (sp.subject) where.subjectId = sp.subject;
  if (sp.year) where.year = sp.year;

  const papers = await prisma.paper.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  const years = await prisma.paper.findMany({ distinct: ["year"], select: { year: true }, orderBy: { year: "desc" } });

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Past papers archive</h1>
          <p className="mt-1 text-sm text-slate-500">
            Imported past exam papers, filterable by subject and year. New papers are added by administrators
            through the import tool.
          </p>
        </div>
        <Link href="/admin/import" className="btn-primary">
          <Upload size={15} />
          Import a paper
        </Link>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        <form className="flex flex-wrap gap-3" action="/papers">
          <select name="subject" className="input !w-auto">
            <option value="">All subjects</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.id} selected={sp.subject === s.id}>
                {s.name}
              </option>
            ))}
          </select>
          <select name="year" className="input !w-auto">
            <option value="">All years</option>
            {years.map((y) => (
              <option key={y.year} value={y.year} selected={sp.year === y.year}>
                {y.year}
              </option>
            ))}
          </select>
          <button className="btn-secondary">Filter</button>
          <a href="/papers" className="btn-secondary">Clear</a>
        </form>
      </div>

      {papers.length === 0 ? (
        <div className="card p-10 text-center">
          <FileText className="mx-auto mb-3 text-slate-300" size={32} />
          <p className="text-slate-500">
            No papers imported yet. The archive is ready — papers can be uploaded by an administrator from the
            import page.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {papers.map((p) => (
            <div key={p.id} className="card p-5">
              <div className="flex items-start justify-between">
                <FileText className="text-brand-600" size={20} />
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
                  {p.fileType}
                </span>
              </div>
              <h2 className="mt-3 font-semibold text-slate-900">{p.title}</h2>
              <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-500">
                {p.subjectId && <span>{subjects.find((s) => s.id === p.subjectId)?.name}</span>}
                {p.year && <span>· {p.year}</span>}
                {p.level && <span>· {p.level}</span>}
              </div>
              <details className="mt-3">
                <summary className="cursor-pointer text-sm font-semibold text-brand-600 hover:underline">
                  View extracted text
                </summary>
                <pre className="mt-2 max-h-64 overflow-y-auto whitespace-pre-wrap rounded-xl bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">
                  {p.content.slice(0, 5000) || "No text extracted."}
                </pre>
              </details>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}