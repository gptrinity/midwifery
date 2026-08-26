import { useState } from "react";
import { Upload, Loader2, CheckCircle2 } from "lucide-react";
import { api } from "@/lib/api";

type Subject = { id: string; name: string };

export default function ImportForm({ subjects }: { subjects: Subject[] }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [level, setLevel] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; error?: string; chars?: number; preview?: string; paper?: { title: string } }>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setResult(null);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("title", title);
    fd.append("subject", subject);
    fd.append("year", year);
    fd.append("level", level);
    try {
      const data = await api.importPaper(fd);
      setResult({ ...data, ok: true });
      if (data.ok) {
        setTitle(""); setYear(""); setLevel(""); setFile(null);
      }
    } catch (e) {
      setResult({ ok: false, error: (e as Error).message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form onSubmit={onSubmit} className="card p-6">
        <div className="space-y-4">
          <div>
            <label className="label">File *</label>
            <input
              type="file"
              accept=".pdf,.docx,.xlsx,.xls,.txt,.md"
              required
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="block w-full text-sm text-slate-500 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100"
            />
            <p className="mt-1 text-xs text-slate-400">PDF, Word, Excel or plain text. Scanned PDFs need OCR.</p>
          </div>
          <div>
            <label className="label">Title (optional)</label>
            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Normal Midwifery 2019" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="label">Subject</label>
              <select className="input" value={subject} onChange={(e) => setSubject(e.target.value)}>
                <option value="">Unspecified</option>
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Year</label>
              <input className="input" value={year} onChange={(e) => setYear(e.target.value)} placeholder="2019" />
            </div>
            <div>
              <label className="label">Level</label>
              <select className="input" value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="">Any</option>
                <option>NEWBIE</option>
                <option>INTERMEDIATE</option>
                <option>ADVANCED</option>
                <option>PROFESSIONAL</option>
              </select>
            </div>
          </div>
          <button className="btn-primary w-full justify-center" disabled={loading || !file}>
            {loading ? <Loader2 className="animate-spin" size={16} /> : <Upload size={16} />}
            {loading ? "Extracting text…" : "Import paper"}
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {result && (
          <div className={`card p-5 ${result.ok ? "border-emerald-200" : "border-rose-200"}`}>
            <div className="flex items-center gap-2 font-bold text-slate-900">
              {result.ok ? <CheckCircle2 className="text-emerald-600" size={20} /> : null}
              {result.ok ? "Paper imported" : "Import failed"}
            </div>
            {result.error && <p className="mt-1 text-sm text-rose-600">{result.error}</p>}
            {result.ok && result.chars !== undefined && (
              <>
                <p className="mt-1 text-sm text-slate-600">
                  <strong>{result.paper?.title}</strong> · {result.chars.toLocaleString()} characters extracted.
                </p>
                <pre className="mt-3 max-h-64 overflow-y-auto whitespace-pre-wrap rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
                  {result.preview}
                </pre>
              </>
            )}
          </div>
        )}

        <div className="card p-5 text-sm text-slate-600">
          <h3 className="font-bold text-slate-900">Tips for good imports</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Use the text-layer PDFs (digitally generated), not scanned images.</li>
            <li>One paper per file works best for filtering by year.</li>
            <li>Set subject + year to make the archive filterable.</li>
            <li>After import, the paper appears instantly in the archive.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
