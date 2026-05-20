import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import TechStack from "@/components/sections/tech-stack";
import CaseStudies from "@/components/sections/case-studies";
import Testimonials from "@/components/sections/testimonials";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      {/* <AIShowcase /> */}
      <CaseStudies />
      <TechStack />
      <Testimonials />
      <Footer />
    </>
  );
}
