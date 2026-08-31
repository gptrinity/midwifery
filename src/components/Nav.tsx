import { useEffect, useState, useRef } from "react";
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
  Menu,
  X,
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    api.me().then((d) => setUser(d.user)).catch(() => {});
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  async function handleLogout() {
    await api.logout();
    setUser(null);
    setMobileOpen(false);
    window.location.href = "/";
  }

  function linkClass(href: string) {
    return `flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
      location.pathname === href || (href !== "/" && location.pathname.startsWith(href))
        ? "bg-brand-50 text-brand-700"
        : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
    }`;
  }

  function adminLinkClass() {
    return `flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
      location.pathname.startsWith("/admin")
        ? "bg-brand-50 text-brand-700"
        : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
    }`;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-brand-700">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <BookOpen size={18} />
          </span>
          Midwifery AI Hub
        </Link>

        <nav className="hidden md:flex md:flex-1 md:items-center md:gap-1 md:text-sm">
          {links.map((l) => (
            <Link key={l.href} to={l.href} className={linkClass(l.href)}>
              <l.icon size={15} />
              {l.label}
            </Link>
          ))}
          {user?.role === "ADMIN" && (
            <Link to="/admin" className={adminLinkClass()}>
              <ShieldCheck size={15} />
              Admin
            </Link>
          )}
        </nav>

        <div className="hidden md:flex md:items-center md:gap-2 md:text-sm">
          {user ? (
            <>
              <span className="max-w-[140px] truncate text-slate-500">
                {user.name}
                {user.role === "ADMIN" ? " (admin)" : ""}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-slate-600 transition hover:bg-slate-50"
              >
                <LogOut size={15} />
                Logout
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

        <div className="relative md:hidden" ref={menuRef}>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {mobileOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
              {links.map((l) => (
                <Link key={l.href} to={l.href} className={linkClass(l.href)}>
                  <l.icon size={15} />
                  {l.label}
                </Link>
              ))}
              {user?.role === "ADMIN" && (
                <Link to="/admin" className={adminLinkClass()}>
                  <ShieldCheck size={15} />
                  Admin
                </Link>
              )}
              <div className="my-1 border-t border-slate-100" />
              {user ? (
                <>
                  <div className="px-3 py-1 text-xs text-slate-400">
                    {user.name}{user.role === "ADMIN" ? " (admin)" : ""}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50"
                  >
                    <LogOut size={15} />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-brand-600 transition hover:bg-brand-50"
                >
                  <LogIn size={15} />
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
