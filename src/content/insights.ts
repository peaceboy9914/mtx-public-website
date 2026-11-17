/**
 * Insights: articles written by the MTX team. A post is public only when `draft` is false.
 * Run with SHOW_DRAFTS=1 to preview drafts locally (they are never listed in the sitemap or RSS feed then either,
 * unless SHOW_DRAFTS is also set at build time — don't set it in production).
 */
export type InsightSection = { heading?: string; paragraphs: string[]; list?: string[] };

export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date of first publication. */
  published: string;
  /** ISO date of the last meaningful edit. */
  updated?: string;
  /** "founder" credits Mahdi Nurazaman (with photo and Person markup); "team" credits MTX. */
  author: "founder" | "team";
  tags: string[];
  sections: InsightSection[];
  /** Case-study slugs from work.ts shown under the article. */
  relatedWork?: string[];
  draft: boolean;
};

const posts: InsightPost[] = [
  {
    slug: "offline-first-restaurant-software",
    title: "Restaurant software that keeps working when the internet drops",
    description:
      "How we designed Nur Palace's restaurant system around a server inside the restaurant, so orders, kitchen screens and the till keep running without a connection.",
    published: "2026-11-17",
    author: "founder",
    tags: ["Offline-first", "Restaurants", "Architecture"],
    relatedWork: ["nur-palace"],
    draft: true,
    sections: [
      {
        paragraphs: [
          "When we scoped the system for Nur Palace Restaurant, one requirement came before every feature: the restaurant cannot stop serving because the internet goes down. A lunch rush doesn't wait for the connection to come back.",
          "So we didn't start from a cloud app with an offline mode bolted on. We started from the restaurant floor.",
        ],
      },
      {
        heading: "A server inside the restaurant",
        paragraphs: [
          "The core of the system is a hub: a small PC on the restaurant's own network. Every tablet, the waiters' phones, the kitchen, coffee and juice screens and the queue TV talk to that hub over the local Wi-Fi, never directly to the internet. For that branch, the hub is the source of truth.",
          "A second copy of the same backend runs in the cloud. It handles the parts that genuinely need the internet: QR ordering from guests' phones, online payments through Chapa, SMS, and remote access to the admin. The hub and the cloud keep each other up to date through a queue of changes that is replayed whenever the connection is there.",
        ],
      },
      {
        heading: "What happens when the connection drops",
        paragraphs: ["Inside the restaurant, almost nothing changes:"],
        list: [
          "Waiters keep taking orders and the POS keeps sending them to the right station screen.",
          "The till keeps taking cash, and staff keep clocking in on the fingerprint device.",
          "QR ordering, Chapa payments and SMS pause until the connection returns, and the apps say so instead of failing silently.",
          "When the internet comes back, everything recorded in the meantime syncs on its own.",
        ],
      },
      {
        heading: "Small decisions that make offline work",
        paragraphs: [
          "Offline-first is mostly a set of unglamorous rules applied everywhere. Every record gets its ID from the device that creates it, so a tablet can create an order without asking a server for a number. Money is stored as whole santim, never as decimals, so totals add up the same on every device. Nothing is deleted outright; voids, discounts and refunds are recorded with who did them, which also gives the owner a clean audit trail.",
          "The delivery plan has a hard test for it, too: unplug the restaurant's internet for 30 minutes during a working session, and nothing may be lost when it comes back.",
        ],
      },
      {
        heading: "When this approach is worth it",
        paragraphs: [
          "A hub costs a little more up front: the restaurant buys a mini PC and a UPS, and someone has to look after it. For a business where every minute of downtime is lost sales, that trade is easy. For a back-office tool used a few times a day, a plain cloud app is usually enough.",
          "If you run a restaurant, café or any business where the counter can't stop, that's the question to ask any software vendor: what exactly happens when the internet goes down?",
        ],
      },
    ],
  },
  {
    slug: "telebirr-cbe-birr-payments-in-software",
    title: "Taking Telebirr and CBE Birr payments in your software: three approaches",
    description:
      "Your customers are more likely to pay with Telebirr or CBE Birr than with a card. Here are the three ways we build mobile money into systems, and what each one costs you in effort and risk.",
    published: "2026-11-17",
    author: "founder",
    tags: ["Payments", "Telebirr", "CBE Birr"],
    relatedWork: ["mtx-care", "quickgebeta", "nur-palace"],
    draft: true,
    sections: [
      {
        paragraphs: [
          "Almost every system we build has to take money, and in Ethiopia that mostly means Telebirr and CBE Birr, with cash still everywhere. There's no single right way to do it. Across a hospital, a campus food platform and a restaurant, we've used three different approaches, and each one fits a different situation.",
        ],
      },
      {
        heading: "1. Record the payment at the desk",
        paragraphs: [
          "The customer pays to your Telebirr or CBE Birr account in front of the cashier, and the cashier records it in the system: the method, the amount and the transaction reference from the confirmation message. This is how the cashier desk works in MTX-Care, which takes cash, Telebirr, CBE Birr, M-Pesa and bank transfers, and how Nur Palace records CBE Birr and Telebirr at the till.",
          "Two small rules make it reliable. The system refuses a transaction reference that has already been used for the same method, so one payment can't be recorded twice. And every cashier opens and closes a shift with a cash count, so the money in the drawer and the money in the system are checked against each other every day.",
        ],
        list: [
          "Good for: hospitals, restaurants, shops: anywhere the customer is standing in front of you.",
          "Needs: no integration with Ethio Telecom or the bank, and it works with no internet.",
          "Watch out for: it relies on the cashier checking the confirmation message, so reconcile against your account statement.",
        ],
      },
      {
        heading: "2. Let the customer upload proof",
        paragraphs: [
          "When the customer isn't in front of you, they can transfer the money and upload a screenshot of the confirmation. On QuickGebeta, our campus food platform, students pay a restaurant by CBE or Telebirr and attach the screenshot to the order. The restaurant checks it and accepts or rejects the order before cooking. Marketplace listings work the same way: they go live only after the listing payment is checked.",
          "It works with nothing more than a normal merchant account, which is why it's a good way to launch. The weakness is obvious: a screenshot can be edited. Whoever approves the order should compare it with the payment that actually arrived in their account, not just look at the picture.",
        ],
        list: [
          "Good for: new platforms, small merchants, and anything sold remotely in low volume.",
          "Needs: a file upload and an approval step in the system.",
          "Watch out for: fake screenshots, so check against the real account before accepting.",
        ],
      },
      {
        heading: "3. Use a payment gateway",
        paragraphs: [
          "A gateway such as Chapa gives the customer one checkout where they choose Telebirr, CBE Birr, M-Pesa or a card, and tells your system when the payment succeeds. Nur Palace uses Chapa at the till: the POS shows a QR code for the amount due, and the order turns paid by itself when the customer has paid. Tebekaye, our legal marketplace, takes its platform fee the same way.",
          "The part people get wrong is trusting the notification. When Chapa calls our server to say a payment succeeded, we check its signature, and then we still ask Chapa directly to confirm the payment before marking anything paid: the status, the exact amount, the currency, our own transaction reference, and whether it was a test or live payment. A test payment can never pay a real order. The same notification arriving twice still counts once.",
        ],
        list: [
          "Good for: online checkout, delivery, and anything with volume where manual checking doesn't scale.",
          "Needs: a merchant account with the gateway, an internet connection at the moment of payment, and the gateway's fees.",
          "Watch out for: when the internet is down, have a fallback. Nur Palace's POS switches to cash or a manual reference.",
        ],
      },
      {
        heading: "Which one should you choose?",
        paragraphs: [
          "Many systems end up using more than one. A hospital cashier records payments at the desk and doesn't need a gateway at all. A restaurant uses a gateway for QR payments but keeps manual references for when the connection drops. A new online platform often starts with screenshots and adds a gateway once volume makes manual checking a burden.",
          "Whichever you choose, keep money as whole santim in the system, never as decimals, and keep an audit trail of who recorded or approved each payment. Those two habits prevent most of the reconciliation problems we see.",
        ],
      },
    ],
  },
  {
    slug: "choosing-a-school-management-system",
    title: "Choosing a school management system in Ethiopia: what to check before you buy",
    description:
      "A practical checklist from building SchoolERP, the system Terbiya International School runs on: roles, the Ethiopian calendar, fees in ETB, attendance and report cards.",
    published: "2026-11-17",
    author: "founder",
    tags: ["Education", "School ERP", "Buying guide"],
    relatedWork: ["school-erp"],
    draft: true,
    sections: [
      {
        paragraphs: [
          "Most school systems look the same in a demo: a dashboard, a student list, a grade book. The differences show up a term later, when the finance office, the teachers and the parents are all using it. These are the questions we'd ask any vendor, including ourselves, based on building SchoolERP for Terbiya International School.",
        ],
      },
      {
        heading: "Does each person see only what they should?",
        paragraphs: [
          "A school has very different users: the owner, the academic office, the finance office, teachers, parents and students. Ask the vendor to show you the system logged in as a teacher and as a parent. A teacher should see their own classes and timetable, a parent only their own children, and the finance office the money without editing grades.",
          "Then ask where that rule is enforced. Hiding a menu item isn't security. In SchoolERP, the app hides what a role can't use, and the database itself refuses data the user isn't allowed to see.",
        ],
      },
      {
        heading: "Does it understand the Ethiopian calendar?",
        paragraphs: [
          "Your academic year, holidays and exam dates live in the Ethiopian calendar; some reports and partners use the Gregorian one. The system should convert between the two exactly, including Pagume, and let you schedule events in either. Ask to see a holiday entered in the Ethiopian calendar and how it appears in the Gregorian view.",
        ],
      },
      {
        heading: "How does it handle fees?",
        paragraphs: [
          "Fees are where a school system earns its keep. Check that it can bill a whole class at once, that amounts are in ETB, and that it handles how parents actually pay. Many parents pay by bank transfer or mobile money and send proof, so the finance office needs a simple way to verify a payment and match it to an invoice.",
          "Ask what happens when a student is enrolled. Once a student is enrolled and billed, the system should stop anyone from quietly moving them back to \"applicant\" and losing the billing history.",
        ],
      },
      {
        heading: "Can you trust the attendance numbers?",
        paragraphs: [
          "Student attendance is only as good as the teacher taking it, and teacher attendance is often not tracked at all. In SchoolERP, every classroom door has a QR code. The teacher scans it at the start of the lesson, from inside the school's grounds, and that opens student attendance for that period. Late and missed lessons are recorded automatically, and the school sees each teacher's on-time record.",
          "You don't need this exact feature, but ask how the system knows a lesson actually happened.",
        ],
      },
      {
        heading: "What comes out at the end of the term?",
        paragraphs: [
          "Ask to see a real report card printed from the system, with your grading scale, GPA and class rank. Ask how a timetable clash is caught before the term starts, not after. And ask whether parents can follow their children's progress from a phone, because that's what most parents will use.",
        ],
      },
      {
        heading: "Questions to ask any vendor",
        paragraphs: ["Before you sign, get clear answers to these:"],
        list: [
          "Can you show me the system as a teacher, a parent and the finance office?",
          "Where are role permissions enforced: in the app only, or in the database too?",
          "Does it convert between the Ethiopian and Gregorian calendars exactly?",
          "How does the finance office verify a fee paid by transfer or mobile money?",
          "How do you know a lesson actually took place?",
          "Can I export all of our data if we leave?",
          "Who supports us during exam week, and how fast do they answer?",
        ],
      },
    ],
  },
  {
    slug: "ethiopian-payroll-rules-in-software",
    title: "Ethiopian payroll in software: building rules your accountant can trust",
    description:
      "Income tax brackets, pension and the four overtime types change over time. How we designed the Nur Palace payroll so a change in the law is an edit, not a software update.",
    published: "2026-11-17",
    author: "founder",
    tags: ["Payroll", "HR", "Compliance"],
    relatedWork: ["nur-palace"],
    draft: true,
    sections: [
      {
        paragraphs: [
          "Payroll looks like arithmetic: salary, minus tax, minus pension. In practice it's where small businesses get hurt, because the rules change, people join and leave mid-month, and a mistake found in March has to be fixed without rewriting January. When we built payroll into the Nur Palace restaurant system, we started from one principle: the software should never decide what the law says.",
        ],
      },
      {
        heading: "Rates are data, not code",
        paragraphs: [
          "Income tax brackets, the employee and employer pension rates, and the overtime rates are all stored as rules that the owner can edit, each with the date it takes effect. When a rate changes, someone adds a new version starting from that date, and the old one stays for the months it applied to. Nothing is hard-coded, and nobody needs a developer to follow a change in the law.",
          "Because a wrong rate is expensive, a new rule is marked \"the accountant must confirm\" until the accountant does. The system won't close a month that uses an unconfirmed rule.",
        ],
      },
      {
        heading: "Tax brackets that can't leave gaps",
        paragraphs: [
          "Income tax works by brackets, and a small mistake in a bracket table can mean someone pays no tax at all. So the system checks every new bracket against its neighbours: each one has to start exactly where the one below ends. It also picks the bracket by where the income starts, so even a badly entered table never silently produces zero tax.",
        ],
      },
      {
        heading: "Overtime that someone approved",
        paragraphs: [
          "Labour Proclamation No. 1156/2019 sets different overtime rates for normal days, nights, weekly rest days and public holidays. The payroll keeps those as four separate rules, and public holidays as an editable list, because the holiday dates change every year.",
          "Overtime also has to be agreed, not just recorded. The fingerprint device records when people actually leave; a manager then approves or rejects each overtime entry, and only approved overtime is paid.",
        ],
      },
      {
        heading: "A month you can close",
        paragraphs: [
          "Each month runs as a draft you can recalculate as often as you like, then a review, then a close that freezes it. After that, a mistake is fixed with a correction in a later month, recorded with the reason and who made it. Closed months never change, which is exactly what an auditor wants to see.",
          "The system refuses to send a month for review if anyone's net pay would be negative, if overtime is still waiting for approval, or if the attendance deductions for the month aren't closed yet.",
        ],
      },
      {
        heading: "The details that cause disputes",
        paragraphs: ["A few rules prevent most arguments on payday:"],
        list: [
          "Someone who joins or leaves mid-month is paid for the calendar days they were employed.",
          "Pension is calculated on basic salary, and the employer's share is shown separately, never taken from the employee's pay.",
          "Every amount is rounded once, to the santim, and totals are sums of those rounded amounts, so the payslip and the bank file always agree.",
          "Each employee gets a payslip in their own language, showing every line, and the accountant gets a file with every component.",
        ],
      },
      {
        heading: "If you're choosing a payroll system",
        paragraphs: [
          "Ask the vendor what happens on the day the tax brackets change, who confirms the new rates, and how a mistake in a closed month is corrected. If the answer to any of those is \"we'll update the software\", keep looking.",
        ],
      },
    ],
  },
];

const showDrafts = process.env.SHOW_DRAFTS === "1";

/** Public posts, newest first. */
export const publishedPosts = posts
  .filter((post) => showDrafts || !post.draft)
  .sort((a, b) => b.published.localeCompare(a.published));

export function getPost(slug: string) {
  return publishedPosts.find((post) => post.slug === slug);
}

export function readingMinutes(post: InsightPost) {
  const words = post.sections
    .flatMap((section) => [section.heading ?? "", ...section.paragraphs, ...(section.list ?? [])])
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
