'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Monitor, Check } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = [
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'dark', label: 'Dark', icon: Moon },
    { id: 'system', label: 'System', icon: Monitor },
  ] as const;

  return (
    <div ref={ref} className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Change theme"
        className="flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#F07800]/50"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-[#FFB000]" />
        ) : (
          <Sun className="w-4 h-4 text-[#F07800]" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] px-2.5 py-1">
            Appearance
          </div>
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = theme === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setTheme(opt.id);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                  isSelected
                    ? 'bg-[#F07800]/10 text-[#F07800]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5" />
                  <span>{opt.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#F07800]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
