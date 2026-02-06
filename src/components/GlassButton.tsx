import { tokens } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { type ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const GlassButton = ({ className, children, ...props }: Props) => {
  return (
    <button
      className={cn(
        tokens.glass,
        tokens.motion.calm,
        'inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-slate-900',
        'hover:bg-white/46 disabled:cursor-not-allowed disabled:opacity-60',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
