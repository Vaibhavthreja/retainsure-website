import React from 'react';
import { Book, MessageCircle, Video, FileText, Search } from 'lucide-react';

const Help = () => {
  const helpCategories = [
    {
      title: 'Getting Started',
      description: 'Learn the basics and set up your account',
      icon: Book,
      articles: ['Account Setup', 'First Steps', 'Dashboard Overview'],
    },
    {
      title: 'Features & Tools',
      description: 'Explore all available features and tools',
      icon: FileText,
      articles: ['Analytics Guide', 'Integration Setup', 'Advanced Features'],
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides',
      icon: Video,
      articles: ['Platform Overview', 'Advanced Analytics', 'Team Management'],
    },
    {
      title: 'Support',
      description: 'Get help from our support team',
      icon: MessageCircle,
      articles: ['Contact Support', 'Report Issues', 'Feature Requests'],
    },
  ];

  const popularArticles = [
    'How to create your first project',
    'Understanding analytics metrics',
    'Setting up team permissions',
    'API integration guide',
    'Troubleshooting common issues',
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">HELP CENTER</h1>
      <p className="text-gray-600 mb-8">Find answers to your questions and get support.</p>

      {/* Search */}
      <div className="mb-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for articles, topics, or keywords..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Help Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {helpCategories.map((category) => (
          <div key={category.title} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <category.icon className="text-blue-600 mr-3" size={24} />
              <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>
            <p className="text-gray-500 mb-4">{category.description}</p>
            <ul className="space-y-2">
              {category.articles.map((article) => (
                <li key={article} className="text-blue-600 hover:underline cursor-pointer">
                  {article}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="space-y-4">
          {[
            'How do I reset my password?',
            'Can I upgrade my plan at any time?',
            'How do I invite team members?',
            'What payment methods do you accept?',
          ].map((question) => (
            <div key={question} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="font-medium">{question}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">POPULAR ARTICLES</h2>
        <ul className="space-y-3">
          {popularArticles.map((article) => (
            <li key={article} className="text-blue-600 hover:underline cursor-pointer">
              {article}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Support */}
      <div className="bg-blue-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">NEED MORE HELP?</h2>
        <p className="text-gray-700 mb-6">Can't find what you're looking for? Our support team is here to help.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Help;