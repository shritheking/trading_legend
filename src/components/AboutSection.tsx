'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Shield, Target, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Column: Editorial Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[#F07800]">
              ABOUT THE PLATFORM
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[var(--text-primary)] tracking-tight leading-tight uppercase">
              ABOUT TRADING LEGEND
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              <p className="text-[var(--text-primary)] font-medium text-lg sm:text-xl leading-relaxed border-l-2 border-[#F07800] pl-5 py-1">
                &ldquo;Trading Legend is a trading community-focused platform designed to connect trading-related content creators and Telegram channel owners with promotional opportunities. Our focus is on quality, transparency and meaningful community growth.&rdquo;
              </p>

              <p>
                In a media ecosystem frequently crowded by unsubstantiated hype, Trading Legend provides a structured, high-integrity distribution bridge. We manually audit every applying channel to verify genuine educational substance, analytical methodology, and authentic member engagement.
              </p>

              <p>
                Whether you operate an established macro-economic commentary channel, an order flow technical desk, or a specialized multi-asset community, our platform delivers targeted exposure while safeguarding the integrity of your brand.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/apply"
                className="gradient-btn-primary px-7 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-xs"
              >
                <span>Submit Your Channel</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/#channel-requirements"
                className="px-6 py-3.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] text-sm font-semibold text-[var(--text-primary)] transition-colors"
              >
                Review Channel Standards
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Visual (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-8 sm:p-10 shadow-lg relative overflow-hidden">
              {/* Subtle brand mark header */}
              <div className="flex items-center gap-4 pb-6 border-b border-[var(--border-subtle)]">
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-2 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/logo-icon.png"
                    alt="Trading Legend Emblem"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-sm sm:text-base text-[var(--text-primary)] uppercase tracking-wide">
                    TRADING LEGEND
                  </div>
                  <div className="text-[11px] font-mono text-[var(--text-muted)]">
                    Quality-First Financial Media
                  </div>
                </div>
              </div>

              {/* Three Editorial Tenets */}
              <div className="space-y-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#F07800]/10 flex items-center justify-center flex-shrink-0 text-[#F07800]">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-[var(--text-primary)] mb-1">
                      Curated Audience Alignment
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Promotional broadcasts reach dedicated market participants actively seeking rigorous technical analysis and educational content.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#F07800]/10 flex items-center justify-center flex-shrink-0 text-[#F07800]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-[var(--text-primary)] mb-1">
                      Zero Deceptive Marketing
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Strict exclusion of unrealistic return claims and fraudulent schemes to protect community members and publisher reputation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#F07800]/10 flex items-center justify-center flex-shrink-0 text-[#F07800]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-[var(--text-primary)] mb-1">
                      Controlled Broadcast Calendars
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Strict weekly caps on sponsored placements prevent message saturation and preserve peak reader retention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
