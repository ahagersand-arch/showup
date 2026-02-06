'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { Modal } from '@/components/Modal';
import { Toast } from '@/components/Toast';
import { Topbar } from '@/components/Topbar';
import { type ListingData } from '@/lib/mock';
import { listingToQuery } from '@/lib/navigation';
import { useBookingDraft } from '@/hooks/useBookingDraft';

export const BankIdClient = ({ listing }: { listing: ListingData }) => {
  const router = useRouter();
  const { draft } = useBookingDraft();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'idle' | 'starting' | 'signing' | 'done'>('idle');

  const query = listingToQuery(listing);

  useEffect(() => {
    if (!open || step !== 'starting') return;

    const timer = setTimeout(() => setStep('signing'), 1300);
    return () => clearTimeout(timer);
  }, [open, step]);

  useEffect(() => {
    if (!open || step !== 'signing') return;

    const timer = setTimeout(() => {
      setStep('done');
      router.push(`/boka/klart?${query}`);
    }, 1800);

    return () => clearTimeout(timer);
  }, [open, step, router, query]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_25%_15%,#f6fbff,#dce8f8)] px-4 pb-16 pt-24 md:px-8">
      <Topbar />
      <div className="mx-auto w-full max-w-3xl">
        <GlassCard strong>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">Klick 2 av 2</p>
          <h1 className="mt-3 font-serif text-4xl text-slate-900">Bekräfta bokning med BankID</h1>
          <p className="mt-2 text-slate-700">Simulerad process för demo. Ingen riktig BankID-koppling används.</p>
          <div className="mt-6 rounded-2xl border border-white/55 bg-white/45 p-4">
            <p className="text-sm text-slate-700">Objekt: {listing.address}</p>
            <p className="text-sm text-slate-700">Vald tid: {draft.slotLabel ?? 'Ingen tid vald ännu'}</p>
          </div>
          <div className="mt-6 flex gap-3">
            <GlassButton
              onClick={() => {
                setOpen(true);
                setStep('starting');
              }}
            >
              Starta BankID
            </GlassButton>
            <Link href={`/boka/tid?${query}`}>
              <GlassButton variant="ghost">Byt tid</GlassButton>
            </Link>
          </div>
        </GlassCard>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="BankID signering">
        <p className="text-slate-700">
          {step === 'starting' && 'Startar BankID…'}
          {step === 'signing' && 'Signering pågår…'}
          {step === 'done' && 'Klart!'}
        </p>
      </Modal>
      <Toast show={step === 'signing'} message="BankID väntar på signering" />
    </main>
  );
};
