import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CardGrid, ServiceCard, SystemCard, SystemVisual } from "@/components/catalog/catalog";
import { ArrowLink, ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/ui/cta-band";
import { FaqList } from "@/components/ui/faq-list";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Eyebrow, Section, SectionHeader } from "@/components/ui/section";
import { foundations } from "@/content/company";
import { getPlatform, platforms } from "@/content/platforms";
import { requireService } from "@/content/services";
import { requireWorkProject } from "@/content/work";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return platforms.map((platform) => ({ slug: platform.slug }));
}

export async function generateMetadata({ params }: PageProps<"/platforms/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) return {};
  const path = `/platforms/${platform.slug}`;
  return pageMetadata({ title: platform.seoTitle, description: platform.summary, path, image: `${path}/opengraph-image` });
}

export default async function PlatformPage({ params }: PageProps<"/platforms/[slug]">) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) notFound();

  const path = `/platforms/${platform.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Systems", path: "/platforms" },
    { name: platform.shortName, path },
  ];
  const project = platform.caseStudy ? requireWorkProject(platform.caseStudy) : undefined;
  const relatedServices = platform.relatedServices.map(requireService);
  const index = platforms.indexOf(platform);
  const otherSystems = [1, 2, 3].map((offset) => platforms[(index + offset) % platforms.length]);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          serviceJsonLd({ name: platform.seoTitle, serviceType: platform.name, description: platform.summary, path }),
          faqJsonLd(platform.faqs),
        ]}
      />

      <PageHero breadcrumbs={breadcrumbs.slice(1)} eyebrow={platform.sector} title={platform.seoTitle} description={platform.summary}>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Request a demo</ButtonLink>
          <ButtonLink href="#modules" variant="outline" arrow={false}>
            See modules
          </ButtonLink>
        </div>
      </PageHero>

      {/* Overview + visual */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <span className="label text-ink/50">Overview</span>
            <h2 className="mt-4 text-[clamp(26px,3vw,38px)] leading-tight font-semibold tracking-[-0.03em]">{platform.name}</h2>
            <div className="mt-6 flex flex-col gap-5 text-[17px] leading-relaxed text-ink/75">
              {platform.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {project ? (
              <div className="mt-8">
                <ArrowLink href={`/work/${project.slug}`}>See the {project.name} case study</ArrowLink>
              </div>
            ) : null}
          </div>
          <div className="reveal lg:col-span-6 lg:col-start-7">
            <SystemVisual platform={platform} priority />
          </div>
        </div>
      </Section>

      {/* Modules + audience */}
      <Section tone="paper-2" id="modules" className="border-y border-ink/10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="reveal mb-12">
              <Eyebrow>Modules</Eyebrow>
              <h2 className="mt-5 text-[clamp(32px,4.4vw,56px)] leading-[1.02] font-semibold tracking-[-0.035em]">
                What&apos;s inside the <span className="accent">{platform.shortName.toLowerCase()}</span> system.
              </h2>
            </div>
            <ol className="grid gap-px border-y border-ink/15 bg-ink/15 sm:grid-cols-2">
              {platform.modules.map((module, moduleIndex) => (
                <li key={module} className="reveal flex gap-5 bg-paper-2 py-5 text-[17px] sm:px-5">
                  <span className="label mt-1 flex-none text-brand">{String(moduleIndex + 1).padStart(2, "0")}</span>
                  {module}
                </li>
              ))}
            </ol>
          </div>
          <aside className="reveal self-start rounded-2xl bg-ink p-8 text-paper lg:sticky lg:top-28 lg:col-span-4">
            <span className="label text-brand-2">Built for</span>
            <ul className="mt-6 flex flex-col">
              {platform.audience.map((item) => (
                <li key={item} className="border-t border-paper/10 py-3.5 text-[16px] text-paper/85">
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" variant="inverse" className="mt-6 w-full">
              Talk to our team
            </ButtonLink>
          </aside>
        </div>
      </Section>

      {/* Standards */}
      <Section>
        <SectionHeader
          eyebrow="Standard in every MTX system"
          title={
            <>
              Designed for how Ethiopian <span className="accent">organisations work.</span>
            </>
          }
        />
        <div className="grid gap-px border-y border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {foundations.map((item) => (
            <div key={item.title} className="reveal bg-paper py-8 sm:p-8">
              <h3 className="text-[19px] font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white" className="border-y border-ink/10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <span className="label text-ink/50">FAQ</span>
            <h2 className="mt-4 text-[clamp(28px,3.4vw,44px)] leading-[1.05] font-semibold tracking-[-0.035em]">
              Questions about the <span className="accent">{platform.shortName.toLowerCase()}</span> system
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={platform.faqs} />
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section tone="ink">
        <SectionHeader eyebrow="Services behind this system" title="How we deliver it" />
        <CardGrid tone="ink">
          {relatedServices.map((service) => (
            <ServiceCard key={service.slug} service={service} tone="ink" />
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="More systems"
          title="Explore other platforms"
          action={
            <ButtonLink href="/platforms" variant="outline">
              All {platforms.length} systems
            </ButtonLink>
          }
        />
        <CardGrid>
          {otherSystems.map((other) => (
            <SystemCard key={other.slug} platform={other} />
          ))}
        </CardGrid>
      </Section>

      <CtaBand
        title={
          <>
            See the {platform.shortName.toLowerCase()} system <span className="accent">in action.</span>
          </>
        }
        description="Book a walkthrough with the engineers who build it. We'll show the modules that matter to you and give you a scope and price range."
        primary={{ label: "Request a demo", href: "/contact" }}
        secondary={{ label: "All systems", href: "/platforms" }}
      />
    </>
  );
}
