"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { navLinks } from "@/lib/site";

export function SiteHeader({ logo }: { logo: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-40 border-b bg-white/85 backdrop-blur-xl transition-shadow duration-300 " +
        (scrolled ? "border-navy-900/8 shadow-[0_8px_24px_-18px_rgba(14,28,66,.35)]" : "border-transparent")
      }
    >
      <div className="wrap flex items-center gap-2 py-3.5">
        {logo}

        <nav className="ml-6 hidden items-center gap-1 rounded-full border border-navy-900/8 bg-navy-900/[0.02] p-1 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "relative rounded-full px-3.5 py-[7px] transition-colors " +
                  (active ? "text-white" : "text-navy-900/68 hover:text-navy-900")
                }
              >
                {active ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="gradient-cta absolute inset-0 rounded-full"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="group ml-auto hidden flex-none items-center gap-1.5 rounded-full gradient-cta px-5 py-[10px] text-[13.5px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(11,92,255,.7)] transition-[filter] hover:brightness-[1.08] md:inline-flex"
        >
          Start a project
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-10 w-10 flex-none items-center justify-center rounded-full border border-navy-900/10 md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M2 2l14 14M16 2L2 16" stroke="#0E1C42" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M1 4.5h16M1 9h16M1 13.5h16" stroke="#0E1C42" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-navy-900/8 bg-white md:hidden"
          >
            <nav className="wrap flex flex-col gap-1 py-4 text-sm font-medium">
              {navLinks.map((link) => {
                const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={
                      "rounded-lg px-3 py-2.5 " +
                      (active ? "bg-blue-600/8 font-semibold text-blue-600" : "text-navy-900/80 hover:bg-navy-900/[0.04]")
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg gradient-cta px-5 py-3 text-center text-[13.5px] font-semibold text-white"
              >
                Start a project
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
