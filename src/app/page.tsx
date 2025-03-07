import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <ContactPage />
      <Footer />
    </div>
  );
}
