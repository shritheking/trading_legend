'use client';

import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface ChannelRequirementsProps {
  requirements?: string[];
}

export function ChannelRequirementsSection({ requirements }: ChannelRequirementsProps) {
  const standards = [
    {
      title: 'Financial & Market Relevance',
      desc: 'Channels must focus strictly on trading, technical analysis, macroeconomic commentary, or market education.',
      accepted: true,
    },
    {
      title: 'Rigorous Manual Audit',
      desc: 'Every submission is reviewed manually by our compliance desk. Automated approvals are never granted.',
      accepted: true,
    },
    {
      title: 'Misleading Profit Claims Prohibited',
      desc: 'Channels promising guaranteed returns, unrealistic win rates (e.g. 100% no-loss signals), or fabricated PnL statements are rejected.',
      accepted: false,
    },
    {
      title: 'Zero Tolerance for Fraudulent Content',
      desc: 'Scam-related schemes, pump-and-dump groups, fake recovery services, and illicit investment schemes are strictly banned.',
      accepted: false,
    },
    {
      title: 'Approval Not Guaranteed',
      desc: 'Submitting an application does not guarantee acceptance. We preserve full editorial discretion over all placements.',
      accepted: true,
    },
    {
      title: 'Weekly Slot Capacity Limits',
      desc: 'Broadcast scheduling depends strictly on available calendar slots to prevent community fatigue and maintain impact.',
      accepted: true,
    },
  ];

  return (
    <section id="channel-requirements" className="py-20 sm:py-28 lg:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[#F07800] mb-3">
            COMPLIANCE & INTEGRITY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[var(--text-primary)] tracking-tight uppercase">
            CHANNEL STANDARDS & ELIGIBILITY
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)]">
            To protect our community members and uphold ecosystem trust, all channels must adhere to our strict editorial baseline.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {standards.map((req, i) => (
            <div
              key={i}
              className="p-7 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  {req.accepted ? (
                    <div className="w-9 h-9 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E]">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-xl bg-[#EF4444]/10 flex items-center justify-center text-[#EF4444]">
                      <XCircle className="w-5 h-5" />
                    </div>
                  )}

                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    Standard 0{i + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-heading font-bold text-[var(--text-primary)] mb-2">
                  {req.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {req.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center gap-2 text-[11px] font-mono">
                <span className="text-[var(--text-muted)]">Status:</span>
                <span className={req.accepted ? 'text-[#22C55E] font-medium' : 'text-[#EF4444] font-medium'}>
                  {req.accepted ? 'Mandatory Standard' : 'Strictly Prohibited'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Disclosure alert */}
        <div className="mt-12 p-6 rounded-2xl bg-[var(--bg-card)] border border-[#F07800]/30 max-w-3xl mx-auto flex items-start gap-4 shadow-xs">
          <AlertTriangle className="w-5 h-5 text-[#F07800] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--text-primary)] font-semibold">Important Review Disclosure: </span>
            Our compliance desk examines historical messaging over the past 6 months. Channels that employ deceptive marketing techniques, buy artificial follower counts, or manipulate view ratios will be declined with prejudice.
          </div>
        </div>
      </div>
    </section>
  );
}
