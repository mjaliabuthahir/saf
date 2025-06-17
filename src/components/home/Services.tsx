
import { Link } from 'react-router';
import { Building2, Home, PaintBucket, PencilRuler, Warehouse } from 'lucide-react';

const services = [
  {
    name: 'Commercial Construction',
    description: 'Building state-of-the-art commercial facilities, from office buildings to retail spaces.',
    icon: Building2,
    href: '/services#commercial'
  },
  {
    name: 'Residential Construction',
    description: 'Creating dream homes with quality craftsmanship and attention to detail.',
    icon: Home,
    href: '/services#residential'
  },
  {
    name: 'Renovation & Remodeling',
    description: 'Transforming existing spaces with modern designs and efficient solutions.',
    icon: PaintBucket,
    href: '/services#renovation'
  },
  {
    name: 'Interior Design',
    description: 'Professional interior design services to complement your construction project.',
    icon: PencilRuler,
    href: '/services#interior'
  },
  {
    name: 'Industrial Construction',
    description: 'Specialized construction for manufacturing, warehouse, and industrial facilities.',
    icon: Warehouse,
    href: '/services#industrial'
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900">Our Services</h2>
          <div className="mt-2 w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive construction services tailored to meet your specific needs and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.name}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <service.icon className="h-12 w-12 text-amber-500 mb-5" />
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <Link 
                to={service.href}
                className="text-amber-500 hover:text-amber-600 font-medium inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-blue-800 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
