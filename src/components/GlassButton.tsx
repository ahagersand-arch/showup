import { cn } from '@/lib/utils';
import { tokens } from '@/lib/tokens';
import { type ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  emphasis?: 'high' | 'low';
};

export const GlassButton = ({
  className,
  emphasis = 'high',
  children,
  ...props
}: Props) => {
  return (
    <button
      className={cn(
        tokens.glass,
        tokens.motion.calm,
        'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium',
        emphasis === 'high' ? 'text-slate-900' : 'text-slate-700',
        'hover:bg-white/46 disabled:opacity-60 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
