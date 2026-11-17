import { publishedPosts } from "@/content/insights";
import { platforms } from "@/content/platforms";
import { services } from "@/content/services";
import { companyFacts, companyStats, formattedAddress, googleBusiness, openingHoursLabel, siteConfig } from "@/content/site";
import { workProjects } from "@/content/work";

export const dynamic = "force-static";

/** llms.txt (https://llmstxt.org): a plain-text site summary for AI search engines and assistants. */
export function GET() {
  const url = siteConfig.url;
  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `${siteConfig.legalName} is a software development company based at ${formattedAddress}. ` +
      `Contact: ${siteConfig.email}, ${siteConfig.phone}. ` +
      `Open ${openingHoursLabel.map((row) => `${row.label} ${row.hours}`).join(", ")} (Addis Ababa time). ` +
      `Rated ${googleBusiness.rating.value} on Google from ${googleBusiness.rating.count} reviews (${googleBusiness.profileUrl}). ` +
      `Team of ${companyFacts.teamSize}. ` +
      companyStats.map((stat) => `${stat.value} ${stat.label.toLowerCase()}`).join(", ") +
      ".",
    "",
    "## Services",
    ...services.map((service) => `- [${service.name}](${url}/services/${service.slug}): ${service.summary}`),
    "",
    "## Systems",
    ...platforms.map((platform) => `- [${platform.name}](${url}/platforms/${platform.slug}): ${platform.summary}`),
    "",
    "## Case studies",
    ...workProjects.map((project) => `- [${project.name}](${url}/work/${project.slug}): ${project.cardSummary}`),
    "",
    ...(publishedPosts.length
      ? ["## Insights", ...publishedPosts.map((post) => `- [${post.title}](${url}/insights/${post.slug}): ${post.description}`), ""]
      : []),
    "## Company",
    `- [Company facts](${url}/facts): verified facts about the company, kept in sync with the site`,
    `- [About](${url}/about)`,
    `- [Contact](${url}/contact)`,
    "",
    "## Optional",
    `- [Full site content](${url}/llms-full.txt): every service, system, FAQ and case study in one file`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
