import { ArrowUpRight } from 'lucide-react'

const socials = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X / Twitter', href: 'https://x.com' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-900 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <div className="text-white text-xl font-semibold tracking-tight mb-2">
              Kosoga
            </div>
            <a
              href="mailto:kosoga@gmail.com"
              className="hover:text-white transition-colors text-sm"
            >
              kosoga@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                {s.label} <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
        <div className="text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Kosoga. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
