import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import OpenSource from './components/OpenSource'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function PortfolioLanding() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const targetEl = document.getElementById(targetId)
      if (targetEl) {
        // Wait slightly for slide transition to complete
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' })
        }, 750)
      }
    }
  }, [location.hash])

  return (
    <div className="bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-200">
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <OpenSource />
      <Faq />
      <Footer />
    </div>
  )
}
