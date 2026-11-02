'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  XCircle,
  Calendar,
  Layers,
  ArrowRight,
  ShieldAlert,
  Send,
  Sparkles,
} from 'lucide-react';
import { ApplicationStatus } from '@/lib/types';

const STATUS_PROGRESSION: ApplicationStatus[] = [
  'Submitted',
  'Under Review',
  'Approved',
  'Confirmed',
  'Scheduled',
  'Completed',
];

function TrackingContent() {
  const searchParams = useSearchParams();
  const [referenceId, setReferenceId] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [application, setApplication] = useState<{
    referenceId: string;
    channelName: string;
    channelCategory: string;
    subscriberCount: number;
    preferredPackage: string;
    status: ApplicationStatus;
    publicStatusNote?: string;
    rejectionReason?: string;
    submittedAt: string;
    updatedAt: string;
    scheduledDate?: string;
    paymentStatus?: string;
  } | null>(null);

  useEffect(() => {
    const refParam = searchParams.get('ref');
    if (refParam) {
      setReferenceId(refParam);
    }
  }, [searchParams]);

  const handleLookup = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError(null);
    setApplication(null);

    const cleanRef = referenceId.trim();
    if (!cleanRef) {
      setError('Please provide your Application Reference ID (e.g. TL-2026-4812).');
      return;
    }

    setLoading(true);

    try {
      const url = new URL('/api/applications', window.location.origin);
      url.searchParams.set('referenceId', cleanRef);
      if (telegramUsername.trim()) {
        url.searchParams.set('telegramUsername', telegramUsername.trim());
      }

      const res = await fetch(url.toString());
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'No matching application found.');
      }

      setApplication(data.application);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error finding application.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
      case 'Submitted':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Under Review':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Approved':
      case 'Confirmed':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Payment Pending':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
      case 'Scheduled':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'Completed':
        return 'bg-zinc-500/10 text-zinc-300 border-zinc-500/30';
      case 'Rejected':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      default:
        return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30';
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#303030] text-xs font-mono text-[#F07800] mb-3">
          VERIFIED APPLICATION LOOKUP
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
          Track Your Application Status
        </h1>
        <p className="mt-2.5 text-sm sm:text-base text-[#A3A3A3]">
          Enter your unique Application Reference ID and registered Telegram username to check real-time review progress.
        </p>
      </div>

      {/* Lookup Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#191919] border border-[#303030] shadow-2xl mb-8">
        <form onSubmit={handleLookup} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[#A3A3A3] mb-1.5">
                Reference ID <span className="text-[#F07800]">*</span>
              </label>
              <input
                type="text"
                required
                value={referenceId}
                onChange={(e) => setReferenceId(e.target.value)}
                placeholder="e.g. TL-2026-4812"
                className="w-full px-4 py-3 rounded-xl fintech-input text-sm font-mono uppercase"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#A3A3A3] mb-1.5">
                Telegram Username (Optional Verification)
              </label>
              <input
                type="text"
                value={telegramUsername}
                onChange={(e) => setTelegramUsername(e.target.value)}
                placeholder="@yourhandle"
                className="w-full px-4 py-3 rounded-xl fintech-input text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full gradient-btn-primary py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
          >
            {loading ? (
              <span className="font-mono text-xs">Querying platform status...</span>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Search Application</span>
              </>
            )}
          </button>
        </form>

        {/* Demo Fast Fill helpers */}
        <div className="mt-5 pt-4 border-t border-[#262626] flex flex-wrap items-center justify-between text-xs text-[#777777] font-mono">
          <span>Sample demo references:</span>
          <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
            {['TL-2026-4812', 'TL-2026-7209', 'TL-2026-9051', 'TL-2026-3184'].map((ref) => (
              <button
                key={ref}
                type="button"
                onClick={() => {
                  setReferenceId(ref);
                  setTelegramUsername('');
                }}
                className="hover:text-[#FFB000] underline"
              >
                {ref}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="p-4 rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/40 text-[#EF4444] text-sm flex items-start gap-3 mb-8">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>{error}</div>
        </div>
      )}

      {/* Result Card */}
      {application && (
        <div className="rounded-3xl bg-[#191919] border border-[#303030] p-6 sm:p-8 shadow-2xl space-y-6 animate-in fade-in duration-300">
          {/* Header of Application */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2b2b2b]">
            <div>
              <div className="text-xs font-mono uppercase text-[#777777]">Application Reference</div>
              <div className="text-2xl font-heading font-extrabold text-white mt-0.5">
                {application.referenceId}
              </div>
              <div className="text-sm text-[#A3A3A3] mt-1">
                Channel: <span className="text-white font-medium">{application.channelName}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide border uppercase ${getStatusBadge(
                  application.status
                )}`}
              >
                {application.status}
              </span>
            </div>
          </div>

          {/* Status Progression Bar (if not rejected) */}
          {application.status !== 'Rejected' ? (
            <div>
              <div className="text-xs font-mono uppercase text-[#777777] mb-3">Review Lifecycle</div>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                {STATUS_PROGRESSION.map((step, idx) => {
                  const currentIdx = STATUS_PROGRESSION.indexOf(application.status as any);
                  const isPassed = currentIdx >= idx;
                  const isCurrent = application.status === step;

                  return (
                    <div
                      key={step}
                      className={`p-2.5 rounded-xl border text-center transition-colors ${
                        isCurrent
                          ? 'bg-[#F07800]/15 border-[#F07800] text-[#FFB000] font-bold'
                          : isPassed
                          ? 'bg-[#202020] border-[#22C55E]/40 text-[#22C55E]'
                          : 'bg-[#141414] border-[#262626] text-[#555555]'
                      }`}
                    >
                      <div className="text-[10px] font-mono leading-none mb-1">0{idx + 1}</div>
                      <div className="text-[11px] leading-tight truncate">{step}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/30 space-y-2">
              <div className="flex items-center gap-2 text-[#EF4444] font-bold text-sm">
                <XCircle className="w-5 h-5" />
                <span>Application Declined by Compliance Committee</span>
              </div>
              {application.rejectionReason && (
                <p className="text-xs text-[#E5E5E5] leading-relaxed">
                  <span className="font-semibold text-white">Specific Auditor Finding: </span>
                  {application.rejectionReason}
                </p>
              )}
            </div>
          )}

          {/* Public Status Note / Next Steps */}
          {application.publicStatusNote && (
            <div className="p-4 rounded-2xl bg-[#141414] border border-[#2b2b2b]">
              <div className="text-[11px] font-mono uppercase text-[#777777] mb-1">Auditor Status Note</div>
              <p className="text-sm text-white font-medium">{application.publicStatusNote}</p>
            </div>
          )}

          {/* Scheduled Date if available */}
          {application.scheduledDate && (
            <div className="p-4 rounded-2xl bg-[#202020] border border-[#F07800]/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#FFB000]" />
                <div>
                  <div className="text-xs font-mono uppercase text-[#A3A3A3]">Confirmed Broadcast Schedule</div>
                  <div className="text-sm font-bold text-white">
                    {new Date(application.scheduledDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-[#22C55E]">SLOT LOCKED</span>
            </div>
          )}

          {/* Details Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono pt-4 border-t border-[#262626]">
            <div>
              <div className="text-[#666666]">CATEGORY</div>
              <div className="text-white font-sans font-semibold mt-0.5">{application.channelCategory}</div>
            </div>
            <div>
              <div className="text-[#666666]">TIER APPLIED</div>
              <div className="text-white font-sans font-semibold mt-0.5">{application.preferredPackage}</div>
            </div>
            <div>
              <div className="text-[#666666]">SUBMITTED AT</div>
              <div className="text-[#A3A3A3] mt-0.5">{new Date(application.submittedAt).toLocaleDateString()}</div>
            </div>
            <div>
              <div className="text-[#666666]">LAST UPDATE</div>
              <div className="text-[#A3A3A3] mt-0.5">{new Date(application.updatedAt).toLocaleDateString()}</div>
            </div>
          </div>

          {/* Direct Support Footer */}
          <div className="p-4 rounded-xl bg-[#141414] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[#888888]">Need to update your details or schedule?</span>
            <a
              href="https://t.me/TradingLegend_Official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F07800] hover:underline flex items-center gap-1 font-mono"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Review Desk via Telegram</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="text-center py-24 text-sm text-[#A3A3A3] font-mono">
              Loading tracking engine...
            </div>
          }
        >
          <TrackingContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
