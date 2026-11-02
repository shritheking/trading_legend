'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';
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
      badge: 'Flagship Placement',
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
      badge: 'Multi-Day Campaign',
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
    <section id="promotions" className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs font-mono uppercase text-[#FF8A00] tracking-wider mb-2 font-semibold">
            PROMOTION PACKAGES
          </div>
          <h2 className="section-headline text-[var(--text-primary)] uppercase">
            Curated Promotional Tiers
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Every promotional placement is scheduled on a strictly capped calendar to maintain maximum community engagement, post retention, and subscriber quality.
          </p>
        </div>

        {/* Clear Vertically Stacked Plans on Mobile, Balanced 3-Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {displayPackages.map((pkg, idx) => {
            const isFeatured = pkg.highlighted || idx === 1;
            const priceLabel = pkg.price ? `$${pkg.price}` : 'Contact for Pricing';

            return (
              <div
                key={pkg.id}
                className={`rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all bg-[var(--bg-surface)] ${
                  isFeatured
                    ? 'border-2 border-[#FF8A00] shadow-sm relative'
                    : 'border border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                <div>
                  {/* Top Tier Identity */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-heading font-bold text-lg sm:text-xl text-[var(--text-primary)]">
                      {pkg.name}
                    </span>
                    {pkg.badge && (
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-semibold ${
                          isFeatured
                            ? 'bg-[#FF8A00] text-white'
                            : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                        }`}
                      >
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 min-h-[38px]">
                    {pkg.shortDescription}
                  </p>

                  {/* Price Box */}
                  <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] mb-5">
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
                    <div className="mt-2.5 pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
                      <span className="text-[var(--text-muted)]">Available Slots</span>
                      <span className="text-[#FF8A00] font-semibold">
                        {pkg.availableSlots} of {pkg.totalSlots} Open
                      </span>
                    </div>
                  </div>

                  {/* Metadata Specs */}
                  <div className="space-y-2 mb-5 text-xs text-[var(--text-secondary)]">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#FF8A00] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[var(--text-primary)]">Placement: </span>
                        <span>{pkg.placement}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#FF8A00] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[var(--text-primary)]">Duration: </span>
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mb-6 pt-4 border-t border-[var(--border-subtle)]">
                    <div className="text-xs font-mono uppercase tracking-wider font-bold text-[var(--text-primary)] mb-3">
                      Included Deliverables
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                      {pkg.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Full-width Apply Button on Mobile & Desktop */}
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    href={`/apply?package=${encodeURIComponent(pkg.name)}`}
                    className={`btn-touch w-full py-3.5 px-4 text-center text-sm font-bold flex items-center justify-center gap-2 rounded-lg transition-all ${
                      isFeatured
                        ? 'btn-primary'
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

        {/* Pricing disclosure note */}
        <div className="mt-8 text-xs font-mono text-[var(--text-muted)] text-center max-w-xl mx-auto">
          * Package slots are strictly capped per calendar period to prevent channel saturation. Bespoke multi-channel campaigns are evaluated upon submission.
        </div>
      </div>
    </section>
  );
}
