import { ArrowRight } from 'lucide-react';

function FinalCta() {
  return (
    <section className="scroll-reveal relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #039143 0%, #027a38 50%, #01612b 100%)' }}
      />

      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Stop Spending Hours on QBRs.
          <br className="hidden sm:block" />
          <span className="opacity-90"> Start in Minutes.</span>
        </h2>

        <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
          Join CS teams already saving hours every week with AI-powered micro tools.
        </p>

        <a
          href="https://tools.retainsure.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-base"
          style={{ backgroundColor: 'white', color: '#039143' }}
        >
          Generate QBR Deck for free - always
          <ArrowRight className="w-5 h-5" />
        </a>

        <p className="mt-5 text-sm text-white/60">
          No credit card required. Work email only.
        </p>
      </div>
    </section>
  );
}

export default FinalCta;
