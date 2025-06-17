
export default function CompanyHistory() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/f5e953ab-9a58-42c8-8724-c626cf9ff950.jpg"
              alt="Company History"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            <p className="text-gray-600 mb-4">
              Founded in 1995, BuildPro Construction began as a small family business with a vision to deliver exceptional construction services with integrity and professionalism.
            </p>
            <p className="text-gray-600 mb-4">
              Over the decades, we've grown into a leading construction company, tackling projects of increasing complexity and scale while maintaining our commitment to quality craftsmanship and client satisfaction.
            </p>
            <p className="text-gray-600">
              Today, our diverse team of architects, engineers, project managers, and skilled tradespeople continues to push boundaries in construction excellence, embracing innovative technologies and sustainable building practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
