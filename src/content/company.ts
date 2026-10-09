import type { NavLink } from "./site";

export const sectors = [
  "Banking & finance",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Transport",
  "Retail",
  "Civil society",
  "Publishing",
];

export type Service = {
  id: string;
  name: string;
  summary: string;
  capabilities: string[];
  links: NavLink[];
};

export const services: Service[] = [
  {
    id: "web",
    name: "Web applications",
    summary: "Marketing sites, customer portals and internal dashboards, built to load fast on real Ethiopian networks.",
    capabilities: [
      "Next.js and React builds with strong Core Web Vitals",
      "SEO-first marketing sites and department microsites",
      "Admin dashboards and internal tooling",
      "Payment and messaging integrations (Telebirr, SMS)",
    ],
    links: [
      { label: "Grand Valley Primary Hospital", href: "/work/grand-valley-hospital" },
      { label: "Nur Bus", href: "/work/nur-bus" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile applications",
    summary: "Android and iOS apps for marketplaces, booking and consumer products — built for offline-first, low-bandwidth use.",
    capabilities: [
      "React Native builds shipped to Google Play and the App Store",
      "Multi-vendor marketplace and booking flows",
      "Offline reading, caching and background sync",
      "Amharic and Afaan Oromoo localization from day one",
    ],
    links: [
      { label: "Grandbirr Market", href: "/work/grandbirr-market" },
      { label: "Ibsa Qur'aanaa", href: "/work/ibsa-quraanaa" },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise systems",
    summary: "ERP, financial and shareholder platforms that your finance and operations teams can actually audit.",
    capabilities: [
      "General ledgers, loan books and ETB reporting with month-end close",
      "School and manufacturing ERP with role-based access",
      "Shareholder registries, dividend runs and AGM voting",
      "Full audit trails on every posting and approval",
    ],
    links: [{ label: "See all platforms", href: "/platforms" }],
  },
  {
    id: "ai",
    name: "AI solutions",
    summary: "AI features layered into the systems we build or already run for you — not a bolt-on chatbot.",
    capabilities: [
      "Document extraction for invoices, claims and registrations",
      "Anomaly detection on financial postings and inventory movement",
      "Natural-language reporting over your own operational data",
      "Workflow automation across the ERP and portals we maintain",
    ],
    links: [{ label: "Talk through a use case", href: "/contact" }],
  },
];

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
