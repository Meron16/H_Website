import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'Why startups outgrow traditional agencies',
    excerpt: 'Commission-heavy models slow decisions. Here’s how dedicated RPO keeps hiring sharp.',
  },
  {
    title: 'Building a hiring cadence that scales',
    excerpt: 'Weekly kickoffs, daily feedback, and clear ownership — the rhythm behind faster fills.',
  },
  {
    title: 'Executive search for early-stage teams',
    excerpt: 'Finding leaders who’ve lived startup funding cycles — and know how to hire after them.',
  },
]

export default function Blogs() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="font-display text-sm font-semibold tracking-[0.18em] text-brand uppercase">
        Blogs
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold text-brand-ink text-balance md:text-5xl">
        Ideas for founders who hire with intention
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted">
        Fresh perspectives on talent acquisition — coming soon as full articles.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-[1.75rem] border border-line bg-white/75 p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(147,109,255,0.12)]"
          >
            <div className="mb-6 h-36 overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#42307d,#936dff_55%,#f5f0ff)]">
              <div className="h-full w-full opacity-40 [background-image:radial-gradient(circle_at_30%_30%,white_0_2px,transparent_2px)] [background-size:18px_18px]" />
            </div>
            <h2 className="font-display text-xl font-bold text-brand-ink">{post.title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{post.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/contact"
          className="inline-flex rounded-full bg-brand px-7 py-3.5 font-display text-sm font-semibold text-white transition hover:bg-brand-deep"
        >
          Talk to Hirearky
        </Link>
      </div>
    </div>
  )
}
