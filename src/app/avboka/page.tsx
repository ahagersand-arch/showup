'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { Toast } from '@/components/Toast';
import { Topbar } from '@/components/Topbar';
import { tokens } from '@/lib/tokens';

export default function AvbokaPage() {
  const [done, setDone] = useState(false);
  const token = useSearchParams().get('token') ?? 'saknas';

  return (
    <main className={`${tokens.page} min-h-screen px-4 pb-16 pt-24 md:px-8`}>
      <Topbar />
      <div className="mx-auto w-full max-w-2xl">
        <GlassCard>
          <h1 className={tokens.text.title}>Avboka privat visning</h1>
          <p className="mt-3 text-sm text-slate-700">Token: {token}</p>
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

