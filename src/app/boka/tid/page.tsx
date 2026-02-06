import { listingFromSearchParams } from '@/lib/query';
import { TidClient } from './TidClient';

export default function TidPage({
  searchParams
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const listing = listingFromSearchParams(searchParams);

  return <TidClient listing={listing} />;
}
