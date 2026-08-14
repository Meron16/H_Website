import { useRef, type ReactNode, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

type Props = {
  to: string
  children: ReactNode
  className?: string
  light?: boolean
}

export default function MagneticButton({ to, children, className = '', light }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)

  const onMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(el, { x: x * 0.28, y: y * 0.28, duration: 0.35, ease: 'power3.out' })
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
  }

  return (
    <Link
      ref={ref}
      to={to}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 font-display text-sm font-bold tracking-wide transition will-change-transform ${
        light
          ? 'bg-white text-brand-ink shadow-[0_18px_40px_rgba(0,0,0,0.25)] hover:bg-cream'
          : 'bg-brand text-white shadow-[0_16px_40px_rgba(147,109,255,0.45)] hover:bg-brand-deep'
      } ${className}`}
    >
      {children}
    </Link>
  )
}
