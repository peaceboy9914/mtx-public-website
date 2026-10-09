/**
 * The systems MTX builds and operates. Single source for the home page index,
 * the Platforms page, the Work page and the footer.
 */
export type Platform = {
  id: string;
  name: string;
  shortName: string;
  sector: string;
  summary: string;
  capabilities: string[];
  /** Slug of a work project whose screenshot represents this platform. */
  caseStudy?: string;
};

export const platforms: Platform[] = [
  {
    id: "finance",
    name: "Multi-company finance system",
    shortName: "Financial systems",
    sector: "Finance",
    summary:
      "General ledger, receivables, loan portfolio and ETB cash position across multiple companies, with a signed audit trail on every posting.",
    capabilities: ["Multi-company consolidation", "Ledgers & loan books", "ETB reporting with month-end close", "Signed audit trail on every posting"],
  },
  {
    id: "healthcare",
    name: "Hospital information systems",
    shortName: "Healthcare",
    sector: "Healthcare",
    summary:
      "Triage queues, bed occupancy, lab turnaround, pharmacy stock and patient records across departments — plus the public-facing booking site patients actually use.",
    capabilities: ["Patient records", "Triage queue & bed occupancy", "Lab orders & pharmacy stock", "Appointment booking"],
    caseStudy: "grand-valley-hospital",
  },
  {
    id: "school-erp",
    name: "School ERP",
    shortName: "School ERP",
    sector: "Education",
    summary:
      "A full academic and finance platform with separate super admin, academic admin, finance admin, teacher and parent roles.",
    capabilities: ["Enrolment, grade books & timetables", "Fee collection in ETB", "Parent & teacher portals", "Role-based access"],
    caseStudy: "school-erp",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & operations ERP",
    shortName: "Manufacturing ERP",
    sector: "Manufacturing",
    summary: "Production orders, bill of materials, warehouse movement, integration health and exception review.",
    capabilities: ["Production orders", "Bill of materials", "Warehouse movement", "Machine downtime tracking"],
  },
  {
    id: "shareholder",
    name: "Shareholder management",
    shortName: "Shareholder registries",
    sector: "Capital",
    summary: "Share registry, subscription tracking, dividend runs, transfers and AGM voting records.",
    capabilities: ["Share registries & capital calls", "Dividend runs & transfers", "AGM voting with a paper trail"],
    caseStudy: "nur-bus",
  },
  {
    id: "ecommerce",
    name: "Multi-vendor commerce",
    shortName: "Marketplaces",
    sector: "E-commerce",
    summary:
      "Retail, wholesale and neighbourhood-storefront shopping modes in one marketplace, with category browsing built for local sellers.",
    capabilities: ["Retail, Jimla wholesale & Gebeya storefronts", "Vendor payouts & live order tracking", "Wishlists & category browsing"],
    caseStudy: "grandbirr-market",
  },
  {
    id: "civil-society",
    name: "Case handling & rights protection",
    shortName: "Civil society",
    sector: "Civil society",
    summary:
      "A public advocacy and awareness site paired with migrant registration, case intake and partner or donor workflows behind the scenes.",
    capabilities: ["Migrant registration & case intake", "Partner & donor portals", "Bilingual public advocacy site"],
    caseStudy: "mrpo",
  },
];

export const alsoDelivered = [
  "HR & payroll with ETB tax tables",
  "Inventory & point of sale",
  "Microfinance loan origination",
  "Fleet and dispatch tracking",
  "Document & approval workflow",
];
