
import { Link } from 'react-router';

export default function Hero() {
  return (
    <div className="relative bg-blue-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/045b756f-63ad-46b6-a82e-48d778f431b9.jpg"
          alt="Construction site background"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building Your Vision, <span className="text-amber-400">Crafting Excellence</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Professional construction services delivering quality, reliability, and innovation for commercial and residential projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-900 bg-amber-500 hover:bg-amber-400 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              to="/projects" 
              className="inline-flex justify-center items-center px-6 py-3 border border-white rounded-md shadow-sm text-base font-medium text-white bg-transparent hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
