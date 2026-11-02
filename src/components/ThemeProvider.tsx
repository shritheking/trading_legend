'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'system' | 'light' | 'dark';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  resolvedTheme: 'dark',
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('system');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('tl-theme') as ThemeMode | null;
    const initialTheme: ThemeMode = saved === 'light' || saved === 'dark' || saved === 'system' ? saved : 'system';
    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (targetTheme: ThemeMode) => {
    const isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const effective: ResolvedTheme =
      targetTheme === 'system' ? (isDarkSystem ? 'dark' : 'light') : targetTheme;

    setResolvedTheme(effective);

    const root = document.documentElement;
    if (effective === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('tl-theme', newTheme);
    applyTheme(newTheme);
  };

  // Listen to OS scheme changes if on system
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const current = localStorage.getItem('tl-theme') as ThemeMode | null;
      if (!current || current === 'system') {
        applyTheme('system');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
