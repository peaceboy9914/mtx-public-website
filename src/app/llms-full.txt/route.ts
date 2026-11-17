import { clients } from "@/content/clients";
import { trackRecord } from "@/content/company";
import { platforms } from "@/content/platforms";
import { services } from "@/content/services";
import { companyFacts, companyStats, formattedAddress, founder, siteConfig } from "@/content/site";
import { isPublishable, workProjects } from "@/content/work";

export const dynamic = "force-static";

/** llms-full.txt: the complete site content as one Markdown file, for AI assistants that want more than llms.txt. */
export function GET() {
  const url = siteConfig.url;
  const lines: unknown[] = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## Company facts",
    `- Legal name: ${siteConfig.legalName}`,
    `- Address: ${formattedAddress}`,
    `- Contact: ${siteConfig.email}, ${siteConfig.phone}`,
    `- Team size: ${companyFacts.teamSize}`,
    ...companyStats.map((stat) => `- ${stat.label}: ${stat.value}`),
    `- Founder: ${founder.name} (${founder.linkedin})`,
    "",
    founder.bio.join(" "),
    "",
    "## Clients",
    ...clients.map((client) => `- ${client.name}` + (client.slug ? ` (${url}/work/${client.slug})` : "")),
    "",
    "## Track record by sector",
    ...trackRecord.map(
      (entry) =>
        `- ${entry.sector}: ${entry.work}` +
        (entry.projects.length ? ` (${entry.projects.map((project) => project.name).join(", ")})` : "")
    ),
    "",
    "## Services",
    ...services.flatMap((service) => [
      "",
      `### ${service.name}`,
      `URL: ${url}/services/${service.slug}`,
      "",
      service.summary,
      "",
      ...service.intro,
      "",
      "What's included:",
      ...service.deliverables.map((item) => `- ${item.title}: ${item.body}`),
      "",
      `Technologies: ${service.technologies.join(", ")}`,
      ...faqLines(service.faqs),
    ]),
    "",
    "## Systems",
    ...platforms.flatMap((platform) => [
      "",
      `### ${platform.name}`,
      `URL: ${url}/platforms/${platform.slug}`,
      "",
      platform.summary,
      "",
      ...platform.intro,
      "",
      `Modules: ${platform.modules.join("; ")}`,
      `Built for: ${platform.audience.join("; ")}`,
      ...faqLines(platform.faqs),
    ]),
    "",
    "## Case studies",
    ...workProjects.flatMap((project) => [
      "",
      `### ${project.caseTitle}`,
      `URL: ${url}/work/${project.slug}`,
      `Sector: ${project.sector}`,
      project.status && `Status: ${project.status}`,
      project.domain && `Live at: https://${project.domain}`,
      project.link && `${project.link.label}: ${project.link.href}`,
      project.screensNote && `Note: ${project.screensNote}`,
      project.year && `Year: ${project.year}`,
      project.duration && `Delivery: ${project.duration}`,
      "",
      project.caseSummary,
      project.challenge?.length && `\nChallenge: ${project.challenge.join(" ")}`,
      project.approach?.length && `\nApproach: ${project.approach.join(" ")}`,
      project.features?.length && `\nFeatures: ${project.features.map((f) => `${f.title} (${f.body})`).join("; ")}`,
      project.stack?.length ? `Stack: ${project.stack.join(", ")}` : `Highlights: ${project.tags.join(", ")}`,
      ...[...(project.stats ?? []), ...(project.results ?? [])].map((m) => `- ${m.label}: ${m.value}`),
      isPublishable(project.testimonial) &&
        `\n"${project.testimonial.quote}" (${project.testimonial.name}, ${project.testimonial.role}, ${project.testimonial.organization})`,
    ]),
    "",
  ];

  const body = lines.filter((line): line is string => typeof line === "string").join("\n");
  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}

function faqLines(faqs: { q: string; a: string }[]) {
  return faqs.length ? ["", "FAQ:", ...faqs.map((faq) => `- Q: ${faq.q}\n  A: ${faq.a}`)] : [];
}
