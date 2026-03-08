"use client";

import { motion } from "motion/react";
import { Zap, Server, Code, Search, Smartphone, Layers } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Fast Development",
    description:
      "Rapid iteration cycles and agile methodologies to launch your product faster.",
  },
  {
    icon: <Server className="w-6 h-6 text-white" />,
    title: "Scalable Architecture",
    description:
      "Built on modern cloud infrastructure designed to grow with your business needs.",
  },
  {
    icon: <Code className="w-6 h-6 text-white" />,
    title: "Clean Code Standards",
    description:
      "Maintainable, well-documented codebases following industry best practices.",
  },
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: "SEO Friendly",
    description:
      "Technical SEO baked in from day one to ensure maximum search visibility.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Mobile First Design",
    description:
      "Flawless user experiences across all devices, from mobile to ultra-wide screens.",
  },
  {
    icon: <Layers className="w-6 h-6 text-white" />,
    title: "Modern Tech Stack",
    description:
      "Leveraging the latest technologies like Next.js, React, and Tailwind CSS.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="sticky top-32"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
                Why Choose <span className="text-primary">NUVEX</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                We go beyond just writing code. We act as your technical
                partner, focused on delivering solutions that drive actual
                business value.
              </p>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-bg-secondary border border-primary/20">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-primary">10+</span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">
                    Years Experience
                  </p>
                  <p className="text-sm text-text-secondary">
                    Combined team expertise
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 scale-100 lg:scale-[1.02]">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-bg-secondary p-8 rounded-2xl hover:bg-bg-primary hover:shadow-xl transition-all duration-300 border border-transparent hover:border-bg-secondary group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
