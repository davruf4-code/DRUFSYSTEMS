import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Process from "@/components/portfolio/Process";
import CtaBanner from "@/components/portfolio/CtaBanner";
import Faq from "@/components/portfolio/Faq";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}