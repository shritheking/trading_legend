'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { LegalModal } from './LegalModals';
import { Send, Shield, ArrowUpRight, Lock, Mail } from 'lucide-react';

interface FooterProps {
  officialTelegram?: string;
  communityTelegram?: string;
}

export function Footer({
  officialTelegram = 'https://t.me/TradingLegend_Official',
  communityTelegram = 'https://t.me/TradingLegend_Community',
}: FooterProps) {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  return (
    <>
      <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] text-[var(--text-secondary)] pt-14 pb-12 transition-colors duration-200">
        <div className="site-container">
          {/* Main Footer Layout: Multi-column on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[var(--border-subtle)]">
            {/* Brand Area (Spans 4 on lg) */}
            <div className="lg:col-span-4 space-y-4">
              <BrandLogo variant="footer" href="/" />
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
                Trading community-focused platform connecting market analysis creators and Telegram channel owners with verified promotional opportunities. Dedicated to educational substance and subscriber protection.
              </p>

              {/* Direct Telegram Action Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={officialTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-touch inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#24C8E8] text-[var(--text-primary)] text-xs font-medium transition-colors shadow-2xs"
                >
                  <Send className="w-3.5 h-3.5 text-[#24C8E8]" />
                  <span>Review Desk</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                </a>

                <a
                  href={communityTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-touch inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#8757FF] text-[var(--text-primary)] text-xs font-medium transition-colors shadow-2xs"
                >
                  <Send className="w-3.5 h-3.5 text-[#8757FF]" />
                  <span>Community Channel</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                </a>
              </div>
            </div>

            {/* Column 2: Platform Navigation (Spans 3 on lg) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider text-[var(--text-primary)] uppercase">
                Platform Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    About Trading Legend
                  </Link>
                </li>
                <li>
                  <Link href="/#approach" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    Platform Approach
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#standards" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    Channel Eligibility & Standards
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    Direct Contact & Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Promotions & Tracking (Spans 3 on lg) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider text-[var(--text-primary)] uppercase">
                Campaigns & Tracking
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/apply" className="hover:underline font-semibold text-[#FF8A00] py-1 inline-block">
                    Apply for Promotion
                  </Link>
                </li>
                <li>
                  <Link href="/track" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    Track Application Status
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    Basic Promotion Tier
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    Featured Promotion Tier
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    Premium Promotion Tier
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Compliance & Legal (Spans 2 on lg) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider text-[var(--text-primary)] uppercase">
                Compliance & Admin
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button
                    onClick={() => setModalType('disclaimer')}
                    className="hover:text-[var(--text-primary)] transition-colors text-left text-amber-600 dark:text-amber-500 font-medium py-1"
                  >
                    Risk Disclaimer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalType('terms')}
                    className="hover:text-[var(--text-primary)] transition-colors text-left py-1"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalType('privacy')}
                    className="hover:text-[var(--text-primary)] transition-colors text-left py-1"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <Link href="/admin" className="hover:text-[var(--text-primary)] transition-colors font-mono text-xs text-[var(--text-muted)] flex items-center gap-1.5 py-1">
                    <Lock className="w-3 h-3" />
                    <span>Admin Terminal</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mandatory Risk Notice Box (Readable & clear) */}
          <div className="my-6 p-4 sm:p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs leading-relaxed text-[var(--text-secondary)]">
            <div className="flex items-center gap-1.5 text-[var(--text-primary)] font-mono font-semibold uppercase tracking-wider mb-1.5">
              <Shield className="w-3.5 h-3.5 text-[#FF8A00]" />
              <span>Official Regulatory & Risk Notice</span>
            </div>
            <p>
              Trading involves substantial financial risk. Trading Legend does not guarantee profits, performance, or financial returns. Promotional placements do not constitute financial advice or endorsement of trading performance. All promotional partnerships are executed for community discovery and marketing purposes only.
            </p>
          </div>

          {/* Bottom Bar: Copyright and quick policy links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] pt-2">
            <div>
              &copy; 2026 TRADING LEGEND. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setModalType('disclaimer')}
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                Risk Notice
              </button>
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                Privacy
              </button>
              <button
                onClick={() => setModalType('terms')}
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Dialog */}
      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </>
  );
}
