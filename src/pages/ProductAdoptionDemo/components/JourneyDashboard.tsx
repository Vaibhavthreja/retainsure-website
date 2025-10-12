import React from 'react';
import { Plus, Filter, ChevronDown, Search, ArrowRight } from 'lucide-react';

interface JourneyDashboardProps {
  setJourneyView: (view: 'dashboard' | 'prebuilt') => void;
}

const JourneyDashboard: React.FC<JourneyDashboardProps> = ({ setJourneyView }) => {
  const journeys = [
    {
      name: 'Welcome Series - New Signups',
      status: 'Active',
      contacts: 1247,
      openRate: '45.2%',
      clickRate: '8.9%',
      conversions: 89,
    },
    {
      name: 'Abandoned Cart Recovery',
      status: 'Active',
      contacts: 892,
      openRate: '38.7%',
      clickRate: '12.1%',
      conversions: 67,
    },
    {
      name: 'Product Launch Announcement',
      status: 'Paused',
      contacts: 2156,
      openRate: '28.1%',
      clickRate: '4.5%',
      conversions: 112,
    },
    {
      name: 'Weekly Newsletter',
      status: 'Draft',
      contacts: 0,
      openRate: '-',
      clickRate: '-',
      conversions: 0,
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">JOURNEYS</h1>
          <p className="text-gray-600">Automate your customer engagement with powerful journeys.</p>
        </div>
        <div className="flex space-x-3">
          <button
            id="create-journey-btn"
            onClick={() => setJourneyView('prebuilt')}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            <span>Create journey</span>
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-3">
          <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-50">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-50">
            <span>All Journeys</span>
            <ChevronDown size={16} />
          </button>
        </div>
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search journeys..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Journeys Table */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Journey Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Contacts</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Open Rate</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click Rate</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversions</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">View</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {journeys.map((journey) => (
                <tr key={journey.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{journey.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        journey.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : journey.status === 'Paused'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {journey.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{journey.contacts.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{journey.openRate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{journey.clickRate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{journey.conversions}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900 flex items-center">
                      View <ArrowRight size={16} className="ml-1" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JourneyDashboard;