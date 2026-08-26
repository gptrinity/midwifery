import { prisma } from "@/lib/prisma";
import MissActions from "@/components/MissActions";
import { Inbox } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminMissesPage() {
  const misses = await prisma.missedQuery.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
    include: { user: { select: { name: true, email: true } }, subject: { select: { name: true } } },
  });

  const open = misses.filter((m) => m.status === "OPEN").length;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">AI tutor review queue</h1>
        <p className="mt-1 text-sm text-slate-500">
          These are questions students asked that the tutor couldn't answer well (or rated poorly). Reviewing them
          improves the tutor. <strong>{open} open.</strong>
        </p>
      </div>

      {misses.length === 0 ? (
        <div className="card p-10 text-center">
          <Inbox className="mx-auto mb-3 text-slate-300" size={32} />
          <p className="text-slate-500">Nothing to review yet — a clean queue!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {misses.map((m) => (
            <div key={m.id} className="card p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-medium text-slate-900">{m.query}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    {m.user.name} ({m.user.email}) · {m.subject?.name || "no subject"} ·{" "}
                    {m.createdAt.toLocaleString()} ·{" "}
                    <span
                      className={`font-semibold ${
                        m.status === "OPEN" ? "text-amber-600" : m.status === "RESOLVED" ? "text-emerald-600" : "text-slate-400"
                      }`}
                    >
                      {m.status}
                    </span>
                  </p>
                </div>
                <MissActions id={m.id} status={m.status} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}