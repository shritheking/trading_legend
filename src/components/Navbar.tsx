'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import {
  Menu,
  X,
  ArrowRight,
  Search,
  Shield,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

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

  // Close mobile menu on route change
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
        <aside aria-label="Announcement" className="relative z-50 bg-[#161616] border-b border-[#303030] py-2 px-4 text-xs font-medium text-center text-[#A3A3A3] flex items-center justify-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#F07800] animate-pulse" />
          <span className="text-white font-medium">{announcement}</span>
          <Link
            href="/apply"
            className="hidden sm:inline-flex items-center text-[#FFB000] hover:text-[#FFFFFF] ml-2 font-mono text-[11px] underline underline-offset-2 transition-colors"
          >
            Submit Channel &rarr;
          </Link>
        </aside>
      )}

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#111111]/90 backdrop-blur-md border-b border-[#303030] shadow-lg shadow-black/40'
            : 'bg-[#111111] border-b border-[#303030]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-white bg-[#191919] border border-[#303030]'
                        : 'text-[#A3A3A3] hover:text-white hover:bg-[#191919]/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/track"
                className="px-3.5 py-2 text-xs font-mono font-medium text-[#A3A3A3] hover:text-white rounded-lg border border-[#303030] hover:border-[#404040] bg-[#191919] transition-all flex items-center gap-1.5"
                title="Lookup reference status"
              >
                <Search className="w-3.5 h-3.5 text-[#F07800]" />
                Track Status
              </Link>

              <Link
                href="/apply"
                className="gradient-btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide flex items-center gap-2 shadow-md hover:shadow-[#F07800]/25 transition-all"
              >
                <span>Apply for Promotion</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/apply"
                className="gradient-btn-primary px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <span>Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#191919] border border-[#303030] text-[#A3A3A3] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#F07800]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#303030] bg-[#141414] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-2xl">
            <div className="space-y-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-[#A3A3A3] hover:text-white hover:bg-[#202020] transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-[#303030] space-y-2.5">
                <Link
                  href="/track"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#303030] bg-[#191919] text-sm font-medium text-white"
                >
                  <Search className="w-4 h-4 text-[#F07800]" />
                  Check Application Status
                </Link>

                <Link
                  href="/apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl gradient-btn-primary text-sm font-bold shadow-lg"
                >
                  <span>Apply for Promotion</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="text-center pt-2">
                  <Link
                    href="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-[#666666] hover:text-[#A3A3A3] font-mono"
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
