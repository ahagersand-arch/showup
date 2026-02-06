'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { SlotPicker } from '@/components/SlotPicker';
import { Topbar } from '@/components/Topbar';
import { useBookingDraft } from '@/hooks/useBookingDraft';
import { type ListingData, slotOptions, type Slot } from '@/lib/mock';
import { listingToQuery } from '@/lib/navigation';
import { tokens } from '@/lib/tokens';

export const TidClient = ({ listing }: { listing: ListingData }) => {
  const firstAvailable = useMemo(() => slotOptions.find((slot) => slot.available), []);
  const [selected, setSelected] = useState<Slot | undefined>(firstAvailable);
  const { saveDraft } = useBookingDraft();
  const query = listingToQuery(listing);

  return (
    <main className={`${tokens.page} min-h-screen px-4 pb-16 pt-24 md:px-8`}>
      <Topbar />
      <div className="mx-auto w-full max-w-4xl">
        <GlassCard level="primary" className="p-7">
          <p className={tokens.text.eyebrow}>Klick 1 av 2</p>
          <h1 className={tokens.text.title}>Välj tid</h1>
          <p className={`${tokens.text.muted} mt-2`}>Första lediga tid är redan vald.</p>

          <div className="mt-6">
            <SlotPicker slots={slotOptions} selectedId={selected?.id} onSelect={setSelected} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={`/boka/bankid?${query}`}
              onClick={() => {
                if (selected) saveDraft({ slotId: selected.id, slotLabel: selected.label });
              }}
            >
              <GlassButton disabled={!selected}>Bekräfta med BankID</GlassButton>
            </Link>

            <span className="text-xs text-slate-600">Vald tid: {selected?.label}</span>
          </div>
        </GlassCard>
      </div>
    </main>
  );
};
