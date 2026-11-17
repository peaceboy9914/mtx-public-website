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
