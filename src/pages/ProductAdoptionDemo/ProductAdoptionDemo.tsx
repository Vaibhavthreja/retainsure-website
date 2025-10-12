import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import JourneyDashboard from './components/JourneyDashboard';
import PrebuiltJourneys from './components/PrebuiltJourneys';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Help from './components/Help';
import AICsmWidget from './components/AICsmWidget';

function ProductAdoptionDemo() {
  const [activeSection, setActiveSection] = useState('home');
  const [journeyView, setJourneyView] = useState<'dashboard' | 'prebuilt'>('dashboard');
  const [isAIMinimized, setIsAIMinimized] = useState(false);
  const [isGuidedTourActive, setIsGuidedTourActive] = useState(false);

  useEffect(() => {
    if (activeSection === 'journey' && !isGuidedTourActive) {
      setJourneyView('dashboard');
      const timer = setTimeout(() => {
        setJourneyView('prebuilt');
      }, 1000); // 1-second delay
      return () => clearTimeout(timer);
    }
  }, [activeSection, isGuidedTourActive]);

  const renderContent = () => {
    if (activeSection === 'journey') {
      if (journeyView === 'dashboard') {
        return <JourneyDashboard setJourneyView={setJourneyView} />;
      } else {
        return <PrebuiltJourneys setJourneyView={setJourneyView} />;
      }
    }

    switch (activeSection) {
      case 'home':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      case 'help':
        return <Help />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`w-64 flex-shrink-0 ${isAIMinimized ? 'filter blur-sm' : ''}`}>
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      <main className={`flex-1 overflow-y-auto ${isAIMinimized ? 'filter blur-sm' : ''}`}>
        {renderContent()}
      </main>
      <AICsmWidget
        isMinimized={isAIMinimized}
        onMinimize={() => setIsAIMinimized(true)}
        onExpand={() => setIsAIMinimized(false)}
        setIsGuidedTourActive={setIsGuidedTourActive}
      />
    </div>
  );
}

export default ProductAdoptionDemo;