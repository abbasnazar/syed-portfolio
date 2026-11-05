import { resume } from "@/lib/resume-data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="career" title="Experience" sub="Leadership and delivery across AI, research engineering and full-stack product teams." />

        <ol className="relative space-y-8 border-l border-[var(--border)] pl-6 sm:pl-10">
          {resume.experience.map((job, idx) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[31px] top-2 h-3 w-3 rounded-full ring-4 ring-[var(--bg)] sm:-left-[47px] ${
                  job.current ? "pulse-dot bg-emerald-400" : "bg-[var(--accent)]"
                }`}
              />
              <Reveal>
                <div className="glass rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white sm:text-xl">{job.role}</h3>
                      <p className="text-sm font-semibold text-[var(--accent-2)]">{job.company}</p>
                    </div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                      {job.period}
                    </p>
                  </div>
                  {job.intro && <p className="mt-4 text-sm leading-relaxed text-[var(--text)]/90">{job.intro}</p>}

                  <div className="mt-5 space-y-3">
                    {job.groups.map((g, gi) => {
                      const list = (
                        <ul className="space-y-2 text-sm leading-relaxed text-[var(--muted)]">
                          {g.bullets.map((b) => (
                            <li key={b} className="flex gap-2.5">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                              {b}
                            </li>
                          ))}
                        </ul>
                      );
                      if (!g.title) return <div key={gi}>{list}</div>;
                      return (
                        <details
                          key={g.title}
                          open={idx === 0 && gi === 0}
                          className="group rounded-2xl border border-[var(--border)] bg-white/[0.02] open:bg-white/[0.04]"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-bold text-white">
                            {g.title}
                            <i
                              className="fa-solid fa-chevron-down text-xs text-[var(--accent-2)] transition group-open:rotate-180"
                              aria-hidden
                            />
                          </summary>
                          <div className="px-4 pb-4">{list}</div>
                        </details>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
