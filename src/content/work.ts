export type WorkProject = {
  slug: string;
  name: string;
  domain?: string;
  sector: string;
  /** Decides how the screenshot is framed: a browser window or a phone. */
  platform: "web" | "mobile";
  image: { src: string; alt: string };
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
    sector: "Healthcare",
    platform: "web",
    image: {
      src: "/images/work/grand-valley-hospital.png",
      alt: "Grand Valley Primary Hospital website homepage, showing department directory and appointment booking",
    },
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
    sector: "Transport",
    platform: "web",
    image: {
      src: "/images/work/nur-bus.png",
      alt: "Nur Bus website homepage, showing trip booking and investor share purchase entry points",
    },
    cardSummary: "Trip booking plus a share-purchase flow for investors, in two languages.",
    caseTitle: "Nur Bus — booking and share sales",
    caseSummary:
      "Passengers book trips across a growing route network, while investors buy shares through a guided purchase flow tied into the shareholder registry. Language switcher, partner portal and login are all part of the same build.",
    tags: ["Seat booking engine", "Share purchase", "Telebirr"],
  },
  {
    slug: "school-erp",
    name: "SchoolERP",
    sector: "Education · ERP",
    platform: "web",
    image: {
      src: "/images/work/school-erp.png",
      alt: "SchoolERP sign-in screen for the school management system",
    },
    cardSummary: "Enrolment, grade books, timetables, fee collection and parent portals with role-based access.",
    caseTitle: "SchoolERP — school management system",
    caseSummary:
      "A full academic and finance platform with separate super admin, academic admin, finance admin, teacher and parent roles. Enrolment, grade books, attendance, timetables, fee collection in ETB and analytics across departments, with dark mode and multi-language from day one.",
    tags: ["Role-based access", "Fee collection", "Parent portal"],
  },
  {
    slug: "grandbirr-market",
    name: "Grandbirr Market",
    sector: "Retail marketplace",
    platform: "mobile",
    image: {
      src: "/images/work/grandbirr-market.jpg",
      alt: "Grandbirr Market app home screen with category navigation and shop-by-category tiles",
    },
    cardSummary: "Multi-vendor commerce with wholesale (Jimla), local storefronts (Gebeya) and category browsing.",
    caseTitle: "Grandbirr Market — multi-vendor marketplace app",
    caseSummary:
      "Multi-vendor commerce with retail, wholesale (Jimla) and neighbourhood storefronts (Gebeya) shopping modes. Category browsing, wishlists, live cart and notifications, and a dedicated account and vendor experience.",
    tags: ["React Native", "Multi-vendor", "Category browsing"],
  },
  {
    slug: "ibsa-quraanaa",
    name: "Ibsa Qur'aanaa",
    sector: "Consumer app",
    platform: "mobile",
    image: {
      src: "/images/work/ibsa-quraanaa.jpg",
      alt: "Ibsa Qur'aanaa Afaan Oromoo Quran app listing on Google Play",
    },
    cardSummary: "Afaan Oromoo Quran app — 50K+ downloads, 4.2 stars across 235 reviews, offline audio.",
    caseTitle: "Ibsa Qur'aanaa — Oromo Quran app",
    caseSummary:
      "Afaan Oromoo Quran translation with offline reading and audio recitation. Published on Google Play and maintained through staged releases.",
    tags: ["Offline audio", "Google Play", "Afaan Oromoo"],
    stats: [
      { value: "50K+", label: "Downloads" },
      { value: "4.2★", label: "235 reviews" },
    ],
  },
  {
    slug: "qarooma-baha-oromiyaa",
    name: "Qarooma Baha Oromiyaa",
    domain: "jaalataa.com",
    sector: "Publishing",
    platform: "web",
    image: {
      src: "/images/work/book-store.png",
      alt: "Qarooma Baha Oromiyaa book website homepage, showing the book cover and author details",
    },
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
    sector: "Civil society",
    platform: "web",
    image: {
      src: "/images/work/migrant-right.png",
      alt: "MRPO — Migrant Rights Protection Organization homepage",
    },
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

/** Looks up a project that the content files reference by slug; a typo should fail loudly at build time. */
export function requireWorkProject(slug: string) {
  const project = getWorkProject(slug);
  if (!project) throw new Error(`Unknown work project: ${slug}`);
  return project;
}
