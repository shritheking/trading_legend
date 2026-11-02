'use client';

import React, { useState } from 'react';
import { Send, Mail, MessageSquare, Check, Sparkles, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  officialTelegram?: string;
  communityTelegram?: string;
  supportEmail?: string;
  businessInquiryEmail?: string;
}

export function ContactSection({
  officialTelegram = 'https://t.me/TradingLegend_Official',
  communityTelegram = 'https://t.me/TradingLegend_Community',
  supportEmail = 'desk@tradinglegend.io',
  businessInquiryEmail = 'partnerships@tradinglegend.io',
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    inquiryType: 'Promotion Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate inquiry submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Official Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#303030] text-xs font-mono text-[#F07800]">
              COMMUNICATION DESK
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              CONNECT WITH TRADING LEGEND
            </h2>

            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              Have specific questions regarding campaign eligibility, bespoke multi-channel sponsorships, or our compliance process? Reach out through our direct verified endpoints.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-4 pt-2">
              {/* Telegram Official */}
              <a
                href={officialTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#191919] border border-[#303030] hover:border-[#F07800]/50 transition-all flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#202020] border border-[#383838] flex items-center justify-center text-[#F07800] group-hover:bg-[#F07800]/10 transition-colors">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#A3A3A3]">Official Telegram Review Desk</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#F07800] transition-colors">
                      @TradingLegend_Official
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#F07800] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>

              {/* Community Channel */}
              <a
                href={communityTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#191919] border border-[#303030] hover:border-[#FFB000]/50 transition-all flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#202020] border border-[#383838] flex items-center justify-center text-[#FFB000] group-hover:bg-[#FFB000]/10 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#A3A3A3]">Telegram Community Channel</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#FFB000] transition-colors">
                      @TradingLegend_Community
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#FFB000] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>

              {/* Email Points */}
              <div className="p-4 rounded-2xl bg-[#191919] border border-[#303030] space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#A3A3A3]" />
                  <div className="text-xs">
                    <span className="text-[#777777] block font-mono">Operations & Reviews:</span>
                    <a href={`mailto:${supportEmail}`} className="text-white hover:text-[#F07800] font-medium font-mono">
                      {supportEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#262626]">
                  <Sparkles className="w-4 h-4 text-[#FFB000]" />
                  <div className="text-xs">
                    <span className="text-[#777777] block font-mono">Strategic Partnerships:</span>
                    <a href={`mailto:${businessInquiryEmail}`} className="text-white hover:text-[#FFB000] font-medium font-mono">
                      {businessInquiryEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Business Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#191919] border border-[#303030] p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">
                Business & Partnership Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] mb-6">
                Send a formal inquiry to our promotional campaign team. Response timeframe: within 24 business hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#202020] border border-[#22C55E]/40 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-md mx-auto">
                    Thank you. Your message has been routed to our corporate relations desk. A representative will contact you via Telegram or Email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', telegram: '', inquiryType: 'Promotion Inquiry', message: '' });
                    }}
                    className="mt-3 text-xs font-mono text-[#F07800] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
                        Your Full Name <span className="text-[#F07800]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl fintech-input text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
                        Telegram Username <span className="text-[#F07800]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.telegram}
                        onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                        placeholder="@yourhandle"
                        className="w-full px-4 py-3 rounded-xl fintech-input text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
                        Email Address <span className="text-[#F07800]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl fintech-input text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl fintech-input text-sm bg-[#191919]"
                      >
                        <option>Promotion Inquiry</option>
                        <option>Bespoke Multi-Week Campaign</option>
                        <option>Channel Verification Assistance</option>
                        <option>Compliance or Editorial Question</option>
                        <option>Other Business Matters</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
                      Message / Channel Details <span className="text-[#F07800]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly state your channel link, current audience metrics, and your requirements..."
                      className="w-full px-4 py-3 rounded-xl fintech-input text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full gradient-btn-primary py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="font-mono text-xs">Dispatching message...</span>
                    ) : (
                      <>
                        <span>Submit Business Enquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
