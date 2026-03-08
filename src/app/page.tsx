import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary font-sans text-text-primary overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
