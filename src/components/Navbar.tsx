'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowRight, Search } from 'lucide-react';

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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          aria-label="Announcement"
          className="relative z-50 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] py-2 px-4 text-xs font-medium text-center text-[var(--text-secondary)] flex items-center justify-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#F07800] animate-pulse" />
          <span className="text-[var(--text-primary)] font-medium">{announcement}</span>
          <Link
            href="/apply"
            className="hidden sm:inline-flex items-center text-[#F07800] hover:text-[var(--text-primary)] ml-2 font-mono text-[11px] underline underline-offset-2 transition-colors"
          >
            Submit Channel &rarr;
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
          <div className="flex items-center justify-between h-20">
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
              {/* Theme Toggle */}
              <ThemeToggle />

              <Link
                href="/track"
                className="px-3.5 py-2 text-xs font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] transition-all flex items-center gap-1.5"
                title="Lookup reference status"
              >
                <Search className="w-3.5 h-3.5 text-[#F07800]" />
                Track Status
              </Link>

              <Link
                href="/apply"
                className="gradient-btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide flex items-center gap-2 shadow-xs transition-all"
              >
                <span>Apply for Promotion</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu & Theme Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />

              <Link
                href="/apply"
                className="gradient-btn-primary px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1"
              >
                <span>Apply</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#F07800]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-card)] px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2.5">
                <Link
                  href="/track"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-sm font-medium text-[var(--text-primary)]"
                >
                  <Search className="w-4 h-4 text-[#F07800]" />
                  Check Application Status
                </Link>

                <Link
                  href="/apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl gradient-btn-primary text-sm font-bold shadow-md"
                >
                  <span>Apply for Promotion</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="text-center pt-2">
                  <Link
                    href="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] font-mono"
                  >
                    Staff & Admin Portal
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
