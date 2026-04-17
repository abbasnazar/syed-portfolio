import { resume } from "@/lib/resume-data";

export function ContactSection() {
  return (
    <section id="contacts" className="scroll-mt-20 border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Contacts</h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-sm text-[var(--muted)] sm:text-base">
          Based in {resume.location}. Open to senior IC or tech lead conversations around AI platforms and scalable
          systems.
        </p>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <a
            href={resume.emailHref}
            className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 transition hover:border-[var(--coral)]/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--coral-dim)] text-[var(--coral)]">
              <i className="fa-solid fa-envelope" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Email</p>
              <p className="break-all text-sm font-semibold text-white">{resume.email}</p>
            </div>
          </a>
          <a
            href={resume.phoneHref}
            className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 transition hover:border-[var(--coral)]/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--coral-dim)] text-[var(--coral)]">
              <i className="fa-solid fa-phone" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Phone</p>
              <p className="text-sm font-semibold text-white">{resume.phone}</p>
            </div>
          </a>
          <a
            href={resume.linkedIn.href}
            className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 transition hover:border-[var(--coral)]/50 sm:col-span-2"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--coral-dim)] text-[var(--coral)]">
              <i className="fa-brands fa-linkedin-in" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">LinkedIn</p>
              <p className="text-sm font-semibold text-white">{resume.linkedIn.label}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
