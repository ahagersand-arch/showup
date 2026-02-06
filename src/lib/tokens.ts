export const tokens = {
  page:
    'bg-[radial-gradient(circle_at_18%_12%,#f4f8ff_0%,#e6eef9_48%,#dde8f6_100%)] text-slate-800',
  material: {
    primary:
      'backdrop-blur-3xl bg-white/42 border border-white/56 shadow-[0_24px_72px_rgba(66,88,124,0.24)] rounded-3xl',
    secondary:
      'backdrop-blur-2xl bg-white/34 border border-white/50 shadow-[0_14px_42px_rgba(66,88,124,0.16)] rounded-3xl',
    utility:
      'backdrop-blur-xl bg-white/26 border border-white/42 shadow-[0_8px_24px_rgba(66,88,124,0.12)] rounded-3xl'
  },
  text: {
    eyebrow: 'text-xs uppercase tracking-[0.14em] text-slate-600',
    title: 'font-serif text-3xl md:text-4xl text-slate-900',
    body: 'text-sm text-slate-700'
  },
  motion: {
    calm: 'transition-all duration-200 ease-out'
  }
} as const;
