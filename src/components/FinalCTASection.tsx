'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Search } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[var(--bg-secondary)] relative overflow-hidden border-t border-[var(--border-subtle)]">
      {/* Background multi-accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF8A00]/10 via-[#8757FF]/8 to-[#24C8E8]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="site-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-7 sm:p-12 lg:p-16 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[#FF8A00] mb-5 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
            <span>APPLICATIONS CURRENTLY OPEN</span>
          </div>

          <h2 className="section-headline text-[var(--text-primary)] uppercase max-w-3xl mx-auto">
            READY TO GROW YOUR TRADING COMMUNITY?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Submit your channel for review and connect with promotional opportunities designed to help quality trading channels reach a wider audience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
            <Link
              href="/apply"
              className="btn-touch gradient-btn-primary px-9 py-4 rounded-xl font-bold text-base tracking-wide flex items-center justify-center gap-2.5 shadow-md hover:shadow-[#FF8A00]/25 transition-all"
            >
              <span>Apply for Promotion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/track"
              className="btn-touch px-7 py-4 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] font-semibold text-sm border border-[var(--border-subtle)] hover:border-[#FF8A00]/50 transition-colors text-center flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-[#24C8E8]" />
              <span>Track Existing Application</span>
            </Link>
          </div>

          <div className="mt-8 text-xs font-mono text-[var(--text-muted)] flex flex-wrap items-center justify-center gap-4">
            <span>• Transparent Criteria</span>
            <span>• Manual Review Desk</span>
            <span>• Live Application Reference ID</span>
          </div>
        </div>
      </div>
    </section>
  );
}
