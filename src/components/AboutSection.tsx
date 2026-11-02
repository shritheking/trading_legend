'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Target, ShieldCheck, Calendar } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
      <div className="site-container">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase text-[#FF8A00] tracking-wider font-semibold">
              ABOUT THE PLATFORM
            </div>
            <h2 className="section-headline text-[var(--text-primary)] uppercase">
              About Trading Legend
            </h2>
          </div>

          {/* Prominent Editorial Mission Statement */}
          <blockquote className="border-l-3 border-[#FF8A00] pl-4 sm:pl-6 py-1 text-base sm:text-xl font-medium text-[var(--text-primary)] leading-relaxed italic">
            &ldquo;Trading Legend is a trading community-focused platform designed to connect trading-related content creators and Telegram channel owners with promotional opportunities. Our focus is on quality, transparency and meaningful community growth.&rdquo;
          </blockquote>

          {/* Narrative Body */}
          <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
            <p>
              In a media ecosystem frequently crowded by unsubstantiated claims and noisy channels, Trading Legend provides a structured, high-integrity distribution bridge. We manually audit every applying channel to verify genuine analytical methodology, risk management education, and authentic member engagement.
            </p>
            <p>
              Whether you operate an established macro-economic commentary channel, an order flow technical desk, or a specialized multi-asset community, our platform delivers targeted exposure while safeguarding the credibility of your community.
            </p>
          </div>

          {/* Structured Credibility Tenets (Editorial Row, not nested cards) */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[var(--border-subtle)]">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold text-sm">
                <Target className="w-4 h-4 text-[#FF8A00]" />
                <span>Audience Alignment</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Reaches active traders seeking rigorous technical commentary and genuine educational substance.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#FF8A00]" />
                <span>Zero Deception</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Strict exclusion of guaranteed return promises, unrealistic win rates, or pump-and-dump operations.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold text-sm">
                <Calendar className="w-4 h-4 text-[#FF8A00]" />
                <span>Capped Broadcasts</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Strict weekly placement limits prevent audience fatigue and preserve high post retention.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/apply"
              className="btn-primary btn-touch px-7 py-3 text-sm font-bold flex items-center justify-center gap-2"
            >
              <span>Submit Your Channel</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#standards"
              className="btn-secondary btn-touch px-6 py-3 text-sm font-semibold text-center"
            >
              Review Channel Standards
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
