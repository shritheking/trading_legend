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
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Direct Communication Channels (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs font-mono uppercase text-[#FF8A00] tracking-wider font-semibold">
              COMMUNICATION DESK
            </div>

            <h2 className="section-headline text-[var(--text-primary)] uppercase">
              Connect with Trading Legend
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Have specific questions regarding campaign eligibility, bespoke multi-channel sponsorships, or our compliance process? Reach out directly through our verified endpoints.
            </p>

            {/* Direct Channel Endpoints (Clean list, no neon cards) */}
            <div className="space-y-3 pt-2">
              <a
                href={officialTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#FF8A00] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[var(--bg-secondary)] flex items-center justify-center text-[#FF8A00] shrink-0">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Official Review Desk</div>
                    <div className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[#FF8A00] transition-colors">
                      @TradingLegend_Official
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] group-hover:text-[#FF8A00] transition-colors">
                  &rarr;
                </span>
              </a>

              <a
                href={communityTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#FF8A00] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[var(--bg-secondary)] flex items-center justify-center text-[#FF8A00] shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Telegram Community</div>
                    <div className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[#FF8A00] transition-colors">
                      @TradingLegend_Community
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] group-hover:text-[#FF8A00] transition-colors">
                  &rarr;
                </span>
              </a>

              <div className="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <Mail className="w-3.5 h-3.5 text-[#FF8A00]" />
                  <span className="font-mono">Review Desk:</span>
                  <a href={`mailto:${supportEmail}`} className="text-[var(--text-primary)] hover:underline font-mono">
                    {supportEmail}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-secondary)] pt-2 border-t border-[var(--border-subtle)]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF8A00]" />
                  <span className="font-mono">Partnerships:</span>
                  <a href={`mailto:${businessInquiryEmail}`} className="text-[var(--text-primary)] hover:underline font-mono">
                    {businessInquiryEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8">
              <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-1">
                Direct Inquiry Form
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-6">
                Send a message directly to our campaign coordinators. Responses typically within 24 business hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-lg bg-[var(--bg-secondary)] border border-[#16A34A]/40 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-heading font-bold text-[var(--text-primary)]">Inquiry Received</h4>
                  <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto">
                    Thank you. Your message has been routed to our corporate relations desk. A team member will follow up via your stated contact details.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', telegram: '', inquiryType: 'Promotion Inquiry', message: '' });
                    }}
                    className="mt-2 text-xs font-mono text-[#FF8A00] hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Single field per row on mobile, 2 columns on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
                        Your Full Name <span className="text-[#FF8A00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        inputMode="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
                        Telegram Username <span className="text-[#FF8A00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        inputMode="text"
                        value={formData.telegram}
                        onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                        placeholder="@yourhandle"
                        className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
                        Email Address <span className="text-[#FF8A00]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        inputMode="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm"
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
                    <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
                      Message / Channel Details <span className="text-[#FF8A00]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="State your channel link, current audience metrics, and your requirements..."
                      className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary btn-touch w-full py-3.5 px-4 rounded-lg font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="font-mono text-xs">Transmitting message...</span>
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
