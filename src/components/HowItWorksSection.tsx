'use client';

import React from 'react';
import { Send, FileSearch, CheckCircle2, CalendarCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Application',
      description:
        'Complete our structured application form with your channel statistics, primary category, and campaign preferences.',
      icon: Send,
    },
    {
      number: '02',
      title: 'Channel Review',
      description:
        'Our compliance committee manually reviews post quality, analytical value, and audience engagement integrity.',
      icon: FileSearch,
    },
    {
      number: '03',
      title: 'Approval & Confirmation',
      description:
        'Upon approval, receive campaign confirmation, verified reference token, and placement reservation instructions.',
      icon: CheckCircle2,
    },
    {
      number: '04',
      title: 'Promotion Scheduling',
      description:
        'Your promotional campaign is slotted into our primetime broadcast calendar with verified delivery tracking.',
      icon: CalendarCheck,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#303030] text-xs font-mono text-[#F07800] mb-3">
            VERIFIED WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            HOW IT WORKS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A3A3A3]">
            A seamless, transparent four-step trajectory from initial submission to network broadcast.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#F07800]/40 via-[#FFB000]/60 to-[#22C55E]/40 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#191919] border border-[#303030] p-6 lg:p-7 flex flex-col justify-between hover:border-[#F07800]/50 transition-all duration-300 shadow-xl group"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-heading font-extrabold text-2xl lg:text-3xl text-[#F07800] tracking-tighter">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#202020] border border-[#383838] group-hover:border-[#F07800]/60 text-white flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5 text-[#FFB000]" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-heading font-bold text-white mb-2.5">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono text-[#666666]">
                    <span>Step {index + 1} of 4</span>
                    <span className="text-[#F07800]">&bull;&bull;&bull;</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick CTA to start */}
        <div className="mt-14 text-center">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#191919] hover:bg-[#222222] border border-[#383838] px-6 py-3 rounded-xl transition-colors"
          >
            <span>Begin Step 01: Application Form</span>
            <ArrowRight className="w-4 h-4 text-[#F07800]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
