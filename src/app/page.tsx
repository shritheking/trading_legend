import React from 'react';
import { db } from '@/lib/db';
import { Navbar } from '@/components/Navbar';
import { HomeHero } from '@/components/HomeHero';
import { TrustSection } from '@/components/TrustSection';
import { AboutSection } from '@/components/AboutSection';
import { PromotionsSection } from '@/components/PromotionsSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { ChannelRequirementsSection } from '@/components/ChannelRequirementsSection';
import { ContactSection } from '@/components/ContactSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Footer } from '@/components/Footer';

export default async function HomePage() {
  const [packages, settings] = await Promise.all([
    db.getPackages(),
    db.getSettings(),
  ]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col transition-colors duration-200">
      {/* Responsive Navbar with Theme Selector */}
      <Navbar
        announcement={settings.announcementText}
        announcementActive={settings.announcementActive}
      />

      <main className="flex-grow">
        {/* Refined Hero Section with Authentic Community Topology */}
        <HomeHero
          heading={settings.heroHeading}
          subheading={settings.heroSubheading}
        />

        {/* Asymmetrical Editorial Trust Section */}
        <TrustSection pillars={settings.trustPillars} />

        {/* Editorial About Section */}
        <AboutSection />

        {/* Promotions Tier Cards */}
        <PromotionsSection packages={packages} />

        {/* Clean Process Timeline */}
        <HowItWorksSection />

        {/* Strict Channel Standards */}
        <ChannelRequirementsSection requirements={settings.channelRequirements} />

        {/* Direct Contact & Business Inquiry */}
        <ContactSection
          officialTelegram={settings.officialTelegramUrl}
          communityTelegram={settings.communityTelegramUrl}
          supportEmail={settings.supportEmail}
          businessInquiryEmail={settings.businessInquiryEmail}
        />

        {/* Final Call to Action */}
        <FinalCTASection />
      </main>

      {/* Brand Footer with Mandatory Risk Disclaimer */}
      <Footer
        officialTelegram={settings.officialTelegramUrl}
        communityTelegram={settings.communityTelegramUrl}
      />
    </div>
  );
}
