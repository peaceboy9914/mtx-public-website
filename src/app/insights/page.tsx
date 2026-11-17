import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { publishedPosts, readingMinutes } from "@/content/insights";
import { founder, siteConfig } from "@/content/site";
import { formatDate } from "@/lib/dates";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

const title = "Insights";
const description = `Notes from the ${siteConfig.name} team on building software for Ethiopian organisations: architecture, payments, offline-first design and lessons from live projects.`;

export const metadata = {
  ...pageMetadata({ title, description, path: "/insights" }),
  alternates: {
    canonical: `${siteConfig.url}/insights`,
    types: { "application/rss+xml": `${siteConfig.url}/insights/rss.xml` },
  },
};

export default function InsightsPage() {
  if (publishedPosts.length === 0) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
          ]),
          itemListJsonLd(publishedPosts.map((post) => ({ name: post.title, path: `/insights/${post.slug}` }))),
        ]}
      />
      <PageHero eyebrow="Insights" title="Notes from building software in Ethiopia" description={description} />
      <Section>
        <ul className="border-t border-ink/15">
          {publishedPosts.map((post) => (
            <li key={post.slug} className="reveal border-b border-ink/15">
              <Link href={`/insights/${post.slug}`} className="group grid gap-4 py-8 sm:grid-cols-12 sm:gap-8">
                <div className="label text-ink/50 sm:col-span-3">
                  <time dateTime={post.published}>{formatDate(post.published)}</time>
                  <div className="mt-1">{readingMinutes(post)} min read</div>
                </div>
                <div className="sm:col-span-9">
                  <h2 className="text-[clamp(22px,2.6vw,30px)] leading-tight font-semibold tracking-[-0.025em] transition-colors group-hover:text-brand">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink/65">{post.description}</p>
                  <p className="mt-3 text-[14px] text-ink/50">
                    By {post.author === "founder" ? founder.name : siteConfig.name}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[14px] text-ink/55">
          <a href="/insights/rss.xml" className="underline decoration-ink/25 underline-offset-4 hover:decoration-ink">
            RSS feed
          </a>
        </p>
      </Section>
    </>
  );
}
