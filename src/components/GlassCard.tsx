import { tokens } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  level?: 'primary' | 'secondary' | 'utility';
  strong?: boolean;
};

export const GlassCard = ({ children, className, level = 'secondary', strong = false }: Props) => {
  const resolvedLevel = strong ? 'primary' : level;

  return (
    <section className={cn(tokens.material[resolvedLevel], resolvedLevel === 'primary' ? 'p-7 md:p-9' : 'p-5 md:p-6', className)}>
      {children}
    </section>
  );
};
