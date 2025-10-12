import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Calendar, Clock, Phone } from 'lucide-react';


function ContactUs() {
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
        <title>Contact Us - RetainSure | Get in Touch with Our Customer Success Experts</title>
        <meta name="description" content="Contact RetainSure for support, demos, or questions about our AI-powered customer success platform. Email us at support@retainsure.com or book a free consultation." />
        <meta name="keywords" content="contact RetainSure, customer success support, demo booking, RetainSure contact information" />
        <link rel="canonical" href="https://www.retainsure.com/contact-us" />
      </Helmet>
      
      

      {/* Header Section */}
      <header className="py-12 bg-gradient-to-r from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#022610' }} itemProp="headline">
              Get in Touch
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Contact Information Cards */}
            <section className="grid md:grid-cols-2 gap-8 mb-16" aria-label="Contact information">
              {/* Email Contact Card */}
              <article className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300" itemScope itemType="https://schema.org/ContactPoint">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#039143' }}>
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#022610' }} itemProp="name">
                      Email Support
                    </h3>
                    <p className="text-lg leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                      For general inquiries, support, or questions about our platform:
                    </p>
                    <a 
                      href="mailto:support@retainsure.com"
                      itemProp="email"
                      className="inline-flex items-center text-lg font-semibold hover:opacity-70 transition-opacity"
                      style={{ color: '#039143' }}
                    >
                      support@retainsure.com
                    </a>
                    
                  </div>
                </div>
              </article>

              {/* Mail Contact Card */}
              <article className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300" itemScope itemType="https://schema.org/PostalAddress">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#039143' }}>
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#022610' }} itemProp="name">
                      Office Address
                    </h3>
                    <p className="text-lg leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                      Send mail to our headquarters:
                    </p>
                    <div className="text-base space-y-1" style={{ color: '#022610', opacity: 0.7 }}>
                      <p className="font-semibold" itemProp="name">RetainSure Technologies Private Limited</p>
                      <p itemProp="streetAddress">#17, 2nd floor, 7th Main Road</p>
                      <p itemProp="addressLocality">ll Stage Indiranagar</p>
                      <p><span itemProp="addressLocality">Bangalore</span> - <span itemProp="postalCode">560038</span>, <span itemProp="addressCountry">India</span></p>
                    </div>
                  </div>
                </div>
              </article>
            </section>

            {/* Demo Booking Section */}
            <section className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden" aria-label="Book a consultation">
              <div className="bg-gradient-to-r from-gray-50 to-white p-8 border-b border-gray-100">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#039143' }}>
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#022610' }} itemProp="headline">
                      Book a Free Consultation
                    </h2>
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.7 }}>
                    Ready to transform your customer success strategy? We'd love to hear your current pain points and help you solve those with or without RetainSure product :) 
                  </p>
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

export default ContactUs;