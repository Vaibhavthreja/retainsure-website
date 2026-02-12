import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (sectionId: string) => {
    const scroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    if (location.pathname === '/') {
      // If we're on the home page, just scroll to the section
      scroll();
    } else {
      // If we're on another page, navigate to home first, then scroll
      navigate('/');
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(scroll, 100);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
            aria-label="RetainSure homepage"
          >
            <img 
              src="/RetainSureFullLogo.png" 
              alt="RetainSure" 
              className="h-5 sm:h-6 w-auto"
            />
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              to="/features"
              className="font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base"
              style={{ color: '#022610' }}
              aria-label="View features"
            >
              Features
            </Link>
            <Link
              to="/case-studies"
              className="font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base"
              style={{ color: '#022610' }}
              aria-label="Read case studies"
            >
              Case Studies
            </Link>
            <Link
              to="/pricing"
              className="font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base"
              style={{ color: '#022610' }}
              aria-label="View pricing"
            >
              Pricing
            </Link>
            <Link
              to="/free-ai-tools"
              className="font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base"
              style={{ color: '#039143' }}
              aria-label="Free AI tools for customer success"
            >
              Free AI Tools
            </Link>
            <button
              onClick={() => window.location.href = 'https://trust.retainsure.com'}
              className="font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base"
              style={{ color: '#022610' }}
              aria-label="Learn about our security measures"
            >
              Security
            </button>
            <button
              onClick={() => handleSectionNavigation('faq')}
              className="font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base"
              style={{ color: '#022610' }}
              aria-label="View frequently asked questions"
            >
              FAQ
            </button>
            <button
              onClick={() => window.location.href = 'https://app.retainsure.com'}
              className="border border-gray-300 px-4 lg:px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 cursor-pointer text-sm lg:text-base"
              style={{ color: '#022610' }}
              aria-label="Login to RetainSure app"
            >
              Login
            </button>
            <button
              onClick={() => window.location.href = '/book-a-demo'}
              className="text-white px-4 lg:px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 cursor-pointer text-sm lg:text-base"
              style={{ backgroundColor: '#039143' }}
              aria-label="Get started with RetainSure"
            >
              Get Started
            </button>
          </div>
          
          {/* Mobile Menu Button - You can add this later if needed */}
          <div className="md:hidden">
            {/* Mobile menu button placeholder */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;