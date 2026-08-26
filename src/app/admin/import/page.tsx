import { prisma } from "@/lib/prisma";
import ImportForm from "@/components/ImportForm";

export const dynamic = "force-dynamic";

export default async function AdminImportPage() {
  const subjects = await prisma.subject.findMany({ orderBy: { order: "asc" }, select: { id: true, name: true } });
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Import a past paper</h1>
        <p className="mt-1 text-sm text-slate-500">
          Upload your real past exam papers (PDF, DOCX, XLSX, TXT). The text is extracted automatically and added to
          the archive, filterable by subject, level and year.
        </p>
      </div>
      <ImportForm subjects={subjects} />
    </div>
  );
}