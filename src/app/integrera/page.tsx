import { GlassCard } from '@/components/GlassCard';
import { Topbar } from '@/components/Topbar';
import { tokens } from '@/lib/tokens';

const exampleUrl =
  '/boka?objektId=OBJ-555&img=https://images.unsplash.com/photo-1600607687644-c7f34b55c2d6?auto=format&fit=crop&w=1900&q=80&headline=Sekelskiftesvåning%20med%20terrass&address=Valhallavägen%2012%2C%20Stockholm&agent=Anna%20Lind&agency=Signatur%20Mäkleri';

export default function IntegreraPage() {
  return (
    <main className={`${tokens.page} min-h-screen px-4 pb-16 pt-24 md:px-8`}>
      <Topbar />
      <div className="mx-auto w-full max-w-4xl">
        <GlassCard level="primary" className="p-7">
          <h1 className={tokens.text.title}>Integrera ShowUp</h1>
          <p className="mt-3 text-sm text-slate-700">Länka knappen “Boka privat visning” till:</p>
          <p className="mt-6 break-all text-xs text-slate-600">{exampleUrl}</p>
        </GlassCard>
      </div>
    </main>
  );
}
