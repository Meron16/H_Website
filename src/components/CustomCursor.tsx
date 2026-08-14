import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce || !dot.current || !ring.current) return

    document.body.classList.add('cursor-none')
    const xTo = gsap.quickTo(dot.current, 'x', { duration: 0.15, ease: 'power3.out' })
    const yTo = gsap.quickTo(dot.current, 'y', { duration: 0.15, ease: 'power3.out' })
    const xRing = gsap.quickTo(ring.current, 'x', { duration: 0.4, ease: 'power3.out' })
    const yRing = gsap.quickTo(ring.current, 'y', { duration: 0.4, ease: 'power3.out' })

    const move = (e: PointerEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
      xRing(e.clientX)
      yRing(e.clientY)
    }

    const down = () => gsap.to(ring.current, { scale: 0.7, duration: 0.2 })
    const up = () => gsap.to(ring.current, { scale: 1, duration: 0.3 })

    const enterInteractive = () => gsap.to(ring.current, { scale: 1.8, borderColor: '#936dff', duration: 0.25 })
    const leaveInteractive = () => gsap.to(ring.current, { scale: 1, borderColor: 'rgba(36,24,63,0.35)', duration: 0.25 })

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)

    const nodes = Array.from(document.querySelectorAll('a, button, summary, input, textarea'))
    nodes.forEach((n) => {
      n.addEventListener('pointerenter', enterInteractive)
      n.addEventListener('pointerleave', leaveInteractive)
    })

    return () => {
      document.body.classList.remove('cursor-none')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      nodes.forEach((n) => {
        n.removeEventListener('pointerenter', enterInteractive)
        n.removeEventListener('pointerleave', leaveInteractive)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand md:block"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-ink/35 md:block"
      />
    </>
  )
}
