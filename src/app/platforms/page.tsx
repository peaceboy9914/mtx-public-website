import Link from "next/link";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { BrowserFrame } from "@/components/browser-frame";
import { PhoneFrame } from "@/components/phone-frame";
import { Reveal } from "@/components/reveal";
import { getWorkProject } from "@/data/work";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Platforms";
const description =
  "The systems MTX builds and operates for Ethiopian institutions — e-commerce, healthcare, multi-company finance, school ERP, manufacturing ERP, shareholder management and civil-society case handling.";

export const metadata = pageMetadata({ title, description, path: "/platforms" });

type PanelSection = {
  id: string;
  category: string;
  tint: { bg: string; text: string };
  title: string;
  description: string;
  bullets: string[];
  workLink?: { label: string; href: string };
} & (
  | { kind: "image"; frame: "browser" | "phone"; src: string; alt: string }
  | { kind: "panel"; swatch: string }
);

export default function PlatformsPage() {
  const grandbirr = getWorkProject("grandbirr-market")!;
  const hospital = getWorkProject("grand-valley-hospital")!;
  const schoolErp = getWorkProject("school-erp")!;
  const mrpo = getWorkProject("mrpo")!;

  const sections: PanelSection[] = [
    {
      id: "ecommerce",
      category: "E-COMMERCE",
      tint: { bg: "rgba(11,92,255,.1)", text: "#0B5CFF" },
      title: "Multi-vendor commerce",
      description:
        "Retail, wholesale and neighbourhood-storefront shopping modes in one marketplace, with category browsing built for local sellers.",
      bullets: ["Retail, Jimla wholesale and Gebeya storefronts", "Vendor payouts and live order tracking", "Wishlists and category browsing"],
      workLink: { label: "See the Grandbirr Market case study", href: `/work/${grandbirr.slug}` },
      kind: "image",
      frame: "phone",
      src: grandbirr.image.src,
      alt: grandbirr.image.alt,
    },
    {
      id: "healthcare",
      category: "HEALTHCARE",
      tint: { bg: "rgba(15,58,56,.08)", text: "#0F3A38" },
      title: "Hospital information systems",
      description:
        "Triage queues, bed occupancy, lab turnaround, pharmacy stock and patient records across departments — plus the public-facing booking site patients actually use.",
      bullets: ["Department directory & appointment booking", "Triage queue and bed occupancy", "Lab orders and pharmacy stock"],
      workLink: { label: "See the Grand Valley Hospital case study", href: `/work/${hospital.slug}` },
      kind: "image",
      frame: "browser",
      src: hospital.image.src,
      alt: hospital.image.alt,
    },
    {
      id: "finance",
      category: "FINANCE",
      tint: { bg: "rgba(11,92,255,.1)", text: "#0B5CFF" },
      title: "Multi-company finance system",
      description:
        "General ledger, receivables, loan portfolio and ETB cash position across multiple companies, with a signed audit trail on every posting.",
      bullets: ["Multi-company consolidation", "ETB reporting with month-end close", "Signed audit trail on every posting"],
      workLink: { label: "Talk through a finance build", href: "/contact" },
      kind: "panel",
      swatch: "linear-gradient(135deg,#0B5CFF,#2F9BFF)",
    },
    {
      id: "school-erp",
      category: "EDUCATION · ERP",
      tint: { bg: "rgba(11,92,255,.1)", text: "#0B4ED6" },
      title: "School ERP",
      description:
        "A full academic and finance platform with separate super admin, academic admin, finance admin, teacher and parent roles.",
      bullets: ["Enrolment, grade books and timetables", "Fee collection in ETB", "Parent and teacher portals"],
      workLink: { label: "See the SchoolERP case study", href: `/work/${schoolErp.slug}` },
      kind: "image",
      frame: "browser",
      src: schoolErp.image.src,
      alt: schoolErp.image.alt,
    },
    {
      id: "manufacturing",
      category: "MANUFACTURING",
      tint: { bg: "rgba(90,63,192,.12)", text: "#5A3FC0" },
      title: "Manufacturing & operations ERP",
      description: "Production orders, bill of materials, warehouse movement, integration health and exception review.",
      bullets: ["Production orders & bill of materials", "Warehouse movement tracking", "Machine downtime tracking"],
      workLink: { label: "Talk through a manufacturing build", href: "/contact" },
      kind: "panel",
      swatch: "linear-gradient(135deg,#5A3FC0,#8B7BF0)",
    },
    {
      id: "shareholder",
      category: "CAPITAL",
      tint: { bg: "rgba(184,121,31,.12)", text: "#8A5A12" },
      title: "Shareholder management",
      description: "Share registry, subscription tracking, dividend runs, transfers and AGM voting records.",
      bullets: ["Share registries and capital calls", "Dividend runs and transfers", "AGM voting with a paper trail"],
      workLink: { label: "See the Nur Bus case study", href: "/work/nur-bus" },
      kind: "panel",
      swatch: "linear-gradient(135deg,#B8791F,#E8B34D)",
    },
    {
      id: "civil-society",
      category: "CIVIL SOCIETY",
      tint: { bg: "rgba(181,84,28,.14)", text: "#8A3F14" },
      title: "Case handling & rights protection",
      description:
        "A public advocacy and awareness site paired with migrant registration, case intake and partner or donor workflows behind the scenes.",
      bullets: ["Migrant registration & case intake", "Partner and donor portals", "Bilingual public advocacy site"],
      workLink: { label: "See the MRPO case study", href: `/work/${mrpo.slug}` },
      kind: "image",
      frame: "browser",
      src: mrpo.image.src,
      alt: mrpo.image.alt,
    },
  ];

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Platforms", path: "/platforms" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 78% 0%, rgba(47,155,255,.28), transparent 62%), radial-gradient(700px 500px at 4% 100%, rgba(11,92,255,.22), transparent 64%)",
          }}
        />
        <div className="wrap relative py-20 pb-[76px]">
          <Reveal>
            <Badge>Platforms we build and operate</Badge>
            <h1 className="mt-[22px] max-w-2xl text-balance font-display text-[clamp(34px,4.4vw,52px)] font-bold leading-[1.08] tracking-[-.03em]">
              The systems running behind our clients&apos; front doors
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-[17px] leading-[1.66] text-white/72">
              One shared foundation across every category: role-based access, full audit trails, ETB-native
              reporting and bilingual interfaces.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap flex flex-col gap-[70px] py-20">
          {sections.map((section, index) => (
            <Reveal key={section.id} id={section.id} className="scroll-mt-24">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <span
                    className="inline-block rounded-md px-[11px] py-[5px] text-[11px] font-semibold tracking-[.1em]"
                    style={{ background: section.tint.bg, color: section.tint.text }}
                  >
                    {section.category}
                  </span>
                  <h2 className="mt-3.5 font-display text-[26px] font-semibold tracking-[-.02em] text-navy-900">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-pretty text-[15.5px] leading-[1.66] text-navy-900/65">{section.description}</p>
                  <ul className="mt-5 flex flex-col gap-2 text-[14.5px] text-navy-900/70">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5">
                        <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {section.workLink ? (
                    <Link href={section.workLink.href} className="mt-5 inline-block text-[13.5px] font-semibold text-blue-600 hover:underline">
                      {section.workLink.label} →
                    </Link>
                  ) : null}
                </div>
                <div>
                  {section.kind === "image" ? (
                    section.frame === "phone" ? (
                      <div className="flex justify-center">
                        <PhoneFrame src={section.src} alt={section.alt} size="lg" />
                      </div>
                    ) : (
                      <BrowserFrame src={section.src} alt={section.alt} />
                    )
                  ) : (
                    <div className="rounded-2xl border border-navy-900/8 bg-surface p-8">
                      <span className="flex h-12 w-12 items-center justify-center rounded-[12px]" style={{ background: section.swatch }} />
                      <p className="mt-5 text-sm leading-[1.7] text-navy-900/60">
                        This platform runs as an internal system for clients today — screens are available to walk
                        through on a call.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-navy-900/7 bg-surface">
        <div className="wrap py-[72px]">
          <Reveal className="relative isolate grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[18px] p-11 sm:grid-cols-2">
            <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(120deg,#0B2A7A,#0B5CFF 55%,#2F9BFF)" }} />
            <div>
              <h2 className="text-balance font-display text-[clamp(26px,3vw,36px)] font-bold leading-[1.14] tracking-[-.028em] text-white">
                Need a platform that isn&apos;t listed here?
              </h2>
              <p className="mt-3.5 max-w-[460px] text-[16px] leading-[1.65] text-white/85">
                These are the categories we build most often — not the only ones. Tell us what you&apos;re running
                today.
              </p>
            </div>
            <div className="flex max-w-[240px] flex-col gap-2.5 sm:ml-auto">
              <Button href="/contact" variant="light" className="text-center">
                Book a discovery call
              </Button>
              <Button href="/services" variant="secondary" className="text-center">
                See services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
