import { GitBranch, ExternalLink } from 'lucide-react'

const repos = [
  {
    name: 'Hook',
    stars: '1,240',
    description:
      'An ERP Software for small to medium business built with Laravel and Vue.js with blazing fast performance.',
    tag: 'LARAVEL',
    github: 'https://github.com/alamulhuda/hook',
    demo: 'https://example.com',
  },
  {
    name: 'Monthly Report',
    stars: '2,100',
    description: 'A 1kb client-side router with zero config.',
    tag: 'JavaScript',
    github: 'https://github.com/geprakoso/monthlyreport',
    demo: 'https://example.com',
  },
  {
    name: 'Circul',
    stars: '860',
    description: 'A dependency-free React hook for throttled values.',
    tag: 'React',
    github: 'https://github.com/geprakoso/circul',
    demo: 'https://example.com',
  },
]

export default function OpenSource() {
  return (
    <section id="open-source" className="bg-zinc-50 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="text-sm font-mono text-zinc-400 mb-4 block">
          (05) On the Side
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12">
          Open-source experiments &amp; tools.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {repos.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {r.name}
                </h3>
                <span className="text-sm text-zinc-400">{r.stars}</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-1">
                {r.description}
              </p>
              <span className="text-[10px] font-semibold tracking-widest text-zinc-400 mb-4">
                {r.tag}
              </span>
              <div className="flex items-center gap-4 text-sm font-medium">
                <a
                  href={r.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 hover:text-zinc-600 transition-colors flex items-center gap-1"
                >
                  <GitBranch className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={r.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-1"
                >
                  Live Demo <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
