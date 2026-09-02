import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { QuizQuestion } from "@/lib/constants";
import { LEVEL_LABEL, levelColor, typeLabel, formatDuration } from "@/lib/constants";
import { Check, X, ChevronRight, Flag, Loader2 } from "lucide-react";
import { api } from "@/lib/api";

type Props = {
  questions: QuizQuestion[];
  mode: "PRACTICE" | "EXAM";
  remaining?: number;
};

export default function QuizRunner({ questions, mode, remaining }: Props) {
  const router = useNavigate();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | string | null)[]>(Array(questions.length).fill(null));
  const [selfMarks, setSelfMarks] = useState<(boolean | null)[]>(Array(questions.length).fill(null));
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const startRef = useRef(Date.now());

  const examMinutes = mode === "EXAM" ? Math.max(1, Math.round(questions.length * 1.5)) : 0;

  useEffect(() => {
    if (mode !== "EXAM" || finished) return;
    const deadline = examMinutes * 60;
    const timer = setInterval(() => {
      const s = Math.floor((Date.now() - startRef.current) / 1000);
      setElapsed(s);
      if (s >= deadline) {
        setTimeUp(true);
        setFinished(true);
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [mode, finished, examMinutes]);

  if (!questions.length) {
    return (
      <div className="card p-8 text-center text-slate-500">
        No questions match those filters. Try widening the topic or level.
        <button className="btn-primary mt-4 mx-auto" onClick={() => router("/practice")}>
          Back to setup
        </button>
      </div>
    );
  }

  const q = questions[index];
  const isMCQ = q.type === "MCQ";
  const answer = answers[index];
  const answered = answer !== null;

  function selectOption(i: number) {
    if (mode === "EXAM") {
      const next = [...answers];
      next[index] = i;
      setAnswers(next);
    } else {
      const next = [...answers];
      next[index] = i;
      setAnswers(next);
      setRevealed(true);
    }
  }

  function setTextAnswer(v: string) {
    const next = [...answers];
    next[index] = v;
    setAnswers(next);
  }

  function selfAssess(ok: boolean) {
    const next = [...selfMarks];
    next[index] = ok;
    setSelfMarks(next);
    setRevealed(true);
  }

  function next() {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setRevealed(false);
    } else {
      finish();
    }
  }

  async function finish() {
    setSaving(true);
    const durationSec = Math.round((Date.now() - startRef.current) / 1000);

    let score = 0;
    questions.forEach((qq, i) => {
      const a = answers[i];
      if (qq.type === "MCQ" && typeof a === "number" && a === qq.correctIndex) score++;
      else if (qq.type !== "MCQ" && selfMarks[i] === true) score++;
    });

    const total = questions.length;

    try {
      await api.saveAttempt({
        mode,
        subjectId: questions[0]?.subjectId || null,
        level: q.level,
        score,
        total,
        durationSec,
        answers: JSON.stringify(
          questions.map((qq, i) => ({ qid: qq.id, answer: answers[i], selfMark: selfMarks[i] }))
        ),
        questionIds: questions.map((qq) => qq.id),
      });
    } catch {
      // ignore save errors
    }
    setSaving(false);
    setFinished(true);
  }

  if (finished) {
    let score = 0;
    questions.forEach((qq, i) => {
      const a = answers[i];
      if (qq.type === "MCQ" && typeof a === "number" && a === qq.correctIndex) score++;
      else if (qq.type !== "MCQ" && selfMarks[i] === true) score++;
    });
    const pct = Math.round((score / questions.length) * 100);
    const grade =
      pct >= 90 ? "Outstanding" : pct >= 75 ? "Excellent" : pct >= 60 ? "Good" : pct >= 50 ? "Pass" : "Keep practicing";

    return (
      <div className="mx-auto max-w-2xl">
        <div className="card p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            {timeUp ? "Time's up! " : ""}{mode === "EXAM" ? "Exam complete" : "Session complete"}
          </h2>
          <div className="mt-6 flex items-center justify-center gap-8">
            <div>
              <div className="text-4xl font-bold text-brand-700">
                {score}<span className="text-lg text-slate-400">/{questions.length}</span>
              </div>
              <div className="text-sm text-slate-500">correct</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-800">{pct}%</div>
              <div className="text-sm text-slate-500">score</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-800">{formatDuration(elapsed || Math.round((Date.now() - startRef.current) / 1000))}</div>
              <div className="text-sm text-slate-500">time</div>
            </div>
          </div>
          <div className="mt-4 text-lg font-semibold text-slate-700">Grade: {grade}</div>
          {remaining !== undefined && (
            <p className="mt-2 text-sm text-slate-500">
              {remaining > 0 ? `${remaining} unseen questions remaining in this pool` : "You've seen all questions — next session resets the pool"}
            </p>
          )}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button className="btn-primary" onClick={() => router("/practice")}>
              New practice session
            </button>
            <button className="btn-secondary" onClick={() => router("/progress")}>
              View progress
            </button>
            <button className="btn-secondary" onClick={() => router("/tutor")}>
              Ask the AI tutor about mistakes
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="font-bold text-slate-900">Review your answers</h3>
          {questions.map((qq, i) => {
            const a = answers[i];
            const correct =
              qq.type === "MCQ" ? typeof a === "number" && a === qq.correctIndex : selfMarks[i] === true;
            return (
              <div key={qq.id} className={`card p-4 ${correct ? "border-emerald-200" : "border-rose-200"}`}>
                <div className="flex items-start gap-2">
                  {correct ? (
                    <Check className="mt-0.5 shrink-0 text-emerald-600" size={18} />
                  ) : (
                    <X className="mt-0.5 shrink-0 text-rose-600" size={18} />
                  )}
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {i + 1}. {qq.text}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {qq.subjectName} · {typeLabel(qq.type)} · {LEVEL_LABEL[qq.level]}
                    </p>
                    {qq.type === "MCQ" && typeof a === "number" && (
                      <p className="mt-1 text-sm">
                        Your answer: <span className={a === qq.correctIndex ? "text-emerald-700" : "text-rose-700"}>{String.fromCharCode(65 + a)}</span>
                        {a !== qq.correctIndex && qq.correctIndex !== null && (
                          <span className="text-emerald-700"> · Correct: {String.fromCharCode(65 + qq.correctIndex)}</span>
                        )}
                      </p>
                    )}
                    {qq.type !== "MCQ" && a && (
                      <p className="mt-1 line-clamp-3 text-sm text-slate-600">Your answer: {String(a)}</p>
                    )}
                    {qq.answer && (
                      <p className="mt-2 rounded-lg bg-brand-50 p-2 text-sm leading-relaxed text-brand-900">
                        <strong>Model answer:</strong> {qq.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          {mode === "EXAM" ? (
            <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-800">
              {formatDuration(examMinutes * 60 - elapsed)}
            </span>
          ) : (
            <span className="rounded-full bg-brand-100 px-3 py-1 font-semibold text-brand-800">Practice mode</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-500">
            Question {index + 1} of {questions.length}
          </span>
          {answers.filter((a) => a !== null).length > 0 && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
              <Flag size={12} className="mr-1 inline" />
              {answers.filter((a) => a !== null).length} answered
            </span>
          )}
          {remaining !== undefined && remaining > 0 && (
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
              {remaining} unseen left
            </span>
          )}
        </div>
      </div>

      <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-brand-600 transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="card p-6">
        <div className="mb-2 flex flex-wrap gap-2 text-xs">
          <span className={`rounded-full px-2 py-0.5 font-semibold ${levelColor(q.level)}`}>
            {LEVEL_LABEL[q.level] || q.level}
          </span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-500">{typeLabel(q.type)}</span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-500">{q.marks} marks</span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-500">{q.subjectName}</span>
        </div>

        <h2 className="text-lg font-semibold text-slate-900">{q.text}</h2>

        {isMCQ ? (
          <ul className="mt-4 space-y-2">
            {q.options.map((o, i) => {
              const isSelected = answer === i;
              const showCorrect = (mode === "PRACTICE" && revealed) || (mode === "EXAM" && finished);
              return (
                <li key={i}>
                  <button
                    onClick={() => selectOption(i)}
                    disabled={mode === "PRACTICE" && revealed}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                      isSelected
                        ? "border-brand-500 bg-brand-50 text-brand-900"
                        : "border-slate-200 bg-white text-slate-700 hover:border-brand-300"
                    } ${showCorrect && i === q.correctIndex ? "!border-emerald-400 !bg-emerald-50" : ""} ${
                      showCorrect && isSelected && i !== q.correctIndex ? "!border-rose-400 !bg-rose-50" : ""
                    }`}
                  >
                    <span className="mr-2 font-semibold text-slate-400">{String.fromCharCode(65 + i)}.</span>
                    {o}
                    {showCorrect && i === q.correctIndex && <Check className="ml-2 inline text-emerald-600" size={15} />}
                    {showCorrect && isSelected && i !== q.correctIndex && <X className="ml-2 inline text-rose-600" size={15} />}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="mt-4">
            <textarea
              className="input min-h-[140px]"
              placeholder="Type your answer here..."
              value={typeof answer === "string" ? answer : ""}
              onChange={(e) => setTextAnswer(e.target.value)}
            />
            {mode === "PRACTICE" && (
              <div className="mt-3 flex gap-2">
                <button className="btn-primary" onClick={() => revealed ? undefined : setRevealed(true)} disabled={!answer}>
                  Show model answer
                </button>
                {revealed && (
                  <div className="flex gap-2">
                    <button className="btn-primary bg-emerald-600 hover:bg-emerald-700" onClick={() => selfAssess(true)}>
                      I got it
                    </button>
                    <button className="btn-secondary" onClick={() => selfAssess(false)}>
                      Not yet
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {mode === "PRACTICE" && revealed && q.answer && (
          <div className="mt-4 rounded-xl bg-brand-50 p-4 text-sm leading-relaxed text-brand-900">
            <strong>Model answer:</strong> {q.answer}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <button className="btn-secondary" onClick={() => setIndex(Math.max(0, index - 1))} disabled={index === 0}>
            Previous
          </button>
          {mode === "PRACTICE" ? (
            <button
              className="btn-primary"
              onClick={next}
              disabled={mode === "PRACTICE" ? !answered || !revealed : !answered}
            >
              {index === questions.length - 1 ? "Finish" : "Next"} <ChevronRight size={15} />
            </button>
          ) : (
            <button className="btn-primary" onClick={next} disabled={!answered}>
              {index === questions.length - 1 ? (saving ? <Loader2 className="animate-spin" size={15} /> : "Finish exam") : "Next"}{" "}
              <ChevronRight size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
