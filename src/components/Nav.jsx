// Nav: h=88, padding L/R=88, T/B=24, gap=8, backdrop-blur=3px
// Logo: TinyHumans white vectors
// Links: Pricing, Docs — SF Pro 16px weight 510 white, ls=-0.16
// CTA "Download": bg=#171717, white text, radius=16, padding 14px T/B 24px L/R
export default function Nav() {
  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        height: 88,
        paddingLeft: 88,
        paddingRight: 88,
        paddingTop: 24,
        paddingBottom: 24,
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        gap: 8,
      }}
    >
      {/* Logo */}
      <img src="/sections/logo.svg" alt="TinyHumans" style={{ height: 32, width: 'auto' }} />

      {/* Nav right: links + CTA */}
      <div className="flex items-center" style={{ gap: 16 }}>
        {/* Pricing link */}
        <div
          className="flex items-center justify-center cursor-pointer"
          style={{ padding: '8px 8px', borderRadius: 0 }}
        >
          <span
            className="text-white"
            style={{
              fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
              fontSize: 16,
              fontWeight: 510,
              letterSpacing: -0.16,
              lineHeight: '19.2px',
            }}
          >
            Pricing
          </span>
        </div>

        {/* Docs link */}
        <div
          className="flex items-center justify-center cursor-pointer"
          style={{ padding: '8px 8px', borderRadius: 0 }}
        >
          <span
            className="text-white"
            style={{
              fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
              fontSize: 16,
              fontWeight: 510,
              letterSpacing: -0.16,
              lineHeight: '19.2px',
            }}
          >
            Docs
          </span>
        </div>

        {/* Download CTA button */}
        <button
          className="flex items-center justify-center cursor-pointer"
          style={{
            background: '#171717',
            borderRadius: 16,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 14,
            paddingBottom: 14,
            border: 'none',
            height: 44,
            gap: 8,
          }}
        >
          <span
            className="text-white"
            style={{
              fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
              fontSize: 16,
              fontWeight: 510,
              letterSpacing: -0.16,
              lineHeight: '16px',
            }}
          >
            Download
          </span>
        </button>
      </div>
    </nav>
  )
}
