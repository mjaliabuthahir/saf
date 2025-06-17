
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
