import Hero from './components/Hero'
import Integrations from './components/Integrations'
import Features from './components/Features'
import Privacy from './components/Privacy'
import Testimonials from './components/Testimonials'
import CompetitionMatrix from './components/CompetitionMatrix'
import Pricing from './components/Pricing'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    // Outer bg is dark #171717 — sections alternate white/dark on top
    <div style={{ background: '#171717', minHeight: '100vh' }}>
      <Hero />
      <Integrations />
      <Features />
      <Privacy />
      <Testimonials />
      <CompetitionMatrix />
      <Pricing />
      <DownloadCTA />
      <Footer />
    </div>
  )
}
