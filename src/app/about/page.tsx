import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui/cta-band";
import { IconArrowUpRight } from "@/components/ui/icons";
import { StatGrid } from "@/components/ui/stat-grid";
import { IconLinkedIn } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { foundations, principles, trackRecord } from "@/content/company";
import { companyFacts, companyStats, founder, siteConfig } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata, personJsonLd } from "@/lib/seo";

const title = "About";
const description =
  `MTX Digital Technologies is a ${companyFacts.teamSize}-person software team in Addis Ababa. In ${companyFacts.yearsInBusiness} years we've delivered ${companyFacts.systemsDelivered} systems for hospitals, schools, hotels, transport operators, NGOs and retailers across Ethiopia.`;

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
        description={`MTX Digital Technologies is a ${companyFacts.teamSize}-person product team based in Addis Ababa. We design, build and maintain financial systems, school and manufacturing ERP, hospital platforms, shareholder registries, marketplaces and mobile apps — end to end, on one team.`}
      >
        <StatGrid stats={companyStats} wide valueClassName="text-[clamp(28px,4vw,44px)]" className="max-w-3xl" />
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

      <Section tone="paper-2">
        <SectionHeader
          index="03"
          eyebrow="Track record"
          title={
            <>
              {companyFacts.systemsDelivered} systems across <span className="accent">{trackRecord.length} sectors.</span>
            </>
          }
          description={`What ${companyFacts.yearsInBusiness} years of delivery looks like. Linked projects have a full case study.`}
        />
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {trackRecord.map((entry) => (
            <li key={entry.sector} className="reveal flex flex-col bg-paper p-6 sm:p-7">
              <div className="label text-ink/50">{entry.sector}</div>
              <div className="mt-2 text-[18px] font-semibold tracking-[-0.02em]">{entry.work}</div>
              {entry.projects.length ? (
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[14.5px]">
                  {entry.projects.map((project) =>
                    project.slug ? (
                      <Link
                        key={project.name}
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1 underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                      >
                        {project.name}
                        <IconArrowUpRight className="size-3.5" />
                      </Link>
                    ) : (
                      <span key={project.name} className="text-ink/65">
                        {project.name}
                      </span>
                    )
                  )}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader index="04" eyebrow="Leadership" title="Founder" />
        <div className="reveal grid gap-8 rounded-2xl border border-ink/12 bg-white p-6 sm:p-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Image
              src={founder.photo.src}
              alt={founder.photo.alt}
              width={480}
              height={480}
              sizes="(min-width: 768px) 320px, 100vw"
              className="aspect-square w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col md:col-span-8">
            <div className="text-[clamp(26px,3vw,34px)] font-semibold tracking-[-0.03em]">{founder.name}</div>
            <div className="mt-1 text-[15px] text-ink/60">
              {founder.role}, {siteConfig.legalName}
            </div>
            <div className="mt-6 space-y-4">
              {founder.bio.map((paragraph) => (
                <p key={paragraph} className="max-w-2xl text-[16.5px] leading-relaxed text-ink/75">
                  {paragraph}
                </p>
              ))}
            </div>
            <a
              href={founder.linkedin}
              target="_blank"
              rel="me noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-[14px] font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              <IconLinkedIn className="size-4" /> LinkedIn
            </a>
          </div>
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
