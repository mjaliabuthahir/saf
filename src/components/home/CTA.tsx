
import { Link } from 'react-router';

export default function CTA() {
  return (
    <section className="py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:flex-1">
            <h2 className="text-3xl font-bold text-white">Ready to Start Your Project?</h2>
            <p className="mt-2 text-lg text-blue-100">
              Contact us today for a free consultation and quote.
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:ml-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-900 bg-amber-500 hover:bg-amber-400 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
