
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ServiceHero from '../components/services/ServiceHero';
import ServiceDetails from '../components/services/ServiceDetails';
import CTA from '../components/home/CTA';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServiceHero />
        <ServiceDetails />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
