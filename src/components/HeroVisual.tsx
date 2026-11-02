'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, ShieldCheck, Activity, Layers, Radio, Sparkles } from 'lucide-react';

export function HeroVisual() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => (p + 1) % 100);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto select-none">
      {/* Background ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#F07800]/15 via-[#FFB000]/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative rounded-2xl bg-[#191919] border border-[#303030] shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#303030] bg-[#141414]">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#EF4444]/80" />
            <div className="h-3 w-3 rounded-full bg-[#FFB000]/80" />
            <div className="h-3 w-3 rounded-full bg-[#22C55E]/80" />
            <span className="ml-2 text-xs font-mono text-[#A3A3A3] tracking-wide">
              TL-PROMOTION-ENGINE // V3.2
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#22C55E] animate-ping" />
            <span className="text-[11px] font-mono font-medium text-[#22C55E]">NETWORK LIVE</span>
          </div>
        </div>

        {/* Chart Window */}
        <div className="p-6">
          {/* Top Metric Bar */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="rounded-xl bg-[#202020] p-3 border border-[#303030]/80">
              <div className="text-[11px] text-[#A3A3A3] uppercase font-mono tracking-wider">Review Rate</div>
              <div className="text-base font-heading font-bold text-white mt-0.5 flex items-center gap-1.5">
                100% Manual
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
              </div>
            </div>

            <div className="rounded-xl bg-[#202020] p-3 border border-[#303030]/80">
              <div className="text-[11px] text-[#A3A3A3] uppercase font-mono tracking-wider">Weekly Slots</div>
              <div className="text-base font-heading font-bold text-[#FFB000] mt-0.5 flex items-center gap-1.5">
                Capped
                <Radio className="w-4 h-4 text-[#F07800]" />
              </div>
            </div>

            <div className="rounded-xl bg-[#202020] p-3 border border-[#303030]/80">
              <div className="text-[11px] text-[#A3A3A3] uppercase font-mono tracking-wider">Integrity Filter</div>
              <div className="text-base font-heading font-bold text-[#22C55E] mt-0.5 flex items-center gap-1.5">
                Active
                <Sparkles className="w-4 h-4 text-[#22C55E]" />
              </div>
            </div>
          </div>

          {/* Abstract SVG Graphic: Financial Matrix & Geometric Trajectory */}
          <div className="relative h-56 w-full rounded-xl bg-[#111111] border border-[#2b2b2b] p-3 overflow-hidden">
            {/* Grid background */}
            <svg className="absolute inset-0 h-full w-full stroke-white/[0.04]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" strokeWidth="1" />
                </pattern>
                <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F07800" stopOpacity="0.35" />
                  <stop offset="60%" stopColor="#FFB000" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#111111" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="stroke-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#F07800" />
                  <stop offset="50%" stopColor="#FFB000" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            {/* Geometric Chart Lines */}
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 500 200">
              {/* Shaded Area */}
              <path
                d="M 0 160 Q 75 140, 140 130 T 260 100 T 380 65 T 500 40 L 500 200 L 0 200 Z"
                fill="url(#gradient-area)"
              />

              {/* Lower baseline reference */}
              <path
                d="M 0 180 Q 90 170, 180 160 T 340 140 T 500 120"
                fill="none"
                stroke="#303030"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Upper trajectory curve */}
              <path
                d="M 0 160 Q 75 140, 140 130 T 260 100 T 380 65 T 500 40"
                fill="none"
                stroke="url(#stroke-grad)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Milestone Dots */}
              <circle cx="140" cy="130" r="5" fill="#191919" stroke="#F07800" strokeWidth="2.5" />
              <circle cx="260" cy="100" r="5" fill="#191919" stroke="#FFB000" strokeWidth="2.5" />
              <circle cx="380" cy="65" r="5" fill="#191919" stroke="#F07800" strokeWidth="2.5" />
              <circle cx="500" cy="40" r="6" fill="#FFB000" stroke="#FFFFFF" strokeWidth="3" />
            </svg>

            {/* Abstract Candlesticks array */}
            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end pointer-events-none opacity-40">
              {[
                { h: 36, c: '#F07800' },
                { h: 54, c: '#FFB000' },
                { h: 42, c: '#22C55E' },
                { h: 68, c: '#22C55E' },
                { h: 48, c: '#F07800' },
                { h: 84, c: '#22C55E' },
                { h: 72, c: '#FFB000' },
                { h: 104, c: '#22C55E' },
                { h: 96, c: '#22C55E' },
                { h: 128, c: '#F07800' },
                { h: 140, c: '#22C55E' },
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-[1.5px] bg-[#666666] mb-[-2px]" style={{ height: `${bar.h + 16}px` }} />
                  <div
                    className="w-3 rounded-xs shadow-sm"
                    style={{ height: `${bar.h}px`, backgroundColor: bar.c }}
                  />
                </div>
              ))}
            </div>

            {/* Float Highlight Badge */}
            <div className="absolute top-4 right-4 rounded-lg bg-[#191919]/90 border border-[#303030] px-3 py-1.5 backdrop-blur-md flex items-center gap-2 shadow-lg">
              <Activity className="w-3.5 h-3.5 text-[#22C55E]" />
              <span className="text-xs font-mono font-medium text-white">Targeted Organic Exposure</span>
            </div>
          </div>

          {/* Bottom Execution Status */}
          <div className="mt-4 flex items-center justify-between text-xs text-[#A3A3A3] pt-3 border-t border-[#303030]/60">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#F07800]" />
              <span>Multi-tier Telegram & Community Distribution</span>
            </div>
            <div className="font-mono text-[#FFB000] text-[11px]">Strict Compliance</div>
          </div>
        </div>
      </div>
    </div>
  );
}
