
import { Building, Users, Award, Calendar } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Projects Completed',
    value: '500+',
    icon: Building
  },
  {
    id: 2,
    name: 'Professional Team',
    value: '80+',
    icon: Users
  },
  {
    id: 3,
    name: 'Industry Awards',
    value: '25+',
    icon: Award
  },
  {
    id: 4,
    name: 'Years Experience',
    value: '30+',
    icon: Calendar
  }
];

export default function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center p-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
                <stat.icon className="h-8 w-8 text-blue-900" />
              </div>
              <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
              <p className="text-gray-600">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
