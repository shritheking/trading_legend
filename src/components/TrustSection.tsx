'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface TrustSectionProps {
  pillars?: { title: string; description: string }[];
}

export function TrustSection({ pillars }: TrustSectionProps) {
  const defaultPillars = [
    {
      num: '01',
      title: 'Selective Channel Reviews',
      description:
        'Every trading community is audited individually. We examine post history, analytical methodology, and authentic member interaction to verify genuine educational substance.',
      policy: '100% Manual Audit',
    },
    {
      num: '02',
      title: 'Quality-Focused Promotions',
      description:
        'We feature trading educators committed to risk management, discipline, and sustainable methodology rather than sensationalized profit claims.',
      policy: 'Curated Roster',
    },
    {
      num: '03',
      title: 'Transparent Application Process',
      description:
        'Applicants receive a unique Reference ID upon submission to track review progress, reviewer notes, and scheduling milestones in real time.',
      policy: 'Real-Time Tracking',
    },
    {
      num: '04',
      title: 'Dedicated Campaign Support',
      description:
        'Direct coordination with our review desk via official Telegram channels to ensure accurate scheduling, creative compliance review, and punctual execution.',
      policy: 'Direct Coordination',
    },
  ];

  const items = pillars && pillars.length === 4
    ? pillars.map((p, idx) => ({
        ...p,
        num: defaultPillars[idx].num,
        policy: defaultPillars[idx].policy,
      }))
    : defaultPillars;

  return (
    <section id="approach" className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="text-xs font-mono uppercase text-[#FF8A00] tracking-wider mb-2 font-semibold">
            STANDARDS & PLATFORM APPROACH
          </div>
          <h2 className="section-headline text-[var(--text-primary)] uppercase">
            Our Platform Approach
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Trading Legend operates under strict editorial curation to maintain high trustworthiness across every promotional broadcast. We protect member communities from predatory promotion.
          </p>
        </div>

        {/* Clean Numbered Editorial List with Hairline Dividers (No repetitive cards) */}
        <div className="border-t border-[var(--border-subtle)] divide-y divide-[var(--border-subtle)]">
          {items.map((item, index) => (
            <div
              key={index}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-start hover:bg-[var(--bg-secondary)]/50 transition-colors px-2 sm:px-4 rounded-lg"
            >
              {/* Number (2 cols) */}
              <div className="md:col-span-2 flex items-center justify-between md:block">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#FF8A00] font-mono">
                  {item.num}
                </span>
                <span className="md:hidden inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                  {item.policy}
                </span>
              </div>

              {/* Title & Policy Badge (4 cols) */}
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-base sm:text-lg font-heading font-bold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <span className="hidden md:inline-block text-[11px] font-mono text-[var(--text-muted)]">
                  {item.policy}
                </span>
              </div>

              {/* Description (6 cols) */}
              <div className="md:col-span-6">
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Link */}
        <div className="mt-8 pt-4 flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
          <span>Enforced across all packages and applicants</span>
          <Link
            href="/#standards"
            className="text-[#FF8A00] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Read Channel Standards</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
