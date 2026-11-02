'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#161616] relative overflow-hidden border-t border-[#262626]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#F07800]/15 to-[#FFB000]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="rounded-3xl bg-[#191919] border border-[#303030] p-8 sm:p-14 lg:p-16 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#202020] border border-[#303030] text-xs font-mono text-[#F07800] mb-5">
            <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
            APPLICATIONS NOW OPEN FOR REVIEW
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight uppercase max-w-3xl mx-auto">
            READY TO GROW YOUR TRADING COMMUNITY?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed">
            Submit your channel for review and explore promotional opportunities with Trading Legend.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/apply"
              className="w-full sm:w-auto gradient-btn-primary px-9 py-4 rounded-xl font-bold text-base tracking-wide flex items-center justify-center gap-2.5 shadow-xl hover:shadow-[#F07800]/30 transition-all"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/track"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#202020] hover:bg-[#282828] text-white font-semibold text-sm border border-[#383838] transition-colors text-center"
            >
              Track Existing Application
            </Link>
          </div>

          <div className="mt-8 text-xs font-mono text-[#666666]">
            Transparent criteria • No automated approvals • Strict spam prevention
          </div>
        </div>
      </div>
    </section>
  );
}
