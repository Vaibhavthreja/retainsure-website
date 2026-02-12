import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import FinalCta from './components/FinalCta';
import { useScrollReveal } from './useScrollReveal';

function FreeAiTools() {
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Free AI Customer Success Tools | RetainSure</title>
        <meta
          name="description"
          content="Free AI-powered micro tools for Customer Success teams. Generate QBR decks, identify churn risks, and uncover upsell opportunities in minutes."
        />
      </Helmet>
      <div className="min-h-screen bg-white" style={{ scrollBehavior: 'smooth' }}>
        <Hero />
        <StatsBar />
        <Features />
        <HowItWorks />
        <WhoItsFor />
        <FinalCta />
      </div>
    </>
  );
}

export default FreeAiTools;
