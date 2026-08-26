import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { api } from "@/lib/api";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/subjects", label: "Subjects", icon: BookOpen },
  { href: "/practice", label: "Practice", icon: Target },
  { href: "/exams", label: "Exams", icon: FileText },
  { href: "/tutor", label: "AI Tutor", icon: Bot },
  { href: "/progress", label: "Progress", icon: BarChart3 },
];

type User = { id: string; name: string; email: string; role: string };

export default function Nav() {
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();

  useEffect(() => {
    api.me().then((d) => setUser(d.user)).catch(() => {});
  }, [location.pathname]);

  async function handleLogout() {
    await api.logout();
    setUser(null);
    window.location.href = "/";
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-brand-700">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <BookOpen size={18} />
          </span>
          Midwifery AI Hub
        </Link>

        <nav className="flex flex-1 items-center gap-1 overflow-x-auto text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition ${
                location.pathname === l.href
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              <l.icon size={15} />
              {l.label}
            </Link>
          ))}
          {user?.role === "ADMIN" && (
            <Link
              to="/admin"
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition ${
                location.pathname.startsWith("/admin")
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
              }`}
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
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-slate-600 transition hover:bg-slate-50"
              >
                <LogOut size={15} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          ) : (
            <Link
              to="/login"
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
