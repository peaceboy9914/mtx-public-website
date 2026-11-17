import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { clients } from "@/content/clients";
import { trackRecord } from "@/content/company";
import {
  companyFacts,
  formattedAddress,
  founder,
  googleBusiness,
  openingHoursLabel,
  siteConfig,
  socialLinks,
} from "@/content/site";
import { workProjects } from "@/content/work";
import { formatDate, SITE_CONTENT_UPDATED } from "@/lib/dates";
import { breadcrumbJsonLd, factsPageJsonLd, pageMetadata } from "@/lib/seo";

const title = "Company facts";
const description = `Verified facts about ${siteConfig.legalName}: team, location, hours, clients, products, technology and payment integrations. Each fact links to its source on this site.`;

export const metadata = pageMetadata({ title, description, path: "/facts" });

/** Most-used technologies across the case studies, so this list follows the work rather than a wish list. */
function topStack(limit: number) {
  const counts = new Map<string, number>();
  for (const project of workProjects) for (const item of project.stack ?? []) counts.set(item, (counts.get(item) ?? 0) + 1);
  return [...counts.entries()]
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([name]) => name);
}

const ownProducts = workProjects.filter((project) => project.client?.name === "MTX product");
/** Client work that is running. Older case studies carry no status field; they are all live sites and apps. */
const liveClientWork = workProjects.filter(
  (project) => project.client?.name !== "MTX product" && (project.status ?? "Live") === "Live"
);

/** Payment methods MTX has integrated, and where. Kept as explicit facts, each tied to a case study. */
const payments = [
  { method: "Telebirr", where: ["mtx-care", "quickgebeta", "nur-palace"] },
  { method: "CBE Birr", where: ["mtx-care", "quickgebeta", "nur-palace"] },
  { method: "M-Pesa", where: ["mtx-care"] },
  { method: "Chapa (online checkout)", where: ["nur-palace", "tebekaye"] },
  { method: "Bank transfer", where: ["mtx-care"] },
];

/** Add the client after the project name only when it says something the name doesn't. */
const showClient = (name: string, client?: string) =>
  Boolean(client) && client !== "Private client" && !name.includes(client!) && !client!.includes(name);

const workName = (slug: string) => workProjects.find((project) => project.slug === slug)?.name ?? slug;

export default function FactsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: title, path: "/facts" },
          ]),
          factsPageJsonLd({ name: title, description, path: "/facts", dateModified: SITE_CONTENT_UPDATED }),
        ]}
      />
      <PageHero
        eyebrow="Company facts"
        title={`${siteConfig.name} at a glance`}
        description="The facts below are kept in sync with the rest of this site. Journalists, partners and AI assistants are welcome to quote them; please link to this page."
        updated={SITE_CONTENT_UPDATED}
      />

      <Section>
        <div className="grid max-w-4xl gap-14">
          <FactGroup heading="Company">
            <Fact label="Legal name">{siteConfig.legalName}</Fact>
            <Fact label="What we do">
              Custom software for Ethiopian organisations: hospital, school, restaurant, finance and shareholder systems,
              booking platforms, marketplaces and mobile apps, built and supported by our own team.
            </Fact>
            <Fact label="Headquarters">{formattedAddress}</Fact>
            <Fact label="Years in business">{companyFacts.yearsInBusiness}</Fact>
            <Fact label="Team size">{companyFacts.teamSize} people</Fact>
            <Fact label="Founder">
              <Link href="/about" className={linkClass}>
                {founder.name}
              </Link>
              , {founder.role}
            </Fact>
            <Fact label="Systems delivered">{companyFacts.systemsDelivered}</Fact>
          </FactGroup>

          <FactGroup heading="Contact and hours">
            <Fact label="Email">
              <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                {siteConfig.email}
              </a>
            </Fact>
            <Fact label="Phone">
              <a href={`tel:${siteConfig.phoneHref}`} className={linkClass}>
                {siteConfig.phone}
              </a>
            </Fact>
            <Fact label="Opening hours">
              {openingHoursLabel.map((row) => `${row.label} ${row.hours}`).join(" · ")} (Addis Ababa time)
            </Fact>
            <Fact label="Google rating">
              <a href={googleBusiness.profileUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {googleBusiness.rating.value} from {googleBusiness.rating.count} reviews
              </a>{" "}
              (as of {formatDate(googleBusiness.rating.asOf)})
            </Fact>
            <Fact label="LinkedIn">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                MTX Digital Technologies
              </a>
            </Fact>
          </FactGroup>

          <FactGroup heading="Clients and work">
            <Fact label="Clients">
              {clients.length} organisations, including{" "}
              {clients.slice(0, 5).map((client, index) => (
                <span key={client.name}>
                  {index > 0 ? ", " : ""}
                  {client.slug ? (
                    <Link href={`/work/${client.slug}`} className={linkClass}>
                      {client.name}
                    </Link>
                  ) : (
                    client.name
                  )}
                </span>
              ))}
              .
            </Fact>
            <Fact label="Sectors">{trackRecord.map((entry) => entry.sector).join(", ")}</Fact>
            <Fact label="Systems in use at clients">
              <ul className="space-y-1">
                {liveClientWork.map((project) => (
                  <li key={project.slug}>
                    <Link href={`/work/${project.slug}`} className={linkClass}>
                      {project.name}
                    </Link>
                    {showClient(project.name, project.client?.name) ? ` (${project.client?.name})` : ""}
                  </li>
                ))}
              </ul>
            </Fact>
            <Fact label="Our own products">
              <ul className="space-y-1">
                {ownProducts.map((project) => (
                  <li key={project.slug}>
                    <Link href={`/work/${project.slug}`} className={linkClass}>
                      {project.name}
                    </Link>
                    : {project.cardSummary}
                  </li>
                ))}
              </ul>
            </Fact>
          </FactGroup>

          <FactGroup heading="How we build">
            <Fact label="Languages delivered">Amharic, Afaan Oromoo, English and Arabic interfaces</Fact>
            <Fact label="Payments integrated">
              <ul className="space-y-1">
                {payments.map((payment) => (
                  <li key={payment.method}>
                    {payment.method}:{" "}
                    {payment.where.map((slug, index) => (
                      <span key={slug}>
                        {index > 0 ? ", " : ""}
                        <Link href={`/work/${slug}`} className={linkClass}>
                          {workName(slug)}
                        </Link>
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </Fact>
            <Fact label="Technology we use most">{topStack(10).join(", ")}</Fact>
            <Fact label="Calendars">Ethiopian and Gregorian, with exact conversion</Fact>
          </FactGroup>
        </div>
      </Section>
    </>
  );
}

const linkClass = "underline decoration-ink/25 underline-offset-4 hover:decoration-ink";

function FactGroup({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.025em]">{heading}</h2>
      <dl className="mt-6 border-t border-ink/15">{children}</dl>
    </section>
  );
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-2 border-b border-ink/15 py-4 sm:grid-cols-12 sm:gap-6">
      <dt className="label pt-0.5 text-ink/50 sm:col-span-4">{label}</dt>
      <dd className="text-[16px] leading-relaxed text-ink/85 sm:col-span-8">{children}</dd>
    </div>
  );
}
