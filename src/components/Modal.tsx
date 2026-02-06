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
      <div className="absolute inset-0 bg-slate-900/20" onClick={onClose} />
      <div className={cn(tokens.glass, 'relative w-full max-w-md p-6', open ? 'translate-y-0' : 'translate-y-1')}>
        <h3 className="font-serif text-2xl text-slate-900">{title}</h3>
        <div className="mt-3 text-slate-700">{children}</div>
      </div>
    </div>
  );
};
