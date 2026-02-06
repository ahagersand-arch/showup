'use client';

import { cn } from '@/lib/utils';
import { tokens } from '@/lib/tokens';

type Props = {
  show: boolean;
  message: string;
};

export const Toast = ({ show, message }: Props) => {
  return (
    <div
      className={cn(
        tokens.glass,
        tokens.motion.calm,
        'fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl px-4 py-2 text-sm text-slate-700',
        show ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-1'
      )}
    >
      {message}
    </div>
  );
};
