'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  announcement?: string;
  announcementActive?: boolean;
}

export function Navbar({ announcement, announcementActive = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Approach', href: '/#approach' },
    { label: 'Promotions', href: '/#promotions' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Standards', href: '/#standards' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Track Status', href: '/track' },
  ];

  return (
    <>
      {/* Optional Top Announcement Bar */}
      {announcementActive && announcement && (
        <aside
          aria-label="Platform Announcement"
          className="bg-[#121212] border-b border-[#262626] text-white text-[12px] font-mono py-1.5 px-4 text-center tracking-wide"
        >
          <div className="site-container flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
            <span>{announcement}</span>
          </div>
        </aside>
      )}

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-subtle)] transition-colors duration-200">
        <div className="site-container">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <BrandLogo variant="navbar" href="/" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm font-medium text-[var(--text-secondary)]">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-[var(--text-primary)] transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/apply"
                className="btn-primary text-xs uppercase tracking-wider font-bold px-5 py-2.5 flex items-center gap-2 shadow-xs"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Controls: Theme + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 sm:top-18 z-40 bg-[var(--bg-primary)] lg:hidden flex flex-col justify-between overflow-y-auto animate-in fade-in duration-150">
          <div className="site-container py-6 space-y-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] px-3 mb-2">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3.5 text-base font-semibold text-[var(--text-primary)] hover:text-[#FF8A00] border-b border-[var(--border-subtle)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Drawer Bottom CTA */}
          <div className="p-6 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full py-4 text-center font-bold text-sm tracking-wide flex items-center justify-center gap-2"
            >
              <span>Apply for Promotion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-[11px] font-mono text-[var(--text-muted)] flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF8A00]" />
              <span>Vetted Trading Partner Network</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
