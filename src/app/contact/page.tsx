import React from 'react';
import { db } from '@/lib/db';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { FinalCTASection } from '@/components/FinalCTASection';



export default async function ContactPage() {
  const settings = await db.getSettings();

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      <Navbar
        announcement={settings.announcementText}
        announcementActive={settings.announcementActive}
      />
      <main className="flex-grow pt-10">
        <ContactSection
          officialTelegram={settings.officialTelegramUrl}
          communityTelegram={settings.communityTelegramUrl}
          supportEmail={settings.supportEmail}
          businessInquiryEmail={settings.businessInquiryEmail}
        />
        <FinalCTASection />
      </main>
      <Footer
        officialTelegram={settings.officialTelegramUrl}
        communityTelegram={settings.communityTelegramUrl}
      />
    </div>
  );
}
