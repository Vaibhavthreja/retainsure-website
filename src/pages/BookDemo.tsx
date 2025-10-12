import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play } from 'lucide-react';


function BookDemo() {
  useEffect(() => {
    // Load HubSpot meetings embed script
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.type = 'text/javascript';
    script.async = true;
    
    // Add script to document head
    document.head.appendChild(script);
    
    // Initialize the widget after script loads
    script.onload = () => {
      // The script will automatically find and initialize containers with data-src attribute
      if (window.HubSpotConversations) {
        window.HubSpotConversations.widget.load();
      }
    };
    
    // Cleanup function
    return () => {
      // Remove script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    // This function won't work on this page since sections don't exist
    // But we need it for the Navigation component
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      <Helmet>
        <title>Book a Demo - RetainSure | See Our AI-Powered Customer Success Platform in Action</title>
        <meta name="description" content="Book a personalized demo of RetainSure's AI-powered customer success platform. See how we help reduce churn and identify upsell opportunities with accurate predictions." />
        <meta name="keywords" content="RetainSure demo, customer success demo, AI platform demo, churn prediction demo, book demo" />
        <link rel="canonical" href="https://www.retainsure.com/book-a-demo" />
      </Helmet>
      
      

      {/* Demo Booking Section */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <section className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden" aria-label="Demo booking">
              <div className="bg-gradient-to-r from-gray-50 to-white p-8 border-b border-gray-100">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#039143' }}>
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold" style={{ color: '#022610' }} itemProp="headline">
                      Book a Demo
                    </h1>
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.7 }}>
                    Do you know what happens when a rockstar team like yours meets RetainSure? Magic!🪄✨</p>
                </div>
              </div>

              {/* HubSpot Demo Booking Frame */}
              <div className="p-8">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="w-full">
                    <div 
                      className="meetings-iframe-container w-full" 
                      data-src="https://meetings.hubspot.com/dhiraj16?embed=true"
                      style={{ width: '100%', minHeight: '700px' }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      
    </div>
  );
}

export default BookDemo;