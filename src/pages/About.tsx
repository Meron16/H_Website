import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'Do you charge commissions?',
    a: 'No. Hirearky operates on a monthly payment model so we can focus on finding the best candidates without commission pressure.',
  },
  {
    q: 'Do you work onsite or remotely?',
    a: 'We’re flexible — onsite or remote depending on your startup’s needs.',
  },
  {
    q: 'What does the monthly price include?',
    a: 'A dedicated recruiter fully equipped to source immediately, plus database access, LinkedIn Recruiter, and full-cycle support.',
  },
  {
    q: 'Do you have experience in executive search?',
    a: 'Yes. We place executive candidates with startup funding backgrounds who fit skill and culture.',
  },
]

export default function About() {
  return (
    <div className="bg-ink text-white">
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
        <p className="text-xs font-semibold tracking-[0.22em] text-brand uppercase">About Hirearky</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
          Access 100,000+ startup-experienced candidates
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          We’re on a mission to support a select group of startups. Seasoned recruiters, deep in the
          ecosystem — extraordinary hiring, not ordinary agency noise.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold hover:bg-brand-deep"
        >
          Get In Touch
        </Link>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-16 md:grid-cols-2 md:px-8">
        <article className="rounded-3xl border border-line bg-panel p-7">
          <h2 className="text-xl font-bold">Recruitment Agency</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Hands-on talent acquisition for startups — from role definition through offer — with a
            recruiter who works exclusively with your company.
          </p>
        </article>
        <article className="rounded-3xl border border-line bg-panel p-7">
          <h2 className="text-xl font-bold">RPO</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Employment-law fluency and compliance support for startups that don’t yet have full HR
            departments.
          </p>
        </article>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
          <h2 className="text-center text-2xl font-bold">FAQ</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-2xl border border-line bg-panel px-5 py-4">
                <summary className="cursor-pointer list-none font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
