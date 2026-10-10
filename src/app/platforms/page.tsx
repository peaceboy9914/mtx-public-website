import { CardGrid, SystemCard } from "@/components/catalog/catalog";
import { CtaBand } from "@/components/ui/cta-band";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { foundations } from "@/content/company";
import { platforms } from "@/content/platforms";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

const title = "Business Software Systems & ERP Solutions in Ethiopia";
const description =
  "Hospital management, school management, ERP, payroll, loan management, inventory & POS, booking, fleet, document workflow and shareholder management systems built by MTX Digital Technologies in Ethiopia.";

export const metadata = pageMetadata({ title, description, path: "/platforms" });

export default function PlatformsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Systems", path: "/platforms" },
          ]),
          itemListJsonLd(platforms.map((platform) => ({ name: platform.name, path: `/platforms/${platform.slug}` }))),
        ]}
      />

      <PageHero
        eyebrow={`Systems · ${platforms.length} platforms in production`}
        title={
          <>
            The systems running behind our clients&apos; <span className="accent text-brand">front doors.</span>
          </>
        }
        description="Proven platforms for finance, healthcare, education, manufacturing, retail, logistics and civil society — adapted to each client and built on one shared engineering foundation."
      />

      <Section>
        <CardGrid>
          {platforms.map((platform, index) => (
            <SystemCard key={platform.slug} platform={platform} index={index} />
          ))}
        </CardGrid>
      </Section>

      <Section tone="ink">
        <SectionHeader
          eyebrow="Built into every system"
          title={
            <>
              One foundation, <span className="accent text-brand-2">every platform.</span>
            </>
          }
          description="Whatever the sector, every MTX system ships with the same standards — so they are easier to audit, extend and support."
        />
        <div className="grid gap-px border-y border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {foundations.map((item, index) => (
            <div key={item.title} className="reveal bg-ink py-8 sm:p-8">
              <span className="label text-brand-2">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-[21px] font-semibold tracking-[-0.02em] text-paper">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/65">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title={
          <>
            Need a system that <span className="accent">isn&apos;t listed here?</span>
          </>
        }
        description="These are the platforms we deliver most often — not the only ones. Tell us what you're running today."
        secondary={{ label: "See services", href: "/services" }}
      />
    </>
  );
}
