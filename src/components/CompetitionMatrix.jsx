// Figma node 4697-17445 — Desktop 243
// Section: 1440x1184, white bg, borderRadius [0,0,64,64]
// Title: "Competition matrix" — fs=48, fw=510, rgb(11,11,12), centered, rel_y=120
// Table container: 1000px wide, rel_x=220, rel_y=242, bg=white, border=0.79px rgb(184,184,178), r=24, padding=32
// Header row gap: 19px | Row gap: 6px
// Cell padding: ~13px all sides
// Col widths: feature=158, cowork=158, openclaw=158, hermes=158, openhuman=227
// Row divider: 0.79px rgb(220,220,216) — top border only (between rows)
// Feature label: fs=18, fw=510, rgb(74,74,70)
// Competitor cell text: fs=18, fw=400, rgb(74,74,70)
// OpenHuman cell text: fs=18, fw=510, rgb(11,11,12)
// Icons: /sections/correct.svg | /sections/cross.svg | /sections/warrning.svg — 19px

const rows = [
  {
    feature: 'Open-Source',
    cowork:     { icon: 'cross',   label: 'Proprietary' },
    openclaw:   { icon: 'correct', label: 'MIT' },
    hermes:     { icon: 'correct', label: 'MIT' },
    openhuman:  { icon: 'correct', label: 'GNU' },
  },
  {
    feature: 'Simple to Start',
    cowork:     { icon: 'correct',  label: 'Desktop + CLI' },
    openclaw:   { icon: 'warrning', label: 'Terminal - first' },
    hermes:     { icon: 'warrning', label: 'Terminal - first' },
    openhuman:  { icon: 'correct',  label: 'Clean UI, minutes' },
  },
  {
    feature: 'Cost',
    cowork:     { icon: 'warrning', label: 'Sub + add - ons' },
    openclaw:   { icon: 'warrning', label: 'BYO models' },
    hermes:     { icon: 'warrning', label: 'BYO models' },
    openhuman:  { icon: 'correct',  label: 'One sub + TokenJuice' },
  },
  {
    feature: 'Memory',
    cowork:     { icon: 'correct',  label: 'Chat scoped' },
    openclaw:   { icon: 'warrning', label: 'Plugin reliant' },
    hermes:     { icon: 'correct',  label: 'Self learning' },
    openhuman:  { icon: 'correct',  label: 'Memory Tree + Obsidian vault, optional agent memory backend' },
  },
  {
    feature: 'Integrations',
    cowork:     { icon: 'warrning', label: 'Few connectors' },
    openclaw:   { icon: 'warrning', label: 'BYO' },
    hermes:     { icon: 'warrning', label: 'BYO' },
    openhuman:  { icon: 'correct',  label: '118+ via OAuth' },
  },
  {
    feature: 'Auto-fetch',
    cowork:     { icon: 'cross',   label: 'None' },
    openclaw:   { icon: 'cross',   label: 'None' },
    hermes:     { icon: 'cross',   label: 'None' },
    openhuman:  { icon: 'correct', label: '20 min sync into memory' },
  },
  {
    feature: 'API sprawl',
    cowork:     { icon: 'cross',   label: 'Extra keys' },
    openclaw:   { icon: 'cross',   label: 'BYOK' },
    hermes:     { icon: 'cross',   label: 'Multi vendor' },
    openhuman:  { icon: 'correct', label: 'One account' },
  },
  {
    feature: 'Model Routing',
    cowork:     { icon: 'cross',    label: 'Single model' },
    openclaw:   { icon: 'warrning', label: 'Manual' },
    hermes:     { icon: 'warrning', label: 'Manual' },
    openhuman:  { icon: 'correct',  label: 'Built-in' },
  },
  {
    feature: 'Model Routing',
    cowork:     { icon: 'correct', label: 'Code Only' },
    openclaw:   { icon: 'correct', label: 'Code Only' },
    hermes:     { icon: 'correct', label: 'Code Only' },
    openhuman:  { icon: 'correct', label: 'Code + search + scraper + Voice' },
  },
]

function Cell({ value, isOpenHuman }) {
  const color = isOpenHuman ? 'rgb(11,11,12)' : 'rgb(74,74,70)'
  const weight = isOpenHuman ? 510 : 400
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 6,
        padding: '13px 13px',
      }}
    >
      <img
        src={`/sections/${value.icon}.svg`}
        alt={value.icon}
        style={{ width: 19, height: 19, flexShrink: 0, marginTop: 1 }}
      />
      <span
        style={{
          fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
          fontSize: 18,
          fontWeight: weight,
          lineHeight: '19.8px',
          color,
        }}
      >
        {value.label}
      </span>
    </div>
  )
}

export default function CompetitionMatrix() {
  return (
    <section
      style={{
        width: '100%',
        background: '#ffffff',
        borderBottomLeftRadius: 64,
        borderBottomRightRadius: 64,
        paddingTop: 120,
        paddingBottom: 120,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 64,
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontFamily: '-apple-system, SF Pro Display, Helvetica Neue, sans-serif',
          fontSize: 48,
          fontWeight: 510,
          lineHeight: '57.6px',
          color: 'rgb(11,11,12)',
          textAlign: 'center',
          margin: 0,
        }}
      >
        Competition matrix
      </h2>

      {/* Table */}
      <div
        style={{
          width: 1000,
          background: '#ffffff',
          border: '0.79px solid rgb(184,184,178)',
          borderRadius: 24,
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        {/* Column header row */}
        <div
          style={{
            display: 'flex',
            gap: 19,
            alignItems: 'center',
            paddingLeft: 13,
            paddingBottom: 6,
          }}
        >
          <div style={{ width: 158, flexShrink: 0 }} />
          {[
            { label: 'Claude Cowork', w: 158, highlight: false },
            { label: 'OpenClaw',      w: 158, highlight: false },
            { label: 'Hermes Agent',  w: 158, highlight: false },
            { label: 'OpenHuman',     w: 227, highlight: true  },
          ].map((col) => (
            <div
              key={col.label}
              style={{
                width: col.w,
                flexShrink: 0,
                fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
                fontSize: 18,
                fontWeight: 510,
                lineHeight: '19.8px',
                color: col.highlight ? 'rgb(11,11,12)' : 'rgb(102,102,97)',
              }}
            >
              {col.label}
            </div>
          ))}
        </div>

        {/* Data rows */}
        {rows.map((row, i) => (
          <div
            key={`${row.feature}-${i}`}
            style={{
              display: 'flex',
              gap: 19,
              alignItems: 'flex-start',
              borderTop: '0.79px solid rgb(220,220,216)',
            }}
          >
            {/* Feature label */}
            <div
              style={{
                width: 158,
                flexShrink: 0,
                padding: '13px 13px',
                display: 'flex',
                alignItems: 'center',
                minHeight: 44,
              }}
            >
              <span
                style={{
                  fontFamily: '-apple-system, SF Pro Text, Helvetica Neue, sans-serif',
                  fontSize: 18,
                  fontWeight: 510,
                  lineHeight: '19.8px',
                  color: 'rgb(74,74,70)',
                }}
              >
                {row.feature}
              </span>
            </div>

            {/* Competitor cells */}
            {(['cowork', 'openclaw', 'hermes']).map((key) => (
              <div key={key} style={{ width: 158, flexShrink: 0 }}>
                <Cell value={row[key]} isOpenHuman={false} />
              </div>
            ))}

            {/* OpenHuman cell */}
            <div style={{ width: 227, flexShrink: 0 }}>
              <Cell value={row.openhuman} isOpenHuman />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
