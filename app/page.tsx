import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { PortfolioFilterProvider } from "@/components/providers/PortfolioFilterContext";

import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Stats } from "@/components/sections/Stats";
import { Technologies } from "@/components/sections/Technologies";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <PortfolioFilterProvider>
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustedBy />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Portfolio />
        <Stats />
        <Technologies />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </PortfolioFilterProvider>
  );
}
