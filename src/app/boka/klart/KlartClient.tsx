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

  return (
    <main className={`${tokens.page} min-h-screen px-4 pb-16 pt-24 md:px-8`}>
      <Topbar />
      <div className="mx-auto w-full max-w-2xl">
        <GlassCard level="secondary" className="p-6">
          <p className={tokens.text.eyebrow}>Klart</p>
          <h1 className={tokens.text.title}>Din visning är bokad</h1>
          <div className="mt-5 space-y-2 text-sm text-slate-700">
            <p>{draft.slotLabel ?? 'Ons 18 sep • 18:00'}</p>
            <p>{listing.address}</p>
          </div>
          <div className="mt-7">
            <Link href={`/avboka?token=demo123&${listingToQuery(listing)}`}>
              <GlassButton>Avboka tid</GlassButton>
            </Link>
          </div>
        </GlassCard>
      </div>
    </main>
  );
};
