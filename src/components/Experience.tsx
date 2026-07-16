const experiences = [
  {
    period: '2020 \u2014 2026',
    title: 'Full-Stack Developer & DevOps Engineer at Haen Teknologi Nusantara',
    company: 'Arabica ERP SME Software',
    description:
      "Lead the development of internal operations software and manage the company's self-hosted infrastructure. Responsibilities include engineering backend systems, enforcing data integrity for concurrent users, and maintaining the full DevOps lifecycle across TrueNAS and Linux servers.",
    tags: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Nginx', 'TrueNAS', 'Ubuntu VPS'],
  },
  {
    period: '2017 \u2014 Present',
    title: 'Freelance Developer & Infrastructure Engineer',
    company: 'Various Clients',
    description:
      'Set up, manage, and maintain cloud infrastructure and web deployments for multiple clients. Work involves configuring AWS and Linux VPS environments, managing Cloudflare networking (DNS, Tunnels, Zero Trust), and deploying optimized e-commerce platforms.',
    tags: ['AWS', 'Google Cloud', 'Cloudflare', 'Docker', 'Nginx', 'MySQL', 'Ubuntu VPS'],
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
