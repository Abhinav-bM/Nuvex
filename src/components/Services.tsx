"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  MonitorSmartphone,
  Layers,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

const bentoItems = [
  {
    title: "Web & Mobile Platforms",
    description:
      "Native-feeling mobile apps and highly responsive web applications built on modern React architectures.",
    icon: <MonitorSmartphone className="w-5 h-5 text-text-primary" />,
    className: "md:col-span-2 md:row-span-2 bg-bg-primary",
    visual: (
      <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-bg-secondary rounded-tl-2xl border-t border-l border-border-color overflow-hidden flex items-start justify-start p-4">
        <div className="w-full h-8 bg-border-color/50 rounded-md mb-2" />
        <div className="w-2/3 h-32 bg-border-color/30 rounded-md" />
      </div>
    ),
  },
  {
    title: "System Architecture",
    description:
      "Scalable backend systems designed to handle millions of requests.",
    icon: <Server className="w-5 h-5 text-text-primary" />,
    className: "md:col-span-1 md:row-span-1 bg-bg-secondary",
    visual: null,
  },
  {
    title: "UI/UX Engineering",
    description: "Obsessive attention to interaction design and user flows.",
    icon: <Layers className="w-5 h-5 text-text-primary" />,
    className: "md:col-span-1 md:row-span-1 bg-bg-secondary",
    visual: null,
  },
  {
    title: "Performance Optimization",
    description: "Sub-second load times and 100 on Lighthouse audits.",
    icon: <Zap className="w-5 h-5 text-text-primary" />,
    className: "md:col-span-1 md:row-span-1 bg-bg-primary",
    visual: null,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance out of the box.",
    icon: <ShieldCheck className="w-5 h-5 text-text-primary" />,
    className:
      "md:col-span-2 md:row-span-1 bg-bg-secondary flex flex-row items-center",
    visual: null,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-bg-primary border-t border-border-color"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-text-primary mb-6 tracking-tight">
              A comprehensive technical <br className="hidden md:block" />
              capability matrix.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              We don't just build websites; we architect business
              infrastructure. Our core capabilities span the entire modern
              digital stack.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[240px] gap-4">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative overflow-hidden rounded-3xl border border-border-color p-8 group transition-colors hover:border-text-secondary/30 ${item.className}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 rounded-full border border-border-color bg-bg-primary flex items-center justify-center mb-6 shadow-sm">
                  {item.icon}
                </div>

                <div
                  className={`mt-auto ${item.className.includes("flex-row") ? "pointer-events-none" : ""}`}
                >
                  <h3 className="text-xl font-medium text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Abstract Visuals for larger blocks */}
              {item.visual && (
                <div className="absolute inset-0 z-0 opacity-50 transition-opacity group-hover:opacity-100 mix-blend-multiply dark:mix-blend-screen overflow-hidden">
                  <div className="absolute right-[-10%] bottom-[-10%] w-[60%] h-[60%] rounded-tl-3xl bg-bg-secondary border-t border-l border-border-color flex items-start justify-start p-6 transform transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="w-full space-y-3">
                      <div className="w-1/3 h-4 bg-border-color rounded-sm" />
                      <div className="w-2/3 h-4 bg-border-color/50 rounded-sm" />
                      <div className="w-1/2 h-4 bg-border-color/50 rounded-sm" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
