import React from 'react';
import { ArrowLeft, Search, Filter, ChevronDown } from 'lucide-react';

interface PrebuiltJourneysProps {
  setJourneyView: (view: 'dashboard' | 'prebuilt') => void;
}

const PrebuiltJourneys: React.FC<PrebuiltJourneysProps> = ({ setJourneyView }) => {
  const categories = ['All', 'Welcome', 'Onboarding', 'Engagement', 'Nurture', 'Re-engagement'];
  const journeys = [
    {
      category: 'Welcome',
      industry: 'SaaS',
      title: 'SaaS Welcome Series',
      description: 'A 5-email series to welcome new users and guide them to activation.',
      trigger: 'New user signup',
      emails: 5,
      duration: '7 days',
    },
    {
      category: 'Nurture',
      industry: 'SaaS',
      title: 'Webinar Nurture Sequence',
      description: 'Engage and remind webinar registrants to maximize attendance and post-event conversion.',
      trigger: 'User registers for webinar',
      emails: 3,
      duration: '7 days',
    },
    {
      category: 'Engagement',
      industry: 'Media',
      title: 'Weekly Newsletter Engagement',
      description: 'Keep your audience engaged with a curated weekly newsletter.',
      trigger: 'Subscribes to newsletter',
      emails: 1,
      duration: 'Weekly',
    },
    {
      category: 'Nurture',
      industry: 'B2B',
      title: 'Lead Nurturing Funnel',
      description: 'Nurture leads from awareness to consideration with targeted content.',
      trigger: 'Downloads lead magnet',
      emails: 6,
      duration: '14 days',
    },
    {
      category: 'Re-engagement',
      industry: 'SaaS',
      title: 'Inactive User Re-engagement',
      description: 'Win back users who have become inactive with a targeted email series.',
      trigger: 'User inactive for 30 days',
      emails: 3,
      duration: '5 days',
    },
    {
      category: 'Welcome',
      industry: 'E-commerce',
      title: 'Welcome Discount Series',
      description: 'Convert new subscribers into customers with a special welcome offer.',
      trigger: 'New subscription',
      emails: 3,
      duration: '3 days',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6">
        <button
          onClick={() => setJourneyView('dashboard')}
          className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Journeys
        </button>
        <h2 className="text-lg font-bold text-gray-900 mb-4">CATEGORIES</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <a
                href="#"
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  category === 'All'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">PRE-BUILT JOURNEYS</h1>
        <p className="text-gray-600 mb-8">Select a pre-built journey to get started quickly.</p>

        {/* Search and Filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search journeys..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex space-x-3">
            <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-50">
              <Filter size={16} />
              <span>Filter</span>
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-50">
              <span>Sort by: Popular</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Journeys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journeys.map((journey, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-semibold text-blue-600">{journey.category}</p>
                    <p className="text-xs text-gray-500">{journey.industry}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{journey.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{journey.description}</p>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-4">
                  <p><span className="font-semibold">Trigger:</span> {journey.trigger}</p>
                  <p><span className="font-semibold">Emails:</span> {journey.emails}</p>
                  <p><span className="font-semibold">Duration:</span> {journey.duration}</p>
                </div>
                <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Select Journey
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrebuiltJourneys;