'use client';

import React from 'react';
import Link from 'next/link';
import { HeroVisual } from './HeroVisual';
import { ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface HomeHeroProps {
  heading?: string;
  subheading?: string;
}

export function HomeHero({
  heading = 'YOUR TRADING COMMUNITY.\nYOUR NEXT GROWTH OPPORTUNITY.',
  subheading = 'Connect your trading community with promotional opportunities designed to help quality trading channels reach a wider audience.',
}: HomeHeroProps) {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#F07800]/8 via-[#FFB000]/4 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading & CTAs (7 cols on lg/xl) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Elegant Brand Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[var(--badge-text)]">
              <span className="w-2 h-2 rounded-full bg-[#F07800]" />
              <span>OFFICIAL TRADING PROMOTION PLATFORM</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[var(--text-primary)] tracking-tight leading-[1.1] uppercase whitespace-pre-line">
              {heading}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {subheading}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/#promotions"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] font-semibold text-sm border border-[var(--border-subtle)] hover:border-[#F07800]/60 transition-all text-center shadow-xs"
              >
                Explore Promotions
              </Link>

              <Link
                href="/apply"
                className="w-full sm:w-auto gradient-btn-primary px-8 py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-md hover:shadow-[#F07800]/25 transition-all"
              >
                <span>Apply for Promotion</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Editorial Reassurance Bar */}
            <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 text-xs text-[var(--text-muted)] font-mono border-t border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F07800]" />
                <span className="text-[var(--text-secondary)]">Manual Quality Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F07800]" />
                <span className="text-[var(--text-secondary)]">Strict Anti-Scam Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F07800]" />
                <span className="text-[var(--text-secondary)]">Transparent Status Tracking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Abstract Visual (5 cols on lg/xl) */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
