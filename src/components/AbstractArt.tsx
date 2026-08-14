type Variant = 'network' | 'orbit' | 'signal' | 'spark'

type AbstractArtProps = {
  variant?: Variant
  className?: string
}

/** Decorative abstract art — no people, Hirearky purple family */
export default function AbstractArt({ variant = 'network', className = '' }: AbstractArtProps) {
  if (variant === 'orbit') {
    return (
      <svg viewBox="0 0 480 320" className={className} aria-hidden="true">
        <circle cx="240" cy="160" r="86" fill="#936DFF" opacity="0.18" />
        <circle cx="240" cy="160" r="52" fill="#936DFF" opacity="0.28" />
        <circle cx="240" cy="160" r="18" fill="#6941C6" />
        <ellipse cx="240" cy="160" rx="150" ry="54" fill="none" stroke="#42307D" strokeWidth="3" opacity="0.35" transform="rotate(-18 240 160)" />
        <ellipse cx="240" cy="160" rx="150" ry="54" fill="none" stroke="#936DFF" strokeWidth="3" opacity="0.45" transform="rotate(28 240 160)" />
        <circle cx="120" cy="110" r="10" fill="#FFE8D6" />
        <circle cx="360" cy="210" r="12" fill="#E4F7F1" />
        <circle cx="330" cy="90" r="8" fill="#B79CFF" />
      </svg>
    )
  }

  if (variant === 'signal') {
    return (
      <svg viewBox="0 0 480 320" className={className} aria-hidden="true">
        <rect x="70" y="70" width="340" height="180" rx="40" fill="#fff" opacity="0.55" />
        <path d="M110 200 C160 120, 220 240, 280 140 S380 100, 400 160" fill="none" stroke="#936DFF" strokeWidth="10" strokeLinecap="round" />
        <circle cx="160" cy="168" r="14" fill="#6941C6" />
        <circle cx="250" cy="170" r="14" fill="#936DFF" />
        <circle cx="340" cy="148" r="14" fill="#42307D" />
        <rect x="300" y="210" width="90" height="22" rx="11" fill="#FFE8D6" />
      </svg>
    )
  }

  if (variant === 'spark') {
    return (
      <svg viewBox="0 0 480 320" className={className} aria-hidden="true">
        <path d="M240 40 L268 130 L360 130 L286 186 L312 276 L240 220 L168 276 L194 186 L120 130 L212 130 Z" fill="#936DFF" opacity="0.9" />
        <circle cx="100" cy="90" r="16" fill="#FFE8D6" />
        <circle cx="390" cy="240" r="22" fill="#E4F7F1" />
        <circle cx="380" cy="80" r="10" fill="#B79CFF" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 480 320" className={className} aria-hidden="true">
      <circle cx="120" cy="90" r="16" fill="#936DFF" />
      <circle cx="240" cy="70" r="12" fill="#B79CFF" />
      <circle cx="360" cy="110" r="18" fill="#6941C6" />
      <circle cx="180" cy="190" r="14" fill="#42307D" />
      <circle cx="300" cy="210" r="16" fill="#936DFF" />
      <circle cx="390" cy="250" r="12" fill="#FFE8D6" />
      <circle cx="100" cy="250" r="14" fill="#E4F7F1" />
      <path d="M120 90 L240 70 L360 110 L300 210 L180 190 Z" fill="none" stroke="#2F214F" strokeWidth="3" opacity="0.35" />
      <path d="M180 190 L100 250 M300 210 L390 250 M240 70 L180 190" fill="none" stroke="#936DFF" strokeWidth="3" opacity="0.55" />
    </svg>
  )
}
