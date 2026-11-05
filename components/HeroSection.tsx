import Image from "next/image";
import { headlineStats, resume } from "@/lib/resume-data";
import { CountUp } from "@/components/CountUp";
import { PrintResumeButton } from "@/components/PrintResumeButton";

const chips = [
  { label: "LLMs", icon: "fa-solid fa-wand-magic-sparkles", pos: "left-0 top-6 sm:-left-6", delay: "0s" },
  { label: "GCP · AWS", icon: "fa-solid fa-cloud", pos: "right-0 top-16 sm:-right-8", delay: "1.2s" },
  { label: "TensorFlow", icon: "fa-solid fa-brain", pos: "bottom-10 left-0 sm:-left-10", delay: "2.4s" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[var(--accent)]/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[var(--accent-2)]/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-[var(--text)]">
            <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            {resume.availability}
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {resume.heroFirstName}.
            <span className="mt-2 block text-grad">{resume.headline}</span>
            <span className="block text-[var(--muted)]">shipping GenAI at scale.</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            {resume.summary[0]}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`${resume.emailHref}?subject=Opportunity`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-7 text-sm font-bold text-[#07080f] shadow-lg shadow-[var(--accent)]/30 transition hover:scale-[1.03] hover:brightness-110"
            >
              Let&apos;s talk <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
            </a>
            <a
              href="#projects"
              className="glass inline-flex h-12 items-center justify-center rounded-xl px-7 text-sm font-semibold text-white transition hover:border-[var(--accent)]/60"
            >
              View projects
            </a>
            <PrintResumeButton />
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {headlineStats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold text-white sm:text-3xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
                <p className="mt-1 text-[0.7rem] leading-snug text-[var(--muted)]">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80">
            <div
              aria-hidden
              className="spin-slow absolute -inset-1 rounded-full opacity-80 blur-[2px]"
              style={{ background: "conic-gradient(from 0deg, #8b5cf6, #22d3ee, #f472b6, #8b5cf6)" }}
            />
            <div className="absolute inset-1 rounded-full bg-[var(--bg)]" aria-hidden />
            <div className="absolute inset-3 overflow-hidden rounded-full bg-[var(--bg-card)]">
              <Image
                src="/profile.png"
                alt={`Portrait of ${resume.name}`}
                width={320}
                height={320}
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
            {chips.map((c) => (
              <span
                key={c.label}
                className={`glass float absolute ${c.pos} flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-xl`}
                style={{ animationDelay: c.delay }}
              >
                <i className={`${c.icon} text-[var(--accent-2)]`} aria-hidden />
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
