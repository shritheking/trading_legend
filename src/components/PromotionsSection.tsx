'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles, Clock, MapPin, Zap } from 'lucide-react';
import { PromotionPackage } from '@/lib/types';

interface PromotionsSectionProps {
  packages?: PromotionPackage[];
}

export function PromotionsSection({ packages = [] }: PromotionsSectionProps) {
  // Fallbacks if not yet loaded from DB
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
    <section id="promotions" className="py-20 lg:py-28 bg-[#141414] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1e1e] border border-[#303030] text-xs font-mono text-[#FFB000] mb-3">
            <Zap className="w-3.5 h-3.5 text-[#F07800]" />
            CURATED CAMPAIGN TIERS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            PROMOTION OPPORTUNITIES
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A3A3A3]">
            Every promotional placement is scheduled on a strictly capped calendar to maintain maximum community engagement and post retention.
          </p>
        </div>

        {/* 3 Configurable Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {displayPackages.map((pkg) => {
            const isFeatured = pkg.highlighted;
            const priceLabel = pkg.price ? `$${pkg.price}` : 'Contact for Pricing';

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#1e1e1e] border-2 border-[#F07800] shadow-2xl shadow-[#F07800]/15 lg:-translate-y-3'
                    : 'bg-[#191919] border border-[#303030] hover:border-[#404040]'
                }`}
              >
                {/* Featured Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-8">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase ${
                        isFeatured
                          ? 'bg-gradient-to-r from-[#F07800] to-[#FFB000] text-black shadow-md'
                          : 'bg-[#2b2b2b] text-[#A3A3A3] border border-[#3a3a3a]'
                      }`}
                    >
                      {isFeatured && <Sparkles className="w-3 h-3" />}
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Description */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed min-h-[40px]">
                      {pkg.shortDescription}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="my-6 p-4 rounded-2xl bg-[#141414] border border-[#2b2b2b]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#777777] mb-1">
                      Tier Pricing
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                        {priceLabel}
                      </span>
                      {pkg.price && (
                        <span className="text-xs font-mono text-[#A3A3A3]">/ campaign</span>
                      )}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-[#A3A3A3] pt-2 border-t border-[#262626]">
                      <span>Slot Allocation</span>
                      <span className="text-[#FFB000] font-semibold">
                        {pkg.availableSlots} of {pkg.totalSlots} Slots Open
                      </span>
                    </div>
                  </div>

                  {/* Key Metadata (Placement & Duration) */}
                  <div className="space-y-2.5 mb-6 text-xs text-[#A3A3A3]">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#F07800] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-medium">Placement: </span>
                        <span>{pkg.placement}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#FFB000] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-medium">Duration: </span>
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
                      Package Deliverables:
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#CCCCCC]">
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
                <div className="pt-4 border-t border-[#2a2a2a]">
                  <Link
                    href={`/apply?package=${encodeURIComponent(pkg.name)}`}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${
                      isFeatured
                        ? 'gradient-btn-primary shadow-lg'
                        : 'bg-[#222222] hover:bg-[#2c2c2c] text-white border border-[#383838]'
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

        {/* Dynamic Pricing Note */}
        <div className="mt-12 text-center text-xs font-mono text-[#777777] max-w-xl mx-auto">
          * Package slots and rates are subject to editorial review and admin schedule capacity. Contact our desk for tailored bespoke multi-week sponsorships.
        </div>
      </div>
    </section>
  );
}
