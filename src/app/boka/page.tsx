import Link from 'next/link';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { Hero } from '@/components/Hero';
import { Topbar } from '@/components/Topbar';
import { listingFromSearchParams } from '@/lib/query';
import { listingToQuery } from '@/lib/navigation';
import { tokens } from '@/lib/tokens';

type Props = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function BokaPage({ searchParams }: Props) {
  const listing = listingFromSearchParams(searchParams);
  const query = listingToQuery(listing);

  return (
    <main>
      <Topbar />
      <Hero src={listing.heroImage} alt={listing.address}>
        <GlassCard level="primary" className="max-w-2xl p-7 md:p-9">
          <p className={tokens.text.eyebrow}>Privat visning • {listing.objectId}</p>

          <h1 className={`${tokens.text.title} mt-4 md:text-5xl`}>
            Boka privat visning – enkelt och tryggt
          </h1>

          <p className="mt-3 text-lg text-slate-700">2 klick. Sen är det klart.</p>

          <div className="mt-8 space-y-2 text-sm text-slate-700">
            <p className="font-medium">{listing.headline}</p>
            <p>{listing.address}</p>
            <p>
              Ansvarig mäklare: {listing.agent}, {listing.agency}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={`/boka/tid?${query}`}>
              <GlassButton>Välj tid</GlassButton>
            </Link>

            <p className={`${tokens.text.muted} text-xs`}>
              Ingen avgift vid bokning. Avgift endast vid sen avbokning enligt villkor.
            </p>
          </div>
        </GlassCard>
      </Hero>
    </main>
  );
}
