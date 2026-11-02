'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'navbar' | 'footer' | 'icon' | 'badge' | 'loading';
  className?: string;
  href?: string;
}

export function BrandLogo({ variant = 'navbar', className = '', href = '/' }: BrandLogoProps) {
  const content = (() => {
    switch (variant) {
      case 'icon':
        return (
          <div className={`relative flex items-center justify-center ${className}`}>
            <Image
              src="/logo-icon.png"
              alt="Trading Legend Emblem"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        );

      case 'badge':
        return (
          <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xs ${className}`}>
            <Image
              src="/logo-cropped.png"
              alt="Trading Legend"
              width={140}
              height={40}
              className="object-contain h-8 w-auto rounded"
            />
          </div>
        );

      case 'loading':
        return (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#F07800]/20 blur-xl" />
              <Image
                src="/logo-icon.png"
                alt="Trading Legend"
                width={72}
                height={72}
                className="relative z-10 object-contain"
                priority
              />
            </div>
            <div className="flex items-center gap-1.5 font-heading font-extrabold tracking-wider text-xl text-[var(--text-primary)]">
              TRADING <span className="text-[#FF8A00]">LEGEND</span>
            </div>
          </div>
        );

      case 'footer':
        return (
          <div className={`flex items-center gap-3.5 ${className}`}>
            <div className="relative h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-1.5">
              <Image
                src="/logo-icon.png"
                alt="Trading Legend"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-[var(--text-primary)] tracking-tight leading-none">
                TRADING <span className="text-[#FF8A00]">LEGEND</span>
              </span>
              <span className="text-[10px] font-mono font-medium text-[var(--text-muted)] tracking-widest uppercase mt-1">
                Promotion Platform
              </span>
            </div>
          </div>
        );

      case 'navbar':
      default:
        return (
          <div className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
            {/* Crisp TL Symbol badge */}
            <div className="relative h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] group-hover:border-[#F07800]/60 transition-colors p-1 shadow-xs">
              <Image
                src="/logo-icon.png"
                alt="Trading Legend"
                width={32}
                height={32}
                className="object-contain transform group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            {/* Typography adhering strictly to Sora + Inter */}
            <div className="flex flex-col">
              <div className="font-heading font-extrabold text-sm sm:text-base md:text-lg text-[var(--text-primary)] tracking-wide uppercase leading-tight">
                TRADING <span className="text-[#FF8A00]">LEGEND</span>
              </div>
              <div className="text-[9px] sm:text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-widest leading-none mt-0.5">
                Vetted Network
              </div>
            </div>
          </div>
        );
    }
  })();

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-[#F07800] rounded-xl">
        {content}
      </Link>
    );
  }

  return content;
}
