import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/contact' },
]

const RollText = ({ text }: { text: string }) => (
  <span className="inline-flex overflow-hidden h-[20px] leading-[20px] relative select-none">
    {text.split('').map((char, index) => (
      <span
        key={index}
        className="block relative transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover:-translate-y-[20px]"
        style={{
          transitionDelay: `${index * 0.02}s`,
          textShadow: '0 20px 0 currentColor',
          paddingRight: char === ' ' ? '0.25em' : '0',
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
)

const RANDOM_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%&'.split('')

const SlotChar = ({ char, index, isHovered, isActive = false }: { char: string; index: number; isHovered: boolean; isActive?: boolean }) => {
  const [reel, setReel] = useState<string[]>([char])
  const [isSpinning, setIsSpinning] = useState(false)
  const prevActiveRef = useRef<boolean | undefined>(undefined)

  useEffect(() => {
    if (isHovered) {
      setIsSpinning(true)
      return
    }

    const wasActive = prevActiveRef.current
    prevActiveRef.current = isActive

    // Trigger spin if it becomes active (either on mount or when scrolling back up)
    if (isActive && (wasActive === false || wasActive === undefined)) {
      setIsSpinning(true)
      const duration = (1.2 + index * 0.2) * 1000
      const timer = setTimeout(() => {
        setIsSpinning(false)
      }, duration)
      return () => clearTimeout(timer)
    }

    if (!isActive) {
      setIsSpinning(false)
    }
  }, [isActive, isHovered, index])

  useEffect(() => {
    if (isSpinning) {
      const reelLength = 22 + index * 4
      const newReel = [char]
      for (let i = 0; i < reelLength - 2; i++) {
        newReel.push(RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)])
      }
      newReel.push(char)
      setReel(newReel)
    } else {
      setReel([char])
    }
  }, [isSpinning, char, index])

  if (char === ' ') {
    return <span className="w-[0.25em] inline-block">&nbsp;</span>
  }

  const duration = 1.2 + index * 0.2

  return (
    <span className="inline-block h-[20px] overflow-hidden relative">
      {/* Static hidden character that preserves the native letter width */}
      <span className="invisible block h-[20px] leading-[20px] select-none">{char}</span>
      <span
        className="absolute left-0 top-0 w-full"
        style={{
          transform: isSpinning && reel.length > 1 
            ? `translateY(-${(reel.length - 1) * 20}px)` 
            : 'translateY(0)',
          transition: isSpinning 
            ? `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)` 
            : 'none',
        }}
      >
        {reel.map((c, i) => (
          <span key={i} className="block h-[20px] leading-[20px] text-center w-full select-none">
            {c}
          </span>
        ))}
      </span>
    </span>
  )
}

const SlotText = ({ text, isHovered, isActive = false, className = '' }: { text: string; isHovered: boolean; isActive?: boolean; className?: string }) => (
  <span className={`inline-block select-none ${className}`}>
    {text.split('').map((char, index) => (
      <SlotChar key={index} char={char} index={index} isHovered={isHovered} isActive={isActive} />
    ))}
  </span>
)

export default function Nav() {
  const location = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [pillStyle, setPillStyle] = useState<React.CSSProperties>({
    left: 0,
    width: 0,
    opacity: 0,
  })

  // Detect active index on initial load/path changes
  useEffect(() => {
    if (location.pathname === '/contact') {
      setActiveIndex(3)
    } else if (location.pathname === '/') {
      if (location.hash === '#about') setActiveIndex(0)
      else if (location.hash === '#experience') setActiveIndex(1)
      else if (location.hash === '#projects') setActiveIndex(2)
      else setActiveIndex(-1)
    } else {
      setActiveIndex(null)
    }
  }, [location.pathname])

  // Scroll spy to update active index on scroll
  useEffect(() => {
    if (location.pathname !== '/') {
      return
    }

    const sectionIds = ['about', 'experience', 'projects']
    
    // We add a slight timeout to wait for elements to be fully mounted in the DOM
    const setupObserver = () => {
      const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
      
      const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id === 'about') setActiveIndex(0)
            else if (id === 'experience') setActiveIndex(1)
            else if (id === 'projects') setActiveIndex(2)
          }
        })
      }, observerOptions)

      elements.forEach(el => observer.observe(el))

      return () => {
        elements.forEach(el => observer.unobserve(el))
      }
    }

    const cleanupObserver = setupObserver()

    // Handle scroll back to top of page (reset active index to logo / -1)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveIndex(-1)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      cleanupObserver()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname])

  // Update pill coordinates based on hover or active index
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex
    if (targetIndex === null) {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }))
      return
    }

    let targetElement: HTMLElement | null = null

    if (targetIndex === -1) {
      targetElement = container.querySelector('.logo-link') as HTMLElement
    } else {
      const linksElements = container.querySelectorAll('.menu-item-link')
      targetElement = linksElements[targetIndex] as HTMLElement
    }

    if (targetElement) {
      setPillStyle({
        left: targetElement.offsetLeft,
        width: targetElement.offsetWidth,
        height: targetElement.offsetHeight,
        top: targetElement.offsetTop,
        opacity: 1,
      })
    }
  }, [hoveredIndex, activeIndex])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (window.location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.replace('/#', '')
      const blurEl = document.getElementById('blur-element')
      const targetEl = document.getElementById(targetId)
      if (!blurEl || !targetEl) {
        targetEl?.scrollIntoView({ behavior: 'smooth' })
        return
      }

      document.documentElement.classList.add('blur-scroll')

      // Animate blur in (0 to 8px)
      let startIn: number | null = null
      const durationIn = 300
      const animIn = (timestamp: number) => {
        if (!startIn) startIn = timestamp
        const progress = Math.min((timestamp - startIn) / durationIn, 1)
        blurEl.setAttribute('stdDeviation', `0, ${progress * 8}`)
        if (progress < 1) {
          requestAnimationFrame(animIn)
        }
      }
      requestAnimationFrame(animIn)

      // Scroll
      targetEl.scrollIntoView({ behavior: 'smooth' })

      // Animate blur out after scroll starts finishing
      setTimeout(() => {
        let startOut: number | null = null
        const durationOut = 300
        const animOut = (timestamp: number) => {
          if (!startOut) startOut = timestamp
          const progress = Math.min((timestamp - startOut) / durationOut, 1)
          blurEl.setAttribute('stdDeviation', `0, ${8 - progress * 8}`)
          if (progress < 1) {
            requestAnimationFrame(animOut)
          } else {
            document.documentElement.classList.remove('blur-scroll')
          }
        }
        requestAnimationFrame(animOut)
      }, 750)
    }
  }

  return (
    <>
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="vertical-motion-blur">
            <feGaussianBlur id="blur-element" stdDeviation="0,0" />
          </filter>
        </defs>
      </svg>
      <nav className="sticky top-0 z-[80] bg-white/70 backdrop-blur-lg border-b border-gray-200 w-full">
        <div 
          ref={containerRef}
          onMouseLeave={() => setHoveredIndex(null)}
          className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto relative"
        >
          {/* Sliding Pill Background */}
          <div 
            className="absolute bg-zinc-100 rounded-full transition-all duration-[400ms] pointer-events-none z-0"
            style={{
              ...pillStyle,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          />

          <Link 
            to="/" 
            onMouseEnter={() => setHoveredIndex(-1)}
            className="text-xl font-semibold tracking-tight text-zinc-900 relative z-10 logo-link px-4 py-1.5 rounded-full"
          >
            <SlotText text="Kosoga" isHovered={hoveredIndex === -1} isActive={activeIndex === -1} className="tracking-tight" />
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-1 text-sm text-zinc-500 font-medium">
              {links.map((l, index) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  className={`transition-colors group px-4 py-2 relative z-10 menu-item-link ${
                    (hoveredIndex !== null ? hoveredIndex === index : activeIndex === index) 
                      ? 'text-zinc-900' 
                      : 'hover:text-zinc-900'
                  }`}
                >
                  <RollText text={l.label} />
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all relative z-10"
            >
              Let&apos;s Talk <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
