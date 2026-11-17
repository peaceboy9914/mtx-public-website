import { CardGrid, SystemCard } from "@/components/catalog/catalog";
import { CtaBand } from "@/components/ui/cta-band";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProjectCard } from "@/components/work/project-card";
import { WorkFilter } from "@/components/work/work-filter";
import { industries, industriesForProject } from "@/content/industries";
import { platforms } from "@/content/platforms";
import { workProjects } from "@/content/work";

import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const liveCount = workProjects.filter((project) => project.status !== "In development").length;

const title = "Software Projects & Case Studies in Ethiopia";
const description =
  "Websites, mobile apps and enterprise platforms MTX has built for hospitals, restaurants, transport operators, schools, NGOs, construction firms and retailers across Ethiopia.";

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
        eyebrow={`Portfolio · ${workProjects.length} projects · ${liveCount} live`}
        title={
          <>
            Work we&apos;ve <span className="accent text-brand">shipped and are shipping.</span>
          </>
        }
        description="Websites, mobile apps and enterprise platforms for hospitals, restaurants, transport operators, schools, NGOs and retailers. Screens of internal systems use demo data, as noted on each project."
      />

      <Section tone="white">
        <WorkFilter
          filters={[
            ...industries.map((industry) => ({ slug: industry.slug, label: industry.name })),
            { slug: "other", label: "Other" },
          ]}
          items={workProjects.map((project) => {
            const groups = industriesForProject(project.slug).map((industry) => industry.slug);
            return {
              key: project.slug,
              groups: groups.length ? groups : ["other"],
              card: <ProjectCard project={project} />,
            };
          })}
        />
      </Section>

      <Section tone="ink" id="platforms">
        <SectionHeader
          eyebrow="Enterprise platforms"
          title={
            <>
              Systems we build <span className="accent text-brand-2">and operate.</span>
            </>
          }
          description="Most of what we run for clients sits behind a login. Here's every system we build and operate — each has its own page with modules and FAQs."
        />
        <CardGrid tone="ink">
          {platforms.map((platform) => (
            <SystemCard key={platform.slug} platform={platform} tone="ink" />
          ))}
        </CardGrid>
      </Section>

      <CtaBand />
    </>
  );
}
