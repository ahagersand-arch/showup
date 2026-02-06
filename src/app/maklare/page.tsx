'use client';

import { useState } from 'react';
import { Drawer } from '@/components/Drawer';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { Topbar } from '@/components/Topbar';
import { bookingRows } from '@/lib/mock';
import { tokens } from '@/lib/tokens';

const kpis = [
  { label: 'Idag (privata visningar)', value: '3' },
  { label: 'Kommande (7 dagar)', value: '12' },
  { label: 'Verifierade med BankID', value: '97%' },
];

export default function MaklarePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className={`${tokens.page} min-h-screen px-4 pb-16 pt-24 md:px-8`}>
      <Topbar />

      <div className="mx-auto w-full max-w-6xl space-y-5">
        <GlassCard level="primary" className="p-7">
          <h1 className={tokens.text.title}>Mäklarvy</h1>
          <p className="mt-2 text-sm text-slate-700">Överblick för idag och kommande bokningar.</p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {kpis.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-xs text-slate-600">{item.label}</p>
                <p className="font-serif text-3xl text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <GlassButton variant="ghost" onClick={() => setOpen(true)}>
              Hur räknas detta?
            </GlassButton>
          </div>
        </GlassCard>

        <GlassCard level="secondary" className="p-5">
          <h2 className="font-serif text-2xl text-slate-900">Bokningar</h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-white/45 bg-white/35">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-white/25">
                <tr className="border-b border-white/45">
                  <th className="px-4 py-3 font-medium">ID</th>
                  <th className="px-4 py-3 font-medium">Kund</th>
                  <th className="px-4 py-3 font-medium">Tid</th>
                  <th className="px-4 py-3 font-medium">Adress</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookingRows.map((row) => (
                  <tr key={row.id} className="border-t border-white/35">
                    <td className="px-4 py-3">{row.id}</td>
                    <td className="px-4 py-3">{row.customer}</td>
                    <td className="px-4 py-3">{row.slot}</td>
                    <td className="px-4 py-3">{row.address}</td>
                    <td className="px-4 py-3">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>

      <Drawer open={open} onClose={() => setOpen(false)} title="Hur räknas detta?">
        <p>
          KPI:er baseras på bokningar där spekulanten valt tid och fullföljt BankID. Avbokningar räknas som “i tid” fram
          till villkorsgränsen.
        </p>
        <p>Syftet är överblick och kontroll — inte analytics.</p>
      </Drawer>
    </main>
  );
}
