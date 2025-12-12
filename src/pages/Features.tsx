import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      <Helmet>
        <title>Features - AI-Powered Customer Success Tools | RetainSure</title>
        <meta name="description" content="Discover RetainSure's powerful AI features: churn predictions, RetainAI copilot, account overviews, automation builder, dashboards, and segmentation tools to transform your customer success strategy." />
        <meta name="keywords" content="AI predictions, churn prediction, upsell opportunities, RetainAI, account management, automation builder, customer success dashboards, account segmentation" />
        <link rel="canonical" href="https://www.retainsure.com/features" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "RetainSure Features",
          "description": "Comprehensive AI-powered customer success features including churn predictions, automation, and intelligent insights.",
          "url": "https://www.retainsure.com/features"
        })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#022610' }}>
              Powerful Features Built for Modern Customer Success
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed" style={{ color: '#022610', opacity: 0.75 }}>
              Everything you need to predict, prevent, and prosper. Our AI-driven platform gives you the tools to transform customer success from reactive to proactive.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-16 sm:space-y-24">

            {/* Feature 1: AI Predictions - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8 order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#022610' }}>
                  AI Predictions for Churn and Upsell
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Get accurate, AI-driven predictions that identify at-risk customers before they churn, giving you time to take proactive action
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Discover hidden upsell and expansion opportunities with intelligent analysis of customer behavior, usage patterns, and engagement signals
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Move beyond traditional health scores to predictive insights that actually reflect customer reality, eliminating watermelon accounts
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative order-2">
                <img
                  src="/prediction.jpeg"
                  alt="AI Predictions for Churn and Upsell - Dashboard showing churn risk and expansion opportunities"
                  className="w-full aspect-[1650/1170] object-cover rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
            </div>

            {/* Feature 2: RetainAI - Content Right, Image Left */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src="/retainaichat.jpeg"
                  alt="RetainAI - AI-powered copilot for customer success automation and intelligent recommendations"
                  className="w-full aspect-[1650/1170] object-cover rounded-2xl shadow-lg border border-gray-200"
                />
              </div>

              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#022610' }}>
                  RetainAI
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Your AI copilot that provides intelligent daily planning, prioritizing the accounts and actions that matter most for your success metrics
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Receive proactive recommendations based on real-time customer data, helping you stay ahead of issues and spot opportunities instantly
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Automate routine tasks while maintaining the personal touch your customers expect, freeing your team to focus on high-impact relationships
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Account Overviews - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8 order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#022610' }}>
                  Account Overviews
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Get a complete 360-degree view of every customer account with all critical data, interactions, and insights in one centralized location
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Access comprehensive customer history, engagement timelines, and product usage analytics to make informed decisions quickly
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Understand customer sentiment, health trends, and key milestones at a glance with intuitive visualizations and smart summaries
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative order-2">
                <img
                  src="/accountoverview.jpeg"
                  alt="Account Overviews - 360-degree view of customer accounts with comprehensive insights"
                  className="w-full aspect-[1650/1170] object-cover rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
            </div>

            {/* Feature 4: AI Automation Builder - Content Right, Image Left */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src="/aiworkflowbuilder.jpeg"
                  alt="AI Automation Builder - Build intelligent workflows without coding"
                  className="w-full aspect-[1650/1170] object-cover rounded-2xl shadow-lg border border-gray-200"
                />
              </div>

              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#022610' }}>
                  AI Automation Builder
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Build intelligent automation workflows without coding, using natural language to create sophisticated customer success playbooks
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Scale personalized outreach with AI-powered templates that adapt to each customer's context, never sending generic messages
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Trigger smart actions based on customer behavior, product usage, or business events to respond at exactly the right moment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5: Dashboarding - Content Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8 order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#022610' }}>
                  Dashboarding
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Replace dozens of scattered dashboards with one unified view that surfaces the metrics and insights that truly matter for your CS goals
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Track portfolio health, renewal forecasts, expansion pipeline, and team performance with customizable, real-time visualizations
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Get executive-ready reports and insights automatically generated, making it easy to communicate value and impact to leadership
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative order-2">
                <img
                  src="/dashboarding.jpeg"
                  alt="Dashboarding - Unified view of customer success metrics and insights"
                  className="w-full aspect-[1650/1170] object-cover rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
            </div>

            {/* Feature 6: Account Segmentation - Content Right, Image Left */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="w-full aspect-[1650/1170] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center">
                  <p className="text-gray-400 text-sm sm:text-base">Account Segmentation Feature Image</p>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#022610' }}>
                  Account Segmentation
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Create dynamic customer segments using AI-powered clustering that identifies meaningful patterns in your customer base automatically
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Target specific customer groups with tailored strategies based on industry, size, usage patterns, lifecycle stage, or custom criteria
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" style={{ color: '#039143' }} />
                    <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      Optimize resource allocation by understanding which customer segments drive the most value and where to invest your team's time
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#022610' }}>
              Ready to Transform Your Customer Success?
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 leading-relaxed" style={{ color: '#022610', opacity: 0.75 }}>
              See how RetainSure's AI-powered features can help you predict churn, unlock growth, and scale your customer success operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/book-a-demo'}
                className="group text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 hover:opacity-90"
                style={{ backgroundColor: '#039143' }}
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <Link
                to="/interactive-demo"
                className="group border-2 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 hover:bg-gray-50"
                style={{ borderColor: '#039143', color: '#039143' }}
              >
                <span>Try Interactive Demo</span>
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
