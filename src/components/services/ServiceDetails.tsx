
import { Building2, Home, PaintBucket, PencilRuler, Warehouse } from 'lucide-react';

const services = [
  {
    id: 'commercial',
    title: 'Commercial Construction',
    description: 'Our commercial construction services deliver top-quality office buildings, retail spaces, hotels, and more. We handle every aspect of the project from planning and design to construction and finishing.',
    features: [
      'Office buildings and corporate headquarters',
      'Retail spaces and shopping centers',
      'Hotels and hospitality facilities',
      'Healthcare facilities and medical offices',
      'Restaurant and food service establishments'
    ],
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/8d2273fe-76fc-4124-9887-966a652af04c.jpg',
    icon: Building2
  },
  {
    id: 'residential',
    title: 'Residential Construction',
    description: 'We build custom homes, multi-family dwellings, and residential communities with attention to detail and quality craftsmanship that exceeds expectations.',
    features: [
      'Custom luxury homes',
      'Multi-family apartment buildings',
      'Condominiums and townhouses',
      'Planned residential communities',
      'Senior living facilities'
    ],
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/c33e44a7-8ae3-4b90-8ce8-884cd281e44e.jpg',
    icon: Home
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    description: 'Transform your existing space with our renovation and remodeling services. We modernize, expand, and enhance both commercial and residential properties.',
    features: [
      'Complete building renovations',
      'Kitchen and bathroom remodeling',
      'Office and workspace modernization',
      'Historic building restoration',
      'Additions and expansions'
    ],
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/568ce2ee-5056-437e-916a-7d3c89f2ee20.jpg',
    icon: PaintBucket
  },
  {
    id: 'interior',
    title: 'Interior Design & Build',
    description: 'Our interior design services complement our construction expertise, creating cohesive, functional, and aesthetically pleasing interior spaces.',
    features: [
      'Space planning and layout design',
      'Material and finish selection',
      'Custom cabinetry and millwork',
      'Lighting design and implementation',
      'Furniture and décor coordination'
    ],
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/3a6a73a0-d8a7-47b7-a6c0-2d2442a4a6bb.jpg',
    icon: PencilRuler
  },
  {
    id: 'industrial',
    title: 'Industrial Construction',
    description: 'We specialize in constructing industrial facilities that meet specific operational requirements while maintaining safety and efficiency.',
    features: [
      'Manufacturing facilities',
      'Warehouses and distribution centers',
      'Processing plants',
      'Cold storage facilities',
      'Research and development facilities'
    ],
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/b2339945-12ca-4c62-a099-ab45d7034482.jpg',
    icon: Warehouse
  }
];

export default function ServiceDetails() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id}
            className={`py-12 ${index !== 0 ? 'border-t border-gray-200' : ''}`}
          >
            <div className={`lg:flex lg:items-center lg:space-x-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-amber-500 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-900">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h3 className="text-lg font-semibold text-blue-800 mb-3">What We Offer:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-6 w-6 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
