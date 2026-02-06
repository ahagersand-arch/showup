import { cn } from '@/lib/utils';
import { tokens } from '@/lib/tokens';
import { type ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export const GlassButton = ({
  className,
  variant = 'primary',
  children,
  ...props
}: Props) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide',
        tokens.transitions.fast,
        variant === 'primary'
          ? 'bg-slate-900 text-white hover:bg-slate-800'
          : 'bg-white/35 text-slate-800 border border-white/50 hover:bg-white/55',
        'disabled:opacity-55 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
