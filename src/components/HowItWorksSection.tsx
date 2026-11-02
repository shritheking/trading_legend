'use client';

import React from 'react';
import { Send, FileSearch, CheckCircle2, CalendarCheck, ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Submit Application',
      description:
        'Submit your channel details, audience metrics, and preferred promotional placement through our secure portal.',
      icon: Send,
      color: '#8757FF', // Purple
      bgTint: 'rgba(135, 87, 255, 0.12)',
    },
    {
      number: '02',
      title: 'Editorial Review',
      description:
        'Our compliance desk audits channel history, educational substance, and authentic member engagement.',
      icon: FileSearch,
      color: '#24C8E8', // Cyan
      bgTint: 'rgba(36, 200, 232, 0.12)',
    },
    {
      number: '03',
      title: 'Confirmation & Token',
      description:
        'Receive your unique Reference ID and reservation details upon successful editorial verification.',
      icon: CheckCircle2,
      color: '#FFC247', // Gold
      bgTint: 'rgba(255, 194, 71, 0.12)',
    },
    {
      number: '04',
      title: 'Broadcast Scheduling',
      description:
        'Your promotional campaign is slotted into our primetime broadcast calendar with verified delivery.',
      icon: CalendarCheck,
      color: '#FF8A00', // Orange
      bgTint: 'rgba(255, 138, 0, 0.12)',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-28 bg-[var(--bg-primary)] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[#FF8A00] mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#24C8E8]" />
            <span>VERIFIED WORKFLOW</span>
          </div>
          <h2 className="section-headline text-[var(--text-primary)] uppercase">
            HOW IT WORKS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            A transparent, curated four-step pathway from initial application to network publication.
          </p>
        </div>

        {/* Workflow steps: Mobile vertical timeline, Desktop horizontal sequence */}
        <div className="relative">
          {/* Subtle multi-gradient line for desktop */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#8757FF] via-[#24C8E8] to-[#FF8A00] opacity-40 z-0" />

          {/* Mobile vertical line */}
          <div className="lg:hidden absolute top-4 bottom-8 left-6 w-[2px] bg-gradient-to-b from-[#8757FF] via-[#24C8E8] to-[#FF8A00] opacity-30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 xl:gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0 group rounded-2xl bg-[var(--bg-card)] lg:bg-transparent p-5 sm:p-6 lg:p-0 border border-[var(--border-subtle)] lg:border-none shadow-xs lg:shadow-none"
                >
                  {/* Step Marker & Icon */}
                  <div className="flex lg:items-center lg:justify-between w-full mb-0 lg:mb-5 shrink-0">
                    <div
                      className="w-12 h-12 rounded-2xl border border-[var(--border-subtle)] flex items-center justify-center transition-all group-hover:scale-105 shadow-xs"
                      style={{ backgroundColor: step.bgTint }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                    <span
                      className="hidden lg:block font-heading font-extrabold text-2xl font-mono"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between lg:hidden mb-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold" style={{ color: step.color }}>
                        Step {step.number}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-heading font-bold text-[var(--text-primary)] mb-1.5">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>

                    <div className="hidden lg:block mt-5 pt-3 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
                      Phase {index + 1} of 4
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick link to start */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/apply"
            className="btn-touch inline-flex items-center justify-center gap-2 text-sm font-semibold text-[var(--text-primary)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] hover:border-[#FF8A00]/50 px-6 py-3.5 rounded-xl transition-all shadow-xs"
          >
            <span>Begin Step 01: Application Form</span>
            <ArrowRight className="w-4 h-4 text-[#FF8A00]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
