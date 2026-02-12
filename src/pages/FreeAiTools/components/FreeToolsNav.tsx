import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function FreeToolsNav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50" role="navigation" aria-label="Free AI Tools navigation">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
              aria-label="RetainSure homepage"
            >
              <img
                src="/RetainSureFullLogo.png"
                alt="RetainSure"
                className="h-5 sm:h-6 w-auto"
              />
            </Link>
            <div className="hidden sm:block w-px h-5 bg-gray-200" />
            <span
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md"
              style={{ backgroundColor: '#edfcf2', color: '#022610' }}
            >
              Free AI Tools
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollTo('features')}
              className="font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base"
              style={{ color: '#022610' }}
            >
              Tools
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base"
              style={{ color: '#022610' }}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo('who-its-for')}
              className="font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base"
              style={{ color: '#022610' }}
            >
              Who It's For
            </button>
            <a
              href="https://tools.retainsure.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200 text-sm lg:text-base"
              style={{ backgroundColor: '#039143' }}
            >
              Try Free Tools
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="md:hidden">
            <a
              href="https://tools.retainsure.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white font-medium px-4 py-2 rounded-lg text-sm"
              style={{ backgroundColor: '#039143' }}
            >
              Try Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default FreeToolsNav;
