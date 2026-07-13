const resources = ['Documentation', 'Support', 'Pricing', 'Legal']
const company = ['Email', 'X (twitter)', 'Instagram', 'Github']

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: 'rgb(250,250,248)',
        minHeight: 398,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
        paddingBottom: 60,
      }}
    >
      <div
        style={{
          width: '100%',
          paddingLeft: 88,
          paddingRight: 88,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* Left: logo + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <img src="/sections/logo.svg" alt="TinyHumans" style={{ height: 32, width: 'auto', filter: 'brightness(0)', display: 'block' }} />
          <p
            style={{
              fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '20.8px',
              color: 'rgb(140,140,134)',
              margin: 0,
              maxWidth: 280,
            }}
          >
            Your Personal AI super intelligence. Private, Simple and extremely powerful.
          </p>
        </div>

        {/* Right: nav link columns */}
        <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }}>
          {/* Resources */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span
              style={{
                fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
                fontSize: 18,
                fontWeight: 510,
                lineHeight: '21.6px',
                color: 'rgb(11,11,12)',
              }}
            >
              Resources
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {resources.map(item => (
                <span
                  key={item}
                  style={{
                    fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: '19.2px',
                    color: 'rgb(140,140,134)',
                    cursor: 'pointer',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Company */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span
              style={{
                fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
                fontSize: 18,
                fontWeight: 510,
                lineHeight: '21.6px',
                color: 'rgb(11,11,12)',
              }}
            >
              Company
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {company.map(item => (
                <span
                  key={item}
                  style={{
                    fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: '19.2px',
                    color: 'rgb(140,140,134)',
                    cursor: 'pointer',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
