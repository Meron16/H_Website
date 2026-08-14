import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

/** Calm abstract mark — no people */
export default function HeroArt() {
  const root = useRef<SVGSVGElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.to('.ha-orbit', {
        rotate: 360,
        transformOrigin: 'center',
        duration: 48,
        repeat: -1,
        ease: 'none',
      })
      gsap.to('.ha-pulse', {
        scale: 1.08,
        transformOrigin: 'center',
        duration: 2.8,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        stagger: 0.25,
      })
    },
    { scope: root },
  )

  return (
    <svg
      ref={root}
      viewBox="0 0 520 420"
      className="h-auto w-full"
      role="img"
      aria-label="Abstract talent network"
    >
      <defs>
        <linearGradient id="haGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#936DFF" />
          <stop offset="100%" stopColor="#42307D" />
        </linearGradient>
        <radialGradient id="haGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#936DFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#936DFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="260" cy="210" r="170" fill="url(#haGlow)" />
      <circle className="ha-orbit" cx="260" cy="210" r="150" fill="none" stroke="#936DFF" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="6 12" />
      <circle className="ha-orbit" cx="260" cy="210" r="110" fill="none" stroke="#6941C6" strokeOpacity="0.25" strokeWidth="1.5" />

      <circle className="ha-pulse" cx="260" cy="210" r="36" fill="url(#haGrad)" />
      <circle className="ha-pulse" cx="160" cy="140" r="14" fill="#936DFF" />
      <circle className="ha-pulse" cx="360" cy="150" r="12" fill="#B79CFF" />
      <circle className="ha-pulse" cx="380" cy="260" r="16" fill="#6941C6" />
      <circle className="ha-pulse" cx="150" cy="280" r="13" fill="#42307D" />
      <circle className="ha-pulse" cx="260" cy="100" r="10" fill="#C4A8FF" />

      <path d="M160 140L260 210L360 150M260 210L380 260M260 210L150 280M260 210L260 100" stroke="#936DFF" strokeOpacity="0.45" strokeWidth="2" fill="none" />
    </svg>
  )
}
