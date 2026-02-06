import { tokens } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const GlassCard = ({ children, className }: Props) => {
  return <section className={cn(tokens.glass, 'p-6 md:p-8', className)}>{children}</section>;
};
