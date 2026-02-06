'use client';

import { tokens } from '@/lib/tokens';
import { cn } from '@/lib/utils';

type Props = {
  show: boolean;
  message: string;
};

export const Toast = ({ show, message }: Props) => {
  return (
    <div
      className={cn(
        'fixed bottom-6 left-1/2 z-50 -translate-x-1/2 px-4 py-3 text-sm text-slate-700',
        tokens.material.utility,
        tokens.motion.calm,
        show ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2'
      )}
    >
      {message}
    </div>
  );
};
