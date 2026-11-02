'use client';

import React, { useState } from 'react';
import { X, ShieldAlert, FileText, Lock } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#191919] border border-[#303030] p-6 sm:p-8 shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#202020] text-[#A3A3A3] hover:text-white border border-[#303030]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'disclaimer' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#F07800]/10 border border-[#F07800]/30 text-[#F07800]">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 id="modal-title" className="text-xl font-heading font-bold text-white">Risk Disclaimer & Regulatory Notice</h3>
            </div>
            <div className="space-y-4 text-sm text-[#A3A3A3] leading-relaxed">
              <p className="p-4 rounded-xl bg-[#202020] border border-[#303030] text-white font-medium">
                &ldquo;Trading involves significant financial risk. Trading Legend does not guarantee profits or financial returns. Promotional placements do not constitute investment advice or endorsement of trading performance.&rdquo;
              </p>
              <p>
                Trading Legend operates strictly as a neutral advertising and promotional distribution platform. We do not provide financial advice, broker services, asset management, or signal execution services.
              </p>
              <p>
                All trading communities featured through our network are independent third parties. Prospective members must conduct their own due diligence before acting upon any analytical content or market perspective shared within these channels.
              </p>
              <p>
                Past performance is not indicative of future returns. High-risk derivative instruments (such as Forex, Futures, Options, and Cryptocurrencies) carry substantial risk of loss and are not suitable for all retail participants.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#FFB000]/10 border border-[#FFB000]/30 text-[#FFB000]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 id="modal-title" className="text-xl font-heading font-bold text-white">Terms of Promotion & Placement</h3>
            </div>
            <div className="space-y-3 text-sm text-[#A3A3A3] leading-relaxed">
              <h4 className="text-white font-semibold">1. Application & Compliance Audit</h4>
              <p>
                All channel promotional applications undergo rigorous editorial audit. Trading Legend reserves the unilateral right to accept or decline any applicant channel that fails our quality, ethics, or authenticity metrics.
              </p>
              <h4 className="text-white font-semibold">2. Prohibition of Deceptive Marketing</h4>
              <p>
                Channels utilizing deceptive promises, guaranteed ROI claims, or unverified automated bots will be rejected with forfeiture of scheduled queue slots.
              </p>
              <h4 className="text-white font-semibold">3. Scheduling and Fulfillment</h4>
              <p>
                Broadcast slots are subject to weekly schedule caps. Confirmed slots will be executed per the agreed deliverables timetable. Trading Legend does not guarantee arbitrary subscriber acquisition volumes.
              </p>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E]">
                <Lock className="w-6 h-6" />
              </div>
              <h3 id="modal-title" className="text-xl font-heading font-bold text-white">Privacy & Confidentiality Policy</h3>
            </div>
            <div className="space-y-3 text-sm text-[#A3A3A3] leading-relaxed">
              <p>
                Trading Legend treats applicant data with strict commercial confidentiality. Contact details, Telegram handles, and channel statistics submitted via the application portal are solely utilized for placement evaluation and campaign fulfillment.
              </p>
              <p>
                We do not sell, rent, or publicly disclose creator application data, nor do we disclose unapproved submissions to third parties. Application tracking is guarded by unique reference tokens.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-[#303030] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#202020] hover:bg-[#2b2b2b] text-white text-sm font-medium border border-[#303030] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
