import { publishedPosts } from "@/content/insights";
import { founder, siteConfig } from "@/content/site";

export const dynamic = "force-static";

const escape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS 2.0 feed of published Insights posts. */
export function GET() {
  const items = publishedPosts
    .map((post) => {
      const url = `${siteConfig.url}/insights/${post.slug}`;
      const author = post.author === "founder" ? founder.name : siteConfig.name;
      return [
        "    <item>",
        `      <title>${escape(post.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <description>${escape(post.description)}</description>`,
        `      <dc:creator>${escape(author)}</dc:creator>`,
        `      <pubDate>${new Date(`${post.published}T00:00:00Z`).toUTCString()}</pubDate>`,
        ...post.tags.map((tag) => `      <category>${escape(tag)}</category>`),
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const lastBuild = publishedPosts[0]?.updated ?? publishedPosts[0]?.published;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(`${siteConfig.name} — Insights`)}</title>
    <link>${siteConfig.url}/insights</link>
    <atom:link href="${siteConfig.url}/insights/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escape(`Notes from the ${siteConfig.name} team on building software for Ethiopian organisations.`)}</description>
    <language>en</language>
${lastBuild ? `    <lastBuildDate>${new Date(`${lastBuild}T00:00:00Z`).toUTCString()}</lastBuildDate>\n` : ""}${items}
  </channel>
</rss>
`;
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
