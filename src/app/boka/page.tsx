import Link from 'next/link';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { Hero } from '@/components/Hero';
import { Topbar } from '@/components/Topbar';
import { listingFromSearchParams } from '@/lib/query';
import { listingToQuery } from '@/lib/navigation';

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
        <GlassCard className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
            Privat visning • {listing.objectId}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-slate-900 md:text-5xl">
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
            <p className="text-xs text-slate-600">
              Ingen avgift vid bokning. Avgift endast vid sen avbokning enligt villkor.
            </p>
          </div>
        </GlassCard>
      </Hero>
    </main>
  );
}
