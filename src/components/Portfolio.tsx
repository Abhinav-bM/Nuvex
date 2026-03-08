"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Web Application",
    description:
      "A comprehensive financial dashboard for a modern banking startup, featuring real-time data visualization.",
    tech: ["Next.js", "Tailwind CSS", "Recharts"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "EcoStore Platform",
    category: "E-commerce",
    description:
      "High-performance headless e-commerce architecture for sustainable brands with sub-second page loads.",
    tech: ["Shopify Plus", "React", "Node.js"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "HealthTrack Mobile",
    category: "Mobile App",
    description:
      "Cross-platform fitness tracking application integrating with native health APIs.",
    tech: ["React Native", "GraphQL", "AWS"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "LogisTech ERP",
    category: "Custom Software",
    description:
      "End-to-end logistics management system streamlining operations for global shipping.",
    tech: ["Vue.js", "Python", "PostgreSQL"],
    color: "from-orange-500/20 to-red-500/20",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Selected Work
            </h2>
            <p className="text-lg text-text-secondary">
              A glimpse into the digital products we've brought to life for
              ambitious brands worldwide.
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All Projects <ArrowUpRight size={20} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-bg-primary border border-bg-secondary shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Project Image Placeholder / Abstract Background */}
              <div
                className={`h-64 sm:h-80 w-full bg-gradient-to-br ${project.color} group-hover:scale-105 transition-transform duration-700 ease-in-out relative flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-bg-primary/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Abstract geometric shapes inside the placeholder */}
                <div className="w-32 h-32 rounded-full border border-text-primary/10 absolute -right-10 -bottom-10 group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-700" />
                <div className="w-24 h-24 rounded-xl border border-text-primary/10 absolute top-10 left-10 rotate-12 group-hover:rotate-45 group-hover:scale-110 transition-transform duration-700" />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 z-10 shadow-lg shadow-primary/30">
                  <ArrowUpRight className="text-white w-8 h-8" />
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="text-xs font-medium text-text-secondary bg-bg-secondary px-3 py-1.5 rounded-lg border border-text-secondary/10"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
