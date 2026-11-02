'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Compass, Network, ShieldCheck } from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto select-none">
      {/* Subtle warm accent ambient glow */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-[#F07800]/10 via-[#FFB000]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Structural Frame */}
      <div className="relative rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 shadow-xl overflow-hidden transition-all duration-300">
        {/* Subtle Background Structural Geometry */}
        <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-fine-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-fine-grid)" />
          </svg>
        </div>

        {/* Top Header Label */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#F07800]" />
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-[var(--text-secondary)]">
              Curated Community Distribution Network
            </span>
          </div>
          <span className="text-[11px] font-mono text-[var(--text-muted)]">
            Est. Review Standards
          </span>
        </div>

        {/* Central Abstract Network Artwork */}
        <div className="my-6 relative h-64 sm:h-72 w-full rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center overflow-hidden">
          {/* Subtle concentric rings representing community network distribution */}
          <div className="absolute w-52 h-52 rounded-full border border-[#F07800]/15 dark:border-[#F07800]/25 animate-pulse" />
          <div className="absolute w-72 h-72 rounded-full border border-[var(--border-subtle)]" />
          <div className="absolute w-96 h-96 rounded-full border border-[var(--border-subtle)] opacity-40" />

          {/* SVG Vector Topology - Editorial & Mathematical Network Intersections */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Structural Axis Lines */}
            <line x1="50" y1="140" x2="450" y2="140" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="250" y1="30" x2="250" y2="250" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="4 4" />

            {/* Network Vector Connections */}
            <path
              d="M 90 200 C 160 180, 180 100, 250 80 C 320 60, 360 160, 420 120"
              stroke="#F07800"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="drop-shadow-[0_2px_8px_rgba(240,120,0,0.3)]"
            />
            <path
              d="M 110 90 C 180 130, 210 200, 290 190 C 370 180, 390 90, 430 70"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="6 6"
            />

            {/* Node Points */}
            <circle cx="90" cy="200" r="4.5" fill="var(--bg-card)" stroke="#F07800" strokeWidth="2.5" />
            <circle cx="250" cy="80" r="5" fill="var(--bg-card)" stroke="#F07800" strokeWidth="2.5" />
            <circle cx="420" cy="120" r="4.5" fill="var(--bg-card)" stroke="#FFB000" strokeWidth="2.5" />
            <circle cx="290" cy="190" r="4" fill="var(--bg-card)" stroke="var(--text-secondary)" strokeWidth="2" />
          </svg>

          {/* Center Brand Anchor Badge */}
          <div className="relative z-10 flex flex-col items-center justify-center p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-lg">
            <Image
              src="/logo-icon.png"
              alt="Trading Legend Emblem"
              width={44}
              height={44}
              className="object-contain"
            />
            <div className="mt-2 text-[11px] font-heading font-bold text-[var(--text-primary)] uppercase tracking-wider">
              TRADING LEGEND
            </div>
            <div className="text-[9px] font-mono text-[var(--text-muted)] tracking-widest uppercase">
              Vetted Hub
            </div>
          </div>

          {/* Floating Subtle Annotation Tags */}
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-secondary)] shadow-xs flex items-center gap-1.5">
            <Network className="w-3.5 h-3.5 text-[#F07800]" />
            <span>Targeted Reach</span>
          </div>

          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-secondary)] shadow-xs flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Quality Standard</span>
          </div>
        </div>

        {/* Bottom Context Footnote */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-xs text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#F07800]" />
            <span>Structured exposure across vetted financial communities</span>
          </div>
          <span className="font-mono text-[11px] text-[var(--text-muted)]">
            Manual Editorial Audit
          </span>
        </div>
      </div>
    </div>
  );
}
