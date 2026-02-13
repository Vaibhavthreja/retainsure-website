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
    title: 'Enter Your Customer Context',
    description: 'Paste key account details - Product usage, support history, renewal date. The more context, the sharper the output.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI Generates Your Deck',
    description: 'Our AI analyzes your data and produces a structured, executive-ready QBR deck with insights, trends, and recommendations.',
  },
  {
    number: '03',
    icon: Download,
    title: 'Download and Present',
    description: 'Export your polished deck and walk into your next QBR fully prepared. Customize further or present as-is.',
  },
];

const sampleSections = [
  {
    title: 'Journey Till Now',
    color: '#039143',
    lines: [
      'Summary of product usage over time',
      'Key milestones and adoption trends',
      'Engagement and activity overview',
      'Account health trajectory',
    ],
  },
  {
    title: 'What Worked Well',
    color: '#0369a1',
    lines: [
      'High-impact features and workflows',
      'Goals achieved and targets met',
      'Positive engagement patterns',
      'Successful initiatives and wins',
    ],
  },
  {
    title: 'What Is Not Working Well',
    color: '#dc2626',
    lines: [
      'Underutilized features and gaps',
      'Declining engagement areas',
      'Unresolved pain points',
      'Missed targets and blockers',
    ],
  },
  {
    title: 'Actionable Recommendations',
    color: '#d97706',
    lines: [
      'Specific steps to address problem areas',
      'Quick wins to drive immediate impact',
      'Strategic initiatives for long-term success',
      'Resources and support needed',
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
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'sample-output', label: 'Sample Output' },
  { id: 'faq', label: 'FAQ' },
];

function QbrFlowIllustration() {
  return (
    <div className="relative w-full max-w-lg">
      <div
        className="absolute inset-0 rounded-2xl opacity-20 blur-2xl"
        style={{ background: 'linear-gradient(135deg, #039143 0%, #027a38 100%)' }}
      />
      <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden p-5">
        <svg
          viewBox="0 0 520 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          role="img"
          aria-label="Flow: Customer Data to AI Engine to QBR Deck"
        >
          <defs>
            <pattern id="qbrDotGrid" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.6" fill="#d1d5db" />
            </pattern>
            <linearGradient id="qbrGreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#039143" />
              <stop offset="100%" stopColor="#027a38" />
            </linearGradient>
            <linearGradient id="qbrAiGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#039143" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#039143" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="qbrBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>
            <linearGradient id="qbrRedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
            <linearGradient id="qbrAmberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <filter id="qbrShadow" x="-4%" y="-4%" width="108%" height="112%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.08" />
            </filter>
          </defs>

          <rect width="520" height="300" fill="url(#qbrDotGrid)" rx="8" />

          {/* Input Card */}
          <g>
            <rect x="14" y="60" width="120" height="180" rx="10" fill="white" stroke="#d1d5db" strokeWidth="1.2" filter="url(#qbrShadow)" />
            <rect x="14" y="60" width="120" height="28" rx="10" fill="#f1f5f9" />
            <rect x="14" y="78" width="120" height="10" fill="#f1f5f9" />
            <text x="74" y="79" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">CUSTOMER DATA</text>

            {/* Doc icon */}
            <rect x="30" y="100" width="30" height="36" rx="3" fill="white" stroke="#94a3b8" strokeWidth="1" />
            <rect x="34" y="106" width="16" height="2" rx="1" fill="#cbd5e1" />
            <rect x="34" y="111" width="20" height="2" rx="1" fill="#cbd5e1" />
            <rect x="34" y="116" width="13" height="2" rx="1" fill="#cbd5e1" />
            <rect x="34" y="121" width="18" height="2" rx="1" fill="#cbd5e1" />
            <rect x="34" y="126" width="10" height="2" rx="1" fill="#cbd5e1" />
            <path d="M52 100 L60 100 L60 108 L52 100Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Spreadsheet icon */}
            <rect x="72" y="100" width="46" height="36" rx="3" fill="white" stroke="#94a3b8" strokeWidth="1" />
            <line x1="72" y1="110" x2="118" y2="110" stroke="#cbd5e1" strokeWidth="0.7" />
            <line x1="72" y1="118" x2="118" y2="118" stroke="#cbd5e1" strokeWidth="0.7" />
            <line x1="72" y1="126" x2="118" y2="126" stroke="#cbd5e1" strokeWidth="0.7" />
            <line x1="90" y1="100" x2="90" y2="136" stroke="#cbd5e1" strokeWidth="0.7" />
            <rect x="76" y="103" width="10" height="4" rx="1" fill="#039143" opacity="0.3" />
            <rect x="94" y="103" width="10" height="4" rx="1" fill="#039143" opacity="0.2" />
            <rect x="76" y="112" width="10" height="4" rx="1" fill="#039143" opacity="0.4" />
            <rect x="94" y="112" width="10" height="4" rx="1" fill="#039143" opacity="0.2" />
            <rect x="76" y="120" width="10" height="4" rx="1" fill="#039143" opacity="0.2" />
            <rect x="94" y="120" width="10" height="4" rx="1" fill="#039143" opacity="0.5" />

            <text x="45" y="150" textAnchor="middle" fill="#64748b" fontSize="6.5" fontFamily="system-ui, sans-serif">Notes</text>
            <text x="95" y="150" textAnchor="middle" fill="#64748b" fontSize="6.5" fontFamily="system-ui, sans-serif">CRM Data</text>

            {/* Bullet items */}
            <circle cx="30" cy="168" r="2" fill="#039143" opacity="0.5" />
            <rect x="36" y="166" width="44" height="2.5" rx="1" fill="#cbd5e1" />
            <circle cx="30" cy="179" r="2" fill="#039143" opacity="0.5" />
            <rect x="36" y="177" width="56" height="2.5" rx="1" fill="#cbd5e1" />
            <circle cx="30" cy="190" r="2" fill="#039143" opacity="0.5" />
            <rect x="36" y="188" width="38" height="2.5" rx="1" fill="#cbd5e1" />
            <circle cx="30" cy="201" r="2" fill="#039143" opacity="0.5" />
            <rect x="36" y="199" width="48" height="2.5" rx="1" fill="#cbd5e1" />

            <text x="74" y="228" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="system-ui, sans-serif">Usage, tickets, goals...</text>
          </g>

          {/* Arrow: Input -> AI */}
          <g>
            <line x1="142" y1="150" x2="180" y2="150" stroke="#039143" strokeWidth="2" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
            </line>
            <polygon points="178,144 188,150 178,156" fill="#039143">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
            </polygon>
          </g>

          {/* AI Engine */}
          <g>
            <circle cx="244" cy="150" r="62" fill="url(#qbrAiGlow)" stroke="#039143" strokeWidth="1" strokeDasharray="4 3" opacity="0.7">
              <animate attributeName="r" values="62;65;62" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="244" cy="150" r="46" fill="white" stroke="#039143" strokeWidth="2.5" />

            {/* Neural net nodes */}
            <circle cx="226" cy="132" r="5" fill="#039143" opacity="0.85" />
            <circle cx="226" cy="150" r="5" fill="#039143" opacity="0.85" />
            <circle cx="226" cy="168" r="5" fill="#039143" opacity="0.85" />
            <circle cx="248" cy="136" r="4.5" fill="#039143" opacity="0.65" />
            <circle cx="248" cy="155" r="4.5" fill="#039143" opacity="0.65" />
            <circle cx="266" cy="145" r="5" fill="#039143" opacity="0.85" />

            {/* Connections */}
            <line x1="231" y1="132" x2="243" y2="136" stroke="#039143" strokeWidth="1" opacity="0.3" />
            <line x1="231" y1="132" x2="243" y2="155" stroke="#039143" strokeWidth="1" opacity="0.2" />
            <line x1="231" y1="150" x2="243" y2="136" stroke="#039143" strokeWidth="1" opacity="0.2" />
            <line x1="231" y1="150" x2="243" y2="155" stroke="#039143" strokeWidth="1" opacity="0.3" />
            <line x1="231" y1="168" x2="243" y2="136" stroke="#039143" strokeWidth="1" opacity="0.15" />
            <line x1="231" y1="168" x2="243" y2="155" stroke="#039143" strokeWidth="1" opacity="0.3" />
            <line x1="253" y1="136" x2="261" y2="145" stroke="#039143" strokeWidth="1" opacity="0.3" />
            <line x1="253" y1="155" x2="261" y2="145" stroke="#039143" strokeWidth="1" opacity="0.3" />

            {/* Pulse */}
            <circle cx="266" cy="145" r="5" fill="none" stroke="#039143" strokeWidth="1" opacity="0">
              <animate attributeName="r" values="5;10;5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
            </circle>

            <text x="244" y="208" textAnchor="middle" fill="#022610" fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">AI Engine</text>
            <text x="244" y="221" textAnchor="middle" fill="#6b8575" fontSize="7" fontWeight="500" fontFamily="system-ui, sans-serif">RetainSure</text>
          </g>

          {/* Arrow: AI -> QBR Deck */}
          <g>
            <line x1="290" y1="150" x2="340" y2="150" stroke="#039143" strokeWidth="2" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
            </line>
            <polygon points="338,144 348,150 338,156" fill="#039143">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
            </polygon>
          </g>

          {/* QBR Deck Output */}
          <g>
            <rect x="350" y="30" width="156" height="240" rx="10" fill="white" stroke="#d1d5db" strokeWidth="1.2" filter="url(#qbrShadow)" />
            <rect x="350" y="30" width="156" height="28" rx="10" fill="url(#qbrGreenGrad)" />
            <rect x="350" y="48" width="156" height="10" fill="url(#qbrGreenGrad)" />
            <rect x="362" y="37" width="14" height="14" rx="3" fill="white" opacity="0.25" />
            <rect x="365" y="40" width="8" height="2" rx="1" fill="white" opacity="0.7" />
            <rect x="365" y="44" width="5" height="2" rx="1" fill="white" opacity="0.7" />
            <rect x="365" y="48" width="7" height="2" rx="1" fill="white" opacity="0.7" />
            <text x="385" y="48" fill="white" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">QBR Deck</text>

            {/* Section 1: Journey Till Now */}
            <rect x="360" y="68" width="136" height="42" rx="5" fill="#f0faf4" stroke="#039143" strokeWidth="0.6" />
            <rect x="360" y="68" width="136" height="14" rx="5" fill="#039143" opacity="0.15" />
            <text x="368" y="78" fill="#039143" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif">Journey Till Now</text>
            <rect x="368" y="88" width="50" height="2" rx="1" fill="#039143" opacity="0.25" />
            <rect x="368" y="93" width="70" height="2" rx="1" fill="#039143" opacity="0.15" />
            <rect x="368" y="98" width="40" height="2" rx="1" fill="#039143" opacity="0.2" />
            {/* Mini bar chart */}
            <rect x="460" y="84" width="6" height="16" rx="1" fill="#039143" opacity="0.2" />
            <rect x="470" y="78" width="6" height="22" rx="1" fill="#039143" opacity="0.35" />
            <rect x="480" y="72" width="6" height="28" rx="1" fill="#039143" opacity="0.55" />

            {/* Section 2: What Worked Well */}
            <rect x="360" y="116" width="136" height="42" rx="5" fill="#f0f9ff" stroke="#0369a1" strokeWidth="0.6" />
            <rect x="360" y="116" width="136" height="14" rx="5" fill="#0369a1" opacity="0.15" />
            <text x="368" y="126" fill="#0369a1" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif">What Worked Well</text>
            <circle cx="372" cy="137" r="3" fill="#dcfce7" stroke="#039143" strokeWidth="0.6" />
            <path d="M370 137 L371.5 138.5 L374.5 135.5" fill="none" stroke="#039143" strokeWidth="0.8" strokeLinecap="round" />
            <rect x="380" y="135" width="50" height="2.5" rx="1" fill="#0369a1" opacity="0.2" />
            <circle cx="372" cy="148" r="3" fill="#dcfce7" stroke="#039143" strokeWidth="0.6" />
            <path d="M370 148 L371.5 149.5 L374.5 146.5" fill="none" stroke="#039143" strokeWidth="0.8" strokeLinecap="round" />
            <rect x="380" y="146" width="62" height="2.5" rx="1" fill="#0369a1" opacity="0.2" />

            {/* Section 3: What Is Not Working Well */}
            <rect x="360" y="164" width="136" height="42" rx="5" fill="#fef2f2" stroke="#dc2626" strokeWidth="0.6" />
            <rect x="360" y="164" width="136" height="14" rx="5" fill="#dc2626" opacity="0.12" />
            <text x="368" y="174" fill="#dc2626" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif">What Is Not Working</text>
            <circle cx="372" cy="185" r="3.5" fill="#fef2f2" stroke="#dc2626" strokeWidth="0.6" />
            <text x="372" y="187.5" textAnchor="middle" fill="#dc2626" fontSize="5" fontWeight="800" fontFamily="system-ui, sans-serif">!</text>
            <rect x="380" y="183" width="55" height="2.5" rx="1" fill="#fecaca" />
            <circle cx="372" cy="196" r="3.5" fill="#fef2f2" stroke="#dc2626" strokeWidth="0.6" />
            <text x="372" y="198.5" textAnchor="middle" fill="#dc2626" fontSize="5" fontWeight="800" fontFamily="system-ui, sans-serif">!</text>
            <rect x="380" y="194" width="42" height="2.5" rx="1" fill="#fecaca" />

            {/* Section 4: Actionable Recommendations */}
            <rect x="360" y="212" width="136" height="48" rx="5" fill="#fffbeb" stroke="#d97706" strokeWidth="0.6" />
            <rect x="360" y="212" width="136" height="14" rx="5" fill="#d97706" opacity="0.12" />
            <text x="368" y="222" fill="#d97706" fontSize="6.5" fontWeight="700" fontFamily="system-ui, sans-serif">Recommendations</text>
            <rect x="368" y="232" width="8" height="8" rx="2" fill="#d97706" opacity="0.2" />
            <text x="372" y="238.5" textAnchor="middle" fill="#d97706" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
            <rect x="382" y="234" width="54" height="2.5" rx="1" fill="#fde68a" />
            <rect x="368" y="244" width="8" height="8" rx="2" fill="#d97706" opacity="0.2" />
            <text x="372" y="250.5" textAnchor="middle" fill="#d97706" fontSize="6" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
            <rect x="382" y="246" width="44" height="2.5" rx="1" fill="#fde68a" />
          </g>

          {/* Sparkle accents */}
          <g>
            <path d="M335 50 L337 55 L342 57 L337 59 L335 64 L333 59 L328 57 L333 55Z" fill="#039143" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M340 240 L342 244 L346 246 L342 248 L340 252 L338 248 L334 246 L338 244Z" fill="#d97706" opacity="0.35">
              <animate attributeName="opacity" values="0.2;0.55;0.2" dur="2.2s" repeatCount="indefinite" />
            </path>
            <path d="M150 80 L152 84 L156 86 L152 88 L150 92 L148 88 L144 86 L148 84Z" fill="#039143" opacity="0.3">
              <animate attributeName="opacity" values="0.15;0.45;0.15" dur="2.8s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Step labels */}
          <g>
            <text x="74" y="285" textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.5">STEP 1</text>
            <text x="244" y="285" textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.5">STEP 2</text>
            <text x="428" y="285" textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.5">STEP 3</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

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

      <FreeToolsNav sectionLinks={navSections} />

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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="max-w-xl">
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

                <p className="text-lg sm:text-xl leading-relaxed mb-8" style={{ color: '#3d5a47' }}>
                  AI-powered QBR deck generator that turns customer data into executive-ready
                  presentations. Save 4+ hours per QBR while delivering sharper insights.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://tools.retainsure.com?ref=website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-all duration-200 hover:shadow-lg text-base"
                    style={{ backgroundColor: '#039143' }}
                  >
                    Generate Now - Free Always
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

              <div className="hidden lg:flex items-center justify-center">
                <QbrFlowIllustration />
              </div>
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
                Time that could be spent on what actually moves the needle - deepening customer relationships.
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
