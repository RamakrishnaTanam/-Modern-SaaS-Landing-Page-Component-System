import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Stats } from "@/components/landing/Stats";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { BlogSection } from "@/components/landing/BlogSection";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { MetaTags } from "@/components/ui/meta-tags";
import { CTABanner } from "@/components/ui/cta-banner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MetaTags />
      <Navigation />
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQ />
      <BlogSection />
      <CTABanner
        title="Transform Your Marketing"
        description="Join thousands of companies already using ADmyBRAND AI Suite to automate, optimize, and scale their marketing efforts with intelligent AI-powered solutions."
        primaryAction="Start 14-Day Free Trial"
        secondaryAction="Schedule Demo"
        variant="gradient"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
