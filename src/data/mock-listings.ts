export type Listing = {
  id: string;
  title: string;
  description: string;
  city: string;
  district: string;
  monthlyPriceUsd: number;
  isVerified: boolean;
  amenities: string[];
  latitude: number;
  longitude: number;
  imageUrl: string;
  whatsappNumber: string;
  occupancy: number;
  upcomingRentDueInDays: number;
};

export const featuredListings: Listing[] = [
  {
    id: "1",
    title: "Lido Seaview Duplex",
    description:
      "Three-bedroom duplex with ocean views, backup generator, and smart security.",
    city: "Mogadishu",
    district: "Abdaziz",
    monthlyPriceUsd: 1800,
    isVerified: true,
    amenities: ["Backup Power", "CCTV", "Serviced"],
    latitude: 2.0407,
    longitude: 45.3438,
    imageUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
    whatsappNumber: "+252618000001",
    occupancy: 0.92,
    upcomingRentDueInDays: 15,
  },
  {
    id: "2",
    title: "Hargeisa Diplomatic Villa",
    description:
      "Spacious villa in Masalaha with embassy-grade security and landscaped gardens.",
    city: "Hargeisa",
    district: "Masalaha",
    monthlyPriceUsd: 2200,
    isVerified: true,
    amenities: ["Security 24/7", "Green Compound", "Maid Service"],
    latitude: 9.5559,
    longitude: 44.0586,
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    whatsappNumber: "+252634500002",
    occupancy: 0.87,
    upcomingRentDueInDays: 8,
  },
  {
    id: "3",
    title: "Garowe Executive Apartments",
    description:
      "Furnished twin-bedroom units in the city center with concierge and fibre internet.",
    city: "Garowe",
    district: "Waberi",
    monthlyPriceUsd: 950,
    isVerified: true,
    amenities: ["Fibre WiFi", "Concierge", "Furnished"],
    latitude: 8.3989,
    longitude: 48.4848,
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-0ef3c08ac11b?auto=format&fit=crop&w=900&q=80",
    whatsappNumber: "+252907000003",
    occupancy: 0.95,
    upcomingRentDueInDays: 21,
  },
];

export type LedgerEntry = {
  id: string;
  propertyTitle: string;
  provider: "EVC_PLUS" | "E_DAHAB";
  amount: number;
  status: "SUCCESS" | "PENDING" | "FAILED";
  timestamp: string;
};

export const ledgerEntries: LedgerEntry[] = [
  {
    id: "txn_001",
    propertyTitle: "Lido Seaview Duplex",
    provider: "EVC_PLUS",
    amount: 1800,
    status: "SUCCESS",
    timestamp: "2025-01-05 09:45 EAT",
  },
  {
    id: "txn_002",
    propertyTitle: "Hargeisa Diplomatic Villa",
    provider: "E_DAHAB",
    amount: 2200,
    status: "SUCCESS",
    timestamp: "2025-01-02 15:30 EAT",
  },
];

export const inspectionGallery = [
  {
    id: "ins_1",
    label: "Roof Terrace",
    imageUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
    inspector: "Amina Warsame",
    inspectedAt: "Dec 2024 Inspection",
  },
  {
    id: "ins_2",
    label: "Living Space",
    imageUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
    inspector: "Abdi Ali",
    inspectedAt: "Nov 2024 Inspection",
  },
  {
    id: "ins_3",
    label: "Generator House",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
    inspector: "Amina Warsame",
    inspectedAt: "Oct 2024 Inspection",
  },
];
