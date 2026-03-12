import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 flex items-center justify-center">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Page Not Found - RetainSure</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className="text-center px-4 max-w-lg">
        <p className="text-8xl font-bold mb-4" style={{ color: '#039143' }}>
          404
        </p>
        <h1 className="text-3xl font-bold mb-4" style={{ color: '#022610' }}>
          Page not found
        </h1>
        <p className="text-lg mb-8" style={{ color: '#022610', opacity: 0.7 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="group inline-flex items-center space-x-2 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: '#039143' }}
        >
          <span>Back to Home</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
