import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  ChevronDown,
  Clock,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  FileText,
  Sparkles,
  Users,
  Briefcase,
  Crown,
} from 'lucide-react';
import FreeToolsNav from './components/FreeToolsNav';

const stats = [
  { icon: Clock, label: 'Save 4+ Hours Per QBR', highlight: '4+ Hours' },
  { icon: TrendingUp, label: '23% Higher Customer Retention', highlight: '23%' },
  { icon: Target, label: '35% More Upsell Opportunities', highlight: '35%' },
];

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Choose Your Tool',
    description:
      'Pick the AI micro-tool that fits your need -- QBR deck generation, churn analysis, or upsell identification.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Input Your Data',
    description:
      'Paste your customer context -- account details, usage metrics, support history, or any relevant data points.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Get Results',
    description:
      'Receive polished, actionable output in seconds. Download, share, or present -- no extra formatting needed.',
  },
];

const tools = [
  {
    icon: BarChart3,
    title: 'QBR Deck Generator',
    description:
      'Input your customer data and get a polished, executive-ready QBR presentation in minutes. Includes usage trends, health scores, and strategic recommendations.',
    badge: 'Available Now',
    available: true,
    detailPath: '/free-customer-success-ai-tools/qbr-deck-generator',
  },
  {
    icon: TrendingUp,
    title: 'Upsell Analyzer',
    description:
      'AI scans customer usage patterns, contract data, and engagement signals to surface high-confidence upsell and cross-sell opportunities.',
    badge: 'Coming Soon',
    available: false,
    detailPath: null,
  },
  {
    icon: Zap,
    title: 'Churn Analyzer',
    description:
      'Predict at-risk accounts before they churn. Get actionable retention plays based on behavioral signals, support trends, and engagement drops.',
    badge: 'Coming Soon',
    available: false,
    detailPath: null,
  },
];

const personas = [
  { icon: Users, label: 'Customer Success Managers' },
  { icon: Briefcase, label: 'Account Managers' },
  { icon: Crown, label: 'CS Leaders' },
];

function QbrIllustration() {
  return (
    <div className="relative w-full max-w-lg">
      <div
        className="absolute inset-0 rounded-2xl opacity-20 blur-2xl"
        style={{ background: 'linear-gradient(135deg, #039143 0%, #027a38 100%)' }}
      />
      <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden p-5">
        <svg
          viewBox="0 0 520 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          role="img"
          aria-label="Flow: Your Input to AI Engine to QBR, Churn Insights, and Upsell Insights"
        >
          <defs>
            <pattern id="dotGrid" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.6" fill="#d1d5db" />
            </pattern>
            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#039143" />
              <stop offset="100%" stopColor="#027a38" />
            </linearGradient>
            <linearGradient id="aiGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#039143" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#039143" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="churnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
            <linearGradient id="upsellGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <filter id="cardShadow" x="-4%" y="-4%" width="108%" height="112%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.08" />
            </filter>
          </defs>

          <rect width="520" height="340" fill="url(#dotGrid)" rx="8" />

          <g>
            <rect x="20" y="90" width="110" height="160" rx="10" fill="white" stroke="#d1d5db" strokeWidth="1.2" filter="url(#cardShadow)" />
            <rect x="20" y="90" width="110" height="28" rx="10" fill="#f1f5f9" />
            <rect x="20" y="108" width="110" height="10" fill="#f1f5f9" />
            <text x="75" y="109" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">YOUR INPUT</text>
            <rect x="40" y="130" width="28" height="34" rx="3" fill="white" stroke="#94a3b8" strokeWidth="1" />
            <rect x="44" y="136" width="14" height="2" rx="1" fill="#cbd5e1" />
            <rect x="44" y="141" width="18" height="2" rx="1" fill="#cbd5e1" />
            <rect x="44" y="146" width="12" height="2" rx="1" fill="#cbd5e1" />
            <rect x="44" y="151" width="16" height="2" rx="1" fill="#cbd5e1" />
            <path d="M60 130 L68 130 L68 138 L60 130Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="78" y="130" width="34" height="34" rx="3" fill="white" stroke="#94a3b8" strokeWidth="1" />
            <line x1="78" y1="140" x2="112" y2="140" stroke="#cbd5e1" strokeWidth="0.7" />
            <line x1="78" y1="148" x2="112" y2="148" stroke="#cbd5e1" strokeWidth="0.7" />
            <line x1="78" y1="156" x2="112" y2="156" stroke="#cbd5e1" strokeWidth="0.7" />
            <line x1="93" y1="130" x2="93" y2="164" stroke="#cbd5e1" strokeWidth="0.7" />
            <rect x="82" y="133" width="8" height="4" rx="1" fill="#039143" opacity="0.3" />
            <rect x="96" y="133" width="8" height="4" rx="1" fill="#039143" opacity="0.2" />
            <rect x="82" y="142" width="8" height="4" rx="1" fill="#039143" opacity="0.2" />
            <rect x="96" y="142" width="8" height="4" rx="1" fill="#039143" opacity="0.4" />
            <text x="54" y="178" textAnchor="middle" fill="#64748b" fontSize="6.5" fontFamily="system-ui, sans-serif">Notes</text>
            <text x="95" y="178" textAnchor="middle" fill="#64748b" fontSize="6.5" fontFamily="system-ui, sans-serif">CRM Data</text>
            <circle cx="36" cy="198" r="2" fill="#039143" opacity="0.5" />
            <rect x="42" y="196" width="40" height="2.5" rx="1" fill="#cbd5e1" />
            <circle cx="36" cy="209" r="2" fill="#039143" opacity="0.5" />
            <rect x="42" y="207" width="52" height="2.5" rx="1" fill="#cbd5e1" />
            <circle cx="36" cy="220" r="2" fill="#039143" opacity="0.5" />
            <rect x="42" y="218" width="36" height="2.5" rx="1" fill="#cbd5e1" />
            <text x="75" y="240" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="system-ui, sans-serif">Usage, tickets, goals...</text>
          </g>

          <g>
            <line x1="138" y1="170" x2="178" y2="170" stroke="#039143" strokeWidth="2" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
            </line>
            <polygon points="176,164 186,170 176,176" fill="#039143">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
            </polygon>
          </g>

          <g>
            <circle cx="240" cy="170" r="62" fill="url(#aiGlow)" stroke="#039143" strokeWidth="1" strokeDasharray="4 3" opacity="0.7">
              <animate attributeName="r" values="62;65;62" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="240" cy="170" r="46" fill="white" stroke="#039143" strokeWidth="2.5" />
            <circle cx="222" cy="152" r="5" fill="#039143" opacity="0.85" />
            <circle cx="222" cy="170" r="5" fill="#039143" opacity="0.85" />
            <circle cx="222" cy="188" r="5" fill="#039143" opacity="0.85" />
            <circle cx="244" cy="156" r="4.5" fill="#039143" opacity="0.65" />
            <circle cx="244" cy="175" r="4.5" fill="#039143" opacity="0.65" />
            <circle cx="262" cy="165" r="5" fill="#039143" opacity="0.85" />
            <line x1="227" y1="152" x2="239" y2="156" stroke="#039143" strokeWidth="1" opacity="0.3" />
            <line x1="227" y1="152" x2="239" y2="175" stroke="#039143" strokeWidth="1" opacity="0.2" />
            <line x1="227" y1="170" x2="239" y2="156" stroke="#039143" strokeWidth="1" opacity="0.2" />
            <line x1="227" y1="170" x2="239" y2="175" stroke="#039143" strokeWidth="1" opacity="0.3" />
            <line x1="227" y1="188" x2="239" y2="156" stroke="#039143" strokeWidth="1" opacity="0.15" />
            <line x1="227" y1="188" x2="239" y2="175" stroke="#039143" strokeWidth="1" opacity="0.3" />
            <line x1="249" y1="156" x2="257" y2="165" stroke="#039143" strokeWidth="1" opacity="0.3" />
            <line x1="249" y1="175" x2="257" y2="165" stroke="#039143" strokeWidth="1" opacity="0.3" />
            <circle cx="262" cy="165" r="5" fill="none" stroke="#039143" strokeWidth="1" opacity="0">
              <animate attributeName="r" values="5;10;5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="240" y="228" textAnchor="middle" fill="#022610" fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">AI Engine</text>
            <text x="240" y="241" textAnchor="middle" fill="#6b8575" fontSize="7" fontWeight="500" fontFamily="system-ui, sans-serif">RetainSure</text>
          </g>

          <g>
            <path d="M286 158 C310 158, 310 80, 340 80" fill="none" stroke="#039143" strokeWidth="2" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
            </path>
            <polygon points="338,74 348,80 338,86" fill="#039143">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
            </polygon>
            <line x1="286" y1="170" x2="340" y2="170" stroke="#039143" strokeWidth="2" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
            </line>
            <polygon points="338,164 348,170 338,176" fill="#039143">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
            </polygon>
            <path d="M286 182 C310 182, 310 260, 340 260" fill="none" stroke="#039143" strokeWidth="2" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
            </path>
            <polygon points="338,254 348,260 338,266" fill="#039143">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
            </polygon>
          </g>

          <g>
            <rect x="350" y="30" width="150" height="100" rx="8" fill="white" stroke="#d1d5db" strokeWidth="1.2" filter="url(#cardShadow)" />
            <rect x="350" y="30" width="150" height="26" rx="8" fill="url(#greenGrad)" />
            <rect x="350" y="48" width="150" height="8" fill="url(#greenGrad)" />
            <rect x="362" y="37" width="14" height="14" rx="3" fill="white" opacity="0.25" />
            <rect x="365" y="40" width="8" height="2" rx="1" fill="white" opacity="0.7" />
            <rect x="365" y="44" width="5" height="2" rx="1" fill="white" opacity="0.7" />
            <rect x="365" y="48" width="7" height="2" rx="1" fill="white" opacity="0.7" />
            <text x="385" y="47" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">QBR Deck</text>
            <rect x="362" y="88" width="8" height="20" rx="1.5" fill="#039143" opacity="0.3" />
            <rect x="374" y="80" width="8" height="28" rx="1.5" fill="#039143" opacity="0.5" />
            <rect x="386" y="72" width="8" height="36" rx="1.5" fill="#039143" opacity="0.7" />
            <rect x="398" y="66" width="8" height="42" rx="1.5" fill="#039143" />
            <line x1="362" y1="108" x2="406" y2="108" stroke="#e5e7eb" strokeWidth="0.5" />
            <rect x="420" y="64" width="68" height="18" rx="3" fill="#edfcf2" />
            <text x="454" y="76" textAnchor="middle" fill="#039143" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Health: 94%</text>
            <rect x="420" y="86" width="68" height="18" rx="3" fill="#edfcf2" />
            <text x="454" y="98" textAnchor="middle" fill="#039143" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">NPS: +62</text>
            <rect x="362" y="116" width="80" height="3" rx="1.5" fill="#e5e7eb" />
            <rect x="362" y="122" width="55" height="2.5" rx="1" fill="#f1f5f9" />
          </g>

          <g>
            <rect x="350" y="140" width="150" height="60" rx="8" fill="white" stroke="#d1d5db" strokeWidth="1.2" filter="url(#cardShadow)" />
            <rect x="350" y="140" width="150" height="26" rx="8" fill="url(#churnGrad)" />
            <rect x="350" y="158" width="150" height="8" fill="url(#churnGrad)" />
            <path d="M369 38 L363 48 L375 48Z" transform="translate(0, 104)" fill="none" stroke="white" strokeWidth="1.2" opacity="0.9" />
            <line x1="369" y1="145" x2="369" y2="149" stroke="white" strokeWidth="1.2" opacity="0.9" />
            <circle cx="369" cy="151" r="0.8" fill="white" opacity="0.9" />
            <text x="381" y="157" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Churn Insights</text>
            <circle cx="366" cy="178" r="3.5" fill="#fef2f2" stroke="#dc2626" strokeWidth="0.8" />
            <text x="366" y="180.5" textAnchor="middle" fill="#dc2626" fontSize="5" fontWeight="800" fontFamily="system-ui, sans-serif">!</text>
            <rect x="375" y="176" width="58" height="2.5" rx="1" fill="#fecaca" />
            <text x="442" y="180" fill="#dc2626" fontSize="6.5" fontWeight="600" fontFamily="system-ui, sans-serif">High</text>
            <circle cx="366" cy="190" r="3.5" fill="#fefce8" stroke="#d97706" strokeWidth="0.8" />
            <text x="366" y="192.5" textAnchor="middle" fill="#d97706" fontSize="5" fontWeight="800" fontFamily="system-ui, sans-serif">~</text>
            <rect x="375" y="188" width="44" height="2.5" rx="1" fill="#fef3c7" />
            <text x="442" y="192" fill="#d97706" fontSize="6.5" fontWeight="600" fontFamily="system-ui, sans-serif">Med</text>
          </g>

          <g>
            <rect x="350" y="210" width="150" height="100" rx="8" fill="white" stroke="#d1d5db" strokeWidth="1.2" filter="url(#cardShadow)" />
            <rect x="350" y="210" width="150" height="26" rx="8" fill="url(#upsellGrad)" />
            <rect x="350" y="228" width="150" height="8" fill="url(#upsellGrad)" />
            <circle cx="368" cy="223" r="7" fill="white" opacity="0.25" />
            <text x="368" y="227" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">$</text>
            <text x="381" y="227" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Upsell Insights</text>
            <rect x="362" y="244" width="126" height="24" rx="4" fill="#fffbeb" stroke="#fcd34d" strokeWidth="0.6" />
            <rect x="368" y="249" width="6" height="6" rx="1.5" fill="#039143" />
            <path d="M370 252.5 L371 254 L374 250.5" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" />
            <rect x="380" y="249" width="50" height="2.5" rx="1" fill="#d97706" opacity="0.4" />
            <rect x="380" y="255" width="36" height="2" rx="1" fill="#fde68a" />
            <text x="468" y="256" textAnchor="middle" fill="#d97706" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">$24K</text>
            <rect x="362" y="274" width="126" height="24" rx="4" fill="#fffbeb" stroke="#fcd34d" strokeWidth="0.6" />
            <rect x="368" y="279" width="6" height="6" rx="1.5" fill="#039143" />
            <path d="M370 282.5 L371 284 L374 280.5" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" />
            <rect x="380" y="279" width="42" height="2.5" rx="1" fill="#d97706" opacity="0.4" />
            <rect x="380" y="285" width="30" height="2" rx="1" fill="#fde68a" />
            <text x="468" y="286" textAnchor="middle" fill="#d97706" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif">$18K</text>
          </g>

          <g>
            <path d="M330 46 L332 51 L337 53 L332 55 L330 60 L328 55 L323 53 L328 51Z" fill="#039143" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M510 140 L512 144 L516 146 L512 148 L510 152 L508 148 L504 146 L508 144Z" fill="#039143" opacity="0.35">
              <animate attributeName="opacity" values="0.2;0.55;0.2" dur="2.5s" repeatCount="indefinite" />
            </path>
            <path d="M510 220 L512 224 L516 226 L512 228 L510 232 L508 228 L504 226 L508 224Z" fill="#d97706" opacity="0.35">
              <animate attributeName="opacity" values="0.2;0.55;0.2" dur="2.2s" repeatCount="indefinite" />
            </path>
          </g>

          <g>
            <text x="75" y="325" textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.5">STEP 1</text>
            <text x="240" y="325" textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.5">STEP 2</text>
            <text x="425" y="325" textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.5">STEP 3</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

function FreeAiTools() {
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

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Helmet>
        <title>Free AI Customer Success Tools | RetainSure</title>
        <meta
          name="description"
          content="Free AI-powered micro tools for Customer Success teams. Generate QBR decks, identify churn risks, and uncover upsell opportunities in minutes."
        />
      </Helmet>

      <FreeToolsNav />

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
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  Free AI-Powered Tools
                </div>

                <h1
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight mb-6"
                  style={{ color: '#022610' }}
                >
                   Customer Success Tools{' '}
                  <span style={{ color: '#039143' }}>That Deliver</span>
                </h1>

                <p className="text-lg sm:text-xl leading-relaxed mb-8" style={{ color: '#3d5a47' }}>
                  Generate QBR decks, identify churn risks, and uncover upsell opportunities -
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

        {/* Features */}
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

                  <h3 className="text-xl font-bold mb-3" style={{ color: '#022610' }}>
                    {tool.title}
                  </h3>

                  <p className="text-base leading-relaxed" style={{ color: '#3d5a47' }}>
                    {tool.description}
                  </p>

                  {tool.available && (
                    <div className="flex items-center gap-5 mt-6">
                      <a
                        href="https://tools.retainsure.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                        style={{ color: '#039143' }}
                      >
                        Try it now
                        <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                      </a>
                      {tool.detailPath && (
                        <Link
                          to={tool.detailPath}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                          style={{ color: '#022610' }}
                        >
                          Learn more
                          <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="scroll-reveal py-20 sm:py-28" style={{ backgroundColor: '#fafbfc' }}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
                style={{ color: '#022610' }}
              >
                How It Works
              </h2>
              <p className="text-lg" style={{ color: '#3d5a47' }}>
                Pick a tool, drop in your data, and get actionable results in seconds.
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

                    <h3 className="text-xl font-bold mb-3" style={{ color: '#022610' }}>
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

        {/* Who It's For */}
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
              Stop spending hours on what
              <br className="hidden sm:block" />
              <span className="opacity-90"> AI can do in minutes</span>
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
              Try micro toos - free always
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="mt-5 text-sm text-white/60">
              No credit card required. Work email only.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default FreeAiTools;
