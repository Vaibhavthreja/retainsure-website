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
    name: 'AI Predictions for churn and upsell',
    icon: <TrendingUp className="w-5 h-5" />,
    lowTouch: true,
    highTouch: true
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
    name: 'AI automations builder',
    icon: <Zap className="w-5 h-5" />,
    lowTouch: true,
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
  },
  {
    name: 'CSM seats',
    icon: <Users className="w-5 h-5" />,
    lowTouch: 'Unlimited seats',
    highTouch: 'Unlimited seats'
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

        {/* Pricing Comparison Table */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            {/* Plan Headers */}
            <div className="grid grid-cols-3 gap-4">
              {/* Empty cell for feature column */}
              <div className="p-6 bg-gradient-to-br from-white to-gray-50 border-b border-r border-gray-200"></div>

              {/* Low Touch Header */}
              <div className="p-6 bg-gradient-to-br from-white to-gray-50 border-b border-r border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#022610' }}>
                  Low Touch Accounts
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  Perfect for teams managing high-volume customer bases
                </p>
                <div className="mb-4">
                  <div className="text-2xl font-bold mb-1" style={{ color: '#039143' }}>
                    Custom Pricing
                  </div>
                  <p className="text-xs text-gray-500">Tailored to your needs</p>
                </div>
                <button
                  onClick={handleTalkToFounder}
                  className="w-full text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  style={{ backgroundColor: '#039143' }}
                >
                  Talk to Founder
                </button>
              </div>

              {/* High Touch Header */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-white border-b border-gray-200 relative">
                <div className="absolute top-0 right-0 text-white px-3 py-1 rounded-bl-lg text-xs font-semibold" style={{ backgroundColor: '#039143' }}>
                  MOST POPULAR
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#022610' }}>
                  High Touch Accounts
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  Complete solution for strategic customer relationships
                </p>
                <div className="mb-4">
                  <div className="text-2xl font-bold mb-1" style={{ color: '#039143' }}>
                    Custom Pricing
                  </div>
                  <p className="text-xs text-gray-500">Tailored to your needs</p>
                </div>
                <button
                  onClick={handleTalkToFounder}
                  className="w-full text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  style={{ backgroundColor: '#039143' }}
                >
                  Talk to Founder
                </button>
              </div>
            </div>

            {/* Features Comparison Rows */}
            <div className="divide-y divide-gray-200">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 gap-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-green-50/30 transition-colors duration-150`}
                >
                  {/* Feature Name Column */}
                  <div className="p-6 border-r border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0" style={{ color: '#039143' }}>
                        {feature.icon}
                      </div>
                      <span className="font-medium text-gray-800">{feature.name}</span>
                    </div>
                  </div>

                  {/* Low Touch Value Column */}
                  <div className="p-6 border-r border-gray-200 flex items-center">
                    {renderFeatureValue(feature.lowTouch)}
                  </div>

                  {/* High Touch Value Column */}
                  <div className="p-6 flex items-center">
                    {renderFeatureValue(feature.highTouch, true)}
                  </div>
                </div>
              ))}
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
