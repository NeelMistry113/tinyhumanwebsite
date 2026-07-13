// Desktop-230: w=1440 h=452, fills=#171717
// Content: w=890, centered, vertical gap=48
// Title: "Your data never leaves your laptop" — white, SF Pro 48px weight 510, centered
// Sub: rgb(140,140,134), Inter 18px weight 400, centered, w=636
// Buttons:
//   "Check Documents": white bg, dark text #171717, radius=16, padding 14/14/24/24
//   "Try app": outlined, border rgb(235,235,232) 1px, white text, radius=16, padding 14/14/24/24

export default function Privacy() {
  return (
    <section
      style={{
        width: '100%',
        background: '#171717',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 452,
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          width: 890,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 48,
        }}
      >
        {/* Text group */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <h2
            style={{
              fontFamily: '-apple-system, SF Pro Display, Helvetica Neue, sans-serif',
              fontSize: 48,
              fontWeight: 510,
              lineHeight: '57.6px',
              color: '#ffffff',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Your data&nbsp;never leaves&nbsp;your laptop
          </h2>
          <p
            style={{
              fontFamily: 'Inter, -apple-system, sans-serif',
              fontSize: 18,
              fontWeight: 400,
              lineHeight: '23.4px',
              color: 'rgb(140,140,134)',
              textAlign: 'center',
              width: 636,
              margin: 0,
            }}
          >
            OpenHuman runs locally on your hardware. Every data point is encrypted and never stored on a server.
          </p>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {/* Check Documents */}
          <button
            style={{
              background: '#ffffff',
              borderRadius: 16,
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 14,
              paddingBottom: 14,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 44,
            }}
          >
            <span
              style={{
                fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
                fontSize: 16,
                fontWeight: 510,
                lineHeight: '16px',
                letterSpacing: -0.16,
                color: '#171717',
              }}
            >
              Check Documents
            </span>
          </button>

          {/* Try app */}
          <button
            style={{
              background: 'transparent',
              borderRadius: 16,
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 14,
              paddingBottom: 14,
              border: '1px solid rgb(235,235,232)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 44,
            }}
          >
            <span
              style={{
                fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
                fontSize: 16,
                fontWeight: 510,
                lineHeight: '16px',
                letterSpacing: -0.16,
                color: '#ffffff',
              }}
            >
              Try app
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
