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
      <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] text-[var(--text-secondary)] pt-12 pb-10">
        <div className="site-container">
          {/* Main Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-[var(--border-subtle)]">
            {/* Col 1: Brand & Overview (Spans 2 on lg) */}
            <div className="lg:col-span-2 space-y-3">
              <BrandLogo variant="footer" href="/" />
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
                Trading community-focused platform designed to connect trading content creators and Telegram channel owners with verified promotional opportunities.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={officialTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[#FF8A00] text-[var(--text-primary)] text-xs font-medium transition-colors"
                >
                  <Send className="w-3 h-3 text-[#FF8A00]" />
                  <span>Official Desk</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                </a>

                <a
                  href={communityTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[#FF8A00] text-[var(--text-primary)] text-xs font-medium transition-colors"
                >
                  <Send className="w-3 h-3 text-[#FF8A00]" />
                  <span>Community Channel</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
                </a>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold tracking-wider text-[var(--text-primary)] uppercase">
                Platform Navigation
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="hover:text-[var(--text-primary)] transition-colors py-0.5 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-[var(--text-primary)] transition-colors py-0.5 inline-block">
                    About Trading Legend
                  </Link>
                </li>
                <li>
                  <Link href="/#approach" className="hover:text-[var(--text-primary)] transition-colors py-0.5 inline-block">
                    Platform Approach
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-[var(--text-primary)] transition-colors py-0.5 inline-block">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#standards" className="hover:text-[var(--text-primary)] transition-colors py-0.5 inline-block">
                    Channel Standards
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Campaigns & Tracking */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold tracking-wider text-[var(--text-primary)] uppercase">
                Promotions & Tracking
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li>
                  <Link href="/apply" className="hover:underline font-semibold text-[#FF8A00] py-0.5 inline-block">
                    Apply for Promotion
                  </Link>
                </li>
                <li>
                  <Link href="/track" className="hover:text-[var(--text-primary)] transition-colors py-0.5 inline-block">
                    Track Application Status
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-[var(--text-primary)] transition-colors py-0.5 inline-block">
                    Basic Promotion Tier
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-[var(--text-primary)] transition-colors py-0.5 inline-block">
                    Featured Promotion Tier
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-[var(--text-primary)] transition-colors py-0.5 inline-block">
                    Premium Promotion Tier
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Legal & Compliance */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold tracking-wider text-[var(--text-primary)] uppercase">
                Compliance & Legal
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li>
                  <button
                    onClick={() => setModalType('disclaimer')}
                    className="hover:text-[var(--text-primary)] transition-colors text-left text-amber-600 dark:text-amber-500 font-medium py-0.5"
                  >
                    Risk Disclaimer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalType('terms')}
                    className="hover:text-[var(--text-primary)] transition-colors text-left py-0.5"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalType('privacy')}
                    className="hover:text-[var(--text-primary)] transition-colors text-left py-0.5"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <Link href="/admin" className="hover:text-[var(--text-primary)] transition-colors font-mono text-xs text-[var(--text-muted)] flex items-center gap-1 py-0.5">
                    <Lock className="w-3 h-3" />
                    <span>Admin Terminal</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Regulatory Risk Notice Box (Clean, compact, readable) */}
          <div className="my-6 p-4 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs leading-relaxed text-[var(--text-secondary)]">
            <div className="flex items-center gap-1.5 text-[var(--text-primary)] font-mono font-semibold uppercase tracking-wider mb-1">
              <Shield className="w-3.5 h-3.5 text-[#FF8A00]" />
              <span>Official Regulatory & Risk Notice</span>
            </div>
            <p>
              Trading involves substantial financial risk. Trading Legend does not guarantee profits, performance, or financial returns. Promotional placements do not constitute financial advice or endorsement of trading signals. All promotional broadcasts are executed for channel discovery and educational marketing only.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
            <div>
              &copy; 2026 TRADING LEGEND. All rights reserved.
            </div>
            <div className="flex items-center gap-5">
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
