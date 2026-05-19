import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight mb-6 mt-12">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight mb-4 mt-10">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mb-3 mt-8">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-neutral-600 dark:text-neutral-400">{children}</ul>
    ),
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-sm font-mono">{children}</code>
    ),
    ...components,
  }
}
