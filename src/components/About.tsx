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
            A developer focused on stable architecture and actual server realities.
          </h2>
          <div className="space-y-6">
            <p className="text-zinc-500 text-lg leading-relaxed">
              I help businesses build internal tools like ERPs and POS systems. But instead of just focusing on the frontend, I spend my time making sure the backend is solid and the deployment architecture makes sense.
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed mb-5">
              From writing the database queries to configuring TrueNAS and Nginx, my goal is always to build systems that are easy to maintain and hard to break.
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
