// const stats = [
//   { value: '8+', label: 'Years Experience' },
//   { value: '40+', label: 'Projects Delivered' },
//   { value: '12', label: 'Countries Worked With' },
//   { value: '\u221e', label: 'Cups of Coffee' },
// ]

export default function About() {
  return (
    <section id="about" className="bg-zinc-50 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="text-sm font-mono text-zinc-400 mb-4 block">
          (01) About
        </span>
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-x-56 mb-16">
          <h2 className="text-42 md:text-4xl font-medium tracking-tight text-zinc-900">
            A design-minded developer obsessed with performance, clean architecture
            and user experience.
          </h2>
          <div className="space-y-6">
            <p className="text-zinc-500 text-lg leading-relaxed">
              For the past seven years I&apos;ve helped startups and product teams
              turn ambitious ideas into software people genuinely like to use. I care
              about the whole stack — the database query, the API contract, the
              animation curve.
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed mb-5">
              My work sits at the intersection of engineering and design: fast,
              accessible, and quietly considered. No fireworks, just products that
              feel right.
            </p>
          </div>
        </div>
        
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t-1 divide-x-1">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-semibold text-zinc-900 p-5">
                {s.value}
              </div>
              <div className="text-sm text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
