'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] text-left">
      <div className="site-container">
        <div className="max-w-3xl space-y-5">
          <div className="text-xs font-mono uppercase text-[#FF8A00] tracking-wider font-semibold">
            GET STARTED
          </div>

          <h2 className="section-headline text-[var(--text-primary)] uppercase">
            Ready to grow your trading community?
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
            Submit your channel for editorial review and connect with promotional opportunities designed to help quality trading channels reach dedicated market participants.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/apply"
              className="btn-primary btn-touch px-7 py-3.5 text-sm font-bold flex items-center justify-center gap-2"
            >
              <span>Apply for Promotion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/track"
              className="btn-secondary btn-touch px-6 py-3.5 text-sm font-semibold flex items-center justify-center gap-2 text-center"
            >
              <Search className="w-3.5 h-3.5 text-[#FF8A00]" />
              <span>Track Existing Application</span>
            </Link>
          </div>

          <div className="pt-4 text-xs font-mono text-[var(--text-muted)] flex flex-wrap items-center gap-4">
            <span>• 100% Manual Review</span>
            <span>• Strict Anti-Scam Standard</span>
            <span>• Live Reference ID Tracking</span>
          </div>
        </div>
      </div>
    </section>
  );
}
