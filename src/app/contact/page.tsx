import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact/contact-form";
import { buttonClass } from "@/components/ui/button";
import { IconLinkedIn, IconMail, IconMapPin, IconPhone } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Eyebrow } from "@/components/ui/section";
import {
  directionsUrl,
  formattedAddress,
  founder,
  mapEmbedSrc,
  siteConfig,
  socialLinks,
} from "@/content/site";
import { riseDelay } from "@/lib/motion";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const title = "Contact";
const description =
  "Tell MTX Digital Technologies the process that keeps breaking. A 45-minute call gets you a scope sketch and a price range.";

export const metadata = pageMetadata({ title, description, path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="grid-paper border-b border-ink/10">
        <div className="shell grid gap-14 pt-16 pb-20 sm:pt-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rise">
              <Eyebrow>Let&apos;s talk</Eyebrow>
            </div>
            <h1
              className="rise mt-6 text-[clamp(40px,6vw,80px)] leading-[0.98] font-semibold tracking-[-0.045em]"
              style={riseDelay(80)}
            >
              Tell us the process that <span className="accent text-brand">keeps breaking.</span>
            </h1>
            <p className="rise mt-8 max-w-md text-[18px] leading-relaxed text-ink/70" style={riseDelay(160)}>
              A 45-minute call with the engineers who would run the work. You leave with a scope sketch and a price
              range, whether or not you hire us.
            </p>

            <ul className="rise mt-12 border-t border-ink/15 text-[15.5px]" style={riseDelay(240)}>
              <ContactRow icon={<IconMail className="size-[18px]" />} href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </ContactRow>
              <ContactRow icon={<IconPhone className="size-[18px]" />} href={`tel:${siteConfig.phoneHref}`}>
                {siteConfig.phone}
              </ContactRow>
              <ContactRow icon={<IconMapPin className="size-[18px]" />} href={directionsUrl} external>
                {formattedAddress}
              </ContactRow>
              <ContactRow icon={<IconLinkedIn className="size-[18px]" />} href={socialLinks.linkedin} external>
                MTX Digital Technologies on LinkedIn
              </ContactRow>
              <ContactRow icon={<IconLinkedIn className="size-[18px]" />} href={founder.linkedin} external>
                {founder.name} ({founder.role})
              </ContactRow>
            </ul>
          </div>

          <div className="rise lg:col-span-6 lg:col-start-7" style={riseDelay(200)}>
            <div className="rounded-2xl border border-ink/12 bg-white p-6 shadow-[0_40px_80px_-50px_rgba(11,22,51,0.5)] sm:p-10">
              <h2 className="text-[26px] font-semibold tracking-[-0.025em]">Start a project</h2>
              <p className="mt-2 text-[15px] text-ink/60">
                Fill this in and we&apos;ll get back to you within a couple of business days.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="shell py-20">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Find us</Eyebrow>
              <h2 className="mt-4 text-[clamp(26px,3vw,38px)] font-semibold tracking-[-0.03em]">{formattedAddress}</h2>
            </div>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={buttonClass("outline")}>
              <IconMapPin className="size-4" /> Get directions
            </a>
          </div>
          <div className="reveal mt-10 h-[440px] overflow-hidden rounded-2xl border border-ink/12 bg-paper-2">
            <iframe
              src={mapEmbedSrc}
              title="MTX Digital Technologies location map"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  href,
  external,
  children,
}: {
  icon: ReactNode;
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <li className="border-b border-ink/15">
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="flex items-center gap-4 py-4 text-ink/80 transition-colors hover:text-brand"
      >
        <span className="text-ink/45">{icon}</span>
        {children}
      </a>
    </li>
  );
}
