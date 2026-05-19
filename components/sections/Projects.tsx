import FadeIn from '@/components/ui/FadeIn'
import ProjectCard from '@/components/ui/ProjectCard'

const projects = [
  {
    title: 'Geniva',
    description:
      'A verified social platform for university societies at the University of Liverpool. Replacing fragmented WhatsApp groups and Facebook pages with a purpose-built app — event management, society dashboards, real-time messaging, and a pub crawl feature.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Node.js', 'PostgreSQL', 'Express'],
    href: '/projects/geniva',
    externalHref: null,
    featured: true,
  },
  {
    title: 'Gig Society',
    description:
      'President and co-founder of Gig Society at UoL — a society dedicated to live music appreciation and gig culture. Organising events, growing a student community, and managing committee operations.',
    tags: ['Leadership', 'Event Management', 'Community Building'],
  },
  {
    title: 'LLM Debate Workshop',
    description:
      'Joint collaboration on an AI debate workshop at the University of Liverpool, exploring how large language models reason, form arguments, and respond to opposing viewpoints.',
    tags: ['AI Research', 'LLMs', 'Claude API', 'Workshop'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-cyan-500 uppercase tracking-widest mb-4">
            Projects
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-16">What I&apos;ve built.</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(({ featured, ...cardProps }, i) => (
            <FadeIn
              key={cardProps.title}
              delay={i * 0.1}
              className={featured ? 'md:col-span-2' : ''}
            >
              <ProjectCard {...cardProps} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
