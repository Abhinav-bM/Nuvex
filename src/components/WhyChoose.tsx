"use client";

import { motion } from "motion/react";

const reasons = [
  {
    title: "Engineering Excellence",
    description:
      "We don't compromise on code quality. Every system is built to scale gracefully under pressure.",
  },
  {
    title: "Velocity & Precision",
    description:
      "Rapid iteration cycles combined with rigorous testing protocols to ship reliable software faster.",
  },
  {
    title: "Transparent Architecture",
    description:
      "No black boxes. We build systems you understand, own, and can maintain indefinitely.",
  },
];

export function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="py-32 bg-bg-secondary border-t border-border-color"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-5/12"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-text-primary mb-6 tracking-tight">
              Built for <br /> performance.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed font-light mb-8">
              We partner with teams that treat their software infrastructure as
              a core competitive advantage.
            </p>
            <a
              href="#services"
              className="text-sm font-medium text-text-primary border-b border-text-primary pb-1 hover:text-text-secondary hover:border-text-secondary transition-colors inline-block"
            >
              Explore Our Capabilities
            </a>
          </motion.div>

          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 gap-12">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col md:flex-row gap-6 md:gap-12"
                >
                  <div className="text-sm font-semibold text-text-secondary font-mono pt-1">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-text-primary mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed font-light max-w-md">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
