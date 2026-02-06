import { GlassCard } from '@/components/GlassCard';
import { Topbar } from '@/components/Topbar';

const exampleUrl =
  '/boka?objektId=OBJ-555&img=https://images.unsplash.com/photo-1600607687644-c7f34b55c2d6?auto=format&fit=crop&w=1900&q=80&headline=Sekelskiftesvåning%20med%20terrass&address=Valhallavägen%2012%2C%20Stockholm&agent=Anna%20Lind&agency=Signatur%20M%C3%A4kleri';

export default function IntegreraPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_15%,#f8fcff,#dce9fa)] px-4 pb-16 pt-24 md:px-8">
      <Topbar />
      <div className="mx-auto w-full max-w-4xl">
        <GlassCard strong>
          <h1 className="font-serif text-4xl text-slate-900">Integrera ShowUp</h1>
          <p className="mt-3 text-slate-700">
            Lägg till knappen “Boka privat visning” bredvid “Anmäl intresse” i ert objektflöde.
          </p>
          <ol className="mt-6 list-decimal space-y-2 pl-5 text-slate-700">
            <li>Skicka objektdata som query params till /boka.</li>
            <li>Behåll ert nuvarande leadflöde intakt.</li>
            <li>Använd ShowUp som extra premiumspår för seriösa kunder.</li>
          </ol>
          <div className="mt-6 rounded-2xl border border-white/55 bg-white/45 p-4">
            <p className="text-sm font-semibold text-slate-800">Exempel-länk</p>
            <p className="mt-2 break-all text-xs text-slate-700">{exampleUrl}</p>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
