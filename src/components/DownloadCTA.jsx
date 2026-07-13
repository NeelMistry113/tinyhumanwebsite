// Desktop-235: w=1440 h=480, fills=WHITE
// Content: w=1264, horizontal layout, justify=SPACE_BETWEEN, align=CENTER
// Left: w=477, vertical gap=32
//   Heading "Explore OpenHumans": rgb(18,18,18), SF Pro 48px 510, ls=-1.35
//   Sub: "An open-source AI agent built with the human in mind" rgb(71,70,69), SF Pro 18px 400
//   "Download For macOS →": rgb(79,124,255), SF Pro 18px 510, ls=-0.18
// Right: image w=464 h=240

export default function DownloadCTA() {
  return (
    <section
      id="download"
      style={{
        width: '100%',
        background: '#ffffff',
        minHeight: 480,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          paddingLeft: 88,
          paddingRight: 88,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left content */}
        <div
          style={{
            width: 477,
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
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
              Explore OpenHumans
            </h2>
            <p
              style={{
                fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
                fontSize: 18,
                fontWeight: 400,
                lineHeight: '21.6px',
                color: 'rgb(71,70,69)',
                margin: 0,
                width: 292,
              }}
            >
              An open-source AI agent built with the human in mind
            </p>
          </div>

          <span
            style={{
              fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
              fontSize: 18,
              fontWeight: 510,
              lineHeight: '18px',
              letterSpacing: -0.18,
              color: 'rgb(79,124,255)',
              cursor: 'pointer',
            }}
          >
            Download For macOS →
          </span>
        </div>

        {/* Right: app screenshot */}
        <div
          style={{
            width: 464,
            height: 240,
            borderRadius: 16,
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <img
            src="/sections/explore-img.png"
            alt="OpenHuman app"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'right center',
            }}
          />
        </div>
      </div>
    </section>
  )
}
