import { Users, Briefcase, Crown } from 'lucide-react';

const personas = [
  { icon: Users, label: 'Customer Success Managers' },
  { icon: Briefcase, label: 'Account Executives' },
  { icon: Crown, label: 'CS Leaders' },
];

function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-reveal bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6"
            style={{ color: '#022610' }}
          >
            Built for{' '}
            <span style={{ color: '#039143' }}>Customer Success Teams</span>
          </h2>

          <p className="text-lg leading-relaxed mb-10" style={{ color: '#3d5a47' }}>
            Whether you manage 10 accounts or 100, these tools eliminate the repetitive work
            so you can spend time where it matters -- building relationships, driving adoption,
            and growing revenue.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {personas.map((persona) => (
              <div
                key={persona.label}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-md hover:border-gray-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#edfcf2' }}
                >
                  <persona.icon className="w-5 h-5" style={{ color: '#039143' }} />
                </div>
                <span className="font-semibold text-sm" style={{ color: '#022610' }}>
                  {persona.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoItsFor;
