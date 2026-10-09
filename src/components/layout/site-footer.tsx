import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrowUpRight, IconLinkedIn } from "@/components/ui/icons";
import { platforms } from "@/content/platforms";
import { directionsUrl, formattedAddress, navLinks, siteConfig, socialLinks } from "@/content/site";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper/65">
      <div className="shell">
        <div className="grid gap-12 border-b border-paper/10 py-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed">
              {siteConfig.tagline}. Custom software, ERP and platform engineering — built in Addis Ababa.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group mt-8 inline-flex items-center gap-2 text-[clamp(20px,2.4vw,28px)] font-medium tracking-[-0.02em] text-paper"
            >
              {siteConfig.email}
              <IconArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <FooterColumn title="Platforms" className="lg:col-span-3">
            {platforms.map((platform) => (
              <Link key={platform.id} href={`/platforms#${platform.id}`} className="hover:text-paper">
                {platform.shortName}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Company" className="lg:col-span-2">
            {navLinks.map((link) => (
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
