"use client";

import { resume } from "@/lib/resume-data";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contacts", label: "Contacts" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="text-lg font-bold tracking-tight text-white transition hover:text-[var(--coral)]"
          onClick={() => setOpen(false)}
        >
          {resume.shortBrand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-xl`} aria-hidden />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-[var(--border)] bg-[var(--bg-elevated)] md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--muted)] transition hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
