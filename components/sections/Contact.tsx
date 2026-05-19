import FadeIn from '@/components/ui/FadeIn'

export default function Contact() {
  return (
    <footer id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-cyan-500 uppercase tracking-widest mb-4">
            Contact
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Get in touch.</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-lg">
            Whether you want to discuss a project, an opportunity, or just say hello — my inbox is
            open.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-4 mb-24">
            <a
              href="mailto:Joshhinder@icloud.com"
              className="text-xl font-medium hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              Joshhinder@icloud.com
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-hinder-bbb6a2349/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </FadeIn>

        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-start gap-6 text-sm text-neutral-400 dark:text-neutral-500">
          <p>© 2026 Joshua Hinder. All rights reserved.</p>
          <address className="not-italic text-right">
            Joshua Hinder Ltd
            <br />
            124 City Road
            <br />
            London, EC1V 2NX
          </address>
        </div>
      </div>
    </footer>
  )
}
