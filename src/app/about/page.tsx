import React from 'react';
import { db } from '@/lib/db';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutSection } from '@/components/AboutSection';
import { TrustSection } from '@/components/TrustSection';
import { ChannelRequirementsSection } from '@/components/ChannelRequirementsSection';
import { FinalCTASection } from '@/components/FinalCTASection';

export default async function AboutPage() {
  const settings = await db.getSettings();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col transition-colors duration-200">
      <Navbar
        announcement={settings.announcementText}
        announcementActive={settings.announcementActive}
      />
      <main className="flex-grow pt-4">
        <AboutSection />
        <TrustSection pillars={settings.trustPillars} />
        <ChannelRequirementsSection requirements={settings.channelRequirements} />
        <FinalCTASection />
      </main>
      <Footer
        officialTelegram={settings.officialTelegramUrl}
        communityTelegram={settings.communityTelegramUrl}
      />
    </div>
  );
}
