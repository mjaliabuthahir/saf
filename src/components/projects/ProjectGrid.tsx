
import { useState } from 'react';
import { Link } from 'react-router';
import { cn } from '../../lib/utils';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'residential', name: 'Residential' },
  { id: 'industrial', name: 'Industrial' },
  { id: 'retail', name: 'Retail' }
];

const projects = [
  {
    id: 1,
    title: 'Skyline Office Tower',
    category: 'commercial',
    location: 'Downtown Metro',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/5ab51526-6082-4c34-902b-66f7f8ec96ee.jpg',
    url: '/projects/skyline-office-tower'
  },
  {
    id: 2,
    title: 'Riverside Residences',
    category: 'residential',
    location: 'Waterfront District',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/a2e6eac4-e550-472b-86ae-f0058d9a8143.jpg',
    url: '/projects/riverside-residences'
  },
  {
    id: 3,
    title: 'Metro Shopping Center',
    category: 'retail',
    location: 'Suburbia',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/c17adeaf-43f1-4c15-ae72-9c01608d816d.jpg',
    url: '/projects/metro-shopping-center'
  },
  {
    id: 4,
    title: 'Industrial Complex',
    category: 'industrial',
    location: 'Commerce Park',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/71167fab-f567-4b75-8e53-0fed63c9503d.jpg',
    url: '/projects/industrial-complex'
  },
  {
    id: 5,
    title: 'City Center Offices',
    category: 'commercial',
    location: 'Financial District',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/c8809f26-9c41-4a39-b093-8c395e1e4153.jpg',
    url: '/projects/city-center-offices'
  },
  {
    id: 6,
    title: 'Lakeside Villas',
    category: 'residential',
    location: 'North Shore',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/422de5d3-a98a-423d-ad04-5fe3158b0bf9.jpg',
    url: '/projects/lakeside-villas'
  },
  {
    id: 7,
    title: 'Tech Manufacturing Facility',
    category: 'industrial',
    location: 'Innovation Park',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/304437c4-721a-4894-a477-6c307d9f7f4d.jpg',
    url: '/projects/tech-manufacturing-facility'
  },
  {
    id: 8,
    title: 'Urban Retail Center',
    category: 'retail',
    location: 'Downtown',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/03f80707-7058-4014-a83b-d9b59da63df0.jpg',
    url: '/projects/urban-retail-center'
  }
];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-blue-900 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id} 
              to={project.url}
              className="group"
            >
              <div className="overflow-hidden rounded-lg shadow-md bg-white h-full">
                <div className="relative h-64 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-blue-900 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-blue-900 group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    <span className="inline-flex items-center">
                      <svg className="h-4 w-4 text-amber-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
