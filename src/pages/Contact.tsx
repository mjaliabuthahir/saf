
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import Map from '../components/contact/Map';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ContactHero />
        <ContactForm />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
</code-write>

<code-write>
<code-path>src/App.tsx</code-path>
<code-content>import { HashRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}
