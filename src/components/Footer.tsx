import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Your partner in talent acquisition and growth — dedicated recruiters for startups.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/35 uppercase">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/" className="text-muted hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-muted hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="text-muted hover:text-white">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/35 uppercase">Get in touch</p>
          <a href="mailto:hello@hirearky.com" className="mt-3 inline-block text-sm font-semibold text-brand-glow">
            hello@hirearky.com
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl justify-between px-5 py-4 text-xs text-white/35 md:px-8">
          <p>© {new Date().getFullYear()} Hirearky</p>
          <p>Terms · Privacy</p>
        </div>
      </div>
    </footer>
  )
}
