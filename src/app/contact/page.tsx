import { Badge } from "@/components/badge";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-heading";
import { IconLinkedIn, IconMapPin } from "@/components/icons";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { directionsUrl, founder, formattedAddress, mapEmbedSrc, siteConfig, socialLinks } from "@/lib/site";

const title = "Contact";
const description =
  "Tell MTX Digital Technologies the process that keeps breaking. A 45-minute call gets you a scope sketch and a price range.";

export const metadata = pageMetadata({ title, description, path: "/contact" });

export default function ContactPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
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
        <div className="wrap relative grid grid-cols-1 gap-14 py-20 pb-24 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Badge>Let&apos;s talk</Badge>
            <h1 className="mt-[22px] text-balance font-display text-[clamp(32px,4.2vw,46px)] font-bold leading-[1.08] tracking-[-.03em]">
              Tell us the process that keeps breaking
            </h1>
            <p className="mt-5 max-w-md text-pretty text-[16px] leading-[1.66] text-white/72">
              A 45-minute call with the engineers who would run the work. You leave with a scope sketch and a price
              range, whether or not you hire us.
            </p>

            <div className="mt-11 flex flex-col gap-6 border-t border-white/10 pt-7">
              <SectionEyebrow tone="dark">DIRECT DETAILS</SectionEyebrow>
              <div className="-mt-2 flex flex-col gap-3 text-[15px]">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-white hover:text-blue-300">
                  <IconMail /> {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-3 text-white/72 hover:text-blue-300">
                  <IconPhone /> {siteConfig.phone}
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/72 hover:text-blue-300"
                >
                  <IconMapPin className="h-[18px] w-[18px] flex-none" /> {formattedAddress} — get directions
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="flex items-center gap-3 text-white/72 hover:text-blue-300"
                >
                  <IconLinkedIn className="h-[18px] w-[18px] flex-none" /> MTX Digital Technologies on LinkedIn
                </a>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="flex items-center gap-3 text-white/72 hover:text-blue-300"
                >
                  <IconLinkedIn className="h-[18px] w-[18px] flex-none" /> {founder.name} ({founder.role}) on LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[18px] bg-white p-7 sm:p-9">
              <h2 className="font-display text-xl font-semibold text-navy-900">Start a project</h2>
              <p className="mt-1.5 text-sm text-navy-900/60">
                Fill this in and we&apos;ll get back to you within a couple of business days.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-16">
          <Reveal>
            <SectionEyebrow>FIND US</SectionEyebrow>
            <div className="mt-3.5 flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-[26px] font-bold tracking-[-.02em] text-navy-900">
                {formattedAddress}
              </h2>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-navy-900/14 px-4 py-2.5 text-[13.5px] font-semibold text-navy-900 hover:bg-surface"
              >
                <IconMapPin className="h-[16px] w-[16px]" /> Get directions
              </a>
            </div>
            <div className="mt-6 h-[420px] overflow-hidden rounded-2xl border border-navy-900/8">
              <iframe
                src={mapEmbedSrc}
                title="MTX Digital Technologies location map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 6.5l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none" aria-hidden="true">
      <path
        d="M6 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2L20 14.5V17.5a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 4.5 4.6 1.5 1.5 0 0 1 6 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
