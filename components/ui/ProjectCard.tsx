import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href?: string
  externalHref?: string | null
}

export default function ProjectCard({ title, description, tags, href, externalHref }: ProjectCardProps) {
  const content = (
    <>
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
    </>
  )

  return (
    <div className="group h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 bg-white dark:bg-neutral-900/30 flex flex-col">
      {href ? (
        <Link href={href} className="block p-8 flex-1">
          {content}
        </Link>
      ) : (
        <div className="p-8 flex-1">
          {content}
        </div>
      )}

      {externalHref !== undefined && (
        <div className="px-8 pb-8">
          {externalHref === null ? (
            <span className="inline-flex items-center px-4 py-1.5 text-xs font-medium text-neutral-400 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-700 rounded-full cursor-not-allowed select-none">
              Coming Soon
            </span>
          ) : (
            <a
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-cyan-500 border border-cyan-500/30 hover:border-cyan-500 rounded-full transition-colors"
            >
              View App →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
