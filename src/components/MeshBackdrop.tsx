import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function MeshBackdrop() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.to('.blob-a', {
        xPercent: 18,
        yPercent: -12,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.blob-b', {
        xPercent: -22,
        yPercent: 16,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.blob-c', {
        xPercent: 14,
        yPercent: 20,
        scale: 1.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.ring-spin', {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: 'none',
      })
    },
    { scope: root },
  )

  return (
    <div ref={root} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="blob-a absolute -left-[10%] top-[-15%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(147,109,255,0.75)_0%,transparent_68%)] blur-3xl" />
      <div className="blob-b absolute right-[-15%] top-[5%] h-[52vmax] w-[52vmax] rounded-full bg-[radial-gradient(circle,rgba(255,190,140,0.7)_0%,transparent_68%)] blur-3xl" />
      <div className="blob-c absolute bottom-[-18%] left-[15%] h-[48vmax] w-[48vmax] rounded-full bg-[radial-gradient(circle,rgba(120,230,200,0.55)_0%,transparent_68%)] blur-3xl" />

      <svg className="ring-spin absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 opacity-40" viewBox="0 0 800 800" fill="none">
        <circle cx="400" cy="400" r="280" stroke="rgba(105,65,198,0.25)" strokeWidth="1.5" strokeDasharray="8 14" />
        <circle cx="400" cy="400" r="340" stroke="rgba(147,109,255,0.18)" strokeWidth="1" strokeDasharray="2 10" />
        <path d="M120 400 C220 220, 580 220, 680 400 C580 580, 220 580, 120 400Z" stroke="rgba(36,24,63,0.12)" strokeWidth="2" />
      </svg>
    </div>
  )
}
