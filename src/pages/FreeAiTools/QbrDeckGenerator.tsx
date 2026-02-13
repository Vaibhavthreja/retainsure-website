import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  ChevronDown,
  Clock,
  TrendingUp,
  Target,
  BarChart3,
  FileText,
  Sparkles,
  Download,
  Users,
  Briefcase,
  Crown,
  Shield,
  Layers,
  PieChart,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  Palette,
  FileDown,
} from 'lucide-react';
import FreeToolsNav from './components/FreeToolsNav';

const stats = [
  { icon: Clock, label: 'Save 4+ Hours Per QBR', highlight: '4+' },
  { icon: Target, label: '95% Insight Accuracy', highlight: '95%' },
  { icon: TrendingUp, label: '1,000+ Decks Generated', highlight: '1,000+' },
];

const features = [
  {
    icon: TrendingUp,
    title: 'Usage Trend Analysis',
    description: 'AI identifies patterns in product adoption, feature usage, and engagement over time to surface meaningful trends.',
  },
  {
    icon: PieChart,
    title: 'Health Score Calculation',
    description: 'Automatically compute account health based on usage data, support interactions, and engagement signals.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Identification',
    description: 'Flag potential churn risks with specific evidence and recommended actions to proactively address issues.',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Recommendations',
    description: 'Get AI-generated action items and next steps tailored to each account\'s unique situation and goals.',
  },
  {
    icon: BarChart3,
    title: 'Upsell Opportunity Spotting',
    description: 'Surface expansion opportunities based on usage patterns, underutilized features, and growth indicators.',
  },
  {
    icon: Palette,
    title: 'Executive-Ready Formatting',
    description: 'Output is structured and formatted for C-suite consumption -- clear, concise, and visually organized.',
  },
  {
    icon: Layers,
    title: 'Customizable Sections',
    description: 'Choose which sections to include, adjust depth of analysis, and tailor the narrative to your audience.',
  },
  {
    icon: FileDown,
    title: 'Instant Export',
    description: 'Download your completed QBR deck immediately. Ready to present or further customize in your favorite tool.',
  },
];

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Input Customer Data',
    description: 'Paste your account details -- ARR, product usage metrics, support ticket history, renewal dates, customer goals, and any relevant notes.',
    details: ['CRM data & account info', 'Usage metrics & adoption data', 'Support tickets & NPS scores', 'Customer goals & objectives'],
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI Analyzes & Generates',
    description: 'Our AI processes your data, identifies trends, calculates health scores, spots risks and opportunities, and structures everything into a coherent narrative.',
    details: ['Pattern recognition', 'Health score computation', 'Risk & opportunity analysis', 'Narrative generation'],
  },
  {
    number: '03',
    icon: Download,
    title: 'Review & Download',
    description: 'Get your polished, executive-ready QBR deck. Review the output, make any adjustments, and download it for your next meeting.',
    details: ['Instant preview', 'Section-by-section editing', 'One-click download', 'Ready to present'],
  },
];

const sampleSections = [
  {
    title: 'Executive Summary',
    color: '#039143',
    lines: [
      'Account overview & relationship timeline',
      'Key metrics at a glance',
      'Period-over-period performance',
      'Top achievements & milestones',
    ],
  },
  {
    title: 'Usage & Adoption Trends',
    color: '#0369a1',
    lines: [
      'Feature adoption breakdown',
      'Active users trend analysis',
      'Engagement depth scoring',
      'Comparison to similar accounts',
    ],
  },
  {
    title: 'Health & Risk Assessment',
    color: '#dc2626',
    lines: [
      'Composite health score',
      'Risk factors identified',
      'Support sentiment analysis',
      'Engagement drop indicators',
    ],
  },
  {
    title: 'Strategic Recommendations',
    color: '#d97706',
    lines: [
      'Actionable next steps',
      'Expansion opportunities',
      'Success plan alignment',
      'Renewal readiness assessment',
    ],
  },
];

const useCases = [
  'Quarterly Business Reviews',
  'Annual Account Reviews',
  'Mid-Cycle Check-ins',
  'Renewal Discussions',
  'Executive Sponsor Meetings',
  'Portfolio Reviews',
];

const faqs = [
  {
    q: 'What data do I need to provide?',
    a: 'At minimum, basic account info like ARR, product usage metrics, and renewal date. For richer output, include support ticket history, NPS scores, customer goals, and any relevant notes. The more context you provide, the more detailed and accurate the deck.',
  },
  {
    q: 'How long does generation take?',
    a: 'Most decks are generated in under 60 seconds. Complex accounts with extensive data may take slightly longer, but you\'ll always have your deck in under 2 minutes.',
  },
  {
    q: 'Can I customize the output?',
    a: 'Yes. The generated deck gives you a strong starting point with all the analysis done. You can review each section, edit the narrative, and adjust recommendations before downloading.',
  },
  {
    q: 'Is my customer data secure?',
    a: 'Your data is processed securely and is never stored or used for training. We follow industry-standard encryption and data handling practices.',
  },
  {
    q: 'What format is the output?',
    a: 'The deck is generated as a structured, formatted document that you can download and present directly or import into your preferred presentation tool.',
  },
  {
    q: 'Do I need technical skills to use this?',
    a: 'Not at all. If you can paste text into a form, you can use this tool. No integrations, APIs, or technical setup required.',
  },
];

const personas = [
  { icon: Users, label: 'CSMs Managing Multiple Accounts' },
  { icon: Briefcase, label: 'Account Managers Preparing Renewals' },
  { icon: Crown, label: 'CS Leaders Overseeing Team Performance' },
];

const navSections = [
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'sample-output', label: 'Sample Output' },
  { id: 'faq', label: 'FAQ' },
];

function QbrDeckGenerator() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Helmet>
        <title>Free AI QBR Deck Generator | RetainSure</title>
        <meta
          name="description"
          content="Generate professional QBR decks in minutes with AI. Input customer data, get executive-ready presentations with usage trends, health scores, and strategic recommendations."
        />
      </Helmet>

      <FreeToolsNav showBackLink sectionLinks={navSections} />

      <div className="min-h-screen bg-white" style={{ scrollBehavior: 'smooth' }}>
        {/* Hero */}
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
            <div className="max-w-3xl mx-auto text-center">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: '#edfcf2', color: '#039143' }}
              >
                <BarChart3 className="w-4 h-4" />
                Free QBR Deck Generator
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight mb-6"
                style={{ color: '#022610' }}
              >
                Generate Professional QBR Decks{' '}
                <span style={{ color: '#039143' }}>in Minutes, Not Hours</span>
              </h1>

              <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: '#3d5a47' }}>
                AI-powered QBR deck generator that turns customer data into executive-ready
                presentations. Save 4+ hours per QBR while delivering sharper insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://tools.retainsure.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-all duration-200 hover:shadow-lg text-base"
                  style={{ backgroundColor: '#039143' }}
                >
                  Generate Your QBR Deck - Free
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  onClick={scrollToSection}
                  className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-xl border-2 transition-all duration-200 hover:bg-gray-50 text-base"
                  style={{ color: '#022610', borderColor: '#d1d5db' }}
                >
                  See How It Works
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              <p className="mt-5 text-sm" style={{ color: '#6b8575' }}>
                No credit card required. No signup needed. Work email only.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
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

        {/* Problem Statement */}
        <section className="scroll-reveal bg-white py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
                style={{ color: '#022610' }}
              >
                QBR Prep Shouldn't Take{' '}
                <span style={{ color: '#039143' }}>Half Your Week</span>
              </h2>
              <p className="text-lg" style={{ color: '#3d5a47' }}>
                Every quarter, CS teams spend hours gathering data, building slides, and crafting narratives.
                Time that could be spent on what actually moves the needle -- deepening customer relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {[
                {
                  stat: '6-8 hrs',
                  label: 'Average time to prep a single QBR deck manually',
                },
                {
                  stat: '40%',
                  label: 'Of CSM time spent on repetitive reporting tasks',
                },
                {
                  stat: '3x',
                  label: 'More accounts covered with AI-assisted preparation',
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="text-center p-6 rounded-2xl border border-gray-100"
                  style={{ backgroundColor: '#fafbfc' }}
                >
                  <p className="text-3xl font-extrabold mb-2" style={{ color: '#039143' }}>
                    {item.stat}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#3d5a47' }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="scroll-reveal py-20 sm:py-28" style={{ backgroundColor: '#fafbfc' }}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
                style={{ color: '#022610' }}
              >
                Everything You Need for a{' '}
                <span style={{ color: '#039143' }}>Perfect QBR</span>
              </h2>
              <p className="text-lg" style={{ color: '#3d5a47' }}>
                From data analysis to strategic recommendations -- every section of your QBR is handled by AI.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#edfcf2' }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: '#039143' }} />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#022610' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3d5a47' }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Detailed */}
        <section id="how-it-works" className="scroll-reveal bg-white py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
                style={{ color: '#022610' }}
              >
                Three Steps to a{' '}
                <span style={{ color: '#039143' }}>Better QBR</span>
              </h2>
              <p className="text-lg" style={{ color: '#3d5a47' }}>
                From raw customer data to a polished, executive-ready deck in under 2 minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
              <div
                className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px"
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

                    <h3 className="text-xl font-bold mb-3" style={{ color: '#022610' }}>
                      {step.title}
                    </h3>

                    <p
                      className="text-base leading-relaxed max-w-xs mx-auto mb-5"
                      style={{ color: '#3d5a47' }}
                    >
                      {step.description}
                    </p>

                    <div className="space-y-2">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-sm justify-center">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#039143' }} />
                          <span style={{ color: '#3d5a47' }}>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Output Preview */}
        <section id="sample-output" className="scroll-reveal py-20 sm:py-28" style={{ backgroundColor: '#fafbfc' }}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
                style={{ color: '#022610' }}
              >
                What Your Deck{' '}
                <span style={{ color: '#039143' }}>Looks Like</span>
              </h2>
              <p className="text-lg" style={{ color: '#3d5a47' }}>
                Each generated QBR deck includes these core sections, tailored to your specific customer data.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {sampleSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div className="px-6 py-4" style={{ backgroundColor: section.color }}>
                    <h3 className="text-white font-bold text-base">{section.title}</h3>
                  </div>
                  <div className="p-6 space-y-3">
                    {section.lines.map((line) => (
                      <div key={line} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: section.color, opacity: 0.5 }}
                        />
                        <span className="text-sm" style={{ color: '#3d5a47' }}>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="scroll-reveal bg-white py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6"
                style={{ color: '#022610' }}
              >
                Perfect For{' '}
                <span style={{ color: '#039143' }}>Every Customer Meeting</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-gray-300"
                    style={{ color: '#022610', backgroundColor: '#fafbfc' }}
                  >
                    {useCase}
                  </span>
                ))}
              </div>

              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: '#022610' }}
              >
                Built for{' '}
                <span style={{ color: '#039143' }}>Customer Success Teams</span>
              </h3>

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

        {/* FAQ */}
        <section id="faq" className="scroll-reveal py-20 sm:py-28" style={{ backgroundColor: '#fafbfc' }}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
                style={{ color: '#022610' }}
              >
                Frequently Asked{' '}
                <span style={{ color: '#039143' }}>Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-200 hover:border-gray-300"
                >
                  <summary
                    className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none"
                    style={{ color: '#022610' }}
                  >
                    <span className="font-semibold text-base pr-4">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" style={{ color: '#039143' }} />
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-base leading-relaxed" style={{ color: '#3d5a47' }}>
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Security Note */}
        <section className="scroll-reveal bg-white py-14">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto flex items-center gap-4 p-6 rounded-2xl border border-gray-200" style={{ backgroundColor: '#fafbfc' }}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#edfcf2' }}
              >
                <Shield className="w-6 h-6" style={{ color: '#039143' }} />
              </div>
              <div>
                <p className="font-semibold text-base mb-1" style={{ color: '#022610' }}>
                  Your Data is Safe
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#3d5a47' }}>
                  Customer data you input is processed securely and never stored or used for AI training.
                  We follow industry-standard encryption and data handling practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
              Your Next QBR Deck is
              <br className="hidden sm:block" />
              <span className="opacity-90"> 60 Seconds Away.</span>
            </h2>

            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
              Stop spending hours on slide decks. Let AI handle the heavy lifting so you can focus on
              the conversation that matters.
            </p>

            <a
              href="https://tools.retainsure.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-base"
              style={{ backgroundColor: 'white', color: '#039143' }}
            >
              Generate Your QBR Deck - Free
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="mt-5 text-sm text-white/60">
              No credit card required. No signup needed. Work email only.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default QbrDeckGenerator;
