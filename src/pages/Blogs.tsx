import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'Why startups outgrow traditional agencies',
    excerpt: 'Commission models slow decisions. Dedicated RPO keeps hiring sharp.',
  },
  {
    title: 'Building a hiring cadence that scales',
    excerpt: 'Weekly kickoffs and clear ownership behind faster fills.',
  },
  {
    title: 'Executive search for early-stage teams',
    excerpt: 'Leaders who’ve lived startup funding cycles.',
  },
]

export default function Blogs() {
  return (
    <div className="bg-ink px-5 pb-20 pt-28 text-white md:px-8 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.22em] text-brand uppercase">Blogs</p>
        <h1 className="mt-4 max-w-2xl text-3xl font-bold md:text-5xl">
          Ideas for founders who hire with intention
        </h1>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-line bg-panel p-6">
              <div className="mb-4 h-28 rounded-2xl bg-gradient-to-br from-brand/40 to-brand-deep/20" />
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold">
            Talk to Hirearky
          </Link>
        </div>
      </div>
    </div>
  )
}
