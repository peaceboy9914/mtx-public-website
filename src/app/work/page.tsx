import Link from "next/link";
import { CtaBand } from "@/components/ui/cta-band";
import { IconArrowRight } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProjectCard } from "@/components/work/project-card";
import { alsoDelivered, platforms } from "@/content/platforms";
import { workProjects } from "@/content/work";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Work in production";
const description =
  "Websites, mobile apps and enterprise platforms MTX has delivered for hospitals, transport operators, schools, manufacturers and retailers across Ethiopia.";

export const metadata = pageMetadata({ title, description, path: "/work" });

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />

      <PageHero
        eyebrow={`Portfolio · ${workProjects.length} live builds`}
        title={
          <>
            Work in <span className="accent text-brand">production.</span>
          </>
        }
        description="Websites, mobile apps and enterprise platforms delivered for hospitals, transport operators, schools, manufacturers and retailers. Screens below are from live builds."
      />

      <Section tone="white">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {workProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section tone="ink" id="platforms">
        <SectionHeader
          eyebrow="Enterprise platforms"
          title={
            <>
              Systems we build <span className="accent text-brand-2">and operate.</span>
            </>
          }
          description="Most of what we run for clients sits behind a login. Here's what each platform covers — the Platforms page has the full breakdown."
        />
        <div className="grid gap-px border-y border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <Link
              key={platform.id}
              href={`/platforms#${platform.id}`}
              className="group reveal flex flex-col bg-ink py-8 transition-colors hover:bg-ink-2 sm:p-8"
            >
              <span className="label text-brand-2">{platform.sector}</span>
              <h3 className="mt-4 text-[21px] font-semibold tracking-[-0.02em] text-paper">{platform.name}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-paper/60">{platform.summary}</p>
              <IconArrowRight className="mt-6 size-5 text-paper/40 transition-all group-hover:translate-x-1 group-hover:text-paper" />
            </Link>
          ))}
          <div className="reveal bg-ink py-8 sm:p-8">
            <span className="label text-paper/45">Also delivered</span>
            <ul className="mt-4 flex flex-col gap-2.5 text-[15px] text-paper/75">
              {alsoDelivered.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
