import Hero from "@/components/Hero";
import About from "@/components/About";
import Operations from "@/components/Operations";
import WhyPartner from "@/components/WhyPartner";
import Contact from "@/components/Contact";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Operations />
      <WhyPartner />
      <Contact />
      <HomeCTA />
    </div>
  );
}
