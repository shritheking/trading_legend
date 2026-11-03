'use client';

import React from 'react';
import Link from 'next/link';
import { HeroVisual } from './HeroVisual';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HomeHeroProps {
  heading?: string;
  subheading?: string;
}

export function HomeHero({
  heading = 'YOUR TRADING COMMUNITY.\nYOUR NEXT GROWTH OPPORTUNITY.',
  subheading = 'Connect your trading community with promotional opportunities designed to help quality trading channels reach a wider audience.',
}: HomeHeroProps) {
  return (
    <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading, Subheading & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Controlled Editorial Headline */}
            <h1 className="hero-headline text-[var(--text-primary)] uppercase whitespace-pre-line">
              {heading}
            </h1>

            {/* Concise Supporting Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl font-normal">
              {subheading}
            </p>

            {/* CTAs: Stacked full-width on mobile (320px–430px), side-by-side on tablet/desktop */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/apply"
                className="btn-primary btn-touch px-7 py-3.5 text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Apply for Promotion</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/#promotions"
                className="btn-secondary btn-touch px-6 py-3.5 text-sm font-semibold text-center"
              >
                Explore Promotions
              </Link>
            </div>

            {/* Clean Editorial Trust Strip */}
            <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-3 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
              <div>
                <span className="block font-bold text-[var(--text-primary)]">100%</span>
                <span className="text-[11px] text-[var(--text-muted)]">Manual Review</span>
              </div>
              <div>
                <span className="block font-bold text-[var(--text-primary)]">Zero</span>
                <span className="text-[11px] text-[var(--text-muted)]">Deceptive Hype</span>
              </div>
              <div>
                <span className="block font-bold text-[var(--text-primary)]">Live</span>
                <span className="text-[11px] text-[var(--text-muted)]">Status Tracking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Editorial Diagram (5 cols on lg) */}
          <div className="lg:col-span-5 w-full flex justify-center pt-4 lg:pt-0">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
