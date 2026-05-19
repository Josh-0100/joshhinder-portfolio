'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl w-full mx-auto py-32 flex flex-col items-center text-center">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="mb-12 w-20 h-20 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
            <span className="text-2xl font-bold tracking-tighter">JH</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-4">
            Joshua
            <br />
            <span className="relative inline-block">
              Hinder
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-cyan-500 rounded-full" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 mt-8 mb-2">
            Computer Science with Software Development
          </p>
          <p className="text-base text-cyan-500 font-medium mb-12">
            University of Liverpool
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
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
