import Navbar from "@/components/Navbar";
import Hero from "@/components/Sections/Hero";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-7x">
      <Navbar />
      <Hero />
    </div>
  );
}
