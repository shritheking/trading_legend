'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Clock, MapPin } from 'lucide-react';
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
    <section id="promotions" className="py-20 sm:py-28 lg:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[#F07800] mb-3">
            CURATED CAMPAIGN TIERS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[var(--text-primary)] tracking-tight uppercase">
            PROMOTION OPPORTUNITIES
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)]">
            Every promotional placement is scheduled on a strictly capped calendar to maintain maximum community engagement and post retention.
          </p>
        </div>

        {/* 3 Configurable Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 items-stretch">
          {displayPackages.map((pkg) => {
            const isFeatured = pkg.highlighted;
            const priceLabel = pkg.price ? `$${pkg.price}` : 'Contact for Pricing';

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-200 ${
                  isFeatured
                    ? 'bg-[var(--bg-card)] border-2 border-[#F07800] shadow-xl lg:-translate-y-2'
                    : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] shadow-xs'
                }`}
              >
                {/* Subtle Featured Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-8">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase ${
                        isFeatured
                          ? 'bg-[#F07800] text-white shadow-xs'
                          : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed min-h-[44px]">
                      {pkg.shortDescription}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="my-6 p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                      Tier Pricing
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-heading font-extrabold text-[var(--text-primary)]">
                        {priceLabel}
                      </span>
                      {pkg.price && (
                        <span className="text-xs font-mono text-[var(--text-secondary)]">/ campaign</span>
                      )}
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs font-mono text-[var(--text-secondary)] pt-3 border-t border-[var(--border-subtle)]">
                      <span>Schedule Allocation</span>
                      <span className="text-[#F07800] font-semibold">
                        {pkg.availableSlots} of {pkg.totalSlots} Slots Open
                      </span>
                    </div>
                  </div>

                  {/* Key Metadata */}
                  <div className="space-y-3 mb-6 text-xs text-[var(--text-secondary)]">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#F07800] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[var(--text-primary)] font-medium">Placement: </span>
                        <span>{pkg.placement}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#F07800] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[var(--text-primary)] font-medium">Duration: </span>
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold mb-3.5">
                      Deliverables Included:
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                      {pkg.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="h-4 w-4 rounded-full bg-[#F07800]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#F07800]" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply CTA Button */}
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    href={`/apply?package=${encodeURIComponent(pkg.name)}`}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${
                      isFeatured
                        ? 'gradient-btn-primary shadow-xs'
                        : 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[#F07800]/50'
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
        <div className="mt-12 text-center text-xs font-mono text-[var(--text-muted)] max-w-xl mx-auto">
          * Package slots and pricing are dynamically configured through the administration portal. Custom bespoke sponsorships are available upon application review.
        </div>
      </div>
    </section>
  );
}
