import { platforms } from "@/content/platforms";
import { services } from "@/content/services";
import { companyStats, formattedAddress, siteConfig } from "@/content/site";
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
    "## Company",
    `- [About](${url}/about)`,
    `- [Contact](${url}/contact)`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
