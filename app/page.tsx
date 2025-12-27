import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import TechStack from "@/components/sections/tech-stack";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <TechStack />
      <Footer />
    </>
  );
}
