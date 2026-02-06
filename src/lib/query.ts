import { fallbackHero, sampleListing, type ListingData } from '@/lib/mock';

const sanitizeText = (value: string | null | undefined, fallback: string) => {
  if (!value) {
    return fallback;
  }

  const clean = value.trim();
  return clean.length > 0 ? clean : fallback;
};

const isSafeImageUrl = (value: string | null | undefined) => {
  if (!value) {
    return false;
  }

  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

export const listingFromSearchParams = (
  searchParams: Record<string, string | string[] | undefined>
): ListingData => {
  const getParam = (key: string) => {
    const value = searchParams[key];
    return Array.isArray(value) ? value[0] : value;
  };

  const heroCandidate = getParam('img');

  return {
    objectId: sanitizeText(getParam('objektId'), sampleListing.objectId),
    headline: sanitizeText(getParam('headline'), sampleListing.headline),
    address: sanitizeText(getParam('address'), sampleListing.address),
    agent: sanitizeText(getParam('agent'), sampleListing.agent),
    agency: sanitizeText(getParam('agency'), sampleListing.agency),
    heroImage: isSafeImageUrl(heroCandidate) ? (heroCandidate as string) : fallbackHero
  };
};
