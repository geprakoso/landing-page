import { useEffect, useState } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import PortfolioLanding from './LandingPage'
import ContactPage from './pages/ContactPage'

function NavigationWrapper() {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setIsTransitioning(true)
      setCurrentPath(location.pathname)

      const blurEl = document.getElementById('horizontal-blur-element')
      
      let start: number | null = null
      const duration = 800
      
      const animate = (timestamp: number) => {
        if (!start) start = timestamp
        const elapsed = timestamp - start
        const progress = Math.min(elapsed / duration, 1)
        
        // Sine wave to peak standard deviation at progress 0.5 (middle of slide)
        const blurAmount = Math.sin(progress * Math.PI) * 16

        if (blurEl) {
          blurEl.setAttribute('stdDeviation', `${blurAmount},0`)
        }

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setIsTransitioning(false)
          if (blurEl) blurEl.setAttribute('stdDeviation', '0,0')
        }
      }

      requestAnimationFrame(animate)
    }
  }, [location.pathname, currentPath])

  const isContact = currentPath === '/contact'

  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <Nav />
      <div className="w-full overflow-hidden bg-black flex-1">
        {/* SVG filter definition for horizontal motion blur */}
        <svg style={{ display: 'none' }}>
          <defs>
            <filter id="horizontal-motion-blur">
              <feGaussianBlur id="horizontal-blur-element" stdDeviation="0,0" />
            </filter>
          </defs>
        </svg>
        
        <div 
          className="flex w-[calc(200vw+40px)] min-h-screen transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: isContact ? 'translateX(calc(-100vw - 40px))' : 'translateX(0)',
            filter: isTransitioning ? 'url(#horizontal-motion-blur)' : 'none',
            willChange: 'transform, filter',
          }}
        >
          {/* Home Screen (Page 1) */}
          <div className="w-screen shrink-0 bg-white">
            <PortfolioLanding />
          </div>
          
          {/* Black Gap */}
          <div className="w-[40px] shrink-0 bg-black" />

          {/* Contact Screen (Page 2) */}
          <div className="w-screen shrink-0 bg-white">
            <ContactPage />
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <NavigationWrapper />
    </BrowserRouter>
  )
}

export default App
