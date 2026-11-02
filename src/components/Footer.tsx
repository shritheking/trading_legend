'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { LegalModal } from './LegalModals';
import { Send, Shield, ExternalLink, ArrowUpRight } from 'lucide-react';

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
      <footer className="bg-[#0e0e0e] border-t border-[#262626] text-[#A3A3A3] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#262626]">
            {/* Column 1: Brand & Bio (Spans 2 on lg) */}
            <div className="lg:col-span-2 space-y-4">
              <BrandLogo variant="footer" href="/" />
              <p className="text-sm text-[#A3A3A3] leading-relaxed max-w-sm mt-3">
                Trading community-focused platform designed to connect trading-related content creators and Telegram channel owners with promotional opportunities. Quality, transparency and meaningful community growth.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={officialTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#191919] hover:bg-[#202020] border border-[#303030] hover:border-[#F07800]/50 text-white text-xs font-medium transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-[#F07800]" />
                  <span>Official Desk</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A3A3A3]" />
                </a>

                <a
                  href={communityTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#191919] hover:bg-[#202020] border border-[#303030] hover:border-[#FFB000]/50 text-white text-xs font-medium transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-[#FFB000]" />
                  <span>Community Channel</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A3A3A3]" />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                Platform Navigation
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-white transition-colors">
                    About Trading Legend
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#channel-requirements" className="hover:text-white transition-colors">
                    Channel Standards
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    Contact & Inquiry
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Promotions & Application */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                Campaigns & Tracking
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/apply" className="hover:text-white transition-colors font-medium text-[#F07800]">
                    Apply for Promotion
                  </Link>
                </li>
                <li>
                  <Link href="/track" className="hover:text-white transition-colors">
                    Track Application Status
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-white transition-colors">
                    Basic Promotion Tier
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-white transition-colors">
                    Featured Promotion Tier
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-white transition-colors">
                    Premium Promotion Tier
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Compliance & Legal */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                Compliance & Legal
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setModalType('disclaimer')}
                    className="hover:text-white transition-colors text-left text-amber-500/90"
                  >
                    Risk Disclaimer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalType('terms')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalType('privacy')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <Link href="/admin" className="hover:text-white transition-colors font-mono text-xs text-[#666666]">
                    Admin Terminal
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mandatory Risk Disclaimer Box */}
          <div className="my-8 p-5 rounded-2xl bg-[#141414] border border-[#2b2b2b] text-xs leading-relaxed text-[#8a8a8a]">
            <div className="flex items-center gap-2 text-white font-mono font-semibold uppercase tracking-wider mb-1.5">
              <Shield className="w-4 h-4 text-[#F07800]" />
              Official Regulatory & Risk Notice
            </div>
            <p>
              Trading involves significant financial risk. Trading Legend does not guarantee profits or financial returns. Promotional placements do not constitute investment advice or endorsement of trading performance. All promotional partnerships are executed for community discovery and marketing purposes only.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
            <div>
              &copy; 2026 TRADING LEGEND. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setModalType('disclaimer')}
                className="hover:text-[#A3A3A3] transition-colors"
              >
                Risk Notice
              </button>
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-[#A3A3A3] transition-colors"
              >
                Privacy
              </button>
              <button
                onClick={() => setModalType('terms')}
                className="hover:text-[#A3A3A3] transition-colors"
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
