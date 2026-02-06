import { type ListingData } from '@/lib/mock';

export const listingToQuery = (listing: ListingData) => {
  const params = new URLSearchParams({
    objektId: listing.objectId,
    img: listing.heroImage,
    headline: listing.headline,
    address: listing.address,
    agent: listing.agent,
    agency: listing.agency
  });

  return params.toString();
};
