import { FileText, Sparkles, Download } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Enter Your Customer Context',
    description:
      'Paste key account details -- ARR, product usage, support history, renewal date. The more context, the sharper the output.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI Generates Your Deck',
    description:
      'Our AI analyzes your data and produces a structured, executive-ready QBR deck with insights, trends, and recommendations.',
  },
  {
    number: '03',
    icon: Download,
    title: 'Download and Present',
    description:
      'Export your polished deck and walk into your next QBR fully prepared. Customize further or present as-is.',
  },
];

function HowItWorks() {
  return (
    <section className="scroll-reveal py-20 sm:py-28" style={{ backgroundColor: '#fafbfc' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: '#022610' }}
          >
            How It Works
          </h2>
          <p className="text-lg" style={{ color: '#3d5a47' }}>
            From raw customer data to a polished QBR deck in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          <div
            className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to right, #039143 0, #039143 8px, transparent 8px, transparent 16px)',
              opacity: 0.3,
            }}
          />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: '#edfcf2' }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: '#039143' }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: '#039143' }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#022610' }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-base leading-relaxed max-w-xs mx-auto"
                  style={{ color: '#3d5a47' }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
