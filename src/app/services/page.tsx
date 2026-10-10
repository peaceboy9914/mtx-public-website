import { CardGrid, ServiceCard } from "@/components/catalog/catalog";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/ui/cta-band";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { principles } from "@/content/company";
import { serviceCategories, services } from "@/content/services";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

const title = "Software Development Services in Ethiopia";
const description =
  "Custom software, web and mobile apps, ERP, fintech, system integration, AI, cloud and support services from MTX Digital Technologies — a software development company in Addis Ababa, Ethiopia.";

export const metadata = pageMetadata({ title, description, path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          itemListJsonLd(services.map((service) => ({ name: service.name, path: `/services/${service.slug}` }))),
        ]}
      />

      <PageHero
        eyebrow={`Services · ${services.length} practices`}
        title={
          <>
            Software development services, <span className="accent text-brand">end to end.</span>
          </>
        }
        description="From strategy and design through engineering, integration, hosting and long-term support — MTX delivers the full lifecycle of business software for Ethiopian organisations."
      >
        <nav aria-label="Service categories" className="flex flex-wrap gap-2">
          {serviceCategories.map((category) => (
            <a
              key={category}
              href={`#${slugify(category)}`}
              className="rounded-full border border-ink/15 bg-paper px-4 py-2 text-[14px] transition-colors hover:border-ink"
            >
              {category}
            </a>
          ))}
        </nav>
      </PageHero>

      {serviceCategories.map((category, categoryIndex) => {
        const inCategory = services.filter((service) => service.category === category);
        return (
          <Section
            key={category}
            id={slugify(category)}
            tone={categoryIndex % 2 === 0 ? "paper" : "paper-2"}
            innerClassName="py-16 sm:py-20"
          >
            <div className="reveal mb-10 flex items-baseline justify-between gap-6">
              <h2 className="text-[clamp(28px,3.4vw,44px)] font-semibold tracking-[-0.035em]">{category}</h2>
              <span className="label text-ink/45">
                {inCategory.length} {inCategory.length === 1 ? "service" : "services"}
              </span>
            </div>
            <CardGrid>
              {inCategory.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </CardGrid>
          </Section>
        );
      })}

      <Section tone="ink">
        <SectionHeader
          eyebrow="Why MTX"
          title={
            <>
              One engineering standard <span className="accent text-brand-2">across every practice.</span>
            </>
          }
          action={
            <ButtonLink href="/platforms" variant="outline-inverse">
              See the systems we build
            </ButtonLink>
          }
        />
        <div className="grid gap-px border-y border-paper/15 bg-paper/15 sm:grid-cols-2">
          {principles.map((item) => (
            <div key={item.title} className="reveal bg-ink py-8 sm:p-10">
              <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-paper">{item.title}</h3>
              <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-paper/65">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title={
          <>
            Not sure which service <span className="accent">fits?</span>
          </>
        }
        description="Tell us the process that keeps breaking. A 45-minute call gets you a scope sketch and a price range."
        secondary={{ label: "Explore systems", href: "/platforms" }}
      />
    </>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
