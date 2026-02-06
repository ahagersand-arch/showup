'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { Topbar } from '@/components/Topbar';
import { type ListingData } from '@/lib/mock';
import { listingToQuery } from '@/lib/navigation';
import { useBookingDraft } from '@/hooks/useBookingDraft';

export const KlartClient = ({ listing }: { listing: ListingData }) => {
  const { draft, clearDraft } = useBookingDraft();

  useEffect(() => {
    return () => clearDraft();
  }, [clearDraft]);

  const query = listingToQuery(listing);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_25%_12%,#f8fcff,#deebf9)] px-4 pb-16 pt-24 md:px-8">
      <Topbar />
      <div className="mx-auto grid w-full max-w-3xl gap-6">
        <GlassCard strong>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">Bokning bekräftad</p>
          <h1 className="mt-3 font-serif text-4xl text-slate-900">Tack – din privata visning är bokad</h1>
          <p className="mt-3 text-slate-700">Sammanfattning:</p>
          <div className="mt-4 grid gap-2 rounded-2xl border border-white/55 bg-white/45 p-5 text-sm text-slate-700">
            <p>Tid: {draft.slotLabel ?? 'Ons 18 sep • 18:00'}</p>
            <p>Adress: {listing.address}</p>
            <p>Mäklare: {listing.agent}</p>
            <p>Byrå: {listing.agency}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
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
