import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const nodes = [
  { cx: 120, cy: 90, r: 6 },
  { cx: 260, cy: 70, r: 5 },
  { cx: 400, cy: 110, r: 7 },
  { cx: 540, cy: 80, r: 5 },
  { cx: 680, cy: 130, r: 6 },
  { cx: 180, cy: 220, r: 5 },
  { cx: 320, cy: 250, r: 8 },
  { cx: 470, cy: 210, r: 6 },
  { cx: 610, cy: 260, r: 5 },
  { cx: 240, cy: 360, r: 6 },
  { cx: 390, cy: 340, r: 7 },
  { cx: 550, cy: 380, r: 5 },
  { cx: 700, cy: 320, r: 6 },
]

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [1, 6],
  [2, 7],
  [3, 8],
  [5, 6],
  [6, 7],
  [7, 8],
  [5, 9],
  [6, 10],
  [7, 11],
  [8, 12],
  [9, 10],
  [10, 11],
  [11, 12],
  [2, 6],
  [7, 10],
]

export default function NetworkField() {
  const root = useRef<SVGSVGElement>(null)

  useGSAP(
    () => {
      gsap.to('.net-node', {
        scale: 1.35,
        transformOrigin: 'center',
        duration: 1.8,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        stagger: { each: 0.18, from: 'random' },
      })

      gsap.to('.net-pulse', {
        opacity: 0.9,
        duration: 2.4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        stagger: 0.3,
      })

      gsap.fromTo(
        '.net-link',
        { strokeDashoffset: 24 },
        {
          strokeDashoffset: 0,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: 'none',
          stagger: 0.08,
        },
      )
    },
    { scope: root },
  )

  return (
    <svg
      ref={root}
      viewBox="0 0 800 460"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full scale-110"
      role="img"
      aria-label="Abstract talent network visualization"
    >
      <defs>
        <linearGradient id="linkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b79cff" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#936dff" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#b79cff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#936dff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {links.map(([a, b], i) => (
        <line
          key={i}
          className="net-link"
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="url(#linkGrad)"
          strokeWidth="1.4"
          strokeDasharray="6 10"
        />
      ))}

      {nodes.map((n, i) => (
        <g key={i}>
          <circle className="net-pulse" cx={n.cx} cy={n.cy} r={n.r * 4.2} fill="url(#nodeGlow)" opacity="0.25" />
          <circle className="net-node" cx={n.cx} cy={n.cy} r={n.r} fill="#fff" opacity="0.92" />
        </g>
      ))}
    </svg>
  )
}
