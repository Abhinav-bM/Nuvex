"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-text-primary">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-medium text-bg-primary mb-8 tracking-tight"
          >
            Ready to build?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto font-light"
          >
            Partner with engineering experts who understand scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="group relative flex h-12 items-center justify-center gap-2 rounded-full bg-bg-primary px-8 text-sm font-medium text-text-primary transition-all hover:bg-bg-secondary w-full sm:w-auto"
            >
              Contact Engineering
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="mailto:contact@nuvex.com"
              className="group relative flex h-12 items-center justify-center gap-2 rounded-full border border-border-color bg-transparent px-8 text-sm font-medium text-text-secondary transition-all hover:text-text-primary hover:border-bg-secondary w-full sm:w-auto"
            >
              Email Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
