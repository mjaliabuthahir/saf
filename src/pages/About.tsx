
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import CompanyHistory from '../components/about/CompanyHistory';
import OurValues from '../components/about/OurValues';
import Team from '../components/about/Team';
import CTA from '../components/home/CTA';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <CompanyHistory />
        <OurValues />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
