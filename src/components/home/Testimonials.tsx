
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "BuildPro Construction exceeded our expectations. Their attention to detail and commitment to quality transformed our commercial space into exactly what we envisioned.",
    author: "Michael Robinson",
    position: "CEO, TechInnovate",
    rating: 5
  },
  {
    id: 2,
    content: "Working with BuildPro on our home renovation was a wonderful experience. Professional team, transparent communication, and outstanding results.",
    author: "Sarah Johnson",
    position: "Homeowner",
    rating: 5
  },
  {
    id: 3,
    content: "For our retail expansion, we needed a reliable construction partner. BuildPro delivered on time and on budget with exceptional craftsmanship.",
    author: "David Chen",
    position: "Director, Retail Solutions",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900">What Our Clients Say</h2>
          <div className="mt-2 w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in our client relationships and the successful projects we've completed together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>
              <blockquote className="flex-grow">
                <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              </blockquote>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-semibold text-blue-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
