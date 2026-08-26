import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import PracticeSetup from "@/components/PracticeSetup";

export default function Practice() {
  const [subjects, setSubjects] = useState<any[]>([]);

  useEffect(() => {
    api.subjects().then((d) => setSubjects(d.subjects)).catch(() => {});
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Practice</h1>
        <p className="mt-1 text-sm text-slate-500">
          Drill down by subject, topic and level for instant, exam-style feedback.
        </p>
      </div>
      <PracticeSetup subjects={subjects} mode="PRACTICE" />
    </div>
  );
}
