import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import OpenSource from './components/OpenSource'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function PortfolioLanding() {
  return (
    <div className="bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-200">
      <Nav />
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
