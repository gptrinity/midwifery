import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import ImportForm from "@/components/ImportForm";

export default function AdminImport() {
  const [subjects, setSubjects] = useState<any[]>([]);

  useEffect(() => {
    api.subjects().then((d) => setSubjects(d.subjects)).catch(() => {});
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Import a past paper</h1>
        <p className="mt-1 text-sm text-slate-500">
          Upload your real past exam papers (PDF, DOCX, XLSX, TXT). The text is extracted automatically.
        </p>
      </div>
      <ImportForm subjects={subjects} />
    </div>
  );
}
