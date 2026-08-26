import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FileText, Upload } from "lucide-react";
import { api } from "@/lib/api";

export default function Papers() {
  const [params, setParams] = useSearchParams();
  const [data, setData] = useState<any>(null);
  const [subject, setSubject] = useState(params.get("subject") || "");
  const [year, setYear] = useState(params.get("year") || "");

  useEffect(() => {
    const query: Record<string, string> = {};
    if (subject) query.subject = subject;
    if (year) query.year = year;
    api.papers(query).then(setData).catch(() => {});
  }, [subject, year]);

  function handleFilter(e: React.FormEvent) {
    e.preventDefault();
    const query: Record<string, string> = {};
    if (subject) query.subject = subject;
    if (year) query.year = year;
    setParams(query);
  }

  if (!data) return <div className="card p-10 text-center text-slate-400">Loading…</div>;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Past papers archive</h1>
          <p className="mt-1 text-sm text-slate-500">
            Imported past exam papers, filterable by subject and year.
          </p>
        </div>
        <Link to="/admin/import" className="btn-primary">
          <Upload size={15} />
          Import a paper
        </Link>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        <form className="flex flex-wrap gap-3" onSubmit={handleFilter}>
          <select className="input !w-auto" value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">All subjects</option>
            {data.subjects.map((s: any) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          <select className="input !w-auto" value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">All years</option>
            {data.years.map((y: any) => (
              <option key={y.year} value={y.year}>{y.year}</option>
            ))}
          </select>
          <button type="submit" className="btn-secondary">Filter</button>
          <button type="button" className="btn-secondary" onClick={() => { setSubject(""); setYear(""); }}>Clear</button>
        </form>
      </div>

      {data.papers.length === 0 ? (
        <div className="card p-10 text-center">
          <FileText className="mx-auto mb-3 text-slate-300" size={32} />
          <p className="text-slate-500">No papers imported yet.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.papers.map((p: any) => (
            <div key={p.id} className="card p-5">
              <div className="flex items-start justify-between">
                <FileText className="text-brand-600" size={20} />
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">{p.fileType}</span>
              </div>
              <h2 className="mt-3 font-semibold text-slate-900">{p.title}</h2>
              <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-500">
                {p.subjectId && <span>{data.subjects.find((s: any) => s.id === p.subjectId)?.name}</span>}
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
