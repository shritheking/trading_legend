'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Gentle display for smooth entrance, then fade out cleanly
    const timer = setTimeout(() => {
      setFade(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 500); // 500ms fade transition
      return () => clearTimeout(removeTimer);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg-primary)] transition-opacity duration-500 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Soft radial glow */}
        <div className="absolute w-36 h-36 rounded-full bg-[#FF8A00]/20 blur-2xl animate-pulse pointer-events-none" />

        {/* Breathing / Blinking Logo Icon */}
        <div className="relative z-10 animate-pulse duration-1000">
          <Image
            src="/logo-icon.png"
            alt="Trading Legend"
            width={84}
            height={84}
            className="object-contain drop-shadow-md"
            priority
          />
        </div>

        {/* Brand Name */}
        <div className="mt-4 font-heading font-extrabold tracking-wider text-xl text-[var(--text-primary)] animate-pulse">
          TRADING <span className="text-[#FF8A00]">LEGEND</span>
        </div>
      </div>
    </div>
  );
}
