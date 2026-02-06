export const tokens = {
  page:
    'bg-[radial-gradient(circle_at_18%_12%,#f4f8ff_0%,#e6eef9_48%,#dde8f6_100%)] text-slate-800',
  glass:
    'backdrop-blur-2xl bg-white/36 border border-white/50 shadow-[0_18px_55px_rgba(66,88,124,0.18)] rounded-3xl',
  text: {
    eyebrow: 'text-xs tracking-[0.16em] uppercase text-slate-600',
    title: 'font-serif text-3xl md:text-4xl text-slate-900',
    body: 'text-base text-slate-700',
    quiet: 'text-sm text-slate-600'
  },
  motion: {
    calm: 'transition-all duration-200 ease-out'
  }
} as const;
