'use client';

import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export const Drawer = ({ open, onClose, title, children }: Props) => {
  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-slate-900/20 transition-opacity duration-300',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-white/50 bg-white/50 p-6 backdrop-blur-2xl transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl text-slate-900">{title}</h3>
          <button onClick={onClose} className="rounded-full bg-white/45 px-3 py-1 text-slate-700">
            Stäng
          </button>
        </div>
        <div className="mt-6 space-y-4 text-slate-700">{children}</div>
      </aside>
    </>
  );
};
