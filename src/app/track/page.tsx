'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  Calendar,
  Send,
  ShieldCheck,
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
        return 'bg-blue-500/10 text-blue-500 border-blue-500/30';
      case 'Under Review':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/30';
      case 'Approved':
      case 'Confirmed':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30';
      case 'Payment Pending':
        return 'bg-orange-500/10 text-[#FF8A00] border-orange-500/30';
      case 'Scheduled':
        return 'bg-purple-500/10 text-[#8A5CF6] border-[#8A5CF6]/30';
      case 'Completed':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30';
      case 'Rejected':
        return 'bg-red-500/10 text-red-500 border-red-500/30';
      default:
        return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30';
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Page Header */}
      <div className="text-left mb-8">
        <div className="text-xs font-mono uppercase text-[#FF8A00] tracking-wider mb-2 font-semibold">
          APPLICATION STATUS
        </div>
        <h1 className="section-headline text-[var(--text-primary)] uppercase">
          Track Your Application Status
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          Enter your unique Application Reference ID and registered Telegram username to check real-time review progress.
        </p>
      </div>

      {/* Lookup Box */}
      <div className="p-5 sm:p-7 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] mb-8">
        <form onSubmit={handleLookup} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
              Reference ID <span className="text-[#FF8A00]">*</span>
            </label>
            <input
              type="text"
              required
              inputMode="text"
              value={referenceId}
              onChange={(e) => setReferenceId(e.target.value)}
              placeholder="e.g. TL-2026-4812"
              className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm font-mono uppercase"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5 font-medium">
              Telegram Username (Optional)
            </label>
            <input
              type="text"
              inputMode="text"
              value={telegramUsername}
              onChange={(e) => setTelegramUsername(e.target.value)}
              placeholder="@yourhandle"
              className="w-full px-3.5 py-3 rounded-lg fintech-input text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary btn-touch w-full py-3.5 rounded-lg font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
          >
            {loading ? (
              <span className="font-mono text-xs">Querying database...</span>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Search Application</span>
              </>
            )}
          </button>
        </form>

        {/* Demo Fast Fill helpers */}
        <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between text-xs text-[var(--text-muted)] font-mono gap-2">
          <span>Demo references:</span>
          <div className="flex flex-wrap gap-2">
            {['TL-2026-4812', 'TL-2026-7209', 'TL-2026-9051', 'TL-2026-3184'].map((ref) => (
              <button
                key={ref}
                type="button"
                onClick={() => {
                  setReferenceId(ref);
                  setTelegramUsername('');
                }}
                className="text-[#FF8A00] hover:underline"
              >
                {ref}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="p-4 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/40 text-[#DC2626] dark:text-[#EF4444] text-xs sm:text-sm flex items-start gap-2.5 mb-8">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>{error}</div>
        </div>
      )}

      {/* Result View */}
      {application && (
        <div className="rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-5 sm:p-7 space-y-6 animate-in fade-in duration-200">
          {/* Header of Application */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[var(--border-subtle)]">
            <div>
              <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Application Reference</div>
              <div className="text-xl sm:text-2xl font-heading font-extrabold text-[var(--text-primary)] mt-0.5">
                {application.referenceId}
              </div>
              <div className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                Channel: <span className="text-[var(--text-primary)] font-semibold">{application.channelName}</span>
              </div>
            </div>

            <div>
              <span
                className={`px-3 py-1 rounded text-xs font-mono font-bold tracking-wide border uppercase inline-block ${getStatusBadge(
                  application.status
                )}`}
              >
                {application.status}
              </span>
            </div>
          </div>

          {/* Clean Vertical Review Timeline (Usable on all screen sizes) */}
          {application.status !== 'Rejected' ? (
            <div>
              <div className="text-xs font-mono uppercase text-[var(--text-muted)] mb-3">Review Lifecycle</div>
              <div className="space-y-3 relative">
                <div className="absolute top-2 bottom-2 left-3.5 w-[1px] bg-[var(--border-subtle)] z-0" />

                {STATUS_PROGRESSION.map((step, idx) => {
                  const currentIdx = STATUS_PROGRESSION.indexOf(application.status as any);
                  const isPassed = currentIdx >= idx;
                  const isCurrent = application.status === step;

                  return (
                    <div key={step} className="flex items-center gap-3 relative z-10">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold border shrink-0 ${
                          isCurrent
                            ? 'bg-[#FF8A00] text-white border-[#FF8A00]'
                            : isPassed
                            ? 'bg-[#16A34A] text-white border-[#16A34A]'
                            : 'bg-[var(--bg-primary)] text-[var(--text-muted)] border-[var(--border-subtle)]'
                        }`}
                      >
                        {isPassed && !isCurrent ? '✓' : `0${idx + 1}`}
                      </div>

                      <div className="flex-1 flex items-center justify-between text-xs sm:text-sm">
                        <span className={`font-medium ${isCurrent ? 'text-[#FF8A00] font-bold' : isPassed ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>
                          {step}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-mono text-[#FF8A00] font-bold uppercase tracking-wider">
                            Current Stage
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30 space-y-1.5">
              <div className="flex items-center gap-2 text-[#EF4444] font-bold text-sm">
                <XCircle className="w-4 h-4" />
                <span>Application Declined by Compliance Committee</span>
              </div>
              {application.rejectionReason && (
                <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                  <span className="font-semibold">Auditor Finding: </span>
                  {application.rejectionReason}
                </p>
              )}
            </div>
          )}

          {/* Public Status Note */}
          {application.publicStatusNote && (
            <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
              <div className="text-[10px] font-mono uppercase text-[var(--text-muted)] mb-1">Auditor Status Note</div>
              <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium">{application.publicStatusNote}</p>
            </div>
          )}

          {/* Scheduled Date */}
          {application.scheduledDate && (
            <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[#FF8A00]/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#FF8A00]" />
                <div>
                  <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Confirmed Broadcast Schedule</div>
                  <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                    {new Date(application.scheduledDate).toLocaleDateString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-[#16A34A] font-semibold">LOCKED</span>
            </div>
          )}

          {/* Details Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono pt-4 border-t border-[var(--border-subtle)]">
            <div>
              <div className="text-[var(--text-muted)] text-[10px]">CATEGORY</div>
              <div className="text-[var(--text-primary)] font-semibold mt-0.5">{application.channelCategory}</div>
            </div>
            <div>
              <div className="text-[var(--text-muted)] text-[10px]">TIER APPLIED</div>
              <div className="text-[var(--text-primary)] font-semibold mt-0.5">{application.preferredPackage}</div>
            </div>
            <div>
              <div className="text-[var(--text-muted)] text-[10px]">SUBMITTED AT</div>
              <div className="text-[var(--text-secondary)] mt-0.5">{new Date(application.submittedAt).toLocaleDateString()}</div>
            </div>
            <div>
              <div className="text-[var(--text-muted)] text-[10px]">LAST UPDATE</div>
              <div className="text-[var(--text-secondary)] mt-0.5">{new Date(application.updatedAt).toLocaleDateString()}</div>
            </div>
          </div>

          {/* Direct Support Footer */}
          <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
            <span className="text-[var(--text-secondary)]">Need to update your submission?</span>
            <a
              href="https://t.me/TradingLegend_Official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF8A00] hover:underline flex items-center gap-1 font-mono font-medium"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Review Desk</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col transition-colors duration-200">
      <Navbar />
      <main className="flex-grow py-10 sm:py-16">
        <div className="site-container">
          <Suspense
            fallback={
              <div className="text-center py-20 text-xs text-[var(--text-muted)] font-mono">
                Loading tracking engine...
              </div>
            }
          >
            <TrackingContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
