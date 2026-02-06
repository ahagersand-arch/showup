'use client';

import { cn } from '@/lib/utils';
import { tokens } from '@/lib/tokens';
import { type ReactNode } from 'react';

type Props = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ open, title, onClose, children }: Props) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center p-4',
        tokens.motion.calm,
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
    >
      <div className="absolute inset-0 bg-slate-900/18" onClick={onClose} />

      <div
        className={cn(
          'relative w-full max-w-lg p-6',
          tokens.material.secondary,
          tokens.motion.calm,
          open ? 'translate-y-0' : 'translate-y-2'
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-2xl text-slate-900">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full px-3 py-1 text-sm text-slate-700 hover:bg-white/20"
          >
            Stäng
          </button>
        </div>

        <div className="mt-4 text-sm text-slate-700">{children}</div>
      </div>
    </div>
  );
};
