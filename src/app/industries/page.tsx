import Link from "next/link";
import { CtaBand } from "@/components/ui/cta-band";
import { IconArrowRight } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { clients } from "@/content/clients";
import { industries } from "@/content/industries";
import { requireWorkProject } from "@/content/work";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

const title = "Industries We Build Software For in Ethiopia";
const description =
  "Hospital, school, restaurant, finance, transport, marketplace and NGO software built by MTX Digital Technologies, each in use at a named Ethiopian client.";

export const metadata = pageMetadata({ title, description, path: "/industries" });

/** The client running each case study, for the "in use at" line. */
function clientNames(workSlugs: string[]) {
  return workSlugs
    .map((slug) => clients.find((client) => client.slug === slug)?.name ?? requireWorkProject(slug).client?.name ?? requireWorkProject(slug).name)
    .filter((name) => name !== "MTX product" && name !== "Private client");
}

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
          itemListJsonLd(industries.map((industry) => ({ name: industry.seoTitle, path: `/industries/${industry.slug}` }))),
        ]}
      />

      <PageHero
        eyebrow={`Industries · ${industries.length} sectors`}
        title={
          <>
            Software for the sector <span className="accent text-brand">you work in.</span>
          </>
        }
        description="Every industry here has a system we've delivered and a client using it. Pick yours to see the work, the systems and the questions clients ask us."
      />

      <Section>
        <ul className="grid border-t border-l border-ink/15 md:grid-cols-2">
          {industries.map((industry, index) => {
            // "Nur Bus" and "Nur Bus Transport Company" are one client: keep the shorter name.
            const all = [...new Set(clientNames(industry.work))];
            const names = all.filter((name) => !all.some((other) => other !== name && name.startsWith(other)));
            return (
              <li key={industry.slug} className="border-r border-b border-ink/15">
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group reveal flex h-full flex-col p-7 transition-colors hover:bg-white sm:p-9"
                >
                  <span className="label text-brand">{String(index + 1).padStart(2, "0")}</span>
                  <h2 className="mt-5 text-[clamp(24px,2.6vw,32px)] font-semibold tracking-[-0.03em] group-hover:text-brand">
                    {industry.name}
                  </h2>
                  <p className="mt-3 flex-1 text-[15.5px] leading-relaxed text-ink/65">{industry.summary}</p>
                  {names.length ? (
                    <p className="mt-6 text-[13.5px] text-ink/50">In use at {names.join(" · ")}</p>
                  ) : null}
                  <span className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-medium">
                    {industry.name} software <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-10 max-w-2xl text-[15px] text-ink/60">
          We have also built for legal services, construction, publishing and faith organisations. See them all on{" "}
          <Link href="/work" className="underline underline-offset-4 hover:text-brand">
            our work page
          </Link>
          .
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
