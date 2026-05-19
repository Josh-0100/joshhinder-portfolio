'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-6xl w-full mx-auto py-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Monogram */}
          <div className="mb-12 w-20 h-20 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
            <span className="text-2xl font-bold tracking-tighter">JH</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6">
            Joshua
            <br />
            <span className="relative inline-block">
              Hinder
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-cyan-500 rounded-full" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 mb-12 max-w-xl leading-relaxed mt-6">
            Computer Science Student &amp; Builder.
            <br />
            Shipping production software from year one.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-full transition-colors text-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 border border-neutral-300 dark:border-neutral-700 hover:border-cyan-500 dark:hover:border-cyan-400 font-medium rounded-full transition-colors text-sm"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
