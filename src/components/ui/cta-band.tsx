import type { ReactNode } from "react";
import { ButtonLink } from "./button";

/** Closing call-to-action shared by every page. */
export function CtaBand({
  title = (
    <>
      Tell us the process that <span className="accent">keeps breaking.</span>
    </>
  ),
  description = "A 45-minute call with the engineers who would run the work. You leave with a scope sketch and a price range, whether or not you hire us.",
  primary = { label: "Book a discovery call", href: "/contact" },
  secondary,
}: {
  title?: ReactNode;
  description?: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden="true" className="brand-gradient absolute inset-x-0 top-0 h-1" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -bottom-56 size-[560px] rounded-full bg-brand/25 blur-[120px]"
      />
      <div className="shell relative grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-end">
        <h2 className="reveal text-[clamp(36px,5.6vw,76px)] leading-[1] font-semibold tracking-[-0.04em] lg:col-span-8">
          {title}
        </h2>
        <div className="reveal flex flex-col gap-8 lg:col-span-4">
          <p className="text-[17px] leading-relaxed text-paper/70">{description}</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={primary.href} variant="inverse">
              {primary.label}
            </ButtonLink>
            {secondary ? (
              <ButtonLink href={secondary.href} variant="outline-inverse" arrow={false}>
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
