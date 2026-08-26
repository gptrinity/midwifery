import Link from "next/link";
import { getSessionUser } from "@/lib/auth";
import {
  Home,
  BookOpen,
  Target,
  FileText,
  Bot,
  BarChart3,
  ShieldCheck,
  LogIn,
  LogOut,
} from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/subjects", label: "Subjects", icon: BookOpen },
  { href: "/practice", label: "Practice", icon: Target },
  { href: "/exams", label: "Exams", icon: FileText },
  { href: "/tutor", label: "AI Tutor", icon: Bot },
  { href: "/progress", label: "Progress", icon: BarChart3 },
];

export default async function Nav() {
  const user = await getSessionUser();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-brand-700">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <BookOpen size={18} />
          </span>
          Midwifery AI Hub
        </Link>

        <nav className="flex flex-1 items-center gap-1 overflow-x-auto text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
            >
              <l.icon size={15} />
              {l.label}
            </Link>
          ))}
          {user?.role === "ADMIN" && (
            <Link
              href="/admin"
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
            >
              <ShieldCheck size={15} />
              Admin
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2 text-sm">
          {user ? (
            <>
              <span className="hidden max-w-[140px] truncate text-slate-500 sm:block">
                {user.name}
                {user.role === "ADMIN" ? " (admin)" : ""}
              </span>
              <form action="/api/auth/logout" method="post">
                <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-slate-600 transition hover:bg-slate-50">
                  <LogOut size={15} />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 font-semibold text-white transition hover:bg-brand-700"
            >
              <LogIn size={15} />
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}