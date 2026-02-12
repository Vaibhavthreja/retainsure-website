import { Clock, TrendingUp, Target } from 'lucide-react';

const stats = [
  { icon: Clock, label: 'Save 4+ Hours Per QBR', highlight: '4+ Hours' },
  { icon: TrendingUp, label: '23% Higher Customer Retention', highlight: '23%' },
  { icon: Target, label: '35% More Upsell Opportunities', highlight: '35%' },
];

function StatsBar() {
  return (
    <section className="scroll-reveal" style={{ backgroundColor: '#f0faf4' }}>
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 justify-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#ddf5e6' }}
              >
                <stat.icon className="w-6 h-6" style={{ color: '#039143' }} />
              </div>
              <p className="text-base font-semibold" style={{ color: '#022610' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
