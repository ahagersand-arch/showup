import { listingFromSearchParams } from '@/lib/query';
import { BankIdClient } from './BankIdClient';

export default function BankIdPage({
  searchParams
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const listing = listingFromSearchParams(searchParams);

  return <BankIdClient listing={listing} />;
}
