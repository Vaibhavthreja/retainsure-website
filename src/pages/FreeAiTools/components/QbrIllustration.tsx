function QbrIllustration() {
  return (
    <div className="relative w-full max-w-lg">
      <div
        className="absolute inset-0 rounded-2xl opacity-20 blur-2xl"
        style={{ background: 'linear-gradient(135deg, #039143 0%, #027a38 100%)' }}
      />

      <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden p-6">
        <svg
          viewBox="0 0 480 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          role="img"
          aria-label="Illustration of AI generating a Quarterly Business Review"
        >
          {/* Background grid pattern */}
          <defs>
            <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="aiGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#039143" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#039143" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#039143" />
              <stop offset="100%" stopColor="#027a38" />
            </linearGradient>
            <linearGradient id="barGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#039143" />
              <stop offset="100%" stopColor="#04a34d" />
            </linearGradient>
            <linearGradient id="barGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b856" />
              <stop offset="100%" stopColor="#039143" />
            </linearGradient>
          </defs>

          <rect width="480" height="380" fill="url(#grid)" rx="8" />

          {/* AI Brain Node - left side */}
          <g>
            <circle cx="88" cy="190" r="52" fill="url(#aiGlow)" stroke="#039143" strokeWidth="1.5" strokeDasharray="4 3">
              <animate attributeName="r" values="52;54;52" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="88" cy="190" r="36" fill="white" stroke="#039143" strokeWidth="2" />

            {/* Brain circuit lines */}
            <circle cx="78" cy="178" r="4" fill="#039143" opacity="0.9" />
            <circle cx="98" cy="178" r="4" fill="#039143" opacity="0.9" />
            <circle cx="88" cy="195" r="4" fill="#039143" opacity="0.9" />
            <circle cx="75" cy="198" r="3" fill="#039143" opacity="0.6" />
            <circle cx="101" cy="198" r="3" fill="#039143" opacity="0.6" />
            <circle cx="88" cy="175" r="3" fill="#039143" opacity="0.6" />

            <line x1="78" y1="178" x2="98" y2="178" stroke="#039143" strokeWidth="1.5" opacity="0.5" />
            <line x1="78" y1="178" x2="88" y2="195" stroke="#039143" strokeWidth="1.5" opacity="0.5" />
            <line x1="98" y1="178" x2="88" y2="195" stroke="#039143" strokeWidth="1.5" opacity="0.5" />
            <line x1="75" y1="198" x2="88" y2="195" stroke="#039143" strokeWidth="1" opacity="0.35" />
            <line x1="101" y1="198" x2="88" y2="195" stroke="#039143" strokeWidth="1" opacity="0.35" />
            <line x1="88" y1="175" x2="78" y2="178" stroke="#039143" strokeWidth="1" opacity="0.35" />
            <line x1="88" y1="175" x2="98" y2="178" stroke="#039143" strokeWidth="1" opacity="0.35" />

            <text x="88" y="224" textAnchor="middle" fill="#022610" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">AI Engine</text>
          </g>

          {/* Animated data flow lines from AI to QBR */}
          <g opacity="0.6">
            <line x1="140" y1="175" x2="210" y2="100" stroke="#039143" strokeWidth="1.5" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite" />
            </line>
            <line x1="140" y1="190" x2="210" y2="190" stroke="#039143" strokeWidth="1.5" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite" />
            </line>
            <line x1="140" y1="205" x2="210" y2="280" stroke="#039143" strokeWidth="1.5" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite" />
            </line>

            {/* Flow arrows */}
            <polygon points="208,96 214,100 208,104" fill="#039143">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
            </polygon>
            <polygon points="208,186 214,190 208,194" fill="#039143">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
            </polygon>
            <polygon points="208,276 214,280 208,284" fill="#039143">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
            </polygon>
          </g>

          {/* QBR Slide 1 - Top: Executive Summary */}
          <g>
            <rect x="218" y="48" width="130" height="100" rx="6" fill="white" stroke="#d1d5db" strokeWidth="1" />
            <rect x="218" y="48" width="130" height="22" rx="6" fill="url(#greenGrad)" />
            <rect x="218" y="64" width="130" height="6" fill="url(#greenGrad)" />
            <text x="283" y="63" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">EXECUTIVE SUMMARY</text>

            {/* Text lines */}
            <rect x="228" y="80" width="70" height="3" rx="1.5" fill="#d1d5db" />
            <rect x="228" y="88" width="55" height="3" rx="1.5" fill="#e5e7eb" />
            <rect x="228" y="96" width="62" height="3" rx="1.5" fill="#e5e7eb" />

            {/* Mini KPI boxes */}
            <rect x="228" y="108" width="32" height="28" rx="3" fill="#edfcf2" stroke="#bbf0ce" strokeWidth="0.5" />
            <text x="244" y="120" textAnchor="middle" fill="#039143" fontSize="9" fontWeight="800" fontFamily="system-ui, sans-serif">94%</text>
            <text x="244" y="130" textAnchor="middle" fill="#6b8575" fontSize="5" fontFamily="system-ui, sans-serif">Health</text>

            <rect x="266" y="108" width="32" height="28" rx="3" fill="#edfcf2" stroke="#bbf0ce" strokeWidth="0.5" />
            <text x="282" y="120" textAnchor="middle" fill="#039143" fontSize="9" fontWeight="800" fontFamily="system-ui, sans-serif">+12%</text>
            <text x="282" y="130" textAnchor="middle" fill="#6b8575" fontSize="5" fontFamily="system-ui, sans-serif">Growth</text>

            <rect x="304" y="108" width="32" height="28" rx="3" fill="#edfcf2" stroke="#bbf0ce" strokeWidth="0.5" />
            <text x="320" y="120" textAnchor="middle" fill="#039143" fontSize="9" fontWeight="800" fontFamily="system-ui, sans-serif">$48K</text>
            <text x="320" y="130" textAnchor="middle" fill="#6b8575" fontSize="5" fontFamily="system-ui, sans-serif">Upsell</text>
          </g>

          {/* QBR Slide 2 - Middle: Usage Analytics */}
          <g>
            <rect x="218" y="158" width="130" height="100" rx="6" fill="white" stroke="#d1d5db" strokeWidth="1" />
            <rect x="218" y="158" width="130" height="22" rx="6" fill="url(#greenGrad)" />
            <rect x="218" y="174" width="130" height="6" fill="url(#greenGrad)" />
            <text x="283" y="173" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">USAGE ANALYTICS</text>

            {/* Bar chart */}
            <rect x="232" y="224" width="12" height="22" rx="2" fill="url(#barGrad1)" opacity="0.5" />
            <rect x="250" y="214" width="12" height="32" rx="2" fill="url(#barGrad1)" opacity="0.65" />
            <rect x="268" y="207" width="12" height="39" rx="2" fill="url(#barGrad1)" opacity="0.8" />
            <rect x="286" y="198" width="12" height="48" rx="2" fill="url(#barGrad1)" />
            <rect x="304" y="190" width="12" height="56" rx="2" fill="url(#barGrad2)" />
            <rect x="322" y="195" width="12" height="51" rx="2" fill="url(#barGrad1)" opacity="0.9" />

            {/* Trend line overlay */}
            <polyline
              points="238,222 256,212 274,205 292,196 310,188 328,192"
              fill="none"
              stroke="#022610"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.4"
            />

            {/* Axis */}
            <line x1="228" y1="246" x2="338" y2="246" stroke="#d1d5db" strokeWidth="0.5" />
            <text x="238" y="253" textAnchor="middle" fill="#9ca3af" fontSize="5" fontFamily="system-ui, sans-serif">Jul</text>
            <text x="256" y="253" textAnchor="middle" fill="#9ca3af" fontSize="5" fontFamily="system-ui, sans-serif">Aug</text>
            <text x="274" y="253" textAnchor="middle" fill="#9ca3af" fontSize="5" fontFamily="system-ui, sans-serif">Sep</text>
            <text x="292" y="253" textAnchor="middle" fill="#9ca3af" fontSize="5" fontFamily="system-ui, sans-serif">Oct</text>
            <text x="310" y="253" textAnchor="middle" fill="#9ca3af" fontSize="5" fontFamily="system-ui, sans-serif">Nov</text>
            <text x="328" y="253" textAnchor="middle" fill="#9ca3af" fontSize="5" fontFamily="system-ui, sans-serif">Dec</text>
          </g>

          {/* QBR Slide 3 - Bottom: Recommendations */}
          <g>
            <rect x="218" y="268" width="130" height="100" rx="6" fill="white" stroke="#d1d5db" strokeWidth="1" />
            <rect x="218" y="268" width="130" height="22" rx="6" fill="url(#greenGrad)" />
            <rect x="218" y="284" width="130" height="6" fill="url(#greenGrad)" />
            <text x="283" y="283" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">RECOMMENDATIONS</text>

            {/* Checklist items */}
            <rect x="228" y="298" width="10" height="10" rx="2" fill="#edfcf2" stroke="#039143" strokeWidth="0.8" />
            <polyline points="230,303.5 232.5,306 236,300.5" fill="none" stroke="#039143" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="244" y="300" width="60" height="3" rx="1.5" fill="#d1d5db" />
            <rect x="244" y="307" width="42" height="2.5" rx="1.25" fill="#e5e7eb" />

            <rect x="228" y="316" width="10" height="10" rx="2" fill="#edfcf2" stroke="#039143" strokeWidth="0.8" />
            <polyline points="230,321.5 232.5,324 236,318.5" fill="none" stroke="#039143" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="244" y="318" width="52" height="3" rx="1.5" fill="#d1d5db" />
            <rect x="244" y="325" width="38" height="2.5" rx="1.25" fill="#e5e7eb" />

            <rect x="228" y="334" width="10" height="10" rx="2" fill="#edfcf2" stroke="#039143" strokeWidth="0.8" />
            <polyline points="230,339.5 232.5,342 236,336.5" fill="none" stroke="#039143" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="244" y="336" width="66" height="3" rx="1.5" fill="#d1d5db" />
            <rect x="244" y="343" width="44" height="2.5" rx="1.25" fill="#e5e7eb" />

            {/* Priority labels */}
            <rect x="310" y="299" width="28" height="12" rx="6" fill="#fef3c7" />
            <text x="324" y="307.5" textAnchor="middle" fill="#92400e" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif">High</text>

            <rect x="310" y="317" width="28" height="12" rx="6" fill="#edfcf2" />
            <text x="324" y="325.5" textAnchor="middle" fill="#039143" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif">Med</text>

            <rect x="310" y="335" width="28" height="12" rx="6" fill="#fef3c7" />
            <text x="324" y="343.5" textAnchor="middle" fill="#92400e" fontSize="5.5" fontWeight="600" fontFamily="system-ui, sans-serif">High</text>
          </g>

          {/* Sparkle accents around the slides */}
          <g opacity="0.5">
            <path d="M370 75 L373 82 L380 85 L373 88 L370 95 L367 88 L360 85 L367 82Z" fill="#039143">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M380 180 L382 185 L387 187 L382 189 L380 194 L378 189 L373 187 L378 185Z" fill="#039143">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
            </path>
            <path d="M365 310 L367 314 L371 316 L367 318 L365 322 L363 318 L359 316 L363 314Z" fill="#039143">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.2s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Floating data particles */}
          <circle cx="160" cy="130" r="2" fill="#039143" opacity="0.3">
            <animate attributeName="cy" values="130;120;130" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="175" cy="250" r="1.5" fill="#039143" opacity="0.25">
            <animate attributeName="cy" values="250;240;250" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.25;0.5;0.25" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="155" cy="310" r="2" fill="#039143" opacity="0.2">
            <animate attributeName="cy" values="310;300;310" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.5s" repeatCount="indefinite" />
          </circle>

          {/* "QBR" label at bottom center */}
          <rect x="400" y="168" width="60" height="44" rx="8" fill="url(#greenGrad)" opacity="0.95" />
          <text x="430" y="186" textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="system-ui, sans-serif">QBR</text>
          <text x="430" y="200" textAnchor="middle" fill="white" fontSize="6" fontWeight="500" opacity="0.85" fontFamily="system-ui, sans-serif">Auto-Generated</text>
        </svg>
      </div>
    </div>
  );
}

export default QbrIllustration;
