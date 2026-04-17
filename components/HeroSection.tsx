import Image from "next/image";
import { resume } from "@/lib/resume-data";
import { PrintResumeButton } from "@/components/PrintResumeButton";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--border)] px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[var(--coral)]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="order-2 max-w-xl lg:order-1">
          <p className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            <span className="text-[var(--muted)]">Hello.</span>{" "}
            <span className="inline-flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="h-8 w-1 shrink-0 rounded-full bg-[var(--coral)] sm:h-10" aria-hidden />
              <span>
                I&apos;m {resume.heroFirstName}
                <span className="mt-1 block text-xl font-semibold sm:text-2xl lg:mt-0 lg:inline">
                  <span className="text-[var(--muted)]">— Tech Lead &amp; AI Engineer</span>
                </span>
              </span>
            </span>
          </p>

          <p className="mb-8 max-w-lg text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            {resume.title}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`${resume.emailHref}?subject=Project%20inquiry`}
              className="inline-flex h-12 items-center justify-center rounded-lg bg-[var(--coral)] px-8 text-sm font-semibold text-[var(--bg)] shadow-lg shadow-[var(--coral)]/25 transition hover:brightness-110"
            >
              Got a project?
            </a>
            <PrintResumeButton />
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--coral)]/40 via-transparent to-[var(--coral)]/20 blur-md"
            />
            <div
              aria-hidden
              className="absolute inset-2 rounded-full border-2 border-[var(--coral)]/50"
            />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-[var(--bg-card)] bg-[var(--bg-card)] shadow-2xl ring-4 ring-[var(--coral)]/30 sm:h-64 sm:w-64">
              <Image
                src="/profile.png"
                alt={`Portrait of ${resume.name}`}
                width={256}
                height={256}
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
