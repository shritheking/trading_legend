'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Sparkles,
  BarChart2,
  Lock,
} from 'lucide-react';
import { ChannelCategory } from '@/lib/types';

const CATEGORIES: ChannelCategory[] = [
  'Crypto & Web3',
  'Forex & Currencies',
  'Stock Markets & Indices',
  'Commodities & Metals',
  'Options & Derivatives',
  'Trading Education & Analytics',
  'Multi-Asset Trading',
];

const PACKAGES = [
  'Basic Promotion',
  'Featured Promotion',
  'Premium Promotion',
];

function ApplicationForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    telegramUsername: '',
    channelName: '',
    channelLink: '',
    channelCategory: 'Crypto & Web3' as ChannelCategory,
    subscriberCount: '',
    avgPostViews: '',
    engagementInfo: '',
    preferredPackage: 'Featured Promotion',
    additionalInfo: '',
    screenshotUrl: '',
    acceptedTerms: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Set package from query param if available
  useEffect(() => {
    const pkgParam = searchParams.get('package');
    if (pkgParam && PACKAGES.includes(pkgParam)) {
      setFormData((prev) => ({ ...prev, preferredPackage: pkgParam }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name (minimum 2 characters).');
      return;
    }
    if (!formData.telegramUsername.trim()) {
      setErrorMessage('Please provide your active Telegram contact username.');
      return;
    }
    if (!formData.channelName.trim()) {
      setErrorMessage('Please provide your official Telegram channel name.');
      return;
    }
    if (!formData.channelLink.trim().includes('t.me/')) {
      setErrorMessage('Please enter a valid Telegram channel URL (e.g., https://t.me/channel).');
      return;
    }
    const subs = parseInt(formData.subscriberCount, 10);
    if (isNaN(subs) || subs < 100) {
      setErrorMessage('Channel must possess at least 100 subscribers to be eligible for manual audit.');
      return;
    }
    const views = parseInt(formData.avgPostViews, 10);
    if (isNaN(views) || views < 10) {
      setErrorMessage('Average post views must be at least 10.');
      return;
    }
    if (!formData.engagementInfo.trim() || formData.engagementInfo.trim().length < 10) {
      setErrorMessage('Please provide engagement information (at least 10 characters).');
      return;
    }
    if (!formData.acceptedTerms) {
      setErrorMessage('Please accept the editorial terms and compliance declaration.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit application.');
      }

      setSuccessData({
        referenceId: data.referenceId,
        message: data.message,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error submitting application.';
      setErrorMessage(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const copyRefId = () => {
    if (successData?.referenceId) {
      navigator.clipboard.writeText(successData.referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (successData) {
    return (
      <div className="max-w-2xl mx-auto my-12 p-8 sm:p-12 rounded-3xl bg-[#191919] border border-[#303030] shadow-2xl text-center animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E] flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-mono text-[#22C55E] mb-4">
          APPLICATION REGISTERED
        </div>

        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-3">
          Submission Successful
        </h2>

        {/* Required wording */}
        <p className="text-base text-[#CCCCCC] leading-relaxed max-w-lg mx-auto mb-8">
          &ldquo;Your application has been submitted successfully. Our team will review your channel and notify you about the decision.&rdquo;
        </p>

        {/* Reference ID Card */}
        <div className="p-6 rounded-2xl bg-[#141414] border border-[#303030] max-w-md mx-auto mb-8 text-left">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#777777] mb-1">
            Unique Application Reference ID
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-2xl font-bold text-[#FFB000] tracking-wider">
              {successData.referenceId}
            </span>
            <button
              onClick={copyRefId}
              type="button"
              className="px-3 py-1.5 rounded-lg bg-[#202020] hover:bg-[#282828] border border-[#383838] text-xs font-medium text-white flex items-center gap-1.5 transition-colors"
            >
              <Copy className="w-3.5 h-3.5 text-[#F07800]" />
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          <div className="mt-3 text-[11px] text-[#A3A3A3] pt-2 border-t border-[#262626]">
            Save this Reference ID. You will need it alongside your Telegram username to track review status.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/track?ref=${encodeURIComponent(successData.referenceId)}`}
            className="w-full sm:w-auto gradient-btn-primary px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Track Application Status</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#202020] hover:bg-[#282828] text-white font-medium text-sm border border-[#383838] transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#303030] text-xs font-mono text-[#F07800] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#FFB000]" />
          TRADING COMMUNITY PROMOTION PORTAL
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
          Apply for Promotional Placement
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#A3A3A3] max-w-2xl mx-auto">
          Submit your trading channel for our editorial compliance review. Applications are reviewed manually within 24 to 48 business hours.
        </p>
      </div>

      {/* Error alert if any */}
      {errorMessage && (
        <div className="mb-8 p-4 rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/40 text-[#EF4444] text-sm flex items-start gap-3 animate-in shake">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-semibold">Submission Incomplete: </span>
            {errorMessage}
          </div>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="rounded-3xl bg-[#191919] border border-[#303030] p-6 sm:p-10 shadow-2xl space-y-8">
        {/* Section 1: Contact Identity */}
        <div>
          <h2 className="text-lg font-heading font-bold text-white flex items-center gap-2 mb-4 pb-2 border-b border-[#2b2b2b]">
            <Lock className="w-4 h-4 text-[#F07800]" />
            1. Channel Owner Contact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
                Full Name <span className="text-[#F07800]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Alexander Vance"
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
                value={formData.telegramUsername}
                onChange={(e) => setFormData({ ...formData, telegramUsername: e.target.value })}
                placeholder="@vance_trading"
                className="w-full px-4 py-3 rounded-xl fintech-input text-sm"
              />
              <span className="text-[11px] text-[#777777] mt-1 block">Used for review status communications.</span>
            </div>
          </div>
        </div>

        {/* Section 2: Channel Identification & Metrics */}
        <div>
          <h2 className="text-lg font-heading font-bold text-white flex items-center gap-2 mb-4 pb-2 border-b border-[#2b2b2b]">
            <BarChart2 className="w-4 h-4 text-[#FFB000]" />
            2. Channel Metrics & Classification
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
                Telegram Channel Name <span className="text-[#F07800]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.channelName}
                onChange={(e) => setFormData({ ...formData, channelName: e.target.value })}
                placeholder="e.g. Vance Macro FX & Analysis"
                className="w-full px-4 py-3 rounded-xl fintech-input text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
                Telegram Channel Link <span className="text-[#F07800]">*</span>
              </label>
              <input
                type="url"
                required
                value={formData.channelLink}
                onChange={(e) => setFormData({ ...formData, channelLink: e.target.value })}
                placeholder="https://t.me/vance_macro_fx"
                className="w-full px-4 py-3 rounded-xl fintech-input text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
                Channel Category <span className="text-[#F07800]">*</span>
              </label>
              <select
                value={formData.channelCategory}
                onChange={(e) => setFormData({ ...formData, channelCategory: e.target.value as ChannelCategory })}
                className="w-full px-4 py-3 rounded-xl fintech-input text-sm bg-[#191919]"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
                Total Subscribers <span className="text-[#F07800]">*</span>
              </label>
              <input
                type="number"
                min="100"
                required
                value={formData.subscriberCount}
                onChange={(e) => setFormData({ ...formData, subscriberCount: e.target.value })}
                placeholder="e.g. 24000"
                className="w-full px-4 py-3 rounded-xl fintech-input text-sm font-mono"
              />
              <span className="text-[11px] text-[#777777] mt-1 block">Min. 100 subscribers</span>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
                Average Post Views <span className="text-[#F07800]">*</span>
              </label>
              <input
                type="number"
                min="10"
                required
                value={formData.avgPostViews}
                onChange={(e) => setFormData({ ...formData, avgPostViews: e.target.value })}
                placeholder="e.g. 8500"
                className="w-full px-4 py-3 rounded-xl fintech-input text-sm font-mono"
              />
              <span className="text-[11px] text-[#777777] mt-1 block">Past 30-day average</span>
            </div>
          </div>
        </div>

        {/* Section 3: Engagement Information */}
        <div>
          <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
            Engagement Information & Discussion Group Activity <span className="text-[#F07800]">*</span>
          </label>
          <textarea
            required
            rows={3}
            value={formData.engagementInfo}
            onChange={(e) => setFormData({ ...formData, engagementInfo: e.target.value })}
            placeholder="Describe your typical engagement: view-rate percentage, active discussion group activity, reactions, comments, etc..."
            className="w-full px-4 py-3 rounded-xl fintech-input text-sm resize-none"
          />
        </div>

        {/* Section 4: Preferred Package */}
        <div>
          <label className="block text-xs font-mono text-[#A3A3A3] mb-2 uppercase">
            Preferred Promotion Package <span className="text-[#F07800]">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PACKAGES.map((pkg) => {
              const selected = formData.preferredPackage === pkg;
              return (
                <div
                  key={pkg}
                  onClick={() => setFormData({ ...formData, preferredPackage: pkg })}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all text-left ${
                    selected
                      ? 'bg-[#222222] border-[#F07800] shadow-md shadow-[#F07800]/10'
                      : 'bg-[#161616] border-[#303030] hover:border-[#404040]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-heading font-bold text-white text-sm">{pkg}</span>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selected ? 'border-[#F07800] bg-[#F07800]' : 'border-[#444444]'
                      }`}
                    >
                      {selected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#A3A3A3]">
                    {pkg === 'Basic Promotion' ? '24h Spotlight' : pkg === 'Featured Promotion' ? '48h Pinned' : '7-Day Campaign'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 5: Supporting Screenshots / Links & Additional Info */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
              Supporting Statistics Link or Screenshot URL (Optional)
            </label>
            <input
              type="url"
              value={formData.screenshotUrl}
              onChange={(e) => setFormData({ ...formData, screenshotUrl: e.target.value })}
              placeholder="https://t.me/tgstat_or_analytics_screenshot_url"
              className="w-full px-4 py-3 rounded-xl fintech-input text-sm"
            />
            <span className="text-[11px] text-[#777777] mt-1 block">TGStat link, Telemetr report, or image link showing analytics.</span>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#A3A3A3] mb-1.5 uppercase">
              Additional Information (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              placeholder="Any target scheduling dates, special collaboration requests, or focus topics..."
              className="w-full px-4 py-3 rounded-xl fintech-input text-sm resize-none"
            />
          </div>
        </div>

        {/* Section 6: Compliance Acknowledgement */}
        <div className="p-4 rounded-2xl bg-[#141414] border border-[#2e2e2e]">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.acceptedTerms}
              onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-[#404040] bg-[#202020] text-[#F07800] focus:ring-[#F07800]"
            />
            <span className="text-xs text-[#A3A3A3] leading-relaxed">
              I certify that this channel does not publish deceptive profit claims or fraudulent content. I acknowledge that application submission does not guarantee promotion approval and that all campaigns are manually reviewed and scheduled per slot availability.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full gradient-btn-primary py-4 rounded-xl font-bold text-base tracking-wide flex items-center justify-center gap-2 shadow-xl hover:shadow-[#F07800]/30 transition-all disabled:opacity-50"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Verifying and Submitting Channel...</span>
              </span>
            ) : (
              <>
                <span>Submit Channel for Review</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="text-center py-24 text-sm text-[#A3A3A3] font-mono">
              Loading application portal...
            </div>
          }
        >
          <ApplicationForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
