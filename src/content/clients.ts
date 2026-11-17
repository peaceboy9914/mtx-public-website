/**
 * Organisations whose logos MTX may show. Add a logo only with the client's permission.
 * `slug` links the logo to its case study in work.ts.
 */
export type Client = { name: string; logo: string; slug?: string };

export const clients: Client[] = [
  { name: "Grand Valley Primary Hospital", logo: "/images/clients/grand-valley-hospital.webp", slug: "grand-valley-hospital" },
  { name: "Nur Bus", logo: "/images/clients/nur-bus.webp", slug: "nur-bus" },
  { name: "Nur Palace Restaurant", logo: "/images/clients/nur-palace.webp", slug: "nur-palace" },
  { name: "GrandBirr Market", logo: "/images/clients/grandbirr.webp", slug: "grandbirr-market" },
  { name: "MGC — Miftah General Contractor", logo: "/images/clients/mgc.webp", slug: "mgc" },
  { name: "Iqra Islamic Research Foundation", logo: "/images/clients/iqra.webp", slug: "iqra-foundation" },
  { name: "Migrant Rights Protection Organization", logo: "/images/clients/mrpo.webp", slug: "mrpo" },
  { name: "Grand Valley Medicine and Medical Devices Importer", logo: "/images/clients/grand-valley-importer.webp" },
  { name: "Terbiya International School", logo: "/images/clients/terbiya.webp" },
  { name: "NISI — Nexus Inter-Service Impact", logo: "/images/clients/nisi.webp" },
];

/**
 * Client quotes for the home page. Use the client's own words only (for example, a passage from their
 * recommendation letter), and set `approved` once they have agreed to it being published.
 */
export type ClientQuote = {
  quote: string;
  name: string;
  role: string;
  organization: string;
  slug?: string;
  approved: boolean;
};

export const clientQuotes: ClientQuote[] = [];
