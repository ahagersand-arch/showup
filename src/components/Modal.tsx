'use client';

import { tokens } from '@/lib/tokens';
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
        'fixed inset-0 z-50 flex items-center justify-center p-4',
        tokens.motion.calm,
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
    >
      <div className="absolute inset-0 bg-slate-900/18" onClick={onClose} />
      <div className={cn(tokens.material.secondary, 'relative w-full max-w-md p-5', open ? 'translate-y-0' : 'translate-y-1')}>
        <h3 className="font-serif text-2xl text-slate-900">{title}</h3>
        <div className="mt-3 text-sm text-slate-700">{children}</div>
      </div>
    </div>
  );
};
