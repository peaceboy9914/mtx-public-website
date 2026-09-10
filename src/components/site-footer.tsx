import Link from "next/link";
import { Logo } from "./logo";
import { IconLinkedIn } from "./icons";
import { directionsUrl, footerCompanyLinks, footerPlatformLinks, formattedAddress, siteConfig, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-white/66">
      <div className="wrap grid grid-cols-2 gap-8 pt-[52px] pb-7 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2 lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-4 max-w-[280px] text-sm leading-[1.65]">
            Your partner in digital transformation. Custom software, ERP and platform engineering built in Ethiopia.
          </p>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="MTX Digital Technologies on LinkedIn"
            className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            <IconLinkedIn className="h-[18px] w-[18px]" />
          </a>
        </div>
        <div>
          <div className="text-xs font-semibold tracking-[.1em] text-white">PLATFORMS</div>
          <div className="mt-3.5 flex flex-col gap-2.5 text-sm">
            {footerPlatformLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold tracking-[.1em] text-white">COMPANY</div>
          <div className="mt-3.5 flex flex-col gap-2.5 text-sm">
            {footerCompanyLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold tracking-[.1em] text-white">CONTACT</div>
          <div className="mt-3.5 flex flex-col gap-2.5 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white">
              {siteConfig.phone}
            </a>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {formattedAddress} — get directions
            </a>
          </div>
        </div>
      </div>
      <div className="wrap flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-[18px] pb-9 text-[12.5px] text-white/42">
        <span>© {new Date().getFullYear()} MTX Digital Technologies</span>
        <span>{siteConfig.legalName}</span>
      </div>
    </footer>
  );
}
