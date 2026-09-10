export type WorkProject = {
  slug: string;
  name: string;
  domain?: string;
  category:
    | "Healthcare"
    | "Transport"
    | "Education · ERP"
    | "Retail Marketplace"
    | "Consumer App"
    | "Publishing"
    | "Civil Society";
  categoryTint: { bg: string; text: string };
  frame: "browser" | "phone";
  image: { src: string; alt: string };
  cardTitle: string;
  cardSummary: string;
  caseTitle: string;
  caseSummary: string;
  tags: string[];
  stats?: { value: string; label: string }[];
};

export const workProjects: WorkProject[] = [
  {
    slug: "grand-valley-hospital",
    name: "Grand Valley Primary Hospital",
    domain: "grandvalleyhospital.com",
    category: "Healthcare",
    categoryTint: { bg: "rgba(15,58,56,.08)", text: "#0F3A38" },
    frame: "browser",
    image: {
      src: "/images/work/grand-valley-hospital.png",
      alt: "Grand Valley Primary Hospital website homepage, showing department directory and appointment booking",
    },
    cardTitle: "Grand Valley Primary Hospital",
    cardSummary: "Appointment booking, department directory and an emergency hotline, in Jimma.",
    caseTitle: "A public-facing hospital site for Jimma, Oromia",
    caseSummary:
      "Department directory, service pages, appointment booking and a 24/7 emergency hotline pinned to every screen. Built bilingual and tuned for low-bandwidth mobile connections.",
    tags: ["Next.js", "Appointment booking", "SEO"],
  },
  {
    slug: "nur-bus",
    name: "Nur Bus",
    domain: "nurbus.et",
    category: "Transport",
    categoryTint: { bg: "rgba(214,146,20,.12)", text: "#8A5A12" },
    frame: "browser",
    image: {
      src: "/images/work/nur-bus.png",
      alt: "Nur Bus website homepage, showing trip booking and investor share purchase entry points",
    },
    cardTitle: "Nur Bus — nurbus.et",
    cardSummary: "Trip booking plus a share-purchase flow for investors, in two languages.",
    caseTitle: "Nur Bus — booking and share sales",
    caseSummary:
      "Passengers book trips across a growing route network, while investors buy shares through a guided purchase flow tied into the shareholder registry. Language switcher, partner portal and login are all part of the same build.",
    tags: ["Seat booking engine", "Share purchase", "Telebirr"],
  },
  {
    slug: "school-erp",
    name: "SchoolERP",
    category: "Education · ERP",
    categoryTint: { bg: "rgba(11,92,255,.1)", text: "#0B4ED6" },
    frame: "browser",
    image: {
      src: "/images/work/school-erp.png",
      alt: "SchoolERP sign-in screen for the school management system",
    },
    cardTitle: "SchoolERP",
    cardSummary: "Enrolment, grade books, timetables, fee collection and parent portals with role-based access.",
    caseTitle: "SchoolERP — school management system",
    caseSummary:
      "A full academic and finance platform with separate super admin, academic admin, finance admin, teacher and parent roles. Enrolment, grade books, attendance, timetables, fee collection in ETB and analytics across departments, with dark mode and multi-language from day one.",
    tags: ["Role-based access", "Fee collection", "Parent portal"],
  },
  {
    slug: "grandbirr-market",
    name: "Grandbirr Market",
    category: "Retail Marketplace",
    categoryTint: { bg: "rgba(11,92,255,.1)", text: "#0B5CFF" },
    frame: "phone",
    image: {
      src: "/images/work/grandbirr-market.jpg",
      alt: "Grandbirr Market app home screen with category navigation and shop-by-category tiles",
    },
    cardTitle: "Grandbirr Market",
    cardSummary: "Multi-vendor commerce with wholesale (Jimla), local storefronts (Gebeya) and category browsing.",
    caseTitle: "Grandbirr Market — multi-vendor marketplace app",
    caseSummary:
      "Multi-vendor commerce with retail, wholesale (Jimla) and neighbourhood storefronts (Gebeya) shopping modes. Category browsing, wishlists, live cart and notifications, and a dedicated account and vendor experience.",
    tags: ["React Native", "Multi-vendor", "Category browsing"],
  },
  {
    slug: "ibsa-quraanaa",
    name: "Ibsa Qur'aanaa",
    category: "Consumer App",
    categoryTint: { bg: "rgba(11,92,255,.1)", text: "#0B5CFF" },
    frame: "phone",
    image: {
      src: "/images/work/ibsa-quraanaa.jpg",
      alt: "Ibsa Qur'aanaa Afaan Oromoo Quran app listing on Google Play",
    },
    cardTitle: "Ibsa Qur'aanaa",
    cardSummary: "Afaan Oromoo Quran app — 50K+ downloads, 4.2 stars across 235 reviews, offline audio.",
    caseTitle: "Ibsa Qur'aanaa — Oromo Quran app",
    caseSummary:
      "Afaan Oromoo Quran translation with offline reading and audio recitation. Published on Google Play and maintained through staged releases.",
    tags: ["Offline audio", "Google Play", "Afaan Oromoo"],
    stats: [
      { value: "50K+", label: "downloads" },
      { value: "4.2★", label: "235 reviews" },
    ],
  },
  {
    slug: "qarooma-baha-oromiyaa",
    name: "Qarooma Baha Oromiyaa",
    domain: "jaalataa.com",
    category: "Publishing",
    categoryTint: { bg: "rgba(15,120,110,.12)", text: "#0F7A6E" },
    frame: "browser",
    image: {
      src: "/images/work/book-store.png",
      alt: "Qarooma Baha Oromiyaa book website homepage, showing the book cover and author details",
    },
    cardTitle: "Qarooma Baha Oromiyaa",
    cardSummary: "A bilingual author and book site with excerpts, reviews and a guided purchase flow.",
    caseTitle: "Qarooma Baha Oromiyaa — author and book site",
    caseSummary:
      "A bilingual (English / Afaan Oromoo) marketing site for Jaalataa Abdullaahii Muhammad's book, Qarooma Baha Oromiyaa: Seenaa Uummata Harargee. Book detail, author profile, excerpts, reviews and a gallery, built around a clear path to purchase.",
    tags: ["Next.js", "Bilingual (EN/OM)", "Content-led design"],
  },
  {
    slug: "mrpo",
    name: "MRPO",
    domain: "mrightpo.com",
    category: "Civil Society",
    categoryTint: { bg: "rgba(181,84,28,.14)", text: "#8A3F14" },
    frame: "browser",
    image: {
      src: "/images/work/migrant-right.png",
      alt: "MRPO — Migrant Rights Protection Organization homepage",
    },
    cardTitle: "MRPO — Migrant Rights Protection Organization",
    cardSummary: "A registered civil-society site with case registration, advocacy and partner/donor pages.",
    caseTitle: "MRPO — Migrant Rights Protection Organization",
    caseSummary:
      "A public site for a registered Ethiopian civil-society organization protecting migrant rights through awareness, advocacy and community-based support, with a migrant registration flow, case handling behind the scenes, and dedicated partner and donor pages.",
    tags: ["Case registration", "Civil society", "Bilingual"],
  },
];

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}

export type EnterprisePlatform = {
  id: string;
  name: string;
  category: string;
  swatch: string;
  description: string;
  bullets: string[];
};

export const enterprisePlatforms: EnterprisePlatform[] = [
  {
    id: "finance",
    name: "Multi-company finance system",
    category: "FINANCE",
    swatch: "linear-gradient(135deg,#0B5CFF,#2F9BFF)",
    description:
      "General ledger, receivables, loan portfolio and ETB cash position across multiple companies, with a signed audit trail on every posting.",
    bullets: ["Multi-company consolidation", "Ledgers & loan books", "ETB reporting with month-end close"],
  },
  {
    id: "healthcare",
    name: "MTX Care — hospital information system",
    category: "HEALTHCARE",
    swatch: "linear-gradient(135deg,#0F8A7E,#3FC3A9)",
    description:
      "Triage queue, bed occupancy, lab turnaround, pharmacy stock and patient records across departments.",
    bullets: ["Patient records", "Triage queues", "Lab orders & pharmacy stock"],
  },
  {
    id: "school-erp",
    name: "School ERP",
    category: "EDUCATION",
    swatch: "linear-gradient(135deg,#0B4ED6,#5A8CFF)",
    description: "Enrolment, grade books, timetables, fee collection and parent portals with role-based access.",
    bullets: ["Role-based access", "Fee collection in ETB", "Parent & teacher portals"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & operations ERP",
    category: "MANUFACTURING",
    swatch: "linear-gradient(135deg,#5A3FC0,#8B7BF0)",
    description:
      "Production orders, bill of materials, warehouse movement, integration health and exception review.",
    bullets: ["Production orders", "Bill of materials", "Machine downtime tracking"],
  },
  {
    id: "shareholder",
    name: "Shareholder management",
    category: "CAPITAL",
    swatch: "linear-gradient(135deg,#B8791F,#E8B34D)",
    description: "Share registry, subscription tracking, dividend runs, transfers and AGM voting records.",
    bullets: ["Share registries", "Dividend runs", "AGM voting with a paper trail"],
  },
  {
    id: "civil-society",
    name: "Case handling & rights protection",
    category: "CIVIL SOCIETY",
    swatch: "linear-gradient(135deg,#B5541C,#E8944D)",
    description:
      "Migrant registration, case intake and advocacy workflows behind a public-facing awareness and donor site.",
    bullets: ["Case intake & tracking", "Partner & donor portals", "Public advocacy site"],
  },
];

export const alsoDelivered = [
  "HR & payroll with ETB tax tables",
  "Inventory & point of sale",
  "Microfinance loan origination",
  "Fleet and dispatch tracking",
  "Document & approval workflow",
];
