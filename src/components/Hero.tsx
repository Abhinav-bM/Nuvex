"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 justify-center bg-bg-primary overflow-hidden"
    >
      {/* Structural Minimal Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Radial fade to soften the grid at edges */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg-primary)_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-color bg-bg-secondary text-text-secondary text-xs uppercase tracking-widest font-semibold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-text-primary animate-pulse" />
            Nuvex V2.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-[5.5rem] font-medium tracking-tight text-text-primary mb-8 leading-[1.05]"
          >
            Engineering <br className="hidden md:block" />
            the impossible.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            We build high-performance, scalable software infrastructure for the
            world's most ambitious companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="group relative flex h-12 items-center justify-center gap-2 rounded-full bg-primary-color px-8 text-sm font-medium text-bg-primary transition-all hover:opacity-90 w-full sm:w-auto"
            >
              Start Building
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#portfolio"
              className="flex h-12 items-center justify-center rounded-full border border-border-color bg-transparent px-8 text-sm font-medium text-text-primary transition-all hover:bg-bg-secondary w-full sm:w-auto"
            >
              Read Documentation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
