
import { Link } from 'react-router';

const projects = [
  {
    id: 1,
    title: 'Skyline Office Tower',
    category: 'Commercial',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/8b67969c-4765-46bd-ad50-bb70c5de7144.jpg',
    url: '/projects/skyline-office-tower'
  },
  {
    id: 2,
    title: 'Riverside Residences',
    category: 'Residential',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/0ed6d15c-3ee9-4181-bb63-f32996899407.jpg',
    url: '/projects/riverside-residences'
  },
  {
    id: 3,
    title: 'Metro Shopping Center',
    category: 'Retail',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/844fcfe6-4540-4f20-9cad-199120c1100b.jpg',
    url: '/projects/metro-shopping-center'
  },
  {
    id: 4,
    title: 'Industrial Complex',
    category: 'Industrial',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/09023289-fc1e-45d3-ad9a-5b5854539e98.jpg',
    url: '/projects/industrial-complex'
  }
];

export default function Projects() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900">Featured Projects</h2>
          <div className="mt-2 w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing our expertise in various construction sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
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
                    <span className="bg-amber-500 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-blue-900 group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/projects"
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-blue-800 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
