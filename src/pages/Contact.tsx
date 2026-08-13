import { useRef, useState, type FormEvent } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function Contact() {
  const page = useRef<HTMLDivElement>(null)
  const [sent, setSent] = useState(false)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.from('.contact-anim > *', {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power3.out',
      })
    },
    { scope: page },
  )

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const subject = encodeURIComponent(`Hirearky inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:hello@hirearky.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div ref={page} className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div className="contact-anim">
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-brand uppercase">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-brand-ink text-balance md:text-5xl">
            Let’s build your next great team
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Tell us about your hiring goals. We’ll reply with next steps for a discovery call.
          </p>
          <a
            href="mailto:hello@hirearky.com"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-line bg-white/70 px-5 py-4 text-brand-ink transition hover:border-brand/40"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 6h16v12H4V6zm0 0l8 7 8-7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>
              <span className="block text-sm text-muted">Email</span>
              <span className="font-semibold">hello@hirearky.com</span>
            </span>
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="contact-anim rounded-[2rem] border border-line bg-white/80 p-7 shadow-[0_24px_60px_rgba(66,48,125,0.08)] md:p-9"
        >
          <label className="block">
            <span className="font-display text-sm font-semibold text-brand-ink">Name</span>
            <input
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-line bg-brand-mist/50 px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15"
              placeholder="Your name"
            />
          </label>
          <label className="mt-5 block">
            <span className="font-display text-sm font-semibold text-brand-ink">Email</span>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-line bg-brand-mist/50 px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15"
              placeholder="you@company.com"
            />
          </label>
          <label className="mt-5 block">
            <span className="font-display text-sm font-semibold text-brand-ink">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-y rounded-xl border border-line bg-brand-mist/50 px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15"
              placeholder="Roles you’re hiring for, timeline, and anything else we should know…"
            />
          </label>
          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-brand px-6 py-3.5 font-display text-sm font-semibold text-white transition hover:bg-brand-deep"
          >
            Send message
          </button>
          {sent && (
            <p className="mt-4 text-center text-sm text-muted">
              Opening your email client… If nothing opens, write us at hello@hirearky.com.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
