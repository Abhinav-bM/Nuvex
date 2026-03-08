"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-text-primary">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[50%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-[120px] opacity-40 mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute -bottom-[50%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-accent via-primary to-secondary blur-[100px] opacity-30 mix-blend-screen"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 mb-8"
          >
            Have a project in mind?
            <br />
            Let's build it together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-bg-secondary/80 mb-12 max-w-2xl mx-auto"
          >
            Whether you need a simple landing page or a complex enterprise
            application, our team is ready to turn your vision into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Start Your Project
              <ArrowRight size={20} />
            </a>
            <a
              href="mailto:contact@nuvex.com"
              className="bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto text-center"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
