'use client';

import React, { useState } from 'react';
import { Send, Mail, MessageSquare, Check, ArrowRight, ShieldCheck } from 'lucide-react';

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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-[var(--bg-primary)]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column: Direct Communication Channels (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[#F07800]">
              COMMUNICATION DESK
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text-primary)] tracking-tight uppercase">
              CONNECT WITH TRADING LEGEND
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Have specific questions regarding campaign eligibility, bespoke multi-channel sponsorships, or our compliance process? Reach out through our direct verified endpoints.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-4 pt-2">
              {/* Telegram Official */}
              <a
                href={officialTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[#F07800]/50 transition-all flex items-center justify-between group shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[#F07800]">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Official Telegram Review Desk</div>
                    <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[#F07800] transition-colors">
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
                className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[#F07800]/50 transition-all flex items-center justify-between group shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[#F07800]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Telegram Community Channel</div>
                    <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[#F07800] transition-colors">
                      @TradingLegend_Community
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#F07800] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>

              {/* Contact Email Points */}
              <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3.5 shadow-xs">
                <div className="flex items-center gap-3.5">
                  <Mail className="w-4 h-4 text-[#F07800] flex-shrink-0" />
                  <div className="text-xs">
                    <span className="text-[var(--text-muted)] block font-mono">Operations & Editorial Desk:</span>
                    <a href={`mailto:${supportEmail}`} className="text-[var(--text-primary)] hover:text-[#F07800] font-medium font-mono">
                      {supportEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-3 border-t border-[var(--border-subtle)]">
                  <ShieldCheck className="w-4 h-4 text-[#F07800] flex-shrink-0" />
                  <div className="text-xs">
                    <span className="text-[var(--text-muted)] block font-mono">Corporate Partnerships:</span>
                    <a href={`mailto:${businessInquiryEmail}`} className="text-[var(--text-primary)] hover:text-[#F07800] font-medium font-mono">
                      {businessInquiryEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Business Inquiry Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-8 sm:p-10 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-1">
                Business & Placement Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-8">
                Send a message directly to our campaign coordinators. Response timeframe: within 24 business hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[#22C55E]/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-[var(--text-primary)]">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                    Thank you. Your message has been routed to our corporate relations desk. A team member will follow up via your stated contact details.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', telegram: '', inquiryType: 'Promotion Inquiry', message: '' });
                    }}
                    className="mt-2 text-xs font-mono text-[#F07800] hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-2">
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
                      <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-2">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-2">
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
                      <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-2">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl fintech-input text-sm"
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
                    <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-2">
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
                    className="w-full gradient-btn-primary py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="font-mono text-xs">Sending message...</span>
                    ) : (
                      <>
                        <span>Submit Business Inquiry</span>
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
