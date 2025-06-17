
const team = [
  {
    name: 'Robert Johnson',
    position: 'Chief Executive Officer',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/bcd93c59-2b42-4c0f-8b84-01f82d130707.jpg',
    bio: 'With 25+ years in construction management, Robert leads our company with expertise and vision.'
  },
  {
    name: 'Jennifer Williams',
    position: 'Chief Operations Officer',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/79887f94-e0ef-485a-bd54-25d051918250.jpg',
    bio: 'Jennifer ensures our operations run smoothly and efficiently while maintaining our high standards.'
  },
  {
    name: 'David Chen',
    position: 'Chief Architect',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/1ee354df-9ae7-44df-827c-e73ef0874cd4.jpg',
    bio: 'Award-winning architect David brings creative solutions and innovative designs to all our projects.'
  },
  {
    name: 'Maria Rodriguez',
    position: 'Project Manager',
    image: 'https://pub-cdn.sider.ai/u/U0W8HK8329W/web-coder/6851f6c5a5efb207b54c614d/resource/70d2e6de-c19c-4741-868b-b7fa868d358f.jpg',
    bio: 'Maria's attention to detail and excellent leadership skills keep our projects on time and within budget.'
  }
];

export default function Team() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900">Leadership Team</h2>
          <div className="mt-2 w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who lead our company to success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div 
              key={member.name}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                <p className="text-amber-500 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
