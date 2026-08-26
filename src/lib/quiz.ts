import { prisma } from "@/lib/prisma";
import { shuffle } from "@/lib/constants";

export type QuizQuestion = {
  id: string;
  subjectId: string;
  text: string;
  type: string;
  level: string;
  options: string[];
  correctIndex: number | null;
  answer: string;
  marks: number;
  subjectName: string;
};

export type QuizOptions = {
  subjectId?: string;
  topicId?: string;
  level?: string;
  type?: string;
  count: number;
};

export async function selectQuestions(opts: QuizOptions): Promise<QuizQuestion[]> {
  const where: Record<string, unknown> = {};
  if (opts.subjectId) where.subjectId = opts.subjectId;
  if (opts.topicId) where.topicId = opts.topicId;
  if (opts.level) where.level = opts.level;
  if (opts.type) where.type = opts.type;

  const rows = await prisma.question.findMany({
    where,
    include: { subject: { select: { name: true } } },
  });

  const questions = shuffle(rows).slice(0, Math.min(opts.count, rows.length)).map((q) => {
    let options: string[] = [];
    try {
      options = JSON.parse(q.options);
    } catch {
      options = [];
    }
    return {
      id: q.id,
      subjectId: q.subjectId,
      text: q.text,
      type: q.type,
      level: q.level,
      options,
      correctIndex: q.correctIndex,
      answer: q.answer,
      marks: q.marks,
      subjectName: q.subject.name,
    };
  });

  return questions;
}