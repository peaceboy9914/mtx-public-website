import Link from "next/link";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { BrowserFrame } from "@/components/browser-frame";
import { PhoneFrame } from "@/components/phone-frame";
import { Marquee } from "@/components/marquee";
import { WorkThumb } from "@/components/work-thumb";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionEyebrow, SectionHeading } from "@/components/section-heading";
import { Stat } from "@/components/stat";
import {
  IconBanknote,
  IconDevice,
  IconFactory,
  IconGraduationCap,
  IconHeartPulse,
  IconPieChart,
  IconShield,
} from "@/components/icons";
import { getWorkProject, workProjects } from "@/data/work";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

const sectors = [
  "Banking & finance",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Transport",
  "Retail",
  "Civil society",
  "Publishing",
];

const productLines = [
  {
    icon: IconBanknote,
    title: "Financial systems",
    description: "Ledgers, loan books, collections and multi-company ETB reporting with month-end close built in.",
    href: "/platforms#finance",
    cta: "Open live dashboard →",
    dark: true,
  },
  {
    icon: IconHeartPulse,
    title: "Healthcare systems",
    description: "Patient records, triage queues, lab orders, pharmacy stock and bed occupancy in one view.",
    href: "/platforms#healthcare",
    cta: "Open live dashboard →",
  },
  {
    icon: IconGraduationCap,
    title: "School ERP",
    description: "Enrolment, grade books, timetables, fee collection and parent portals with role-based access.",
    href: "/platforms#school-erp",
    cta: "See the build →",
  },
  {
    icon: IconFactory,
    title: "Manufacturing ERP",
    description: "Production orders, bill of materials, warehouse movements and machine downtime tracking.",
    href: "/platforms#manufacturing",
    cta: "Open live dashboard →",
  },
  {
    icon: IconPieChart,
    title: "Shareholder management",
    description: "Share registries, capital calls, dividend runs and AGM voting with a certified paper trail.",
    href: "/platforms#shareholder",
    cta: "Open live dashboard →",
  },
  {
    icon: IconShield,
    title: "Civil society & advocacy",
    description: "Public awareness sites paired with case intake, registration and partner or donor workflows.",
    href: "/platforms#civil-society",
    cta: "Open live dashboard →",
  },
  {
    icon: IconDevice,
    title: "Web & mobile products",
    description: "Marketplaces, booking platforms, author and corporate sites, and Play Store apps.",
    href: "/work",
    cta: "Browse the portfolio →",
  },
];

const workflow = [
  {
    phase: "WEEK 1–2",
    title: "Discovery",
    description: "Process mapping, system audit and a costed delivery plan. Fixed fee, fully creditable.",
  },
  {
    phase: "WEEK 3–5",
    title: "Architecture",
    description: "Data model, integration contracts and a working vertical slice in your environment.",
  },
  {
    phase: "ONGOING",
    title: "Build",
    description: "Two-week increments demoed to your team. Scope moves; the release date does not.",
  },
  {
    phase: "POST-LAUNCH",
    title: "Run",
    description: "Monitoring, support hours and quarterly roadmap reviews — or a clean handover.",
  },
];

export default function HomePage() {
  const hospital = getWorkProject("grand-valley-hospital")!;
  const grandbirr = getWorkProject("grandbirr-market")!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 76% 6%, rgba(47,155,255,.30), transparent 62%), radial-gradient(700px 500px at 4% 100%, rgba(11,92,255,.24), transparent 64%)",
          }}
        />
        <div className="pointer-events-none absolute -right-[140px] -top-[180px] h-[560px] w-[560px] rounded-full border border-white/6" />
        <div className="wrap relative grid grid-cols-1 items-center gap-12 py-20 pb-[92px] lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <Badge>{siteConfig.tagline}</Badge>
            <h1 className="mt-[22px] text-balance font-display text-[clamp(36px,4.8vw,58px)] font-bold leading-[1.05] tracking-[-.032em]">
              We build the software
              <br />
              <span className="gradient-text">Ethiopian institutions run on</span>
            </h1>
            <p className="mt-[22px] max-w-[520px] text-pretty text-[17px] leading-[1.66] text-white/72">
              Financial systems, school and manufacturing ERP, hospital platforms, shareholder registries,
              marketplaces and mobile apps — designed, built and maintained by one senior team.
            </p>
            <div className="mt-[30px] flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">
                Start a project
              </Button>
              <Button href="/work" variant="secondary">
                See our work
              </Button>
            </div>
            <div className="mt-11 flex flex-wrap gap-8 border-t border-white/10 pt-6">
              <Stat value="40+" label="Systems delivered" />
              <Stat value="50K+" label="App downloads" />
              <Stat value="7" label="Industries served" />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative pb-10">
            <div className="ml-auto w-full max-w-[660px]">
              <BrowserFrame src={hospital.image.src} alt={hospital.image.alt} priority />
            </div>
            <div className="absolute bottom-0 left-0">
              <PhoneFrame src={grandbirr.image.src} alt="Grandbirr Market mobile app" priority />
            </div>
            <div className="absolute bottom-[18px] left-[128px] max-w-[150px] rounded-xl border border-white/14 bg-white/7 p-[10px_12px] backdrop-blur-md sm:bottom-[26px] sm:left-[180px] sm:max-w-none sm:p-[12px_15px]">
              <div className="text-[8.5px] font-medium tracking-[.1em] text-white/55 sm:text-[9.5px] sm:tracking-[.11em]">
                SHIPPED FOR CLIENTS
              </div>
              <div className="mt-1 text-[11.5px] font-semibold sm:mt-[5px] sm:text-[13.5px]">
                Web · Mobile · ERP · Dashboards
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sectors strip */}
      <section className="border-b border-navy-900/7 bg-white py-7">
        <div className="wrap mb-4 flex items-center gap-3">
          <span className="h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
          <span className="text-[11.5px] font-semibold tracking-[.14em] text-navy-900/45">SECTORS WE BUILD FOR</span>
        </div>
        <Marquee items={sectors} />
      </section>

      {/* What we build */}
      <section className="bg-surface">
        <div className="wrap py-20">
          <div className="mb-10 grid grid-cols-1 items-end gap-9 sm:grid-cols-2">
            <div>
              <SectionEyebrow>WHAT WE BUILD</SectionEyebrow>
              <h2 className="mt-3.5 text-balance font-display text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.12] tracking-[-.028em] text-navy-900">
                One engineering standard, everywhere we build
              </h2>
            </div>
            <p className="text-pretty text-[16px] leading-[1.66] text-navy-900/62">
              Every platform below is running in production today. Each one shares the same foundations:
              role-based access, full audit trails, Amharic and Afaan Oromoo interfaces, and reporting your finance
              team can sign off on.
            </p>
          </div>
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productLines.map((line) => (
              <RevealItem key={line.title}>
                <Link
                  href={line.href}
                  className={
                    "group block h-full rounded-[14px] p-[26px] transition-transform duration-200 hover:-translate-y-[3px] " +
                    (line.dark
                      ? "bg-navy-950 text-white"
                      : "border border-navy-900/8 bg-white text-navy-900 hover:border-blue-600/40 hover:shadow-[0_24px_44px_-26px_rgba(14,28,66,.4)]")
                  }
                >
                  <div
                    className={
                      "flex h-10 w-10 items-center justify-center rounded-[11px] text-white " +
                      (line.dark ? "gradient-cta" : "bg-navy-900")
                    }
                  >
                    <line.icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="mt-[18px] font-display text-[18.5px] font-semibold">{line.title}</h3>
                  <p className={"mt-[9px] text-sm leading-[1.6] " + (line.dark ? "text-white/65" : "text-navy-900/62")}>
                    {line.description}
                  </p>
                  <span
                    className={
                      "mt-3.5 inline-block text-[12.5px] font-semibold " +
                      (line.dark ? "text-blue-300" : "text-blue-600")
                    }
                  >
                    {line.cta}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Selected work */}
      <section className="bg-white">
        <div className="wrap py-20">
          <div className="mb-9 flex flex-wrap items-baseline gap-4">
            <div>
              <SectionEyebrow>SELECTED WORK</SectionEyebrow>
              <h2 className="mt-3.5 font-display text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.12] tracking-[-.028em] text-navy-900">
                Live products, real users
              </h2>
            </div>
            <Link
              href="/work"
              className="ml-auto rounded-lg border border-navy-900/14 px-5 py-3 text-[13.5px] font-semibold text-navy-900 hover:bg-surface"
            >
              View all projects
            </Link>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workProjects.map((project) => (
              <RevealItem key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-navy-900/8 bg-white transition-transform duration-200 hover:-translate-y-[3px] hover:shadow-[0_24px_44px_-26px_rgba(14,28,66,.4)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {project.frame === "phone" ? (
                      <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_15%,rgba(47,155,255,.28),transparent_60%)] bg-navy-950 py-5">
                        <PhoneFrame src={project.image.src} alt={project.image.alt} size="sm" />
                      </div>
                    ) : (
                      <WorkThumb src={project.image.src} alt={project.image.alt} />
                    )}
                    <span
                      className="absolute left-3.5 top-3.5 rounded-md px-2.5 py-1 text-[10.5px] font-semibold tracking-[.08em]"
                      style={{ background: project.categoryTint.bg, color: project.categoryTint.text }}
                    >
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[18px] font-semibold text-navy-900">{project.cardTitle}</h3>
                    <p className="mt-2 text-[13.5px] leading-[1.6] text-navy-900/62">{project.cardSummary}</p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* How we work */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(700px 420px at 82% 0%, rgba(47,155,255,.2), transparent 62%)" }}
        />
        <div className="wrap relative py-20">
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="A delivery rhythm you can plan around"
            tone="dark"
            className="max-w-[640px]"
          />
          <RevealGroup className="mt-11 grid grid-cols-1 gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => (
              <RevealItem key={step.phase} className="bg-navy-950 p-[26px]">
                <div className="text-xs font-semibold tracking-[.1em] text-blue-300">{step.phase}</div>
                <h3 className="mt-3 font-display text-[17.5px] font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-white/62">{step.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA banner */}
      <section className="border-t border-navy-900/7 bg-surface">
        <div className="wrap py-[72px]">
          <Reveal
            className="relative isolate grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[18px] p-11 sm:grid-cols-2"
            as="div"
          >
            <div
              className="absolute inset-0 -z-10"
              style={{ background: "linear-gradient(120deg,#0B2A7A,#0B5CFF 55%,#2F9BFF)" }}
            />
            <div className="pointer-events-none absolute right-[140px] -top-[90px] h-[300px] w-[300px] rounded-full border border-white/14" />
            <div>
              <h2 className="text-balance font-display text-[clamp(26px,3vw,36px)] font-bold leading-[1.14] tracking-[-.028em] text-white">
                Tell us the process that keeps breaking
              </h2>
              <p className="mt-3.5 max-w-[500px] text-[16px] leading-[1.65] text-white/85">
                A 45-minute call with the engineers who would run the work. You leave with a scope sketch and a
                price range, whether or not you hire us.
              </p>
            </div>
            <div className="flex max-w-[240px] flex-col gap-2.5 sm:ml-auto">
              <Button href="/contact" variant="light" className="text-center">
                Book a discovery call
              </Button>
              <Button href="/services" variant="secondary" className="text-center">
                See services &amp; pricing
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
