type LogoProps = {
  className?: string
  light?: boolean
}

export default function Logo({ className = '', light = false }: LogoProps) {
  return (
    <span
      className={`font-display inline-flex items-center gap-2 text-[1.45rem] font-bold tracking-tight ${
        light ? 'text-white' : 'text-brand-ink'
      } ${className}`}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill={light ? 'rgba(255,255,255,0.16)' : '#936DFF'} />
        <circle cx="10" cy="12" r="2" fill="#fff" />
        <circle cx="16" cy="8" r="2" fill="#fff" />
        <circle cx="22" cy="12" r="2" fill="#fff" />
        <circle cx="16" cy="20" r="2" fill="#fff" />
        <path
          d="M10 12L16 8L22 12L16 20Z"
          stroke="#fff"
          strokeWidth="1.4"
          fill="none"
          opacity="0.9"
        />
      </svg>
      Hirearky
    </span>
  )
}
