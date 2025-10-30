import React, { useState, useEffect } from 'react';
import { X, Settings, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowCustomize(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowCustomize(false);
  };

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowCustomize(false);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-4 right-4 z-50 max-w-sm">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transform transition-all duration-300 ease-out">
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#039143' }}>
              <Cookie className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#022610' }}>
                Cookie Settings
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                We use cookies to enhance your experience, analyze site traffic and deliver personalized content. Read our{' '}
                <Link 
                  to="/privacy-policy#cookies" 
                  className="underline hover:opacity-70 transition-opacity"
                  style={{ color: '#039143' }}
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleAcceptAll}
              className="w-full text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#039143' }}
            >
              Accept All
            </button>
            
            <div className="flex space-x-2">
              <button
                onClick={handleCustomize}
                className="flex-1 border border-gray-300 px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200"
                style={{ color: '#022610' }}
              >
                Customize
              </button>
              <button
                onClick={handleRejectAll}
                className="flex-1 border border-gray-300 px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200"
                style={{ color: '#022610' }}
              >
                Reject All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Customization Modal */}
      {showCustomize && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={() => setShowCustomize(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-full max-w-md transform transition-all duration-300 scale-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#039143' }}>
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold" style={{ color: '#022610' }}>
                  Cookie Preferences
                </h2>
              </div>
              <button
                onClick={() => setShowCustomize(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="w-4 h-4" style={{ color: '#022610' }} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1" style={{ color: '#022610' }}>
                    Necessary
                  </h3>
                  <p className="text-sm" style={{ color: '#022610', opacity: 0.7 }}>
                    Essential for the website to function properly. Cannot be disabled.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-xl">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1" style={{ color: '#022610' }}>
                    Analytics
                  </h3>
                  <p className="text-sm" style={{ color: '#022610', opacity: 0.7 }}>
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 px-1 ${
                      preferences.analytics 
                        ? 'bg-green-500 justify-end' 
                        : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-xl">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1" style={{ color: '#022610' }}>
                    Marketing
                  </h3>
                  <p className="text-sm" style={{ color: '#022610', opacity: 0.7 }}>
                    Used to deliver personalized advertisements and content.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 px-1 ${
                      preferences.marketing 
                        ? 'bg-green-500 justify-end' 
                        : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowCustomize(false)}
                className="flex-1 border border-gray-300 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                style={{ color: '#022610' }}
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 text-white px-4 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: '#039143' }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieBanner;