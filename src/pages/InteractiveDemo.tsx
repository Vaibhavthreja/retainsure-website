import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Users, Bot } from 'lucide-react';
import { useDemoAccess } from '../contexts/DemoAccessContext';
import EmailGateModal from '../components/EmailGateModal';


function InteractiveDemo() {
  const { hasAccess, grantAccess } = useDemoAccess();
  const [showGate, setShowGate] = useState(true);

  useEffect(() => {
    if (hasAccess) {
      setShowGate(false);
    }
  }, [hasAccess]);

  const handleAccessGranted = () => {
    grantAccess();
    setShowGate(false);
  };
  const agents = [
    {
      title: 'Product Adoption Agent',
      description: 'Accelerate user onboarding and feature adoption with intelligent guidance',
      icon: Zap,
    },
    {
      title: 'Meeting Agent',
      description: 'Transform customer conversations into actionable insights automatically',
      icon: Users,
    },
    {
      title: 'Co-pilot Agent',
      description: 'Empower your team with AI-driven recommendations and workflows',
      icon: Bot,
      id: 'copilot'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    // Dummy function for Navigation, as this page is standalone.
  };

  return (
    <>
      <Helmet>
        <title>Interactive Demo - RetainSure</title>
        <meta name="description" content="Interactive demo of RetainSure's AI-powered customer success platform." />
        <link rel="canonical" href="https://www.retainsure.com/interactive-demo" />
      </Helmet>

      {showGate && <EmailGateModal onSuccess={handleAccessGranted} />}

      <main className="min-h-screen bg-gradient-to-br from-white to-green-50 flex flex-col items-center justify-center p-4 pt-12 pb-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#022610' }}>
              Welcome to the future of Customer Success
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {agents.map((agent) => {
              const Icon = agent.icon;
              const button = (
                <button 
                  className="mt-auto text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundColor: '#039143' }}
                >
                  Explore Agent
                </button>
              );

              return (
                <div
                  key={agent.id}
                  className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="p-4 rounded-full mb-6" style={{ backgroundColor: '#039143' }}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-3" style={{ color: '#022610' }}>{agent.title}</h2>
                  <p className="mb-6 flex-grow" style={{ color: '#022610', opacity: 0.8 }}>{agent.description}</p>
                  {agent.id === 'copilot' ? (
                    <Link to="/interactive-demo/copilot-agent">{button}</Link>
                  ) : agent.title === 'Product Adoption Agent' ? (
                    <Link to="/interactive-demo/product-adoption-agent">{button}</Link>
                  ) : agent.title === 'Meeting Agent' ? (
                    <Link to="/interactive-demo/meeting-agent">{button}</Link>
                  ) : (
                    button
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      
    </>
  );
}

export default InteractiveDemo;