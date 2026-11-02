'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowRight, Search, Zap, Send, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  announcement?: string;
  announcementActive?: boolean;
}

export function Navbar({ announcement, announcementActive = true }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Promotions', href: '/#promotions' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Track Status', href: '/track' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar if active */}
      {announcementActive && announcement && (
        <aside
          aria-label="Platform Announcement"
          className="relative z-50 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] py-2 px-3 sm:px-4 text-[11px] sm:text-xs font-medium text-center text-[var(--text-secondary)] flex items-center justify-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse flex-shrink-0" />
          <span className="text-[var(--text-primary)] font-medium truncate max-w-[85vw] sm:max-w-none">
            {announcement}
          </span>
          <Link
            href="/apply"
            className="hidden md:inline-flex items-center text-[#FF8A00] hover:text-[var(--text-primary)] ml-1 font-mono text-[11px] underline underline-offset-2 transition-colors flex-shrink-0"
          >
            Apply Now &rarr;
          </Link>
        </aside>
      )}

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-subtle)] shadow-xs'
            : 'bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]'
        }`}
      >
        <div className="site-container">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <BrandLogo variant="navbar" href="/" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)] font-semibold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />

              <Link
                href="/track"
                className="px-3.5 py-2 text-xs font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] transition-all flex items-center gap-1.5"
                title="Lookup reference status"
              >
                <Search className="w-3.5 h-3.5 text-[#FF8A00]" />
                Track Status
              </Link>

              <Link
                href="/apply"
                className="gradient-btn-primary px-5 py-2 rounded-xl text-sm font-semibold tracking-wide flex items-center gap-2 shadow-xs transition-all"
              >
                <span>Apply for Promotion</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Navigation Controls (Min 44px tap targets) */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              <ThemeToggle />

              <Link
                href="/apply"
                className="gradient-btn-primary !min-h-[40px] px-3 sm:px-4 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 shadow-xs"
              >
                <span>Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[var(--text-primary)]" /> : <Menu className="w-5 h-5 text-[var(--text-primary)]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Side-Drawer with Backdrop */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] sm:top-[81px] bottom-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-start animate-in fade-in duration-200">
            <div className="w-full max-h-[85vh] overflow-y-auto bg-[var(--bg-card)] border-b border-[var(--border-subtle)] px-5 pt-4 pb-8 shadow-2xl flex flex-col justify-between">
              <div className="space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] px-3 pb-2">
                  Navigation
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] active:bg-[var(--bg-secondary)] transition-colors min-h-[48px]"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">&rarr;</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Actions Drawer Bottom */}
              <div className="pt-6 mt-4 border-t border-[var(--border-subtle)] space-y-3">
                <Link
                  href="/track"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-sm font-semibold text-[var(--text-primary)] min-h-[48px]"
                >
                  <Search className="w-4 h-4 text-[#FF8A00]" />
                  Check Application Status
                </Link>

                <Link
                  href="/apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl gradient-btn-primary text-sm font-bold shadow-md min-h-[48px]"
                >
                  <span>Apply for Promotion</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="text-center pt-2">
                  <Link
                    href="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] font-mono py-2 inline-block"
                  >
                    Admin Terminal Portal &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
