'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Send, FileSearch, CheckCircle2, CalendarCheck } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Submit Application',
      timeframe: '5 minutes',
      description:
        'Submit your channel link, audience metrics, and preferred promotional placement through our structured application form.',
      icon: Send,
    },
    {
      number: '02',
      title: 'Editorial Compliance Review',
      timeframe: '24–48 hours',
      description:
        'Our compliance desk manually audits your channel history, analytical substance, and genuine member interaction.',
      icon: FileSearch,
    },
    {
      number: '03',
      title: 'Confirmation & Reference Token',
      timeframe: 'Immediate upon decision',
      description:
        'Receive your unique Reference ID to track review progress, reviewer notes, and scheduling confirmation in real time.',
      icon: CheckCircle2,
    },
    {
      number: '04',
      title: 'Broadcast Scheduling & Delivery',
      timeframe: 'Per calendar slot',
      description:
        'Your promotional broadcast is slotted into our primetime broadcast calendar with verified delivery and post retention.',
      icon: CalendarCheck,
    },
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="text-xs font-mono uppercase text-[#FF8A00] tracking-wider mb-2 font-semibold">
            APPLICATION WORKFLOW
          </div>
          <h2 className="section-headline text-[var(--text-primary)] uppercase">
            How It Works
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            A transparent, curated four-step pathway from initial channel submission to primetime network publication.
          </p>
        </div>

        {/* Vertical Step-by-Step Timeline (Clean, compact, no oversized cards) */}
        <div className="max-w-3xl relative">
          {/* Subtle Vertical Spine */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-5 w-[1px] bg-[var(--border-strong)] z-0" />

          <div className="space-y-6 sm:space-y-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start gap-4 sm:gap-6">
                  {/* Step Marker Circle */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-primary)] border-2 border-[#FF8A00] flex items-center justify-center shrink-0 text-xs sm:text-sm font-mono font-bold text-[#FF8A00] shadow-xs">
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-0.5">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-heading font-bold text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--text-muted)]">
                        • {step.timeframe}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs font-mono text-[var(--text-muted)]">
            Ready to submit your channel? Applications take under 5 minutes.
          </span>
          <Link
            href="/apply"
            className="btn-primary btn-touch px-6 py-3 text-sm font-bold flex items-center gap-2"
          >
            <span>Begin Step 01: Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
