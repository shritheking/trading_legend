'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Clock, MapPin, Sparkles, Crown, Zap } from 'lucide-react';
import { PromotionPackage } from '@/lib/types';

interface PromotionsSectionProps {
  packages?: PromotionPackage[];
}

export function PromotionsSection({ packages = [] }: PromotionsSectionProps) {
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
      badge: 'Most Popular',
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

  return (
    <section id="promotions" className="py-16 sm:py-24 lg:py-28 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[#FF8A00] mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
            <span>CURATED CAMPAIGN TIERS</span>
          </div>
          <h2 className="section-headline text-[var(--text-primary)] uppercase">
            PROMOTION OPPORTUNITIES
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Every promotional placement is scheduled on a strictly capped calendar to maintain maximum community engagement, post retention, and subscriber quality.
          </p>
        </div>

        {/* 3 Configurable Cards Grid with Distinct Visual Personalities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10 items-stretch">
          {displayPackages.map((pkg, idx) => {
            const isFeatured = pkg.highlighted || idx === 1;
            const isPremium = idx === 2 || pkg.name.toLowerCase().includes('premium');
            const priceLabel = pkg.price ? `$${pkg.price}` : 'Contact for Pricing';

            // Distinctive Tier Themes:
            // 0: Basic (Gold/Amber subtle)
            // 1: Featured (Vibrant Orange & Gold glow)
            // 2: Premium (Purple & Gold elite luxury)
            const themeBorder = isFeatured
              ? 'border-2 border-[#FF8A00] shadow-[0_0_25px_rgba(255,138,0,0.15)] lg:-translate-y-2'
              : isPremium
              ? 'border border-[#8757FF]/40 hover:border-[#8757FF]/80 shadow-xs'
              : 'border border-[var(--border-subtle)] hover:border-[#FFC247]/50 shadow-xs';

            const tierAccentColor = isFeatured
              ? '#FF8A00'
              : isPremium
              ? '#8757FF'
              : '#FFC247';

            const tierIcon = isFeatured ? (
              <Zap className="w-3.5 h-3.5" />
            ) : isPremium ? (
              <Crown className="w-3.5 h-3.5" />
            ) : (
              <Sparkles className="w-3.5 h-3.5" />
            );

            const slotPercentage = Math.round((pkg.availableSlots / (pkg.totalSlots || 1)) * 100);

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 bg-[var(--bg-card)] ${themeBorder}`}
              >
                {/* Top Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-6 sm:left-8">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase shadow-xs ${
                        isFeatured
                          ? 'gradient-btn-primary'
                          : isPremium
                          ? 'bg-[#8757FF] text-white'
                          : 'bg-[var(--bg-secondary)] text-[#FFC247] border border-[var(--border-subtle)]'
                      }`}
                    >
                      {tierIcon}
                      <span>{pkg.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Description */}
                  <div className="mb-5 pt-2">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-[var(--text-primary)] mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed min-h-[40px]">
                      {pkg.shortDescription}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="my-5 p-4 sm:p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                      Tier Pricing
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[var(--text-primary)]">
                        {priceLabel}
                      </span>
                      {pkg.price && (
                        <span className="text-xs font-mono text-[var(--text-secondary)]">/ campaign</span>
                      )}
                    </div>

                    {/* Slot Availability with visual indicator */}
                    <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                        <span>Schedule Allocation</span>
                        <span className="font-semibold" style={{ color: tierAccentColor }}>
                          {pkg.availableSlots} of {pkg.totalSlots} Slots Open
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[var(--border-subtle)] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${slotPercentage}%`,
                            backgroundColor: tierAccentColor,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Key Metadata */}
                  <div className="space-y-2.5 mb-6 text-xs text-[var(--text-secondary)]">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: tierAccentColor }} />
                      <div>
                        <span className="text-[var(--text-primary)] font-medium">Placement: </span>
                        <span>{pkg.placement}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: tierAccentColor }} />
                      <div>
                        <span className="text-[var(--text-primary)] font-medium">Duration: </span>
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mb-6 sm:mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-3">
                      Deliverables Included:
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                      {pkg.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <div
                            className="h-4 w-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{
                              backgroundColor: `${tierAccentColor}22`,
                              color: tierAccentColor,
                            }}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply CTA Button - Mobile-first 48px touch target */}
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    href={`/apply?package=${encodeURIComponent(pkg.name)}`}
                    className={`btn-touch w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${
                      isFeatured
                        ? 'gradient-btn-primary shadow-xs'
                        : isPremium
                        ? 'bg-[#8757FF] hover:bg-[#7847ee] text-white shadow-xs'
                        : 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[#FFC247]/60'
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

        {/* Pricing disclosure note */}
        <div className="mt-10 sm:mt-12 text-center text-xs font-mono text-[var(--text-muted)] max-w-xl mx-auto">
          * Package slots and pricing are dynamically configured through the administration portal. Custom bespoke sponsorships are available upon application review.
        </div>
      </div>
    </section>
  );
}
