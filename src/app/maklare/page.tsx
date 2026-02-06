'use client';

import { useState } from 'react';
import { Drawer } from '@/components/Drawer';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { Topbar } from '@/components/Topbar';
import { bookingRows } from '@/lib/mock';

const kpis = [
  { label: 'Privata bokningar', value: '38', trend: '+16%' },
  { label: 'No-show minskat', value: '-29%', trend: 'senaste 30 dagarna' },
  { label: 'Verifierade med BankID', value: '97%', trend: 'hög kvalitet' }
];

export default function MaklarePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_14%_12%,#f9fcff,#dce8f8)] px-4 pb-16 pt-24 md:px-8">
      <Topbar />
      <div className="mx-auto w-full max-w-6xl space-y-6">
        <GlassCard strong>
          <h1 className="font-serif text-4xl text-slate-900">Mäklarvy</h1>
          <p className="mt-2 text-slate-700">
            Behåll Anmäl intresse. ShowUp är ett extra spår för de mest seriösa spekulanterna.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <GlassButton onClick={() => setOpen(true)} variant="ghost">
              Hur räknas detta?
            </GlassButton>
          </div>
        </GlassCard>

        <div className="grid gap-4 md:grid-cols-3">
          {kpis.map((kpi) => (
            <GlassCard key={kpi.label} className="p-5">
              <p className="text-sm text-slate-600">{kpi.label}</p>
              <p className="mt-2 font-serif text-4xl text-slate-900">{kpi.value}</p>
              <p className="mt-1 text-sm text-slate-700">{kpi.trend}</p>
            </GlassCard>
          ))}
        </div>

        <GlassCard>
          <h2 className="font-serif text-2xl text-slate-900">Senaste bokningar</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/55 bg-white/42">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/35 text-slate-700">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Kund</th>
                  <th className="px-4 py-3">Tid</th>
                  <th className="px-4 py-3">Adress</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookingRows.map((row) => (
                  <tr key={row.id} className="border-t border-white/40 text-slate-700">
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
          KPI:er baseras på verifierade bokningar där spekulanten fullfört BankID-flödet och närvarat eller avbokat i tid.
        </p>
        <p>
          No-show jämförs mot perioden innan ShowUp aktiverades på samma område och objektkategori.
        </p>
      </Drawer>
    </main>
  );
}
