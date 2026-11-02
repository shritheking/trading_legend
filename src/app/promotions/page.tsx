import React from 'react';
import { db } from '@/lib/db';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PromotionsSection } from '@/components/PromotionsSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default async function PromotionsPage() {
  const [packages, settings] = await Promise.all([
    db.getPackages(),
    db.getSettings(),
  ]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col transition-colors duration-200">
      <Navbar
        announcement={settings.announcementText}
        announcementActive={settings.announcementActive}
      />

      <main className="flex-grow">
        {/* Header */}
        <div className="pt-12 pb-10 sm:pt-16 sm:pb-12 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[#FF8A00] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A00]" />
            <span>PROMOTION ARCHITECTURE</span>
          </div>
          <h1 className="section-headline text-[var(--text-primary)] uppercase">
            Curated Promotional Tiers
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Discover our promotional campaign packages designed for vetted trading educators and communities seeking high-quality, targeted audience discovery.
          </p>
        </div>

        {/* 3 Configurable Cards */}
        <PromotionsSection packages={packages} />

        {/* Deliverables Comparison Matrix */}
        <section className="py-16 sm:py-24">
          <div className="site-container">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="section-headline text-[var(--text-primary)] uppercase">
                Feature & Deliverable Matrix
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5">
                Side-by-side comparison of promotional capabilities across tiers
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm font-sans min-w-[600px]">
                  <thead>
                    <tr className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                      <th className="py-4 px-6 font-mono font-medium">CAMPAIGN DELIVERABLE</th>
                      <th className="py-4 px-6 text-center font-heading font-bold text-[var(--text-primary)]">Basic Promotion</th>
                      <th className="py-4 px-6 text-center font-heading font-bold text-[#FF8A00]">Featured Promotion</th>
                      <th className="py-4 px-6 text-center font-heading font-bold text-[#8757FF]">Premium Promotion</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                    <tr>
                      <td className="py-4 px-6 font-medium text-[var(--text-primary)]">Dedicated Prime Broadcast Posts</td>
                      <td className="py-4 px-6 text-center">1x Post</td>
                      <td className="py-4 px-6 text-center font-semibold text-[#FF8A00]">2x Posts</td>
                      <td className="py-4 px-6 text-center font-semibold text-[#8757FF]">4x Posts</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-[var(--text-primary)]">Pinned Channel Exposure</td>
                      <td className="py-4 px-6 text-center">24 Hours</td>
                      <td className="py-4 px-6 text-center font-semibold text-[#FF8A00]">48 Hours</td>
                      <td className="py-4 px-6 text-center font-semibold text-[#8757FF]">7 Days Continuous</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-[var(--text-primary)]">Permanent Post Retention (No Deletion)</td>
                      <td className="py-4 px-6 text-center text-[var(--text-muted)]">&mdash;</td>
                      <td className="py-4 px-6 text-center text-[var(--text-muted)]">&mdash;</td>
                      <td className="py-4 px-6 text-center text-[#22C55E] font-bold">Included</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-[var(--text-primary)]">Pre-Publish Creative Optimization</td>
                      <td className="py-4 px-6 text-center text-[#22C55E]">Standard</td>
                      <td className="py-4 px-6 text-center text-[#22C55E]">Priority</td>
                      <td className="py-4 px-6 text-center text-[#22C55E] font-bold">Bespoke Design</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-[var(--text-primary)]">Direct Tracking Metrics Summary</td>
                      <td className="py-4 px-6 text-center text-[#22C55E]">Included</td>
                      <td className="py-4 px-6 text-center text-[#22C55E]">Full Analytics</td>
                      <td className="py-4 px-6 text-center text-[#22C55E] font-bold">Comprehensive Audit</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-[var(--text-primary)]">Weekly Network Slot Allocation</td>
                      <td className="py-4 px-6 text-center font-mono">10 Slots Capped</td>
                      <td className="py-4 px-6 text-center font-mono text-[#FF8A00] font-semibold">6 Slots Capped</td>
                      <td className="py-4 px-6 text-center font-mono text-[#8757FF] font-semibold">3 Slots Capped</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTASection />
      </main>

      <Footer
        officialTelegram={settings.officialTelegramUrl}
        communityTelegram={settings.communityTelegramUrl}
      />
    </div>
  );
}
