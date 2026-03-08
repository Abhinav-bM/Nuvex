"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "NUVEX established a modern, lightning-fast architecture. Their attention to detail and technical exactness is unmatched. They deployed with zero downtime.",
    author: "Sarah Jenkins",
    role: "CTO, FinFlow Analytics",
  },
  {
    quote:
      "The complex headless solution was delivered under budget. The new architecture increased our global conversion rate by 35% in just the first month.",
    author: "Marcus Chen",
    role: "Founder, GreenLeaf Goods",
  },
  {
    quote:
      "They handled the entire process from structural design to backend deployment flawlessly. Highly recommended for exceedingly complex engineering challenges.",
    author: "Elena Rodriguez",
    role: "VP Engineering, HealthSync",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-bg-primary border-t border-border-color">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-medium text-text-primary mb-4 tracking-tight">
            Trusted by engineering leaders.
          </h2>
          <p className="text-text-secondary">
            Partnerships built on technical excellence and delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-8 border border-border-color rounded-2xl bg-bg-secondary flex flex-col h-full"
            >
              <div className="text-4xl text-text-secondary/20 mb-6 font-serif leading-none">
                "
              </div>
              <p className="text-text-primary text-lg leading-relaxed mb-8 flex-1 font-light">
                {item.quote}
              </p>
              <div>
                <div className="font-medium text-text-primary text-sm">
                  {item.author}
                </div>
                <div className="text-text-secondary text-sm">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
