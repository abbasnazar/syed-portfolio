import { headlineStats, resume, services } from "@/lib/resume-data";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
        <div>
          <p className="mb-6 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--coral)]">Services</p>
          <ul className="relative space-y-0">
            {services.map((s, i) => (
              <li key={s.title} className="relative flex gap-4 pb-10 last:pb-0">
                {i < services.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[15px] top-10 bottom-0 w-px bg-gradient-to-b from-[var(--coral)]/60 to-transparent"
                  />
                )}
                <span className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[var(--coral)] bg-[var(--bg)] text-sm text-[var(--coral)]">
                  <i className={s.icon} aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{s.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">About me</h2>
          <p className="mb-5 text-sm leading-relaxed text-[var(--muted)] sm:text-base">{resume.summary}</p>
          <p className="mb-10 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            I lead engineering for JobMojo.ai and focus on system design, microservices, NLP pipelines, and reliable
            cloud infrastructure on AWS and GCP.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            {headlineStats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]/80 p-5 text-center shadow-lg sm:text-left"
              >
                <p className="text-3xl font-bold text-[var(--coral)] sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-xs font-medium leading-snug text-[var(--muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
