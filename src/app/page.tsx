import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="border-t border-border" />
      </div>
      <About />
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="border-t border-border" />
      </div>
      <Stack />
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="border-t border-border" />
      </div>
      <Projects />
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="border-t border-border" />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
