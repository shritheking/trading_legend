'use client';

import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

interface ChannelRequirementsProps {
  requirements?: string[];
}

export function ChannelRequirementsSection({ requirements }: ChannelRequirementsProps) {
  const approvedCriteria = [
    {
      title: 'Market & Trading Relevance',
      desc: 'Channels must focus strictly on financial markets, technical analysis, macroeconomics, or trader education.',
    },
    {
      title: 'Educational Substance & Risk Focus',
      desc: 'Content prioritizing risk management, disciplined execution, and realistic market perspectives.',
    },
    {
      title: 'Authentic Community Engagement',
      desc: 'Genuine subscriber interaction, active discussion groups, and organic view-to-subscriber ratios.',
    },
  ];

  const prohibitedCriteria = [
    {
      title: 'Guaranteed Returns or "No-Loss" Claims',
      desc: 'Any channel claiming 100% win rates, unrealistic profit promises, or fabricated PnL statements is rejected.',
    },
    {
      title: 'Pump-and-Dump & Fraudulent Schemes',
      desc: 'Strict zero-tolerance for speculative manipulation, unlicensed asset pooling, or fake recovery services.',
    },
    {
      title: 'Artificial Metrics & Bot Manipulation',
      desc: 'Submissions with fake views, bought subscribers, or inorganic spikes are automatically declined.',
    },
  ];

  return (
    <section id="standards" className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] scroll-mt-20 sm:scroll-mt-24">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs font-mono uppercase text-[#FF8A00] tracking-wider mb-2 font-semibold">
            EDITORIAL STANDARDS
          </div>
          <h2 className="section-headline text-[var(--text-primary)] uppercase">
            Channel Eligibility & Standards
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            To uphold subscriber trust and protect partner communities, every application is audited against these non-negotiable criteria.
          </p>
        </div>

        {/* Dual-Column Structured Checklist (Clean, readable, no nested cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1: Approved Standards */}
          <div className="space-y-4">
            <div className="pb-3 border-b border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16A34A] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>What We Approve & Encourage</span>
              </span>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">3 CRITERIA</span>
            </div>

            <div className="space-y-4">
              {approvedCriteria.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0 text-xs mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-[var(--text-primary)] mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Prohibited Standards */}
          <div className="space-y-4">
            <div className="pb-3 border-b border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#DC2626] dark:text-[#EF4444] flex items-center gap-1.5">
                <XCircle className="w-4 h-4" />
                <span>Strictly Prohibited & Disqualifying</span>
              </span>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">ZERO TOLERANCE</span>
            </div>

            <div className="space-y-4">
              {prohibitedCriteria.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center shrink-0 text-xs mt-0.5 font-bold">
                    ✕
                  </span>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-[var(--text-primary)] mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Audit Policy Note */}
        <div className="mt-10 p-4 sm:p-5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-start gap-3 text-xs leading-relaxed text-[var(--text-secondary)]">
          <AlertTriangle className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[var(--text-primary)]">Discretionary Review Notice: </span>
            Our compliance desk examines 6 months of historical channel posts and public comment feeds. Submitting an application does not guarantee acceptance. We preserve full editorial discretion over all broadcasts.
          </div>
        </div>
      </div>
    </section>
  );
}
