/**
 * A measured outcome. `source` says where the number comes from (analytics, client report, store listing…)
 * so every figure on the site can be traced back. Never add a metric without one.
 */
export type CaseStudyMetric = { value: string; label: string; source?: string };

/**
 * A client quote. `approved` must be set to `true` only once the client has agreed, in writing,
 * to have the quote and their name published. Unapproved testimonials are never rendered.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organization: string;
  photo?: { src: string; alt: string };
  approved: boolean;
};

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

  // ---- Optional case-study detail. Each section on the case-study page renders only when its data is present. ----

  /** Who the client is, in a sentence or two. */
  client?: {
    /** Defaults to `name` when omitted. */
    name?: string;
    location?: string;
    about?: string;
    /** Logo for the client strip. Only set when the client has granted permission to show it. */
    logo?: { src: string; alt: string };
  };
  /** Year(s) of the engagement, e.g. "2024" or "2023–2025". */
  year?: string;
  /** Delivery length, e.g. "14 weeks". */
  duration?: string;
  status?: "Live" | "In development" | "In pilot" | "Maintained by MTX" | "Handed over";
  /** What MTX did on the project, e.g. ["Discovery", "UX design", "Build", "Support"]. */
  services?: string[];
  /** The situation before MTX was involved. One paragraph per entry. */
  challenge?: string[];
  /** How the problem was approached. One paragraph per entry. */
  approach?: string[];
  features?: { title: string; body: string }[];
  /** Technologies and integrations, e.g. ["Next.js", "PostgreSQL", "Telebirr"]. */
  stack?: string[];
  timeline?: { period: string; title: string; body?: string }[];
  results?: CaseStudyMetric[];
  testimonial?: Testimonial;
  /** Additional screenshots shown below the main image. */
  gallery?: { src: string; alt: string; frame?: "browser" | "phone" }[];
  /** Overrides the "Delivered as" label, e.g. "Telegram mini app". */
  deliveredAs?: string;
  /** Shown under the main screenshot, e.g. to say the screens use demo data. */
  screensNote?: string;
  /**
   * For products and published apps: describes the software itself to search engines (schema.org
   * SoftwareApplication). `category` uses schema.org's applicationCategory values.
   */
  software?: { category: string; os: string };
  /** Public link when the project isn't a website, e.g. an app-store listing. */
  link?: { href: string; label: string };
  /** ISO date the case study was last reviewed; feeds sitemap lastModified later. */
  updated?: string;
};

/** True when a testimonial may be shown publicly. */
export function isPublishable(testimonial?: Testimonial): testimonial is Testimonial {
  return Boolean(testimonial?.approved);
}

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
    slug: "mtx-care",
    name: "MTX-Care",
    sector: "Healthcare · Hospital ERP",
    platform: "web",
    image: {
      src: "/images/work/mtx-care-reports.webp",
      alt: "MTX-Care revenue report in ETB by payment method, cashier and service type for an Ethiopian-calendar month (demo data)",
    },
    cardSummary: "Hospital ERP in use at Grand Valley Primary Hospital: registration, a cashier billing gate, lab, pharmacy and inpatient care.",
    caseTitle: "MTX-Care — hospital ERP for Ethiopian hospitals",
    caseSummary:
      "MTX's own hospital ERP, in use at Grand Valley Primary Hospital: patient registration, outpatient, emergency and inpatient care, a cashier that gates lab and pharmacy work until the bill is paid, pharmacy stock, and HMIS reports on the Ethiopian calendar. Screens shown here use demo data.",
    software: { category: "BusinessApplication", os: "Web" },
    tags: ["Billing gate", "Ethiopian calendar", "Amharic / Afaan Oromoo"],
    client: {
      name: "MTX product",
      about:
        "MTX-Care is a product MTX builds and owns for Ethiopian public and private hospitals. Grand Valley Primary Hospital runs on it; it installs on a hospital's own server or in the cloud.",
    },
    status: "Live",
    services: ["Product design", "Build", "Deployment tooling"],
    challenge: [
      "Ethiopian hospitals work with payers, payment methods, calendars and reports that imported systems don't cover: CBHI and SHI members, Telebirr and CBE Birr at the cashier, HMIS reports by Ethiopian-calendar period, and staff who work in Amharic and Afaan Oromo.",
      "Money also leaks when work is done before it's paid for, so the cashier needed to sit between ordering a test and doing it.",
    ],
    approach: [
      "The clinical model is inspired by OpenMRS, with billing built in from the start. A lab order stays invisible to the lab until it's paid, and prescriptions are checked against pharmacy stock before the patient reaches the cashier.",
      "Diagnoses use the CIEL medical dictionary, shipped with the software so no internet is needed: about 53,000 concepts mapped to ICD-10 and LOINC. Doctors search by everyday names; reports still count by ICD-10.",
    ],
    features: [
      {
        title: "Registration",
        body: "Medical record numbers, Fayda ID, Ethiopian address and date of birth, duplicate-patient warnings and audited merges.",
      },
      {
        title: "Cashier and billing gate",
        body: "Shifts with cash counts, partial payments, cash, Telebirr, CBE Birr, M-Pesa or bank, 80 mm receipts and supervisor-approved refunds.",
      },
      {
        title: "Lab and imaging",
        body: "Worklists, sample collection, flagged results and verification by a second technologist; corrections keep the earlier version.",
      },
      {
        title: "Pharmacy",
        body: "Prescription review, first-expiry-first-out dispensing of paid drugs, Model 19 receiving, bin cards and near-expiry tracking.",
      },
      {
        title: "Inpatient care",
        body: "Wards and beds, admissions, transfers, bed-day billing, deposits, medication administration records and discharge summaries.",
      },
      {
        title: "Reports and audit",
        body: "Revenue by method and cashier, HMIS morbidity by ICD-10, stock value and expiry, an append-only audit log and clinical-record access audit.",
      },
    ],
    stack: ["NestJS", "PostgreSQL", "Prisma", "React", "Vite", "TanStack Query", "i18next", "Docker", "Caddy", "CIEL · ICD-10 · LOINC", "Playwright"],
    screensNote: "Screens show demo data from a demo hospital.",
    gallery: [
      { src: "/images/work/mtx-care-reports-om.webp", alt: "MTX-Care revenue report in Afaan Oromoo (demo data)" },
      { src: "/images/work/mtx-care-morbidity.webp", alt: "MTX-Care morbidity report: top diagnoses by ICD-10, age group and sex for an Ethiopian-calendar month (demo data)" },
    ],
    updated: "2026-11-16",
  },
  {
    slug: "grand-valley-finance",
    name: "Grand Valley group finance system",
    sector: "Finance · Multi-company",
    platform: "web",
    image: {
      src: "/images/work/finance-reports.webp",
      alt: "Multi-company finance system: income versus expenses and category breakdown for one company (demo data, demo company names)",
    },
    cardSummary: "One finance system for a group of sister companies: income, expenses, budgets, purchases and inter-company credit.",
    caseTitle: "Finance management for a group of sister companies",
    caseSummary:
      "A multi-company finance system used by the Grand Valley group: a hospital, a college, a school and a pharmacy. Each company keeps its own books, budgets and purchase requests, the group's administrators see every company in one place, and credit between the companies is requested, approved and repaid inside the system.",
    tags: ["Multi-company", "Budgets in Afaan Oromoo", "Inter-company credit"],
    client: {
      name: "Grand Valley group",
      about:
        "A group of sister companies: Grand Valley Hospital, Grand Valley College, Iqra School and Grand Valley Pharmacy.",
    },
    year: "2025",
    status: "Live",
    services: ["Design", "Build", "Deployment"],
    challenge: [
      "Each company in the group handled its own money, but the owners needed one view across all of them, and money moving between sister companies needed a proper approval and repayment trail.",
    ],
    approach: [
      "Every user belongs to one company and sees only its books; group super admins see all four. Expenses are booked against coded budget lines (for example 002A for permanent staff salaries) with the remaining balance shown as they're entered, and spending beyond a budget line is refused.",
      "Budget categories and the finance manager's screens are in Afaan Oromoo, with English and Amharic available.",
    ],
    features: [
      { title: "Income and expenses", body: "Per company, with categories, receipt attachments and recurring entries." },
      { title: "Coded budgets", body: "Budget lines with reference codes, extra allocations and live remaining balances; overspending is blocked." },
      { title: "Purchase requests", body: "Requests with supplier quotes and PDF purchase invoices." },
      { title: "Inter-company credit", body: "One company requests credit from another; super admins approve or reject; repayments and documents are tracked to completion." },
      { title: "Reports", body: "Income versus expenses, category breakdowns, budget reports and CSV export, per company or across the group." },
      { title: "Control and audit", body: "Super admin, finance manager, accountant and auditor roles, real-time notifications and an audit log." },
    ],
    stack: ["Next.js", "Express", "TypeScript", "PostgreSQL", "TypeORM", "Socket.IO", "PDFKit", "Docker", "nginx"],
    screensNote: "Screens show demo data; company names have been replaced.",
    gallery: [
      {
        src: "/images/work/finance-expenses.webp",
        alt: "Expense list booked against coded budget lines, with the remaining budget for each code (demo data)",
      },
    ],
    updated: "2026-11-17",
  },
  {
    slug: "nur-palace",
    name: "Nur Palace",
    sector: "Hospitality · Restaurant",
    platform: "web",
    image: {
      src: "/images/work/nur-palace-pos.webp",
      alt: "Nur Palace point of sale taking a table order priced in ETB (demo menu)",
    },
    cardSummary: "Restaurant management for a premium restaurant and coffee house: POS, station screens, inventory, attendance and payroll.",
    caseTitle: "Nur Palace — restaurant management system",
    caseSummary:
      "A custom system Nur Palace Restaurant runs on: point of sale, waiter app, QR table ordering, kitchen, coffee and juice screens, a queue TV, inventory with recipes, and staff attendance, deductions and payroll, with a fingerprint device MTX built in-house. Four languages, and it keeps running when the internet doesn't.",
    software: { category: "BusinessApplication", os: "Web, Android" },
    tags: ["Offline-first", "Fingerprint attendance", "Four languages"],
    client: {
      name: "Nur Palace Restaurant",
      about: "A premium restaurant and coffee house, opening with one branch and planning more.",
    },
    year: "2026",
    status: "Live",
    services: ["Scoping", "Design & build", "Fingerprint hardware"],
    challenge: [
      "Nur Palace wanted one system for the whole operation: orders at the counter, at tables and by QR code, each item sent to the right preparation station, a till that balances, and staff attendance and pay.",
      "Working offline was a hard requirement. A restaurant can't stop serving because the connection drops.",
    ],
    approach: [
      "MTX built it around a restaurant hub: a small server on the restaurant's own network that every tablet and screen talks to, syncing with the cloud when a connection is available. The delivery plan includes a 30-minute offline test in which no data may be lost.",
      "The opening release was planned in 20 days, with working demos on days 7 and 12. Rules the client changes over time, such as lateness deductions and tax, pension and overtime rates, are edited in the admin, not hard-coded.",
    ],
    features: [
      {
        title: "Point of sale and waiter app",
        body: "Dine-in and takeaway, split bills, discounts behind a manager PIN, audited voids, service charge and VAT.",
      },
      {
        title: "Station screens and queue TV",
        body: "Each item goes to the kitchen, coffee bar or juice bar screen that makes it, with prep timers; a TV in the hall shows order status.",
      },
      {
        title: "QR table ordering",
        body: "Guests order from their table and staff approve each order before it reaches the stations.",
      },
      {
        title: "Payments and till",
        body: "Cash and Chapa, with references for CBE Birr and card; cashier sessions with a cash count and Z report.",
      },
      {
        title: "Attendance and payroll",
        body: "An ESP32 fingerprint device built by MTX, a PIN-and-photo fallback, shifts, versioned deduction rules and a monthly payroll run with payslips.",
      },
      {
        title: "Inventory and recipes",
        body: "Every sale deducts its ingredients; low-stock alerts, receiving, waste and stocktake. Menus in Amharic, Afaan Oromoo, English and Arabic.",
      },
    ],
    stack: ["NestJS", "PostgreSQL", "Prisma", "Socket.IO", "React", "Vite", "Tailwind CSS", "React Native (Expo)", "ESP32 firmware", "Chapa", "SMS Ethiopia"],
    timeline: [
      { period: "Day 1–2", title: "Foundation", body: "Database, shared contracts and every app booting in CI." },
      { period: "Day 7", title: "Demo 1", body: "An order on the POS appears on the right station screen in under a second." },
      {
        period: "30 Oct 2026",
        title: "Demo 2",
        body: "Full flow: waiter order, stations, queue TV, cash and Chapa payment, printed receipt and stock deducted.",
      },
      {
        period: "Nov 2026",
        title: "Mobile app started",
        body: "At the client's request: one app with customer, waiter and rider modes for delivery and pickup.",
      },
    ],
    screensNote: "Screens show the system's demo menu and demo staff.",
    gallery: [
      { src: "/images/work/nur-palace-kds.webp", alt: "Nur Palace coffee bar station screen with two open orders (demo data)" },
      { src: "/images/work/nur-palace-floor.webp", alt: "Nur Palace POS floor view with table status by area (demo data)" },
      { src: "/images/work/nur-palace-admin-menu.webp", alt: "Nur Palace admin menu editor with prices, stations and translation status (demo menu)" },
    ],
    updated: "2026-11-16",
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
    slug: "nur-bus-shareholders",
    name: "Nur Bus shareholder management",
    sector: "Transport · Share company",
    platform: "web",
    image: {
      src: "/images/work/nur-shares-certificates.webp",
      alt: "Nur Bus shareholder portal: share certificates with verification status and a certificate preview (demo data)",
    },
    cardSummary: "Shareholder registry for a share company: purchase requests, generated certificates and a Telegram mini app.",
    caseTitle: "Nur Bus — shareholder management system",
    caseSummary:
      "The shareholder registry behind Nur Bus Transport Company's share sale: share purchase requests, payments against the company's bank accounts, shareholder records, and share certificates generated as PDFs with a QR code for verification. Shareholders can also reach it through a Telegram mini app.",
    tags: ["Share registry", "PDF certificates", "Telegram mini app"],
    client: {
      name: "Nur Bus Transport Company",
      about: "A transport share company selling shares to the public alongside its bus booking service.",
    },
    year: "2026",
    status: "Live",
    services: ["Design", "Build", "Integrations"],
    challenge: [
      "Selling shares to the public means every request, payment and certificate has to be traceable, and shareholders need a simple way to see what they own.",
    ],
    approach: [
      "Share purchase requests move through review into the registry, and each approved holding gets a numbered certificate rendered from a template, stamped, and stored as a PDF with a QR code that links back to the record.",
      "Shareholders who live on their phones can open the portal as a Telegram mini app; the API checks Telegram's signed login data before trusting it.",
    ],
    features: [
      { title: "Purchase requests", body: "Requests for shares, linked to the company's bank accounts and the payment transaction." },
      { title: "Shareholder registry", body: "Shareholders, holdings and transactions for one or more companies." },
      { title: "Certificates", body: "Numbered PDF certificates generated in a background queue from a template, with QR verification." },
      { title: "Shareholder portal", body: "Holdings, certificates, dividends and announcements for each shareholder." },
      { title: "Telegram mini app", body: "Sign-in through Telegram with signed login data verified on the server." },
      { title: "Audit and analytics", body: "An audit log of changes and analytics for the administrators." },
    ],
    stack: ["NestJS", "PostgreSQL", "Prisma", "Bull queues", "Puppeteer", "Handlebars", "QR codes", "Cloudinary", "Telegram Mini Apps", "React", "Vite"],
    screensNote: "Portal screens show demo data.",
    gallery: [
      { src: "/images/work/nur-shares-dashboard.webp", alt: "Nur Bus shareholder portal investor dashboard for a sample shareholder (demo data)" },
    ],
    updated: "2026-11-17",
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
    cardSummary: "School management in use at Terbiya International School: enrolment, grade books, timetables, fees and parent portals.",
    caseTitle: "SchoolERP — school management system",
    caseSummary:
      "A full academic and finance platform, in use at Terbiya International School, with separate super admin, academic admin, finance admin, teacher and parent roles. Enrolment, grade books, attendance, timetables, fee collection in ETB and analytics across departments, with dark mode and multi-language from day one.",
    tags: ["Role-based access", "Fee collection", "Parent portal"],
    client: { name: "Terbiya International School" },
    status: "Live",
    features: [
      {
        title: "Six roles, two layers of security",
        body: "Super admin, academic admin, finance admin, teacher, parent and student. Route guards in the app plus row-level security in PostgreSQL.",
      },
      {
        title: "Admission wizard",
        body: "Multi-step admission with guardian linking and medical details. Students move from under review to accepted to enrolled, and enrolled records can't be demoted by accident.",
      },
      {
        title: "Teacher attendance per lesson",
        body: "Each classroom door has a signed QR code. Teachers scan it at the start of every lesson, inside the school's location radius, which also opens student attendance for that period.",
      },
      {
        title: "Ethiopian and Gregorian calendars",
        body: "Exact conversion between the two calendars for holidays, exams and school events.",
      },
      {
        title: "Timetables without clashes",
        body: "Conflict detection stops a teacher being double-booked; teachers and parents see only their own schedules.",
      },
      {
        title: "Grades, report cards and fees",
        body: "Score entry, GPA and class rank, printable report cards, bulk invoicing in ETB and payment verification.",
      },
    ],
    stack: ["React", "TypeScript", "Vite", "Supabase (PostgreSQL + row-level security)", "Express", "Prisma", "Tailwind CSS", "i18next", "Playwright"],
  },
  {
    slug: "tebekaye",
    name: "Tebekaye",
    sector: "Legal services · Marketplace",
    platform: "web",
    image: {
      src: "/images/work/tebekaye.webp",
      alt: "Tebekaye home page: find a verified lawyer in Addis Ababa by legal problem and sub-city",
    },
    cardSummary: "A legal marketplace: describe a problem in plain language and get proposals from verified advocates, in English and Amharic.",
    caseTitle: "Tebekaye — legal services marketplace",
    caseSummary:
      "A web platform where people in Ethiopia describe a legal problem in plain language, receive proposals from advocates whose licences have been checked, choose one, and work with them securely, in English and Amharic. Built and run by MTX.",
    software: { category: "BusinessApplication", os: "Web" },
    tags: ["Marketplace", "Amharic / English", "Privacy by design"],
    client: { name: "MTX product" },
    status: "Live",
    services: ["Requirements", "Design", "Build"],
    challenge: [
      "The goal is to let someone describe a legal problem once, in everyday language, and compare offers from verified advocates without needing to know the legal specialty first.",
      "Trust and privacy shape every screen: clients stay pseudonymous until they choose an advocate, and the platform never names a \"best lawyer\" or predicts outcomes.",
    ],
    approach: [
      "Requirements live in one specification, with every role, action and case state covered by an authorisation matrix and a test. Legal questions run as a separate workstream with counsel.",
      "Personal data stays in Ethiopia: the platform is designed for in-country hosting, uploads are virus-scanned, and payments go through Chapa.",
    ],
    features: [
      {
        title: "Search and compare",
        body: "Filter by legal problem and Addis Ababa sub-city; advocates are ordered by experience and nobody can pay to rank higher.",
      },
      {
        title: "Post a case, get proposals",
        body: "Describe the problem once and verified advocates send offers to compare side by side.",
      },
      {
        title: "Licence checks",
        body: "Each advocate is checked against the Ministry of Justice register before being listed.",
      },
      {
        title: "Secure workspace",
        body: "Messaging, shared documents and consultation booking between client and advocate once a proposal is accepted.",
      },
      {
        title: "Local payments",
        body: "A flat platform fee paid with telebirr, CBE Birr, M-Pesa or card.",
      },
      {
        title: "Built for Ethiopia",
        body: "Amharic as a first-class language, Ethiopian calendar and time, local phone formats and tolerance for weak networks.",
      },
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Drizzle ORM", "Redis", "BullMQ", "Socket.IO", "S3-compatible storage", "ClamAV", "Chapa"],
    gallery: [
      { src: "/images/work/tebekaye-am.webp", alt: "Tebekaye home page in Amharic" },
      { src: "/images/work/tebekaye-how.webp", alt: "Tebekaye how-it-works page" },
    ],
    updated: "2026-11-16",
  },
  {
    slug: "mgc",
    name: "MGC — Miftah General Contractor",
    domain: "mgcethiopia.com",
    sector: "Construction",
    platform: "web",
    image: {
      src: "/images/work/mgc.webp",
      alt: "MGC Miftah General Contractor website hero: Building Ethiopia, together",
    },
    cardSummary: "Website for a licensed construction firm: services, filterable project photos, a coverage map and WhatsApp enquiries.",
    caseTitle: "MGC — website for a construction company",
    caseSummary:
      "A company website for Miftah General Contractor: twelve core services, project photography with category filters, the owner's profile, a coverage map of Ethiopia and an enquiry form that prepares a WhatsApp or email message.",
    tags: ["React", "Project gallery", "WhatsApp enquiries"],
    client: {
      name: "Miftah General Contractor",
      location: "Addis Ababa",
      about:
        "A construction and engineering company headquartered in Addis Ababa and working across Ethiopia, licensed by the Ethiopian Construction Authority.",
    },
    status: "Live",
    services: ["Design", "Build", "Content structure"],
    challenge: [
      "MGC's company profile needed to work as a website: their services and real project photography in front of clients and partners, with an easy way to get in touch.",
    ],
    approach: [
      "All text comes from MGC's company profile and lives in a single content file, so updates never touch the layout. Testimonials, project names and dates are added only once MGC verifies them.",
      "The enquiry form stores nothing: it prepares a WhatsApp or email draft with the chosen service already filled in, and the visitor sends it from their own app.",
    ],
    features: [
      { title: "Services", body: "Twelve core services grouped into building, infrastructure and engineering, each linking straight to an enquiry." },
      { title: "Project gallery", body: "Photography filtered by category, with an accessible full-size viewer." },
      { title: "Coverage map", body: "An outline map of Ethiopia showing where MGC operates." },
      { title: "Accessible by default", body: "Keyboard navigation, focus handling in the photo viewer and reduced-motion support." },
    ],
    stack: ["React", "Vite", "GSAP"],
    gallery: [
      { src: "/images/work/mgc-projects.webp", alt: "MGC project gallery with category filters" },
      { src: "/images/work/mgc-services.webp", alt: "MGC core services section" },
    ],
    updated: "2026-11-16",
  },
  {
    slug: "quickgebeta",
    name: "QuickGebeta",
    sector: "Food delivery · Campus marketplace",
    platform: "mobile",
    deliveredAs: "Telegram mini app",
    image: {
      src: "/images/work/quickgebeta-foods.webp",
      alt: "QuickGebeta student app: campus food menu with dishes priced in ETB (demo menu)",
    },
    cardSummary: "Campus food delivery and a student marketplace, running inside Telegram. Live with university students.",
    caseTitle: "QuickGebeta — campus food delivery and marketplace",
    caseSummary:
      "MTX's own platform for university students: order food from campus restaurants, get it delivered, and buy and sell on a campus marketplace, all inside Telegram. Four connected apps serve students, restaurants, delivery drivers and sellers. Live and serving university students.",
    software: { category: "ShoppingApplication", os: "Web (Telegram mini app)" },
    tags: ["Telegram mini app", "Food delivery", "Marketplace"],
    client: { name: "MTX product" },
    year: "2025",
    status: "Live",
    services: ["Product", "Design", "Build", "Operations"],
    challenge: [
      "Students spend their day on campus and on Telegram. Ordering food from campus restaurants, and buying or selling things between students, had no simple shared place, and most students pay with CBE or Telebirr rather than cards.",
    ],
    approach: [
      "The whole platform runs as a Telegram mini app, so students sign in with the Telegram account they already use and never install anything. Restaurants, drivers and sellers use the same platform with their own apps and email sign-in.",
      "Payments work the way students already pay: they transfer with CBE or Telebirr and upload the screenshot, which the restaurant checks before accepting the order. Marketplace listings go live once their payment is verified.",
    ],
    features: [
      { title: "Student app", body: "Browse restaurants and dishes, order, upload payment proof and follow the order on a status timeline." },
      { title: "Restaurant app", body: "Incoming orders with payment screenshots to approve or reject, menu management and opening hours." },
      { title: "Delivery app", body: "Drivers go online, accept deliveries, and track earnings and withdrawals." },
      { title: "Campus marketplace", body: "Students list products by category; buyers browse, filter and send inquiries to sellers." },
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "Prisma", "Auth.js", "Telegram Bot API", "Vercel"],
    screensNote: "Screen shows the platform's demo menu.",
    updated: "2026-11-17",
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
    software: { category: "ShoppingApplication", os: "Android" },
    tags: ["React Native", "Multi-vendor", "Category browsing"],
  },
  {
    slug: "laziz",
    name: "Laziz",
    sector: "Education · Mobile app",
    platform: "mobile",
    image: {
      src: "/images/work/laziz-grades.webp",
      alt: "Laziz app grade picker in Afaan Oromoo, grades 1 to 8",
    },
    cardSummary: "A learning app for Afaan Oromoo students and readers: books, grade 1–8 textbooks and quizzes. Live on Google Play.",
    caseTitle: "Laziz — learn and read in Afaan Oromoo",
    caseSummary:
      "An educational app built for a client, for Afaan Oromoo students and readers: a library of books, grade 1–8 textbooks and quizzes, with an admin area for publishing content. Built in Flutter and live on Google Play.",
    software: { category: "EducationalApplication", os: "Android" },
    tags: ["Flutter", "Afaan Oromoo", "Google Play"],
    client: { name: "Private client" },
    year: "2026",
    status: "Live",
    services: ["Design", "Build", "Store release"],
    link: { href: "https://play.google.com/store/apps/details?id=com.laziziqra.laziz", label: "Google Play" },
    approach: [
      "Content is managed in Firebase, so new books, textbooks and quizzes are published from the app's admin area without a new release. Textbooks open as PDFs inside the app.",
    ],
    features: [
      { title: "Books", body: "A library of Afaan Oromoo books, read in the app." },
      { title: "Grade 1–8 textbooks", body: "Textbooks organised by grade." },
      { title: "Quizzes", body: "Quizzes by grade with question counts, difficulty and a pass mark." },
      { title: "Admin publishing", body: "Upload books, textbooks and quizzes from the admin area." },
    ],
    stack: ["Flutter", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "Riverpod", "Google Mobile Ads"],
    gallery: [{ src: "/images/work/laziz-quiz.webp", alt: "Laziz quiz details screen in Afaan Oromoo", frame: "phone" }],
    updated: "2026-11-17",
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
    software: { category: "ReferenceApplication", os: "Android" },
    tags: ["Offline audio", "Google Play", "Afaan Oromoo"],
    stats: [
      { value: "50K+", label: "Downloads" },
      { value: "4.2★", label: "235 reviews" },
    ],
  },
  {
    slug: "iqra-foundation",
    name: "Iqra Islamic Research Foundation",
    sector: "Faith & research",
    platform: "web",
    image: {
      src: "/images/work/iqra.webp",
      alt: "Iqra Foundation website home page with article search",
    },
    cardSummary: "A research website with articles in four languages, a resource library and an AI research assistant.",
    caseTitle: "Iqra Foundation — Islamic research website",
    caseSummary:
      "A website for the Iqra Islamic Research Foundation: research articles in English, Arabic, Amharic and Afaan Oromoo, a library of downloadable resources, an article admin, and an AI research assistant that answers questions with references and points people to qualified scholars for rulings.",
    tags: ["Next.js", "Four languages", "AI assistant"],
    year: "2025",
    status: "Live",
    services: ["Design", "Build"],
    features: [
      { title: "Articles in four languages", body: "English, Arabic, Amharic and Afaan Oromoo, filtered by language and category." },
      { title: "Resource library", body: "Downloadable papers and study material by category." },
      {
        title: "AI research assistant",
        body: "Answers questions with Quran and Hadith references, acknowledges its limits and refers rulings to qualified scholars.",
      },
      { title: "Article admin", body: "Writing and managing articles behind an admin sign-in." },
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel AI SDK", "OpenAI"],
    gallery: [{ src: "/images/work/iqra-assistant.webp", alt: "Iqra Foundation AI research assistant with topics and suggested questions" }],
    updated: "2026-11-17",
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
    domain: "www.ymtd.org",
    sector: "Civil society",
    platform: "web",
    image: {
      src: "/images/work/mrpo-home.webp",
      alt: "MRPO website home page: Every journey. Every person. Every right.",
    },
    cardSummary: "Website and migrant registration system for a registered civil-society organization, in English, Amharic and Afaan Oromoo.",
    caseTitle: "MRPO — Migrant Right Protection Organization",
    caseSummary:
      "The website and registration system of a registered Ethiopian civil-society organization that protects migrants' rights. Ethiopians abroad without valid documents can register for support, partners and donors can see the organization's programmes, progress and reports, and the staff publish stories and updates themselves, in three languages.",
    tags: ["Migrant registration", "Three languages", "Content admin"],
    client: {
      name: "Migrant Right Protection Organization (MRPO)",
      location: "Ethiopia",
      about:
        "An Ethiopian civil-society organization working for migrants' rights through awareness, advocacy and community-based support. Registered with the Authority for Civil Society Organizations (ACSO).",
    },
    year: "2026",
    status: "Live",
    services: ["Design", "Build", "Hosting set-up"],
    challenge: [
      "MRPO needed to reach two very different audiences: Ethiopian migrants abroad, often without documents, who need a safe way to ask for help, and partners and donors who need to see that the organization is registered, accountable and active.",
    ],
    approach: [
      "Migrants can register without a passport, visa or employment contract. The form explains up front what it asks and why, and submissions go to a separate API and database rather than an inbox.",
      "Everything else is built for trust: the organization's legal registration on the page, leadership biographies, programmes, progress, reports and stories that MRPO's own staff can update from an admin area, in English, Amharic and Afaan Oromoo.",
    ],
    features: [
      { title: "Migrant support registration", body: "A guided form for Ethiopians abroad without complete documents, stored in its own database behind an API." },
      { title: "Three languages", body: "Every page in English, Amharic and Afaan Oromoo, switchable from any page." },
      { title: "Partnerships and donors", body: "Partnership requests, programme pages, progress and downloadable reports." },
      { title: "Stories and updates", body: "News and stories published by MRPO's staff from the content admin." },
      { title: "Accountability", body: "Legal registration details, leadership and the organization's framework set out on the site." },
    ],
    stack: ["Next.js", "React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "GSAP"],
    gallery: [{ src: "/images/work/mrpo-am.webp", alt: "MRPO website in Amharic" }],
    updated: "2026-11-17",
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
