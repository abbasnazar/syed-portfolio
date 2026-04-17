import { resume } from "@/lib/resume-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-xs text-[var(--muted)] sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {resume.name}. {resume.footer}
        </p>
        <a href={resume.portfolio.href} className="font-medium text-[var(--coral)] hover:underline">
          {resume.portfolio.label}
        </a>
      </div>
    </footer>
  );
}
