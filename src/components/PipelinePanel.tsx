import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const roles = [
  { title: 'Senior Backend Engineer', stage: 'Interview', meta: '3 shortlisted' },
  { title: 'Head of Growth', stage: 'Sourcing', meta: '18 in pipeline' },
  { title: 'Product Designer', stage: 'Offer', meta: '1 finalist' },
]

const stages = [
  { label: 'Sourced', value: 42 },
  { label: 'Screened', value: 18 },
  { label: 'Interview', value: 9 },
  { label: 'Offer', value: 2 },
]

/** Abstract recruiting workspace — no people photos */
export default function PipelinePanel() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.from('.pipe-row', {
        y: 16,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        delay: 0.35,
        ease: 'power3.out',
      })
      gsap.from('.pipe-bar > span', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.9,
        stagger: 0.12,
        delay: 0.55,
        ease: 'power3.out',
      })
      gsap.to('.pipe-live', {
        opacity: 0.35,
        duration: 1.1,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })
    },
    { scope: root },
  )

  return (
    <div
      ref={root}
      className="overflow-hidden rounded-3xl border border-white/10 bg-brand-night text-white shadow-[0_30px_80px_rgba(21,16,37,0.35)]"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-xs font-semibold tracking-wide text-brand-glow uppercase">
            Dedicated recruiter workspace
          </p>
          <p className="mt-1 text-sm text-white/60">Live hiring pipeline</p>
        </div>
        <span className="pipe-live inline-flex items-center gap-2 rounded-full bg-ok/15 px-3 py-1 text-xs font-semibold text-ok">
          <span className="h-1.5 w-1.5 rounded-full bg-ok" />
          Active
        </span>
      </div>

      <div className="grid gap-5 p-5 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="pipe-row rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{role.title}</p>
                  <p className="mt-1 text-xs text-white/50">{role.meta}</p>
                </div>
                <span className="rounded-full bg-brand/25 px-2.5 py-1 text-[11px] font-semibold text-brand-glow">
                  {role.stage}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs font-semibold tracking-wide text-white/45 uppercase">
            This week’s funnel
          </p>
          <div className="mt-4 space-y-3">
            {stages.map((s) => (
              <div key={s.label}>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-white/65">{s.label}</span>
                  <span className="font-semibold text-white">{s.value}</span>
                </div>
                <div className="pipe-bar h-2 overflow-hidden rounded-full bg-white/10">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-brand to-brand-glow"
                    style={{ width: `${Math.min(100, s.value * 2.2)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
