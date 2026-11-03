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
              src="/logo-icon.png"
              alt="Trading Legend"
              width={32}
              height={32}
              className="object-contain h-7 w-auto"
            />
            <span className="font-heading font-extrabold text-sm tracking-wide text-[var(--text-primary)]">
              TRADING <span className="text-[#FF8A00]">LEGEND</span>
            </span>
          </div>
        );

      case 'loading':
        return (
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#FF8A00]/25 blur-xl animate-pulse" />
              <Image
                src="/logo-icon.png"
                alt="Trading Legend"
                width={76}
                height={76}
                className="relative z-10 object-contain drop-shadow-md animate-pulse"
                priority
              />
            </div>
            <div className="font-heading font-extrabold tracking-wider text-xl text-[var(--text-primary)] animate-pulse">
              TRADING <span className="text-[#FF8A00]">LEGEND</span>
            </div>
          </div>
        );

      case 'footer':
        return (
          <div className={`flex items-center gap-3.5 ${className}`}>
            <div className="relative h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-1.5 shadow-2xs">
              <Image
                src="/logo-icon.png"
                alt="Trading Legend"
                width={34}
                height={34}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg text-[var(--text-primary)] tracking-wide leading-none">
                TRADING <span className="text-[#FF8A00]">LEGEND</span>
              </span>
            </div>
          </div>
        );

      case 'navbar':
      default:
        return (
          <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
            {/* Crisp TL Symbol badge */}
            <div className="relative h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] group-hover:border-[#FF8A00]/60 transition-colors p-1 shadow-2xs">
              <Image
                src="/logo-icon.png"
                alt="Trading Legend"
                width={32}
                height={32}
                className="object-contain transform group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            {/* Clean Brand Typography */}
            <div className="flex flex-col">
              <div className="font-heading font-extrabold text-sm sm:text-base md:text-lg text-[var(--text-primary)] tracking-wide uppercase leading-tight">
                TRADING <span className="text-[#FF8A00]">LEGEND</span>
              </div>
            </div>
          </div>
        );
    }
  })();

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] rounded-xl">
        {content}
      </Link>
    );
  }

  return content;
}
