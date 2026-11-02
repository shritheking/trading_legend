'use client';

import React, { useState } from 'react';
import { Send, Mail, MessageSquare, Check, ArrowRight, ShieldCheck, Clock, ExternalLink, Headphones } from 'lucide-react';

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
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] scroll-mt-20 sm:scroll-mt-24">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Direct Communication Channels & Network Graphic (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase text-[#FF8A00] tracking-wider mb-2 font-semibold">
                DIRECT COMMUNICATION DESK
              </div>
              <h2 className="section-headline text-[var(--text-primary)] uppercase">
                Connect with Trading Legend
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Have specific questions regarding campaign eligibility, bespoke sponsorships, or our compliance process? Reach out directly through our verified endpoints.
              </p>
            </div>

            {/* Subtle Communication SVG Network Diagram */}
            <div className="w-full rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-4 shadow-2xs">
              <svg viewBox="0 0 400 90" fill="none" className="w-full h-auto">
                <circle cx="50" cy="45" r="20" className="fill-[#24C8E8]/15 stroke-[#24C8E8]" strokeWidth="1.5" />
                <text x="50" y="49" textAnchor="middle" fill="#24C8E8" fontSize="11" fontWeight="700" fontFamily="sans-serif">TG</text>
                
                <line x1="75" y1="45" x2="165" y2="45" stroke="#FF8A00" strokeWidth="1.5" strokeDasharray="4 3" />
                <polygon points="163,42 170,45 163,48" fill="#FF8A00" />
                
                <rect x="175" y="25" width="110" height="40" rx="8" className="fill-[var(--bg-secondary)] stroke-[#FF8A00]" strokeWidth="1.5" />
                <text x="230" y="44" textAnchor="middle" className="fill-[var(--text-primary)]" fontSize="10" fontWeight="700" fontFamily="monospace">REVIEW DESK</text>
                <text x="230" y="56" textAnchor="middle" fill="#16A34A" fontSize="8" fontFamily="monospace">Active Liaison</text>

                <line x1="290" y1="45" x2="345" y2="45" stroke="#FF8A00" strokeWidth="1.5" strokeDasharray="4 3" />
                <polygon points="343,42 350,45 343,48" fill="#FF8A00" />

                <circle cx="365" cy="45" r="16" className="fill-[#8757FF]/15 stroke-[#8757FF]" strokeWidth="1.5" />
                <text x="365" y="49" textAnchor="middle" fill="#8757FF" fontSize="10" fontWeight="700" fontFamily="sans-serif">COMM</text>
              </svg>
              <div className="text-center text-[10px] font-mono text-[var(--text-muted)] pt-1">
                Encrypted & Direct Telegram Verification Bridge
              </div>
            </div>

            {/* Direct Channel Cards (Stack vertically on mobile, clear icons, visible arrows) */}
            <div className="space-y-3">
              {/* Official Review Desk Card (Visually Distinct) */}
              <a
                href={officialTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-touch p-4 rounded-xl bg-[var(--bg-surface)] border-2 border-[#24C8E8]/40 hover:border-[#24C8E8] transition-all flex items-center justify-between group shadow-2xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#24C8E8]/15 border border-[#24C8E8]/30 flex items-center justify-center text-[#24C8E8] shrink-0">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono uppercase text-[#24C8E8] font-bold">Priority Review Desk</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#24C8E8] animate-pulse" />
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[#24C8E8] transition-colors">
                      @TradingLegend_Official
                    </div>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[#24C8E8] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* Community Channel Card */}
              <a
                href={communityTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-touch p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#8757FF] transition-all flex items-center justify-between group shadow-2xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#8757FF]/15 border border-[#8757FF]/30 flex items-center justify-center text-[#8757FF] shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Official Telegram Community</div>
                    <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[#8757FF] transition-colors">
                      @TradingLegend_Community
                    </div>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[#8757FF] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* Email Points without horizontal overflow */}
              <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[var(--text-muted)] block font-mono text-[10px] uppercase">Review Desk Email:</span>
                    <a
                      href={`mailto:${supportEmail}`}
                      className="text-[var(--text-primary)] hover:text-[#FF8A00] font-mono font-medium break-all block"
                    >
                      {supportEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-[var(--border-subtle)]">
                  <ShieldCheck className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[var(--text-muted)] block font-mono text-[10px] uppercase">Corporate Partnerships:</span>
                    <a
                      href={`mailto:${businessInquiryEmail}`}
                      className="text-[var(--text-primary)] hover:text-[#FF8A00] font-mono font-medium break-all block"
                    >
                      {businessInquiryEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8 lg:p-9 shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-xl font-heading font-bold text-[var(--text-primary)]">
                  Direct Inquiry Form
                </h3>
                <span className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)]">
                  <Clock className="w-3.5 h-3.5 text-[#24C8E8]" />
                  <span>24h Response</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6">
                Send a message directly to our campaign coordinators. Responses typically within 24 business hours.
              </p>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-xl bg-[var(--bg-secondary)] border border-[#16A34A]/40 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#16A34A]/15 text-[#16A34A] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-[var(--text-primary)]">Inquiry Transmitted</h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-sm mx-auto leading-relaxed">
                    Thank you. Your message has been routed to our corporate relations desk. A team coordinator will reach out via your stated Telegram or email.
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
                  {/* Single-column on mobile, 2-column on desktop for compact inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
                        Full Name <span className="text-[#FF8A00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        inputMode="text"
                        autoComplete="name"
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
                        autoComplete="username"
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
                        autoComplete="email"
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
                    className="btn-primary btn-touch w-full py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
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
