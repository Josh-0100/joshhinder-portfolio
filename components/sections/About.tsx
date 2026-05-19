import FadeIn from '@/components/ui/FadeIn'

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <p className="text-sm font-medium text-cyan-500 uppercase tracking-widest mb-4">
            About
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Building things people actually use.
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            I&apos;m a first-year Computer Science with Software Development student at the
            University of Liverpool, heading into my second year. Since day one I&apos;ve been
            shipping production software used by real people — not just coursework.
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Outside of studying, I&apos;m President of Gig Society and have collaborated on AI
            research workshops at the university. I believe the best way to learn is to build.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center">
            <span className="text-8xl font-bold tracking-tighter text-neutral-300 dark:text-neutral-700 select-none">
              JH
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
