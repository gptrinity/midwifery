import { useState } from "react";
import { Check, Eye, EyeOff } from "lucide-react";
import { levelColor, LEVEL_LABEL, typeLabel } from "@/lib/constants";

type Props = {
  id: string;
  text: string;
  type: string;
  level: string;
  options: string[];
  correctIndex: number | null;
  answer: string;
  marks: number;
};

export default function QuestionItem({ text, type, level, options, correctIndex, answer, marks }: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="card p-5">
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
        <span className={`rounded-full px-2 py-0.5 font-semibold ${levelColor(level)}`}>
          {LEVEL_LABEL[level] || level}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-500">{typeLabel(type)}</span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-500">{marks} marks</span>
      </div>

      <p className="font-medium text-slate-900">{text}</p>

      {type === "MCQ" && (
        <ul className="mt-3 space-y-1.5">
          {options.map((o, i) => (
            <li
              key={i}
              className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-sm ${
                revealed && i === correctIndex
                  ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                  : "border-slate-200 bg-slate-50 text-slate-700"
              }`}
            >
              <span className="font-semibold text-slate-400">{String.fromCharCode(65 + i)}.</span>
              <span>{o}</span>
              {revealed && i === correctIndex && <Check className="ml-auto mt-0.5 text-emerald-600" size={16} />}
            </li>
          ))}
        </ul>
      )}

      {revealed && answer && (
        <div className="mt-4 rounded-xl bg-brand-50 p-3 text-sm leading-relaxed text-brand-900">
          <strong>Model answer:</strong> {answer}
        </div>
      )}

      <button
        onClick={() => setRevealed((v) => !v)}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline"
      >
        {revealed ? (
          <>
            <EyeOff size={14} /> Hide answer
          </>
        ) : (
          <>
            <Eye size={14} /> Reveal answer
          </>
        )}
      </button>
    </div>
  );
}
