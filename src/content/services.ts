export type Faq = { q: string; a: string };

export type ServiceCategory = "Build" | "Enterprise" | "Data & AI" | "Cloud & operations" | "Advisory";

export const serviceCategories: ServiceCategory[] = ["Build", "Enterprise", "Data & AI", "Cloud & operations", "Advisory"];

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  /** Search-intent headline used for the page <title> and H1. */
  seoTitle: string;
  summary: string;
  intro: string[];
  deliverables: { title: string; body: string }[];
  technologies: string[];
  /** Slugs from content/platforms.ts. */
  relatedSystems: string[];
  /** Slugs from content/work.ts. */
  relatedWork: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    name: "Custom software development",
    category: "Build",
    seoTitle: "Custom Software Development Company in Ethiopia",
    summary:
      "Bespoke business software designed around how your organisation actually works — scoped, built, deployed and supported by MTX engineers in Addis Ababa.",
    intro: [
      "Off-the-shelf software rarely fits Ethiopian institutions out of the box: ETB reporting, local fiscal calendars, Amharic and Afaan Oromoo users, Telebirr payments and patchy connectivity all need to be designed in, not patched on.",
      "MTX builds custom software end to end — from process mapping and data modelling through to production hosting and long-term support — so the system matches your operations instead of forcing your teams into workarounds.",
    ],
    deliverables: [
      { title: "Process discovery", body: "Workshops with the people who run the process today, mapped into a costed delivery plan." },
      { title: "Solution architecture", body: "Data model, integration contracts and a working vertical slice in your environment within weeks." },
      { title: "Full-stack engineering", body: "Web front ends, APIs, databases and background jobs built to one engineering standard." },
      { title: "Role-based access & audit trails", body: "Permissions and a complete change history built into the data model from day one." },
      { title: "Localisation", body: "Amharic and Afaan Oromoo interfaces, ETB formatting and Ethiopian calendar support." },
      { title: "Launch & support", body: "Production deployment, monitoring, training and an agreed support window after go-live." },
    ],
    technologies: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "REST & GraphQL APIs"],
    relatedSystems: ["financial-management-system", "document-workflow-system", "shareholder-management-system"],
    relatedWork: ["school-erp", "nur-bus"],
    faqs: [
      {
        q: "How much does custom software development cost in Ethiopia?",
        a: "It depends on scope, integrations and the number of user roles. Every engagement starts with a fixed-fee discovery phase that produces a costed delivery plan, and that fee is credited against the build if you go ahead.",
      },
      {
        q: "How long does a custom software project take?",
        a: "Discovery takes one to two weeks and a working vertical slice is usually running in your environment by week five. After that we ship in two-week increments that your team reviews, so you see progress continuously rather than at the end.",
      },
      {
        q: "Who owns the source code?",
        a: "You do. Source code, documentation and infrastructure access are handed over as part of the engagement, whether we continue to support the system or not.",
      },
    ],
  },
  {
    slug: "web-application-development",
    name: "Web application development",
    category: "Build",
    seoTitle: "Web Application Development in Ethiopia",
    summary:
      "Customer portals, booking platforms, dashboards and high-performance marketing sites — engineered to load fast on real Ethiopian mobile networks.",
    intro: [
      "Most of your users reach you on a phone over a mobile data connection. MTX builds web applications that stay fast and usable on those connections, with server rendering, small JavaScript bundles and images sized for the device.",
      "From public-facing sites that need to rank on Google to internal dashboards used all day by finance and operations teams, every build ships with analytics, SEO foundations and an admin your team can run without us.",
    ],
    deliverables: [
      { title: "Customer & partner portals", body: "Secure self-service portals with accounts, documents, payments and notifications." },
      { title: "Booking & reservation flows", body: "Seat, appointment and room booking with availability, payments and confirmations." },
      { title: "Admin dashboards", body: "Internal tools that give operations and finance teams one place to work." },
      { title: "SEO-first corporate sites", body: "Fast, structured, search-optimised sites with content your team can update." },
      { title: "Payment integration", body: "Telebirr, bank and card payment flows with reconciliation built in." },
      { title: "Performance engineering", body: "Core Web Vitals tuned for low-bandwidth, mobile-first audiences." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    relatedSystems: ["booking-ticketing-system", "multi-vendor-marketplace", "hospital-management-system"],
    relatedWork: ["grand-valley-hospital", "nur-bus", "qarooma-baha-oromiyaa", "mrpo"],
    faqs: [
      {
        q: "Do you build websites as well as web applications?",
        a: "Yes. We build corporate and institutional websites, but we approach them as engineered products — fast, accessible, structured for search engines and easy for your team to update.",
      },
      {
        q: "Can the site be in Amharic and Afaan Oromoo?",
        a: "Yes. Multi-language support is a standard part of our builds, including language switching, localised URLs and translated content management.",
      },
      {
        q: "Will my website rank on Google?",
        a: "Every site we build ships with technical SEO in place: fast loading, clean URLs, structured data, sitemaps and metadata on every page. Rankings also depend on content and reputation, which we can advise on.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile app development",
    category: "Build",
    seoTitle: "Mobile App Development Company in Ethiopia",
    summary:
      "Android and iOS apps for marketplaces, booking, fintech and consumer products — built offline-first and published to Google Play and the App Store.",
    intro: [
      "Mobile is the primary computer for most Ethiopians, and many of them are on entry-level Android devices with intermittent data. MTX designs apps that work offline, sync when the network returns and stay light on storage.",
      "We handle the whole lifecycle: product design, cross-platform engineering, store listings, staged releases and the analytics you need to improve the app after launch.",
    ],
    deliverables: [
      { title: "Cross-platform apps", body: "One React Native codebase shipped to Android and iOS." },
      { title: "Offline-first data", body: "Local storage, background sync and conflict handling for unreliable networks." },
      { title: "Marketplace & booking flows", body: "Catalogues, carts, multi-vendor checkout and reservations." },
      { title: "Payments & wallets", body: "Telebirr and other mobile-money integrations with clear receipts." },
      { title: "Store publishing", body: "Google Play and App Store listings, review handling and staged rollouts." },
      { title: "Analytics & crash reporting", body: "Usage data and crash reports wired in from the first release." },
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Android", "iOS", "Firebase"],
    relatedSystems: ["multi-vendor-marketplace", "booking-ticketing-system", "loan-management-system"],
    relatedWork: ["grandbirr-market", "ibsa-quraanaa"],
    faqs: [
      {
        q: "Do you build for both Android and iOS?",
        a: "Yes. We build cross-platform apps from a single codebase, which keeps cost and maintenance down while delivering native performance on both platforms.",
      },
      {
        q: "Can the app work without internet?",
        a: "Yes. Offline-first design is one of our specialities — the app stores data on the device and syncs automatically when a connection is available.",
      },
      {
        q: "Do you publish the app to Google Play for us?",
        a: "Yes. We prepare store listings, handle submission and review, and manage staged releases so updates reach users safely.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX & product design",
    category: "Build",
    seoTitle: "UI/UX & Product Design Services in Ethiopia",
    summary:
      "Research-led interface design for complex systems and consumer products — from user flows and prototypes to production-ready design systems.",
    intro: [
      "Enterprise software fails when the people using it every day find it slow or confusing. MTX designers work directly with clerks, nurses, teachers and finance officers to design screens that match how they actually work.",
      "Designs are delivered as clickable prototypes and a reusable design system, then built by the same team — so nothing is lost between design and engineering.",
    ],
    deliverables: [
      { title: "User research", body: "Interviews and workflow observation with the people who will use the system." },
      { title: "Information architecture", body: "Navigation, roles and data structures organised around real tasks." },
      { title: "Interactive prototypes", body: "Clickable prototypes tested with users before engineering begins." },
      { title: "Design systems", body: "Reusable components and tokens that keep every screen consistent." },
      { title: "Bilingual typography", body: "Layouts and type that work for Ge'ez and Latin scripts alike." },
      { title: "Accessibility", body: "Contrast, sizing and keyboard support built in from the start." },
    ],
    technologies: ["Figma", "Design systems", "Prototyping", "Usability testing", "Accessibility (WCAG)"],
    relatedSystems: ["school-management-system", "hospital-management-system"],
    relatedWork: ["school-erp", "grandbirr-market"],
    faqs: [
      {
        q: "Can you redesign an existing system without rebuilding it?",
        a: "Yes. We can audit and redesign an existing product's interface, then either hand over designs to your team or implement them ourselves.",
      },
      {
        q: "Do you design for Amharic text?",
        a: "Yes. We design layouts and type scales that handle Ge'ez script properly, including line length, spacing and font choice.",
      },
    ],
  },
  {
    slug: "erp-development",
    name: "ERP development & implementation",
    category: "Enterprise",
    seoTitle: "ERP Software Development & Implementation in Ethiopia",
    summary:
      "Enterprise resource planning built for Ethiopian organisations — finance, HR, inventory, procurement and operations in one auditable system.",
    intro: [
      "Many Ethiopian organisations run on disconnected spreadsheets, a standalone accounting package and paper approvals. An ERP brings those processes into one system with a single source of truth and a complete audit trail.",
      "MTX builds and implements ERP modules around your actual workflows — with ETB-native accounting, Ethiopian tax tables, local fiscal periods and bilingual interfaces — then migrates your data and trains your teams.",
    ],
    deliverables: [
      { title: "Finance & accounting", body: "General ledger, payables, receivables and multi-company consolidation in ETB." },
      { title: "HR & payroll", body: "Employee records, attendance, leave and payroll with Ethiopian tax and pension deductions." },
      { title: "Inventory & procurement", body: "Purchase requests, approvals, stock movement and supplier management." },
      { title: "Manufacturing & operations", body: "Production orders, bills of materials and machine downtime tracking." },
      { title: "Data migration", body: "Clean migration of balances, master data and history from existing systems." },
      { title: "Training & rollout", body: "Role-based training, phased go-live and post-launch support." },
    ],
    technologies: ["PostgreSQL", "Node.js", "TypeScript", "Next.js", "Role-based access control", "Audit logging"],
    relatedSystems: ["financial-management-system", "hr-payroll-system", "inventory-pos-system", "manufacturing-erp", "school-management-system"],
    relatedWork: ["school-erp"],
    faqs: [
      {
        q: "Should we buy an off-the-shelf ERP or build a custom one?",
        a: "It depends on how standard your processes are. We often recommend a modular approach: proven modules for common needs and custom components where your operations are genuinely different. Discovery gives you a clear, costed recommendation.",
      },
      {
        q: "Does your ERP support Ethiopian tax and payroll rules?",
        a: "Yes. Our finance and payroll modules are built around ETB, Ethiopian income tax tables, pension contributions and local fiscal periods.",
      },
      {
        q: "Can you migrate data from our current system?",
        a: "Yes. Data migration — including opening balances, master data and historical records — is planned and tested as part of every ERP implementation.",
      },
    ],
  },
  {
    slug: "fintech-software-development",
    name: "Fintech & financial software",
    category: "Enterprise",
    seoTitle: "Fintech & Financial Software Development in Ethiopia",
    summary:
      "Loan management, digital lending, shareholder registries and payment-integrated platforms for financial institutions, SACCOs and investment companies.",
    intro: [
      "Ethiopia's financial sector is digitising fast, and institutions need systems that are both modern and auditable. MTX builds financial software where every posting, approval and transfer is traceable.",
      "We work with microfinance institutions, savings and credit cooperatives, share companies and finance teams to replace spreadsheets and legacy tools with secure, well-structured platforms.",
    ],
    deliverables: [
      { title: "Loan origination & servicing", body: "Applications, credit checks, disbursement, repayment schedules and collections." },
      { title: "Shareholder registries", body: "Share subscriptions, transfers, dividend runs and AGM records." },
      { title: "Payment integration", body: "Telebirr and bank integrations with automated reconciliation." },
      { title: "Financial reporting", body: "Portfolio, cash-position and regulatory reports in ETB." },
      { title: "Maker-checker controls", body: "Dual approval on sensitive transactions with a full audit trail." },
      { title: "Customer self-service", body: "Portals and apps for balances, statements and applications." },
    ],
    technologies: ["PostgreSQL", "Node.js", "TypeScript", "Encryption at rest", "Audit logging", "Payment APIs"],
    relatedSystems: ["loan-management-system", "shareholder-management-system", "financial-management-system"],
    relatedWork: ["nur-bus"],
    faqs: [
      {
        q: "Do you build systems for microfinance institutions and SACCOs?",
        a: "Yes. We build loan management, savings and member management systems designed around how Ethiopian MFIs and cooperatives operate.",
      },
      {
        q: "How do you handle security for financial systems?",
        a: "Role-based access, maker-checker approvals, encrypted data, full audit trails and regular backups are standard. We also support deployment on your own infrastructure where required.",
      },
    ],
  },
  {
    slug: "system-integration",
    name: "System integration & APIs",
    category: "Enterprise",
    seoTitle: "System Integration & API Development in Ethiopia",
    summary:
      "Connect payments, SMS, banking, accounting and legacy systems so data moves automatically instead of being re-keyed by hand.",
    intro: [
      "Most organisations already own several systems that don't talk to each other. Staff end up exporting spreadsheets and re-entering the same data, which is slow and introduces errors.",
      "MTX designs integration layers and APIs that connect your systems reliably — with retries, monitoring and logs, so you know when something fails and why.",
    ],
    deliverables: [
      { title: "Payment gateways", body: "Telebirr, bank and card payment integrations with reconciliation." },
      { title: "SMS & notifications", body: "Transactional SMS, email and push notifications through local gateways." },
      { title: "Accounting sync", body: "Automatic posting of transactions into your finance system." },
      { title: "Legacy modernisation", body: "APIs around older systems so new tools can use their data safely." },
      { title: "Public & partner APIs", body: "Documented, versioned APIs for partners and mobile apps." },
      { title: "Monitoring & alerting", body: "Integration health dashboards and alerts on failures." },
    ],
    technologies: ["REST", "Webhooks", "Message queues", "Node.js", "OpenAPI", "Monitoring"],
    relatedSystems: ["financial-management-system", "booking-ticketing-system", "multi-vendor-marketplace"],
    relatedWork: ["nur-bus", "grandbirr-market"],
    faqs: [
      {
        q: "Can you integrate Telebirr payments into our system?",
        a: "Yes. Telebirr integration — including payment initiation, callbacks and reconciliation — is part of many of our builds.",
      },
      {
        q: "Can you connect our existing systems without replacing them?",
        a: "Yes. Often the fastest win is an integration layer that connects what you already have. We assess your current systems and recommend the least disruptive path.",
      },
    ],
  },
  {
    slug: "ai-solutions",
    name: "AI solutions",
    category: "Data & AI",
    seoTitle: "AI Solutions & Machine Learning Development in Ethiopia",
    summary:
      "Practical AI built into the systems you already run — document extraction, anomaly detection, forecasting and natural-language reporting.",
    intro: [
      "AI delivers value when it is attached to a real workflow: reading the invoices your clerks type in by hand, flagging the postings your auditors would question, or answering a manager's question about last month's numbers.",
      "MTX layers AI features into ERP, financial and operational systems, with human review where it matters and clear measures of whether the feature is actually saving time.",
    ],
    deliverables: [
      { title: "Document extraction", body: "Read invoices, receipts, claims and registration forms into structured data." },
      { title: "Anomaly detection", body: "Flag unusual financial postings, stock movements or transactions for review." },
      { title: "Forecasting", body: "Demand, cash-flow and inventory forecasts based on your own history." },
      { title: "Natural-language reporting", body: "Ask questions of your operational data in plain language." },
      { title: "AI assistants", body: "Internal assistants grounded in your policies, documents and data." },
      { title: "Workflow automation", body: "Automate routine classification, routing and approvals." },
    ],
    technologies: ["Large language models", "Python", "OCR", "Vector search", "Forecasting models", "Human-in-the-loop review"],
    relatedSystems: ["document-workflow-system", "financial-management-system", "inventory-pos-system"],
    relatedWork: [],
    faqs: [
      {
        q: "Can AI work with Amharic documents?",
        a: "Support for Amharic varies by model and task. We test candidate approaches on your real documents during discovery and only recommend what performs reliably.",
      },
      {
        q: "Is our data used to train public AI models?",
        a: "No. We design AI features so your data stays within your systems and agreed providers, with configurations that exclude it from model training.",
      },
    ],
  },
  {
    slug: "data-analytics",
    name: "Data engineering & business intelligence",
    category: "Data & AI",
    seoTitle: "Business Intelligence & Data Analytics Services in Ethiopia",
    summary:
      "Dashboards, data warehouses and reporting that give leadership one trusted view of finance, operations and customers.",
    intro: [
      "Leadership teams often wait days for reports assembled by hand from several systems — and then argue about whose numbers are right. A well-built data layer fixes both problems.",
      "MTX consolidates data from your operational systems into a reporting layer with agreed definitions, then builds dashboards for the decisions your teams make every week.",
    ],
    deliverables: [
      { title: "Data warehouse", body: "A central, structured store of data from your operational systems." },
      { title: "Executive dashboards", body: "Live KPIs for finance, operations, sales and service." },
      { title: "Automated reporting", body: "Scheduled board, donor and regulatory reports in ETB." },
      { title: "Data pipelines", body: "Reliable, monitored jobs that keep reporting data up to date." },
      { title: "Data quality", body: "Validation rules and reconciliation so numbers can be trusted." },
      { title: "Self-service analytics", body: "Tools and training for teams to explore data themselves." },
    ],
    technologies: ["PostgreSQL", "SQL", "Data pipelines", "Dashboards", "Python"],
    relatedSystems: ["financial-management-system", "hospital-management-system", "school-management-system"],
    relatedWork: ["school-erp"],
    faqs: [
      {
        q: "Can you build dashboards on top of our existing systems?",
        a: "Yes. We connect to your existing databases and applications, consolidate the data and build dashboards without requiring you to replace those systems.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud, DevOps & hosting",
    category: "Cloud & operations",
    seoTitle: "Cloud Hosting, DevOps & Infrastructure Services in Ethiopia",
    summary:
      "Secure hosting, automated deployments, backups and monitoring — in the cloud, in a local data centre or on your own servers.",
    intro: [
      "Where software runs matters as much as how it is built. Some institutions need data kept in-country; others need global availability. MTX designs infrastructure around your regulatory, budget and performance requirements.",
      "Every system we operate has automated deployments, tested backups, monitoring and a documented recovery plan — so an outage is an incident, not a crisis.",
    ],
    deliverables: [
      { title: "Infrastructure design", body: "Cloud, local data centre or on-premise architecture sized to your needs." },
      { title: "CI/CD pipelines", body: "Automated testing and deployment for every release." },
      { title: "Backups & recovery", body: "Scheduled, tested backups with a documented recovery procedure." },
      { title: "Monitoring & alerting", body: "Uptime, performance and error monitoring with on-call alerts." },
      { title: "Security hardening", body: "Access control, patching, TLS and security reviews." },
      { title: "Cost optimisation", body: "Right-sized infrastructure that keeps hosting costs predictable." },
    ],
    technologies: ["Docker", "Linux", "CI/CD", "Cloud platforms", "Nginx", "Monitoring"],
    relatedSystems: ["financial-management-system", "hospital-management-system"],
    relatedWork: ["grand-valley-hospital"],
    faqs: [
      {
        q: "Can our data be hosted in Ethiopia?",
        a: "Yes. We deploy to local data centres or your own servers where data residency is required, and to international cloud providers where it is not.",
      },
      {
        q: "Can you take over hosting for a system someone else built?",
        a: "Yes. We start with an infrastructure and security review, then migrate the system to a monitored, backed-up environment.",
      },
    ],
  },
  {
    slug: "quality-assurance-testing",
    name: "QA & software testing",
    category: "Cloud & operations",
    seoTitle: "Software Testing & Quality Assurance Services in Ethiopia",
    summary:
      "Automated and manual testing that catches defects before your users do — for systems we build and systems built by others.",
    intro: [
      "A failed payroll run or a broken booking flow costs far more than the testing that would have caught it. MTX builds testing into every sprint rather than leaving it for the week before launch.",
      "We also offer independent QA for systems built by other vendors, including acceptance testing before you sign off on a delivery.",
    ],
    deliverables: [
      { title: "Automated testing", body: "Unit, integration and end-to-end tests run on every change." },
      { title: "Manual & exploratory testing", body: "Structured test plans for complex, high-risk workflows." },
      { title: "Performance testing", body: "Load tests that confirm the system holds up at peak usage." },
      { title: "Acceptance testing", body: "Independent verification before you accept a vendor delivery." },
      { title: "Device testing", body: "Testing on the Android devices and browsers your users actually have." },
      { title: "Security testing", body: "Checks for common vulnerabilities before release." },
    ],
    technologies: ["Playwright", "Unit & integration tests", "Load testing", "CI pipelines"],
    relatedSystems: [],
    relatedWork: [],
    faqs: [
      {
        q: "Can you test software built by another company?",
        a: "Yes. Independent QA and user acceptance testing are available as a standalone service.",
      },
    ],
  },
  {
    slug: "support-maintenance",
    name: "Application support & maintenance",
    category: "Cloud & operations",
    seoTitle: "Software Maintenance & Application Support in Ethiopia",
    summary:
      "Ongoing support, security updates and continuous improvement for business-critical systems — with clear response times.",
    intro: [
      "Software is never finished. Regulations change, users ask for improvements and dependencies need security updates. MTX supports the systems we build — and can take over systems built by others.",
      "Support is delivered by engineers who know the codebase, under an agreement with defined response times and a quarterly roadmap review.",
    ],
    deliverables: [
      { title: "Help desk support", body: "A clear channel for issues with agreed response times." },
      { title: "Bug fixes", body: "Prioritised fixes delivered through tested releases." },
      { title: "Security updates", body: "Regular dependency, framework and server patching." },
      { title: "Enhancements", body: "Continuous improvements planned with your team each quarter." },
      { title: "System takeover", body: "Code review, documentation and stabilisation of inherited systems." },
      { title: "Clean handover", body: "Full documentation and transfer if you bring support in-house." },
    ],
    technologies: ["Service-level agreements", "Monitoring", "Release management", "Documentation"],
    relatedSystems: [],
    relatedWork: ["ibsa-quraanaa"],
    faqs: [
      {
        q: "Do you support software you didn't build?",
        a: "Yes. We start with a technical review of the code and infrastructure, stabilise anything urgent, then move to a regular support agreement.",
      },
    ],
  },
  {
    slug: "digital-transformation-consulting",
    name: "Digital transformation consulting",
    category: "Advisory",
    seoTitle: "Digital Transformation & IT Consulting in Ethiopia",
    summary:
      "Independent advice on what to digitise first, whether to build or buy, and how to roll change out across your organisation.",
    intro: [
      "Digital transformation is mostly about sequencing: which process to digitise first, which systems to keep, and how to bring staff along. Getting the order wrong is expensive.",
      "MTX consultants assess your current processes and systems, then produce a prioritised, costed roadmap — which we can deliver, or you can take to any vendor.",
    ],
    deliverables: [
      { title: "Process & systems audit", body: "A clear map of how work flows today and where it breaks." },
      { title: "Digital roadmap", body: "A prioritised, costed plan for the next 12–36 months." },
      { title: "Build vs. buy analysis", body: "Independent recommendations on software selection." },
      { title: "Vendor & tender support", body: "Requirements documents and evaluation of vendor proposals." },
      { title: "Change management", body: "Training plans and rollout strategies that staff actually adopt." },
      { title: "Technical due diligence", body: "Review of existing systems ahead of investment or acquisition." },
    ],
    technologies: ["Process mapping", "Requirements analysis", "Solution architecture", "Roadmapping"],
    relatedSystems: [],
    relatedWork: [],
    faqs: [
      {
        q: "Can you help us write requirements for a software tender?",
        a: "Yes. We prepare functional and technical requirements and can help evaluate vendor proposals objectively.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function requireService(slug: string) {
  const service = getService(slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
