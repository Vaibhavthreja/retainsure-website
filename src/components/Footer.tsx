import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200" itemScope itemType="https://schema.org/Organization">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
          {/* Left Side - Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-1 sm:space-y-2">
              <img 
                src="/RetainSureFullLogo.png" 
                alt="RetainSure" 
                className="h-6 sm:h-8 w-auto mb-2 sm:mb-3"
                itemProp="logo"
              />
              <h3 className="text-base sm:text-lg font-semibold" style={{ color: '#022610' }} itemProp="name">
                RetainSure Technologies Private Limited
              </h3>
              <div className="text-sm space-y-1" style={{ color: '#022610', opacity: 0.7 }} itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p itemProp="streetAddress">#17, 2nd floor, 7th Main Road</p>
                <p itemProp="addressLocality">ll Stage Indiranagar</p>
                <p><span itemProp="addressLocality">Bangalore</span> - <span itemProp="postalCode">560038</span></p>
              </div>
            </div>
          </div>

          {/* Right Side - Legal Links */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8" aria-label="Legal links">
            <Link 
              to="/privacy-policy" 
              className="text-sm font-medium hover:opacity-70 transition-opacity duration-200" 
              style={{ color: '#022610' }}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-sm font-medium hover:opacity-70 transition-opacity duration-200" 
              style={{ color: '#022610' }}
            >
              Terms of Service
            </Link>
            <Link 
              to="/contact-us" 
              className="text-sm font-medium hover:opacity-70 transition-opacity duration-200" 
              style={{ color: '#022610' }}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
          <div className="text-center">
            <p className="text-sm" style={{ color: '#022610', opacity: 0.6 }} itemProp="copyrightNotice">
              © 2025 RetainSure Technologies Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;