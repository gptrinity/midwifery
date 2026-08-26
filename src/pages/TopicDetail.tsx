import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Target } from "lucide-react";
import { api } from "@/lib/api";
import QuestionItem from "@/components/QuestionItem";

export default function TopicDetail() {
  const { id } = useParams<{ id: string }>();
  const [topic, setTopic] = useState<any>(null);

  useEffect(() => {
    if (id) api.topicById(id).then((d) => setTopic(d.topic)).catch(() => {});
  }, [id]);

  if (!topic) return <div className="card p-10 text-center text-slate-400">Loading…</div>;

  return (
    <div>
      <div className="mb-6">
        <Link to={`/subjects/${topic.subject.slug}`} className="text-sm font-medium text-brand-600 hover:underline">
          ← {topic.subject.name}
        </Link>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">{topic.name}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{topic.summary}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link to={`/practice?subject=${topic.subjectId}&topic=${topic.id}`} className="btn-primary">
            <Target size={15} />
            Practice this topic
          </Link>
          <span className="text-sm text-slate-500">{topic.questions.length} questions</span>
        </div>
      </div>

      <div className="space-y-4">
        {topic.questions.map((q: any) => {
          let options: string[] = [];
          try { options = JSON.parse(q.options); } catch { options = []; }
          return (
            <QuestionItem
              key={q.id}
              id={q.id}
              text={q.text}
              type={q.type}
              level={q.level}
              options={options}
              correctIndex={q.correctIndex}
              answer={q.answer}
              marks={q.marks}
            />
          );
        })}
      </div>
    </div>
  );
}
