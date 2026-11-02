'use client';

import React from 'react';
import Link from 'next/link';
import { HeroVisual } from './HeroVisual';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, TrendingUp, Compass } from 'lucide-react';

interface HomeHeroProps {
  heading?: string;
  subheading?: string;
}

export function HomeHero({
  heading = 'YOUR TRADING COMMUNITY.\nYOUR NEXT GROWTH OPPORTUNITY.',
  subheading = 'Connect your trading community with promotional opportunities designed to help quality trading channels reach a wider audience.',
}: HomeHeroProps) {
  return (
    <section className="relative pt-8 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Multi-layered atmospheric lighting: subtle orange, purple and cyan glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF8A00]/10 via-[#8757FF]/8 to-[#24C8E8]/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#24C8E8]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* Left Column: Heading & CTAs (7 cols on lg/xl) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Elegant multi-accent brand tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[var(--badge-text)] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse" />
              <span className="tracking-wide">VETTED TRADING PROMOTION PLATFORM</span>
              <span className="text-[#8757FF] font-semibold hidden xs:inline">• TIER-1 NETWORK</span>
            </div>

            {/* Main Headline with clamp scaling */}
            <h1 className="hero-headline text-[var(--text-primary)] uppercase whitespace-pre-line">
              {heading}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {subheading}
            </p>

            {/* Primary & Secondary CTAs - Mobile-first stacked layout with 48px touch targets */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
              <Link
                href="/#promotions"
                className="btn-touch px-7 py-3.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] font-semibold text-sm border border-[var(--border-subtle)] hover:border-[#FF8A00]/60 transition-all text-center shadow-xs flex items-center justify-center gap-2 group"
              >
                <Compass className="w-4 h-4 text-[#FF8A00] group-hover:rotate-45 transition-transform" />
                <span>Explore Promotions</span>
              </Link>

              <Link
                href="/apply"
                className="btn-touch gradient-btn-primary px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-md hover:shadow-[#FF8A00]/25 transition-all"
              >
                <span>Apply for Promotion</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Editorial Reassurance Bar with distinctive colored icons */}
            <div className="pt-6 sm:pt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-[var(--border-subtle)]">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono">
                <div className="w-5 h-5 rounded-md bg-[#8757FF]/15 flex items-center justify-center text-[#8757FF] shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-[var(--text-secondary)]">Manual Audit Standards</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono">
                <div className="w-5 h-5 rounded-md bg-[#24C8E8]/15 flex items-center justify-center text-[#24C8E8] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-[var(--text-secondary)]">Verified Channels Only</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono">
                <div className="w-5 h-5 rounded-md bg-[#FF8A00]/15 flex items-center justify-center text-[#FF8A00] shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span className="text-[var(--text-secondary)]">Live Application Tracking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic SVG Fintech Visualization */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
