"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    // Simulate API call
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
    <section id="contact" className="py-24 bg-bg-secondary relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Let's Talk
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-10">
              Ready to start your next project or need to discuss a technical
              challenge? Drop us a line.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@nuvex.com"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    hello@nuvex.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">
                    Call Us
                  </h4>
                  <a
                    href="tel:+15551234567"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">
                    Visit Us
                  </h4>
                  <p className="text-text-secondary">
                    123 Innovation Drive
                    <br />
                    Tech District, Austin, TX 78701
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-bg-primary p-8 md:p-12 rounded-3xl border border-bg-secondary shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-transparent focus:border-primary focus:bg-bg-primary focus:outline-none transition-all text-text-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-transparent focus:border-primary focus:bg-bg-primary focus:outline-none transition-all text-text-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-transparent focus:border-primary focus:bg-bg-primary focus:outline-none transition-all text-text-primary"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-transparent focus:border-primary focus:bg-bg-primary focus:outline-none transition-all text-text-primary resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
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
