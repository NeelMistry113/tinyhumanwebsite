import { useState } from 'react'

// Desktop-234: w=1440 h=1030, fills=#171717
// Cards container: w=1264, horizontal gap=32, shadow
// Starter card: rgb(245,245,245) outer, white inner, border rgb(241,240,239)
// Most Popular: gradient [rgb(91,140,255) -> rgb(79,124,255) -> rgb(125,168,255)], white text title
// Enterprise: same structure as Starter
// Price font: GEIST 40px weight 500, rgb(46,46,46)
// Feature items: Geist 16px weight 400, rgb(63,63,63)
// Check icon bg: rgb(245,245,245), rounded-full, icon fill rgb(63,63,63)
// "Start Now" Starter: rgb(229,229,229) bg, black text
// "Start Now" Popular: rgb(38,38,38) bg, white text
// Heading "Choose Your Plan": white, SF Pro centered
// Toggle: monthly/annual

function CheckIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <path d="M1 5l4 4L13 1" stroke="rgb(63,63,63)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function FeatureItem({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 24 }}>
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: 32,
          background: 'rgb(245,245,245)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <CheckIcon />
      </div>
      <span
        className="font-geist"
        style={{
          fontSize: 16,
          fontWeight: 400,
          lineHeight: '24px',
          color: 'rgb(63,63,63)',
        }}
      >
        {text}
      </span>
    </div>
  )
}

function PriceBox({ price, ctaBg, ctaText, ctaColor }) {
  return (
    <div
      style={{
        background: 'rgb(250,250,250)',
        border: '1px solid rgb(241,241,241)',
        borderRadius: 16,
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span
          className="font-geist"
          style={{
            fontSize: 40,
            fontWeight: 500,
            lineHeight: '48px',
            letterSpacing: -0.2,
            color: 'rgb(46,46,46)',
            textAlign: 'center',
          }}
        >
          {price}
        </span>
      </div>
      <button
        style={{
          background: ctaBg,
          borderRadius: 16,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 16,
          paddingBottom: 16,
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          height: 50,
        }}
      >
        <span
          style={{
            fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
            fontSize: 18,
            fontWeight: 510,
            lineHeight: '18px',
            letterSpacing: -0.18,
            color: ctaColor,
          }}
        >
          Start Now
        </span>
      </button>
    </div>
  )
}

function StarterCard({ annual }) {
  return (
    <div
      style={{
        width: 400,
        flexShrink: 0,
        background: 'rgb(245,245,245)',
        border: '1px solid rgb(241,240,239)',
        borderRadius: 24,
        paddingTop: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <div style={{ paddingLeft: 24, paddingRight: 24 }}>
        <span
          style={{
            fontFamily: '-apple-system, SF Pro Display, Helvetica Neue, sans-serif',
            fontSize: 32,
            fontWeight: 510,
            lineHeight: '38.4px',
            color: '#000000',
          }}
        >
          Starter
        </span>
      </div>
      <div
        style={{
          background: '#ffffff',
          borderRadius: 24,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <p style={{ margin: 0, fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif', fontSize: 18, fontWeight: 400, lineHeight: '21.6px', color: 'rgb(63,63,63)' }}>
          Perfect for getting started
        </p>
        <PriceBox
          price={annual ? '$16 / month' : '$20 / month'}
          ctaBg="rgb(229,229,229)"
          ctaColor="#000000"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {['2M tokens', 'upto 3 integrations', 'daily briefings', 'suggested actions'].map(f => (
            <FeatureItem key={f} text={f} />
          ))}
        </div>
      </div>
    </div>
  )
}

function PopularCard({ annual }) {
  return (
    <div
      style={{
        width: 400,
        flexShrink: 0,
        background: 'linear-gradient(180deg, rgb(91,140,255) 0%, rgb(79,124,255) 40%, rgb(125,168,255) 100%)',
        border: '1px solid rgb(241,240,239)',
        borderRadius: 24,
        paddingTop: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ornament overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.4) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ paddingLeft: 24, paddingRight: 24, position: 'relative' }}>
        <span
          style={{
            fontFamily: '-apple-system, SF Pro Display, Helvetica Neue, sans-serif',
            fontSize: 32,
            fontWeight: 510,
            lineHeight: '38.4px',
            color: '#ffffff',
          }}
        >
          Most Popular
        </span>
      </div>
      <div
        style={{
          background: '#ffffff',
          borderRadius: 24,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          position: 'relative',
        }}
      >
        <p style={{ margin: 0, fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif', fontSize: 18, fontWeight: 400, lineHeight: '21.6px', color: 'rgb(63,63,63)' }}>
          For power users. Everything in Free, plus
        </p>
        <PriceBox
          price={annual ? '$160 / month' : '$200 / month'}
          ctaBg="rgb(38,38,38)"
          ctaColor="#ffffff"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {['200M tokens', 'upto 10 integrations', 'everything in starter', 'advanced alerts', 'cross-platform memory', 'api access'].map(f => (
            <FeatureItem key={f} text={f} />
          ))}
        </div>
      </div>
    </div>
  )
}

function EnterpriseCard({ annual }) {
  return (
    <div
      style={{
        width: 400,
        flexShrink: 0,
        background: 'rgb(245,245,245)',
        border: '1px solid rgb(241,240,239)',
        borderRadius: 24,
        paddingTop: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <div style={{ paddingLeft: 24, paddingRight: 24 }}>
        <span
          style={{
            fontFamily: '-apple-system, SF Pro Display, Helvetica Neue, sans-serif',
            fontSize: 32,
            fontWeight: 510,
            lineHeight: '38.4px',
            color: '#000000',
          }}
        >
          Enterprise
        </span>
      </div>
      <div
        style={{
          background: '#ffffff',
          borderRadius: 24,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <p style={{ margin: 0, fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif', fontSize: 18, fontWeight: 400, lineHeight: '21.6px', color: 'rgb(63,63,63)' }}>
          Perfect for Big Enterprise
        </p>
        <PriceBox
          price="Custom / month"
          ctaBg="rgb(229,229,229)"
          ctaColor="#000000"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {['infinite tokens', 'unlimited integrations', 'everything in pro', 'custom dashboards for teams', 'data pipeline', 'special onboarding assistance'].map(f => (
            <FeatureItem key={f} text={f} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section
      id="pricing"
      style={{
        width: '100%',
        background: '#171717',
        paddingTop: 88,
        paddingBottom: 88,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 48,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, width: 890 }}>
        <h2
          style={{
            fontFamily: '-apple-system, SF Pro Display, Helvetica Neue, sans-serif',
            fontSize: 56,
            fontWeight: 510,
            lineHeight: '67.2px',
            color: '#ffffff',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Choose Your Plan
        </h2>

        {/* Toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgb(38,38,38)',
            borderRadius: 24,
            padding: 4,
            gap: 2,
          }}
        >
          <button
            onClick={() => setAnnual(false)}
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 20,
              border: 'none',
              cursor: 'pointer',
              background: !annual ? '#ffffff' : 'transparent',
              color: !annual ? '#000000' : 'rgba(255,255,255,0.5)',
              fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
              fontSize: 16,
              fontWeight: 510,
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 20,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: annual ? '#ffffff' : 'transparent',
              color: annual ? '#000000' : 'rgba(255,255,255,0.5)',
              fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
              fontSize: 16,
              fontWeight: 510,
            }}
          >
            Annually
            <span
              style={{
                background: annual ? 'rgb(79,124,255)' : 'rgba(79,124,255,0.3)',
                color: annual ? '#ffffff' : 'rgb(79,124,255)',
                fontSize: 11,
                fontWeight: 600,
                padding: '2px 6px',
                borderRadius: 6,
              }}
            >
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        style={{
          display: 'flex',
          gap: 32,
          boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
        }}
      >
        <StarterCard annual={annual} />
        <PopularCard annual={annual} />
        <EnterpriseCard annual={annual} />
      </div>
    </section>
  )
}
