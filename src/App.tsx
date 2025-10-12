import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Play, CheckCircle, ArrowRight, Shield, ChevronDown } from 'lucide-react';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import BookDemo from './pages/BookDemo';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataProcessingAgreement from './pages/DataProcessingAgreement';
import InteractiveDemo from './pages/InteractiveDemo';
import CookieBanner from './components/CookieBanner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

import CopilotAgentDemo from './pages/CopilotAgentDemo/CopilotAgentDemo';

import ProductAdoptionDemo from './pages/ProductAdoptionDemo/ProductAdoptionDemo';
import MeetingAgent from './pages/MeetingAgent/MeetingAgent';

function App() {
  const location = useLocation();
  const isDemoPage = location.pathname.startsWith('/interactive-demo/');

  return (
    <>
      {!isDemoPage && <ScrollToTop />}
      {!isDemoPage && <Navigation />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-a-demo" element={<BookDemo />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/data-processing-agreement" element={<DataProcessingAgreement />} />
        <Route path="/interactive-demo" element={<InteractiveDemo />} />
        <Route path="/interactive-demo/copilot-agent" element={<CopilotAgentDemo />} />
        <Route path="/interactive-demo/product-adoption-agent" element={<ProductAdoptionDemo />} />
        <Route path="/interactive-demo/meeting-agent" element={<MeetingAgent />} />
      </Routes>
      {!isDemoPage && <Footer />}
      <CookieBanner />
    </>
  );
}

export default App;