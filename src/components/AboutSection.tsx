'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Target, Users, Zap, Layers, BarChart2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Editorial Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[#FF8A00] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8757FF]" />
              <span>ABOUT THE PLATFORM</span>
            </div>

            <h2 className="section-headline text-[var(--text-primary)] uppercase">
              ABOUT TRADING LEGEND
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              <p className="text-[var(--text-primary)] font-medium text-lg sm:text-xl leading-relaxed border-l-2 border-[#FF8A00] pl-5 py-1">
                &ldquo;Trading Legend is a trading community-focused platform designed to connect trading-related content creators and Telegram channel owners with promotional opportunities. Our focus is on quality, transparency and meaningful community growth.&rdquo;
              </p>

              <p>
                In a media ecosystem frequently crowded by unsubstantiated claims and noisy channels, Trading Legend provides a structured, high-integrity distribution bridge. We manually audit every applying channel to verify genuine analytical methodology, risk management education, and authentic member engagement.
              </p>

              <p>
                Whether you operate an established macro-economic commentary channel, an order flow technical desk, or a specialized multi-asset community, our platform delivers targeted exposure while safeguarding the credibility of your community.
              </p>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/apply"
                className="btn-touch gradient-btn-primary px-7 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-xs group"
              >
                <span>Submit Your Channel</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/#channel-requirements"
                className="btn-touch px-6 py-3.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] text-sm font-semibold text-[var(--text-primary)] transition-colors text-center"
              >
                Review Channel Standards
              </Link>
            </div>
          </div>

          {/* Right Column: Multi-Color Fintech Ecosystem Architecture Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl sm:rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 shadow-lg relative overflow-hidden">
              {/* Header with official logo icon & ecosystem status */}
              <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-1.5 flex items-center justify-center shrink-0">
                    <Image
                      src="/logo-icon.png"
                      alt="Trading Legend Emblem"
                      width={34}
                      height={34}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-sm sm:text-base text-[var(--text-primary)] uppercase tracking-wide">
                      TRADING LEGEND
                    </div>
                    <div className="text-[11px] font-mono text-[var(--text-muted)]">
                      Vetted Distribution Protocol
                    </div>
                  </div>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#24C8E8]/10 text-[#24C8E8] text-[10px] font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#24C8E8] animate-pulse" />
                  <span>ACTIVE DESK</span>
                </div>
              </div>

              {/* Connected Visual Network Infographic */}
              <div className="py-5 border-b border-[var(--border-subtle)]">
                <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3">
                  Ecosystem Architecture
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <div className="w-7 h-7 mx-auto rounded-lg bg-[#FF8A00]/15 text-[#FF8A00] flex items-center justify-center mb-1.5">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <div className="font-heading font-bold text-xs text-[var(--text-primary)]">Channels</div>
                    <div className="text-[10px] text-[var(--text-muted)] font-mono">100% Vetted</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <div className="w-7 h-7 mx-auto rounded-lg bg-[#8757FF]/15 text-[#8757FF] flex items-center justify-center mb-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div className="font-heading font-bold text-xs text-[var(--text-primary)]">Audit Desk</div>
                    <div className="text-[10px] text-[#8757FF] font-mono">Editorial Gate</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <div className="w-7 h-7 mx-auto rounded-lg bg-[#24C8E8]/15 text-[#24C8E8] flex items-center justify-center mb-1.5">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div className="font-heading font-bold text-xs text-[var(--text-primary)]">Audience</div>
                    <div className="text-[10px] text-[#24C8E8] font-mono">Real Traders</div>
                  </div>
                </div>
              </div>

              {/* Three Color-Accented Operational Tenets */}
              <div className="space-y-4 pt-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FF8A00]/15 flex items-center justify-center shrink-0 text-[#FF8A00]">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-heading font-bold text-[var(--text-primary)] mb-0.5">
                      Curated Audience Alignment
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Broadcasts reach dedicated market participants actively seeking rigorous technical analysis and educational content.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#8757FF]/15 flex items-center justify-center shrink-0 text-[#8757FF]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-heading font-bold text-[var(--text-primary)] mb-0.5">
                      Zero Deceptive Marketing
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Strict exclusion of unrealistic return promises and pump schemes to protect community members and publisher reputation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#24C8E8]/15 flex items-center justify-center shrink-0 text-[#24C8E8]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-heading font-bold text-[var(--text-primary)] mb-0.5">
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
