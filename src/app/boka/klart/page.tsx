import { listingFromSearchParams } from '@/lib/query';
import { KlartClient } from './KlartClient';

export default function KlartPage({
  searchParams
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const listing = listingFromSearchParams(searchParams);

  return <KlartClient listing={listing} />;
}
