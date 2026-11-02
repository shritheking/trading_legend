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
    <div className="min-h-screen bg-[#111111] text-[#FFFFFF] flex flex-col">
      {/* Responsive Navbar */}
      <Navbar
        announcement={settings.announcementText}
        announcementActive={settings.announcementActive}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <HomeHero
          heading={settings.heroHeading}
          subheading={settings.heroSubheading}
        />

        {/* Trust Section */}
        <TrustSection pillars={settings.trustPillars} />

        {/* About Section */}
        <AboutSection />

        {/* Configurable Promotions Section */}
        <PromotionsSection packages={packages} />

        {/* How It Works Timeline (Horizontal Desktop / Vertical Mobile) */}
        <HowItWorksSection />

        {/* Strict Channel Standards & Requirements */}
        <ChannelRequirementsSection requirements={settings.channelRequirements} />

        {/* Contact & Inquiry Section */}
        <ContactSection
          officialTelegram={settings.officialTelegramUrl}
          communityTelegram={settings.communityTelegramUrl}
          supportEmail={settings.supportEmail}
          businessInquiryEmail={settings.businessInquiryEmail}
        />

        {/* Final Call to Action */}
        <FinalCTASection />
      </main>

      {/* Brand Footer */}
      <Footer
        officialTelegram={settings.officialTelegramUrl}
        communityTelegram={settings.communityTelegramUrl}
      />
    </div>
  );
}
