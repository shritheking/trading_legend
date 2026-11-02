import React from 'react';
import { db } from '@/lib/db';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PromotionsSection } from '@/components/PromotionsSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Check, HelpCircle, Shield, Sparkles, Layers, Zap } from 'lucide-react';
import Link from 'next/link';



export default async function PromotionsPage() {
  const [packages, settings] = await Promise.all([
    db.getPackages(),
    db.getSettings(),
  ]);

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      <Navbar
        announcement={settings.announcementText}
        announcementActive={settings.announcementActive}
      />

      <main className="flex-grow">
        {/* Hero header */}
        <div className="pt-16 pb-12 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#303030] text-xs font-mono text-[#F07800] mb-3">
            <Zap className="w-3.5 h-3.5 text-[#FFB000]" />
            PROMOTION ARCHITECTURE
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Curated Promotional Tiers
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#A3A3A3] max-w-2xl mx-auto">
            Discover our promotional campaign packages designed for vetted trading educators and communities seeking high-quality, targeted audience discovery.
          </p>
        </div>

        {/* 3 Configurable Cards */}
        <PromotionsSection packages={packages} />

        {/* Comparison Table */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Feature & Deliverable Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A3A3] mt-1">
              Side-by-side comparison of promotional capabilities
            </p>
          </div>

          <div className="rounded-3xl bg-[#191919] border border-[#303030] overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-sans">
                <thead>
                  <tr className="border-b border-[#2b2b2b] bg-[#141414] text-[#A3A3A3]">
                    <th className="py-4 px-6 font-mono font-medium">CAMPAIGN DELIVERABLE</th>
                    <th className="py-4 px-6 text-center font-heading font-bold text-white">Basic Promotion</th>
                    <th className="py-4 px-6 text-center font-heading font-bold text-[#FFB000]">Featured Promotion</th>
                    <th className="py-4 px-6 text-center font-heading font-bold text-white">Premium Promotion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626] text-[#CCCCCC]">
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Dedicated Prime Broadcast Posts</td>
                    <td className="py-4 px-6 text-center">1x Post</td>
                    <td className="py-4 px-6 text-center font-semibold text-[#FFB000]">2x Posts</td>
                    <td className="py-4 px-6 text-center font-semibold text-white">4x Posts</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Pinned Channel Exposure</td>
                    <td className="py-4 px-6 text-center">24 Hours</td>
                    <td className="py-4 px-6 text-center font-semibold text-[#FFB000]">48 Hours</td>
                    <td className="py-4 px-6 text-center font-semibold text-white">7 Days Continuous</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Permanent Post Retention (No Deletion)</td>
                    <td className="py-4 px-6 text-center text-[#666666]">&mdash;</td>
                    <td className="py-4 px-6 text-center text-[#666666]">&mdash;</td>
                    <td className="py-4 px-6 text-center text-[#22C55E] font-bold">Included</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Pre-Publish Creative Optimization</td>
                    <td className="py-4 px-6 text-center text-[#22C55E]">Standard</td>
                    <td className="py-4 px-6 text-center text-[#22C55E]">Priority</td>
                    <td className="py-4 px-6 text-center text-[#22C55E] font-bold">Bespoke Design</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Direct Tracking Metrics Summary</td>
                    <td className="py-4 px-6 text-center text-[#22C55E]">Included</td>
                    <td className="py-4 px-6 text-center text-[#22C55E]">Full Analytics</td>
                    <td className="py-4 px-6 text-center text-[#22C55E] font-bold">Comprehensive Audit</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">Weekly Network Slot Allocation</td>
                    <td className="py-4 px-6 text-center font-mono">10 Slots Capped</td>
                    <td className="py-4 px-6 text-center font-mono text-[#FFB000]">6 Slots Capped</td>
                    <td className="py-4 px-6 text-center font-mono text-white">3 Slots Capped</td>
                  </tr>
                </tbody>
              </table>
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
