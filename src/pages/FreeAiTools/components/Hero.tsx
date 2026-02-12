import { ArrowRight, ChevronDown } from 'lucide-react';
import QbrIllustration from './QbrIllustration';

function Hero() {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #039143 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #039143 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: '#edfcf2', color: '#039143' }}
            >
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              Free AI-Powered Tools
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight mb-6"
              style={{ color: '#022610' }}
            >
              Micro Customer Success Tools{' '}
              <span style={{ color: '#039143' }}>That Deliver</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed mb-8" style={{ color: '#3d5a47' }}>
              Generate QBR decks, identify churn risks, and uncover upsell opportunities --
              all powered by AI. Built for CS teams that need results, not complexity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://tools.retainsure.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-all duration-200 hover:shadow-lg text-base"
                style={{ backgroundColor: '#039143' }}
              >
                Get Started - Free Always
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-xl border-2 transition-all duration-200 hover:bg-gray-50 text-base"
                style={{ color: '#022610', borderColor: '#d1d5db' }}
              >
                See How It Works
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-5 text-sm" style={{ color: '#6b8575' }}>
              No credit card required. Work email only.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <QbrIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
