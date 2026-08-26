import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import PracticeSetup from "@/components/PracticeSetup";

export default function Exams() {
  const [subjects, setSubjects] = useState<any[]>([]);

  useEffect(() => {
    api.subjects().then((d) => setSubjects(d.subjects)).catch(() => {});
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Mock exams</h1>
        <p className="mt-1 text-sm text-slate-500">
          Timed, full-paper style exams built from the question bank — just like your professional tests.
        </p>
      </div>
      <PracticeSetup subjects={subjects} mode="EXAM" />
    </div>
  );
}
