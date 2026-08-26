"use client";

import { useRouter } from "next/navigation";

export default function MissActions({ id, status }: { id: string; status: string }) {
  const router = useRouter();
  async function update(next: string) {
    await fetch("/api/admin/misses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: next }),
    });
    router.refresh();
  }
  return (
    <div className="flex gap-2">
      {status === "OPEN" && (
        <button className="btn-primary !px-3 !py-1.5 text-xs" onClick={() => update("RESOLVED")}>
          Resolve
        </button>
      )}
      <button className="btn-secondary !px-3 !py-1.5 text-xs" onClick={() => update("DISCARDED")}>
        Discard
      </button>
    </div>
  );
}