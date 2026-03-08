"use client";

import { motion } from "motion/react";
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Palette,
  Code2,
  TrendingUp,
  Settings,
  Cloud,
  Search,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-primary" />,
    title: "Website Development",
    description:
      "Custom, responsive websites optimized for performance, SEO, and conversion.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Web App Development",
    description:
      "Scalable web applications built with modern frameworks like Next.js and React.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile experiences for iOS and Android.",
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    title: "E-commerce Development",
    description:
      "Robust online stores with seamless checkout and inventory management.",
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "UI/UX Design",
    description:
      "Intuitive, engaging, and accessible interfaces that users love.",
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "API Development",
    description:
      "Secure, well-documented APIs to connect your services and data.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Website Optimization",
    description: "Lighthouse CI, performance audits, and speed improvements.",
  },
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "SEO Optimization",
    description:
      "Technical SEO and content strategy to rank higher on search engines.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Website Maintenance",
    description: "Ongoing support, security updates, and regular backups.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Cloud Deployment",
    description: "AWS, Vercel, and GCP infrastructure setup and management.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
          >
            Capabilities & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Comprehensive digital solutions tailored to elevate your business in
            the modern landscape.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-bg-primary p-8 rounded-2xl border border-bg-secondary shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
