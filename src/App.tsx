import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Play, CheckCircle, ArrowRight, Shield, ChevronDown } from 'lucide-react';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import BookDemo from './pages/BookDemo';
import Features from './pages/Features';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Pricing from './pages/Pricing';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataProcessingAgreement from './pages/DataProcessingAgreement';
import InteractiveDemo from './pages/InteractiveDemo';
import CookieBanner from './components/CookieBanner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProtectedDemoRoute from './components/ProtectedDemoRoute';

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
import FreeAiTools from './pages/FreeAiTools/FreeAiTools';

function App() {
  const location = useLocation();
  const isDemoPage = location.pathname.startsWith('/interactive-demo/');
  const hideChrome = isDemoPage;

  return (
    <>
      {!hideChrome && <ScrollToTop />}
      {!hideChrome && <Navigation />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-a-demo" element={<BookDemo />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/data-processing-agreement" element={<DataProcessingAgreement />} />
        <Route path="/interactive-demo" element={<InteractiveDemo />} />
        <Route path="/interactive-demo/copilot-agent" element={<ProtectedDemoRoute><CopilotAgentDemo /></ProtectedDemoRoute>} />
        <Route path="/interactive-demo/product-adoption-agent" element={<ProtectedDemoRoute><ProductAdoptionDemo /></ProtectedDemoRoute>} />
        <Route path="/interactive-demo/meeting-agent" element={<ProtectedDemoRoute><MeetingAgent /></ProtectedDemoRoute>} />
        <Route path="/free-ai-tools" element={<FreeAiTools />} />
      </Routes>
      {!hideChrome && <Footer />}
      <CookieBanner />
    </>
  );
}

export default App;