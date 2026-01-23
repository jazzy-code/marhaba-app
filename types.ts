export type Category = 
  | 'Real Estate' | 'Property Management' | 'Villa Rental'
  | 'Cars & Chauffeurs' | 'Yachts' | 'Private Jets & Transfers'
  | 'Dining & Nightlife' | 'Golf Experiences'
  | 'Domestic Staff' | 'Medical Care'
  | 'All';

export type Status = 'Approved' | 'Pending' | 'Rejected';

export interface Service {
  id: string;
  title: string;
  category: Category;
  location: string;
  price: number;
  unit: string;
  image: string;
  rating: number;
  provider: string;
  status: Status;
  description: string;
}

export type View = 'home' | 'catalog' | 'detail' | 'provider' | 'create-service' | 'admin' | 'concierge' | 'login' | 'apply';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  grounding?: any[]; // Holds grounding chunks from Gemini Search/Maps
}
