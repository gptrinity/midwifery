import { api } from "@/lib/api";

export default function MissActions({ id, status, onUpdate }: { id: string; status: string; onUpdate: () => void }) {
  async function update(next: string) {
    await api.updateMiss(id, next);
    onUpdate();
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
