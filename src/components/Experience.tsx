const experiences = [
  {
    period: '2023 \u2014 Present',
    title: 'Full Stack Engineer',
    company: 'Arabica ERP SME Software',
    description:
      "Lead front-end for a real-time analytics platform \u2014 owning the design system, performance budget, and the team's engineering standards.",
    tags: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Nginx'],
  },
  {
    period: '2021 \u2014 2023',
    title: 'Full-Stack Engineer',
    company: 'Hook ERP Software (Open Source)',
    description:
      'Built core banking flows end to end, from Postgres schema to pixel, for a consumer fintech used by half a million people.',
    tags: ['Laravel', 'Vue.js', 'Docker', 'Nginx', 'MySQL'],
  },
  {
    period: '2019 \u2014 2021',
    title: 'Full-Stack Engineer',
    company: 'Circul Open Source',
    description:
      'Shipped a documentation platform with instant search and an editor experience built to keep writers in flow.',
    tags: ['Flutter', 'Shadcn UI', 'Supabase'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-zinc-50 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="text-sm font-mono text-zinc-400 mb-4 block">
          (03) Experience
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12">
          Where I&apos;ve been building.
        </h2>
        <div className="divide-y divide-zinc-200">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8 py-8 first:pt-0 last:pb-0"
            >
              <div className="text-sm text-zinc-400 font-medium">
                {exp.period}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {exp.title}
                </h3>
                <p className="text-zinc-500 mb-3">&mdash; {exp.company}</p>
                <p className="text-zinc-500 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-zinc-200 text-zinc-600 rounded-full text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
