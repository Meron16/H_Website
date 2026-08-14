type LogoProps = {
  className?: string
  light?: boolean
}

export default function Logo({ className = '', light = false }: LogoProps) {
  return (
    <img
      src={light ? '/hirearky-logo-light.png' : '/hirearky-logo.png'}
      alt="Hirearky"
      className={`h-8 w-auto md:h-9 ${className}`}
      onError={(e) => {
        // fallback if light variant missing
        e.currentTarget.src = '/hirearky-logo.png'
      }}
    />
  )
}
