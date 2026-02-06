import Link from 'next/link';
import { GlassButton } from '@/components/GlassButton';
import { GlassCard } from '@/components/GlassCard';
import { Hero } from '@/components/Hero';
import { Topbar } from '@/components/Topbar';
import { listingToQuery } from '@/lib/navigation';
import { listingFromSearchParams } from '@/lib/query';
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
        <GlassCard className="max-w-2xl">
          <p className={tokens.text.eyebrow}>Privat visning • {listing.objectId}</p>
          <h1 className="mt-4 font-serif text-4xl text-slate-900 md:text-5xl">Boka privat visning</h1>
          <p className="mt-3 text-base text-slate-700">
            {listing.address}. Välj tid och bekräfta med BankID.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            {listing.agent}, {listing.agency}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link href={`/boka/tid?${query}`}>
              <GlassButton>Välj tid</GlassButton>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-600">
            Ingen avgift vid bokning. Avgift endast vid sen avbokning enligt villkor.
          </p>
        </GlassCard>
      </Hero>
    </main>
  );
}
