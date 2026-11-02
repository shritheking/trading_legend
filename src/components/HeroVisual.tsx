'use client';

import React from 'react';
import Image from 'next/image';
import { Network, ShieldCheck, Zap, TrendingUp, Users, Radio } from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto select-none px-2 sm:px-0">
      {/* Dynamic ambient color glow spots */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#8757FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#24C8E8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF8A00]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Main Structural Frame */}
      <div className="relative rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-5 sm:p-7 lg:p-8 shadow-2xl overflow-hidden transition-all duration-300">
        {/* Subtle Background Circuit Grid */}
        <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.07] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-circuit" width="36" height="36" patternUnits="userSpaceOnUse">
                <path d="M 36 0 L 0 0 0 36" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="18" cy="18" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-circuit)" />
          </svg>
        </div>

        {/* Top Header Tag */}
        <div className="flex items-center justify-between pb-5 border-b border-[var(--border-subtle)] relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#24C8E8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#24C8E8]" />
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[var(--text-primary)]">
              TRADING COMMUNITY NETWORK
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#8757FF]/10 border border-[#8757FF]/30 text-[#8757FF] text-[10px] font-mono font-bold uppercase tracking-wider">
            <span>AUDITED CHANNELS</span>
          </div>
        </div>

        {/* Central 3D Trading & Connectivity Vector Canvas */}
        <div className="my-5 sm:my-6 relative h-64 sm:h-80 w-full rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center overflow-hidden">
          {/* Depth rings in brand colors */}
          <div className="absolute w-60 h-60 rounded-full border border-[#FF8A00]/20 animate-pulse" />
          <div className="absolute w-80 h-80 rounded-full border border-[#8757FF]/20" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-[#24C8E8]/15" />

          {/* SVG Vector Topology with Rich Colors (Orange, Gold, Purple, Cyan) */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 540 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="curve-orange-gold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF8A00" />
                <stop offset="50%" stopColor="#FFC247" />
                <stop offset="100%" stopColor="#24C8E8" />
              </linearGradient>

              <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF8A00" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#8757FF" stopOpacity="0.10" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="curve-purple-cyan" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8757FF" />
                <stop offset="100%" stopColor="#24C8E8" />
              </linearGradient>
            </defs>

            {/* Shaded Area Under Primary Trajectory */}
            <path
              d="M 40 250 Q 140 180, 220 200 T 380 120 T 500 70 L 500 290 L 40 290 Z"
              fill="url(#area-gradient)"
            />

            {/* Subtle Candlesticks Architecture */}
            <g opacity="0.35">
              {[
                { x: 70, y: 220, h: 35, c: '#FF8A00' },
                { x: 120, y: 190, h: 45, c: '#8757FF' },
                { x: 170, y: 210, h: 30, c: '#FFC247' },
                { x: 220, y: 170, h: 60, c: '#24C8E8' },
                { x: 270, y: 150, h: 40, c: '#FF8A00' },
                { x: 320, y: 130, h: 70, c: '#22C55E' },
                { x: 370, y: 110, h: 50, c: '#8757FF' },
                { x: 420, y: 90, h: 65, c: '#24C8E8' },
                { x: 470, y: 65, h: 45, c: '#FFC247' },
              ].map((bar, idx) => (
                <g key={idx}>
                  <line x1={bar.x + 4} y1={bar.y - 10} x2={bar.x + 4} y2={bar.y + bar.h + 10} stroke="var(--border-strong)" strokeWidth="1.5" />
                  <rect x={bar.x} y={bar.y} width="8" height={bar.h} rx="2" fill={bar.c} />
                </g>
              ))}
            </g>

            {/* Primary Glowing Curve (Orange -> Gold -> Cyan) */}
            <path
              d="M 40 250 Q 140 180, 220 200 T 380 120 T 500 70"
              stroke="url(#curve-orange-gold)"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="drop-shadow-[0_4px_12px_rgba(255,138,0,0.45)]"
            />

            {/* Secondary Intersecting Curve (Purple -> Cyan) */}
            <path
              d="M 50 140 C 150 170, 200 240, 300 210 C 400 180, 430 110, 490 85"
              stroke="url(#curve-purple-cyan)"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />

            {/* Interactive Nodes */}
            <circle cx="140" cy="180" r="6" fill="var(--bg-card)" stroke="#FF8A00" strokeWidth="3" />
            <circle cx="220" cy="200" r="5" fill="var(--bg-card)" stroke="#FFC247" strokeWidth="2.5" />
            <circle cx="300" cy="210" r="5" fill="var(--bg-card)" stroke="#8757FF" strokeWidth="2.5" />
            <circle cx="380" cy="120" r="6" fill="var(--bg-card)" stroke="#24C8E8" strokeWidth="3" />
            <circle cx="500" cy="70" r="7" fill="#24C8E8" stroke="var(--bg-card)" strokeWidth="2" />
          </svg>

          {/* Center Brand Anchor Badge */}
          <div className="relative z-10 flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl">
            <Image
              src="/logo-icon.png"
              alt="Trading Legend Logo"
              width={42}
              height={42}
              className="object-contain"
              priority
            />
            <span className="mt-1.5 font-heading font-extrabold text-[11px] sm:text-xs text-[var(--text-primary)] uppercase tracking-wider">
              TRADING LEGEND
            </span>
            <span className="text-[9px] font-mono text-[#FF8A00] tracking-widest uppercase">
              Vetted Hub
            </span>
          </div>

          {/* Floating UI Card 1: Top Left - Community Exposure (Cyan) */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2.5 sm:p-3 rounded-xl bg-[var(--bg-card)]/95 border border-[#24C8E8]/35 backdrop-blur-md shadow-lg flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#24C8E8]/15 flex items-center justify-center text-[#24C8E8]">
              <Users className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Verified Reach</div>
              <div className="text-xs font-heading font-bold text-[var(--text-primary)]">Targeted Traders</div>
            </div>
          </div>

          {/* Floating UI Card 2: Bottom Right - Editorial Standard (Purple) */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 p-2.5 sm:p-3 rounded-xl bg-[var(--bg-card)]/95 border border-[#8757FF]/35 backdrop-blur-md shadow-lg flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#8757FF]/15 flex items-center justify-center text-[#8757FF]">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Quality Filter</div>
              <div className="text-xs font-heading font-bold text-[var(--text-primary)]">Anti-Scam Verified</div>
            </div>
          </div>
        </div>

        {/* Bottom Context Footnote */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 pt-2 text-xs text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-[#FF8A00]" />
            <span>Structured exposure across vetted financial communities</span>
          </div>
          <span className="font-mono text-[11px] text-[var(--text-muted)]">
            Manual Review Standards
          </span>
        </div>
      </div>
    </div>
  );
}
