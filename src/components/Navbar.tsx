"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-bg-primary/80 backdrop-blur-md border-bg-secondary shadow-sm py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="relative z-50">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 text-text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-0 left-0 right-0 bg-bg-primary pt-24 pb-12 px-6 flex flex-col items-center gap-6 shadow-xl border-b border-bg-secondary"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-primary text-xl font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 w-full text-center"
              >
                Get a Quote
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
