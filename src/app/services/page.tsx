import { ArrowLink } from "@/components/ui/button";
import { CtaBand } from "@/components/ui/cta-band";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { principles, services } from "@/content/company";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Services";
const description =
  "Web applications, mobile apps, enterprise ERP and financial platforms, and AI solutions — designed, built and operated by MTX Digital Technologies in Addis Ababa.";

export const metadata = pageMetadata({ title, description, path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero
        eyebrow="Services"
        title={
          <>
            How we help you run on <span className="accent text-brand">better software.</span>
          </>
        }
        description="Web, mobile, enterprise systems and AI — built by one senior team that stays on after launch, instead of handing you off to a support queue."
      >
        <nav aria-label="Services on this page" className="flex flex-wrap gap-2">
          {services.map((service, index) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="rounded-full border border-ink/15 bg-paper px-4 py-2 text-[14px] transition-colors hover:border-ink"
            >
              <span className="mr-2 font-mono text-[11px] text-ink/45">{String(index + 1).padStart(2, "0")}</span>
              {service.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="bg-paper">
        <div className="shell">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="grid scroll-mt-20 gap-10 border-b border-ink/10 py-20 last:border-b-0 sm:py-24 lg:grid-cols-12"
            >
              <div className="reveal lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <span className="label text-ink/45">{String(index + 1).padStart(2, "0")}</span>
                  <h2 className="mt-4 text-[clamp(32px,4vw,52px)] leading-[1.02] font-semibold tracking-[-0.035em]">
                    {service.name}
                  </h2>
                  <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink/70">{service.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {service.links.map((link) => (
                      <ArrowLink key={link.href} href={link.href}>
                        {link.label}
                      </ArrowLink>
                    ))}
                  </div>
                </div>
              </div>
              <ul className="border-t border-ink/15 lg:col-span-6 lg:col-start-7">
                {service.capabilities.map((capability, capabilityIndex) => (
                  <li
                    key={capability}
                    className="reveal flex gap-6 border-b border-ink/15 py-6 text-[18px] leading-snug tracking-[-0.01em] sm:text-[20px]"
                  >
                    <span className="label mt-1.5 flex-none text-brand">
                      {String(index + 1).padStart(2, "0")}.{capabilityIndex + 1}
                    </span>
                    {capability}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Section tone="paper-2" className="border-t border-ink/10">
        <SectionHeader
          eyebrow="Why MTX"
          title={
            <>
              One team across <span className="accent">the whole stack.</span>
            </>
          }
        />
        <div className="grid gap-px border-y border-ink/15 bg-ink/15 sm:grid-cols-2">
          {principles.map((item) => (
            <div key={item.title} className="reveal bg-paper-2 py-8 sm:p-10">
              <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-ink/65">{item.body}</p>
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
        secondary={{ label: "Explore platforms", href: "/platforms" }}
      />
    </>
  );
}
