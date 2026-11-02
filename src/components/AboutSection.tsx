'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Users, Shield, ArrowUpRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative background grid line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl bg-[#191919] border border-[#303030] p-6 lg:p-8 shadow-2xl overflow-hidden">
              {/* Background gradient badge */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F07800]/10 rounded-full blur-3xl" />

              {/* Official Brand Logo Mark Showcase */}
              <div className="mb-6 p-4 rounded-xl bg-[#141414] border border-[#2b2b2b] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#202020] border border-[#383838] p-1.5 flex items-center justify-center">
                    <Image
                      src="/logo-icon.png"
                      alt="Trading Legend Logo Mark"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-white font-heading font-bold text-sm tracking-wide">TRADING LEGEND</div>
                    <div className="text-[11px] font-mono text-[#F07800]">VERIFIED PLATFORM</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-[10px] font-mono font-semibold">
                  AUDITED
                </span>
              </div>

              {/* Pillar Items */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#202020] border border-[#303030]/80">
                  <div className="flex items-center gap-3 mb-1">
                    <Target className="w-4 h-4 text-[#F07800]" />
                    <span className="text-sm font-semibold text-white">Targeted Exposure</span>
                  </div>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">
                    Connecting disciplined market educators with relevant traders actively seeking structured market analysis.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#202020] border border-[#303030]/80">
                  <div className="flex items-center gap-3 mb-1">
                    <Shield className="w-4 h-4 text-[#FFB000]" />
                    <span className="text-sm font-semibold text-white">Ethical Standards</span>
                  </div>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">
                    Rigid review filter eliminating sensationalized promises and protecting traders from predatory schemes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#202020] border border-[#303030]/80">
                  <div className="flex items-center gap-3 mb-1">
                    <Users className="w-4 h-4 text-[#22C55E]" />
                    <span className="text-sm font-semibold text-white">Network Governance</span>
                  </div>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">
                    Controlled promotional calendar preventing member saturation and maintaining high post engagement.
                  </p>
                </div>
              </div>

              {/* Bot Architecture Preview */}
              <div className="mt-5 pt-4 border-t border-[#303030] flex items-center justify-between text-xs text-[#777777] font-mono">
                <span>TELEGRAM BOT API READY</span>
                <span className="text-[#FFB000]">v1.0.0</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#303030] text-xs font-mono text-[#F07800]">
              ABOUT THE PLATFORM
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              ABOUT TRADING LEGEND
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
              <p className="text-white font-medium text-lg sm:text-xl leading-relaxed border-l-2 border-[#F07800] pl-4">
                &ldquo;Trading Legend is a trading community-focused platform designed to connect trading-related content creators and Telegram channel owners with promotional opportunities. Our focus is on quality, transparency and meaningful community growth.&rdquo;
              </p>
              <p>
                In an industry frequently clouded by excessive noise and unsubstantiated claims, Trading Legend stands for rigorous curation. We act as a professional bridge between serious trading community owners and targeted promotional distribution across vetted financial channels.
              </p>
              <p>
                Whether you manage an established multi-asset community, a specialized technical analysis channel, or a macro-economic research desk, our promotion workflows are structured to highlight your genuine expertise without compromising on integrity.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/apply"
                className="gradient-btn-primary px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg"
              >
                <span>Submit Your Channel</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/#channel-requirements"
                className="px-5 py-3 rounded-xl bg-[#191919] hover:bg-[#202020] border border-[#303030] text-sm font-medium text-white transition-colors"
              >
                Review Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
