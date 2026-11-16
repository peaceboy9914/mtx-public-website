import type { ReactNode } from "react";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { breadcrumbJsonLd } from "@/lib/seo";

export type LegalSection = { heading: string; body: ReactNode };

/** Shared layout for the privacy policy and terms pages. */
export function LegalPage({
  title,
  path,
  updated,
  intro,
  sections,
}: {
  title: string;
  path: string;
  /** ISO date, shown as "Last updated". */
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  const updatedLabel = new Date(updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: title, path },
        ])}
      />
      <PageHero eyebrow={`Last updated ${updatedLabel}`} title={title} description={intro} />
      <section className="bg-paper">
        <div className="shell py-16 sm:py-24">
          <div className="grid max-w-3xl gap-12">
            {sections.map((section, index) => (
              <div key={section.heading}>
                <h2 className="flex gap-4 text-[22px] font-semibold tracking-[-0.02em]">
                  <span className="label pt-1.5 text-ink/40">{String(index + 1).padStart(2, "0")}</span>
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[16.5px] leading-relaxed text-ink/75 [&_a]:underline [&_a]:decoration-ink/25 [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
