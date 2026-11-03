'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Clock, MapPin, Sparkles, Crown, Shield } from 'lucide-react';
import { PromotionPackage } from '@/lib/types';

interface PromotionsSectionProps {
  packages?: PromotionPackage[];
}

export function PromotionsSection({ packages = [] }: PromotionsSectionProps) {
  const [activeTab, setActiveTab] = useState<number>(1); // Default to Featured (index 1)
  const containerRef = useRef<HTMLDivElement>(null);

  const displayPackages = packages.length > 0 ? packages : [
    {
      id: 'pkg-basic',
      name: 'Basic Promotion',
      badge: 'Standard Reach',
      shortDescription: 'Ideal for established niche trading channels looking for steady, targeted organic reach.',
      placement: 'Official Telegram Channel & Community Feed',
      duration: '24-Hour Pinned Spotlight',
      deliverables: [
        '1x Dedicated custom promotional post',
        '24-Hour pinned post placement',
        'Direct channel referral link with tracked metrics',
        'Pre-publish content compliance review',
        'Basic engagement report summary',
      ],
      price: null,
      currency: 'USD',
      availableSlots: 4,
      totalSlots: 10,
      isActive: true,
      highlighted: false,
    },
    {
      id: 'pkg-featured',
      name: 'Featured Promotion',
      badge: 'Recommended • Flagship Placement',
      shortDescription: 'High-visibility placement across our primary network channels with prioritized scheduling.',
      placement: 'Main Broadcast Channel + Community Spotlight',
      duration: '48-Hour Pinned + 2x Highlights',
      deliverables: [
        '2x Dedicated prime-time promotional posts',
        '48-Hour pinned placement at top of feed',
        'Exclusive weekend community feature bulletin',
        'Custom graphic/creative review & optimization',
        'Detailed post-campaign performance metrics',
        'Priority channel review queue',
      ],
      price: 499,
      currency: 'USD',
      availableSlots: 2,
      totalSlots: 6,
      isActive: true,
      highlighted: true,
    },
    {
      id: 'pkg-premium',
      name: 'Premium Promotion',
      badge: 'Elite Partner Tier',
      shortDescription: 'Comprehensive multi-day campaign with prominent cross-channel exposure for leading communities.',
      placement: 'Full Network Broadcast, Discord & Telegram Network',
      duration: '7-Day Strategic Campaign',
      deliverables: [
        '4x Primetime bespoke promotional posts over 7 days',
        'Permanent post retention (no deletion after pin expiry)',
        'Featured partner badge on Trading Legend directory',
        'Custom interactive poll / AMA introduction format',
        'Dedicated campaign manager & real-time monitoring',
        'Comprehensive analytics & subscriber conversion analysis',
      ],
      price: 1199,
      currency: 'USD',
      availableSlots: 1,
      totalSlots: 3,
      isActive: true,
      highlighted: false,
    },
  ];

  const handleSelectTab = (index: number) => {
    setActiveTab(index);
    if (containerRef.current) {
      const cardWidth = containerRef.current.clientWidth * 0.85;
      containerRef.current.scrollTo({
        left: index * (cardWidth + 16),
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const cardWidth = containerRef.current.clientWidth * 0.85;
      const newIndex = Math.round(scrollLeft / (cardWidth + 16));
      if (newIndex >= 0 && newIndex < displayPackages.length && newIndex !== activeTab) {
        setActiveTab(newIndex);
      }
    }
  };

  return (
    <section id="promotions" className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] scroll-mt-20 sm:scroll-mt-24">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <div className="text-xs font-mono uppercase text-[#FF8A00] tracking-wider mb-2 font-semibold">
            CAMPAIGN PACKAGES
          </div>
          <h2 className="section-headline text-[var(--text-primary)] uppercase">
            Curated Promotional Tiers
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Every promotional placement is scheduled on a strictly capped calendar to maintain maximum community engagement, post retention, and subscriber quality.
          </p>
        </div>

        {/* Mobile Quick Tier Switcher Tab Bar (< lg screens) */}
        <div className="lg:hidden mb-6">
          <div className="p-1 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] grid grid-cols-3 gap-1 shadow-2xs">
            {displayPackages.map((pkg, idx) => {
              const isSelected = activeTab === idx;
              const isFeatured = idx === 1;
              return (
                <button
                  key={pkg.id}
                  onClick={() => handleSelectTab(idx)}
                  className={`py-2 px-2 rounded-lg text-xs font-mono font-medium transition-all text-center truncate ${
                    isSelected
                      ? isFeatured
                        ? 'bg-[#FF8A00] text-white font-bold shadow-xs'
                        : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold border border-[var(--border-subtle)] shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {isFeatured ? '★ ' : ''}
                  {pkg.name.replace(' Promotion', '')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Single-row snap scroll on mobile, 3-column grid on desktop */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar items-stretch"
        >
          {displayPackages.map((pkg, idx) => {
            const isFeatured = pkg.highlighted || idx === 1;
            const isPremium = idx === 2 || pkg.name.toLowerCase().includes('premium');
            const priceLabel = pkg.price ? `$${pkg.price}` : 'Contact for Pricing';

            const tierAccent = isFeatured ? '#FF8A00' : isPremium ? '#8757FF' : '#E7B84B';
            const tierBadgeBg = isFeatured
              ? 'bg-[#FF8A00] text-white shadow-xs'
              : isPremium
              ? 'bg-[#8757FF]/15 text-[#8757FF] border border-[#8757FF]/30'
              : 'bg-[#E7B84B]/15 text-[#E7B84B] border border-[#E7B84B]/30';

            const slotPercent = Math.min(100, Math.round((pkg.availableSlots / (pkg.totalSlots || 1)) * 100));

            return (
              <div
                key={pkg.id}
                className={`w-[85vw] max-w-[340px] sm:w-[360px] lg:w-auto shrink-0 snap-center rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 relative bg-[var(--bg-surface)] ${
                  isFeatured
                    ? 'border-2 border-[#FF8A00] shadow-md lg:-translate-y-2 ring-2 ring-[#FF8A00]/20'
                    : isPremium
                    ? 'border border-[var(--border-subtle)] hover:border-[#8757FF]/60 shadow-xs'
                    : 'border border-[var(--border-subtle)] hover:border-[#E7B84B]/60 shadow-xs'
                }`}
              >
                {/* Top Badge for Featured */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-6 sm:left-7">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#FF8A00] text-white shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      <span>{pkg.badge || 'Most Popular'}</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Bar for non-featured */}
                  {!isFeatured && pkg.badge && (
                    <div className="mb-3">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider ${tierBadgeBg}`}>
                        {isPremium ? <Crown className="w-3 h-3" /> : <Shield className="w-3 h-3" />}
                        <span>{pkg.badge}</span>
                      </span>
                    </div>
                  )}

                  {/* Title & Short Description */}
                  <div className={isFeatured ? 'pt-2 mb-4' : 'mb-4'}>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-[var(--text-primary)] mb-1.5">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed min-h-[38px]">
                      {pkg.shortDescription}
                    </p>
                  </div>

                  {/* Pricing Panel with subtle gradient & slot indicator */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                      Placement Pricing
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[var(--text-primary)]">
                        {priceLabel}
                      </span>
                      {pkg.price && (
                        <span className="text-xs font-mono text-[var(--text-muted)]">/ campaign</span>
                      )}
                    </div>

                    {/* Available Slot Meter */}
                    <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[var(--text-muted)]">Calendar Allocation</span>
                        <span className="font-semibold" style={{ color: tierAccent }}>
                          {pkg.availableSlots} of {pkg.totalSlots} Slots Open
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[var(--border-subtle)] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${slotPercent}%`,
                            backgroundColor: tierAccent,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Placement & Duration Specs */}
                  <div className="space-y-2 mb-5 text-xs text-[var(--text-secondary)]">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: tierAccent }} />
                      <div className="leading-snug">
                        <span className="font-semibold text-[var(--text-primary)]">Placement: </span>
                        <span>{pkg.placement}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: tierAccent }} />
                      <div className="leading-snug">
                        <span className="font-semibold text-[var(--text-primary)]">Duration: </span>
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-[var(--border-subtle)] mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider font-bold text-[var(--text-primary)] mb-3">
                      Included Deliverables:
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                      {pkg.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                            style={{
                              backgroundColor: `${tierAccent}20`,
                              color: tierAccent,
                            }}
                          >
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply CTA Button (Full-width on mobile & desktop) */}
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    href={`/apply?package=${encodeURIComponent(pkg.name)}`}
                    className={`btn-touch w-full py-3.5 px-4 text-center text-sm font-bold flex items-center justify-center gap-2 rounded-xl transition-all ${
                      isFeatured
                        ? 'btn-primary shadow-xs'
                        : isPremium
                        ? 'bg-[#8757FF] hover:bg-[#7847EE] text-white shadow-xs'
                        : 'btn-secondary'
                    }`}
                  >
                    <span>Apply for {pkg.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile dots indicator */}
        <div className="lg:hidden flex items-center justify-center gap-2 mt-4">
          {displayPackages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectTab(idx)}
              className={`h-2 rounded-full transition-all ${
                activeTab === idx ? 'w-6 bg-[#FF8A00]' : 'w-2 bg-[var(--border-subtle)]'
              }`}
              aria-label={`Go to tier ${idx + 1}`}
            />
          ))}
        </div>

        {/* Pricing disclosure note */}
        <div className="mt-8 text-xs font-mono text-[var(--text-muted)] text-center max-w-xl mx-auto">
          * Package slots are strictly capped per calendar period to maintain community trust and high engagement.
        </div>
      </div>
    </section>
  );
}
