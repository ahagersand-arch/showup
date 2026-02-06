'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { tokens } from '@/lib/tokens';
import { cn } from '@/lib/utils';

export const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 md:px-8">
      <div
        className={cn(
          'mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3',
          tokens.motion.calm,
          scrolled ? tokens.glass : 'bg-transparent border border-transparent rounded-3xl'
        )}
      >
        <Link href="/boka" className="font-serif text-xl text-slate-900">
          ShowUp
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-700">
          <Link href="/maklare" className="hover:text-slate-900">
            Mäklarvy
          </Link>
          <Link href="/integrera" className="hover:text-slate-900">
            Integrera
          </Link>
        </nav>
      </div>
    </header>
  );
};
