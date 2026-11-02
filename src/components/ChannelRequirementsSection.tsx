'use client';

import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';

interface ChannelRequirementsProps {
  requirements?: string[];
}

export function ChannelRequirementsSection({ requirements }: ChannelRequirementsProps) {
  const standards = [
    {
      title: 'Financial & Market Relevance',
      desc: 'Channels must focus strictly on trading, technical analysis, macroeconomic commentary, or market education.',
      accepted: true,
      code: 'MANDATORY',
    },
    {
      title: 'Rigorous Manual Audit',
      desc: 'Every submission is reviewed manually by our compliance desk. Automated approvals are never granted.',
      accepted: true,
      code: 'ENFORCED',
    },
    {
      title: 'Misleading Profit Claims Prohibited',
      desc: 'Channels promising guaranteed returns, unrealistic win rates (e.g. 100% no-loss signals), or fabricated PnL statements are rejected.',
      accepted: false,
      code: 'BANNED',
    },
    {
      title: 'Zero Tolerance for Fraudulent Content',
      desc: 'Scam-related schemes, pump-and-dump groups, fake recovery services, and illicit investment schemes are strictly banned.',
      accepted: false,
      code: 'PROHIBITED',
    },
    {
      title: 'Approval Not Guaranteed',
      desc: 'Submitting an application does not guarantee acceptance. We preserve full editorial discretion over all placements.',
      accepted: true,
      code: 'DISCRETIONARY',
    },
    {
      title: 'Weekly Slot Capacity Limits',
      desc: 'Broadcast scheduling depends strictly on available calendar slots to prevent community fatigue and maintain impact.',
      accepted: true,
      code: 'SLOT-LIMITED',
    },
  ];

  return (
    <section id="channel-requirements" className="py-16 sm:py-24 lg:py-28 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[#FF8A00] mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8757FF]" />
            <span>COMPLIANCE & INTEGRITY</span>
          </div>
          <h2 className="section-headline text-[var(--text-primary)] uppercase">
            CHANNEL STANDARDS & ELIGIBILITY
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            To protect our community members and uphold ecosystem trust, all channels must adhere to our strict editorial baseline.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {standards.map((req, i) => (
            <div
              key={i}
              className={`p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all flex flex-col justify-between shadow-xs ${
                req.accepted ? 'hover:border-[#22C55E]/40' : 'hover:border-[#EF4444]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {req.accepted ? (
                    <div className="w-9 h-9 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/20 flex items-center justify-center text-[#EF4444]">
                      <XCircle className="w-4 h-4" />
                    </div>
                  )}

                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    Rule 0{i + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-heading font-bold text-[var(--text-primary)] mb-2">
                  {req.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {req.desc}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[var(--text-muted)]">Policy Status</span>
                <span className={req.accepted ? 'text-[#22C55E] font-semibold' : 'text-[#EF4444] font-semibold'}>
                  {req.code}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Disclosure alert */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-[var(--bg-card)] border border-[#FF8A00]/40 max-w-3xl mx-auto flex items-start gap-3.5 shadow-xs">
          <div className="w-8 h-8 rounded-lg bg-[#FF8A00]/15 flex items-center justify-center shrink-0 text-[#FF8A00] mt-0.5">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            <span className="text-[var(--text-primary)] font-semibold">Important Review Disclosure: </span>
            Our compliance desk audits historical messaging across the previous 6 months. Channels that employ deceptive marketing techniques, buy artificial follower counts, or manipulate engagement ratios will be declined without exception.
          </div>
        </div>
      </div>
    </section>
  );
}
