import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NetworkField from '../components/NetworkField'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const steps = [
  {
    n: '01',
    title: 'Discovery Call',
    body: 'We understand your recruitment challenges and explore how Hirearky can streamline and strengthen your hiring process.',
  },
  {
    n: '02',
    title: 'Recruitment Kickoff',
    body: 'A dedicated lead recruiter partners with you weekly — managing up to 20 roles and actively promoting your openings.',
  },
  {
    n: '03',
    title: 'Finding Candidates',
    body: 'Compelling job posts, LinkedIn Recruiter, Indeed, Apollo, and ZoomInfo — plus screening and interview scheduling.',
  },
  {
    n: '04',
    title: 'Onboarding & Checks',
    body: 'Background checks and guided onboarding so new hires integrate smoothly and start strong.',
  },
]

const advantages = [
  {
    title: 'Faster Hiring',
    body: 'Established networks and talent pools that shorten time-to-fill when startups need to scale quickly.',
  },
  {
    title: 'Cost Efficiency',
    body: 'Reduce advertising, screening tools, and staffing overhead compared with traditional recruiting.',
  },
  {
    title: 'Regulatory Compliance',
    body: 'Employment-law fluency that lowers legal risk before you have a full HR department.',
  },
]

const supports = [
  {
    title: 'Solid planning',
    body: 'Daily syncs with hiring managers, transparent updates, and immediate feedback loops.',
  },
  {
    title: 'Collaboration tools',
    body: 'LinkedIn Recruiter, Indeed, Apollo, ZoomInfo — integrated with your ATS.',
  },
  {
    title: 'Hiring support',
    body: 'Unwavering talent acquisition support that protects your data while you grow.',
  },
]

export default function Home() {
  const page = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return

      gsap.from('.hero-brand', { y: 28, opacity: 0, duration: 0.9, ease: 'power3.out' })
      gsap.from('.hero-copy > *', {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        delay: 0.15,
        ease: 'power3.out',
      })
      gsap.from('.hero-visual', {
        opacity: 0,
        scale: 1.04,
        duration: 1.2,
        delay: 0.2,
        ease: 'power2.out',
      })

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        })
      })
    },
    { scope: page },
  )

  return (
    <div ref={page}>
      {/* Hero — one composition, brand-first, full-bleed abstract visual, no people */}
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
        <div className="absolute inset-0 mesh-panel grain" />
        <div className="hero-visual pointer-events-none absolute inset-0 opacity-90">
          <NetworkField />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(27,18,53,0.72)_0%,rgba(27,18,53,0.45)_42%,rgba(27,18,53,0.15)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(183,156,255,0.2),transparent_40%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center px-5 py-16 md:px-8 md:py-20">
          <div className="hero-copy max-w-xl">
            <p className="hero-brand font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              Hirearky
            </p>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.12] text-white text-balance sm:text-4xl md:text-[2.55rem]">
              Start-up talent acquisition is our forte
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/78">
              Great teams need great people — we’ll help you find them.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-white px-7 py-3.5 font-display text-sm font-semibold text-brand-ink shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition hover:bg-brand-soft"
              >
                Get In Touch
              </Link>
              <a
                href="#how-we-work"
                className="rounded-full border border-white/30 px-6 py-3.5 font-display text-sm font-semibold text-white/90 transition hover:border-white/60 hover:bg-white/5"
              >
                How we work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="how-we-work" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="reveal max-w-2xl">
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-brand uppercase">
            How we work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-ink text-balance md:text-4xl">
            Looking to grow your team?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A dedicated recruiter for sourcing, interviews, salary negotiations, onboarding, and
            reference checks — without the cost of a full internal hire.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <li
              key={step.n}
              className="reveal group relative overflow-hidden rounded-3xl border border-line bg-white/70 p-7 shadow-[0_20px_50px_rgba(66,48,125,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(147,109,255,0.14)]"
            >
              <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-brand/10 blur-2xl transition group-hover:bg-brand/20" />
              <span className="font-display text-4xl font-extrabold text-brand/25">{step.n}</span>
              <h3 className="mt-3 font-display text-xl font-bold text-brand-ink">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* RPO */}
      <section className="relative overflow-hidden border-y border-line bg-brand-soft/80">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_0%,rgba(147,109,255,0.18),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="reveal max-w-2xl">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-brand uppercase">
              Recruitment Process Outsourcing
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-ink text-balance md:text-4xl">
              Built for startups that need speed and clarity
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {advantages.map((item) => (
              <article
                key={item.title}
                className="reveal rounded-3xl bg-white/80 p-7 ring-1 ring-line"
              >
                <div className="mb-5 h-1.5 w-12 rounded-full bg-brand" />
                <h3 className="font-display text-xl font-bold text-brand-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="reveal max-w-2xl">
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-brand uppercase">
            Empowering companies
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-ink text-balance md:text-4xl">
            Solutions tailored for you
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            We help startups rise above the ordinary with recruiting that speaks to their audience.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {supports.map((item, i) => (
            <article
              key={item.title}
              className="reveal relative overflow-hidden rounded-[1.75rem] bg-brand-night p-8 text-white"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    i === 0
                      ? 'radial-gradient(circle at 80% 20%, rgba(147,109,255,0.45), transparent 50%)'
                      : i === 1
                        ? 'radial-gradient(circle at 20% 80%, rgba(183,156,255,0.35), transparent 50%)'
                        : 'radial-gradient(circle at 50% 0%, rgba(105,65,198,0.5), transparent 55%)',
                }}
              />
              <div className="relative">
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison / CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="reveal relative overflow-hidden rounded-[2rem] mesh-panel grain px-8 py-14 text-center md:px-16">
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white text-balance md:text-4xl">
              Hirearky vs average hiring agencies
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
              Dedicated partnership. Transparent process. Startup-native recruiting — without
              commission pressure.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 font-display text-sm font-semibold text-brand-ink transition hover:bg-brand-soft"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
