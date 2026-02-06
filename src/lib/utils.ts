export const cn = (...parts: Array<string | undefined | false>) =>
  parts.filter(Boolean).join(' ');
