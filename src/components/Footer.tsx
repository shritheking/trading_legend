'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { LegalModal } from './LegalModals';
import { Send, Shield, ArrowUpRight, Lock } from 'lucide-react';

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
      <footer className="bg-[var(--bg-card)] border-t border-[var(--border-subtle)] text-[var(--text-secondary)] pt-14 pb-10">
        <div className="site-container">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-10 border-b border-[var(--border-subtle)]">
            {/* Column 1: Brand & Bio (Spans 2 on lg) */}
            <div className="lg:col-span-2 space-y-4">
              <BrandLogo variant="footer" href="/" />
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm mt-2">
                Trading community-focused platform designed to connect trading-related content creators and Telegram channel owners with promotional opportunities. Quality, transparency and meaningful community growth.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <a
                  href={officialTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-touch inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] hover:border-[#24C8E8]/60 text-[var(--text-primary)] text-xs font-medium transition-all shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-[#24C8E8]" />
                  <span>Official Desk</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                </a>

                <a
                  href={communityTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-touch inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] hover:border-[#8757FF]/60 text-[var(--text-primary)] text-xs font-medium transition-all shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-[#8757FF]" />
                  <span>Community Channel</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-wider text-[var(--text-primary)] uppercase">
                Platform Navigation
              </h3>
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
                  <Link href="/#how-it-works" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#channel-requirements" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    Channel Standards
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-[var(--text-primary)] transition-colors py-1 inline-block">
                    Contact & Inquiry
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Promotions & Tracking */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-wider text-[var(--text-primary)] uppercase">
                Campaigns & Tracking
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/apply" className="hover:text-[#FF8A00] transition-colors font-semibold text-[#FF8A00] py-1 inline-block">
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

            {/* Column 4: Compliance & Legal */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-wider text-[var(--text-primary)] uppercase">
                Compliance & Legal
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button
                    onClick={() => setModalType('disclaimer')}
                    className="hover:text-[var(--text-primary)] transition-colors text-left text-amber-500 font-medium py-1"
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

          {/* Mandatory Risk Disclaimer Box */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs leading-relaxed text-[var(--text-secondary)]">
            <div className="flex items-center gap-2 text-[var(--text-primary)] font-mono font-semibold uppercase tracking-wider mb-1.5">
              <Shield className="w-4 h-4 text-[#FF8A00]" />
              <span>Official Regulatory & Risk Notice</span>
            </div>
            <p>
              Trading involves significant financial risk. Trading Legend does not guarantee profits or financial returns. Promotional placements do not constitute investment advice or endorsement of trading performance. All promotional partnerships are executed for community discovery and marketing purposes only.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] pt-2">
            <div>
              &copy; 2026 TRADING LEGEND. All rights reserved.
            </div>
            <div className="flex items-center gap-5 sm:gap-6">
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
