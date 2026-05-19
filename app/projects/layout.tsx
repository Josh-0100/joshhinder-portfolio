import Nav from '@/components/ui/Nav'

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>
    </>
  )
}
