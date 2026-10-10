import type { ReactNode } from "react";
import { riseDelay } from "@/lib/motion";
import { Breadcrumbs } from "./breadcrumbs";
import { Eyebrow } from "./section";

/** Top-of-page header shared by every inner page. */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  breadcrumbs?: { name: string; path: string }[];
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="grid-paper relative border-b border-ink/10">
      <div className="shell pt-16 pb-16 sm:pt-24 sm:pb-20">
        {breadcrumbs ? (
          <div className="rise mb-10">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}
        <div className="rise">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1
          className="rise mt-6 max-w-5xl text-[clamp(40px,7vw,92px)] leading-[0.98] font-semibold tracking-[-0.045em]"
          style={riseDelay(80)}
        >
          {title}
        </h1>
        {description ? (
          <p
            className="rise mt-8 max-w-2xl text-[18px] leading-relaxed text-ink/70 sm:text-[19px]"
            style={riseDelay(160)}
          >
            {description}
          </p>
        ) : null}
        {children ? (
          <div className="rise mt-10" style={riseDelay(240)}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
