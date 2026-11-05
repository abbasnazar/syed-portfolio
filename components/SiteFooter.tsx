import { resume } from "@/lib/resume-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] px-4 py-8 sm:px-6 lg:px-8">
      <p className="mx-auto max-w-6xl text-center text-xs leading-relaxed text-[var(--muted)]">
        © {new Date().getFullYear()} {resume.name}. {resume.footer}
      </p>
    </footer>
  );
}
