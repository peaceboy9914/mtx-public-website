import Link from "next/link";
import { notFound } from "next/navigation";
import { BrowserFrame } from "@/components/browser-frame";
import { PhoneFrame } from "@/components/phone-frame";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-heading";
import { getWorkProject, workProjects } from "@/data/work";
import { breadcrumbJsonLd, creativeWorkJsonLd, pageMetadata } from "@/lib/seo";
import { hasImage } from "@/lib/images";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return workProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
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

export default async function WorkCaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) notFound();

  const others = workProjects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: project.name, path: `/work/${project.slug}` },
  ]);

  const creativeWork = creativeWorkJsonLd({
    name: project.name,
    description: project.caseSummary,
    path: `/work/${project.slug}`,
    image: project.image.src,
    sector: project.category,
  });

  return (
    <>
      <script
        type="application/ld+json"        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork) }}
      />

      <section className="bg-navy-950 text-white">
        <div className="wrap py-16">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[13px] text-white/50">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link href="/work" className="hover:text-white">
                Work
              </Link>
              <span>/</span>
              <span className="text-white/80">{project.name}</span>
            </nav>
            <span
              className="inline-block rounded-md px-[11px] py-[5px] text-[11px] font-semibold tracking-[.1em]"
              style={{ background: project.categoryTint.bg, color: project.categoryTint.text }}
            >
              {project.category.toUpperCase()}
            </span>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-[clamp(32px,4.4vw,50px)] font-bold leading-[1.08] tracking-[-.03em]">
              {project.caseTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-[17px] leading-[1.66] text-white/72">
              {project.caseSummary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/16 px-[11px] py-[6px] text-[12.5px] font-medium text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.domain ? (
              <div className="mt-5 text-[13px] font-medium text-white/45">{project.domain}</div>
            ) : null}
            {project.stats ? (
              <div className="mt-8 flex flex-wrap gap-8 border-t border-white/10 pt-6">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-[25px] font-bold text-white">{stat.value}</div>
                    <div className="mt-[3px] text-[12.5px] text-white/55">{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="wrap py-16">
          <Reveal>
            {project.frame === "phone" ? (
              <div className="mx-auto max-w-[320px]">
                <PhoneFrame src={project.image.src} alt={project.image.alt} size="lg" priority />
              </div>
            ) : (
              <div className="mx-auto max-w-4xl">
                <BrowserFrame src={project.image.src} alt={project.image.alt} priority />
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-16">
          <SectionEyebrow>MORE WORK</SectionEyebrow>
          <h2 className="mb-8 mt-3 font-display text-[26px] font-bold tracking-[-.02em] text-navy-900">
            Other projects
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/work/${other.slug}`}
                className="rounded-2xl border border-navy-900/8 p-6 hover:border-blue-600/30"
              >
                <div className="text-[11px] font-semibold tracking-[.12em] text-blue-600">
                  {other.category.toUpperCase()}
                </div>
                <h3 className="mt-2.5 font-display text-lg font-semibold text-navy-900">{other.cardTitle}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-navy-900/62">{other.cardSummary}</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4 rounded-2xl bg-navy-950 p-8">
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold text-white">Building something similar?</h3>
              <p className="mt-1.5 text-sm text-white/65">
                Tell us the process that keeps breaking and we&apos;ll scope it on a call.
              </p>
            </div>
            <Button href="/contact" variant="primary">
              Start a project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
