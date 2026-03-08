"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "NUVEX transformed our outdated platform into a modern, lightning-fast application. Their attention to detail and technical expertise is unmatched. They truly acted as a partner, not just a vendor.",
    author: "Sarah Jenkins",
    role: "CTO, FinFlow Analytics",
    company: "FinFlow",
  },
  {
    quote:
      "The team delivered our custom e-commerce solution exactly on time and under budget. The new architecture increased our conversion rate by 35% in the first month alone.",
    author: "Marcus Chen",
    role: "Founder, GreenLeaf Goods",
    company: "GreenLeaf",
  },
  {
    quote:
      "We needed a complex web portal built from scratch. NUVEX handled the entire process from UX design to backend deployment flawlessly. Highly recommended for complex engineering challenges.",
    author: "Elena Rodriguez",
    role: "Director of Operations, HealthSync",
    company: "HealthSync",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className="py-24 bg-bg-primary overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-bg-secondary/50 rounded-l-[100px] -z-10 hidden lg:block" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Don't just take our word for it.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Hear what our partners have to say about working with the NUVEX
              engineering and design teams.
            </p>
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-bg-secondary flex items-center justify-center text-text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-bg-secondary flex items-center justify-center text-text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>

          <div className="lg:w-2/3 w-full relative min-h-[400px]">
            <Quote className="absolute -top-10 -left-10 w-32 h-32 text-bg-secondary opacity-50 z-0" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-bg-primary border border-bg-secondary p-10 md:p-14 rounded-3xl shadow-xl relative z-10"
              >
                <p className="text-xl md:text-2xl text-text-primary font-medium leading-relaxed mb-10">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-text-secondary">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-bg-secondary flex items-center justify-center font-bold text-primary opacity-50">
                    Logo
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-text-secondary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
