import { CtaBand } from "@/components/ui/cta-band";
import { IconLinkedIn } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { foundations, principles } from "@/content/company";
import { companyStats, founder, siteConfig } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata, personJsonLd } from "@/lib/seo";

const title = "About";
const description =
  "MTX Digital Technologies is a senior software team based in Addis Ababa, building financial systems, ERP, hospital platforms and mobile apps for Ethiopian institutions.";

export const metadata = pageMetadata({ title, description, path: "/about" });

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          personJsonLd(),
        ]}
      />

      <PageHero
        eyebrow="About MTX"
        title={
          <>
            Software built in Ethiopia, for how Ethiopian institutions <span className="accent text-brand">actually run.</span>
          </>
        }
        description="MTX Digital Technologies is a senior product team based in Addis Ababa. We design, build and maintain financial systems, school and manufacturing ERP, hospital platforms, shareholder registries, marketplaces and mobile apps — end to end, on one team."
      >
        <dl className="grid max-w-2xl grid-cols-3 border-t border-ink/15">
          {companyStats.map((stat) => (
            <div key={stat.label} className="flex flex-col border-r border-ink/15 pt-5 pr-4 last:border-r-0 [&:not(:first-child)]:pl-4">
              <dt className="label order-2 mt-1 text-ink/55">{stat.label}</dt>
              <dd className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.04em]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section>
        <SectionHeader
          index="01"
          eyebrow="Why we build here"
          title={
            <>
              Software that fits <span className="accent">the place it runs.</span>
            </>
          }
        />
        <div className="grid gap-px border-y border-ink/15 bg-ink/15 sm:grid-cols-2">
          {foundations.map((item) => (
            <div key={item.title} className="reveal bg-paper py-8 sm:p-10">
              <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-ink/65">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeader
          index="02"
          eyebrow="How we think about the work"
          title={
            <>
              Principles that shape <span className="accent text-brand-2">every build.</span>
            </>
          }
        />
        <ol className="border-t border-paper/15">
          {principles.map((item, index) => (
            <li key={item.title} className="reveal grid gap-3 border-b border-paper/15 py-8 sm:grid-cols-12 sm:gap-8">
              <span className="label text-brand-2 sm:col-span-1">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.025em] text-paper sm:col-span-5">
                {item.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-paper/65 sm:col-span-6">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeader index="03" eyebrow="Leadership" title="Founder" />
        <div className="reveal flex flex-wrap items-center gap-6 rounded-2xl border border-ink/12 bg-white p-6 sm:p-8">
          <div className="brand-gradient flex size-16 flex-none items-center justify-center rounded-full text-[26px] font-semibold text-white">
            {founder.name.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[22px] font-semibold tracking-[-0.02em]">{founder.name}</div>
            <div className="text-[15px] text-ink/60">
              {founder.role}, {siteConfig.name}
            </div>
          </div>
          <a
            href={founder.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            className="inline-flex flex-none items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-[14px] font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            <IconLinkedIn className="size-4" /> LinkedIn
          </a>
        </div>
      </Section>

      <CtaBand
        title={
          <>
            See what we&apos;ve <span className="accent">shipped.</span>
          </>
        }
        description="Live products, real users — hospitals, transport operators, schools and retailers already running on MTX systems."
        primary={{ label: "Browse the work", href: "/work" }}
        secondary={{ label: "Start a project", href: "/contact" }}
      />
    </>
  );
}
