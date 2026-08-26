import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        Midwifery AI Study Hub — study, practice, master. Content is original educational material.
      </footer>
    </div>
  );
}
