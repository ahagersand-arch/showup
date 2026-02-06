'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { Topbar } from '@/components/Topbar';
import { useBookingDraft } from '@/hooks/useBookingDraft';
import { type ListingData } from '@/lib/mock';
import { listingToQuery } from '@/lib/navigation';
import { tokens } from '@/lib/tokens';

export const KlartClient = ({ listing }: { listing: ListingData }) => {
  const { draft, clearDraft } = useBookingDraft();

  useEffect(() => {
    return () => clearDraft();
  }, [clearDraft]);

  const query = listingToQuery(listing);

  return (
    <main className={`${tokens.page} min-h-screen px-4 pb-16 pt-24 md:px-8`}>
      <Topbar />

      <div className="mx-auto w-full max-w-3xl">
        <GlassCard level="primary" className="p-7">
          <p className={tokens.text.eyebrow}>Bokning bekräftad</p>
          <h1 className={tokens.text.title}>Din privata visning är bokad</h1>

          <div className="mt-6 space-y-2 text-sm text-slate-700">
            <p>Tid: {draft.slotLabel ?? 'Ons 18 sep • 18:00'}</p>
            <p>Adress: {listing.address}</p>
            <p>Mäklare: {listing.agent}</p>
            <p>Byrå: {listing.agency}</p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <GlassButton variant="ghost">Lägg till i kalender (demo)</GlassButton>
            <GlassButton variant="ghost">Skicka SMS-kopia (demo)</GlassButton>

            <Link href={`/avboka?token=demo123&${query}`}>
              <GlassButton>Avboka tid</GlassButton>
            </Link>
          </div>
        </GlassCard>
      </div>
    </main>
  );
};
