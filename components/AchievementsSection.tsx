import { resume } from "@/lib/resume-data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function AchievementsSection() {
  return (
    <section id="impact" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="impact" title="Key achievements" sub="Measurable outcomes across AI, platform and team delivery." />
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resume.achievements.map((a, i) => (
            <li key={a.metric} className={i === 0 ? "lg:col-span-2" : ""}>
              <Reveal delay={i * 70} className="h-full">
                <div className="glass card-hover h-full rounded-3xl p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent-2)]">
                      <i className={a.icon} aria-hidden />
                    </span>
                    <span className="text-grad text-2xl font-extrabold">{a.metric}</span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">{a.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
