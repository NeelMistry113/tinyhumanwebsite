// Hero: w=1440 h=900, fills=WHITE, radius=[0,0,64,64]
// Background: full-width image (1600x900, centered, cover)
// Nav overlaid on top
import Nav from './Nav'

export default function Hero() {
  return (
    <section
      style={{
        width: '100%',
        height: '100vh',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        clipPath: 'inset(0 0 0 0 round 0 0 64px 64px)',
      }}
    >
      {/* Background video fills the section */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transform: 'scale(1.05)',
        }}
      >
        <source src="/sections/hero.mp4" type="video/mp4" />
      </video>

      <Nav />
    </section>
  )
}
