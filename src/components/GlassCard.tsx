import { tokens } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  strong?: boolean;
};

export const GlassCard = ({ children, className, strong = false }: Props) => {
  return (
    <section
      className={cn(
        strong ? tokens.surfaces.glassStrong : tokens.surfaces.glass,
        tokens.radii.xl,
        'p-6 md:p-8',
        className
      )}
    >
      {children}
    </section>
  );
};
