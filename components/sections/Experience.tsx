import FadeIn from '@/components/ui/FadeIn'

const experiences = [
  {
    role: 'Team Member',
    company: "Nando's",
    period: '2025 – Present',
    description:
      "Front-of-house service in a high-volume restaurant, developing strong customer service, communication, and teamwork skills under pressure.",
  },
  {
    role: 'Sales Assistant',
    company: 'Music Store',
    period: '2023 – 2025',
    description:
      'Assisted customers in selecting instruments and music equipment, providing product knowledge and personalised advice in a specialist retail environment.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-cyan-500 uppercase tracking-widest mb-4">
            Experience
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-16">Work history.</h2>
        </FadeIn>

        <div className="relative max-w-2xl">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-800" />
          <div className="space-y-12 pl-10">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-[2.6rem] top-1.5 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-neutral-950" />
                  <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-1">{exp.period}</p>
                  <h3 className="text-lg font-semibold">
                    {exp.role} — {exp.company}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
