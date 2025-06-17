
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectGrid from '../components/projects/ProjectGrid';
import CTA from '../components/home/CTA';

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProjectHero />
        <ProjectGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
