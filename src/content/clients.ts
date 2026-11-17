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
 * Client quotes, shown on the home page and on the matching case study.
 *
 * Every quote is a draft until the client has seen the exact wording and agreed to it in writing (a reply to the
 * approval message in docs/client-quotes.md is enough). Only then fill in `name` and `role` and set
 * `approved: true`. If the client edits the wording, paste their version, not the draft.
 */
export type ClientQuote = {
  quote: string;
  /** The person who approved the quote, as they want to be named. */
  name: string;
  role: string;
  organization: string;
  slug?: string;
  approved: boolean;
};

export const clientQuotes: ClientQuote[] = [
  {
    organization: "Grand Valley Primary Hospital",
    slug: "mtx-care",
    quote:
      "Registration, the cashier, the lab and the pharmacy now work from the same patient record. Nothing reaches the lab until it's paid, and our monthly reports come straight out of the system.",
    name: "",
    role: "",
    approved: false,
  },
  {
    organization: "Grand Valley group",
    slug: "grand-valley-finance",
    quote:
      "We run four companies, and for the first time we can see all of their books in one place. Budgets, purchases and credit between our companies all go through the system now.",
    name: "",
    role: "",
    approved: false,
  },
  {
    organization: "Nur Bus Transport",
    slug: "nur-bus-shareholders",
    quote:
      "Passengers book their trips online, and our shareholders get their certificates and records without coming to the office. MTX built both.",
    name: "",
    role: "",
    approved: false,
  },
  {
    organization: "Nur Palace Restaurant",
    slug: "nur-palace",
    quote:
      "Orders go straight from the waiter to the kitchen and the coffee bar, and the till balances at the end of the day. When the internet goes down, we keep serving.",
    name: "",
    role: "",
    approved: false,
  },
  {
    organization: "GrandBirr Market",
    slug: "grandbirr-market",
    quote:
      "Our customers can shop retail, wholesale and from neighbourhood stores in one app. MTX built it around how our market actually works.",
    name: "",
    role: "",
    approved: false,
  },
  {
    organization: "MGC — Miftah General Contractor",
    slug: "mgc",
    quote:
      "Our website finally shows the work we've done. Clients see our projects, pick a service and message us on WhatsApp in a couple of taps.",
    name: "",
    role: "",
    approved: false,
  },
  {
    organization: "Migrant Rights Protection Organization",
    slug: "mrpo",
    quote:
      "Migrants can now register and reach us online, and partners and donors can see what we do. MTX was patient with our needs and easy to work with.",
    name: "",
    role: "",
    approved: false,
  },
  {
    organization: "Iqra Islamic Research Foundation",
    slug: "iqra-foundation",
    quote:
      "Our research is now online in English, Arabic, Amharic and Afaan Oromoo, with a library of papers people can download. Readers find what they need in a few clicks.",
    name: "",
    role: "",
    approved: false,
  },
];

/** Quotes that may be shown: approved, with the approver's name and role filled in. */
export const publishedQuotes = clientQuotes.filter((quote) => quote.approved && quote.name && quote.role);

export function quoteForProject(slug: string) {
  return publishedQuotes.find((quote) => quote.slug === slug);
}
