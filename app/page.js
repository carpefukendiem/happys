import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import Locations from '@/components/Locations';
import Reviews from '@/components/Reviews';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <Gallery />
      <Locations />
      <Reviews />
      <CtaBanner />
      <Contact />
      <Footer />
      <ScrollAnimations />
    </>
  );
}
