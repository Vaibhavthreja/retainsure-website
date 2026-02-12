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

          {/* ========== STAGE 1: YOUR INPUT ========== */}
          <g>
            <rect x="20" y="90" width="110" height="160" rx="10" fill="white" stroke="#d1d5db" strokeWidth="1.2" filter="url(#cardShadow)" />

            {/* Header */}
            <rect x="20" y="90" width="110" height="28" rx="10" fill="#f1f5f9" />
            <rect x="20" y="108" width="110" height="10" fill="#f1f5f9" />
            <text x="75" y="109" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">YOUR INPUT</text>

            {/* Document icon */}
            <rect x="40" y="130" width="28" height="34" rx="3" fill="white" stroke="#94a3b8" strokeWidth="1" />
            <rect x="44" y="136" width="14" height="2" rx="1" fill="#cbd5e1" />
            <rect x="44" y="141" width="18" height="2" rx="1" fill="#cbd5e1" />
            <rect x="44" y="146" width="12" height="2" rx="1" fill="#cbd5e1" />
            <rect x="44" y="151" width="16" height="2" rx="1" fill="#cbd5e1" />
            <path d="M60 130 L68 130 L68 138 L60 130Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Spreadsheet icon */}
            <rect x="78" y="130" width="34" height="34" rx="3" fill="white" stroke="#94a3b8" strokeWidth="1" />
            <line x1="78" y1="140" x2="112" y2="140" stroke="#cbd5e1" strokeWidth="0.7" />
            <line x1="78" y1="148" x2="112" y2="148" stroke="#cbd5e1" strokeWidth="0.7" />
            <line x1="78" y1="156" x2="112" y2="156" stroke="#cbd5e1" strokeWidth="0.7" />
            <line x1="93" y1="130" x2="93" y2="164" stroke="#cbd5e1" strokeWidth="0.7" />
            <rect x="82" y="133" width="8" height="4" rx="1" fill="#039143" opacity="0.3" />
            <rect x="96" y="133" width="8" height="4" rx="1" fill="#039143" opacity="0.2" />
            <rect x="82" y="142" width="8" height="4" rx="1" fill="#039143" opacity="0.2" />
            <rect x="96" y="142" width="8" height="4" rx="1" fill="#039143" opacity="0.4" />

            {/* Labels */}
            <text x="54" y="178" textAnchor="middle" fill="#64748b" fontSize="6.5" fontFamily="system-ui, sans-serif">Notes</text>
            <text x="95" y="178" textAnchor="middle" fill="#64748b" fontSize="6.5" fontFamily="system-ui, sans-serif">CRM Data</text>

            {/* Bullet items */}
            <circle cx="36" cy="198" r="2" fill="#039143" opacity="0.5" />
            <rect x="42" y="196" width="40" height="2.5" rx="1" fill="#cbd5e1" />
            <circle cx="36" cy="209" r="2" fill="#039143" opacity="0.5" />
            <rect x="42" y="207" width="52" height="2.5" rx="1" fill="#cbd5e1" />
            <circle cx="36" cy="220" r="2" fill="#039143" opacity="0.5" />
            <rect x="42" y="218" width="36" height="2.5" rx="1" fill="#cbd5e1" />
            <text x="75" y="240" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="system-ui, sans-serif">Usage, tickets, goals...</text>
          </g>

          {/* ========== ARROW 1: Input -> AI ========== */}
          <g>
            <line x1="138" y1="170" x2="178" y2="170" stroke="#039143" strokeWidth="2" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
            </line>
            <polygon points="176,164 186,170 176,176" fill="#039143">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
            </polygon>
          </g>

          {/* ========== STAGE 2: AI ENGINE ========== */}
          <g>
            {/* Outer glow */}
            <circle cx="240" cy="170" r="62" fill="url(#aiGlow)" stroke="#039143" strokeWidth="1" strokeDasharray="4 3" opacity="0.7">
              <animate attributeName="r" values="62;65;62" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Main circle */}
            <circle cx="240" cy="170" r="46" fill="white" stroke="#039143" strokeWidth="2.5" />

            {/* Neural network nodes */}
            {/* Layer 1 */}
            <circle cx="222" cy="152" r="5" fill="#039143" opacity="0.85" />
            <circle cx="222" cy="170" r="5" fill="#039143" opacity="0.85" />
            <circle cx="222" cy="188" r="5" fill="#039143" opacity="0.85" />

            {/* Layer 2 */}
            <circle cx="244" cy="156" r="4.5" fill="#039143" opacity="0.65" />
            <circle cx="244" cy="175" r="4.5" fill="#039143" opacity="0.65" />

            {/* Layer 3 */}
            <circle cx="262" cy="165" r="5" fill="#039143" opacity="0.85" />

            {/* Connections - Layer 1 to Layer 2 */}
            <line x1="227" y1="152" x2="239" y2="156" stroke="#039143" strokeWidth="1" opacity="0.3" />
            <line x1="227" y1="152" x2="239" y2="175" stroke="#039143" strokeWidth="1" opacity="0.2" />
            <line x1="227" y1="170" x2="239" y2="156" stroke="#039143" strokeWidth="1" opacity="0.2" />
            <line x1="227" y1="170" x2="239" y2="175" stroke="#039143" strokeWidth="1" opacity="0.3" />
            <line x1="227" y1="188" x2="239" y2="156" stroke="#039143" strokeWidth="1" opacity="0.15" />
            <line x1="227" y1="188" x2="239" y2="175" stroke="#039143" strokeWidth="1" opacity="0.3" />

            {/* Connections - Layer 2 to Layer 3 */}
            <line x1="249" y1="156" x2="257" y2="165" stroke="#039143" strokeWidth="1" opacity="0.3" />
            <line x1="249" y1="175" x2="257" y2="165" stroke="#039143" strokeWidth="1" opacity="0.3" />

            {/* Pulse animation on output node */}
            <circle cx="262" cy="165" r="5" fill="none" stroke="#039143" strokeWidth="1" opacity="0">
              <animate attributeName="r" values="5;10;5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Label */}
            <text x="240" y="228" textAnchor="middle" fill="#022610" fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">AI Engine</text>
            <text x="240" y="241" textAnchor="middle" fill="#6b8575" fontSize="7" fontWeight="500" fontFamily="system-ui, sans-serif">RetainSure</text>
          </g>

          {/* ========== ARROW 2: AI -> Outputs (3 branches) ========== */}
          <g>
            {/* Top branch -> QBR */}
            <path d="M286 158 C310 158, 310 80, 340 80" fill="none" stroke="#039143" strokeWidth="2" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
            </path>
            <polygon points="338,74 348,80 338,86" fill="#039143">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
            </polygon>

            {/* Middle branch -> Churn */}
            <line x1="286" y1="170" x2="340" y2="170" stroke="#039143" strokeWidth="2" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
            </line>
            <polygon points="338,164 348,170 338,176" fill="#039143">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
            </polygon>

            {/* Bottom branch -> Upsell */}
            <path d="M286 182 C310 182, 310 260, 340 260" fill="none" stroke="#039143" strokeWidth="2" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
            </path>
            <polygon points="338,254 348,260 338,266" fill="#039143">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
            </polygon>
          </g>

          {/* ========== OUTPUT 1: QBR Deck ========== */}
          <g>
            <rect x="350" y="30" width="150" height="100" rx="8" fill="white" stroke="#d1d5db" strokeWidth="1.2" filter="url(#cardShadow)" />
            <rect x="350" y="30" width="150" height="26" rx="8" fill="url(#greenGrad)" />
            <rect x="350" y="48" width="150" height="8" fill="url(#greenGrad)" />

            {/* Icon */}
            <rect x="362" y="37" width="14" height="14" rx="3" fill="white" opacity="0.25" />
            <rect x="365" y="40" width="8" height="2" rx="1" fill="white" opacity="0.7" />
            <rect x="365" y="44" width="5" height="2" rx="1" fill="white" opacity="0.7" />
            <rect x="365" y="48" width="7" height="2" rx="1" fill="white" opacity="0.7" />

            <text x="385" y="47" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">QBR Deck</text>

            {/* Mini bar chart */}
            <rect x="362" y="88" width="8" height="20" rx="1.5" fill="#039143" opacity="0.3" />
            <rect x="374" y="80" width="8" height="28" rx="1.5" fill="#039143" opacity="0.5" />
            <rect x="386" y="72" width="8" height="36" rx="1.5" fill="#039143" opacity="0.7" />
            <rect x="398" y="66" width="8" height="42" rx="1.5" fill="#039143" />
            <line x1="362" y1="108" x2="406" y2="108" stroke="#e5e7eb" strokeWidth="0.5" />

            {/* KPI boxes */}
            <rect x="420" y="64" width="68" height="18" rx="3" fill="#edfcf2" />
            <text x="454" y="76" textAnchor="middle" fill="#039143" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">Health: 94%</text>
            <rect x="420" y="86" width="68" height="18" rx="3" fill="#edfcf2" />
            <text x="454" y="98" textAnchor="middle" fill="#039143" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">NPS: +62</text>

            {/* Text lines */}
            <rect x="362" y="116" width="80" height="3" rx="1.5" fill="#e5e7eb" />
            <rect x="362" y="122" width="55" height="2.5" rx="1" fill="#f1f5f9" />
          </g>

          {/* ========== OUTPUT 2: Churn Insights ========== */}
          <g>
            <rect x="350" y="140" width="150" height="60" rx="8" fill="white" stroke="#d1d5db" strokeWidth="1.2" filter="url(#cardShadow)" />
            <rect x="350" y="140" width="150" height="26" rx="8" fill="url(#churnGrad)" />
            <rect x="350" y="158" width="150" height="8" fill="url(#churnGrad)" />

            {/* Warning icon */}
            <path d="M369 38 L363 48 L375 48Z" transform="translate(0, 104)" fill="none" stroke="white" strokeWidth="1.2" opacity="0.9" />
            <line x1="369" y1="145" x2="369" y2="149" stroke="white" strokeWidth="1.2" opacity="0.9" />
            <circle cx="369" cy="151" r="0.8" fill="white" opacity="0.9" />

            <text x="381" y="157" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Churn Insights</text>

            {/* Risk indicators */}
            <circle cx="366" cy="178" r="3.5" fill="#fef2f2" stroke="#dc2626" strokeWidth="0.8" />
            <text x="366" y="180.5" textAnchor="middle" fill="#dc2626" fontSize="5" fontWeight="800" fontFamily="system-ui, sans-serif">!</text>
            <rect x="375" y="176" width="58" height="2.5" rx="1" fill="#fecaca" />
            <text x="442" y="180" fill="#dc2626" fontSize="6.5" fontWeight="600" fontFamily="system-ui, sans-serif">High</text>

            <circle cx="366" cy="190" r="3.5" fill="#fefce8" stroke="#d97706" strokeWidth="0.8" />
            <text x="366" y="192.5" textAnchor="middle" fill="#d97706" fontSize="5" fontWeight="800" fontFamily="system-ui, sans-serif">~</text>
            <rect x="375" y="188" width="44" height="2.5" rx="1" fill="#fef3c7" />
            <text x="442" y="192" fill="#d97706" fontSize="6.5" fontWeight="600" fontFamily="system-ui, sans-serif">Med</text>
          </g>

          {/* ========== OUTPUT 3: Upsell Insights ========== */}
          <g>
            <rect x="350" y="210" width="150" height="100" rx="8" fill="white" stroke="#d1d5db" strokeWidth="1.2" filter="url(#cardShadow)" />
            <rect x="350" y="210" width="150" height="26" rx="8" fill="url(#upsellGrad)" />
            <rect x="350" y="228" width="150" height="8" fill="url(#upsellGrad)" />

            {/* Dollar icon */}
            <circle cx="368" cy="223" r="7" fill="white" opacity="0.25" />
            <text x="368" y="227" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">$</text>

            <text x="381" y="227" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Upsell Insights</text>

            {/* Opportunity cards */}
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

          {/* ========== Sparkle accents ========== */}
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

          {/* ========== Stage labels at bottom ========== */}
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

export default QbrIllustration;
