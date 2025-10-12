import React from 'react';
import { TrendingUp, Eye, Clock, Target, Mail, Users, MousePointer } from 'lucide-react';

const Analytics = () => {
  const metrics = [
    { name: 'Total Emails Sent', value: '125.4K', growth: '+18%', icon: Mail },
    { name: 'Unique Opens', value: '31.2K', growth: '+12%', icon: Eye },
    { name: 'Click-through Rate', value: '4.8%', growth: '+5%', icon: MousePointer },
    { name: 'Conversion Rate', value: '2.1%', growth: '+24%', icon: Target },
    { name: 'Subscribers', value: '8,247', growth: '+8%', icon: Users },
    { name: 'Avg. Engagement', value: '6m 42s', growth: '+15%', icon: Clock },
  ];

  const campaignPerformance = [
    { name: 'Welcome Series', sent: 2847, opens: 1423, clicks: 284, conversions: 89 },
    { name: 'Product Launch', sent: 5621, opens: 2248, clicks: 449, conversions: 134 },
    { name: 'Newsletter', sent: 8247, opens: 2474, clicks: 371, conversions: 67 },
    { name: 'Abandoned Cart', sent: 1892, opens: 946, clicks: 189, conversions: 78 },
  ];

  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">EMAIL ANALYTICS</h1>
        <p className="text-gray-600 mb-10">Track your email marketing performance and optimize your campaigns.</p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric) => (
            <div key={metric.name} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
              <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                <metric.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{metric.name}</p>
                <div className="flex items-baseline space-x-2">
                  <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                  <p className="text-sm font-medium text-green-600">{metric.growth} vs last month</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Campaign Performance */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">CAMPAIGN PERFORMANCE</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CAMPAIGN.NAME</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sent</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opens</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {campaignPerformance.map((campaign) => (
                  <tr key={campaign.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{campaign.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.sent.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.opens.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.clicks.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.conversions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Email Performance Trends */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">PERFORMANCE TRENDS</h2>
          <div className="flex items-end h-48 space-x-2">
            {[65, 45, 78, 52, 89, 67, 43, 76, 91, 58, 84, 72].map((height, index) => (
              <div key={index} className="flex flex-col items-center flex-grow">
                <div
                  className="bg-indigo-500 w-4 rounded-t-sm"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">TOP PERFORMING SUBJECT LINES</h2>
          <div className="space-y-4">
            {[
              { subject: "🎉 Your exclusive 30% discount is here!", rate: "45.2%" },
              { subject: "Last chance: Sale ends tonight", rate: "38.7%" },
              { subject: "New features you'll love", rate: "34.1%" },
              { subject: "Your weekly digest is ready", rate: "29.8%" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
                <div>
                  <p className="text-base font-medium text-gray-900">{item.subject}</p>
                  <p className="text-sm text-gray-500">Open Rate</p>
                </div>
                <p className="text-lg font-semibold text-indigo-600">{item.rate}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscriber Growth */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">SUBSCRIBER GROWTH</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700">New Subscribers</p>
              <p className="text-2xl font-bold text-green-900">+247 this month</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-red-700">Unsubscribes</p>
              <p className="text-2xl font-bold text-red-900">-23 this month</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">Net Growth</p>
              <p className="text-2xl font-bold text-blue-900">+224 this month</p>
            </div>
          </div>
          <div className="flex items-end h-48 space-x-2">
            {[20, 35, 45, 32, 55, 48, 65, 58, 70, 62, 78, 85].map((height, index) => (
              <div
                key={index}
                className="bg-blue-400 w-4 rounded-t-sm flex-grow"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;