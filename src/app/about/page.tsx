import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-heading";
import { Stat } from "@/components/stat";
import { IconLinkedIn } from "@/components/icons";
import { breadcrumbJsonLd, pageMetadata, personJsonLd } from "@/lib/seo";
import { founder } from "@/lib/site";

const title = "About";
const description =
  "MTX Digital Technologies is a senior software team based in Addis Ababa, building financial systems, ERP, hospital platforms and mobile apps for Ethiopian institutions.";

export const metadata = pageMetadata({ title, description, path: "/about" });

const reasons = [
  {
    title: "ETB-native reporting",
    body: "Ledgers, dashboards and exports are built around Ethiopian Birr and local fiscal periods from the first sprint — not retrofitted later.",
  },
  {
    title: "Bilingual by default",
    body: "Amharic and Afaan Oromoo interfaces, and integrations like Telebirr, are standard parts of the build, not a change request.",
  },
  {
    title: "Built for the network you have",
    body: "Sites and apps are tuned for low-bandwidth mobile connections, because that's what most of our users are actually on.",
  },
  {
    title: "Compliance-aware by construction",
    body: "Role-based access and full audit trails are part of the data model, not a feature bolted on before an audit.",
  },
];

const principles = [
  {
    title: "One senior team, start to finish",
    body: "The engineers who scope the system are the ones who build and support it. No outsourced maintenance queue after launch.",
  },
  {
    title: "Systems your finance team can sign off on",
    body: "Every platform we ship carries an audit trail your accountants and auditors can actually follow.",
  },
  {
    title: "Scope moves, the date doesn't",
    body: "We work in two-week increments demoed to your team, so priorities can shift without the release date slipping.",
  },
  {
    title: "We stay after launch",
    body: "Monitoring, support hours and quarterly roadmap reviews — or a clean handover, if that's what you'd rather have.",
  },
];

export default function AboutPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }} />

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 80% 0%, rgba(47,155,255,.28), transparent 62%), radial-gradient(700px 500px at 0% 100%, rgba(11,92,255,.22), transparent 64%)",
          }}
        />
        <div className="wrap relative py-20 pb-[76px]">
          <Reveal>
            <Badge>About MTX</Badge>
            <h1 className="mt-[22px] max-w-2xl text-balance font-display text-[clamp(34px,4.4vw,52px)] font-bold leading-[1.08] tracking-[-.03em]">
              Software built in Ethiopia, for how Ethiopian institutions actually run
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-[17px] leading-[1.66] text-white/72">
              MTX Digital Technologies is a senior product team based in Addis Ababa. We design, build and maintain
              financial systems, school and manufacturing ERP, hospital platforms, shareholder registries,
              marketplaces and mobile apps — end to end, on one team.
            </p>
            <div className="mt-11 flex flex-wrap gap-8 border-t border-white/10 pt-6">
              <Stat value="40+" label="Systems delivered" />
              <Stat value="50K+" label="App downloads" />
              <Stat value="7" label="Industries served" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-20">
          <SectionEyebrow>WHY WE BUILD HERE</SectionEyebrow>
          <h2 className="mb-10 mt-3.5 max-w-xl font-display text-[clamp(26px,3.2vw,36px)] font-bold leading-[1.14] tracking-[-.028em] text-navy-900">
            Software that fits the place it runs
          </h2>
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <RevealItem key={reason.title} className="rounded-[14px] border border-navy-900/8 bg-surface p-6">
                <h3 className="font-display text-[17.5px] font-semibold text-navy-900">{reason.title}</h3>
                <p className="mt-2.5 text-sm leading-[1.6] text-navy-900/62">{reason.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(700px 420px at 82% 0%, rgba(47,155,255,.2), transparent 62%)" }}
        />
        <div className="wrap relative py-20">
          <SectionEyebrow tone="dark">HOW WE THINK ABOUT THE WORK</SectionEyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-balance font-display text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.12] tracking-[-.028em]">
            Principles that shape every build
          </h2>
          <RevealGroup className="mt-11 grid grid-cols-1 gap-px bg-white/12 sm:grid-cols-2">
            {principles.map((principle) => (
              <RevealItem key={principle.title} className="bg-navy-950 p-[26px]">
                <h3 className="font-display text-[17.5px] font-semibold text-white">{principle.title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-white/62">{principle.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-20">
          <SectionEyebrow>LEADERSHIP</SectionEyebrow>
          <h2 className="mb-8 mt-3.5 font-display text-[clamp(26px,3.2vw,36px)] font-bold leading-[1.14] tracking-[-.028em] text-navy-900">
            Founder
          </h2>
          <Reveal className="flex flex-wrap items-center gap-5 rounded-2xl border border-navy-900/8 bg-surface p-6 sm:p-7">
            <div className="gradient-cta flex h-14 w-14 flex-none items-center justify-center rounded-full font-display text-xl font-bold text-white">
              {founder.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display text-lg font-semibold text-navy-900">{founder.name}</div>
              <div className="text-sm text-navy-900/60">{founder.role}, MTX Digital Technologies</div>
            </div>
            <a
              href={founder.linkedin}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex flex-none items-center gap-2 rounded-lg border border-navy-900/14 px-4 py-2.5 text-[13.5px] font-semibold text-navy-900 hover:bg-white"
            >
              <IconLinkedIn className="h-[16px] w-[16px]" /> LinkedIn
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="wrap py-[72px]">
          <Reveal className="relative isolate grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[18px] p-11 sm:grid-cols-2">
            <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(120deg,#0B2A7A,#0B5CFF 55%,#2F9BFF)" }} />
            <div>
              <h2 className="text-balance font-display text-[clamp(26px,3vw,36px)] font-bold leading-[1.14] tracking-[-.028em] text-white">
                See what we&apos;ve shipped
              </h2>
              <p className="mt-3.5 max-w-[460px] text-[16px] leading-[1.65] text-white/85">
                Live products, real users — hospitals, transport operators, schools and retailers already running on
                MTX systems.
              </p>
            </div>
            <div className="flex max-w-[240px] flex-col gap-2.5 sm:ml-auto">
              <Button href="/work" variant="light" className="text-center">
                Browse the work
              </Button>
              <Button href="/contact" variant="secondary" className="text-center">
                Start a project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
