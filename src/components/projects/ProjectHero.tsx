
export default function ProjectHero() {
  return (
    <div className="relative bg-blue-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/5db0efe8-e532-43b3-a45b-7453d90eda85.jpg"
          alt="Projects"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Our <span className="text-amber-400">Projects</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Showcasing our expertise and craftsmanship through a diverse portfolio of successful construction projects.
          </p>
        </div>
      </div>
    </div>
  );
}
