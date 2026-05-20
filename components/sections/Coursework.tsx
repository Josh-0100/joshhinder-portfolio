import FadeIn from '@/components/ui/FadeIn'

const modules = [
  'Advanced AI',
  'App Development',
  'Computer Based Trading in Financial Markets',
  'Object-Oriented Programming',
  'Data Structures & Algorithms',
  'Software Development Tools',
]

export default function Coursework() {
  return (
    <section id="coursework" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-cyan-500 uppercase tracking-widest mb-4">
            Coursework
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-16">Relevant modules.</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3 max-w-3xl">
            {modules.map((mod) => (
              <span
                key={mod}
                className="px-4 py-2 text-sm font-medium bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {mod}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
