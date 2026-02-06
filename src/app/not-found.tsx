import Link from 'next/link';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#f8fcff,#dce8f8)] p-4">
      <GlassCard strong className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">404</p>
        <h1 className="mt-2 font-serif text-5xl text-slate-900">Sidan hittades inte</h1>
        <p className="mt-3 text-slate-700">Låt oss ta dig tillbaka till bokningsflödet.</p>
        <div className="mt-6">
          <Link href="/boka">
            <GlassButton>Tillbaka till ShowUp</GlassButton>
          </Link>
        </div>
      </GlassCard>
    </main>
  );
}
