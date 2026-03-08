"use client";

import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", company: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-bg-primary relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-text-primary mb-6 tracking-tight">
              Get in touch
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-12 font-light">
              Reach out to discuss your technical challenges, architecture
              needs, or potential partnerships.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-widest">
                  Email
                </h4>
                <a
                  href="mailto:hello@nuvex.com"
                  className="text-xl font-medium text-text-primary hover:text-text-secondary transition-colors"
                >
                  hello@nuvex.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-widest">
                  Headquarters
                </h4>
                <p className="text-lg text-text-primary">
                  123 Innovation Drive
                  <br />
                  Tech District, Austin, TX
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="block w-full px-0 py-3 text-text-primary bg-transparent border-0 border-b border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-text-primary peer transition-colors"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="block w-full px-0 py-3 text-text-primary bg-transparent border-0 border-b border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-text-primary peer transition-colors"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="block w-full px-0 py-3 text-text-primary bg-transparent border-0 border-b border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-text-primary peer transition-colors"
                  placeholder=" "
                />
                <label
                  htmlFor="company"
                  className="absolute text-text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company
                </label>
              </div>

              <div className="relative mt-4">
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="block w-full px-0 py-3 text-text-primary bg-transparent border-0 border-b border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-text-primary peer transition-colors resize-none"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute text-text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Project Details
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 flex h-[48px] items-center justify-center gap-2 rounded-full bg-primary-color px-8 text-sm font-medium text-bg-primary transition-all hover:opacity-90 w-fit group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Inquiry
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
