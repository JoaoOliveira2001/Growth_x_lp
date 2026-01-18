import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import MouseFluid from "@/components/MouseFluid";

export default function Home() {
  return (
    <main className="relative">
      <MouseFluid />
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Results />
      <Process />
      <Pricing />
      <Footer />
    </main>
  );
}
