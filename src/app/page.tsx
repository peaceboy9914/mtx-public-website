import Link from "next/link";
import { Screenshot } from "@/components/media/screenshot";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/ui/cta-band";
import { IconArrowRight } from "@/components/ui/icons";
import { Eyebrow, Section, SectionHeader } from "@/components/ui/section";
import { ProjectCard } from "@/components/work/project-card";
import { deliveryProcess, foundations, sectors } from "@/content/company";
import { platforms } from "@/content/platforms";
import { companyStats, siteConfig } from "@/content/site";
import { requireWorkProject, workProjects } from "@/content/work";
import { riseDelay } from "@/lib/motion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

const capabilityIndex = [
  ...platforms.map((platform) => ({
    title: platform.shortName,
    body: platform.summary,
    href: `/platforms#${platform.id}`,
  })),
  {
    title: "Web & mobile products",
    body: "Marketplaces, booking platforms, author and corporate sites, and Play Store apps.",
    href: "/work",
  },
];

const featuredSlugs = ["grand-valley-hospital", "grandbirr-market", "nur-bus", "school-erp", "mrpo"];

export default function HomePage() {
  const hospital = requireWorkProject("grand-valley-hospital");
  const grandbirr = requireWorkProject("grandbirr-market");
  const featured = featuredSlugs.map(requireWorkProject);

  return (
    <>
      {/* Hero */}
      <section className="grid-paper relative overflow-hidden border-b border-ink/10">
        <div className="shell pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="rise">
            <Eyebrow>Software engineering · {siteConfig.location}</Eyebrow>
          </div>
          <h1
            className="rise mt-6 text-[clamp(44px,8.6vw,124px)] leading-[0.94] font-semibold tracking-[-0.05em]"
            style={riseDelay(80)}
          >
            We build the software
            <br className="hidden sm:block" /> Ethiopian institutions <span className="accent text-brand">run on.</span>
          </h1>

          <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12">
            <div className="rise lg:col-span-4" style={riseDelay(160)}>
              <p className="text-[18px] leading-relaxed text-ink/70">
                Financial systems, school and manufacturing ERP, hospital platforms, shareholder registries,
                marketplaces and mobile apps — designed, built and maintained by one senior team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Start a project</ButtonLink>
                <ButtonLink href="/work" variant="outline" arrow={false}>
                  See our work
                </ButtonLink>
              </div>

              <dl className="mt-12 grid grid-cols-3 border-t border-ink/15">
                {companyStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col border-r border-ink/15 pt-5 pr-4 last:border-r-0 [&:not(:first-child)]:pl-4">
                    <dt className="label order-2 mt-1 text-ink/55">{stat.label}</dt>
                    <dd className="text-[32px] font-semibold tracking-[-0.04em]">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rise relative lg:col-span-8" style={riseDelay(240)}>
              <div className="relative pb-12 pl-[12%]">
                <Screenshot
                  src={hospital.image.src}
                  alt={hospital.image.alt}
                  url={hospital.domain}
                  priority
                  sizes="(min-width: 1024px) 760px, 100vw"
                />
                <div className="absolute bottom-0 left-0 w-[24%] max-w-[180px]">
                  <Screenshot frame="phone" src={grandbirr.image.src} alt={grandbirr.image.alt} priority sizes="200px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-b border-ink/10 bg-paper">
        <div className="shell flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-10">
          <span className="label flex-none text-ink/50">Sectors we build for</span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ink/75">
            {sectors.map((sector) => (
              <li key={sector}>{sector}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we build */}
      <Section>
        <SectionHeader
          index="01"
          eyebrow="What we build"
          title={
            <>
              One engineering standard, <span className="accent">everywhere</span> we build.
            </>
          }
          description="Every platform below is running in production today, on the same foundations: role-based access, full audit trails, bilingual interfaces and reporting your finance team can sign off on."
        />
        <ol className="border-t border-ink/15">
          {capabilityIndex.map((item, index) => (
            <li key={item.title} className="reveal">
              <Link
                href={item.href}
                className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-x-4 gap-y-2 border-b border-ink/15 py-7 transition-colors hover:bg-white/60 sm:grid-cols-[4rem_1fr_1.2fr_auto] sm:gap-x-8 sm:px-2"
              >
                <span className="label text-ink/45">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-[clamp(22px,2.6vw,32px)] font-semibold tracking-[-0.03em] transition-colors group-hover:text-brand">
                  {item.title}
                </span>
                <span className="col-start-2 row-start-2 text-[15px] leading-relaxed text-ink/65 sm:col-start-3 sm:row-start-1">
                  {item.body}
                </span>
                <IconArrowRight className="col-start-3 row-start-1 size-5 self-center text-ink/40 transition-all group-hover:translate-x-1 group-hover:text-brand sm:col-start-4" />
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      {/* Selected work */}
      <Section tone="white" className="border-y border-ink/10">
        <SectionHeader
          index="02"
          eyebrow="Selected work"
          title={
            <>
              Live products, <span className="accent">real users.</span>
            </>
          }
          action={
            <ButtonLink href="/work" variant="outline">
              View all {workProjects.length} projects
            </ButtonLink>
          }
        />
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featured.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {featured.slice(2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {/* Foundations */}
      <Section tone="ink">
        <SectionHeader
          index="03"
          eyebrow="Why MTX"
          title={
            <>
              Software that fits <span className="accent text-brand-2">the place it runs.</span>
            </>
          }
          description="We build for Ethiopian institutions specifically — so the things other vendors treat as change requests are in the first sprint."
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

      {/* How we work */}
      <Section>
        <SectionHeader
          index="04"
          eyebrow="How we work"
          title={
            <>
              A delivery rhythm you can <span className="accent">plan around.</span>
            </>
          }
          description="Fixed-fee discovery, a working slice in your environment within five weeks, then two-week increments demoed to your team."
        />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {deliveryProcess.map((step, index) => (
            <li key={step.title} className="reveal relative lg:pr-8">
              <div className="flex items-center gap-3">
                <span className="flex size-9 flex-none items-center justify-center rounded-full border border-ink font-mono text-[12px]">
                  {index + 1}
                </span>
                <span aria-hidden="true" className="hidden h-px flex-1 bg-ink/20 lg:block" />
              </div>
              <div className="label mt-6 text-brand">{step.phase}</div>
              <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.025em]">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand secondary={{ label: "See services", href: "/services" }} />
    </>
  );
}
