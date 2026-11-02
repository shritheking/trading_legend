'use client';

import React from 'react';

export function HeroVisual() {
  return (
    <div className="w-full max-w-[540px] mx-auto select-none">
      <svg
        viewBox="0 0 540 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
        aria-label="Trading Legend Editorial Distribution Architecture"
      >
        <defs>
          <linearGradient id="editorialOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8A00" />
            <stop offset="100%" stopColor="#E67A00" />
          </linearGradient>

          <linearGradient id="editorialGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E7B84B" />
            <stop offset="100%" stopColor="#FF8A00" />
          </linearGradient>

          <pattern id="dotGrid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-[var(--border-subtle)]" opacity="0.6" />
          </pattern>
        </defs>

        {/* Outer Frame with Hairline Border */}
        <rect
          x="4"
          y="4"
          width="532"
          height="372"
          rx="12"
          className="fill-[var(--bg-surface)] stroke-[var(--border-subtle)]"
          strokeWidth="1.2"
        />

        {/* Background Dot Grid */}
        <rect x="8" y="8" width="524" height="364" rx="8" fill="url(#dotGrid)" />

        {/* Header Bar of Diagram */}
        <rect x="4" y="4" width="532" height="42" rx="12" className="fill-[var(--bg-secondary)]" />
        <line x1="4" y1="46" x2="536" y2="46" className="stroke-[var(--border-subtle)]" strokeWidth="1" />

        <circle cx="28" cy="25" r="4" fill="#FF8A00" />
        <circle cx="44" cy="25" r="4" className="fill-[var(--border-strong)]" />
        <circle cx="60" cy="25" r="4" className="fill-[var(--border-strong)]" />

        <text x="80" y="29" className="fill-[var(--text-secondary)]" fontSize="11" fontFamily="monospace" fontWeight="600" letterSpacing="0.05em">
          DISTRIBUTION PROTOCOL • VERIFIED REACH
        </text>

        <rect x="424" y="16" width="96" height="20" rx="4" className="fill-[var(--bg-primary)] stroke-[var(--border-subtle)]" strokeWidth="1" />
        <text x="472" y="30" textAnchor="middle" fill="#FF8A00" fontSize="10" fontFamily="monospace" fontWeight="700">
          TIER-1 DESK
        </text>

        {/* Left Node: Trading Community / Applicant */}
        <g transform="translate(30, 80)">
          <rect
            width="140"
            height="100"
            rx="8"
            className="fill-[var(--bg-primary)] stroke-[var(--border-subtle)]"
            strokeWidth="1.2"
          />
          <rect x="12" y="14" width="24" height="24" rx="4" fill="#FF8A00" opacity="0.12" />
          <path d="M20 26L24 22L28 26M24 22V32" stroke="#FF8A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          
          <text x="44" y="26" className="fill-[var(--text-primary)]" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            Trading Channel
          </text>
          <text x="44" y="38" className="fill-[var(--text-muted)]" fontSize="9" fontFamily="monospace">
            Telegram / Creator
          </text>

          <line x1="12" y1="52" x2="128" y2="52" className="stroke-[var(--border-subtle)]" strokeWidth="1" />

          <text x="12" y="70" className="fill-[var(--text-secondary)]" fontSize="9" fontFamily="monospace">
            • Audit Eligibility
          </text>
          <text x="12" y="86" className="fill-[var(--text-secondary)]" fontSize="9" fontFamily="monospace">
            • Track Record Review
          </text>
        </g>

        {/* Center Node: Trading Legend Editorial Filter */}
        <g transform="translate(200, 70)">
          <rect
            width="140"
            height="120"
            rx="8"
            className="fill-[var(--bg-secondary)] stroke-[#FF8A00]"
            strokeWidth="1.5"
          />
          <rect x="0" y="0" width="140" height="26" rx="8" fill="url(#editorialOrangeGrad)" />
          <text x="70" y="17" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="monospace" letterSpacing="0.05em">
            EDITORIAL AUDIT
          </text>

          <text x="16" y="50" className="fill-[var(--text-primary)]" fontSize="10" fontWeight="700" fontFamily="sans-serif">
            Compliance Desk
          </text>
          <text x="16" y="65" className="fill-[var(--text-muted)]" fontSize="9" fontFamily="sans-serif">
            Zero-hype standard
          </text>

          <line x1="16" y1="75" x2="124" y2="75" className="stroke-[var(--border-subtle)]" strokeWidth="1" />

          <text x="16" y="93" fill="#16A34A" fontSize="9" fontFamily="monospace" fontWeight="600">
            ✓ Content Screened
          </text>
          <text x="16" y="107" fill="#16A34A" fontSize="9" fontFamily="monospace" fontWeight="600">
            ✓ Authentic Members
          </text>
        </g>

        {/* Right Node: Target Audience Network */}
        <g transform="translate(370, 80)">
          <rect
            width="140"
            height="100"
            rx="8"
            className="fill-[var(--bg-primary)] stroke-[var(--border-subtle)]"
            strokeWidth="1.2"
          />
          <rect x="12" y="14" width="24" height="24" rx="4" fill="#E7B84B" opacity="0.15" />
          <path d="M18 30V24M24 30V20M30 30V26" stroke="#E7B84B" strokeWidth="1.8" strokeLinecap="round" />

          <text x="44" y="26" className="fill-[var(--text-primary)]" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            Trader Network
          </text>
          <text x="44" y="38" className="fill-[var(--text-muted)]" fontSize="9" fontFamily="monospace">
            Targeted Audience
          </text>

          <line x1="12" y1="52" x2="128" y2="52" className="stroke-[var(--border-subtle)]" strokeWidth="1" />

          <text x="12" y="70" className="fill-[var(--text-secondary)]" fontSize="9" fontFamily="monospace">
            • Active Market Reach
          </text>
          <text x="12" y="86" className="fill-[var(--text-secondary)]" fontSize="9" fontFamily="monospace">
            • High Post Retention
          </text>
        </g>

        {/* Connecting Flow Lines */}
        <path
          d="M170 130 H200"
          stroke="#FF8A00"
          strokeWidth="1.8"
          strokeDasharray="4 3"
        />
        <polygon points="198,127 204,130 198,133" fill="#FF8A00" />

        <path
          d="M340 130 H370"
          stroke="#FF8A00"
          strokeWidth="1.8"
          strokeDasharray="4 3"
        />
        <polygon points="368,127 374,130 368,133" fill="#FF8A00" />

        {/* Bottom Data & Performance Chart Section */}
        <g transform="translate(30, 220)">
          <rect
            width="480"
            height="130"
            rx="8"
            className="fill-[var(--bg-primary)] stroke-[var(--border-subtle)]"
            strokeWidth="1.2"
          />

          <text x="18" y="28" className="fill-[var(--text-primary)]" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            CAMPAIGN CADENCE & CONTROLLED RETENTION
          </text>
          <text x="462" y="28" textAnchor="end" className="fill-[var(--text-muted)]" fontSize="10" fontFamily="monospace">
            30-DAY METRIC SUMMARY
          </text>

          <line x1="18" y1="40" x2="462" y2="40" className="stroke-[var(--border-subtle)]" strokeWidth="1" />

          {/* Metric 1 */}
          <text x="24" y="68" className="fill-[var(--text-muted)] uppercase" fontSize="9" fontFamily="monospace">
            AVERAGE PIN RETENTION
          </text>
          <text x="24" y="92" className="fill-[var(--text-primary)]" fontSize="18" fontWeight="800" fontFamily="sans-serif">
            48 Hours+
          </text>
          <text x="24" y="112" fill="#16A34A" fontSize="9" fontFamily="monospace" fontWeight="600">
            ↑ Permanent in Premium
          </text>

          {/* Metric 2 */}
          <text x="184" y="68" className="fill-[var(--text-muted)] uppercase" fontSize="9" fontFamily="monospace">
            EDITORIAL AUDIT RATIO
          </text>
          <text x="184" y="92" className="fill-[var(--text-primary)]" fontSize="18" fontWeight="800" fontFamily="sans-serif">
            100% Manual
          </text>
          <text x="184" y="112" className="fill-[var(--text-secondary)]" fontSize="9" fontFamily="monospace">
            Strict Anti-Spam Gate
          </text>

          {/* Metric 3 */}
          <text x="344" y="68" className="fill-[var(--text-muted)] uppercase" fontSize="9" fontFamily="monospace">
            WEEKLY SLOT CAP
          </text>
          <text x="344" y="92" fill="#FF8A00" fontSize="18" fontWeight="800" fontFamily="sans-serif">
            Limited Slots
          </text>
          <text x="344" y="112" className="fill-[var(--text-secondary)]" fontSize="9" fontFamily="monospace">
            Protects Channel Trust
          </text>
        </g>
      </svg>
    </div>
  );
}
