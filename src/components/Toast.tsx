'use client';

import { cn } from '@/lib/utils';

type Props = {
  show: boolean;
  message: string;
};

export const Toast = ({ show, message }: Props) => {
  return (
    <div
      className={cn(
        'fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-white/60 bg-white/60 px-4 py-3 text-sm text-slate-800 backdrop-blur-xl shadow-glow',
        'transition-all duration-200 ease-out',
        show ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-3'
      )}
    >
      {message}
    </div>
  );
};
