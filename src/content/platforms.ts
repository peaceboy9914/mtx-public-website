import type { Faq } from "./services";

/**
 * The systems MTX builds and operates. Each gets its own landing page at /platforms/[slug].
 */
export type Platform = {
  slug: string;
  name: string;
  shortName: string;
  sector: string;
  /** Search-intent headline used for the page <title> and H1. */
  seoTitle: string;
  summary: string;
  intro: string[];
  modules: string[];
  audience: string[];
  /** Slug of a work project whose screenshot represents this platform. */
  caseStudy?: string;
  /** Slugs from content/services.ts. */
  relatedServices: string[];
  faqs: Faq[];
};

export const platforms: Platform[] = [
  {
    slug: "financial-management-system",
    name: "Multi-company financial management system",
    shortName: "Financial management",
    sector: "Finance",
    seoTitle: "Financial Management & Accounting System for Ethiopian Companies",
    summary:
      "General ledger, receivables, loan portfolio and ETB cash position across multiple companies, with a signed audit trail on every posting.",
    intro: [
      "Groups with several companies often close the month by stitching spreadsheets together. MTX's financial management system keeps every entity's books in one place and consolidates them automatically.",
      "Every posting carries who made it, who approved it and when — an audit trail your accountants and external auditors can follow without asking for extra evidence.",
    ],
    modules: [
      "General ledger & chart of accounts",
      "Multi-company consolidation",
      "Accounts receivable & payable",
      "Loan books & portfolio tracking",
      "Bank & cash position in ETB",
      "Month-end close workflow",
      "Budgeting & variance reporting",
      "Signed audit trail on every posting",
    ],
    audience: ["Holding companies & business groups", "Share companies", "NGOs with multiple funded projects", "Finance departments replacing spreadsheets"],
    relatedServices: ["erp-development", "fintech-software-development", "data-analytics"],
    faqs: [
      {
        q: "Does the system support Ethiopian accounting requirements?",
        a: "Yes. It is built around ETB, Ethiopian fiscal periods and local tax treatment, with reports structured for Ethiopian auditors.",
      },
      {
        q: "Can it consolidate several companies?",
        a: "Yes. Each company keeps its own books, and consolidated statements are produced automatically with intercompany eliminations.",
      },
    ],
  },
  {
    slug: "hospital-management-system",
    name: "Hospital management system",
    shortName: "Hospital management",
    sector: "Healthcare",
    seoTitle: "Hospital Management System (HMS) in Ethiopia",
    summary:
      "Patient records, triage queues, bed occupancy, lab orders and pharmacy stock across departments — plus the public booking site patients actually use.",
    intro: [
      "Hospitals and clinics lose time to paper cards, duplicated registration and lab results that arrive late. MTX's hospital management system connects registration, clinical departments, lab, pharmacy and billing in one record.",
      "On the patient side, a fast public website handles department information, appointment booking and an always-visible emergency line — built for patients on mobile data.",
    ],
    modules: [
      "Patient registration & medical records",
      "Outpatient queue & triage",
      "Inpatient admission & bed management",
      "Laboratory orders & results",
      "Pharmacy & medical stock",
      "Billing, insurance & credit patients",
      "Online appointment booking",
      "Management dashboards",
    ],
    audience: ["Primary and general hospitals", "Specialty clinics", "Diagnostic laboratories", "Health networks with several sites"],
    caseStudy: "grand-valley-hospital",
    relatedServices: ["web-application-development", "custom-software-development", "data-analytics"],
    faqs: [
      {
        q: "Can patients book appointments online?",
        a: "Yes. The system includes a public booking site where patients choose a department and time, with confirmations by SMS.",
      },
      {
        q: "Does it work for a small clinic as well as a hospital?",
        a: "Yes. Modules are enabled to fit the facility — a clinic may start with registration, queue and billing, and add lab, pharmacy and inpatient modules as it grows.",
      },
    ],
  },
  {
    slug: "school-management-system",
    name: "School management system (School ERP)",
    shortName: "School management",
    sector: "Education",
    seoTitle: "School Management System & School ERP in Ethiopia",
    summary:
      "Enrolment, grade books, attendance, timetables, fee collection in ETB and parent portals — with separate roles for every part of the school.",
    intro: [
      "Schools juggle academic records, fee collection and communication with parents across disconnected tools. MTX's School ERP brings academics and finance into one platform.",
      "Super admins, academic admins, finance admins, teachers and parents each get their own view and permissions, so everyone sees exactly what they need — and nothing they shouldn't.",
    ],
    modules: [
      "Student enrolment & records",
      "Grade books & report cards",
      "Attendance tracking",
      "Timetables & class scheduling",
      "Fee collection & receipts in ETB",
      "Parent & teacher portals",
      "Role-based access for five roles",
      "Analytics across departments",
    ],
    audience: ["Private schools", "School networks & groups", "International & bilingual schools", "Colleges & training institutes"],
    caseStudy: "school-erp",
    relatedServices: ["erp-development", "ui-ux-design", "data-analytics"],
    faqs: [
      {
        q: "Can parents see grades and pay fees online?",
        a: "Yes. The parent portal shows grades, attendance and fee balances, and can be connected to online payment.",
      },
      {
        q: "Does the system support multiple languages?",
        a: "Yes. The interface supports multiple languages and includes dark mode for staff who use it all day.",
      },
    ],
  },
  {
    slug: "manufacturing-erp",
    name: "Manufacturing & operations ERP",
    shortName: "Manufacturing ERP",
    sector: "Manufacturing",
    seoTitle: "Manufacturing ERP Software in Ethiopia",
    summary:
      "Production orders, bills of materials, warehouse movement, machine downtime and exception review for Ethiopian manufacturers.",
    intro: [
      "Factories need to know what was produced, what it consumed and why a line stopped — the same day, not at month end. MTX's manufacturing ERP tracks production from raw material to finished goods.",
      "Production, warehouse and finance share one set of data, so cost of goods and stock valuation are always current.",
    ],
    modules: [
      "Production planning & orders",
      "Bills of materials & recipes",
      "Raw material & finished goods inventory",
      "Warehouse movements & transfers",
      "Machine downtime tracking",
      "Quality control checkpoints",
      "Costing & stock valuation",
      "Integration health & exception review",
    ],
    audience: ["Food & beverage producers", "Garment & textile factories", "Construction materials manufacturers", "Agro-processing companies"],
    relatedServices: ["erp-development", "system-integration", "data-analytics"],
    faqs: [
      {
        q: "Can the ERP track production costs?",
        a: "Yes. Material consumption, labour and overheads roll up into production costing, giving accurate cost of goods and stock valuation.",
      },
    ],
  },
  {
    slug: "shareholder-management-system",
    name: "Shareholder management system",
    shortName: "Shareholder management",
    sector: "Capital",
    seoTitle: "Shareholder Management & Share Registry System in Ethiopia",
    summary:
      "Share registry, subscriptions, capital calls, dividend runs, transfers and AGM voting records for Ethiopian share companies.",
    intro: [
      "Share companies with thousands of shareholders cannot run their registry on spreadsheets safely. MTX's shareholder management system keeps an authoritative register with a full history of every subscription, payment and transfer.",
      "Investors can buy shares through a guided online flow tied directly into the registry, and the board gets accurate figures for dividends and AGM quorum.",
    ],
    modules: [
      "Share register & certificates",
      "Subscriptions & capital calls",
      "Online share purchase",
      "Share transfers & approvals",
      "Dividend calculation & payout runs",
      "AGM attendance & voting records",
      "Shareholder portal",
      "Regulatory & board reporting",
    ],
    audience: ["Share companies", "Banks & insurers in formation", "Transport & industrial share companies", "Investment groups"],
    caseStudy: "nur-bus",
    relatedServices: ["fintech-software-development", "web-application-development", "custom-software-development"],
    faqs: [
      {
        q: "Can investors buy shares online?",
        a: "Yes. A guided purchase flow lets investors subscribe and pay online, and their holdings are recorded in the registry automatically.",
      },
    ],
  },
  {
    slug: "loan-management-system",
    name: "Microfinance & loan management system",
    shortName: "Loan management",
    sector: "Microfinance",
    seoTitle: "Loan Management System for Microfinance & SACCOs in Ethiopia",
    summary:
      "Loan origination, disbursement, repayment schedules, savings and collections for microfinance institutions and savings and credit cooperatives.",
    intro: [
      "Microfinance institutions and SACCOs serve thousands of members with small, frequent transactions. MTX's loan management system automates the loan lifecycle while keeping every decision auditable.",
      "Loan officers work from mobile-friendly screens in the field, and management sees portfolio quality and arrears in real time.",
    ],
    modules: [
      "Member & client onboarding",
      "Loan applications & appraisal",
      "Disbursement & repayment schedules",
      "Savings accounts",
      "Collections & arrears tracking",
      "Mobile-money repayments",
      "Portfolio-at-risk reporting",
      "Maker-checker approvals",
    ],
    audience: ["Microfinance institutions", "Savings & credit cooperatives (SACCOs)", "Digital lenders", "Employer loan schemes"],
    relatedServices: ["fintech-software-development", "mobile-app-development", "system-integration"],
    faqs: [
      {
        q: "Can members repay loans through mobile money?",
        a: "Yes. Mobile-money repayments such as Telebirr can be integrated and reconciled against loan accounts automatically.",
      },
    ],
  },
  {
    slug: "hr-payroll-system",
    name: "HR & payroll system",
    shortName: "HR & payroll",
    sector: "Human resources",
    seoTitle: "HR & Payroll Software with Ethiopian Tax Tables",
    summary:
      "Employee records, attendance, leave and payroll with Ethiopian income tax and pension deductions built in.",
    intro: [
      "Payroll errors damage trust quickly. MTX's HR and payroll system calculates salaries, allowances, overtime, income tax and pension contributions using Ethiopian rules, and produces payslips and bank transfer files.",
      "HR teams manage the full employee lifecycle — from hiring to exit — in the same system, so payroll always reflects the latest contracts and attendance.",
    ],
    modules: [
      "Employee records & contracts",
      "Attendance & time tracking",
      "Leave management",
      "Payroll with ETB tax tables",
      "Pension contributions",
      "Payslips & bank transfer files",
      "Employee self-service",
      "HR reports & headcount analytics",
    ],
    audience: ["Companies with 50+ employees", "Multi-branch organisations", "NGOs & international organisations", "Factories with shift workers"],
    relatedServices: ["erp-development", "custom-software-development"],
    faqs: [
      {
        q: "Does the payroll follow Ethiopian income tax rules?",
        a: "Yes. Payroll uses Ethiopian income tax brackets and pension contribution rates, and tables are updated when regulations change.",
      },
    ],
  },
  {
    slug: "inventory-pos-system",
    name: "Inventory & point of sale system",
    shortName: "Inventory & POS",
    sector: "Retail & distribution",
    seoTitle: "Inventory Management & POS System in Ethiopia",
    summary:
      "Stock control across warehouses and branches, point of sale, purchasing and sales reporting for retailers and distributors.",
    intro: [
      "Retailers and distributors lose money to stock-outs, over-stocking and shrinkage they cannot see. MTX's inventory and POS system tracks every item from purchase order to sale, across every branch.",
      "Branches keep selling when the internet drops; sales sync to head office as soon as the connection returns.",
    ],
    modules: [
      "Multi-branch inventory",
      "Point of sale with offline mode",
      "Purchase orders & suppliers",
      "Stock transfers between branches",
      "Barcode & SKU management",
      "Reorder alerts",
      "Sales & margin reporting",
      "Accounting integration",
    ],
    audience: ["Retail chains", "Wholesalers & distributors", "Pharmacies", "Supermarkets & mini-markets"],
    relatedServices: ["erp-development", "system-integration", "ai-solutions"],
    faqs: [
      {
        q: "Does the POS work without internet?",
        a: "Yes. The POS works offline and syncs sales to the central system automatically when the connection returns.",
      },
    ],
  },
  {
    slug: "multi-vendor-marketplace",
    name: "Multi-vendor e-commerce marketplace",
    shortName: "E-commerce marketplace",
    sector: "E-commerce",
    seoTitle: "Multi-Vendor E-commerce Marketplace Development in Ethiopia",
    summary:
      "Retail, wholesale and neighbourhood-storefront shopping in one marketplace app, with vendor management and live order tracking.",
    intro: [
      "Ethiopian commerce mixes retail, wholesale and neighbourhood trade. MTX builds marketplaces that support all three — so one platform can serve households, small shops and bulk buyers.",
      "Vendors manage their own catalogues and orders, while the operator controls commissions, payouts and quality.",
    ],
    modules: [
      "Mobile shopping app",
      "Retail, wholesale (Jimla) & storefront (Gebeya) modes",
      "Vendor onboarding & catalogues",
      "Cart, checkout & mobile payments",
      "Order tracking & notifications",
      "Vendor payouts & commissions",
      "Wishlists & category browsing",
      "Operator admin dashboard",
    ],
    audience: ["Marketplace operators", "Retail groups going online", "Wholesale distributors", "Delivery platforms"],
    caseStudy: "grandbirr-market",
    relatedServices: ["mobile-app-development", "web-application-development", "system-integration"],
    faqs: [
      {
        q: "Can vendors manage their own products?",
        a: "Yes. Each vendor has a dashboard to manage products, prices, stock and orders, while the operator manages commissions and approvals.",
      },
    ],
  },
  {
    slug: "booking-ticketing-system",
    name: "Booking & ticketing system",
    shortName: "Booking & ticketing",
    sector: "Transport & hospitality",
    seoTitle: "Online Booking & Ticketing System in Ethiopia",
    summary:
      "Seat, trip, appointment and room booking with availability, mobile payments and digital tickets.",
    intro: [
      "Customers expect to book on their phone and pay without queuing. MTX's booking platform handles inventory, pricing, payment and confirmation in one flow — and gives operators a live view of capacity.",
      "The same engine powers bus seat booking, appointments and reservations, with language switching and partner portals for agents.",
    ],
    modules: [
      "Route, schedule & capacity management",
      "Seat or slot selection",
      "Mobile-money & card payments",
      "Digital tickets & SMS confirmation",
      "Agent & partner portal",
      "Cancellations & refunds",
      "Operator dashboards",
      "Multi-language interface",
    ],
    audience: ["Bus & transport operators", "Hotels & resorts", "Event organisers", "Clinics & service businesses"],
    caseStudy: "nur-bus",
    relatedServices: ["web-application-development", "mobile-app-development", "system-integration"],
    faqs: [
      {
        q: "Can customers pay with Telebirr?",
        a: "Yes. Telebirr and other payment methods can be integrated, with automatic confirmation and reconciliation.",
      },
    ],
  },
  {
    slug: "fleet-management-system",
    name: "Fleet & dispatch management system",
    shortName: "Fleet & dispatch",
    sector: "Logistics",
    seoTitle: "Fleet Management & Dispatch Software in Ethiopia",
    summary:
      "Vehicle tracking, trip dispatch, driver management, fuel and maintenance records for logistics and transport operators.",
    intro: [
      "Fleet costs hide in fuel, idle time and missed maintenance. MTX's fleet and dispatch system gives operators a live view of vehicles, trips and drivers — and the records needed to cut those costs.",
      "Dispatchers assign trips in seconds, drivers receive them on their phones, and managers see utilisation and cost per kilometre.",
    ],
    modules: [
      "Vehicle register & documents",
      "Trip planning & dispatch",
      "Driver app & assignments",
      "GPS tracking integration",
      "Fuel management",
      "Maintenance schedules",
      "Cost per trip & per km reporting",
      "Alerts for expiring documents",
    ],
    audience: ["Logistics & freight companies", "Bus operators", "Distribution fleets", "Organisations with large vehicle pools"],
    relatedServices: ["custom-software-development", "mobile-app-development", "system-integration"],
    faqs: [
      {
        q: "Can the system connect to our existing GPS trackers?",
        a: "In most cases, yes. We integrate with the tracking providers' data feeds so locations appear alongside trips and drivers.",
      },
    ],
  },
  {
    slug: "document-workflow-system",
    name: "Document management & approval workflow",
    shortName: "Document & workflow",
    sector: "Operations",
    seoTitle: "Document Management & Approval Workflow System in Ethiopia",
    summary:
      "Digital documents, routing and multi-level approvals that replace paper files and signature chases.",
    intro: [
      "Paper approvals stall in inboxes and get lost between offices. MTX's workflow system routes requests and documents to the right approvers automatically, with deadlines, reminders and a permanent record of every decision.",
      "Letters, purchase requests, contracts and HR forms all follow configurable workflows — no developer needed to change an approval chain.",
    ],
    modules: [
      "Central document repository",
      "Configurable approval workflows",
      "Multi-level & parallel approvals",
      "Incoming & outgoing letter registry",
      "Reminders & escalations",
      "Version history",
      "Search & retention rules",
      "Full audit trail",
    ],
    audience: ["Government & public institutions", "Banks & insurers", "NGOs", "Any organisation with paper-based approvals"],
    relatedServices: ["custom-software-development", "ai-solutions", "digital-transformation-consulting"],
    faqs: [
      {
        q: "Can we change approval chains ourselves?",
        a: "Yes. Workflows are configured through an admin screen, so you can add steps, change approvers or set deadlines without new development.",
      },
    ],
  },
  {
    slug: "case-management-system",
    name: "Case management & rights protection system",
    shortName: "Case management",
    sector: "Civil society",
    seoTitle: "Case Management System for NGOs & Civil Society in Ethiopia",
    summary:
      "Beneficiary registration, case intake and tracking, partner and donor reporting — behind a public advocacy and awareness site.",
    intro: [
      "NGOs and civil-society organisations need to track every beneficiary and case confidentially while reporting outcomes to donors. MTX builds case management systems that do both.",
      "A public website handles awareness and registration, while caseworkers manage intake, referrals and follow-up behind strict access controls.",
    ],
    modules: [
      "Beneficiary registration",
      "Case intake & assessment",
      "Case assignment & follow-up",
      "Referrals to partner organisations",
      "Confidential records & access control",
      "Donor & partner reporting",
      "Public advocacy website",
      "Bilingual interface",
    ],
    audience: ["NGOs & CSOs", "Rights protection organisations", "Humanitarian programmes", "Community-based organisations"],
    caseStudy: "mrpo",
    relatedServices: ["web-application-development", "custom-software-development", "data-analytics"],
    faqs: [
      {
        q: "How do you protect sensitive beneficiary data?",
        a: "Records are protected by role-based access, encryption and audit logs, so only authorised caseworkers can view case details.",
      },
    ],
  },
];

export function getPlatform(slug: string) {
  return platforms.find((platform) => platform.slug === slug);
}

export function requirePlatform(slug: string) {
  const platform = getPlatform(slug);
  if (!platform) throw new Error(`Unknown platform: ${slug}`);
  return platform;
}
