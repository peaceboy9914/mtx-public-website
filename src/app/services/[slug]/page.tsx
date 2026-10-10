import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CardGrid, SystemCard } from "@/components/catalog/catalog";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/ui/cta-band";
import { FaqList } from "@/components/ui/faq-list";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { ProjectCard } from "@/components/work/project-card";
import { deliveryProcess } from "@/content/company";
import { requirePlatform } from "@/content/platforms";
import { getService, services } from "@/content/services";
import { requireWorkProject } from "@/content/work";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const path = `/services/${service.slug}`;
  return pageMetadata({ title: service.seoTitle, description: service.summary, path, image: `${path}/opengraph-image` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path },
  ];
  const systems = service.relatedSystems.map(requirePlatform);
  const work = service.relatedWork.map(requireWorkProject);
  const otherServices = services.filter((other) => other.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          serviceJsonLd({ name: service.seoTitle, serviceType: service.name, description: service.summary, path }),
          faqJsonLd(service.faqs),
        ]}
      />

      <PageHero breadcrumbs={breadcrumbs.slice(1)} eyebrow={service.category} title={service.seoTitle} description={service.summary}>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact">Discuss your project</ButtonLink>
          <ButtonLink href="#deliverables" variant="outline" arrow={false}>
            What we deliver
          </ButtonLink>
        </div>
      </PageHero>

      {/* Overview */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <span className="label text-ink/50">Overview</span>
            <h2 className="mt-4 text-[clamp(26px,3vw,36px)] leading-tight font-semibold tracking-[-0.03em]">{service.name}</h2>
          </div>
          <div className="reveal flex flex-col gap-6 text-[clamp(18px,1.6vw,21px)] leading-relaxed tracking-[-0.01em] text-ink/80 lg:col-span-7 lg:col-start-6">
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {service.technologies.map((technology) => (
                <Tag key={technology} className="text-ink/70">
                  {technology}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section tone="paper-2" id="deliverables" className="border-y border-ink/10">
        <SectionHeader
          eyebrow="What we deliver"
          title={
            <>
              Everything included in <span className="accent">{service.name.toLowerCase()}.</span>
            </>
          }
        />
        <div className="grid gap-px border-y border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {service.deliverables.map((item, index) => (
            <div key={item.title} className="reveal bg-paper-2 py-8 sm:p-8">
              <span className="label text-brand">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink/65">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {systems.length > 0 ? (
        <Section>
          <SectionHeader
            eyebrow="Systems we build with this"
            title={
              <>
                Proven systems, <span className="accent">ready to adapt.</span>
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
        </Section>
      ) : null}

      {work.length > 0 ? (
        <Section tone="white" className="border-y border-ink/10">
          <SectionHeader
            eyebrow="Related work"
            title={
              <>
                Delivered and <span className="accent">running in production.</span>
              </>
            }
          />
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {work.slice(0, 4).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      ) : null}

      {/* Process */}
      <Section tone="ink">
        <SectionHeader
          eyebrow="How we deliver"
          title={
            <>
              A delivery rhythm you can <span className="accent text-brand-2">plan around.</span>
            </>
          }
        />
        <ol className="grid gap-px border-y border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryProcess.map((step, index) => (
            <li key={step.title} className="reveal bg-ink py-8 sm:p-8">
              <span className="label text-brand-2">
                {String(index + 1).padStart(2, "0")} · {step.phase}
              </span>
              <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.02em] text-paper">{step.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-paper/60">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <span className="label text-ink/50">FAQ</span>
            <h2 className="mt-4 text-[clamp(28px,3.4vw,44px)] leading-[1.05] font-semibold tracking-[-0.035em]">
              Questions about <span className="accent">{service.name.toLowerCase()}</span>
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={service.faqs} />
          </div>
        </div>
      </Section>

      {/* Other services */}
      <section className="border-t border-ink/10 bg-paper-2">
        <div className="shell py-16">
          <span className="label text-ink/50">Other services</span>
          <ul className="mt-6 flex flex-wrap gap-2">
            {otherServices.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="inline-block rounded-full border border-ink/15 bg-paper px-4 py-2 text-[14px] transition-colors hover:border-ink"
                >
                  {other.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand secondary={{ label: "All services", href: "/services" }} />
    </>
  );
}
