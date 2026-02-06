import { tokens } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  level?: 'primary' | 'secondary' | 'utility';
};

export const GlassCard = ({ children, className, level = 'secondary' }: Props) => {
  return <section className={cn(tokens.material[level], 'p-5 md:p-6', className)}>{children}</section>;
};
