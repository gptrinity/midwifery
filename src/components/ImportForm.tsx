import { useState } from "react";
import { Upload, Loader2, CheckCircle2, Trash2, Save } from "lucide-react";
import { api } from "@/lib/api";

type Subject = { id: string; name: string };

type ParsedQ = {
  text: string;
  type: string;
  options: string[];
  correctIndex: number | null;
  answer: string;
  year: string;
  subjectId: string | null;
};

export default function ImportForm({ subjects }: { subjects: Subject[] }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [level, setLevel] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    ok: boolean;
    error?: string;
    chars?: number;
    preview?: string;
    paper?: { id: string; title: string };
    parsedCount?: number;
    parsedQuestions?: ParsedQ[];
  }>(null);
  const [questions, setQuestions] = useState<ParsedQ[]>([]);
  const [paperId, setPaperId] = useState<string>("");
  const [committing, setCommitting] = useState(false);
  const [commitResult, setCommitResult] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setResult(null);
    setQuestions([]);
    setCommitResult("");
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
        setQuestions(data.parsedQuestions || []);
        setPaperId(data.paper.id);
      }
    } catch (e) {
      setResult({ ok: false, error: (e as Error).message });
    } finally {
      setLoading(false);
    }
  }

  function updateQuestion(idx: number, field: keyof ParsedQ, value: any) {
    setQuestions((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: value };
      return next;
    });
  }

  function removeQuestion(idx: number) {
    setQuestions((prev) => prev.filter((_, i) => i !== idx));
  }

  async function commitQuestions() {
    if (!paperId || questions.length === 0) return;
    setCommitting(true);
    setCommitResult("");
    try {
      // Update each pending question on the server
      for (let i = 0; i < questions.length; i++) {
        await api.updatePendingQuestion(paperId, i, questions[i]);
      }
      const data = await api.commitPaper(paperId);
      setCommitResult(`Successfully committed ${data.created} questions to the question bank!`);
      setQuestions([]);
      setPaperId("");
    } catch (e) {
      setCommitResult(`Error: ${(e as Error).message}`);
    } finally {
      setCommitting(false);
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
            {loading ? "Extracting text..." : "Import & parse paper"}
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
              <p className="mt-1 text-sm text-slate-600">
                <strong>{result.paper?.title}</strong> - {result.chars.toLocaleString()} characters extracted.
                {result.parsedCount !== undefined && (
                  <span className="ml-2 font-semibold text-brand-700">{result.parsedCount} MCQs auto-detected</span>
                )}
              </p>
            )}
          </div>
        )}

        {commitResult && (
          <div className={`card p-4 ${commitResult.startsWith("Error") ? "border-rose-200 text-rose-700" : "border-emerald-200 text-emerald-700"}`}>
            {commitResult}
          </div>
        )}

        {questions.length > 0 && (
          <div className="card p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Parsed Questions ({questions.length})</h3>
              <button
                className="btn-primary flex items-center gap-1"
                onClick={commitQuestions}
                disabled={committing}
              >
                {committing ? <Loader2 className="animate-spin" size={14} /> : <Save size={14} />}
                {committing ? "Saving..." : `Commit ${questions.length} questions`}
              </button>
            </div>
            <p className="mt-1 text-xs text-slate-500">Review and edit before committing to the question bank.</p>
            <div className="mt-4 max-h-[500px] space-y-3 overflow-y-auto">
              {questions.map((q, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <input
                        className="mb-2 w-full rounded-lg border border-slate-200 px-2 py-1 text-sm font-medium"
                        value={q.text}
                        onChange={(e) => updateQuestion(idx, "text", e.target.value)}
                      />
                      {q.options.map((opt, oi) => (
                        <div key={oi} className="ml-2 flex items-center gap-1 text-xs">
                          <span className="font-semibold text-slate-400">{String.fromCharCode(65 + oi)}.</span>
                          <input
                            className={`flex-1 rounded border px-1 py-0.5 ${
                              q.correctIndex === oi ? "border-emerald-300 bg-emerald-50" : "border-slate-200"
                            }`}
                            value={opt}
                            onChange={(e) => {
                              const newOpts = [...q.options];
                              newOpts[oi] = e.target.value;
                              updateQuestion(idx, "options", newOpts);
                            }}
                          />
                          <button
                            className={`rounded px-1 text-xs font-bold ${
                              q.correctIndex === oi ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-400"
                            }`}
                            onClick={() => updateQuestion(idx, "correctIndex", q.correctIndex === oi ? null : oi)}
                          >
                            {q.correctIndex === oi ? "OK" : "set"}
                          </button>
                        </div>
                      ))}
                    </div>
                    <button className="shrink-0 text-slate-400 hover:text-rose-600" onClick={() => removeQuestion(idx)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="card p-5 text-sm text-slate-600">
          <h3 className="font-bold text-slate-900">How it works</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>The parser auto-detects MCQs (numbered questions with A/B/C/D options).</li>
            <li>It also detects answer keys at the bottom of the paper.</li>
            <li>Review and correct any parsed questions before committing.</li>
            <li>Committed questions are added to the question bank with source "past-paper".</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
