"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LEVELS } from "@/lib/constants";

type SubjectMeta = {
  id: string;
  name: string;
  topics: { id: string; name: string }[];
};

export default function PracticeSetup({ subjects, mode }: { subjects: SubjectMeta[]; mode: "PRACTICE" | "EXAM" }) {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");
  const [count, setCount] = useState(10);

  const topics = subject ? subjects.find((s) => s.id === subject)?.topics || [] : [];

  const isExam = mode === "EXAM";

  function start() {
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (topic) params.set("topic", topic);
    if (level) params.set("level", level);
    if (type) params.set("type", type);
    params.set("count", String(count));
    router.push(`/${isExam ? "exams" : "practice"}/run?${params.toString()}`);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="card p-6">
        <h2 className="text-lg font-bold text-slate-900">
          {isExam ? "Set up your mock exam" : "Set up a practice session"}
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          {isExam
            ? "A timed full-paper style exam. MCQs are auto-graded; short/essay answers are shown for review."
            : "Untimed questions with instant feedback after each answer."}
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label">Subject</label>
            <select className="input" value={subject} onChange={(e) => { setSubject(e.target.value); setTopic(""); }}>
              <option value="">All subjects</option>
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Topic</label>
            <select className="input" value={topic} onChange={(e) => setTopic(e.target.value)} disabled={!subject}>
              <option value="">All topics</option>
              {topics.map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Level</label>
            <select className="input" value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="">All levels</option>
              {LEVELS.map((l) => (
                <option key={l.value} value={l.value}>{l.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Question type</label>
            <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All types</option>
              <option value="MCQ">Multiple choice</option>
              <option value="SHORT">Short answer</option>
              <option value="ESSAY">Essay</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="label">Number of questions</label>
          <div className="flex gap-2">
            {[5, 10, 20, 30].map((n) => (
              <button
                key={n}
                onClick={() => setCount(n)}
                className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                  count === n ? "border-brand-500 bg-brand-50 text-brand-700" : "border-slate-200 text-slate-600 hover:border-brand-300"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <button className="btn-primary mt-6 w-full justify-center" onClick={start}>
          {isExam ? "Start mock exam" : "Start practicing"}
        </button>
      </div>
    </div>
  );
}