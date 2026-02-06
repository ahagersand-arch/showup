'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { SlotPicker } from '@/components/SlotPicker';
import { Topbar } from '@/components/Topbar';
import { type ListingData, slotOptions, type Slot } from '@/lib/mock';
import { listingToQuery } from '@/lib/navigation';
import { useBookingDraft } from '@/hooks/useBookingDraft';

export const TidClient = ({ listing }: { listing: ListingData }) => {
  const firstAvailable = useMemo(() => slotOptions.find((slot) => slot.available), []);
  const { saveDraft } = useBookingDraft();
  const [selected, setSelected] = useState<Slot | undefined>(firstAvailable);

  const query = listingToQuery(listing);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,#f6fbff,#dde8f7)] px-4 pb-16 pt-24 md:px-8">
      <Topbar />
      <div className="mx-auto grid w-full max-w-4xl gap-6">
        <GlassCard strong>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">Klick 1 av 2</p>
          <h1 className="mt-3 font-serif text-4xl text-slate-900">Välj en tid som passar dig</h1>
          <p className="mt-2 text-slate-700">Första lediga tid är redan vald för snabb bokning.</p>
          <div className="mt-6">
            <SlotPicker slots={slotOptions} selectedId={selected?.id} onSelect={setSelected} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={`/boka/bankid?${query}`}
              onClick={() => {
                if (selected) {
                  saveDraft({ slotId: selected.id, slotLabel: selected.label });
                }
              }}
            >
              <GlassButton disabled={!selected}>Bekräfta med BankID</GlassButton>
            </Link>
            <p className="text-sm text-slate-600">Vald tid: {selected?.label}</p>
          </div>
        </GlassCard>
      </div>
    </main>
  );
};
