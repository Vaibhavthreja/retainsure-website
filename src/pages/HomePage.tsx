import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, CheckCircle, ArrowRight, Shield, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';


function HomePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      <Helmet>
        <title>RetainSure - Stop Churn, Unlock Upsell, Grow Smarter | AI-Powered Customer Success</title>
        <meta name="description" content="Transform your customer success strategy with RetainSure's AI-powered platform. Get accurate churn predictions, spot upsell opportunities, and take personalized action at scale. Trusted by leading CS teams." />
        <meta name="keywords" content="customer success, churn prediction, upsell opportunities, AI customer success, customer retention, SaaS analytics, customer success platform, churn prevention" />
        <link rel="canonical" href="https://www.retainsure.com/" />
        
        {/* Structured Data for WebPage */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "RetainSure - AI-Powered Customer Success Platform",
          "description": "Stop churn, unlock upsell opportunities, and grow smarter with RetainSure's AI-powered customer success platform.",
          "url": "https://www.retainsure.com/",
          "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "RetainSure",
            "description": "AI-powered customer success platform for churn prediction and upsell identification"
          }
        })}
        </script>
      </Helmet>
      
      

      {/* Hero Section */}
      <header className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight" style={{ color: '#022610' }} itemProp="headline">
                Your AI Customer Success Manager{' '}
                <span className="block text-xl sm:text-2xl lg:text-4xl mt-4" style={{ color: '#039143' }}>
                  Onboarding. Retention. Expansion
                </span>
              </h1>
            
            </div>

            {/* Bullet Points */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg" style={{ color: '#022610' }}>Product Adoption Agent: Contextual AI journeys within product for onboarding and adoption </h3>
                
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg" style={{ color: '#022610' }}>Meeting Agent: Turning customer calls into actions and insights</h3>
                  
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg" style={{ color: '#022610' }}>Copilot Agent: AI-driven day planning, recommendations and automations</h3>
                  
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={() => window.location.href = '/book-a-demo'}
                  className="group text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 hover:opacity-90 flex-1 sm:flex-initial"
                  style={{ backgroundColor: '#039143' }}
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <Link 
                  to="/interactive-demo"
                  className="group border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 hover:bg-gray-50 flex-1 sm:flex-initial"
                  style={{ borderColor: '#039143', color: '#039143' }}
                >
                  <span>Try Interactive Demo</span>
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Video Placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/BBOtEJbF9T8?si=z02q2MLPNNj_RVzj"
                title="RetainSure Product Demo"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </header>

      {/* Trusted By Section */}
      <section className="bg-white py-8 sm:py-12 border-t border-gray-100" aria-label="Trusted by leading companies">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#022610' }} itemProp="headline">
              Trusted by customer success teams at
            </h2>
          
          </div>

          {/* Logo Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8 sm:space-x-16 items-center">
              {/* First set of logos */}
              <div className="flex space-x-8 sm:space-x-16 items-center min-w-max">
                <img src="/MailmodoLogo.png" alt="Mailmodo" className="h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" />
                <img src="/LimeChat.png" alt="LimeChat" className="h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" />
                <img src="/LambdaTestLogo.png" alt="LambdaTest" className="h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" />
                <img src="/tranzact-logo.png" alt="Tranzact" className="h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8 sm:space-x-16 items-center min-w-max">
                <img src="/MailmodoLogo.png" alt="Mailmodo" className="h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" />
                <img src="/LimeChat.png" alt="LimeChat" className="h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" />
                <img src="/LambdaTestLogo.png" alt="LambdaTest" className="h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" />
                <img src="/tranzact-logo.png" alt="Tranzact" className="h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white" aria-label="How RetainSure works">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#022610' }} itemProp="headline">
              How it works?
            </h2>
            
          </div>

          <div className="space-y-16 sm:space-y-24">
            {/* First Subsection - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <img 
                  src="/Predictions.png" 
                  alt="AI-powered churn and upsell predictions dashboard" 
                  className="w-full h-auto rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
              
              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#022610' }}>
                  Most accurate churn and upsell 
prediction
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg" style={{ color: '#022610', opacity: 0.8 }}>
                      AI-powered accurate churn and upsell prediction scores
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg" style={{ color: '#022610', opacity: 0.8 }}>
                      An actionable explanation on each prediction
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg" style={{ color: '#022610', opacity: 0.8 }}>
                      Automate personalized action taking at scale
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Subsection - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="space-y-4 sm:space-y-6 order-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#022610' }}>
                  Stay on top of your customers' data
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg" style={{ color: '#022610', opacity: 0.8 }}>
                      A personal assistant who knows your customers in and out
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg" style={{ color: '#022610', opacity: 0.8 }}>
                      Ask custom questions and let it take action for you
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg" style={{ color: '#022610', opacity: 0.8 }}>
                      Create QBR decks in minutes
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative order-2 lg:order-2">
                <img 
                  src="/Chat.png" 
                  alt="AI assistant chat interface for customer data insights" 
                  className="w-full h-auto rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
            </div>

            {/* Third Subsection - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <img 
                  src="/Social.png" 
                  alt="Customer social presence tracking dashboard" 
                  className="w-full h-auto rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
              
              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#022610' }}>
                  Track customer's social presence
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg" style={{ color: '#022610', opacity: 0.8 }}>
                      Keep track of your customers' funding, layoff and hiring status
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg" style={{ color: '#022610', opacity: 0.8 }}>
                      Get alerts on customer news that can impact churn or expansion
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg" style={{ color: '#022610', opacity: 0.8 }}>
                      Track your champions on LinkedIn
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-20 bg-white" aria-label="Customer testimonials">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#022610' }} itemProp="headline">
              What our customers say about us
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: '#022610', opacity: 0.7 }}>
              Hear from customer success leaders who've transformed their retention strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Testimonial 1 */}
            <article className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col md:col-span-2 lg:col-span-1" itemScope itemType="https://schema.org/Review">
              <div className="text-center mb-4 sm:mb-6">
                <img 
                  src="/WendyHeadshot.jpeg" 
                  alt="Wendy Zingher" 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-2 border-gray-200"
                />
                <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: '#022610' }} itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">
                  Wendy Zingher
                  </span>
                </h3>
                <p className="text-xs sm:text-sm font-medium" style={{ color: '#039143' }} itemProp="jobTitle">
                  VP of Customer Success, LambdaTest
                </p>
              </div>
              <blockquote className="text-center flex-1 flex flex-col">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }} itemProp="reviewBody">
                  "I just love RetainSure's predictions. Accurate predictions and concise, actionable explanations of churn risk and upsell saving my team and me 2+ hours daily. I love that it reflects all the right reasons that accounts are at risk without us handcrafting a health score."
                </p>
                <div className="flex justify-center mt-auto pt-4 sm:pt-6">
                  <img 
                    src="/LambdaTestLogo.png" 
                    alt="LambdaTest" 
                    className="h-12 sm:h-16 w-auto max-w-[120px] sm:max-w-[160px] object-contain"
                  />
                </div>
              </blockquote>
            </article>

            {/* Testimonial 2 */}
            <article className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col" itemScope itemType="https://schema.org/Review">
              <div className="text-center mb-4 sm:mb-6">
                <img 
                  src="/SridharHeadshot.jpg" 
                  alt="Sridhar Kowtal" 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-2 border-gray-200"
                />
                <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: '#022610' }} itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">
                  Sridhar Kowtal
                  </span>
                </h3>
                <p className="text-xs sm:text-sm font-medium" style={{ color: '#039143' }} itemProp="jobTitle">
                  Head of Customer Success, LimeChat
                </p>
              </div>
              <blockquote className="text-center flex-1 flex flex-col">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }} itemProp="reviewBody">
                  "RetainSure has put our customer success program on steroids. Preparing MBRs used to take up the entire last week of the month, but now it's down to just 2 minutes per customer. The AI gives us everything we need, data, insights, and next steps, so our team can focus on driving real outcomes."
                </p>
                <div className="flex justify-center mt-auto pt-4 sm:pt-6">
                  <img 
                    src="/LimeChat.png" 
                    alt="LimeChat" 
                    className="h-12 sm:h-16 w-auto max-w-[120px] sm:max-w-[160px] object-contain"
                  />
                </div>
              </blockquote>
            </article>

            {/* Testimonial 3 */}
            <article className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col md:col-span-2 lg:col-span-1" itemScope itemType="https://schema.org/Review">
              <div className="text-center mb-4 sm:mb-6">
                <img 
                  src="/SanjanaHeadShot.jpg" 
                  alt="Sanjana Shankar" 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-2 border-gray-200"
                />
                <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: '#022610' }} itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">
                  Sanjana Shankar
                  </span>
                </h3>
                <p className="text-xs sm:text-sm font-medium" style={{ color: '#039143' }} itemProp="jobTitle">
                  Head of Customer Success, Mailmodo
                </p>
              </div>
              <blockquote className="text-center flex-1 flex flex-col">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }} itemProp="reviewBody">
                  "Upsell is a key motion for our CS team, especially with our self-serve customers—but doing it at scale was always a challenge. RetainSure's upsell predictions changed that. It helped us zero in on high-potential accounts, understand exactly what they needed to upgrade, and even gave us personalized email drafts to reach out. We saw a 20x ROI from just the first month of using it."
                </p>
                <div className="flex justify-center mt-auto pt-4 sm:pt-6">
                  <img 
                    src="/MailmodoLogo.png" 
                    alt="Mailmodo" 
                    className="h-12 sm:h-16 w-auto max-w-[120px] sm:max-w-[160px] object-contain"
                  />
                </div>
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section id="data-security" className="py-12 sm:py-16 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100" aria-label="Data security and compliance">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#022610' }} itemProp="headline">
                Your Data, Our Priority
              </h2>
              <p className="text-base sm:text-lg mt-3 sm:mt-4 max-w-md" style={{ color: '#022610', opacity: 0.7 }}>
                Enterprise-grade security and compliance you can trust
              </p>
            </div>

            {/* Right Content - Compliance Badges and Button */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              {/* SOC 2 Badge */}
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src="/SOCbadge.png"
                  alt="SOC 2 Type 2 Compliance"
                  className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: '#022610' }}>
                    SOC 2 Type 2<br />
                    (Compliant)
                  </h3>
                </div>
              </div>

              {/* GDPR Badge */}
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src="/GDPRBadge.png"
                  alt="GDPR Compliance"
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: '#022610' }}>
                  GDPR<br />
                    (Compliant)
                  </h3>
                </div>
              </div>

              {/* Visit Trust Center Button */}
              <a
                href="https://trust.retainsure.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 hover:opacity-90"
                style={{ backgroundColor: '#039143' }}
              >
                <span>Visit Trust Center</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white" aria-label="Frequently asked questions" itemScope itemType="https://schema.org/FAQPage">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#022610' }} itemProp="headline">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: '#022610', opacity: 0.7 }}>
              Get answers to common questions about RetainSure
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {/* FAQ Item 1 */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300" itemScope itemType="https://schema.org/Question">
              <div className="p-6 sm:p-8 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-opacity-80 transition-all duration-200 pr-4" style={{ color: '#022610' }} itemProp="name">
                    How accurate are RetainSure's churn/upsell predictions?
                  </h3>
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0" style={{ color: '#039143' }} />
                </div>
                <div className="mt-4 sm:mt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden" itemScope itemType="https://schema.org/Answer">
                  <div className="border-t border-gray-100 pt-4 sm:pt-6">
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }} itemProp="text">
                      RetainSure's predictions are 1.5 to 2 times more accurate than traditional health scores. The models learn from your historical churn and expansion data, factoring in sentiment across communication channels, behaviour patterns, product usage, and industry or regional context to deliver highly personalised insights. 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300" itemScope itemType="https://schema.org/Question">
              <div className="p-6 sm:p-8 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-opacity-80 transition-all duration-200 pr-4" style={{ color: '#022610' }} itemProp="name">
                    How long does it take to set up RetainSure?
                  </h3>
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0" style={{ color: '#039143' }} />
                </div>
                <div className="mt-4 sm:mt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden" itemScope itemType="https://schema.org/Answer">
                  <div className="border-t border-gray-100 pt-4 sm:pt-6">
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }} itemProp="text">
                      Most customers are up and running within 48 hours. The integration process is simple, and since insights are powered by AI, there's minimal setup required after connecting your data sources.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300" itemScope itemType="https://schema.org/Question">
              <div className="p-6 sm:p-8 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-opacity-80 transition-all duration-200 pr-4" style={{ color: '#022610' }} itemProp="name">
                    What integrations does RetainSure support?
                  </h3>
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0" style={{ color: '#039143' }} />
                </div>
                <div className="mt-4 sm:mt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden" itemScope itemType="https://schema.org/Answer">
                  <div className="border-t border-gray-100 pt-4 sm:pt-6">
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }} itemProp="text">
                      RetainSure currently integrates with HubSpot, Salesforce, Metabase, Amplitude, Mixpanel, Chargebee, and Stripe. We also build new integrations on request—typically within 7 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300" itemScope itemType="https://schema.org/Question">
              <div className="p-6 sm:p-8 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-opacity-80 transition-all duration-200 pr-4" style={{ color: '#022610' }} itemProp="name">
                    Is my customer data secure with RetainSure?
                  </h3>
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0" style={{ color: '#039143' }} />
                </div>
                <div className="mt-4 sm:mt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden" itemScope itemType="https://schema.org/Answer">
                  <div className="border-t border-gray-100 pt-4 sm:pt-6">
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }} itemProp="text">
                      Absolutely. RetainSure is SOC 2 Type 2 compliant and GDPR ready. We use enterprise-grade encryption, regular security audits, and follow industry best practices for data protection. Your data is processed securely with RetainSure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300" itemScope itemType="https://schema.org/Question">
              <div className="p-6 sm:p-8 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-opacity-80 transition-all duration-200 pr-4" style={{ color: '#022610' }} itemProp="name">
                    What kind of support do you provide?
                  </h3>
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0" style={{ color: '#039143' }} />
                </div>
                <div className="mt-4 sm:mt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden" itemScope itemType="https://schema.org/Answer">
                  <div className="border-t border-gray-100 pt-4 sm:pt-6">
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }} itemProp="text">
                      We provide comprehensive onboarding, dedicated customer success managers, 24/7 technical support, regular training sessions, and a dedicated Slack channel for swift communication. Our team is committed to ensuring you get maximum value from RetainSure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default HomePage;