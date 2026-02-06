'use client';

import { useState } from 'react';
import { Drawer } from '@/components/Drawer';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { Topbar } from '@/components/Topbar';
import { bookingRows } from '@/lib/mock';
import { tokens } from '@/lib/tokens';

const kpis = [
  { label: 'Bokade privata visningar', value: '38' },
  { label: 'Verifierade med BankID', value: '97%' },
  { label: 'Avbokade i tid', value: '92%' }
];

export default function MaklarePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className={`${tokens.page} min-h-screen px-4 pb-16 pt-24 md:px-8`}>
      <Topbar />
      <div className="mx-auto w-full max-w-6xl space-y-5">
        <GlassCard level="primary" className="p-7">
          <h1 className={tokens.text.title}>Mäklarvy</h1>
          <p className="mt-2 text-sm text-slate-700">Privata visningar för dagen.</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {kpis.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-xs text-slate-600">{item.label}</p>
                <p className="font-serif text-3xl text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <GlassButton variant="ghost" onClick={() => setOpen(true)}>Hur räknas detta?</GlassButton>
          </div>
        </GlassCard>

        <GlassCard level="secondary" className="p-5">
          <h2 className="font-serif text-2xl text-slate-900">Bokningar</h2>
          <div className="mt-4 overflow-hidden">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-white/45">
                  <th className="px-3 py-2 font-medium">Kund</th>
                  <th className="px-3 py-2 font-medium">Tid</th>
                  <th className="px-3 py-2 font-medium">Adress</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookingRows.map((row) => (
                  <tr key={row.id} className="border-b border-white/35">
                    <td className="px-3 py-2">{row.customer}</td>
                    <td className="px-3 py-2">{row.slot}</td>
                    <td className="px-3 py-2">{row.address}</td>
                    <td className="px-3 py-2">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>

      <Drawer open={open} onClose={() => setOpen(false)} title="Hur räknas detta?">
        <p>Bokning räknas när tid är vald och BankID är signerat.</p>
        <p>Avbokning i tid räknas fram till villkorsgränsen.</p>
      </Drawer>
    </main>
  );
}
