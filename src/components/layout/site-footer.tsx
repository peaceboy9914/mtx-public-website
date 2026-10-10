import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrowUpRight, IconLinkedIn } from "@/components/ui/icons";
import { platforms } from "@/content/platforms";
import { services } from "@/content/services";
import { directionsUrl, formattedAddress, navLinks, siteConfig, socialLinks } from "@/content/site";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper/65">
      <div className="shell">
        <div className="flex flex-col gap-8 border-b border-paper/10 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed">
              {siteConfig.tagline}. A software development company in Addis Ababa building custom software, ERP, web and
              mobile applications for Ethiopian organisations.
            </p>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-2 text-[clamp(22px,3vw,40px)] font-medium tracking-[-0.03em] break-all text-paper"
          >
            {siteConfig.email}
            <IconArrowUpRight className="size-6 flex-none transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-b border-paper/10 py-16 lg:grid-cols-12">
          <FooterColumn title="Services" className="lg:col-span-4">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="hover:text-paper">
                {service.name}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Systems" className="lg:col-span-4">
            {platforms.map((platform) => (
              <Link key={platform.slug} href={`/platforms/${platform.slug}`} className="hover:text-paper">
                {platform.shortName}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Company" className="lg:col-span-2">
            {navLinks
              .filter((link) => link.href !== "/services" && link.href !== "/platforms")
              .map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-paper">
                  {link.label}
                </Link>
              ))}
          </FooterColumn>

          <FooterColumn title="Visit" className="lg:col-span-2">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              {formattedAddress}
            </a>
            <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-paper">
              {siteConfig.phone}
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-paper"
            >
              <IconLinkedIn className="size-4" /> LinkedIn
            </a>
          </FooterColumn>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-8 font-mono text-[12px] text-paper/45">
          <span>
            © {new Date().getFullYear()} {siteConfig.legalName}
          </span>
          <span>{siteConfig.location}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <div className="label text-paper/40">{title}</div>
      <div className="mt-5 flex flex-col gap-3 text-[14.5px]">{children}</div>
    </div>
  );
}
