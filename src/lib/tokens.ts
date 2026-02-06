export const tokens = {
  surfaces: {
    shell:
      'bg-[radial-gradient(circle_at_15%_20%,rgba(248,252,255,0.88),rgba(228,237,251,0.66)_42%,rgba(214,228,248,0.58)_100%)]',
    glass:
      'backdrop-blur-2xl bg-white/35 border border-white/45 shadow-[0_20px_80px_rgba(53,76,121,0.20)]',
    glassStrong:
      'backdrop-blur-3xl bg-white/44 border border-white/60 shadow-[0_24px_90px_rgba(42,64,111,0.24)]'
  },
  text: {
    title: 'text-slate-900',
    body: 'text-slate-700',
    muted: 'text-slate-600/90'
  },
  radii: {
    xl: 'rounded-3xl',
    lg: 'rounded-2xl'
  },
  transitions: {
    smooth: 'transition-all duration-300 ease-out',
    fast: 'transition-all duration-200 ease-out'
  }
} as const;
