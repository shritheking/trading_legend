'use client';

import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, ShieldCheck, HelpCircle } from 'lucide-react';

interface ChannelRequirementsProps {
  requirements?: string[];
}

export function ChannelRequirementsSection({ requirements }: ChannelRequirementsProps) {
  const defaultRequirements = [
    {
      title: 'Trading & Financial Relevance',
      desc: 'Channels must be directly relevant to trading, technical analysis, macroeconomic commentary, or financial education.',
      accepted: true,
    },
    {
      title: 'Manual Verification Standard',
      desc: 'Every application undergoes thorough manual evaluation by our desk. No automated or instant approvals.',
      accepted: true,
    },
    {
      title: 'Strict Ban on Misleading Profit Claims',
      desc: 'Channels promising guaranteed returns, unrealistic win rates (e.g. 100% no loss), or deceptive PnL statements are prohibited.',
      accepted: false,
    },
    {
      title: 'Zero Tolerance for Fraud & Pump Schemes',
      desc: 'Scam-related content, pump-and-dump operations, illicit recovery services, and unregulated schemes are strictly rejected.',
      accepted: false,
    },
    {
      title: 'Approval Is Never Guaranteed',
      desc: 'Submission of an application does not imply acceptance. We preserve editorial discretion over all network placements.',
      accepted: true,
    },
    {
      title: 'Weekly Slot Capacity Limits',
      desc: 'Promotion availability is capped weekly to avoid audience broadcast fatigue and sustain peak response rates.',
      accepted: true,
    },
  ];

  return (
    <section id="channel-requirements" className="py-20 lg:py-28 bg-[#161616] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-mono text-[#FFB000] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
            COMPLIANCE & INTEGRITY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            CHANNEL STANDARDS & ELIGIBILITY
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A3A3A3]">
            To protect our community members and uphold ecosystem trust, all channels must adhere to our strict editorial baseline.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {defaultRequirements.map((req, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#202020] border border-[#303030] hover:border-[#404040] transition-colors flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {req.accepted ? (
                    <div className="h-9 w-9 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="h-9 w-9 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center text-[#EF4444]">
                      <XCircle className="w-5 h-5" />
                    </div>
                  )}

                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#777777]">
                    Policy 0{i + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                  {req.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  {req.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#2b2b2b] flex items-center gap-1.5 text-[11px] font-mono text-[#888888]">
                <span>Status:</span>
                <span className={req.accepted ? 'text-[#22C55E] font-medium' : 'text-[#EF4444] font-medium'}>
                  {req.accepted ? 'Enforced' : 'Strictly Prohibited'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice alert box */}
        <div className="mt-12 p-5 rounded-2xl bg-[#191919] border border-[#F07800]/30 max-w-3xl mx-auto flex items-start gap-3.5">
          <AlertTriangle className="w-5 h-5 text-[#F07800] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
            <span className="text-white font-semibold">Important Review Disclosure: </span>
            Our compliance desk audits historical messaging from the past 6 months. Channels that employ deceptive marketing techniques, buy artificial follower counts, or manipulate view ratios will be permanently blacklisted.
          </div>
        </div>
      </div>
    </section>
  );
}
