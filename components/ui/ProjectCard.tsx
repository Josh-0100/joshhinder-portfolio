import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href?: string
}

export default function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  const inner = (
    <div className="group h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 bg-white dark:bg-neutral-900/30">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        {href && (
          <span className="text-neutral-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors text-lg font-light">
            →
          </span>
        )}
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 text-sm">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )

  if (href) return <Link href={href}>{inner}</Link>
  return <>{inner}</>
}
