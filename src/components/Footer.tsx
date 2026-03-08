import { Logo } from "./Logo";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-secondary pt-20 pb-10 border-t border-bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo />
            <p className="text-text-secondary leading-relaxed max-w-sm">
              We design and develop high-performance websites, applications, and
              digital solutions that help businesses scale.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-secondary hover:text-primary hover:shadow-md transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-secondary hover:text-primary hover:shadow-md transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-secondary hover:text-primary hover:shadow-md transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-text-secondary hover:text-primary hover:shadow-md transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Portfolio", "Our Process", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {[
                "Web Development",
                "App Development",
                "UI/UX Design",
                "API Development",
                "SEO Optimization",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-text-secondary">
              <li>contact@nuvex.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                123 Tech Boulevard,
                <br />
                Innovation City, TX 75001
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-bg-primary flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} NUVEX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
