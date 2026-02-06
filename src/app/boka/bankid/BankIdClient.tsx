'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { Modal } from '@/components/Modal';
import { Toast } from '@/components/Toast';
import { Topbar } from '@/components/Topbar';
import { useBookingDraft } from '@/hooks/useBookingDraft';
import { type ListingData } from '@/lib/mock';
import { listingToQuery } from '@/lib/navigation';
import { tokens } from '@/lib/tokens';

export const BankIdClient = ({ listing }: { listing: ListingData }) => {
  const router = useRouter();
  const { draft } = useBookingDraft();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'idle' | 'starting' | 'signing' | 'done'>('idle');

  const query = listingToQuery(listing);

  useEffect(() => {
    if (!open || step !== 'starting') return;
    const timer = setTimeout(() => setStep('signing'), 1100);
    return () => clearTimeout(timer);
  }, [open, step]);

  useEffect(() => {
    if (!open || step !== 'signing') return;
    const timer = setTimeout(() => {
      setStep('done');
      router.push(`/boka/klart?${query}`);
    }, 1700);
    return () => clearTimeout(timer);
  }, [open, step, query, router]);

  return (
    <main className={`${tokens.page} min-h-screen px-4 pb-16 pt-24 md:px-8`}>
      <Topbar />
      <div className="mx-auto w-full max-w-3xl">
        <GlassCard level="primary" className="p-7">
          <p className={tokens.text.eyebrow}>Klick 2 av 2</p>
          <h1 className={tokens.text.title}>Bekräfta bokning med BankID</h1>

          <p className={`${tokens.text.muted} mt-2`}>
            Simulerad signering i demo. Ingen riktig BankID‑koppling används.
          </p>

          <div className="mt-6 space-y-1 text-sm text-slate-700">
            <p>{listing.address}</p>
            <p>{draft.slotLabel ?? 'Tid ej vald'}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
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

      <Modal open={open} onClose={() => setOpen(false)} title="Signering">
        <p className="text-slate-700">
          {step === 'starting' && 'Startar BankID…'}
          {step === 'signing' && 'Väntar på signering…'}
          {step === 'done' && 'Klart.'}
        </p>
      </Modal>

      <Toast show={step === 'signing'} message="BankID väntar på signering" />
    </main>
  );
};
