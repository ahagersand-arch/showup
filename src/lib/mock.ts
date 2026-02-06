export type ListingData = {
  objectId: string;
  heroImage: string;
  headline: string;
  address: string;
  agent: string;
  agency: string;
};

export type Slot = {
  id: string;
  label: string;
  available: boolean;
};

export type Booking = {
  id: string;
  customer: string;
  slot: string;
  address: string;
  status: 'Bekräftad' | 'Avbokad' | 'Utebliven';
};

export const fallbackHero =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80';

export const sampleListing: ListingData = {
  objectId: 'OBJ-98765',
  heroImage: fallbackHero,
  headline: 'Boka privat visning – enkelt och tryggt',
  address: 'Havsgatan 21, Stockholm',
  agent: 'Maja Berg',
  agency: 'Nordic Residence'
};

export const slotOptions: Slot[] = [
  { id: 'slot-1', label: 'Ons 18 sep • 18:00', available: true },
  { id: 'slot-2', label: 'Tor 19 sep • 08:30', available: true },
  { id: 'slot-3', label: 'Tor 19 sep • 17:30', available: true },
  { id: 'slot-4', label: 'Fre 20 sep • 11:00', available: false },
  { id: 'slot-5', label: 'Sön 22 sep • 12:00', available: true }
];

export const bookingRows: Booking[] = [
  {
    id: 'BK-1021',
    customer: 'Sara Lind',
    slot: 'Ons 18 sep • 18:00',
    address: 'Havsgatan 21, Stockholm',
    status: 'Bekräftad'
  },
  {
    id: 'BK-1022',
    customer: 'Elias Nyholm',
    slot: 'Tor 19 sep • 08:30',
    address: 'Havsgatan 21, Stockholm',
    status: 'Utebliven'
  },
  {
    id: 'BK-1023',
    customer: 'Ida Roos',
    slot: 'Sön 22 sep • 12:00',
    address: 'Fabriksgatan 7, Solna',
    status: 'Avbokad'
  }
];
