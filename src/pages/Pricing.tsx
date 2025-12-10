import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageSquare, FileText, BarChart3, Layers, Zap, TrendingUp, Activity, Mail, Check, X, ArrowRight } from 'lucide-react';

interface Feature {
  name: string;
  icon: React.ReactNode;
  lowTouch: string | boolean;
  highTouch: string | boolean;
}

const features: Feature[] = [
  {
    name: 'CSM seats',
    icon: <Users className="w-5 h-5" />,
    lowTouch: '2 included seats',
    highTouch: 'Unlimited seats'
  },
  {
    name: 'RetainAI (Chat with Data)',
    icon: <MessageSquare className="w-5 h-5" />,
    lowTouch: false,
    highTouch: true
  },
  {
    name: 'Account Overviews',
    icon: <FileText className="w-5 h-5" />,
    lowTouch: false,
    highTouch: true
  },
  {
    name: 'Dashboarding',
    icon: <BarChart3 className="w-5 h-5" />,
    lowTouch: 'Default Dashboards',
    highTouch: 'Customizable'
  },
  {
    name: 'Account Segmentation',
    icon: <Layers className="w-5 h-5" />,
    lowTouch: false,
    highTouch: 'Unlimited Segments'
  },
  {
    name: 'AI automations builder',
    icon: <Zap className="w-5 h-5" />,
    lowTouch: true,
    highTouch: true
  },
  {
    name: 'AI Predictions for churn and upsell',
    icon: <TrendingUp className="w-5 h-5" />,
    lowTouch: true,
    highTouch: true
  },
  {
    name: 'Tracked Metrics',
    icon: <Activity className="w-5 h-5" />,
    lowTouch: 'Unlimited',
    highTouch: 'Unlimited'
  },
  {
    name: 'Hyper-personalised AI-generated email sending',
    icon: <Mail className="w-5 h-5" />,
    lowTouch: true,
    highTouch: true
  }
];

function Pricing() {
  const handleTalkToFounder = () => {
    window.location.href = '/book-a-demo';
  };

  const renderFeatureValue = (value: string | boolean, isHighTouch: boolean = false) => {
    if (typeof value === 'boolean') {
      if (value) {
        return (
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5" style={{ color: '#039143' }} />
            <span className="text-sm font-medium" style={{ color: '#039143' }}>Included</span>
          </div>
        );
      } else {
        return (
          <div className="flex items-center space-x-2">
            <X className="w-5 h-5 text-gray-300" />
            <span className="text-sm text-gray-400">Not included</span>
          </div>
        );
      }
    }
    return (
      <div className="flex items-center space-x-2">
        <Check className="w-5 h-5" style={{ color: '#039143' }} />
        <span className="text-sm font-medium" style={{ color: '#022610' }}>{value}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      <Helmet>
        <title>Pricing - RetainSure | Custom Plans for Every Team</title>
        <meta name="description" content="Flexible pricing plans designed for teams of all sizes. Choose between Low-Touch and High-Touch accounts with custom pricing tailored to your needs." />
        <meta name="keywords" content="customer success pricing, CS platform pricing, custom pricing, enterprise pricing, customer retention pricing" />
        <link rel="canonical" href="https://www.retainsure.com/pricing" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "RetainSure Pricing",
          "description": "Custom pricing plans for customer success teams",
          "url": "https://www.retainsure.com/pricing"
        })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#022610' }}>
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-600 leading-relaxed">
            Choose the plan that fits your team's needs. Custom pricing designed to scale with your business.
          </p>
          <button
            onClick={handleTalkToFounder}
            className="group inline-flex items-center space-x-2 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            style={{ backgroundColor: '#039143' }}
          >
            <span>Talk to Founder</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mb-16">

          {/* Low Touch Accounts */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
            <div className="p-8 sm:p-10">
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#022610' }}>
                  Low Touch Accounts
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Perfect for teams managing high-volume customer bases
                </p>
                <div className="mb-8">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#039143' }}>
                    Custom Pricing
                  </div>
                  <p className="text-gray-500">Tailored to your needs</p>
                </div>
                <button
                  onClick={handleTalkToFounder}
                  className="w-full text-white px-6 py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  style={{ backgroundColor: '#039143' }}
                >
                  Talk to Founder
                </button>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-xl font-semibold mb-6" style={{ color: '#022610' }}>
                  What's included:
                </h3>
                <div className="space-y-5">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-0.5" style={{ color: '#039143' }}>
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium mb-1 text-gray-800">{feature.name}</p>
                        {renderFeatureValue(feature.lowTouch)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* High Touch Accounts */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-2 relative" style={{ borderColor: '#039143' }}>
            <div className="absolute top-0 right-0 text-white px-6 py-2 rounded-bl-xl text-sm font-semibold" style={{ backgroundColor: '#039143' }}>
              MOST POPULAR
            </div>
            <div className="p-8 sm:p-10">
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#022610' }}>
                  High Touch Accounts
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Complete solution for strategic customer relationships
                </p>
                <div className="mb-8">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#039143' }}>
                    Custom Pricing
                  </div>
                  <p className="text-gray-500">Tailored to your needs</p>
                </div>
                <button
                  onClick={handleTalkToFounder}
                  className="w-full text-white px-6 py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  style={{ backgroundColor: '#039143' }}
                >
                  Talk to Founder
                </button>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-xl font-semibold mb-6" style={{ color: '#022610' }}>
                  What's included:
                </h3>
                <div className="space-y-5">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-0.5" style={{ color: '#039143' }}>
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium mb-1 text-gray-800">{feature.name}</p>
                        {renderFeatureValue(feature.highTouch, true)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#022610' }}>
            Not sure which plan is right for you?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a call with our founder to discuss your specific needs and get a custom quote.
          </p>
          <button
            onClick={handleTalkToFounder}
            className="group inline-flex items-center space-x-2 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            style={{ backgroundColor: '#039143' }}
          >
            <span>Talk to Founder</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
