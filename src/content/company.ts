/**
 * Kinds of work MTX has delivered, as confirmed by the founder. `projects` link to a case study when
 * one exists (by work.ts slug); plain names are delivered projects without a public write-up yet.
 */
export const trackRecord: { sector: string; work: string; projects: { name: string; slug?: string }[] }[] = [
  {
    sector: "Healthcare",
    work: "Hospital ERP and hospital websites",
    projects: [
      { name: "MTX-Care", slug: "mtx-care" },
      { name: "Grand Valley Primary Hospital", slug: "grand-valley-hospital" },
    ],
  },
  {
    sector: "Education",
    work: "School management systems and learning apps",
    projects: [
      { name: "SchoolERP at Terbiya International School", slug: "school-erp" },
      { name: "Laziz", slug: "laziz" },
    ],
  },
  {
    sector: "Hospitality",
    work: "Restaurant management systems",
    projects: [{ name: "Nur Palace", slug: "nur-palace" }],
  },
  {
    sector: "Finance",
    work: "Multi-company finance management",
    projects: [{ name: "Grand Valley group", slug: "grand-valley-finance" }],
  },
  {
    sector: "Transport",
    work: "Booking, shareholder and courier management platforms",
    projects: [
      { name: "Nur Bus", slug: "nur-bus" },
      { name: "Nur Bus shareholders", slug: "nur-bus-shareholders" },
      { name: "Courier management system" },
    ],
  },
  {
    sector: "Retail & e-commerce",
    work: "Marketplaces and campus food delivery",
    projects: [
      { name: "Grandbirr Market", slug: "grandbirr-market" },
      { name: "QuickGebeta", slug: "quickgebeta" },
    ],
  },
  {
    sector: "Legal services",
    work: "A legal services marketplace",
    projects: [{ name: "Tebekaye", slug: "tebekaye" }],
  },
  {
    sector: "Construction",
    work: "Company websites",
    projects: [{ name: "MGC General Contractor", slug: "mgc" }],
  },
  {
    sector: "Civil society",
    work: "NGO websites with case registration",
    projects: [{ name: "MRPO", slug: "mrpo" }],
  },
  {
    sector: "Faith & community",
    work: "Quran apps and research websites",
    projects: [
      { name: "Ibsa Qur'aanaa", slug: "ibsa-quraanaa" },
      { name: "Iqra Foundation", slug: "iqra-foundation" },
    ],
  },
  {
    sector: "Publishing",
    work: "Author, personal and landing-page sites",
    projects: [{ name: "Qarooma Baha Oromiyaa", slug: "qarooma-baha-oromiyaa" }],
  },
];

/** Sectors with delivered work. Derived from the track record so the list and the stat can't drift apart. */
export const sectors = trackRecord.map((entry) => entry.sector);

/** What every MTX build shares, regardless of sector. */
export const foundations = [
  {
    title: "ETB-native reporting",
    body: "Ledgers, dashboards and exports are built around Ethiopian Birr and local fiscal periods from the first sprint — not retrofitted later.",
  },
  {
    title: "Bilingual by default",
    body: "Amharic and Afaan Oromoo interfaces, and integrations like Telebirr, are standard parts of the build, not a change request.",
  },
  {
    title: "Built for the network you have",
    body: "Sites and apps are tuned for low-bandwidth mobile connections, because that's what most of our users are actually on.",
  },
  {
    title: "Compliance-aware by construction",
    body: "Role-based access and full audit trails are part of the data model, not a feature bolted on before an audit.",
  },
];

export const principles = [
  {
    title: "One senior team, start to finish",
    body: "The engineers who scope the system are the ones who build and support it. No outsourced maintenance queue after launch.",
  },
  {
    title: "Systems your finance team can sign off on",
    body: "Every platform we ship carries an audit trail your accountants and auditors can actually follow.",
  },
  {
    title: "Scope moves, the date doesn't",
    body: "We work in two-week increments demoed to your team, so priorities can shift without the release date slipping.",
  },
  {
    title: "We stay after launch",
    body: "Monitoring, support hours and quarterly roadmap reviews — or a clean handover, if that's what you'd rather have.",
  },
];

export const deliveryProcess = [
  {
    phase: "Week 1–2",
    title: "Discovery",
    body: "Process mapping, system audit and a costed delivery plan. Fixed fee, fully creditable.",
  },
  {
    phase: "Week 3–5",
    title: "Architecture",
    body: "Data model, integration contracts and a working vertical slice in your environment.",
  },
  {
    phase: "Ongoing",
    title: "Build",
    body: "Two-week increments demoed to your team. Scope moves; the release date does not.",
  },
  {
    phase: "Post-launch",
    title: "Run",
    body: "Monitoring, support hours and quarterly roadmap reviews — or a clean handover.",
  },
];
