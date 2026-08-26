import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "@/lib/api";
import QuizRunner from "@/components/QuizRunner";

export default function ExamRun() {
  const [params] = useSearchParams();
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    const query: Record<string, string> = {};
    const subject = params.get("subject");
    const topic = params.get("topic");
    const level = params.get("level");
    const type = params.get("type");
    const count = params.get("count") || "10";
    if (subject) query.subject = subject;
    if (topic) query.topic = topic;
    if (level) query.level = level;
    if (type) query.type = type;
    query.count = count;
    api.selectQuestions(query).then((d) => setQuestions(d.questions)).catch(() => {});
  }, []);

  return (
    <div>
      <QuizRunner questions={questions} mode="EXAM" />
    </div>
  );
}
