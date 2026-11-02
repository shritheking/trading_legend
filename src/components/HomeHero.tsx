'use client';

import React from 'react';
import Link from 'next/link';
import { HeroVisual } from './HeroVisual';
import { ArrowRight, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';

interface HomeHeroProps {
  heading?: string;
  subheading?: string;
}

export function HomeHero({
  heading = 'YOUR TRADING COMMUNITY.\nYOUR NEXT GROWTH OPPORTUNITY.',
  subheading = 'Connect your trading community with promotional opportunities designed to help quality trading channels reach a wider audience.',
}: HomeHeroProps) {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#F07800]/10 via-[#FFB000]/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#F07800]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#303030] text-xs font-mono text-[#FFB000]">
              <span className="flex h-2 w-2 rounded-full bg-[#F07800] animate-pulse" />
              <span>OFFICIAL TRADING PROMOTION PLATFORM</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] uppercase whitespace-pre-line">
              {heading}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {subheading}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/#promotions"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#202020] hover:bg-[#282828] text-white font-semibold text-sm border border-[#383838] hover:border-[#F07800]/60 transition-all text-center shadow-lg"
              >
                Explore Promotions
              </Link>

              <Link
                href="/apply"
                className="w-full sm:w-auto gradient-btn-primary px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-xl hover:shadow-[#F07800]/30 transition-all"
              >
                <span>Apply for Promotion</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro trust indicators */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#888888] font-mono border-t border-[#262626]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span>Manual Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFB000]" />
                <span>Strict Anti-Scam Filter</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A3A3A3]" />
                <span>Transparent Tracking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Abstract Trading Visual (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
