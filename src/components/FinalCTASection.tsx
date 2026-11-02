'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[var(--bg-secondary)] relative overflow-hidden border-t border-[var(--border-subtle)]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F07800]/10 to-[#FFB000]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="site-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-8 sm:p-14 lg:p-16 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[#F07800] mb-6">
            <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
            APPLICATIONS CURRENTLY OPEN
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[var(--text-primary)] tracking-tight leading-tight uppercase max-w-3xl mx-auto">
            READY TO GROW YOUR TRADING COMMUNITY?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Submit your channel for review and explore promotional opportunities with Trading Legend.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/apply"
              className="w-full sm:w-auto gradient-btn-primary px-9 py-4 rounded-xl font-bold text-base tracking-wide flex items-center justify-center gap-2.5 shadow-md hover:shadow-[#F07800]/25 transition-all"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/track"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] font-semibold text-sm border border-[var(--border-subtle)] transition-colors text-center"
            >
              Track Existing Application
            </Link>
          </div>

          <div className="mt-8 text-xs font-mono text-[var(--text-muted)]">
            Transparent criteria • No automated approvals • Strict anti-spam standards
          </div>
        </div>
      </div>
    </section>
  );
}
