'use client';

import React from 'react';
import { ShieldCheck, Award, Eye, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';
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
      icon: ShieldCheck,
      color: '#8757FF', // Purple
      bgTint: 'rgba(135, 87, 255, 0.1)',
      borderHover: 'hover:border-[#8757FF]/60',
      badgeText: 'Audit Standard',
    },
    {
      num: '02',
      title: 'Quality-Focused Promotions',
      description:
        'We feature trading educators committed to risk management, discipline, and sustainable methodology rather than sensationalized claims.',
      icon: Award,
      color: '#FFC247', // Gold
      bgTint: 'rgba(255, 194, 71, 0.1)',
      borderHover: 'hover:border-[#FFC247]/60',
      badgeText: 'Curated Roster',
    },
    {
      num: '03',
      title: 'Transparent Application Process',
      description:
        'Applicants receive a unique Reference ID upon submission to track review progress, reviewer notes, and scheduling milestones in real time.',
      icon: Eye,
      color: '#24C8E8', // Cyan
      bgTint: 'rgba(36, 200, 232, 0.1)',
      borderHover: 'hover:border-[#24C8E8]/60',
      badgeText: 'Real-Time Tracking',
    },
    {
      num: '04',
      title: 'Dedicated Campaign Support',
      description:
        'Direct coordination with our review desk via official Telegram channels to ensure accurate scheduling, creative review, and punctual execution.',
      icon: Headphones,
      color: '#FF8A00', // Orange
      bgTint: 'rgba(255, 138, 0, 0.1)',
      borderHover: 'hover:border-[#FF8A00]/60',
      badgeText: 'Direct Liaison',
    },
  ];

  const items = pillars && pillars.length === 4
    ? pillars.map((p, idx) => ({
        ...p,
        num: defaultPillars[idx].num,
        icon: defaultPillars[idx].icon,
        color: defaultPillars[idx].color,
        bgTint: defaultPillars[idx].bgTint,
        borderHover: defaultPillars[idx].borderHover,
        badgeText: defaultPillars[idx].badgeText,
      }))
    : defaultPillars;

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[var(--bg-primary)] relative">
      <div className="site-container">
        {/* Asymmetric Header + Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Editorial Statement (4 cols on lg) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--border-subtle)] text-xs font-mono font-medium text-[var(--badge-text)] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
              <span>ETHICS & VERIFICATION</span>
            </div>

            <h2 className="section-headline text-[var(--text-primary)] uppercase">
              Our Platform Approach
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Trading Legend operates under strict editorial curation to maintain high trustworthiness across every promotional broadcast. We protect member communities from predatory promotion.
            </p>

            <div className="pt-2">
              <Link
                href="/#channel-requirements"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#FF8A00] hover:text-[#FFC247] transition-colors"
              >
                <span>Read Channel Requirements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Staggered Color-Coded Editorial Principles */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`rounded-2xl sm:rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${item.borderHover} shadow-xs relative overflow-hidden group`}
                >
                  {/* Subtle top color accent border */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: item.color }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="font-heading font-extrabold text-2xl tracking-tight"
                        style={{ color: item.color }}
                      >
                        {item.num}
                      </span>
                      <div
                        className="w-10 h-10 rounded-xl border border-[var(--border-subtle)] flex items-center justify-center transition-transform group-hover:scale-105"
                        style={{ backgroundColor: item.bgTint }}
                      >
                        <Icon className="w-5 h-5" style={{ color: item.color }} />
                      </div>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                      <span>Enforced Protocol</span>
                    </span>
                    <span className="font-semibold" style={{ color: item.color }}>
                      {item.badgeText}
                    </span>
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
