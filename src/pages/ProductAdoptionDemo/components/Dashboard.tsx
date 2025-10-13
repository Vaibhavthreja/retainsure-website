import React from 'react';
import { TrendingUp, Users, Mail, MousePointer, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      name: 'Total Campaigns',
      value: '24',
      change: '+12.5%',
      icon: Mail,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Active Subscribers',
      value: '8,247',
      change: '+8.3%',
      icon: Users,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      name: 'Open Rate',
      value: '24.8%',
      change: '+2.1%',
      icon: MousePointer,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Click Rate',
      value: '4.2%',
      change: '+1.7%',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hey John, welcome to Tech Corp 🎉</h1>
        <p className="text-gray-600">You're really close to growing your conversion rates. Let's keep moving!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`${stat.color} h-6 w-6`} />
              </div>
              <span className="text-sm font-medium text-gray-500">{stat.name}</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">
              <span className="font-medium text-green-600">{stat.change}</span> vs last month
            </div>
          </div>
        ))}
      </div>

      {/* Upgrade Card */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white mb-8 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <span className="bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">Premium</span>
            <h2 className="text-2xl font-bold mb-2">Upgrade to scale your growth</h2>
            <p className="text-blue-100 mb-4">Upgrade your plan to experience a 3x conversion growth across your lists.</p>
            <button className="bg-white text-blue-700 font-semibold py-2 px-5 rounded-full shadow-md hover:bg-blue-50 transition duration-300">
              Upgrade now
            </button>
          </div>
          {/* Decorative Elements */}
          <div className="hidden md:block">
            {/* 3D Box Illustration */}
            <div className="relative w-32 h-32">
              <div className="absolute w-24 h-24 bg-blue-500 transform rotate-45 top-4 left-4 rounded-lg"></div>
              <div className="absolute w-24 h-24 bg-purple-500 transform rotate-45 -top-4 -right-4 rounded-lg"></div>
              <div className="absolute w-24 h-24 bg-pink-500 transform rotate-45 bottom-0 left-0 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Campaigns */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent campaigns</h2>
          <div className="space-y-4">
            {[
              { name: 'Welcome Series - New Users', status: 'Active', opens: '1,247', clicks: '89' },
              { name: 'Product Launch Announcement', status: 'Sent', opens: '2,156', clicks: '234' },
              { name: 'Weekly Newsletter #42', status: 'Draft', opens: '-', clicks: '-' },
              { name: 'Abandoned Cart Recovery', status: 'Active', opens: '892', clicks: '67' },
            ].map((campaign, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <div>
                  <p className="font-medium text-gray-800">{campaign.name}</p>
                  <p className="text-sm text-gray-500">
                    <span className={`font-semibold ${campaign.status === 'Active' ? 'text-green-600' : campaign.status === 'Sent' ? 'text-blue-600' : 'text-gray-500'}`}>
                      {campaign.status}
                    </span>{' '}
                    Opens: {campaign.opens} Clicks: {campaign.clicks}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Ask Mailmodo AI Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
          <div className="bg-purple-100 p-3 rounded-full mb-4">
            <span className="text-purple-600 text-2xl">✨</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Ask Tech Corp AI</h2>
          <p className="text-gray-600 mb-4">Get instant help with your email marketing questions</p>
          <button className="bg-purple-600 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:bg-purple-700 transition duration-300">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;