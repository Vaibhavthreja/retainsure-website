import { ArrowRight, ChevronDown } from 'lucide-react';

function Hero() {
  const scrollToFeatures = () => {
    const el = document.getElementById('features');
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
                onClick={scrollToFeatures}
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
            <div className="relative w-full max-w-lg">
              <div
                className="absolute inset-0 rounded-2xl opacity-20 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #039143 0%, #027a38 100%)' }}
              />
              <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
                <img
                  src="/hero-tools.png"
                  alt="RetainSure micro CS tools dashboard"
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div
                  className="hidden items-center justify-center py-32 px-8 text-center"
                  style={{ color: '#6b8575' }}
                >
                  <div>
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: '#edfcf2' }}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#039143" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Hero image coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
