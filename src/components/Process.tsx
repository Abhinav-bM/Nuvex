"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, target audience, and project goals to define a clear scope and strategy.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Creating sitemaps, user flows, and technical architecture to ensure a solid foundation.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Crafting intuitive and modern UI/UX designs that align with your brand identity.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Writing clean, scalable code using modern technologies and best practices.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Rigorous quality assurance, performance optimization, and cross-browser testing.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Deploying your project to production and providing ongoing support and maintenance.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Our Development Process
          </h2>
          <p className="text-lg text-text-secondary">
            A proven, transparent approach to bringing your digital vision to
            life.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-bg-secondary transform md:-translate-x-1/2" />

          {/* Animated Progress Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[28px] md:left-1/2 top-0 w-0.5 bg-primary transform md:-translate-x-1/2 z-0"
          />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`relative flex items-center ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-bg-primary border-4 border-primary flex items-center justify-center transform md:-translate-x-1/2 z-10 shadow-lg shadow-primary/20">
                    <span className="font-bold text-primary">
                      {step.number}
                    </span>
                  </div>

                  {/* Content Container */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                  >
                    <div className="bg-bg-secondary p-8 rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-2xl font-bold text-text-primary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
