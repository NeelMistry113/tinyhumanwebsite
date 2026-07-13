// Desktop-231: w=1440 h=805, fills=WHITE, radius=[64,64,0,0] (top corners)
// Header: "Friends of OpenHumans" rgb(18,18,18), SF Pro 48px 510, ls=-1.35
// Sub: "See what people are saying." rgb(71,70,69), SF Pro 18px 400
// "Follow Family" link: rgb(52,52,50), SF Pro 16px 510, ls=-0.44
// Cards: white bg, border 1px rgb(235,235,232), radius=16, padding=32
//   Card w=540, gap between cards=24
//   Author name: SF Pro 14px 590, rgb(71,70,69)
//   @handle: SF Pro 14px 400, rgb(132,129,128)
//   Tweet text: Inter 17px 400, ls=-0.22, rgb(71,70,69), line-height=26px
// Two scrolling rows: w=1751 (overflows), gap=24

const testimonials = [
  {
    name: 'floguo',
    handle: '@floguo',
    text: "One of the best mobile apps *ever* is going to drop soon, and it's a crypto wallet. @family is building beautifully friendly crypto software & I haven't been this giddy in ages",
  },
  {
    name: 'floguo',
    handle: '@floguo',
    text: "One of the best mobile apps *ever* is going to drop soon, and it's a crypto wallet. @family is building beautifully friendly crypto software & I haven't been this giddy in ages",
  },
  {
    name: 'floguo',
    handle: '@floguo',
    text: "One of the best mobile apps *ever* is going to drop soon, and it's a crypto wallet. @family is building beautifully friendly crypto software & I haven't been this giddy in ages",
  },
]

// X/Twitter icon — rgb(52,52,50)
function XIcon() {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
      <path
        d="M11.9 9.1L18.3 2h-1.5L11.2 8.1 7 2H2l6.7 9.8L2 19h1.5l5.8-6.7 4.6 6.7H19L11.9 9.1zm-2 2.3l-.7-1L3.7 3h2.3l4.4 6.3.7 1 5.7 8.2h-2.3l-4.6-6.1z"
        fill="rgb(52,52,50)"
      />
    </svg>
  )
}

function Avatar({ initials }) {
  return (
    <div
      style={{
        width: 42,
        height: 42,
        borderRadius: 42,
        background: 'linear-gradient(135deg, #e8e8e6 0%, #d0d0ce 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 600, color: 'rgb(71,70,69)' }}>
        {initials}
      </span>
    </div>
  )
}

function TestimonialCard({ name, handle, text }) {
  return (
    <div
      style={{
        width: 540,
        flexShrink: 0,
        background: '#ffffff',
        border: '1px solid rgb(235,235,232)',
        borderRadius: 16,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      {/* Author row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <Avatar initials={name[0].toUpperCase()} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <span
              style={{
                fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
                fontSize: 14,
                fontWeight: 590,
                lineHeight: '16.8px',
                color: 'rgb(71,70,69)',
              }}
            >
              {name}
            </span>
            <span
              style={{
                fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '16.8px',
                color: 'rgb(132,129,128)',
              }}
            >
              {handle}
            </span>
          </div>
        </div>
        <XIcon />
      </div>

      {/* Tweet text */}
      <p
        style={{
          fontFamily: 'Inter, -apple-system, sans-serif',
          fontSize: 17,
          fontWeight: 400,
          lineHeight: '26px',
          letterSpacing: -0.22,
          color: 'rgb(71,70,69)',
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  )
}

function ScrollRow({ items, reverse = false }) {
  const tripled = [...items, ...items, ...items]
  return (
    <div style={{ overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          gap: 24,
          width: 'max-content',
          animation: reverse
            ? 'scrollBack 40s linear infinite'
            : 'scrollFwd 40s linear infinite',
        }}
      >
        {tripled.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      style={{
        width: '100%',
        background: '#ffffff',
        borderTopLeftRadius: 64,
        borderTopRightRadius: 64,
        overflow: 'hidden',
        paddingTop: 88,
        paddingBottom: 88,
      }}
    >
      {/* Header */}
      <div
        style={{
          width: '100%',
          paddingLeft: 88,
          paddingRight: 88,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: 48,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2
            style={{
              fontFamily: '-apple-system, SF Pro Display, Helvetica Neue, sans-serif',
              fontSize: 48,
              fontWeight: 510,
              lineHeight: '48px',
              letterSpacing: -1.35,
              color: 'rgb(18,18,18)',
              margin: 0,
            }}
          >
            Friends of OpenHumans
          </h2>
          <p
            style={{
              fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
              fontSize: 18,
              fontWeight: 400,
              lineHeight: '21.6px',
              color: 'rgb(71,70,69)',
              margin: 0,
            }}
          >
            See what people are saying.
          </p>
        </div>

        {/* Follow link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            borderRadius: 8,
            cursor: 'pointer',
          }}
        >
          <XIcon />
          <span
            style={{
              fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
              fontSize: 16,
              fontWeight: 510,
              lineHeight: '19.1px',
              letterSpacing: -0.44,
              color: 'rgb(52,52,50)',
            }}
          >
            Follow Family
          </span>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
            <circle cx="11.5" cy="11.5" r="11" stroke="rgb(52,52,50)" strokeWidth="1"/>
            <path d="M8 14l7-7M10 7h5v5" stroke="rgb(52,52,50)" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Scrolling rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <ScrollRow items={testimonials} />
        <ScrollRow items={[...testimonials].reverse()} reverse />
      </div>

      <style>{`
        @keyframes scrollFwd {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scrollBack {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  )
}
