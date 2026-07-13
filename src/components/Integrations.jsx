// Desktop-227: w=1440 h=493, fills=#171717
// Content container: w=1264, gap=64 (vertical), centered
// Title: "Work with all Tool" — white, SF Pro 48px weight 510
// Tool pills: white bg, radius=16, padding 16/16/12/12, gap=8 inside, gap=24 between pills
// Tool text: SF Pro 24px weight 400, black (#000)
// Row 1 tools: Notion, Gmail, Telegram, Slack, Docs, Sheets, Excel, Teams, Github
// Row 2: same, reversed direction

const tools1 = [
  { name: 'Notion',   src: '/sections/notion.svg' },
  { name: 'Gmail',    src: '/sections/gmail.svg' },
  { name: 'Telegram', src: '/sections/telegram.svg' },
  { name: 'Slack',    src: '/sections/Slack.svg' },
  { name: 'Sheets',   src: '/sections/sheet.svg' },
  { name: 'Excel',    src: '/sections/excel.svg' },
  { name: 'Teams',    src: '/sections/teams.svg' },
  { name: 'Github',   src: '/sections/github.svg' },
]

function ToolPill({ name, src }) {
  return (
    <div
      className="flex items-center shrink-0"
      style={{
        background: '#ffffff',
        borderRadius: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        gap: 8,
        height: 56,
      }}
    >
      <img src={src} alt={name} style={{ width: 32, height: 32, objectFit: 'contain' }} />
      <span
        style={{
          fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
          fontSize: 24,
          fontWeight: 400,
          lineHeight: '26.4px',
          color: '#000000',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </span>
    </div>
  )
}

function ScrollRow({ tools, reverse = false }) {
  const doubled = [...tools, ...tools, ...tools]
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className={`flex ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}
        style={{ gap: 24, width: 'max-content' }}
      >
        {doubled.map((t, i) => (
          <ToolPill key={i} name={t.name} src={t.src} />
        ))}
      </div>
    </div>
  )
}

export default function Integrations() {
  return (
    <section
      style={{
        width: '100%',
        background: '#171717',
        paddingTop: 120,
        paddingBottom: 120,
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <div
        style={{
          width: '100%',
          paddingLeft: 88,
          paddingRight: 88,
          marginBottom: 64,
        }}
      >
        <span
          style={{
            fontFamily: '-apple-system, SF Pro Display, Helvetica Neue, sans-serif',
            fontSize: 48,
            fontWeight: 510,
            lineHeight: '52.8px',
            color: '#ffffff',
          }}
        >
          Work with all Tool
        </span>
      </div>

      {/* Scrolling rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <ScrollRow tools={tools1} />
        <ScrollRow tools={[...tools1].reverse()} reverse />
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll { animation: scroll 35s linear infinite; }
        .animate-scroll-reverse { animation: scroll-reverse 35s linear infinite; }
      `}</style>
    </section>
  )
}

