import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
import Join from "@/pages/Join";
import News from "@/pages/News";
import Shop from "@/pages/Shop";
import Tournaments from "@/pages/Tournaments";

export default function Home() {
  return (
    <>
      <div className="hero-gradient overflow-hidden">
        <Hero />
      </div>
      <About />
      <Tournaments />
      <Contact />
      <Shop />
      <News />
      <Join />
      <Footer />
    </>
  );
}
