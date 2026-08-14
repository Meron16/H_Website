import { lazy, Suspense, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HeroScene = lazy(() => import('../components/HeroScene'))

gsap.registerPlugin(useGSAP, ScrollTrigger)

function splitLetters(text: string, className = 'hero-letter letter') {
  return text.split('').map((ch, i) => (
    <span key={`${ch}-${i}`} className={className}>
      {ch === ' ' ? '\u00A0' : ch}
    </span>
  ))
}

const marquee = [
  'Dedicated Recruiters',
  'Startup RPO',
  'Executive Search',
  'Interview Scheduling',
  'Salary Negotiation',
  'Onboarding',
  'Reference Checks',
  'LinkedIn Recruiter',
]

const steps = [
  {
    n: '01',
    title: 'Discovery Call',
    body: 'We understand your recruitment challenges and design a hiring path that fits how your startup works.',
  },
  {
    n: '02',
    title: 'Recruitment Kickoff',
    body: 'A dedicated lead recruiter partners with you weekly — managing up to 20 open positions.',
  },
  {
    n: '03',
    title: 'Finding Candidates',
    body: 'Tailored posts plus LinkedIn Recruiter, Indeed, Apollo, and ZoomInfo — screening included.',
  },
  {
    n: '04',
    title: 'Onboarding & Checks',
    body: 'Background checks and guided onboarding so every new hire starts strong.',
  },
]

const services = [
  {
    title: 'Dedicated recruiter',
    body: 'One specialist works exclusively with your company across the full hiring cycle.',
  },
  {
    title: 'Startup RPO',
    body: 'Scale hiring without building a full internal team — or paying commission fees.',
  },
  {
    title: 'Executive search',
    body: 'Leaders with startup funding experience who fit both craft and culture.',
  },
]

const faqs = [
  {
    q: 'Do you charge commissions?',
    a: 'No. Hirearky uses a monthly model so we focus on quality candidates — not closing fees.',
  },
  {
    q: 'What does the monthly fee include?',
    a: 'A dedicated recruiter, sourcing tools, LinkedIn Recruiter, screening, scheduling, and ongoing ownership.',
  },
  {
    q: 'Can you place executives?',
    a: 'Yes. We place leaders with startup experience who fit skill and culture.',
  },
]

export default function Home() {
  const page = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState(0)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-letter', {
        yPercent: 120,
        opacity: 0,
        duration: 0.85,
        stagger: 0.035,
      })
        .from('.hero-fade', { y: 28, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.4')
        .from('.hero-3d', { opacity: 0, scale: 1.06, duration: 1.2 }, 0.15)

      gsap.to('.hero-3d', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.step-card').forEach((el, i) => {
        gsap.from(el, {
          x: i % 2 === 0 ? -40 : 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })
    },
    { scope: page },
  )

  return (
    <div ref={page} className="bg-ink text-white">
      {/* HERO */}
      <section id="hero" className="relative min-h-[100svh] overflow-hidden hero-gradient">
        <div className="hero-3d absolute inset-0 opacity-90">
          <Suspense fallback={<div className="absolute inset-0 bg-ink" />}>
            <HeroScene />
          </Suspense>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-8">
          <p className="hero-fade text-xs font-semibold tracking-[0.28em] text-brand-glow uppercase">
            Startup talent acquisition
          </p>

          <h1 className="mt-5 max-w-3xl text-[clamp(2.4rem,7vw,4.6rem)] font-bold leading-[0.95] tracking-tight">
            <span className="block overflow-hidden">
              <span className="inline-block">
                {'Hirearky'.split('').map((ch, i) => (
                  <span key={i} className="hero-letter letter">
                    {ch}
                  </span>
                ))}
              </span>
            </span>
            <span className="mt-2 block overflow-hidden text-white/85">
              <span className="inline-block text-[0.72em] font-medium">
                {splitLetters('builds the teams')}
              </span>
            </span>
            <span className="mt-1 block overflow-hidden text-brand-glow">
              <span className="inline-block text-[0.72em] font-medium">
                {splitLetters('that ship.')}
              </span>
            </span>
          </h1>

          <p className="hero-fade mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Dedicated recruiters for sourcing, interviews, salary negotiations, onboarding, and
            reference checks — without commission pressure.
          </p>

          <div className="hero-fade mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold transition hover:bg-brand-deep"
            >
              Book a discovery call
            </Link>
            <a
              href="#how-we-work"
              className="text-sm font-semibold text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Scroll to process
            </a>
          </div>

          <div className="hero-fade mt-14 flex items-center gap-3 text-xs tracking-[0.25em] text-white/40 uppercase">
            <span className="block h-10 w-px bg-gradient-to-b from-brand to-transparent" />
            Scroll
          </div>
        </div>
      </section>

      {/* Marquee — Saba style energy */}
      <section className="overflow-hidden border-y border-line bg-panel py-4">
        <div className="marquee-track text-sm font-semibold tracking-[0.18em] text-white/50 uppercase">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand uppercase">What we do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Recruiting that feels in-house — without the overhead
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="reveal rounded-3xl border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40"
            >
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="how-we-work" className="border-y border-line bg-panel/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-brand uppercase">How we work</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Four steps. Full ownership.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.n}
                className="step-card rounded-3xl border border-line bg-ink p-6 md:p-7"
              >
                <span className="text-4xl font-bold text-brand/50">{step.n}</span>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RPO */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="reveal grid gap-6 md:grid-cols-3">
          {[
            ['Faster hiring', 'Talent pools that shorten time-to-fill when startups need to scale.'],
            ['Cost efficiency', 'Lower overhead than traditional agencies — monthly model, no commissions.'],
            ['Compliance calm', 'Employment-law fluency before you have a full HR department.'],
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl bg-gradient-to-br from-brand/30 to-transparent p-6 ring-1 ring-brand/30">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div className="reveal">
            <h2 className="text-3xl font-bold">Questions founders ask</h2>
            <Link to="/contact" className="mt-5 inline-block text-sm font-semibold text-brand-glow hover:underline">
              Talk to Hirearky →
            </Link>
          </div>
          <div className="reveal space-y-3">
            {faqs.map((item, i) => {
              const open = openFaq === i
              return (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  className="w-full rounded-2xl border border-line bg-panel px-5 py-4 text-left"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-semibold">{item.q}</span>
                    <span className="text-brand">{open ? '−' : '+'}</span>
                  </span>
                  {open && <p className="mt-2 text-sm text-muted">{item.a}</p>}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 md:px-8">
        <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-brand/30 bg-panel px-8 py-14 text-center md:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(147,109,255,0.35),transparent_55%)]" />
          <div className="relative">
            <h2 className="text-3xl font-bold md:text-5xl">Ready to hire with intention?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Access 100,000+ startup-experienced candidates with a recruiter dedicated to your
              company.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-brand px-8 py-3.5 text-sm font-semibold hover:bg-brand-deep"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
