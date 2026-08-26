export const LEVELS = [
  { value: "NEWBIE", label: "Newbie", desc: "Foundation / first-year concepts", color: "bg-emerald-100 text-emerald-800" },
  { value: "INTERMEDIATE", label: "Intermediate", desc: "Mid-program application", color: "bg-sky-100 text-sky-800" },
  { value: "ADVANCED", label: "Advanced", desc: "Final-year analysis & management", color: "bg-amber-100 text-amber-800" },
  { value: "PROFESSIONAL", label: "Professional", desc: "Licensure & advanced exams", color: "bg-rose-100 text-rose-800" },
];

export const LEVEL_LABEL: Record<string, string> = Object.fromEntries(
  LEVELS.map((l) => [l.value, l.label])
);

export const TYPE_LABEL: Record<string, string> = {
  MCQ: "Multiple choice",
  SHORT: "Short answer",
  ESSAY: "Essay",
};

export function levelColor(level: string): string {
  return LEVELS.find((l) => l.value === level)?.color || "bg-gray-100 text-gray-800";
}

export function typeLabel(t: string): string {
  return TYPE_LABEL[t] || t;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function formatDuration(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}m ${s}s`;
}