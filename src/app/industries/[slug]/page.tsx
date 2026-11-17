import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CardGrid, SystemCard } from "@/components/catalog/catalog";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/ui/cta-band";
import { FaqList } from "@/components/ui/faq-list";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { ClientQuotes } from "@/components/work/client-quotes";
import { ProjectCard } from "@/components/work/project-card";
import { clients, publishedQuotes } from "@/content/clients";
import { getIndustry, industries } from "@/content/industries";
import { requirePlatform } from "@/content/platforms";
import { requireService } from "@/content/services";
import { requireWorkProject } from "@/content/work";
import { SITE_CONTENT_UPDATED } from "@/lib/dates";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const path = `/industries/${industry.slug}`;
  return pageMetadata({ title: industry.seoTitle, description: industry.summary, path, image: `${path}/opengraph-image` });
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const path = `/industries/${industry.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.name, path },
  ];
  const work = industry.work.map(requireWorkProject);
  const systems = industry.systems.map(requirePlatform);
  const relatedServices = industry.services.map(requireService);
  const industryClients = clients.filter((client) => client.slug && industry.work.includes(client.slug));
  const quoteSlugs = industry.work.filter((workSlug) => publishedQuotes.some((quote) => quote.slug === workSlug));
  const otherIndustries = industries.filter((other) => other.slug !== industry.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          serviceJsonLd({ name: industry.seoTitle, serviceType: `${industry.name} software development`, description: industry.summary, path }),
          faqJsonLd(industry.faqs),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs.slice(1)}
        eyebrow={`${work.length} case studies · ${systems.length} systems`}
        title={industry.seoTitle}
        description={industry.summary}
        updated={industry.updated ?? SITE_CONTENT_UPDATED}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Discuss your project</ButtonLink>
          <ButtonLink href="#work" variant="outline" arrow={false}>
            See the work
          </ButtonLink>
        </div>
      </PageHero>

      {industryClients.length ? (
        <section className="border-b border-ink/10 bg-white">
          <div className="shell flex flex-wrap items-center gap-x-10 gap-y-6 py-8">
            <p className="label text-ink/50">In use at</p>
            {industryClients.map((client) => (
              <Link key={client.name} href={`/work/${client.slug}`} className="flex items-center gap-3 hover:text-brand">
                <Image src={client.logo} alt={`${client.name} logo`} width={48} height={48} className="h-12 w-auto object-contain" />
                <span className="text-[15px] font-medium">{client.name}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* Overview */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <span className="label text-ink/50">Overview</span>
            <h2 className="mt-4 text-[clamp(26px,3vw,36px)] leading-tight font-semibold tracking-[-0.03em]">
              Software for {industry.name.toLowerCase()} in Ethiopia
            </h2>
          </div>
          <div className="reveal flex flex-col gap-6 text-[clamp(18px,1.6vw,21px)] leading-relaxed tracking-[-0.01em] text-ink/80 lg:col-span-7 lg:col-start-6">
            {industry.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Needs */}
      <Section tone="paper-2" className="border-y border-ink/10">
        <SectionHeader
          eyebrow="What the software has to do"
          title={
            <>
              Built for how {industry.name.toLowerCase()} <span className="accent">actually works here.</span>
            </>
          }
        />
        <div className="grid gap-px border-y border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {industry.needs.map((need, index) => (
            <div key={need.title} className="reveal bg-paper-2 py-8 sm:p-8">
              <span className="label text-brand">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em]">{need.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink/65">{need.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Work */}
      <Section tone="white" id="work">
        <SectionHeader
          eyebrow="Case studies"
          title={
            <>
              What we&apos;ve built <span className="accent">in {industry.name.toLowerCase()}.</span>
            </>
          }
          action={
            <ButtonLink href="/work" variant="outline">
              All work
            </ButtonLink>
          }
        />
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {work.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {quoteSlugs.length ? (
        <Section className="border-t border-ink/10">
          <SectionHeader eyebrow="From our clients" title={<>In their <span className="accent">own words.</span></>} />
          <ClientQuotes slugs={quoteSlugs} />
        </Section>
      ) : null}

      {/* Systems */}
      <Section tone="paper-2" className="border-y border-ink/10">
        <SectionHeader
          eyebrow="Systems"
          title={
            <>
              Start from a system <span className="accent">we already build.</span>
            </>
          }
          action={
            <ButtonLink href="/platforms" variant="outline">
              All systems
            </ButtonLink>
          }
        />
        <CardGrid>
          {systems.map((platform) => (
            <SystemCard key={platform.slug} platform={platform} />
          ))}
        </CardGrid>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="label me-2 text-ink/50">Related services</span>
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="inline-block rounded-full border border-ink/15 bg-paper px-4 py-2 text-[14px] transition-colors hover:border-ink"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <span className="label text-ink/50">FAQ</span>
            <h2 className="mt-4 text-[clamp(28px,3.4vw,44px)] leading-[1.05] font-semibold tracking-[-0.035em]">
              Questions about <span className="accent">{industry.name.toLowerCase()} software</span>
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={industry.faqs} />
          </div>
        </div>
      </Section>

      <section className="border-t border-ink/10 bg-paper-2">
        <div className="shell py-16">
          <span className="label text-ink/50">Other industries</span>
          <ul className="mt-6 flex flex-wrap gap-2">
            {otherIndustries.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/industries/${other.slug}`}
                  className="inline-block rounded-full border border-ink/15 bg-paper px-4 py-2 text-[14px] transition-colors hover:border-ink"
                >
                  {other.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand secondary={{ label: "All industries", href: "/industries" }} />
    </>
  );
}
