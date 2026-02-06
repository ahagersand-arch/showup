import { tokens } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type Level = 'primary' | 'secondary' | 'utility';

type Props = {
  children: ReactNode;
  className?: string;
  level?: Level;
  /** Backwards compat: if true, treat as primary */
  strong?: boolean;
};

export const GlassCard = ({ children, className, level = 'secondary', strong }: Props) => {
  const resolvedLevel: Level = strong ? 'primary' : level;

  // Support either token shape:
  // - tokens.material.primary/secondary/utility
  // - tokens.surfaces.glass / glassStrong
  const material =
    (tokens as any)?.material?.[resolvedLevel] ??
    ((tokens as any)?.surfaces?.glassStrong && resolvedLevel === 'primary'
      ? (tokens as any).surfaces.glassStrong
      : (tokens as any)?.surfaces?.glass) ??
    '';

  const radius = (tokens as any)?.radii?.xl ?? 'rounded-2xl';

  return (
    <section className={cn(material, radius, 'p-6 md:p-8', className)}>
      {children}
    </section>
  );
};
