import { ArrowUpRight, ArrowRight } from 'lucide-react'

const projects = [
  {
    category: 'ERP Software',
    title: 'Helio Analytics',
    description:
      'A real-time analytics suite handling millions of events a day, rebuilt for sub-second dashboards and a calmer information hierarchy.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Nginx'],
  },
  {
    category: 'Fintech',
    title: 'Drift Finance',
    description:
      'End-to-end product design and front-end for a consumer banking experience focused on trust, speed, and clarity.',
    tags: ['Laravel', 'Vue.js', 'Docker', 'Nginx', 'MySQL'],
  },
  {
    category: 'Mobile App',
    title: 'Atlas Docs',
    description:
      'A documentation platform with instant search and a writing experience engineered to keep teams in flow.',
    tags: ['Flutter', 'Shadcn UI', 'Supabase'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="text-sm font-mono text-zinc-400 mb-4 block">
          (04) Selected Work
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12">
          A few products I&apos;m proud to have shipped.
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border border-zinc-200 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-200"
            >
              <div className="bg-zinc-100 aspect-[4/3] md:aspect-auto flex items-center justify-center text-zinc-300 text-sm font-medium">
                {p.title} Screenshot
              </div>
              <div className="p-6 md:p-16 flex flex-col justify-center">
                <span className="text-xs font-mono text-zinc-400 mb-2">
                  {p.category}
                </span>
                <h3 className="text-4xl font-semibold text-zinc-900 mb-3">
                  {p.title}
                </h3>
                <p className="text-zinc-500 text-lg leading-relaxed mb-6">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <a
                    href="https://example.com"
                    className="px-5 py-2.5 bg-zinc-900 text-white hover:bg-zinc-800 rounded-full transition-colors flex items-center gap-1.5"
                  >
                    Visit Live <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://example.com"
                    className="px-5 py-2.5 bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 rounded-full transition-colors flex items-center gap-1.5"
                  >
                    Read the Story <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
