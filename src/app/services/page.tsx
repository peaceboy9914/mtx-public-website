import Link from "next/link";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-heading";
import { IconDevice, IconGlobe, IconLayers, IconSpark } from "@/components/icons";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Services";
const description =
  "Web applications, mobile apps, enterprise ERP and financial platforms, and AI solutions — designed, built and operated by MTX Digital Technologies in Addis Ababa.";

export const metadata = pageMetadata({ title, description, path: "/services" });

const services = [
  {
    id: "web",
    icon: IconGlobe,
    name: "Web applications",
    summary: "Marketing sites, customer portals and internal dashboards, built to load fast on real Ethiopian networks.",
    bullets: [
      "Next.js and React builds with strong Core Web Vitals",
      "SEO-first marketing sites and department microsites",
      "Admin dashboards and internal tooling",
      "Payment and messaging integrations (Telebirr, SMS)",
    ],
    workLinks: [
      { label: "Grand Valley Primary Hospital", href: "/work/grand-valley-hospital" },
      { label: "Nur Bus", href: "/work/nur-bus" },
    ],
  },
  {
    id: "mobile",
    icon: IconDevice,
    name: "Mobile applications",
    summary: "Android and iOS apps for marketplaces, booking and consumer products — built for offline-first, low-bandwidth use.",
    bullets: [
      "React Native builds shipped to Google Play and the App Store",
      "Multi-vendor marketplace and booking flows",
      "Offline reading, caching and background sync",
      "Amharic and Afaan Oromoo localization from day one",
    ],
    workLinks: [
      { label: "Grandbirr Market", href: "/work/grandbirr-market" },
      { label: "Ibsa Qur'aanaa", href: "/work/ibsa-quraanaa" },
    ],
  },
  {
    id: "enterprise",
    icon: IconLayers,
    name: "Enterprise systems",
    summary: "ERP, financial and shareholder platforms that your finance and operations teams can actually audit.",
    bullets: [
      "General ledgers, loan books and ETB reporting with month-end close",
      "School and manufacturing ERP with role-based access",
      "Shareholder registries, dividend runs and AGM voting",
      "Full audit trails on every posting and approval",
    ],
    workLinks: [{ label: "See all platforms", href: "/platforms" }],
  },
  {
    id: "ai",
    icon: IconSpark,
    name: "AI solutions",
    summary: "AI features layered into the systems we build or already run for you — not a bolt-on chatbot.",
    bullets: [
      "Document extraction for invoices, claims and registrations",
      "Anomaly detection on financial postings and inventory movement",
      "Natural-language reporting over your own operational data",
      "Workflow automation across the ERP and portals we maintain",
    ],
    workLinks: [{ label: "Talk through a use case", href: "/contact" }],
  },
];

export default function ServicesPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

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
            <Badge>What we deliver</Badge>
            <h1 className="mt-[22px] max-w-2xl text-balance font-display text-[clamp(34px,4.4vw,52px)] font-bold leading-[1.08] tracking-[-.03em]">
              How we help you run on{" "}
              <span className="gradient-text">better software</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-[17px] leading-[1.66] text-white/72">
              Web, mobile, enterprise systems and AI — built by one senior team that stays on after launch, instead
              of handing you off to a support queue.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-20">
          <div className="flex flex-col gap-16">
            {services.map((service, index) => (
              <Reveal key={service.id} id={service.id} className="scroll-mt-28">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_0.6fr]">
                  <div>
                    <div className="gradient-cta flex h-11 w-11 items-center justify-center rounded-[12px] text-white">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 font-display text-[28px] font-bold tracking-[-.02em] text-navy-900">
                      {service.name}
                    </h2>
                    <p className="mt-3 text-pretty text-[15.5px] leading-[1.66] text-navy-900/62">{service.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {service.workLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-[13.5px] font-semibold text-blue-600 hover:underline"
                        >
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-[12px] border border-navy-900/8 bg-surface p-5 text-[14px] leading-[1.55] text-navy-900/72"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < services.length - 1 ? <div className="mt-16 h-px w-full bg-navy-900/8" /> : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="wrap py-20">
          <SectionEyebrow>WHY MTX</SectionEyebrow>
          <h2 className="mb-10 mt-3.5 max-w-xl font-display text-[clamp(26px,3.2vw,36px)] font-bold leading-[1.14] tracking-[-.028em] text-navy-900">
            One team across the whole stack
          </h2>
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                title: "No handoffs",
                body: "The engineers who design the system are the ones who build and support it — no outsourced maintenance queue.",
              },
              {
                title: "Built bilingual",
                body: "Amharic and Afaan Oromoo interfaces, ETB reporting and Telebirr integration are standard, not a change request.",
              },
              {
                title: "Audit-ready by default",
                body: "Role-based access and full audit trails are part of every ERP and financial system we ship.",
              },
            ].map((item) => (
              <RevealItem key={item.title} className="rounded-[14px] border border-navy-900/8 bg-white p-6">
                <h3 className="font-display text-[17.5px] font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-[1.6] text-navy-900/62">{item.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-[72px]">
          <Reveal
            className="relative isolate grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[18px] p-11 sm:grid-cols-2"
          >
            <div
              className="absolute inset-0 -z-10"
              style={{ background: "linear-gradient(120deg,#0B2A7A,#0B5CFF 55%,#2F9BFF)" }}
            />
            <div>
              <h2 className="text-balance font-display text-[clamp(26px,3vw,36px)] font-bold leading-[1.14] tracking-[-.028em] text-white">
                Not sure which service fits?
              </h2>
              <p className="mt-3.5 max-w-[460px] text-[16px] leading-[1.65] text-white/85">
                Tell us the process that keeps breaking. A 45-minute call gets you a scope sketch and a price range.
              </p>
            </div>
            <div className="flex max-w-[240px] flex-col gap-2.5 sm:ml-auto">
              <Button href="/contact" variant="light" className="text-center">
                Book a discovery call
              </Button>
              <Button href="/platforms" variant="secondary" className="text-center">
                Explore platforms
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
