export type ParsedQuestion = {
  text: string;
  type: "MCQ" | "SHORT" | "ESSAY";
  level: string;
  options: string[];
  correctIndex: number | null;
  answer: string;
  marks: number;
  source: string;
  year: string;
};

// Normalize whitespace and line breaks
function normalize(text: string): string {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\t/g, " ")
    .replace(/[ ]{2,}/g, " ")
    .trim();
}

// Extract answer key from answer section lines
function extractAnswerKey(lines: string[]): Map<number, string> {
  const answerMap = new Map<number, string>();
  const answerSectionStart = lines.findIndex((l) =>
    /^(answers?|answer\s*key|key\s*answers?|model\s*answers?|solutions?)\s*[:.]/i.test(l.trim())
  );
  if (answerSectionStart === -1) return answerMap;

  const answerLines = lines.slice(answerSectionStart);
  for (const line of answerLines) {
    const m = line.match(/(\d+)\s*[.):]\s*([A-Ea-e])/);
    if (m) {
      answerMap.set(parseInt(m[1], 10), m[2].toUpperCase());
    }
  }
  return answerMap;
}

// Detect the correct answer from inline patterns like "Answer: A" or "Ans: (B)"
function detectInlineAnswer(text: string): string | null {
  const m = text.match(/(?:answer|ans|correct|key)\s*[:.\-]\s*\(?([A-Ea-e])\)?/i);
  if (m) return m[1].toUpperCase();
  return null;
}

// Parse MCQ block starting from a question number line
function parseMCQBlock(
  lines: string[],
  startIdx: number,
  answerMap: Map<number, string>,
  defaultLevel: string,
  year: string
): { question: ParsedQuestion; endIdx: number } | null {
  const qNumMatch = lines[startIdx].match(/^(\d+)\s*[.):]\s*(.+)/);
  if (!qNumMatch) return null;

  const qNum = parseInt(qNumMatch[1], 10);
  let qText = qNumMatch[2].trim();

  // Collect continuation lines (non-option, non-blank lines before first option)
  let i = startIdx + 1;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (/^[A-Ea-e]\s*[.):]/.test(line)) break;
    if (/^\d+\s*[.):]/.test(line)) break;
    if (/^(answer|ans|correct|key)\s*[:.\-]/i.test(line)) break;
    qText += " " + line;
    i++;
  }

  // Collect options
  const options: string[] = [];
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    const optMatch = line.match(/^([A-Ea-e])\s*[.):]\s*(.+)/);
    if (optMatch) {
      options.push(optMatch[2].trim());
      i++;
    } else if (/^\d+\s*[.):]/.test(line) || /^(answer|ans|correct|key)\s*[:.\-]/i.test(line)) {
      break;
    } else {
      // continuation of last option
      if (options.length > 0) {
        options[options.length - 1] += " " + line;
      }
      i++;
    }
  }

  // Detect answer
  let answerIdx: number | null = null;
  let answerText = "";

  // Check answer map first
  const mappedAnswer = answerMap.get(qNum);
  // Check inline answers in remaining lines before next question
  let inlineAnswer: string | null = null;
  let j = i;
  while (j < lines.length) {
    const line = lines[j].trim();
    if (/^\d+\s*[.):]/.test(line)) break;
    inlineAnswer = detectInlineAnswer(line);
    if (inlineAnswer) break;
    j++;
  }

  const correctLetter = mappedAnswer || inlineAnswer;
  if (correctLetter && options.length > 0) {
    const idx = correctLetter.charCodeAt(0) - 65; // A=0, B=1, ...
    if (idx >= 0 && idx < options.length) {
      answerIdx = idx;
      answerText = `The correct answer is ${correctLetter}. ${options[idx]}`;
    }
  }

  if (options.length < 2) return null; // Not enough options to be an MCQ

  return {
    question: {
      text: qText,
      type: "MCQ",
      level: defaultLevel,
      options: options.map((o) => o.replace(/\s+$/, "")),
      correctIndex: answerIdx,
      answer: answerText,
      marks: 1,
      source: "past-paper",
      year,
    },
    endIdx: i,
  };
}

export function parsePaperContent(
  content: string,
  opts: { level?: string; year?: string } = {}
): ParsedQuestion[] {
  const level = opts.level || "PROFESSIONAL";
  const year = opts.year || "";
  const normalized = normalize(content);
  const lines = normalized.split("\n");

  const answerMap = extractAnswerKey(lines);
  const questions: ParsedQuestion[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    // Detect question start: "1." or "1)" or "Q1."
    if (/^\d+\s*[.):]/.test(line)) {
      const result = parseMCQBlock(lines, i, answerMap, level, year);
      if (result) {
        questions.push(result.question);
        i = result.endIdx;
        continue;
      }
    }
    i++;
  }

  return questions;
}
