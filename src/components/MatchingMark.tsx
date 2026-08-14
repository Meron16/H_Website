import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

/**
 * Signature mark for Hirearky: precision matching geometry.
 * Not a particle field, not a dashboard — a crafted constellation.
 */
export default function MatchingMark({ className = '' }: { className?: string }) {
  const root = useRef<SVGSVGElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.to('.mm-node', {
        scale: 1.15,
        transformOrigin: 'center',
        duration: 2.4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        stagger: { each: 0.28, from: 'center' },
      })

      gsap.fromTo(
        '.mm-arc',
        { strokeDashoffset: 220 },
        {
          strokeDashoffset: 0,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: 'none',
          stagger: 0.4,
        },
      )

      gsap.to('.mm-core', {
        rotate: 360,
        transformOrigin: 'center',
        duration: 60,
        repeat: -1,
        ease: 'none',
      })
    },
    { scope: root },
  )

  return (
    <svg
      ref={root}
      viewBox="0 0 640 560"
      className={className}
      role="img"
      aria-label="Abstract matching constellation"
    >
      <defs>
        <linearGradient id="mmStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#936DFF" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#5B3DB8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#936DFF" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="mmHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#936DFF" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#936DFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="320" cy="280" r="210" fill="url(#mmHalo)" />

      <g className="mm-core" opacity="0.9">
        <ellipse cx="320" cy="280" rx="190" ry="78" fill="none" stroke="url(#mmStroke)" strokeWidth="1.5" className="mm-arc" strokeDasharray="12 16" />
        <ellipse cx="320" cy="280" rx="190" ry="78" fill="none" stroke="url(#mmStroke)" strokeWidth="1.5" className="mm-arc" strokeDasharray="8 18" transform="rotate(60 320 280)" />
        <ellipse cx="320" cy="280" rx="190" ry="78" fill="none" stroke="url(#mmStroke)" strokeWidth="1.5" className="mm-arc" strokeDasharray="10 14" transform="rotate(-60 320 280)" />
      </g>

      {/* Outer anchors */}
      <circle className="mm-node" cx="140" cy="160" r="7" fill="#936DFF" />
      <circle className="mm-node" cx="500" cy="150" r="6" fill="#5B3DB8" />
      <circle className="mm-node" cx="540" cy="320" r="8" fill="#936DFF" />
      <circle className="mm-node" cx="420" cy="450" r="6" fill="#C4A8FF" />
      <circle className="mm-node" cx="200" cy="430" r="7" fill="#5B3DB8" />
      <circle className="mm-node" cx="110" cy="300" r="5" fill="#936DFF" />

      {/* Core */}
      <circle className="mm-node" cx="320" cy="280" r="18" fill="#1E1833" />
      <circle cx="320" cy="280" r="8" fill="#936DFF" />

      {/* Bridges */}
      <path d="M140 160L320 280L500 150" fill="none" stroke="#1E1833" strokeOpacity="0.18" strokeWidth="1.5" />
      <path d="M110 300L320 280L540 320" fill="none" stroke="#936DFF" strokeOpacity="0.35" strokeWidth="1.75" />
      <path d="M200 430L320 280L420 450" fill="none" stroke="#5B3DB8" strokeOpacity="0.3" strokeWidth="1.5" />
    </svg>
  )
}
