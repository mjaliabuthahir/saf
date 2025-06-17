
import { Shield, ThumbsUp, Recycle, Users } from 'lucide-react';

const values = [
  {
    name: 'Quality',
    description: 'We never compromise on quality, using premium materials and proven construction techniques.',
    icon: Shield
  },
  {
    name: 'Integrity',
    description: 'We operate with transparency and honesty in all client and business relationships.',
    icon: ThumbsUp
  },
  {
    name: 'Sustainability',
    description: 'We embrace eco-friendly practices and sustainable building methods in all our projects.',
    icon: Recycle
  },
  {
    name: 'Teamwork',
    description: 'We collaborate effectively with clients, partners, and stakeholders to deliver exceptional results.',
    icon: Users
  }
];

export default function OurValues() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900">Our Core Values</h2>
          <div className="mt-2 w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define who we are as a company.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div 
              key={value.name}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <value.icon className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">{value.name}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
