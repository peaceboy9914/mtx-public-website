"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState, type ReactNode } from "react";
import { buttonClass } from "@/components/ui/button";
import { IconArrowRight, IconClose, IconMenu } from "@/components/ui/icons";
import { navLinks, siteConfig } from "@/content/site";

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

/** The logo is passed in from the server so `hasImage` (fs) never runs on the client. */
export function SiteHeader({ logo }: { logo: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-xl">
        <div className="shell flex h-16 items-center gap-8">
          {logo}

          <nav aria-label="Main" className="hidden items-center gap-7 text-[14.5px] md:flex">
            {navLinks
              .filter((link) => link.href !== "/contact")
              .map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "relative py-1 transition-colors",
                      active ? "text-ink" : "text-ink/60 hover:text-ink",
                      "after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:bg-ink after:transition-transform after:duration-300",
                      active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
          </nav>

          <div className="ml-auto hidden md:block">
            <Link href="/contact" className={buttonClass("primary", "px-5 py-2.5 text-[14px]")}>
              Start a project
              <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
            className="ml-auto flex size-10 items-center justify-center rounded-full border border-ink/15 md:hidden"
          >
            {open ? <IconClose className="size-5" /> : <IconMenu className="size-5" />}
          </button>
        </div>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise become the containing block for this fixed panel. */}
      {open ? (
        <div id="mobile-nav" className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-paper md:hidden">
          <nav aria-label="Mobile" className="shell flex flex-col py-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className="flex items-baseline gap-4 border-b border-ink/10 py-5 text-[32px] font-semibold tracking-[-0.03em] aria-[current=page]:text-brand"
              >
                <span className="label text-ink/40">{String(index + 1).padStart(2, "0")}</span>
                {link.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-1 text-[15px] text-ink/65">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
