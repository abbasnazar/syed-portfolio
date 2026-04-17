import { resume } from "@/lib/resume-data";

export function ExperienceSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Experience</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-[var(--muted)] sm:text-base">
          Leadership and delivery across AI, research engineering, and full-stack product teams.
        </p>

        <ol className="space-y-6">
          {resume.experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]/60 p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">{job.role}</h3>
                  <p className="text-sm font-semibold text-[var(--coral)]">{job.company}</p>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">{job.period}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--muted)] marker:text-[var(--coral)]">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
