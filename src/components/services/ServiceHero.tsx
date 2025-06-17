
export default function ServiceHero() {
  return (
    <div className="relative bg-blue-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/70c9fff2-7746-46c2-afca-514d9535b2a8.jpg"
          alt="Services"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Our <span className="text-amber-400">Services</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to your specific project needs and requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
