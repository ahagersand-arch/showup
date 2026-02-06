'use client';

import { tokens } from '@/lib/tokens';
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
          'fixed inset-0 z-40 bg-slate-900/18',
          tokens.motion.calm,
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-full max-w-md p-6',
          tokens.material.secondary,
          tokens.motion.calm,
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl text-slate-900">{title}</h3>
          <button onClick={onClose} className="text-sm text-slate-700">
            Stäng
          </button>
        </div>
        <div className="mt-5 space-y-3 text-sm text-slate-700">{children}</div>
      </aside>
    </>
  );
};
