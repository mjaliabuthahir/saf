
export default function AboutHero() {
  return (
    <div className="relative bg-blue-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/dca50e46-2c0c-4ecc-9327-72223b1588bd.jpg"
          alt="Construction team"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            About <span className="text-amber-400">BuildPro Construction</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Building excellence since 1995 with a commitment to quality, innovation, and client satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
