import React from 'react';
import { Home, FileText, Send, Route, FileImage, Users, BarChart3, Zap, Settings, Bell, Layers } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const navigation = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'templates', name: 'Templates', icon: FileText },
    { id: 'campaigns', name: 'Campaigns', icon: Send, hasSubmenu: true },
    { id: 'journey', name: 'Journey', icon: Route },
    { id: 'pages', name: 'Pages & Forms', icon: FileImage, hasSubmenu: true },
    { id: 'contacts', name: 'Contacts', icon: Users },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'events', name: 'Custom Events', icon: Zap },
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'integrations', name: 'Integrations', icon: Layers },
    { id: 'notifications', name: 'Notifications', icon: Bell, badge: true },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-800 text-white p-4">
      {/* Logo */}
      <div className="flex items-center mb-8">
        <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-3">
          M
        </div>
        <span className="text-xl font-semibold">TECH CORP</span>
      </div>

      {/* Navigation */}
      <nav className="flex-grow">
        <ul>
          {navigation.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="mb-2">
                <button
                  onClick={() => setActiveSection(item.id)}
                  data-section={item.id}
                  id={item.id === 'journey' ? 'journey-nav' : undefined}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-left rounded-lg transition-colors group ${
                    isActive ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      New
                    </span>
                  )}
                  {item.hasSubmenu && (
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform ${isActive ? 'rotate-90' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-4 border-t border-slate-700">
        {/* Free Plan */}
        <div className="bg-slate-700 p-4 rounded-lg text-center">
          <p className="text-sm font-medium mb-2">Free Plan</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;