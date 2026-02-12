import { BarChart3, TrendingUp, Zap } from 'lucide-react';

const tools = [
  {
    icon: BarChart3,
    title: 'QBR Deck Generator',
    description:
      'Input your customer data and get a polished, executive-ready QBR presentation in minutes. Includes usage trends, health scores, and strategic recommendations.',
    badge: 'Available Now',
    available: true,
  },
  {
    icon: TrendingUp,
    title: 'Upsell Analyzer',
    description:
      'AI scans customer usage patterns, contract data, and engagement signals to surface high-confidence upsell and cross-sell opportunities.',
    badge: 'Coming Soon',
    available: false,
  },
  {
    icon: Zap,
    title: 'Churn Analyzer',
    description:
      'Predict at-risk accounts before they churn. Get actionable retention plays based on behavioral signals, support trends, and engagement drops.',
    badge: 'Coming Soon',
    available: false,
  },
];

function Features() {
  return (
    <section id="features" className="scroll-reveal bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: '#022610' }}
          >
            Three AI Tools.{' '}
            <span style={{ color: '#039143' }}>Zero Complexity.</span>
          </h2>
          <p className="text-lg" style={{ color: '#3d5a47' }}>
            Each tool does one thing exceptionally well -- so you can focus on your customers, not your software.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#edfcf2' }}
                >
                  <tool.icon className="w-7 h-7" style={{ color: '#039143' }} />
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={
                    tool.available
                      ? { backgroundColor: '#edfcf2', color: '#039143' }
                      : { backgroundColor: '#f3f4f6', color: '#6b7280' }
                  }
                >
                  {tool.badge}
                </span>
              </div>

              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#022610' }}
              >
                {tool.title}
              </h3>

              <p className="text-base leading-relaxed" style={{ color: '#3d5a47' }}>
                {tool.description}
              </p>

              {tool.available && (
                <a
                  href="https://tools.retainsure.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: '#039143' }}
                >
                  Try it now
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
