
import { Link } from 'react-router';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">BuildPro</span>
              <span className="ml-1 text-xl font-bold text-amber-400">Construction</span>
            </div>
            <p className="mb-4 text-blue-100">
              Building tomorrow's landmarks with today's expertise. Quality construction services since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-amber-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-amber-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-amber-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-amber-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-amber-400 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-blue-100 hover:text-amber-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-amber-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#commercial" className="text-blue-100 hover:text-amber-400 transition-colors">Commercial Construction</Link>
              </li>
              <li>
                <Link to="/services#residential" className="text-blue-100 hover:text-amber-400 transition-colors">Residential Construction</Link>
              </li>
              <li>
                <Link to="/services#renovation" className="text-blue-100 hover:text-amber-400 transition-colors">Renovation</Link>
              </li>
              <li>
                <Link to="/services#interior" className="text-blue-100 hover:text-amber-400 transition-colors">Interior Design</Link>
              </li>
              <li>
                <Link to="/services#planning" className="text-blue-100 hover:text-amber-400 transition-colors">Construction Planning</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>123 Construction Ave, Building City, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-amber-400 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-amber-400 flex-shrink-0" />
                <span>info@buildpro-construction.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800">
          <p className="text-center text-blue-200">
            &copy; {new Date().getFullYear()} BuildPro Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
