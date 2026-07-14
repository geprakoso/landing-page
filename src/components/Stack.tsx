const tools = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Postgres',
  'Supabase',
  'AWS',
  'Docker',
  'Tailwind',
]

export default function Stack() {
  return (
    <section id="stack" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="text-sm font-mono text-zinc-400 mb-4 block">
          (02) Stack
        </span>
        <div className="grid md:grid-cols-2 gap-x-12 md:gap-x-24 lg:gap-x-56">
          <h2 className="text-42 md:text-4xl font-medium tracking-tight text-zinc-900 mb-8 md:mb-0">
            The tools I reach for, day to day.
          </h2>
          <div className="flex flex-wrap gap-3 content-start">
            {tools.map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-full text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

