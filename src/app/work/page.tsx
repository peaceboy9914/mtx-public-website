import Link from "next/link";
import { BrowserFrame } from "@/components/browser-frame";
import { PhoneFrame } from "@/components/phone-frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-heading";
import { StatCompact } from "@/components/stat";
import { alsoDelivered, enterprisePlatforms, workProjects } from "@/data/work";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

const title = "Work in production";
const description =
  "Websites, mobile apps and enterprise platforms MTX has delivered for hospitals, transport operators, schools, manufacturers and retailers across Ethiopia.";

export const metadata = pageMetadata({ title, description, path: "/work" });

const websiteProjects = workProjects.filter((p) => p.frame === "browser");
const mobileProjects = workProjects.filter((p) => p.frame === "phone");

export default function WorkPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="bg-navy-950 text-white">
        <div className="wrap grid grid-cols-1 items-end gap-8 py-[66px] pb-[60px] sm:grid-cols-2">
          <Reveal>
            <SectionEyebrow tone="dark">PORTFOLIO</SectionEyebrow>
            <h1 className="mt-3.5 text-balance font-display text-[clamp(32px,4vw,48px)] font-bold leading-[1.08] tracking-[-.03em]">
              Work in production
            </h1>
          </Reveal>
          <p className="text-pretty text-[16px] leading-[1.66] text-white/70">
            Websites, mobile apps and enterprise platforms delivered for hospitals, transport operators, schools,
            manufacturers and retailers. Screens below are from live builds.
          </p>
        </div>
      </section>

      {/* Web platforms */}
      <section className="bg-white">
        <div className="wrap pb-5 pt-[72px]">
          <SectionEyebrow>WEB PLATFORMS</SectionEyebrow>
          <h2 className="mb-10 mt-3 font-display text-[clamp(26px,3.2vw,36px)] font-bold leading-[1.14] tracking-[-.028em] text-navy-900">
            Client websites and portals
          </h2>

          <div className="flex flex-col gap-[70px]">
            {websiteProjects.map((project, index) => (
              <Reveal key={project.slug}>
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                  <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                    <span
                      className="inline-block rounded-md px-[11px] py-[5px] text-[11px] font-semibold tracking-[.1em]"
                      style={{ background: project.categoryTint.bg, color: project.categoryTint.text }}
                    >
                      {project.category.toUpperCase()}
                    </span>
                    <h3 className="mt-3.5 font-display text-[26px] font-semibold tracking-[-.02em]">
                      <Link href={`/work/${project.slug}`} className="hover:text-blue-600">
                        {project.name}
                      </Link>
                    </h3>
                    <p className="mt-3 text-pretty text-[15.5px] leading-[1.66] text-navy-900/65">
                      {project.caseSummary}
                    </p>
                    <div className="mt-[18px] flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-navy-900/12 px-[11px] py-[6px] text-[12.5px] font-medium text-navy-900/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.domain ? (
                      <div className="mt-5 text-[13px] font-medium text-navy-900/45">{project.domain}</div>
                    ) : null}
                    <Link
                      href={`/work/${project.slug}`}
                      className="mt-5 inline-block text-[13.5px] font-semibold text-blue-600"
                    >
                      Read the case study →
                    </Link>
                  </div>
                  <div>
                    <BrowserFrame src={project.image.src} alt={project.image.alt} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="mt-[60px] bg-surface">
        <div className="wrap py-[72px]">
          <SectionEyebrow>MOBILE</SectionEyebrow>
          <h2 className="mb-10 mt-3 font-display text-[clamp(26px,3.2vw,36px)] font-bold leading-[1.14] tracking-[-.028em] text-navy-900">
            Apps shipped to the store
          </h2>
          <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {mobileProjects.map((project) => (
              <RevealItem key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="flex h-full flex-wrap items-center gap-6 rounded-[18px] border border-navy-900/8 bg-white p-[30px] hover:border-blue-600/30"
                >
                  <PhoneFrame src={project.image.src} alt={project.image.alt} size="lg" />
                  <div className="min-w-[200px] flex-1">
                    <div className="text-[11px] font-semibold tracking-[.12em] text-blue-600">
                      {project.category.toUpperCase()}
                    </div>
                    <h3 className="mt-2.5 font-display text-[21px] font-semibold">{project.cardTitle}</h3>
                    <p className="mt-2.5 text-[14.5px] leading-[1.62] text-navy-900/63">{project.caseSummary}</p>
                    {project.stats ? (
                      <div className="mt-[18px] flex flex-wrap gap-4 border-t border-navy-900/8 pt-4">
                        {project.stats.map((stat) => (
                          <StatCompact key={stat.label} value={stat.value} label={stat.label} />
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Enterprise platforms */}
      <section id="platforms" className="scroll-mt-[70px] bg-navy-950 text-white">
        <div className="wrap py-[76px]">
          <SectionEyebrow tone="dark">ENTERPRISE PLATFORMS</SectionEyebrow>
          <h2 className="mb-3 mt-3 font-display text-[clamp(26px,3.2vw,36px)] font-bold leading-[1.14] tracking-[-.028em]">
            Systems we build and operate
          </h2>
          <p className="mb-10 max-w-[620px] text-[15.5px] leading-[1.66] text-white/68">
            Our platforms are highlighted below by category. See the{" "}
            <Link href="/platforms" className="text-blue-300 hover:underline">
              Platforms page
            </Link>{" "}
            for the full breakdown of what each one does.
          </p>

          <RevealGroup className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {enterprisePlatforms.map((platform) => (
              <RevealItem key={platform.id}>
                <Link
                  href={`/platforms#${platform.id}`}
                  className="block h-full rounded-[14px] border border-white/14 bg-white/4 p-6 hover:border-blue-500/50 hover:bg-blue-500/12"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="h-[30px] w-[30px] rounded-lg" style={{ background: platform.swatch }} />
                    <span className="text-[11px] font-semibold tracking-[.11em] text-white/55">
                      {platform.category}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[19px] font-semibold text-white">{platform.name}</h3>
                  <p className="mt-2.5 text-sm leading-[1.6] text-white/65">{platform.description}</p>
                  <span className="mt-4 inline-block text-[12.5px] font-semibold text-blue-300">
                    View dashboard →
                  </span>
                </Link>
              </RevealItem>
            ))}
            <RevealItem>
              <div className="h-full rounded-[14px] border border-dashed border-white/22 p-6">
                <div className="text-[11px] font-semibold tracking-[.11em] text-white/50">ALSO DELIVERED</div>
                <ul className="mt-3.5 flex flex-col gap-2.5 text-sm text-white/72">
                  {alsoDelivered.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
