
export default function ContactHero() {
  return (
    <div className="relative bg-blue-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/c089eeb3-b04e-4d24-ac4c-bc8dff08b5a5.jpg"
          alt="Contact Us"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Contact <span className="text-amber-400">Us</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team to discuss your construction project needs and receive a free consultation.
          </p>
        </div>
      </div>
    </div>
  );
}
