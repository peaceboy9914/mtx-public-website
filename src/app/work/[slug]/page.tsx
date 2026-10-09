import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Screenshot } from "@/components/media/screenshot";
import { CtaBand } from "@/components/ui/cta-band";
import { IconArrowRight, IconArrowUpRight } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Eyebrow } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { getWorkProject, workProjects } from "@/content/work";
import { hasImage } from "@/lib/images";
import { riseDelay } from "@/lib/motion";
import { breadcrumbJsonLd, creativeWorkJsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) return {};

  return pageMetadata({
    title: project.name,
    description: project.caseSummary,
    path: `/work/${project.slug}`,
    image: hasImage(project.image.src) ? project.image.src : undefined,
  });
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) notFound();

  const index = workProjects.indexOf(project);
  const next = workProjects[(index + 1) % workProjects.length];
  const path = `/work/${project.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: project.name, path },
          ]),
          creativeWorkJsonLd({
            name: project.name,
            description: project.caseSummary,
            path,
            image: project.image.src,
            sector: project.sector,
          }),
        ]}
      />

      <section className="grid-paper border-b border-ink/10">
        <div className="shell pt-10 pb-16 sm:pt-14 sm:pb-20">
          <nav aria-label="Breadcrumb" className="rise label flex flex-wrap items-center gap-2 text-ink/50">
            <Link href="/work" className="hover:text-ink">
              Work
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-ink">
              {project.name}
            </span>
          </nav>

          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="rise">
                <Eyebrow>{project.sector}</Eyebrow>
              </div>
              <h1
                className="rise mt-6 text-[clamp(38px,5.8vw,80px)] leading-[0.98] font-semibold tracking-[-0.045em]"
                style={riseDelay(80)}
              >
                {project.caseTitle}
              </h1>
              <p className="rise mt-8 max-w-2xl text-[18px] leading-relaxed text-ink/70" style={riseDelay(160)}>
                {project.caseSummary}
              </p>
            </div>

            <div className="rise self-end lg:col-span-4" style={riseDelay(240)}>
              <dl className="border-t border-ink/15 text-[15px]">
                <MetaRow label="Client">{project.name}</MetaRow>
                <MetaRow label="Delivered as">{project.platform === "mobile" ? "Mobile app" : "Web platform"}</MetaRow>
                {project.domain ? (
                  <MetaRow label="Live at">
                    <a
                      href={`https://${project.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                    >
                      {project.domain}
                      <IconArrowUpRight className="size-3.5" />
                    </a>
                  </MetaRow>
                ) : null}
                {project.stats?.map((stat) => (
                  <MetaRow key={stat.label} label={stat.label}>
                    <span className="text-[22px] font-semibold tracking-[-0.03em]">{stat.value}</span>
                  </MetaRow>
                ))}
              </dl>
              <div className="flex flex-wrap gap-2 border-b border-ink/15 py-4">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="shell py-16 sm:py-24">
          {project.platform === "mobile" ? (
            <div className="reveal mx-auto w-[64%] max-w-[340px]">
              <Screenshot frame="phone" src={project.image.src} alt={project.image.alt} priority sizes="340px" />
            </div>
          ) : (
            <div className="reveal mx-auto max-w-5xl">
              <Screenshot
                src={project.image.src}
                alt={project.image.alt}
                url={project.domain}
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper">
        <Link href={`/work/${next.slug}`} className="group shell flex flex-wrap items-end justify-between gap-6 py-16 sm:py-20">
          <div>
            <span className="label text-ink/50">Next project</span>
            <div className="mt-3 text-[clamp(32px,5vw,64px)] leading-none font-semibold tracking-[-0.04em] transition-colors group-hover:text-brand">
              {next.name}
            </div>
            <p className="mt-4 max-w-xl text-[16px] text-ink/65">{next.cardSummary}</p>
          </div>
          <span className="flex size-16 flex-none items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
            <IconArrowRight className="size-6" />
          </span>
        </Link>
      </section>

      <CtaBand
        title={
          <>
            Building something <span className="accent">similar?</span>
          </>
        }
        description="Tell us the process that keeps breaking and we'll scope it on a call."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "All work", href: "/work" }}
      />
    </>
  );
}

function MetaRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-4">
      <dt className="label text-ink/50">{label}</dt>
      <dd className="text-right">{children}</dd>
    </div>
  );
}
