import OpenAI from "openai";
import { prisma } from "../index.js";

export const AI_PROVIDER = process.env.AI_PROVIDER || "deepseek";

function client(): OpenAI {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "missing-key",
    baseURL: process.env.OPENAI_BASE_URL || undefined,
  });
}

export function aiConfigured(): boolean {
  return Boolean(process.env.OPENAI_API_KEY);
}

export const CHAT_MODEL = process.env.CHAT_MODEL || "deepseek-chat";

export type ChatMsg = { role: "system" | "user" | "assistant"; content: string };

export function sanitizeMessages(messages: ChatMsg[]): ChatMsg[] {
  const merged: ChatMsg[] = [];
  for (const m of messages) {
    const last = merged[merged.length - 1];
    if (last && last.role === m.role) {
      merged[merged.length - 1] = { role: last.role, content: `${last.content}\n\n${m.content}` };
    } else {
      merged.push({ role: m.role, content: m.content });
    }
  }
  while (merged.length && merged[merged.length - 1].role === "assistant") merged.pop();
  if (!merged.length || merged[merged.length - 1].role !== "user") {
    merged.push({ role: "user", content: "Please continue." });
  }
  return merged;
}

export const SYSTEM_PROMPT = `You are 'MamaWise', a warm, expert teaching tutor for midwifery and nursing.
Your knowledge covers ALL of midwifery and nursing: foundation of midwifery, applied anatomy & physiology,
normal midwifery, complicated midwifery, community midwifery, psychology in midwifery, infant/newborn care,
medical-surgical nursing, pharmacology, research, leadership, and professional exams from beginner to advanced.

Guidelines:
- Teach in clear, structured, exam-focused ways. Use headings, bullets and clinical reasoning.
- If the user asks a question from the provided study context, ground your answer in it.
- Always encourage the student: show the reasoning, give mnemonics, and suggest follow-up questions.
- If asked something outside midwifery/nursing, politely steer back to the profession.
- For exam-style questions, give the answer with a short explanation and mark value.
- Be concise but thorough. Use markdown for readability.
- If you cannot answer a question confidently, say so honestly and recommend a source.`;

export async function streamChat(messages: ChatMsg[]): Promise<ReadableStream<Uint8Array>> {
  const stream = await client().chat.completions.create({
    model: CHAT_MODEL,
    messages: sanitizeMessages(messages),
    stream: true,
  });

  const encoder = new TextEncoder();
  return new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const delta = chunk.choices?.[0]?.delta?.content;
          if (delta) controller.enqueue(encoder.encode(delta));
        }
      } catch (e) {
        controller.enqueue(encoder.encode(`\n\n[Error: ${(e as Error).message}]`));
      } finally {
        controller.close();
      }
    },
  });
}

const STOPWORDS = new Set(["what", "which", "where", "when", "there", "about", "could", "would", "should", "explain", "define", "state", "list", "give", "tell", "please"]);

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

export type RetrievedContext = {
  subject?: { id: string; name: string; slug: string };
  topics: { id: string; name: string; summary: string }[];
  questions: { text: string; type: string; level: string; answer: string; options: string; correctIndex: number | null; subjectName: string }[];
};

export async function retrieveContext(query: string, subjectId?: string | null): Promise<RetrievedContext> {
  const tokens = query
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3 && !STOPWORDS.has(w));

  const where: Record<string, unknown> = {};
  if (subjectId) where.subjectId = subjectId;

  const questions = await prisma.question.findMany({
    where,
    include: { subject: { select: { name: true } } },
    take: 600,
  });

  const scored = questions
    .map((q) => {
      const hay = `${q.text} ${q.answer}`.toLowerCase();
      let score = 0;
      for (const t of tokens) if (hay.includes(t)) score++;
      return { q, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  const [topics, subject] = await Promise.all([
    subjectId
      ? prisma.topic.findMany({ where: { subjectId } }).then((ts) =>
          ts
            .filter((t) => {
              const hay = `${t.name} ${t.summary}`.toLowerCase();
              return tokens.some((tok) => hay.includes(tok));
            })
            .slice(0, 4)
        )
      : Promise.resolve([]),
    subjectId ? prisma.subject.findUnique({ where: { id: subjectId } }) : Promise.resolve(null),
  ]);

  return {
    subject: subject ? { id: subject.id, name: subject.name, slug: subject.slug } : undefined,
    topics,
    questions: scored.map((x) => ({
      text: truncate(x.q.text, 500),
      type: x.q.type,
      level: x.q.level,
      answer: truncate(x.q.answer, 400),
      options: truncate(x.q.options, 400),
      correctIndex: x.q.correctIndex,
      subjectName: x.q.subject.name,
    })),
  };
}

export function contextToPrompt(ctx: RetrievedContext, userQuery: string): ChatMsg[] {
  const parts: string[] = [];
  if (ctx.subject) parts.push(`Subject: ${ctx.subject.name}`);

  if (ctx.topics.length) {
    parts.push("\nRELEVANT STUDY NOTES:");
    for (const t of ctx.topics) parts.push(`- ${t.name}: ${t.summary}`);
  }

  if (ctx.questions.length) {
    parts.push("\nRELEVANT BANKED QUESTIONS (use as grounding for exam-focused answers):");
    for (const q of ctx.questions) {
      let opts = "";
      if (q.type === "MCQ" && q.options) {
        try {
          const arr = JSON.parse(q.options);
          opts = arr.map((o: string, i: number) => `${i === q.correctIndex ? "*" : ""}${o}`).join(" | ");
        } catch {
          opts = "";
        }
      }
      parts.push(`Q(${q.level}/${q.type}): ${q.text}${opts ? ` Options: ${opts}` : ""} ${q.answer ? `Model answer: ${q.answer}` : ""}`);
    }
  }

  const messages: ChatMsg[] = [
    { role: "system", content: SYSTEM_PROMPT },
  ];
  if (parts.length > 1) {
    messages.push({ role: "system", content: `STUDY CONTEXT:\n${parts.join("\n")}` });
  }
  messages.push({ role: "user", content: userQuery });
  return messages;
}
