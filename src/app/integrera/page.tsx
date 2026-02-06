import { GlassCard } from '@/components/GlassCard';
import { Topbar } from '@/components/Topbar';
import { tokens } from '@/lib/tokens';

const exampleUrl =
  '/boka?objektId=OBJ-555&img=https://images.unsplash.com/photo-1600607687644-c7f34b55c2d6?auto=format&fit=crop&w=1900&q=80&headline=Sekelskiftesvåning%20med%20terrass&address=Valhallavägen%2012%2C%20Stockholm&agent=Anna%20Lind&agency=Signatur%20M%C3%A4kleri';

export default function IntegreraPage() {
  return (
    <main className={`${tokens.page} min-h-screen px-4 pb-16 pt-24 md:px-8`}>
      <Topbar />
      <div className="mx-auto w-full max-w-4xl">
        <GlassCard level="primary" className="p-7">
          <p className={tokens.text.eyebrow}>Integrering</p>
          <h1 className={tokens.text.title}>Integrera ShowUp</h1>

          <p className="mt-3 text-sm text-slate-700">
            Lägg knappen “Boka privat visning” bredvid “Anmäl intresse”. ShowUp är ett extra spår för de mest seriösa
            spekulanterna.
          </p>

          <div className="mt-6 space-y-2 text-sm text-slate-700">
            <p>1) Skicka objektdata som query params till /boka.</p>
            <p>2) Behåll ert nuvarande leadflöde intakt.</p>
            <p>3) Länka från objektkort/objektsida (en knapp).</p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">Exempel-länk</p>
            <p className="mt-2 break-all text-xs text-slate-600">{exampleUrl}</p>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
