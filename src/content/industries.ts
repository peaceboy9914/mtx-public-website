import type { Faq } from "./services";

/**
 * Industry pages. Every claim here must be backed by a case study in work.ts or a system in platforms.ts:
 * `work` lists the case studies shown on the page (and drives the work-page filter), so an industry only
 * exists here when MTX has delivered work in it.
 */
export type Industry = {
  slug: string;
  /** Short name for menus and filter chips. */
  name: string;
  /** Search-intent headline used for the page <title> and H1. */
  seoTitle: string;
  summary: string;
  intro: string[];
  /** What makes software for this sector in Ethiopia different; each answered by something we've built. */
  needs: { title: string; body: string }[];
  /** Slugs from content/platforms.ts. */
  systems: string[];
  /** Slugs from content/services.ts. */
  services: string[];
  /** Slugs from content/work.ts, strongest proof first. */
  work: string[];
  faqs: Faq[];
  /** ISO date this page was last reviewed; defaults to SITE_CONTENT_UPDATED. */
  updated?: string;
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    seoTitle: "Hospital & Healthcare Software in Ethiopia",
    summary:
      "Hospital ERP and hospital websites for Ethiopian hospitals and clinics: registration, a cashier that gates lab and pharmacy work, inpatient care and HMIS reports on the Ethiopian calendar.",
    intro: [
      "Ethiopian hospitals work with payment methods, calendars and reports that imported systems don't cover: Telebirr and CBE Birr at the cashier, HMIS reports by Ethiopian-calendar month, and staff who work in Amharic and Afaan Oromoo.",
      "MTX builds and owns MTX-Care, a hospital ERP in daily use at Grand Valley Primary Hospital in Jimma, and built the hospital's public website.",
    ],
    needs: [
      {
        title: "Nothing done before it's paid",
        body: "A lab order stays invisible to the lab until the cashier takes payment, and prescriptions are checked against pharmacy stock before the patient reaches the cashier.",
      },
      {
        title: "Reports on the Ethiopian calendar",
        body: "Revenue by payment method and cashier, and HMIS morbidity by ICD-10, counted by Ethiopian-calendar period.",
      },
      {
        title: "A medical dictionary that works offline",
        body: "Diagnoses use the CIEL dictionary, shipped with the software: doctors search by everyday names and reports still count by ICD-10.",
      },
      {
        title: "Pharmacy stock you can trust",
        body: "First-expiry-first-out dispensing of paid drugs, Model 19 receiving, bin cards and near-expiry tracking.",
      },
      {
        title: "Inpatient care and bed-day billing",
        body: "Wards and beds, admissions and transfers, deposits, medication administration records and discharge summaries.",
      },
      {
        title: "An audit trail for every record",
        body: "An append-only audit log and a record of who opened each clinical record.",
      },
    ],
    systems: ["hospital-management-system", "inventory-pos-system", "hr-payroll-system"],
    services: ["erp-development", "custom-software-development", "web-application-development"],
    work: ["mtx-care", "grand-valley-hospital"],
    faqs: [
      {
        q: "Is MTX-Care in use at a hospital today?",
        a: "Yes. Grand Valley Primary Hospital in Jimma runs registration, the cashier, lab, pharmacy and reporting on MTX-Care.",
      },
      {
        q: "Does it run on the hospital's own server?",
        a: "It installs on a hospital's own server or in the cloud. The medical dictionary ships with the software, so diagnosis search doesn't need the internet.",
      },
      {
        q: "Which languages and payment methods does it support?",
        a: "Amharic, Afaan Oromoo and English. The cashier takes cash, Telebirr, CBE Birr, M-Pesa and bank payments, including partial payments, and prints 80 mm receipts.",
      },
      {
        q: "Can you build just a hospital website?",
        a: "Yes. We built Grand Valley Primary Hospital's website, with a department directory, appointment booking and an emergency hotline on every screen.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education",
    seoTitle: "School Management Software in Ethiopia",
    summary:
      "School management systems and learning apps for Ethiopian schools: admissions, grade books, report cards, per-lesson attendance, timetables and fee collection in ETB.",
    intro: [
      "A school runs on many people who each need a different view: administrators, finance staff, teachers, parents and students. Ethiopian schools also plan on two calendars and collect fees in ETB.",
      "MTX built SchoolERP, the school management system in use at Terbiya International School, and Laziz, an Afaan Oromoo learning app for grades 1 to 8 on Google Play.",
    ],
    needs: [
      {
        title: "A role for everyone",
        body: "Super admin, academic admin, finance admin, teacher, parent and student, enforced in the app and in the database.",
      },
      {
        title: "Attendance taken per lesson",
        body: "Teachers scan a signed QR code at the classroom door, inside the school's location radius, which opens student attendance for that period.",
      },
      {
        title: "Ethiopian and Gregorian calendars",
        body: "Exact conversion between the two for holidays, exams and school events.",
      },
      {
        title: "Timetables without clashes",
        body: "Conflict detection stops a teacher being double-booked; teachers and parents see only their own schedules.",
      },
      {
        title: "Grades, report cards and fees",
        body: "Score entry, GPA and class rank, printable report cards, bulk invoicing in ETB and payment verification.",
      },
      {
        title: "Learning in the student's language",
        body: "Books, grade 1–8 textbooks and quizzes in Afaan Oromoo, published from an admin area.",
      },
    ],
    systems: ["school-management-system", "hr-payroll-system"],
    services: ["web-application-development", "mobile-app-development", "custom-software-development"],
    work: ["school-erp", "laziz"],
    faqs: [
      {
        q: "Which school uses your school management system?",
        a: "Terbiya International School runs on SchoolERP.",
      },
      {
        q: "Can parents see their child's grades and fees?",
        a: "Yes. Parents have their own role and see only their own children's schedules, grades and fee invoices.",
      },
      {
        q: "Can it be set up for our school's grading and fee structure?",
        a: "Yes. We scope the system with your academic and finance staff first, then configure grading, fee items and roles to match how the school already works.",
      },
      {
        q: "Do you build learning apps too?",
        a: "Yes. Laziz is an Afaan Oromoo learning app with books, textbooks and quizzes, published on Google Play.",
      },
    ],
  },
  {
    slug: "hospitality",
    name: "Restaurants & hospitality",
    seoTitle: "Restaurant Management Software in Ethiopia",
    summary:
      "Restaurant and coffee house systems that keep working when the internet drops: point of sale, waiter app, QR ordering, station screens, inventory, attendance and payroll.",
    intro: [
      "A restaurant can't stop serving because the connection drops. Orders have to reach the right station, the till has to balance at the end of the day, and staff pay depends on attendance.",
      "MTX built the system Nur Palace Restaurant runs on, and QuickGebeta, our own campus food delivery app.",
    ],
    needs: [
      {
        title: "Works when the internet doesn't",
        body: "A small server on the restaurant's own network serves every tablet and screen, and syncs with the cloud when a connection is available.",
      },
      {
        title: "Every item to the right station",
        body: "Kitchen, coffee bar and juice bar screens with prep timers, and a queue TV in the hall.",
      },
      {
        title: "Orders from the table",
        body: "Guests order by QR code and staff approve each order before it reaches the stations.",
      },
      {
        title: "A till that balances",
        body: "Cash and Chapa payments, cashier sessions with a cash count and a Z report; discounts and voids are approved and audited.",
      },
      {
        title: "Stock that follows sales",
        body: "Every sale deducts its ingredients through recipes, with low-stock alerts, receiving, waste and stocktake.",
      },
      {
        title: "Attendance and payroll",
        body: "A fingerprint device MTX built, shifts, editable deduction rules and a monthly payroll run with payslips.",
      },
    ],
    systems: ["inventory-pos-system", "hr-payroll-system", "booking-ticketing-system"],
    services: ["custom-software-development", "mobile-app-development", "system-integration"],
    work: ["nur-palace", "quickgebeta"],
    faqs: [
      {
        q: "What happens when the internet goes down?",
        a: "Service carries on. The POS, waiter app and station screens talk to a server inside the restaurant; only QR ordering, Chapa payments and SMS pause until the connection returns.",
      },
      {
        q: "Which restaurant uses it?",
        a: "Nur Palace Restaurant, a premium restaurant and coffee house.",
      },
      {
        q: "Which languages do menus support?",
        a: "Nur Palace's menus are in Amharic, Afaan Oromoo, English and Arabic.",
      },
      {
        q: "Can it handle delivery?",
        a: "A mobile app with customer, waiter and rider modes for delivery and pickup is in development for Nur Palace. QuickGebeta, our campus food delivery app, already has separate apps for students, restaurants and drivers.",
      },
    ],
  },
  {
    slug: "finance",
    name: "Finance & share companies",
    seoTitle: "Financial & Shareholder Management Software in Ethiopia",
    summary:
      "Finance systems for groups of companies and share registries for share companies: budgets, purchase requests, inter-company credit, shareholder records and verifiable certificates.",
    intro: [
      "A group of companies needs each company's books kept separately and the whole group visible to its owners. A share company needs a registry its shareholders can check without visiting the office.",
      "MTX built the multi-company finance system the Grand Valley group runs on, and the shareholder management system used by Nur Bus Transport.",
    ],
    needs: [
      {
        title: "Each company's books, one group view",
        body: "Each company sees its own income, expenses and budgets; the group's owners see all of them.",
      },
      {
        title: "Budgets that can't be overspent",
        body: "Coded budget lines with extra allocations and live remaining balances; overspending is blocked.",
      },
      {
        title: "Credit between sister companies",
        body: "One company requests credit from another, an approver decides, and repayments are tracked to completion.",
      },
      {
        title: "Roles your auditors recognise",
        body: "Super admin, finance manager, accountant and auditor roles, with an audit log of every change.",
      },
      {
        title: "Share certificates that can be checked",
        body: "Numbered PDF certificates generated from a template, each with a QR code that verifies it.",
      },
      {
        title: "Shareholders served online",
        body: "A portal and a Telegram mini app for holdings, certificates, dividends and announcements.",
      },
    ],
    systems: ["financial-management-system", "shareholder-management-system", "loan-management-system"],
    services: ["fintech-software-development", "erp-development", "system-integration"],
    work: ["grand-valley-finance", "nur-bus-shareholders"],
    faqs: [
      {
        q: "Who uses the multi-company finance system?",
        a: "The Grand Valley group, a group of sister companies, runs its finance on it.",
      },
      {
        q: "Who uses the shareholder management system?",
        a: "Nur Bus Transport. Shareholders request shares, receive numbered certificates and follow their holdings online or in Telegram.",
      },
      {
        q: "Can reports be exported for our accountants?",
        a: "Yes. Income versus expenses, category breakdowns and budget reports export to CSV, per company or across the group.",
      },
      {
        q: "Do you build loan or microfinance systems?",
        a: "We build loan management systems as a custom project. We don't have a live microfinance client to show yet, so we'll scope it with you from the start.",
      },
    ],
  },
  {
    slug: "transport",
    name: "Transport & logistics",
    seoTitle: "Transport Booking & Logistics Software in Ethiopia",
    summary:
      "Trip and seat booking with mobile payments, shareholder platforms for transport share companies, and courier management.",
    intro: [
      "Ethiopian transport operators sell seats online, often raise capital from many shareholders, and increasingly run deliveries as well.",
      "MTX built Nur Bus's booking site and its shareholder management system, and has built a courier management system.",
    ],
    needs: [
      {
        title: "Seats sold online",
        body: "Trip and seat booking with mobile payments and digital tickets, in two languages.",
      },
      {
        title: "Shareholders without the queue",
        body: "Share purchase requests, numbered certificates with QR verification and a shareholder portal.",
      },
      {
        title: "Inside the apps people already use",
        body: "Shareholders can sign in and follow their holdings through a Telegram mini app.",
      },
    ],
    systems: ["booking-ticketing-system", "shareholder-management-system", "fleet-management-system"],
    services: ["web-application-development", "mobile-app-development", "system-integration"],
    work: ["nur-bus", "nur-bus-shareholders"],
    faqs: [
      {
        q: "Which transport company uses your systems?",
        a: "Nur Bus Transport: passengers book trips on its website, and shareholders use the shareholder management system.",
      },
      {
        q: "Can passengers pay with mobile money?",
        a: "Yes. Nur Bus booking takes mobile payments and issues digital tickets.",
      },
      {
        q: "Do you build fleet or courier systems?",
        a: "Yes. We have built a courier management system, and we build fleet management as a custom project scoped with your operations team.",
      },
    ],
  },
  {
    slug: "retail",
    name: "Retail & e-commerce",
    seoTitle: "E-commerce & Marketplace App Development in Ethiopia",
    summary:
      "Multi-vendor marketplace apps, campus delivery and point-of-sale systems for Ethiopian retailers and sellers.",
    intro: [
      "Ethiopian shoppers buy on their phones, and many sellers are small shops or wholesalers who need their own storefront without building one.",
      "MTX built the GrandBirr Market app and QuickGebeta, our own campus food delivery and student marketplace.",
    ],
    needs: [
      {
        title: "Many sellers, one app",
        body: "Retail, wholesale and neighbourhood storefronts with category browsing, wishlists and live orders.",
      },
      {
        title: "Payments people already use",
        body: "CBE and Telebirr payments with proof of payment that the seller approves.",
      },
      {
        title: "An app for every side",
        body: "Separate apps for customers, sellers or restaurants, and delivery drivers.",
      },
      {
        title: "Stock and sales in one place",
        body: "Point of sale with inventory that updates as items sell.",
      },
    ],
    systems: ["multi-vendor-marketplace", "inventory-pos-system"],
    services: ["mobile-app-development", "web-application-development", "ui-ux-design"],
    work: ["grandbirr-market", "quickgebeta"],
    faqs: [
      {
        q: "Have you built a marketplace app?",
        a: "Yes. GrandBirr Market is a multi-vendor shopping app with retail, wholesale and neighbourhood storefronts.",
      },
      {
        q: "Can marketplaces run inside Telegram?",
        a: "Yes. QuickGebeta's student app runs inside Telegram, with separate apps for restaurants and delivery drivers.",
      },
      {
        q: "Do you publish to Google Play and the App Store?",
        a: "Yes. We build Android and iOS apps and handle publishing.",
      },
    ],
  },
  {
    slug: "ngos",
    name: "NGOs & foundations",
    seoTitle: "Website & Software Development for NGOs in Ethiopia",
    summary:
      "Multilingual websites and case registration for NGOs and foundations: support requests, partnerships, reports and publishing in the languages your community reads.",
    intro: [
      "NGOs and foundations need to reach people in several languages, take in cases or requests securely, and show donors and partners what they do.",
      "MTX built the website and migrant support registration for MRPO, and the four-language research website of the Iqra Islamic Research Foundation.",
    ],
    needs: [
      {
        title: "Every page in your community's languages",
        body: "English, Amharic and Afaan Oromoo for MRPO; English, Arabic, Amharic and Afaan Oromoo for Iqra.",
      },
      {
        title: "Case registration kept separate",
        body: "A guided support form that stores requests in their own database behind an API.",
      },
      {
        title: "Partners and donors",
        body: "Partnership requests, programme pages, progress and downloadable reports.",
      },
      {
        title: "Your staff publish",
        body: "News, stories, articles and resources published from an admin area, with no developer needed.",
      },
    ],
    systems: ["case-management-system", "document-workflow-system"],
    services: ["web-application-development", "ui-ux-design", "custom-software-development"],
    work: ["mrpo", "iqra-foundation"],
    faqs: [
      {
        q: "Which NGOs have you worked with?",
        a: "The Migrant Rights Protection Organization (MRPO) and the Iqra Islamic Research Foundation.",
      },
      {
        q: "Can the site be in Amharic and Afaan Oromoo?",
        a: "Yes. MRPO's site is in English, Amharic and Afaan Oromoo, switchable from any page.",
      },
      {
        q: "Can our staff update the site themselves?",
        a: "Yes. Both sites have an admin area for news, stories, articles and resources.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

/** Industries a case study belongs to (a project can sit in more than one). */
export function industriesForProject(slug: string) {
  return industries.filter((industry) => industry.work.includes(slug));
}
