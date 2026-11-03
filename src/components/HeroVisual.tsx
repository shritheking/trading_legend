'use client';

import React from 'react';

export function HeroVisual() {
  return (
    <div className="w-full max-w-[540px] mx-auto select-none">
      <svg
        viewBox="0 0 540 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
        aria-label="Trading Legend Financial Candlestick Interface"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#FF8A00" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FF8A00" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="maLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#24C8E8" />
            <stop offset="50%" stopColor="#FFC247" />
            <stop offset="100%" stopColor="#FF8A00" />
          </linearGradient>

          <pattern id="chartGrid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" className="text-[var(--border-subtle)]" strokeWidth="0.8" strokeOpacity="0.4" />
          </pattern>
        </defs>

        {/* Outer Frame with Rounded Corners & Hairline Border */}
        <rect
          x="3"
          y="3"
          width="534"
          height="374"
          rx="14"
          className="fill-[var(--bg-surface)] stroke-[var(--border-subtle)]"
          strokeWidth="1.2"
        />

        {/* Chart Background Grid */}
        <rect x="6" y="52" width="528" height="320" rx="4" fill="url(#chartGrid)" />

        {/* Terminal Header Bar */}
        <rect x="3" y="3" width="534" height="48" rx="14" className="fill-[var(--bg-secondary)]" />
        <line x1="3" y1="51" x2="537" y2="51" className="stroke-[var(--border-subtle)]" strokeWidth="1" />

        {/* Window Control Dots */}
        <circle cx="24" cy="27" r="4.5" fill="#EF4444" />
        <circle cx="39" cy="27" r="4.5" fill="#FFC247" />
        <circle cx="54" cy="27" r="4.5" fill="#22C55E" />

        {/* Pair Ticker & Live Status */}
        <g transform="translate(78, 20)">
          <text x="0" y="10" className="fill-[var(--text-primary)]" fontSize="12" fontWeight="800" fontFamily="sans-serif">
            TL / NETWORK INDEX
          </text>
          <text x="142" y="10" fill="#22C55E" fontSize="10" fontWeight="700" fontFamily="monospace">
            ● +7.42%
          </text>
        </g>

        {/* Timeframe Badges */}
        <g transform="translate(380, 16)">
          <rect x="0" y="0" width="32" height="22" rx="4" className="fill-[var(--bg-surface)] stroke-[var(--border-subtle)]" strokeWidth="1" />
          <text x="16" y="15" textAnchor="middle" className="fill-[var(--text-secondary)]" fontSize="10" fontFamily="monospace">1H</text>

          <rect x="38" y="0" width="32" height="22" rx="4" fill="#FF8A00" />
          <text x="54" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="700">4H</text>

          <rect x="76" y="0" width="32" height="22" rx="4" className="fill-[var(--bg-surface)] stroke-[var(--border-subtle)]" strokeWidth="1" />
          <text x="92" y="15" textAnchor="middle" className="fill-[var(--text-secondary)]" fontSize="10" fontFamily="monospace">1D</text>
        </g>

        {/* Price Scale (Right Axis) */}
        <g transform="translate(485, 60)" className="fill-[var(--text-muted)]" fontSize="9" fontFamily="monospace">
          <text x="0" y="20">98.4K</text>
          <text x="0" y="70">95.2K</text>
          <text x="0" y="120">92.0K</text>
          <text x="0" y="170">88.8K</text>
          <text x="0" y="220">85.6K</text>
        </g>

        {/* Horizontal Price Guidelines */}
        <line x1="20" y1="80" x2="475" y2="80" stroke="currentColor" className="text-[var(--border-subtle)]" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
        <line x1="20" y1="130" x2="475" y2="130" stroke="currentColor" className="text-[var(--border-subtle)]" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
        <line x1="20" y1="180" x2="475" y2="180" stroke="currentColor" className="text-[var(--border-subtle)]" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
        <line x1="20" y1="230" x2="475" y2="230" stroke="currentColor" className="text-[var(--border-subtle)]" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />

        {/* Gradient Area Fill under Trend */}
        <path
          d="M 28 240 Q 90 220 150 190 T 260 160 T 360 120 T 465 85 L 465 270 L 28 270 Z"
          fill="url(#chartGradient)"
        />

        {/* Financial Candlesticks (Realistic Bullish Green #22C55E & Bearish Orange/Red #FF8A00) */}
        <g id="candlesticks">
          {/* Candle 1 (Bullish) */}
          <line x1="38" y1="210" x2="38" y2="255" stroke="#22C55E" strokeWidth="1.2" />
          <rect x="33" y="222" width="10" height="24" rx="1.5" fill="#22C55E" />

          {/* Candle 2 (Bearish) */}
          <line x1="62" y1="215" x2="62" y2="250" stroke="#FF8A00" strokeWidth="1.2" />
          <rect x="57" y="224" width="10" height="18" rx="1.5" fill="#FF8A00" />

          {/* Candle 3 (Bullish) */}
          <line x1="86" y1="195" x2="86" y2="240" stroke="#22C55E" strokeWidth="1.2" />
          <rect x="81" y="208" width="10" height="22" rx="1.5" fill="#22C55E" />

          {/* Candle 4 (Bullish) */}
          <line x1="110" y1="180" x2="110" y2="225" stroke="#22C55E" strokeWidth="1.2" />
          <rect x="105" y="190" width="10" height="26" rx="1.5" fill="#22C55E" />

          {/* Candle 5 (Bearish Pullback) */}
          <line x1="134" y1="175" x2="134" y2="215" stroke="#FF8A00" strokeWidth="1.2" />
          <rect x="129" y="186" width="10" height="16" rx="1.5" fill="#FF8A00" />

          {/* Candle 6 (Bullish Long) */}
          <line x1="158" y1="150" x2="158" y2="200" stroke="#22C55E" strokeWidth="1.2" />
          <rect x="153" y="162" width="10" height="30" rx="1.5" fill="#22C55E" />

          {/* Candle 7 (Bullish) */}
          <line x1="182" y1="140" x2="182" y2="185" stroke="#22C55E" strokeWidth="1.2" />
          <rect x="177" y="152" width="10" height="22" rx="1.5" fill="#22C55E" />

          {/* Candle 8 (Bearish Doji) */}
          <line x1="206" y1="135" x2="206" y2="175" stroke="#FF8A00" strokeWidth="1.2" />
          <rect x="201" y="148" width="10" height="10" rx="1.5" fill="#FF8A00" />

          {/* Candle 9 (Bullish Breakout) */}
          <line x1="230" y1="120" x2="230" y2="170" stroke="#22C55E" strokeWidth="1.2" />
          <rect x="225" y="132" width="10" height="28" rx="1.5" fill="#22C55E" />

          {/* Candle 10 (Bullish) */}
          <line x1="254" y1="110" x2="254" y2="155" stroke="#22C55E" strokeWidth="1.2" />
          <rect x="249" y="122" width="10" height="24" rx="1.5" fill="#22C55E" />

          {/* Candle 11 (Bearish Pullback) */}
          <line x1="278" y1="115" x2="278" y2="150" stroke="#FF8A00" strokeWidth="1.2" />
          <rect x="273" y="126" width="10" height="15" rx="1.5" fill="#FF8A00" />

          {/* Candle 12 (Bullish Impulse) */}
          <line x1="302" y1="95" x2="302" y2="140" stroke="#22C55E" strokeWidth="1.2" />
          <rect x="297" y="106" width="10" height="26" rx="1.5" fill="#22C55E" />

          {/* Candle 13 (Bullish) */}
          <line x1="326" y1="85" x2="326" y2="130" stroke="#22C55E" strokeWidth="1.2" />
          <rect x="321" y="96" width="10" height="24" rx="1.5" fill="#22C55E" />

          {/* Candle 14 (Bearish Consolidation) */}
          <line x1="350" y1="88" x2="350" y2="125" stroke="#FF8A00" strokeWidth="1.2" />
          <rect x="345" y="98" width="10" height="14" rx="1.5" fill="#FF8A00" />

          {/* Candle 15 (Bullish Continuation) */}
          <line x1="374" y1="75" x2="374" y2="115" stroke="#22C55E" strokeWidth="1.2" />
          <rect x="369" y="84" width="10" height="26" rx="1.5" fill="#22C55E" />

          {/* Candle 16 (Bullish Strong) */}
          <line x1="398" y1="65" x2="398" y2="110" stroke="#22C55E" strokeWidth="1.2" />
          <rect x="393" y="74" width="10" height="28" rx="1.5" fill="#22C55E" />

          {/* Candle 17 (Bearish Pinbar) */}
          <line x1="422" y1="60" x2="422" y2="105" stroke="#FF8A00" strokeWidth="1.2" />
          <rect x="417" y="72" width="10" height="16" rx="1.5" fill="#FF8A00" />

          {/* Candle 18 (Bullish Crest) */}
          <line x1="446" y1="50" x2="446" y2="95" stroke="#22C55E" strokeWidth="1.2" />
          <rect x="441" y="58" width="10" height="24" rx="1.5" fill="#22C55E" />
        </g>

        {/* Dynamic Moving Average Trend Curves */}
        <path
          d="M 28 245 Q 90 225 150 195 T 260 162 T 360 120 T 465 82"
          fill="none"
          stroke="url(#maLineGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M 28 258 Q 95 240 165 215 T 275 180 T 385 140 T 465 105"
          fill="none"
          stroke="#8757FF"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          strokeOpacity="0.8"
        />

        {/* Current Live Price Marker */}
        <circle cx="446" cy="58" r="4.5" fill="#22C55E" />
        <circle cx="446" cy="58" r="8" fill="#22C55E" opacity="0.35" />

        {/* Volume Histogram (Bottom Bars) */}
        <g id="volumeBars" opacity="0.65">
          <rect x="34" y="260" width="8" height="12" rx="1" fill="#22C55E" />
          <rect x="58" y="264" width="8" height="8" rx="1" fill="#FF8A00" />
          <rect x="82" y="256" width="8" height="16" rx="1" fill="#22C55E" />
          <rect x="106" y="252" width="8" height="20" rx="1" fill="#22C55E" />
          <rect x="130" y="262" width="8" height="10" rx="1" fill="#FF8A00" />
          <rect x="154" y="246" width="8" height="26" rx="1" fill="#22C55E" />
          <rect x="178" y="252" width="8" height="20" rx="1" fill="#22C55E" />
          <rect x="202" y="263" width="8" height="9" rx="1" fill="#FF8A00" />
          <rect x="226" y="248" width="8" height="24" rx="1" fill="#22C55E" />
          <rect x="250" y="254" width="8" height="18" rx="1" fill="#22C55E" />
          <rect x="274" y="262" width="8" height="10" rx="1" fill="#FF8A00" />
          <rect x="298" y="244" width="8" height="28" rx="1" fill="#22C55E" />
          <rect x="322" y="248" width="8" height="24" rx="1" fill="#22C55E" />
          <rect x="346" y="261" width="8" height="11" rx="1" fill="#FF8A00" />
          <rect x="370" y="242" width="8" height="30" rx="1" fill="#22C55E" />
          <rect x="394" y="238" width="8" height="34" rx="1" fill="#22C55E" />
          <rect x="418" y="258" width="8" height="14" rx="1" fill="#FF8A00" />
          <rect x="442" y="236" width="8" height="36" rx="1" fill="#22C55E" />
        </g>

        {/* Floating UI Card 1 (Top Left): Channel Velocity */}
        <g transform="translate(24, 75)">
          <rect
            width="170"
            height="58"
            rx="10"
            className="fill-[var(--bg-surface)] stroke-[var(--border-subtle)]"
            strokeWidth="1.2"
          />
          <circle cx="20" cy="22" r="5" fill="#22C55E" />
          <text x="32" y="25" className="fill-[var(--text-muted)] uppercase" fontSize="9" fontFamily="monospace" fontWeight="700">
            AUDIENCE VELOCITY
          </text>
          <text x="16" y="47" className="fill-[var(--text-primary)]" fontSize="16" fontWeight="800" fontFamily="sans-serif">
            +68.4%
          </text>
          <text x="86" y="46" fill="#22C55E" fontSize="10" fontFamily="monospace" fontWeight="600">
            ▲ Organic Reach
          </text>
        </g>

        {/* Floating UI Card 2 (Bottom Right): Verified Retention */}
        <g transform="translate(310, 290)">
          <rect
            width="200"
            height="62"
            rx="10"
            className="fill-[var(--bg-surface)] stroke-[var(--border-subtle)]"
            strokeWidth="1.2"
          />
          <circle cx="20" cy="22" r="5" fill="#FF8A00" />
          <text x="32" y="25" className="fill-[var(--text-muted)] uppercase" fontSize="9" fontFamily="monospace" fontWeight="700">
            COMMUNITY RETENTION
          </text>
          <text x="16" y="50" className="fill-[var(--text-primary)]" fontSize="17" fontWeight="800" fontFamily="sans-serif">
            96.8%
          </text>
          <text x="78" y="48" fill="#FF8A00" fontSize="10" fontFamily="monospace" fontWeight="600">
            48h Pinned Focus
          </text>
        </g>

        {/* Floating UI Card 3 (Bottom Left): Live Review Desk */}
        <g transform="translate(24, 305)">
          <rect
            width="155"
            height="46"
            rx="8"
            className="fill-[var(--bg-surface)] stroke-[var(--border-subtle)]"
            strokeWidth="1"
          />
          <circle cx="16" cy="23" r="3.5" fill="#24C8E8" />
          <text x="26" y="20" className="fill-[var(--text-primary)]" fontSize="10" fontWeight="700" fontFamily="sans-serif">
            100% Manual Audit
          </text>
          <text x="26" y="34" className="fill-[var(--text-muted)]" fontSize="8" fontFamily="monospace">
            Active Review Queue
          </text>
        </g>
      </svg>
    </div>
  );
}
