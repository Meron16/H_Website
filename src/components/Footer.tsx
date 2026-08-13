import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-brand-night text-white">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-deep/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-[0.98rem] leading-relaxed text-white/70">
            Your partner in talent acquisition and growth — dedicated recruiters for startups that move fast.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-white/50">
            Company
          </p>
          <ul className="mt-4 space-y-3 text-[0.98rem]">
            <li>
              <Link to="/" className="text-white/85 transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white/85 transition hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="text-white/85 transition hover:text-white">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-white/50">
            Get in touch
          </p>
          <a
            href="mailto:hello@hirearky.com"
            className="mt-4 inline-block text-[0.98rem] text-brand-glow transition hover:text-white"
          >
            hello@hirearky.com
          </a>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 transition hover:border-white/50 hover:bg-white/5"
          >
            Send a message
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Hirearky. All rights reserved.</p>
          <div className="flex gap-5">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
