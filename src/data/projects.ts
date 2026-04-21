export interface Project {
  id: string;
  name: string;
  slug: string;
  location: string;
  status: 'ongoing' | 'completed' | 'upcoming';
  type: string;
  price: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  amenities: { icon: string; name: string }[];
  rera?: string;
  area: string;
  possession: string;
  category: 'residential' | 'commercial';
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'Gowardhan Royale',
    slug: 'gowardhan-royale',
    location: 'Baner, Pune',
    status: 'ongoing',
    type: '3 & 4 BHK Luxury Apartments',
    price: '₹2.5 Cr onwards',
    description: 'Experience the pinnacle of luxury living at Gowardhan Royale. Situated in the heart of Baner, this project offers spacious apartments with state-of-the-art amenities and breathtaking views.',
    shortDescription: 'Ultra-luxury living in the heart of Baner.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    ],
    amenities: [
      { icon: 'Pool', name: 'Infinity Pool' },
      { icon: 'Gym', name: 'Elite Gym' },
      { icon: 'Park', name: 'Zen Garden' },
      { icon: 'Shield', name: '24/7 Security' },
    ],
    rera: 'P52100012345',
    area: '1800 - 2500 Sq. Ft.',
    possession: 'Dec 2026',
    category: 'residential',
  },
  {
    id: '2',
    name: 'Golden Crest',
    slug: 'golden-crest',
    location: 'Kothrud, Pune',
    status: 'completed',
    type: '2 & 3 BHK Premium Homes',
    price: '₹1.8 Cr onwards',
    description: 'Golden Crest is a landmark development in Kothrud, offering a perfect blend of modern architecture and traditional values. A sanctuary for families seeking comfort and elegance.',
    shortDescription: 'Elegant homes for a sophisticated lifestyle.',
    image: 'https://images.unsplash.com/photo-1600607687940-47a04b629b67?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1000',
    ],
    amenities: [
      { icon: 'Club', name: 'Clubhouse' },
      { icon: 'Play', name: 'Kids Play Area' },
      { icon: 'Jog', name: 'Jogging Track' },
    ],
    rera: 'P52100098765',
    area: '1200 - 1600 Sq. Ft.',
    possession: 'Ready to Move',
    category: 'residential',
  },
  {
    id: '3',
    name: 'The Landmark',
    slug: 'the-landmark',
    location: 'Wakad, Pune',
    status: 'upcoming',
    type: 'Luxury Commercial Spaces',
    price: '₹95 Lacs onwards',
    description: 'The Landmark is set to redefine the commercial landscape of Wakad. With premium office spaces and retail showrooms, it is the ideal destination for growing businesses.',
    shortDescription: 'Premium commercial hub for modern businesses.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    gallery: [],
    amenities: [
      { icon: 'Elevator', name: 'High-speed Elevators' },
      { icon: 'Parking', name: 'Ample Parking' },
      { icon: 'Wifi', name: 'Business Lounge' },
    ],
    rera: 'P52100055443',
    area: '500 - 2000 Sq. Ft.',
    possession: 'June 2027',
    category: 'commercial',
  },
];
