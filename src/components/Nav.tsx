import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
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
        <div className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-semibold tracking-tight text-zinc-900">
            Kosoga
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm text-zinc-500 font-medium">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  className="hover:text-zinc-900 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all"
            >
              Let&apos;s Talk <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
