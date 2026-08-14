import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

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
    <div className="bg-ink px-5 pb-20 pt-28 text-white md:px-8 md:pt-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-brand uppercase">Contact</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Let’s talk about the roles you need to fill
          </h1>
          <p className="mt-4 text-muted">
            Tell us what you’re hiring for. We’ll reply with next steps for a discovery call.
          </p>
          <a href="mailto:hello@hirearky.com" className="mt-6 inline-block text-sm font-semibold text-brand-glow">
            hello@hirearky.com
          </a>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-panel p-6 md:p-8">
          <label className="block">
            <span className="text-sm font-semibold">Name</span>
            <input
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm outline-none focus:border-brand"
              placeholder="Your name"
            />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-semibold">Email</span>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm outline-none focus:border-brand"
              placeholder="you@company.com"
            />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-semibold">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-y rounded-xl border border-line bg-ink px-3.5 py-2.5 text-sm outline-none focus:border-brand"
              placeholder="Roles, timeline, anything we should know…"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold hover:bg-brand-deep"
          >
            Send message
          </button>
          {sent && <p className="mt-3 text-center text-xs text-muted">Opening your email client…</p>}
        </form>
      </div>
    </div>
  )
}
