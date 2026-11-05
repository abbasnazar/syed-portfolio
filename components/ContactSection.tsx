import { resume } from "@/lib/resume-data";
import { Reveal } from "@/components/Reveal";

const items = [
  { icon: "fa-solid fa-envelope", label: "Email", value: resume.email, href: resume.emailHref },
  { icon: "fa-solid fa-phone", label: "Phone", value: resume.phone, href: resume.phoneHref },
  { icon: "fa-brands fa-linkedin-in", label: "LinkedIn", value: resume.linkedIn.label, href: resume.linkedIn.href },
  { icon: "fa-solid fa-location-dot", label: "Location", value: resume.location, href: undefined },
];

export function ContactSection() {
  return (
    <section id="contacts" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <div className="glass relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] p-8 text-center sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-60 w-96 -translate-x-1/2 rounded-full bg-[var(--accent)]/30 blur-3xl"
          />
          <p className="relative mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-2)]">
            {"// contact"}
          </p>
          <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something <span className="text-grad">intelligent.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm text-[var(--muted)] sm:text-base">
            Open to {resume.preferredRoles.slice(0, 3).join(", ")} and related conversations.
          </p>

          <div className="relative mt-10 grid gap-3 text-left sm:grid-cols-2">
            {items.map((c) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent-2)]">
                    <i className={c.icon} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-[var(--muted)]">{c.label}</p>
                    <p className="break-words text-sm font-semibold text-white">{c.value}</p>
                  </div>
                </>
              );
              const cls = "flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white/[0.03] p-4 transition";
              return c.href ? (
                <a key={c.label} href={c.href} className={`${cls} hover:border-[var(--accent)]/60 hover:bg-white/[0.06]`}>
                  {inner}
                </a>
              ) : (
                <div key={c.label} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
