import Nav from '@/components/ui/Nav'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Coursework from '@/components/sections/Coursework'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Coursework />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
