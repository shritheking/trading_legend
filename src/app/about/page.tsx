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
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      <Navbar
        announcement={settings.announcementText}
        announcementActive={settings.announcementActive}
      />
      <main className="flex-grow pt-10">
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
