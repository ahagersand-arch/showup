import Link from 'next/link';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { tokens } from '@/lib/tokens';

export default function NotFound() {
  return (
    <main className={`${tokens.page} flex min-h-screen items-center justify-center p-4`}>
      <GlassCard level="primary" className="max-w-xl p-7 text-center">
        <p className={tokens.text.eyebrow}>404</p>
        <h1 className={`${tokens.text.title} mt-2`}>Sidan hittades inte</h1>
        <p className={`${tokens.text.muted} mt-3`}>
          Gå tillbaka till bokningsflödet.
        </p>

        <div className="mt-6 flex justify-center">
          <Link href="/boka">
            <GlassButton>Tillbaka</GlassButton>
          </Link>
        </div>
      </GlassCard>
    </main>
  );
}
