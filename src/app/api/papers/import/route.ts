import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user || user.role !== "ADMIN") return NextResponse.json({ error: "Admins only" }, { status: 403 });

  try {
    const form = await request.formData();
    const file = form.get("file") as File | null;
    const subjectId = (form.get("subject") as string) || null;
    const year = (form.get("year") as string) || "";
    const level = (form.get("level") as string) || "";
    const title = (form.get("title") as string) || "";

    if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

    const bytes = Buffer.from(await file.arrayBuffer());
    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    let content = "";

    if (ext === "txt" || ext === "md") {
      content = bytes.toString("utf8");
    } else if (ext === "pdf") {
      const pdfModule = (await import("pdf-parse")) as unknown as { default?: (b: Buffer) => Promise<{ text: string }> };
      const pdfParse = pdfModule.default || (pdfModule as unknown as (b: Buffer) => Promise<{ text: string }>);
      const parsed = await pdfParse(bytes);
      content = parsed.text || "";
    } else if (ext === "docx") {
      const mammoth = await import("mammoth");
      const result = await mammoth.extractRawText({ buffer: bytes as unknown as Buffer });
      content = result.value || "";
    } else if (ext === "xlsx" || ext === "xls") {
      const XLSX = await import("xlsx");
      const wb = XLSX.read(bytes, { type: "buffer" });
      const sheets = wb.SheetNames.map((n) => {
        const rows = XLSX.utils.sheet_to_json(wb.Sheets[n], { header: 1 }) as unknown[][];
        return rows.map((r) => r.join("\t")).join("\n");
      });
      content = sheets.join("\n\n--- SHEET ---\n\n");
    } else {
      return NextResponse.json({ error: "Unsupported file type. Use PDF, DOCX, XLSX, TXT." }, { status: 400 });
    }

    if (!content.trim()) {
      return NextResponse.json(
        { error: "No readable text found in this file. Scanned PDFs need OCR first." },
        { status: 422 }
      );
    }

    const paper = await prisma.paper.create({
      data: {
        title: title || file.name.replace(/\.[^.]+$/, ""),
        subjectId,
        level,
        year,
        fileName: file.name,
        fileType: ext.toUpperCase(),
        content: content.slice(0, 200000),
        status: "IMPORTED",
      },
    });

    return NextResponse.json({
      ok: true,
      paper,
      chars: content.length,
      preview: content.slice(0, 500),
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}