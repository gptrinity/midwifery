import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Midwifery AI Study Hub",
  description:
    "Deep topic-by-topic past questions, practice and exam modes, and an AI tutor for midwifery and nursing students from beginner to professional level.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Nav />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
          Midwifery AI Study Hub — study, practice, master. Content is original educational material.
        </footer>
      </body>
    </html>
  );
}