import clsx from "clsx";
import { Screenshot } from "@/components/media/screenshot";
import { ArrowLink } from "@/components/ui/button";
import { CtaBand } from "@/components/ui/cta-band";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { alsoDelivered, platforms, type Platform } from "@/content/platforms";
import { requireWorkProject } from "@/content/work";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Platforms";
const description =
  "The systems MTX builds and operates for Ethiopian institutions — e-commerce, healthcare, multi-company finance, school ERP, manufacturing ERP, shareholder management and civil-society case handling.";

export const metadata = pageMetadata({ title, description, path: "/platforms" });

export default function PlatformsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platforms", path: "/platforms" },
        ])}
      />

      <PageHero
        eyebrow="Platforms we build and operate"
        title={
          <>
            The systems running behind our clients&apos; <span className="accent text-brand">front doors.</span>
          </>
        }
        description="One shared foundation across every category: role-based access, full audit trails, ETB-native reporting and bilingual interfaces."
      >
        <nav aria-label="Platforms on this page" className="flex flex-wrap gap-2">
          {platforms.map((platform) => (
            <a
              key={platform.id}
              href={`#${platform.id}`}
              className="rounded-full border border-ink/15 bg-paper px-4 py-2 text-[14px] transition-colors hover:border-ink"
            >
              {platform.shortName}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="bg-paper">
        <div className="shell">
          {platforms.map((platform, index) => (
            <PlatformRow key={platform.id} platform={platform} index={index} />
          ))}
        </div>
      </section>

      <Section tone="paper-2" className="border-t border-ink/10">
        <SectionHeader
          eyebrow="Also delivered"
          title={
            <>
              The categories we build most often — <span className="accent">not the only ones.</span>
            </>
          }
        />
        <ul className="grid gap-px border-y border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {alsoDelivered.map((item) => (
            <li key={item} className="reveal bg-paper-2 py-6 text-[18px] tracking-[-0.01em] sm:px-6">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title={
          <>
            Need a platform that <span className="accent">isn&apos;t listed here?</span>
          </>
        }
        description="Tell us what you're running today. A 45-minute call gets you a scope sketch and a price range."
        secondary={{ label: "See services", href: "/services" }}
      />
    </>
  );
}

function PlatformRow({ platform, index }: { platform: Platform; index: number }) {
  const project = platform.caseStudy ? requireWorkProject(platform.caseStudy) : undefined;
  const flipped = index % 2 === 1;

  return (
    <article
      id={platform.id}
      className="grid scroll-mt-20 items-center gap-12 border-b border-ink/10 py-20 last:border-b-0 sm:py-24 lg:grid-cols-12"
    >
      <div className={clsx("reveal lg:col-span-5", flipped && "lg:order-2 lg:col-start-8")}>
        <div className="label flex gap-3 text-ink/50">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{platform.sector}</span>
        </div>
        <h2 className="mt-4 text-[clamp(30px,3.6vw,46px)] leading-[1.04] font-semibold tracking-[-0.035em]">
          {platform.name}
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-ink/70">{platform.summary}</p>
        <ul className="mt-8 border-t border-ink/15">
          {platform.capabilities.map((capability) => (
            <li key={capability} className="flex items-center gap-3 border-b border-ink/15 py-3 text-[15.5px]">
              <span aria-hidden="true" className="size-1.5 flex-none rounded-full bg-brand" />
              {capability}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          {project ? (
            <ArrowLink href={`/work/${project.slug}`}>See the {project.name} case study</ArrowLink>
          ) : (
            <ArrowLink href="/contact">Talk through a {platform.sector.toLowerCase()} build</ArrowLink>
          )}
        </div>
      </div>

      <div className={clsx("reveal lg:col-span-6", flipped ? "lg:order-1 lg:col-start-1" : "lg:col-start-7")}>
        {project?.platform === "mobile" ? (
          <div className="grid-paper flex justify-center overflow-hidden rounded-2xl bg-paper-2 px-6 pt-12">
            <Screenshot frame="phone" src={project.image.src} alt={project.image.alt} className="w-[52%] max-w-[260px] translate-y-6" />
          </div>
        ) : project ? (
          <Screenshot src={project.image.src} alt={project.image.alt} url={project.domain} />
        ) : (
          <ModuleManifest platform={platform} />
        )}
      </div>
    </article>
  );
}

/** Stand-in visual for internal systems whose screens aren't public. */
function ModuleManifest({ platform }: { platform: Platform }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-ink p-8 text-paper sm:p-10">
      <div aria-hidden="true" className="brand-gradient absolute inset-x-0 top-0 h-1" />
      <div className="label flex justify-between text-paper/50">
        <span>mtx / {platform.id}</span>
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-emerald-400" /> In production
        </span>
      </div>
      <ul className="mt-10 font-mono text-[14px]">
        {platform.capabilities.map((capability, index) => (
          <li key={capability} className="flex gap-4 border-t border-paper/10 py-3.5">
            <span className="text-paper/35">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-paper/85">{capability}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-[14px] leading-relaxed text-paper/55">
        Runs as an internal system for clients today — screens are available to walk through on a call.
      </p>
    </div>
  );
}
