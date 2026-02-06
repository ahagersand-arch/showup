'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { Toast } from '@/components/Toast';
import { Topbar } from '@/components/Topbar';

export default function AvbokaPage() {
  const [done, setDone] = useState(false);
  const params = useSearchParams();
  const token = params.get('token') ?? 'saknas';

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_15%,#f7fbff,#dbe7f6)] px-4 pb-16 pt-24 md:px-8">
      <Topbar />
      <div className="mx-auto w-full max-w-2xl">
        <GlassCard strong>
          <h1 className="font-serif text-4xl text-slate-900">Avboka privat visning</h1>
          <p className="mt-3 text-slate-700">Token: {token}</p>
          <p className="mt-1 text-sm text-slate-600">
            Demo-läge: avbokningen registreras lokalt och visar bekräftelse direkt.
          </p>
          <div className="mt-6">
            <GlassButton onClick={() => setDone(true)}>Bekräfta avbokning</GlassButton>
          </div>
        </GlassCard>
      </div>
      <Toast show={done} message="Bokningen är avbokad (demo)." />
    </main>
  );
}
