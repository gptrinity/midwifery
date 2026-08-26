import { useCallback, useEffect, useRef, useState } from "react";
import { Bot, Send, Plus, ThumbsUp, ThumbsDown, Loader2, User } from "lucide-react";
import { api } from "@/lib/api";

type Msg = {
  id: string;
  role: "USER" | "AI";
  content: string;
  rating: number | null;
  feedback: string;
};

type Session = {
  id: string;
  title: string;
  createdAt: string;
  _count?: { messages: number };
};

type Subject = { id: string; name: string };

export default function TutorChat({ subjects, configured }: { subjects: Subject[]; configured: boolean }) {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [subjectId, setSubjectId] = useState("");
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [streamText, setStreamText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [feedbackOpen, setFeedbackOpen] = useState<string | null>(null);
  const [feedbackText, setFeedbackText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.tutorSessions();
        setSessions(data.sessions || []);
        if (data.sessions?.length) {
          setActiveId(data.sessions[0].id);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!activeId) return;
    (async () => {
      const data = await api.tutorMessages(activeId);
      setMessages(data.messages || []);
    })();
  }, [activeId]);

  useEffect(() => {
    scrollBottom();
  }, [messages, streamText, scrollBottom]);

  async function newSession() {
    const data = await api.createTutorSession(subjectId || undefined);
    setSessions((s) => [data.session, ...s]);
    setActiveId(data.session.id);
    setMessages([]);
  }

  async function send() {
    const text = input.trim();
    if (!text || streaming) return;
    setInput("");
    setError("");
    setStreaming(true);
    setStreamText("");

    setMessages((m) => [...m, { id: `tmp-${Date.now()}`, role: "USER", content: text, rating: null, feedback: "" }]);

    try {
      const res = await fetch("/api/tutor/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: activeId, message: text, subjectId }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Chat failed");
        setStreaming(false);
        return;
      }

      if (!res.body) throw new Error("No stream");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setStreamText(acc);
      }

      const marker = "__MW_SESSION__";
      const idx = acc.lastIndexOf(marker);
      let finalText = acc;
      if (idx !== -1) {
        finalText = acc.slice(0, idx);
        const sid = acc.slice(idx + marker.length).trim();
        if (sid && !activeId) setActiveId(sid);
      }

      setStreamText("");
      setMessages((m) => [
        ...m,
        { id: `ai-${Date.now()}`, role: "AI", content: finalText, rating: null, feedback: "" },
      ]);

      const sd = await api.tutorSessions();
      setSessions(sd.sessions || []);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setStreaming(false);
    }
  }

  async function rate(msgId: string, rating: number) {
    await api.rateMessage(msgId, rating);
    setMessages((m) => m.map((x) => (x.id === msgId ? { ...x, rating } : x)));
    if (rating <= 2) setFeedbackOpen(msgId);
  }

  async function submitFeedback(msgId: string) {
    await api.rateMessage(msgId, 2, feedbackText);
    setMessages((m) => m.map((x) => (x.id === msgId ? { ...x, feedback: feedbackText } : x)));
    setFeedbackOpen(null);
    setFeedbackText("");
  }

  if (loading) {
    return <div className="card p-10 text-center text-slate-500">Loading sessions…</div>;
  }

  if (!configured) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="card p-8 text-center">
          <Bot className="mx-auto mb-3 h-10 w-10 text-brand-600" />
          <h1 className="text-xl font-bold text-slate-900">The AI tutor is asleep…</h1>
          <p className="mt-2 text-sm text-slate-600">
            Add your <code className="rounded bg-slate-100 px-1.5 py-0.5">OPENAI_API_KEY</code> to the{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5">.env</code> file, restart the site, and the tutor
            will wake up. Everything else works without it.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-190px)] min-h-[480px] gap-4">
      <aside className="hidden w-72 shrink-0 flex-col gap-3 md:flex">
        <div className="card p-3">
          <label className="label">Tutor focus subject</label>
          <select className="input" value={subjectId} onChange={(e) => setSubjectId(e.target.value)}>
            <option value="">Everything (all subjects)</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>
        <button className="btn-primary w-full justify-center" onClick={newSession}>
          <Plus size={15} /> New session
        </button>
        <div className="card flex-1 overflow-y-auto p-2">
          {sessions.length === 0 && <p className="p-3 text-sm text-slate-400">No sessions yet.</p>}
          {sessions.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`mb-1 w-full rounded-xl px-3 py-2 text-left text-sm transition ${
                activeId === s.id ? "bg-brand-50 text-brand-800" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <p className="truncate font-medium">{s.title}</p>
              <p className="text-xs text-slate-400">{s._count?.messages || 0} messages</p>
            </button>
          ))}
        </div>
      </aside>

      <div className="card flex flex-1 flex-col overflow-hidden">
        {error && (
          <div className="border-b border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-700">{error}</div>
        )}
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {messages.length === 0 && !streaming && (
            <div className="flex h-full flex-col items-center justify-center text-center text-slate-400">
              <Bot className="mb-2 h-10 w-10" />
              <p className="max-w-sm text-sm">
                Ask MamaWise anything about midwifery or nursing — anatomy, a complicated labor, an essay question,
                exam technique. The tutor grounds answers in your question bank and learns from your feedback.
              </p>
            </div>
          )}

          {messages.map((m) => (
            <div key={m.id} className={`flex gap-3 ${m.role === "USER" ? "justify-end" : "justify-start"}`}>
              {m.role === "AI" && (
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Bot size={16} />
                </span>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  m.role === "USER"
                    ? "rounded-br-sm bg-brand-600 text-white"
                    : "rounded-bl-sm border border-slate-200 bg-white"
                }`}
              >
                <div className={`prose-mw ${m.role === "USER" ? "text-sm text-white" : ""}`}>
                  {m.content.split("\n").map((line, i) => (
                    <p key={i} className={m.role === "USER" ? "text-white" : ""}>{line}</p>
                  ))}
                </div>

                {m.role === "AI" && (
                  <div className="mt-2 flex items-center gap-1.5">
                    {m.rating ? (
                      <span className="text-xs font-semibold text-slate-400">
                        {m.rating >= 4 ? "Thanks! This helps the tutor learn." : "Feedback noted — an admin will review."}
                      </span>
                    ) : (
                      <>
                        <button
                          onClick={() => rate(m.id, 5)}
                          className="rounded-lg border border-slate-200 p-1.5 text-slate-400 transition hover:border-emerald-300 hover:text-emerald-600"
                          title="Helpful"
                        >
                          <ThumbsUp size={13} />
                        </button>
                        <button
                          onClick={() => rate(m.id, 1)}
                          className="rounded-lg border border-slate-200 p-1.5 text-slate-400 transition hover:border-rose-300 hover:text-rose-600"
                          title="Not helpful"
                        >
                          <ThumbsDown size={13} />
                        </button>
                      </>
                    )}
                  </div>
                )}

                {feedbackOpen === m.id && (
                  <div className="mt-2 flex gap-2">
                    <input
                      className="input !py-1.5 text-sm"
                      placeholder="What was wrong or missing?"
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                    />
                    <button className="btn-primary !px-3 !py-1.5 text-xs" onClick={() => submitFeedback(m.id)}>
                      Send
                    </button>
                  </div>
                )}
              </div>
              {m.role === "USER" && (
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                  <User size={16} />
                </span>
              )}
            </div>
          ))}

          {streaming && (
            <div className="flex gap-3 justify-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <Bot size={16} />
              </span>
              <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-4 py-3">
                <div className="prose-mw">{streamText}</div>
                {!streamText && <Loader2 className="animate-spin text-brand-600" size={16} />}
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="border-t border-slate-200 p-3">
          <div className="flex gap-2">
            <textarea
              className="input min-h-[44px] resize-none"
              placeholder="Ask about any midwifery or nursing topic…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
            />
            <button className="btn-primary !rounded-xl" onClick={send} disabled={streaming || !input.trim()}>
              {streaming ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
            </button>
          </div>
          <p className="mt-1.5 text-[11px] text-slate-400">
            The tutor remembers this session and improves from your 👍/👎 ratings.
          </p>
        </div>
      </div>
    </div>
  );
}
