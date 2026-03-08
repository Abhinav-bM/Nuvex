"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "FinFlow Analytics",
    category: "Financial Technology",
    description:
      "A comprehensive data visualization dashboard processing millions of rows in real-time. Built with a focus on absolute clarity and performance.",
    tech: ["Next.js", "WebGL", "Rust Edge APIs"],
    color: "bg-zinc-100 dark:bg-zinc-900",
  },
  {
    title: "Aura Commerce",
    category: "E-Commerce",
    description:
      "Headless storefront architecture that reduced time-to-interactive by 60%, resulting in a massive conversion lift.",
    tech: ["Shopify Plus", "Tailwind", "Framer Motion"],
    color: "bg-stone-100 dark:bg-stone-900",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-32 bg-bg-secondary border-t border-border-color"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-text-primary mb-6 tracking-tight">
              Selected Work
            </h2>
            <p className="text-lg text-text-secondary">
              Case studies demonstrating our approach to complex engineering
              challenges.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col gap-12 lg:gap-24 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Visual Block (Simulating a large web interface) */}
                <div className="w-full lg:w-3/5 group cursor-pointer perspective-1000">
                  <div
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-color ${project.color} transition-transform duration-700 ease-out group-hover:scale-[1.02] flex items-center justify-center p-8`}
                  >
                    {/* Abstract UI Representation */}
                    <div className="w-full h-full bg-bg-primary rounded-xl shadow-sm border border-border-color/50 overflow-hidden flex flex-col">
                      {/* Fake Browser Top Bar */}
                      <div className="h-10 border-b border-border-color/50 bg-bg-secondary flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full border border-border-color" />
                        <div className="w-3 h-3 rounded-full border border-border-color" />
                        <div className="w-3 h-3 rounded-full border border-border-color" />
                      </div>
                      {/* Fake Content area */}
                      <div className="flex-1 p-6 flex gap-6">
                        <div className="w-1/4 h-full bg-bg-secondary rounded border border-border-color/30" />
                        <div className="flex-1 h-full flex flex-col gap-4">
                          <div className="h-1/3 w-full bg-border-color/20 rounded border border-border-color/30" />
                          <div className="h-2/3 w-full bg-border-color/10 rounded border border-border-color/30" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/5 transition-colors duration-500" />
                  </div>
                </div>

                {/* Text Block */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-semibold tracking-wider uppercase text-text-secondary">
                      {project.category}
                    </span>
                    <span className="w-6 h-px bg-border-color" />
                    <span className="text-xs font-semibold tracking-wider text-text-secondary">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl font-medium text-text-primary mb-6">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary mb-10 leading-relaxed text-lg font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="text-xs font-medium text-text-secondary border border-border-color px-3 py-1.5 rounded-full"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 group text-text-primary font-medium hover:text-text-secondary transition-colors w-fit"
                  >
                    Read Case Study
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
