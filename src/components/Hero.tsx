"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-bg-primary"
    >
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary border border-primary/20 text-text-primary text-sm font-medium mb-8"
          >
            <Sparkles size={16} className="text-primary" />
            <span>Digital Product Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-tight"
          >
            Building Digital Experiences That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Drive Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We design and develop high-performance websites, applications, and
            digital solutions that help innovative businesses scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Start Your Project
              <ArrowRight size={20} />
            </a>
            <a
              href="#portfolio"
              className="bg-bg-secondary text-text-primary border border-bg-secondary hover:border-text-secondary/20 px-8 py-4 rounded-full font-semibold transition-all hover:bg-bg-secondary/80 w-full sm:w-auto text-center"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* 3D Floating Elements Simulation */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block absolute top-1/4 left-[10%] w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-md z-0"
        style={{ transformOrigin: "center" }}
      />

      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="hidden lg:block absolute bottom-1/3 right-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 backdrop-blur-md z-0"
      />
    </section>
  );
}
