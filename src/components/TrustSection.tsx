'use client';

import React from 'react';
import { Shield, Award, Eye, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface TrustSectionProps {
  pillars?: { title: string; description: string }[];
}

export function TrustSection({ pillars }: TrustSectionProps) {
  const defaultPillars = [
    {
      num: '01',
      title: 'Selective Channel Reviews',
      description:
        'Every trading community is audited individually. We examine post history, analytical rigor, and member interaction to verify real educational substance.',
      icon: Shield,
    },
    {
      num: '02',
      title: 'Quality-Focused Promotions',
      description:
        'We feature trading educators committed to risk management, discipline, and sustainable methodology rather than sensationalized claims.',
      icon: Award,
    },
    {
      num: '03',
      title: 'Transparent Application Process',
      description:
        'Applicants receive a unique Reference ID upon submission to track review progress, reviewer notes, and scheduling milestones in real time.',
      icon: Eye,
    },
    {
      num: '04',
      title: 'Dedicated Campaign Support',
      description:
        'Direct coordination with our review desk via official Telegram channels to ensure accurate scheduling, creative review, and punctual execution.',
      icon: Headphones,
    },
  ];

  const items = pillars && pillars.length === 4
    ? pillars.map((p, idx) => ({
        ...p,
        num: defaultPillars[idx].num,
        icon: defaultPillars[idx].icon,
      }))
    : defaultPillars;

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[var(--bg-primary)]">
      <div className="site-container">
        {/* Asymmetric Header + Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement (4 cols on lg) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[var(--badge-text)]">
              STANDARDS & ETHICS
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--text-primary)] tracking-tight uppercase leading-tight">
              Our Platform Approach
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Trading Legend operates under strict editorial curation to maintain trustworthiness across every promotional broadcast.
            </p>

            <div className="pt-2">
              <Link
                href="/#channel-requirements"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#F07800] hover:underline"
              >
                <span>Read Channel Requirements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Staggered Editorial Principles (8 cols on lg) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-7 sm:p-8 flex flex-col justify-between hover:border-[#F07800]/50 transition-colors duration-200 shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-heading font-extrabold text-2xl text-[#F07800]">
                        {item.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)]">
                        <Icon className="w-4 h-4 text-[#F07800]" />
                      </div>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                    <span>Enforced Policy</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
