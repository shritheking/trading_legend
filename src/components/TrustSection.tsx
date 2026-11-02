'use client';

import React from 'react';
import { CheckCircle2, Shield, Eye, Headphones, Award } from 'lucide-react';

interface TrustSectionProps {
  pillars?: { title: string; description: string }[];
}

export function TrustSection({ pillars }: TrustSectionProps) {
  const defaultPillars = [
    {
      title: 'Selective Channel Reviews',
      description:
        'Every trading community is evaluated individually. We audit post history, educational depth, and authentic discussion to maintain ecosystem standards.',
      icon: Shield,
      accent: '#F07800',
    },
    {
      title: 'Quality-Focused Promotions',
      description:
        'We highlight creators focused on risk discipline, sound market analysis, and sustainable methodologies rather than deceptive hype.',
      icon: Award,
      accent: '#FFB000',
    },
    {
      title: 'Transparent Application Process',
      description:
        'Applicants receive a unique Reference ID upon submission to track review progress and placement milestones in real time.',
      icon: Eye,
      accent: '#22C55E',
    },
    {
      title: 'Dedicated Support',
      description:
        'Direct channel coordination with our review desk to ensure accurate campaign scheduling, creative verification, and punctuality.',
      icon: Headphones,
      accent: '#F07800',
    },
  ];

  const items = pillars && pillars.length === 4
    ? pillars.map((p, idx) => ({
        ...p,
        icon: defaultPillars[idx].icon,
        accent: defaultPillars[idx].accent,
      }))
    : defaultPillars;

  return (
    <section className="py-16 sm:py-20 bg-[#161616] border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-[11px] font-mono uppercase tracking-widest text-[#A3A3A3] mb-3">
            Core Principles
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Our Platform Approach
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#A3A3A3]">
            Engineered to uphold strict standards of integrity in financial media distribution.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl bg-[#202020] p-6 border border-[#303030] hover:border-[#F07800]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-transform group-hover:scale-105"
                    style={{
                      backgroundColor: `${item.accent}15`,
                      borderColor: `${item.accent}30`,
                      color: item.accent,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#A3A3A3] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2d2d2d] flex items-center gap-2 text-xs font-mono text-[#777777] group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Standard Policy</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
