import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';

interface FreeToolsNavProps {
  showBackLink?: boolean;
  sectionLinks?: { id: string; label: string }[];
}

function FreeToolsNav({ showBackLink = false, sectionLinks }: FreeToolsNavProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const defaultLinks = [
    { id: 'features', label: 'Tools' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'who-its-for', label: "Who It's For" },
  ];

  const links = sectionLinks || defaultLinks;

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
            {showBackLink && (
              <>
                <span className="hidden md:block w-px h-5 bg-gray-200" />
                <Link
                  to="/free-customer-success-ai-tools"
                  className="hidden md:inline-flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity duration-200"
                  style={{ color: '#039143' }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  All Tools
                </Link>
              </>
            )}
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base"
                style={{ color: '#022610' }}
              >
                {link.label}
              </button>
            ))}
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

          <div className="md:hidden flex items-center gap-3">
            {showBackLink && (
              <Link
                to="/free-customer-success-ai-tools"
                className="inline-flex items-center gap-1 text-sm font-medium"
                style={{ color: '#039143' }}
              >
                <ChevronLeft className="w-4 h-4" />
                All Tools
              </Link>
            )}
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
