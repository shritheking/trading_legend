'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { LegalModal } from './LegalModals';
import { Send, Shield, ArrowUpRight } from 'lucide-react';

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
      <footer className="bg-[var(--bg-card)] border-t border-[var(--border-subtle)] text-[var(--text-secondary)] pt-16 pb-12">
        <div className="site-container">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[var(--border-subtle)]">
            {/* Column 1: Brand & Bio (Spans 2 on lg) */}
            <div className="lg:col-span-2 space-y-4">
              <BrandLogo variant="footer" href="/" />
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm mt-3">
                Trading community-focused platform designed to connect trading-related content creators and Telegram channel owners with promotional opportunities. Quality, transparency and meaningful community growth.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={officialTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] hover:border-[#F07800]/50 text-[var(--text-primary)] text-xs font-medium transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-[#F07800]" />
                  <span>Official Desk</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                </a>

                <a
                  href={communityTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] hover:border-[#F07800]/50 text-[var(--text-primary)] text-xs font-medium transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-[#F07800]" />
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
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-[var(--text-primary)] transition-colors">
                    About Trading Legend
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-[var(--text-primary)] transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#channel-requirements" className="hover:text-[var(--text-primary)] transition-colors">
                    Channel Standards
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-[var(--text-primary)] transition-colors">
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
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/apply" className="hover:text-[var(--text-primary)] transition-colors font-medium text-[#F07800]">
                    Apply for Promotion
                  </Link>
                </li>
                <li>
                  <Link href="/track" className="hover:text-[var(--text-primary)] transition-colors">
                    Track Application Status
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-[var(--text-primary)] transition-colors">
                    Basic Promotion Tier
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-[var(--text-primary)] transition-colors">
                    Featured Promotion Tier
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-[var(--text-primary)] transition-colors">
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
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setModalType('disclaimer')}
                    className="hover:text-[var(--text-primary)] transition-colors text-left text-amber-600 dark:text-amber-500 font-medium"
                  >
                    Risk Disclaimer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalType('terms')}
                    className="hover:text-[var(--text-primary)] transition-colors text-left"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalType('privacy')}
                    className="hover:text-[var(--text-primary)] transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <Link href="/admin" className="hover:text-[var(--text-primary)] transition-colors font-mono text-xs text-[var(--text-muted)]">
                    Admin Terminal
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mandatory Risk Disclaimer Box */}
          <div className="my-8 p-5 sm:p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs leading-relaxed text-[var(--text-secondary)]">
            <div className="flex items-center gap-2 text-[var(--text-primary)] font-mono font-semibold uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4 text-[#F07800]" />
              Official Regulatory & Risk Notice
            </div>
            <p>
              Trading involves significant financial risk. Trading Legend does not guarantee profits or financial returns. Promotional placements do not constitute investment advice or endorsement of trading performance. All promotional partnerships are executed for community discovery and marketing purposes only.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
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
