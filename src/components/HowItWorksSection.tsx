'use client';

import React from 'react';
import { Send, FileSearch, CheckCircle2, CalendarCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Submit Application',
      description:
        'Submit your channel details, audience metrics, and preferred promotional placement through our structured portal.',
      icon: Send,
    },
    {
      number: '02',
      title: 'Editorial Review',
      description:
        'Our compliance desk audits channel history, educational substance, and engagement authenticity.',
      icon: FileSearch,
    },
    {
      number: '03',
      title: 'Confirmation & Token',
      description:
        'Receive your unique Reference ID and reservation details upon successful editorial verification.',
      icon: CheckCircle2,
    },
    {
      number: '04',
      title: 'Broadcast Scheduling',
      description:
        'Your promotional campaign is slotted into our primetime broadcast calendar with verified delivery.',
      icon: CalendarCheck,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 lg:py-32 bg-[var(--bg-primary)]">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[#F07800] mb-3">
            VERIFIED WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[var(--text-primary)] tracking-tight uppercase">
            HOW IT WORKS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)]">
            A transparent, curated four-step pathway from initial application to network publication.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Subtle Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[1px] bg-[var(--border-subtle)] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col relative group pt-2 lg:pt-0"
                >
                  {/* Step Marker */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] group-hover:border-[#F07800] flex items-center justify-center text-[var(--text-primary)] transition-colors shadow-xs">
                      <Icon className="w-5 h-5 text-[#F07800]" />
                    </div>
                    <span className="font-heading font-extrabold text-2xl text-[var(--text-muted)] font-mono">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title & Content */}
                  <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
                    Phase {index + 1} of 4
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick link to start */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] border border-[var(--border-subtle)] px-6 py-3 rounded-xl transition-colors shadow-xs"
          >
            <span>Begin Step 01: Application Form</span>
            <ArrowRight className="w-4 h-4 text-[#F07800]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
