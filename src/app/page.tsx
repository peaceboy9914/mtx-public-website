import Link from "next/link";
import { Screenshot } from "@/components/media/screenshot";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/ui/cta-band";
import { IconArrowRight } from "@/components/ui/icons";
import { Eyebrow, Section, SectionHeader } from "@/components/ui/section";
import { ProjectCard } from "@/components/work/project-card";
import { deliveryProcess, foundations } from "@/content/company";
import { platforms, requirePlatform } from "@/content/platforms";
import { services } from "@/content/services";
import { companyStats, googleBusiness, siteConfig } from "@/content/site";
import { StatGrid } from "@/components/ui/stat-grid";
import { requireWorkProject, workProjects } from "@/content/work";
import { ClientLogos } from "@/components/work/client-logos";
import { ClientQuotes } from "@/components/work/client-quotes";
import { clients } from "@/content/clients";
import { publishedPosts } from "@/content/insights";
import { riseDelay } from "@/lib/motion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Software Development Company in Ethiopia | ${siteConfig.name}`,
  description: siteConfig.description,
  path: "/",
});

/** Systems with a client case study first: these are the ones we can point to. */
const featuredSystems = [
  "hospital-management-system",
  "school-management-system",
  "financial-management-system",
  "inventory-pos-system",
  "shareholder-management-system",
  "booking-ticketing-system",
  "multi-vendor-marketplace",
];

const featuredSlugs = ["mtx-care", "nur-palace", "school-erp"];
const featuredQuoteSlugs = ["mtx-care", "nur-palace", "school-erp"];

/** "Grand Valley Primary Hospital" for a case study, falling back to the project name. */
function clientOf(slug: string) {
  const project = requireWorkProject(slug);
  const client = project.client?.name;
  if (slug === "mtx-care") return "Grand Valley Primary Hospital";
  return client && client !== "MTX product" && client !== "Private client" ? client : project.name;
}

export default function HomePage() {
  const hospital = requireWorkProject("grand-valley-hospital");
  const grandbirr = requireWorkProject("grandbirr-market");
  const featured = featuredSlugs.map(requireWorkProject);
  const latestPosts = publishedPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="grid-paper relative overflow-hidden border-b border-ink/10">
        <div className="shell pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="rise">
            <Eyebrow>Software development company · {siteConfig.location}</Eyebrow>
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
                Hospital and school systems, booking and share-sale platforms, marketplaces and mobile apps —
                designed, built and maintained by one team in Addis Ababa.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Start a project</ButtonLink>
                <ButtonLink href="/work" variant="outline" arrow={false}>
                  See our work
                </ButtonLink>
              </div>

              <StatGrid stats={companyStats} className="mt-12" />
              <a
                href={googleBusiness.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-[14px] transition-colors hover:border-ink/40"
              >
                <span className="font-semibold">{googleBusiness.rating.value}</span>
                <span aria-hidden="true" className="text-[#f5b301]">
                  ★★★★★
                </span>
                <span className="text-ink/65">{googleBusiness.rating.count} Google reviews</span>
              </a>
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

      {/* Clients, compact */}
      <section className="border-b border-ink/10 bg-white">
        <div className="shell py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
            <p className="label flex-none text-ink/50 lg:w-44">Trusted by {clients.length} organisations</p>
            <ClientLogos compact />
          </div>
        </div>
      </section>

      {/* Featured work */}
      <Section>
        <SectionHeader
          index="01"
          eyebrow="Selected work"
          title={
            <>
              Systems Ethiopian organisations <span className="accent">run on every day.</span>
            </>
          }
          description="A hospital ERP, a restaurant system and a school platform, each in daily use by the client named on it."
          action={
            <ButtonLink href="/work" variant="outline">
              All {workProjects.length} projects
            </ButtonLink>
          }
        />
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {/* What we build */}
      <Section tone="paper-2" className="border-y border-ink/10">
        <SectionHeader
          index="02"
          eyebrow="What we build"
          title={
            <>
              Custom builds, <span className="accent">or a system we already run.</span>
            </>
          }
          description="Start from a blank page or from a system already working for another client, adapted to how your organisation works."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <LinkList
            heading="Services"
            items={services.slice(0, 7).map((service) => ({ href: `/services/${service.slug}`, label: service.name }))}
            more={{ href: "/services", label: `All ${services.length} services` }}
          />
          <LinkList
            heading="Systems"
            items={featuredSystems.map(requirePlatform).map((platform) => ({
              href: `/platforms/${platform.slug}`,
              label: platform.shortName,
              note: platform.caseStudy ? `in use at ${clientOf(platform.caseStudy)}` : undefined,
            }))}
            more={{ href: "/platforms", label: `All ${platforms.length} systems` }}
          />
        </div>
      </Section>

      {/* Client quotes */}
      <Section tone="white">
        <SectionHeader
          index="03"
          eyebrow="Clients"
          title={
            <>
              In our clients&apos; <span className="accent">own words.</span>
            </>
          }
          action={
            <ButtonLink href="/about#clients" variant="outline">
              More from our clients
            </ButtonLink>
          }
        />
        <ClientQuotes slugs={featuredQuoteSlugs} columns={3} />
      </Section>

      {/* Foundations */}
      <Section tone="ink">
        <SectionHeader
          index="04"
          eyebrow="Why MTX"
          title={
            <>
              Software that fits <span className="accent text-brand-2">the place it runs.</span>
            </>
          }
          description="We build for Ethiopian institutions specifically, so the things other vendors treat as change requests are in the first sprint."
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
          index="05"
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

      {/* Insights */}
      {latestPosts.length ? (
        <Section tone="paper-2" className="border-t border-ink/10">
          <SectionHeader
            index="06"
            eyebrow="Insights"
            title={
              <>
                Notes from <span className="accent">live projects.</span>
              </>
            }
            action={
              <ButtonLink href="/insights" variant="outline">
                All articles
              </ButtonLink>
            }
          />
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
            {latestPosts.map((post) => (
              <li key={post.slug} className="bg-paper">
                <Link href={`/insights/${post.slug}`} className="group flex h-full flex-col p-7">
                  <span className="label text-ink/50">{post.tags[0]}</span>
                  <span className="mt-3 text-[20px] leading-snug font-semibold tracking-[-0.02em] transition-colors group-hover:text-brand">
                    {post.title}
                  </span>
                  <span className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/65">{post.description}</span>
                  <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium">
                    Read <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <CtaBand secondary={{ label: "See services", href: "/services" }} />
    </>
  );
}

function LinkList({
  heading,
  items,
  more,
}: {
  heading: string;
  items: { href: string; label: string; note?: string }[];
  more: { href: string; label: string };
}) {
  return (
    <div className="reveal">
      <h3 className="label text-ink/50">{heading}</h3>
      <ul className="mt-4 border-t border-ink/15">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-baseline justify-between gap-4 border-b border-ink/15 py-4 transition-colors hover:text-brand"
            >
              <span className="text-[19px] font-semibold tracking-[-0.02em]">{item.label}</span>
              <span className="flex items-center gap-3 text-[13px] text-ink/50">
                {item.note ? <span className="hidden sm:inline">{item.note}</span> : null}
                <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={more.href} className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-medium hover:text-brand">
        {more.label} <IconArrowRight className="size-4" />
      </Link>
    </div>
  );
}
