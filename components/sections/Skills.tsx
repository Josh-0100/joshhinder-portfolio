import FadeIn from '@/components/ui/FadeIn'

const skills = [
  { name: 'TypeScript', symbol: 'TS' },
  { name: 'React', symbol: 'Re' },
  { name: 'Next.js', symbol: '▲' },
  { name: 'Node.js', symbol: 'No' },
  { name: 'Supabase', symbol: 'Sb' },
  { name: 'PostgreSQL', symbol: 'Pg' },
  { name: 'Express', symbol: 'Ex' },
  { name: 'Claude API', symbol: 'AI' },
  { name: 'Git', symbol: 'Gt' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-cyan-500 uppercase tracking-widest mb-4">
            Skills
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-16">What I work with.</h2>
        </FadeIn>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <FadeIn key={skill.name} delay={i * 0.05}>
              <div className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors group">
                <span className="text-xl font-bold font-mono text-neutral-400 dark:text-neutral-500 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.symbol}
                </span>
                <span className="text-xs font-medium text-center leading-tight">{skill.name}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
