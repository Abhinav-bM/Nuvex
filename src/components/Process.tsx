"use client";

import { motion } from "motion/react";

const steps = [
  {
    title: "Discovery & Architecture",
    description:
      "We map out the system boundaries, data models, and infrastructure requirements before writing a single line of code.",
  },
  {
    title: "Iterative Engineering",
    description:
      "Weekly sprints with continuous deployment. You see the product evolve in real-time, every step of the way.",
  },
  {
    title: "Quality Assurance",
    description:
      "Automated test suites, manual edge-case testing, and performance profiling ensure the system holds up under stress.",
  },
  {
    title: "Deployment & Scale",
    description:
      "Zero-downtime deployments to modern edge-first infrastructure. Built to handle traffic spikes naturally.",
  },
];

export function Process() {
  return (
    <section className="py-32 bg-bg-primary border-t border-border-color">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-medium text-text-primary mb-6 tracking-tight"
          >
            How we build.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-text-secondary font-light"
          >
            A rigorous, engineering-first approach to software development.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col md:flex-row gap-8 md:gap-16 pb-16 last:pb-0 border-b border-border-color last:border-0 mb-16 last:mb-0"
            >
              <div className="md:w-1/4 shrink-0">
                <span className="text-sm font-semibold tracking-widest uppercase text-text-secondary">
                  Phase 0{index + 1}
                </span>
              </div>

              <div className="md:w-3/4">
                <h3 className="text-2xl font-medium text-text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
