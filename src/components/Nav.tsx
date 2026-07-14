import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200 w-full">
      <div className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto">
        <a href="/" className="text-xl font-semibold tracking-tight text-zinc-900">
          Kosoga
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-500 font-medium">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-zinc-900 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="/contact"
            className="bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all"
          >
            Let&apos;s Talk <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  )
}
