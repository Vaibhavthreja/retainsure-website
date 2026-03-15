import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import ChatInterface from './components/ChatInterface';
import { Helmet } from 'react-helmet-async';
import './CopilotAgentDemo.css';

function CopilotAgentDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div id="copilot-demo-wrapper">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Copilot Agent Demo - RetainSure</title>
        <meta name="description" content="Interactive demo of RetainSure's Copilot Agent. Chat with your customer data using AI to get instant insights and recommendations." />
        <link rel="canonical" href="https://retainsure.com/interactive-demo/copilot-agent" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://retainsure.com/interactive-demo/copilot-agent" />
        <meta property="og:title" content="Copilot Agent Demo - RetainSure" />
        <meta property="og:description" content="Interactive demo of RetainSure's Copilot Agent. Chat with your customer data using AI to get instant insights and recommendations." />
        <meta property="og:image" content="https://retainsure.com/og-image.jpg" />
        <meta property="og:site_name" content="RetainSure" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://retainsure.com/interactive-demo/copilot-agent" />
        <meta property="twitter:title" content="Copilot Agent Demo - RetainSure" />
        <meta property="twitter:description" content="Interactive demo of RetainSure's Copilot Agent. Chat with your customer data using AI to get instant insights and recommendations." />
        <meta property="twitter:image" content="https://retainsure.com/og-image.jpg" />
      </Helmet>
      {isLoggedIn ? <ChatInterface /> : <LoginScreen onLogin={handleLogin} />}
    </div>
  );
}

export default CopilotAgentDemo;
