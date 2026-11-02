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
              width={42}
              height={42}
              className="object-contain drop-shadow-[0_2px_10px_rgba(240,120,0,0.3)]"
              priority
            />
          </div>
        );

      case 'badge':
        return (
          <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#191919] border border-[#303030] shadow-sm ${className}`}>
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
              <div className="absolute inset-0 rounded-full bg-[#F07800]/20 blur-xl animate-pulse" />
              <Image
                src="/logo-icon.png"
                alt="Trading Legend"
                width={80}
                height={80}
                className="relative z-10 animate-bounce object-contain"
                priority
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold tracking-wider text-xl text-white">
                TRADING <span className="text-[#F07800]">LEGEND</span>
              </span>
            </div>
          </div>
        );

      case 'footer':
        return (
          <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#191919] border border-[#303030] p-1.5">
              <Image
                src="/logo-icon.png"
                alt="Trading Legend"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-white tracking-tight leading-none">
                TRADING <span className="text-[#F07800]">LEGEND</span>
              </span>
              <span className="text-[11px] font-medium text-[#A3A3A3] tracking-widest uppercase mt-1">
                Promotion Desk
              </span>
            </div>
          </div>
        );

      case 'navbar':
      default:
        return (
          <div className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
            {/* Crisp TL Symbol badge */}
            <div className="relative h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1c1c1c] to-[#141414] border border-[#303030] group-hover:border-[#F07800]/50 transition-colors p-1 shadow-sm">
              <Image
                src="/logo-icon.png"
                alt="Trading Legend"
                width={34}
                height={34}
                className="object-contain transform group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            {/* Exact typography matching brand guidelines */}
            <div className="flex flex-col">
              <div className="font-heading font-extrabold text-base sm:text-lg text-white tracking-wide uppercase leading-tight">
                TRADING <span className="text-[#F07800]">LEGEND</span>
              </div>
              <div className="text-[10px] text-[#A3A3A3] font-mono uppercase tracking-widest leading-none mt-0.5">
                Premium Network
              </div>
            </div>
          </div>
        );
    }
  })();

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-[#F07800] rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
