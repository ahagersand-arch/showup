import Link from 'next/link';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { tokens } from '@/lib/tokens';

export default function NotFound() {
  return (
    <main className={`${tokens.page} flex min-h-screen items-center justify-center p-4`}>
      <GlassCard className="max-w-xl text-center">
        <p className={tokens.text.eyebrow}>404</p>
        <h1 className="mt-2 font-serif text-4xl text-slate-900">Sidan hittades inte</h1>
        <div className="mt-6">
          <Link href="/boka">
            <GlassButton>Tillbaka</GlassButton>
          </Link>
        </div>
      </GlassCard>
    </main>
  );
}
