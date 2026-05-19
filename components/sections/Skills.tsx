import FadeIn from '@/components/ui/FadeIn'

const skillCategories = [
  { label: 'Languages',  items: ['TypeScript', 'JavaScript', 'Java', 'HTML/CSS', 'Haskell'] },
  { label: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'] },
  { label: 'Tools',      items: ['Git', 'Supabase', 'PostgreSQL', 'Vercel', 'VS Code'] },
  { label: 'Product',    items: ['Claude API', 'Figma', 'Agile/Scrum'] },
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

        <div className="space-y-6 max-w-3xl">
          {skillCategories.map((cat, i) => (
            <FadeIn key={cat.label} delay={i * 0.08}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="text-sm font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest w-32 shrink-0 pt-1.5">
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-1.5 text-sm font-medium bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
