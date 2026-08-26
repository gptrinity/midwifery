import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import TutorChat from "@/components/TutorChat";

export default function Tutor() {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [configured, setConfigured] = useState(false);

  useEffect(() => {
    api.subjects().then((d) => setSubjects(d.subjects)).catch(() => {});
    fetch("/api/ai/configured").then((r) => r.json()).then((d) => setConfigured(d.configured)).catch(() => {});
  }, []);

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900">AI Tutor — MamaWise</h1>
        <p className="mt-1 text-sm text-slate-500">
          A teaching tutor for all of midwifery and nursing. Grounds answers in the question bank, remembers your
          sessions, and improves from your feedback.
        </p>
      </div>
      <TutorChat subjects={subjects} configured={configured} />
    </div>
  );
}
