'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 md:px-8">
      <div
        className={cn(
          'mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3 text-sm',
          'transition-all duration-300 ease-out',
          scrolled
            ? 'backdrop-blur-2xl bg-white/45 border border-white/50 shadow-[0_10px_35px_rgba(60,81,120,0.16)]'
            : 'bg-transparent border border-transparent'
        )}
      >
        <Link href="/boka" className="font-serif text-xl text-slate-900">
          ShowUp
        </Link>
        <nav className="flex items-center gap-3 text-slate-700">
          <Link href="/maklare" className="hover:text-slate-900 transition-colors">
            Mäklarvy
          </Link>
          <Link href="/integrera" className="hover:text-slate-900 transition-colors">
            Integrera
          </Link>
        </nav>
      </div>
    </header>
  );
};
