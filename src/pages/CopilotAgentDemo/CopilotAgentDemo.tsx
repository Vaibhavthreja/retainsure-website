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
        <title>Copilot Agent Demo - RetainSure</title>
        <meta name="description" content="Interactive demo of RetainSure's Copilot Agent." />
        <link rel="canonical" href="https://www.retainsure.com/interactive-demo/copilot-agent" />
      </Helmet>
      {isLoggedIn ? <ChatInterface /> : <LoginScreen onLogin={handleLogin} />}
    </div>
  );
}

export default CopilotAgentDemo;
