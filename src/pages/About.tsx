import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const faqs = [
  {
    q: 'Do you charge commissions?',
    a: 'No. Hirearky operates on a monthly payment model so we can focus on finding the best candidates without commission pressure.',
  },
  {
    q: 'Do you work onsite or remotely?',
    a: 'We’re flexible — onsite or remote depending on your startup’s needs, so collaboration stays effective.',
  },
  {
    q: 'What does the monthly price include?',
    a: 'A dedicated recruiter fully equipped to source immediately, plus access to an extensive database, LinkedIn Recruiter, and the tools needed to run a complete search.',
  },
  {
    q: 'Do you have experience in executive search?',
    a: 'Yes. We place executive candidates — especially those with startup funding backgrounds — who fit both the skill bar and the culture.',
  },
]

export default function About() {
  const page = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.from('.about-hero > *', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })
    },
    { scope: page },
  )

  return (
    <div ref={page}>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_80%_-10%,rgba(147,109,255,0.28),transparent)]" />
        <div className="about-hero relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-brand uppercase">
            About Hirearky
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold text-brand-ink text-balance md:text-5xl">
            Access 100,000+ startup-experienced candidates
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            We’re on a mission to support a select group of startups. Our team of seasoned
            recruiters is deeply committed to the startup ecosystem — partnering with companies
            that want extraordinary hiring, not ordinary agency noise.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-brand px-7 py-3.5 font-display text-sm font-semibold text-white shadow-[0_14px_36px_rgba(147,109,255,0.35)] transition hover:bg-brand-deep"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-2 md:px-8 md:py-24">
        <article className="reveal overflow-hidden rounded-[2rem] mesh-panel grain p-8 text-white md:p-10">
          <div className="relative">
            <h2 className="font-display text-2xl font-bold md:text-3xl">Recruitment Agency</h2>
            <p className="mt-4 leading-relaxed text-white/75">
              Hands-on talent acquisition for startups — from role definition through offer —
              with a recruiter who works exclusively with your company.
            </p>
          </div>
        </article>
        <article className="reveal rounded-[2rem] border border-line bg-white/75 p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold text-brand-ink md:text-3xl">RPO</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Hirearky is an RPO provider well-versed in employment laws and compliance —
            reducing legal risk for startups that don’t yet have full HR departments.
          </p>
        </article>
      </section>

      <section className="border-t border-line bg-brand-soft/70">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-24">
          <div className="reveal text-center">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-brand uppercase">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-ink md:text-4xl">
              Got questions? We have answers
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="reveal group rounded-2xl border border-line bg-white/80 px-5 py-4 open:shadow-[0_16px_40px_rgba(66,48,125,0.08)]"
              >
                <summary className="cursor-pointer list-none font-display text-lg font-semibold text-brand-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-brand transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 pb-1 leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
