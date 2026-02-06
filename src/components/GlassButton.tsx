import { tokens } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { type ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export const GlassButton = ({ className, children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      className={cn(
        variant === 'ghost' ? tokens.material.utility : tokens.material.secondary,
        tokens.motion.calm,
        'inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-slate-900',
        'hover:bg-white/34 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-500/45 focus-visible:ring-offset-0',
        'disabled:cursor-not-allowed disabled:opacity-60',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
