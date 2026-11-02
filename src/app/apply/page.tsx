'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
  ArrowRight,
  ShieldCheck,
  Lock,
  BarChart2,
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
  { name: 'Basic Promotion', tag: '24h Spotlight' },
  { name: 'Featured Promotion', tag: '48h Pinned' },
  { name: 'Premium Promotion', tag: '7-Day Campaign' },
];

function ApplicationForm() {
  const searchParams = useSearchParams();

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
    if (pkgParam && PACKAGES.some((p) => p.name === pkgParam)) {
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
      <div className="max-w-xl mx-auto my-8 p-6 sm:p-8 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center animate-in zoom-in-95 duration-200">
        <div className="w-12 h-12 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-6 h-6" />
        </div>

        <div className="text-[11px] font-mono uppercase text-[#16A34A] font-bold mb-2">
          APPLICATION REGISTERED
        </div>

        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[var(--text-primary)] mb-2">
          Submission Successful
        </h2>

        {/* Required Notification Text */}
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto mb-6">
          &ldquo;Your application has been submitted successfully. Our team will review your channel and notify you about the decision.&rdquo;
        </p>

        {/* Reference ID Card */}
        <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] max-w-sm mx-auto mb-6 text-left">
          <div className="text-[10px] font-mono uppercase text-[var(--text-muted)] mb-1">
            Application Reference ID
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xl font-bold text-[#FF8A00] tracking-wider">
              {successData.referenceId}
            </span>
            <button
              onClick={copyRefId}
              type="button"
              className="btn-touch px-3 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-primary)] flex items-center gap-1 transition-colors"
            >
              <Copy className="w-3.5 h-3.5 text-[#FF8A00]" />
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <div className="mt-2 text-[10px] text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]">
            Save this ID. You will use it to track your review status.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Link
            href={`/track?ref=${encodeURIComponent(successData.referenceId)}`}
            className="btn-primary btn-touch px-6 py-3 text-sm font-bold flex items-center justify-center gap-2"
          >
            <span>Track Application Status</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/"
            className="btn-secondary btn-touch px-5 py-3 text-sm font-semibold text-center"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-left mb-8">
        <div className="text-xs font-mono uppercase text-[#FF8A00] tracking-wider mb-2 font-semibold">
          APPLICATION PORTAL
        </div>
        <h1 className="section-headline text-[var(--text-primary)] uppercase">
          Apply for Promotional Placement
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          Submit your trading channel for our editorial compliance review. Applications are audited manually within 24 to 48 business hours.
        </p>
      </div>

      {/* Error alert */}
      {errorMessage && (
        <div className="mb-6 p-4 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/40 text-[#DC2626] dark:text-[#EF4444] text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Submission Incomplete: </span>
            {errorMessage}
          </div>
        </div>
      )}

      {/* Main Form: Single column per row on mobile */}
      <form onSubmit={handleSubmit} className="rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-5 sm:p-8 space-y-6">
        {/* Section 1: Contact Identity */}
        <div className="space-y-4">
          <div className="pb-2 border-b border-[var(--border-subtle)] flex items-center gap-2 text-sm font-heading font-bold text-[var(--text-primary)]">
            <Lock className="w-4 h-4 text-[#FF8A00]" />
            <span>1. Contact Details</span>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
              Full Name <span className="text-[#FF8A00]">*</span>
            </label>
            <input
              type="text"
              required
              inputMode="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Alexander Vance"
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
              value={formData.telegramUsername}
              onChange={(e) => setFormData({ ...formData, telegramUsername: e.target.value })}
              placeholder="@vance_trading"
              className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm"
            />
            <span className="text-[11px] text-[var(--text-muted)] mt-1 block">Used for direct review communications.</span>
          </div>
        </div>

        {/* Section 2: Channel Identification & Metrics */}
        <div className="space-y-4 pt-2">
          <div className="pb-2 border-b border-[var(--border-subtle)] flex items-center gap-2 text-sm font-heading font-bold text-[var(--text-primary)]">
            <BarChart2 className="w-4 h-4 text-[#FF8A00]" />
            <span>2. Channel Details & Metrics</span>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
              Telegram Channel Name <span className="text-[#FF8A00]">*</span>
            </label>
            <input
              type="text"
              required
              inputMode="text"
              value={formData.channelName}
              onChange={(e) => setFormData({ ...formData, channelName: e.target.value })}
              placeholder="e.g. Vance Macro FX & Analysis"
              className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
              Telegram Channel URL <span className="text-[#FF8A00]">*</span>
            </label>
            <input
              type="url"
              required
              inputMode="url"
              value={formData.channelLink}
              onChange={(e) => setFormData({ ...formData, channelLink: e.target.value })}
              placeholder="https://t.me/vance_macro_fx"
              className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
              Channel Primary Category <span className="text-[#FF8A00]">*</span>
            </label>
            <select
              value={formData.channelCategory}
              onChange={(e) => setFormData({ ...formData, channelCategory: e.target.value as ChannelCategory })}
              className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
                Subscribers <span className="text-[#FF8A00]">*</span>
              </label>
              <input
                type="number"
                min="100"
                required
                inputMode="numeric"
                value={formData.subscriberCount}
                onChange={(e) => setFormData({ ...formData, subscriberCount: e.target.value })}
                placeholder="e.g. 24000"
                className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm font-mono"
              />
              <span className="text-[10px] text-[var(--text-muted)] mt-1 block">Min. 100 subscribers</span>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
                Avg. Post Views <span className="text-[#FF8A00]">*</span>
              </label>
              <input
                type="number"
                min="10"
                required
                inputMode="numeric"
                value={formData.avgPostViews}
                onChange={(e) => setFormData({ ...formData, avgPostViews: e.target.value })}
                placeholder="e.g. 8500"
                className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm font-mono"
              />
              <span className="text-[10px] text-[var(--text-muted)] mt-1 block">Past 30-day average</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
              Engagement & Group Discussions <span className="text-[#FF8A00]">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={formData.engagementInfo}
              onChange={(e) => setFormData({ ...formData, engagementInfo: e.target.value })}
              placeholder="Describe your engagement: discussion group activity, reactions, comments..."
              className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm resize-none"
            />
          </div>
        </div>

        {/* Section 3: Preferred Package Selection */}
        <div className="pt-2">
          <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-2 font-medium">
            Preferred Promotion Package <span className="text-[#FF8A00]">*</span>
          </label>
          <div className="space-y-2">
            {PACKAGES.map((pkg) => {
              const selected = formData.preferredPackage === pkg.name;
              return (
                <div
                  key={pkg.name}
                  onClick={() => setFormData({ ...formData, preferredPackage: pkg.name })}
                  className={`p-3.5 rounded-lg cursor-pointer border transition-colors flex items-center justify-between ${
                    selected
                      ? 'bg-[var(--bg-secondary)] border-[#FF8A00]'
                      : 'bg-[var(--bg-primary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <div>
                    <span className="font-heading font-bold text-sm text-[var(--text-primary)] block">
                      {pkg.name}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {pkg.tag}
                    </span>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      selected ? 'border-[#FF8A00] bg-[#FF8A00]' : 'border-[var(--border-strong)]'
                    }`}
                  >
                    {selected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 4: Supporting Links & Notes */}
        <div className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
              Supporting Statistics Link (Optional)
            </label>
            <input
              type="url"
              inputMode="url"
              value={formData.screenshotUrl}
              onChange={(e) => setFormData({ ...formData, screenshotUrl: e.target.value })}
              placeholder="https://t.me/tgstat_or_analytics_url"
              className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm"
            />
            <span className="text-[10px] text-[var(--text-muted)] mt-1 block">TGStat report, Telemetr, or analytics screenshot link.</span>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
              Additional Information (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              placeholder="Target schedule dates, special focus topics, or notes..."
              className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm resize-none"
            />
          </div>
        </div>

        {/* Compliance Acknowledgement */}
        <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.acceptedTerms}
              onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
              className="mt-0.5 h-4 w-4 rounded border-[var(--border-strong)] text-[#FF8A00] focus:ring-[#FF8A00]"
            />
            <span className="text-xs text-[var(--text-secondary)] leading-relaxed">
              I certify that this channel does not publish deceptive profit claims or fraudulent content. I acknowledge that application submission does not guarantee promotion approval and that all campaigns are manually reviewed and scheduled per slot availability.
            </span>
          </label>
        </div>

        {/* Full-width Submit Button */}
        <div>
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary btn-touch w-full py-4 rounded-lg font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
          >
            {submitting ? (
              <span className="flex items-center gap-2 font-mono text-xs">
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Auditing and Submitting Channel...</span>
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
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col transition-colors duration-200">
      <Navbar />
      <main className="flex-grow py-10 sm:py-16">
        <div className="site-container">
          <Suspense
            fallback={
              <div className="text-center py-20 text-xs text-[var(--text-muted)] font-mono">
                Loading application portal...
              </div>
            }
          >
            <ApplicationForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
