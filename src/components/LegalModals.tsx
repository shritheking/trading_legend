'use client';

import React from 'react';
import { X, ShieldAlert, FileText, Lock } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/80 backdrop-blur-xs transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#191919] border border-gray-200 dark:border-[#262626] p-6 sm:p-8 shadow-2xl text-left transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-[#222222] dark:hover:bg-[#2a2a2a] text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white border border-gray-200 dark:border-[#333333] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'disclaimer' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#F07800]/10 text-[#F07800]">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 id="modal-title" className="text-xl font-heading font-bold text-gray-900 dark:text-[#F5F3EF]">
                Risk Disclaimer & Regulatory Notice
              </h3>
            </div>
            <div className="space-y-4 text-sm text-gray-600 dark:text-[#A5A5A5] leading-relaxed">
              <p className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-gray-900 dark:text-white font-medium">
                &ldquo;Trading involves significant financial risk. Trading Legend does not guarantee profits or financial returns. Promotional placements do not constitute investment advice or endorsement of trading performance.&rdquo;
              </p>
              <p>
                Trading Legend operates strictly as a promotional distribution directory and communications platform. We do not provide financial advice, broker-dealer execution, asset management, or signal execution services.
              </p>
              <p>
                All trading communities featured through our platform are independent third parties. Prospective members must conduct their own due diligence before acting upon any analytical content shared within these channels.
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
              <div className="p-2.5 rounded-xl bg-[#F07800]/10 text-[#F07800]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 id="modal-title" className="text-xl font-heading font-bold text-gray-900 dark:text-[#F5F3EF]">
                Terms of Promotion & Placement
              </h3>
            </div>
            <div className="space-y-3.5 text-sm text-gray-600 dark:text-[#A5A5A5] leading-relaxed">
              <h4 className="text-gray-900 dark:text-[#F5F3EF] font-semibold">1. Editorial Compliance Audit</h4>
              <p>
                All applying trading communities undergo editorial verification. Trading Legend reserves the unilateral right to accept or decline any applicant channel that fails our quality, ethics, or authenticity metrics.
              </p>
              <h4 className="text-gray-900 dark:text-[#F5F3EF] font-semibold">2. Prohibition of Deceptive Marketing</h4>
              <p>
                Channels utilizing deceptive promises, guaranteed ROI claims, or unverified automated bots will be rejected with forfeiture of scheduled queue slots.
              </p>
              <h4 className="text-gray-900 dark:text-[#F5F3EF] font-semibold">3. Scheduling and Fulfillment</h4>
              <p>
                Broadcast slots are subject to weekly schedule caps. Confirmed slots will be executed per the agreed deliverables timetable. Trading Legend does not guarantee arbitrary subscriber acquisition volumes.
              </p>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#22C55E]/10 text-[#22C55E]">
                <Lock className="w-6 h-6" />
              </div>
              <h3 id="modal-title" className="text-xl font-heading font-bold text-gray-900 dark:text-[#F5F3EF]">
                Privacy & Confidentiality Policy
              </h3>
            </div>
            <div className="space-y-3 text-sm text-gray-600 dark:text-[#A5A5A5] leading-relaxed">
              <p>
                Trading Legend treats applicant data with strict commercial confidentiality. Contact details, Telegram handles, and channel statistics submitted via the application portal are solely utilized for placement evaluation and campaign fulfillment.
              </p>
              <p>
                We do not sell, rent, or publicly disclose creator application data, nor do we disclose unapproved submissions to third parties. Application tracking is guarded by unique reference tokens.
              </p>
              <p>
                Any analytics collected during active campaigns are aggregated strictly for delivery verification and never shared with competing trading networks.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-[#262626] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-[#222222] dark:hover:bg-[#2a2a2a] text-gray-800 dark:text-white text-sm font-semibold border border-gray-200 dark:border-[#333333] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
