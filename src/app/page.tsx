import Navbar from "@/components/Navbar";
import Avis from "@/components/Sections/Avis";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Sections/Footer";
import Hero from "@/components/Sections/Hero";
import Realisation from "@/components/Sections/Realisation";
import Services from "@/components/Sections/Services";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-7">
      <Navbar />
      <Hero />
      <Services />
      <Avis />
      <Contact />
      <Realisation />
      <Footer />
    </div>
  );
}
