'use client';

import { cn } from '@/lib/utils';
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
        'fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300',
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
    >
      <div className="absolute inset-0 bg-slate-900/25" onClick={onClose} />
      <div
        className={cn(
          'relative w-full max-w-lg rounded-3xl border border-white/60 bg-white/52 p-6 backdrop-blur-3xl shadow-glow',
          open ? 'translate-y-0' : 'translate-y-3'
        )}
      >
        <h3 className="font-serif text-2xl text-slate-900">{title}</h3>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};
