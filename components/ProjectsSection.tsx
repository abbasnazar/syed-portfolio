import { resume } from "@/lib/resume-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--bg-elevated)]/50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-[var(--muted)] sm:text-base">
          Selected products and platforms I&apos;ve architected, built, or scaled end-to-end.
        </p>

        <ul className="grid gap-6 md:grid-cols-3">
          {resume.projects.map((p) => (
            <li
              key={p.name}
              className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition hover:border-[var(--coral)]/40 hover:shadow-lg hover:shadow-[var(--coral)]/5"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--coral-dim)] text-xl text-[var(--coral)] ring-1 ring-[var(--coral)]/20 transition group-hover:scale-105">
                <i className={p.icon} aria-hidden />
              </span>
              <h3 className="text-lg font-bold text-white">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--coral)]">
                Featured
                <i className="fa-solid fa-arrow-right text-[10px] transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
