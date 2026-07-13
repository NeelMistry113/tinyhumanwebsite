import { useEffect, useRef } from 'react'

// Figma node 4695-16635 — Desktop 239–242
// Card: white bg, borderRadius 64px top (last card: all 4 corners)
// paddingLeft/Right: 88px, paddingTop: 64px
// Header gap: 24px (tag → divider → headline)
// Between header and image: 32px
// Tag: 18px fw=400 rgb(102,102,97) textTransform uppercase
// Divider: 2px solid rgb(229,229,229)
// Headline: 48px fw=510 lh=52.8px rgb(0,0,0)
// Subtitle (feature 2 only): 18px fw=400 rgb(82,82,82)

const features = [
  {
    tag: 'no code setup / easy to use',
    headline: "You shouldn't need to be an engineer to run AI agents",
    subtitle: null,
    image: '/sections/feature1.png',
    roundBottom: false,
  },
  {
    tag: 'Integrations',
    headline: 'Plugs into the apps your work already lives in',
    subtitle: "One-click OAuth logins for all app connectors. The last app you'll ever install.",
    image: '/sections/feature2.png',
    roundBottom: false,
  },
  {
    tag: 'memory and context',
    headline: "You don't have to explain yourself to your assistant ever again",
    subtitle: null,
    image: '/sections/features3.png',
    roundBottom: false,
  },
  {
    tag: 'proactive',
    headline: 'Proactive, not reactive',
    subtitle: null,
    image: '/sections/feature4.png',
    roundBottom: true,
  },
]

function FeatureCard({ feature }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#ffffff',
        borderRadius: feature.roundBottom ? 64 : '64px 64px 0 0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Inner layout with left/right padding */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 88,
          paddingRight: 88,
          paddingTop: 64,
          gap: 32,
          overflow: 'hidden',
        }}
      >
        {/* ── Header: tag + divider + headline ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            flexShrink: 0,
          }}
        >
          {/* Tag — hidden for preview */}
          {/* <span
            style={{
              fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
              fontSize: 18,
              fontWeight: 400,
              lineHeight: '23.4px',
              color: 'rgb(102,102,97)',
              textTransform: 'uppercase',
              letterSpacing: 0,
            }}
          >
            {feature.tag}
          </span>

          <div style={{ height: 2, background: 'rgb(229,229,229)', flexShrink: 0 }} /> */}

          {/* Headline + optional subtitle */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: feature.subtitle ? 16 : 8,
            }}
          >
            <h2
              style={{
                fontFamily: '-apple-system, SF Pro Display, Helvetica Neue, sans-serif',
                fontSize: 48,
                fontWeight: 510,
                lineHeight: '52.8px',
                letterSpacing: 0,
                color: 'rgb(0,0,0)',
                margin: 0,
                maxWidth: 827,
              }}
            >
              {feature.headline}
            </h2>
            {feature.subtitle && (
              <p
                style={{
                  fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: '23.4px',
                  color: 'rgb(82,82,82)',
                  margin: 0,
                  maxWidth: 396,
                }}
              >
                {feature.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* ── App screenshot ── */}
        <div
          style={{
            flex: 1,
            minHeight: 0,
            borderRadius: '16px 16px 0 0',
            overflow: 'hidden',
          }}
        >
          <img
            src={feature.image}
            alt={feature.headline}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const containerRef = useRef(null)
  const n = features.length

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current
      if (!el) return
      const { top, height } = el.getBoundingClientRect()
      const vh = window.innerHeight
      const scrollable = height - vh
      if (scrollable <= 0) return
      const progress = Math.max(0, Math.min(1, -top / scrollable))

      el.querySelectorAll('[data-card]').forEach((card, i) => {
        if (i === 0) {
          card.style.transform = 'translateY(0%)'
          return
        }
        // slide-in window: card i starts at progress=i/n, completes at i/n + 0.5/n
        const start = i / n
        const range = 0.5 / n
        const t = Math.max(0, Math.min(1, (progress - start) / range))
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3)
        card.style.transform = `translateY(${(1 - eased) * 100}%)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [n])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: `${n * 100}vh`,
        background: '#171717',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {features.map((feat, i) => (
          <div
            key={i}
            data-card=""
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: i + 1,
              willChange: 'transform',
              transform: i === 0 ? 'translateY(0%)' : 'translateY(100%)',
            }}
          >
            <FeatureCard feature={feat} />
          </div>
        ))}
      </div>
    </div>
  )
}
