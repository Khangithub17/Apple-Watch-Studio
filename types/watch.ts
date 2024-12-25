export interface WatchCase {
  id: string;
  name: string;
  material: 'Aluminum' | 'Titanium';
  color: string;
  price: number;
  image: string;
}

export interface WatchBand {
  id: string;
  name: string;
  type: 'Sport Loop' | 'Solo Loop' | 'Nike Sport Band' | 'Braided Solo Loop';
  color: string;
  price: number;
  image: string;
}

export interface WatchConfiguration {
  case: WatchCase | null;
  band: WatchBand | null;
  size: '42mm' | '46mm';
  collection: 'Series 10' | 'Hermès Series 10' | 'SE';
}

