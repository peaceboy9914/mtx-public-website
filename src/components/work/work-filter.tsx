"use client";

import clsx from "clsx";
import { useState, type ReactNode } from "react";

export type FilterItem = { key: string; groups: string[]; card: ReactNode };

/** Sector chips over the project grid. Cards are rendered on the server and passed in, so they stay static HTML. */
export function WorkFilter({ filters, items }: { filters: { slug: string; label: string }[]; items: FilterItem[] }) {
  const [active, setActive] = useState("all");
  const counts = Object.fromEntries(filters.map((filter) => [filter.slug, items.filter((item) => item.groups.includes(filter.slug)).length]));
  const visible = active === "all" ? items : items.filter((item) => item.groups.includes(active));

  return (
    <>
      <div role="group" aria-label="Filter by industry" className="mb-12 flex flex-wrap gap-2">
        {[{ slug: "all", label: "All" }, ...filters].map((filter) => (
          <button
            key={filter.slug}
            type="button"
            aria-pressed={active === filter.slug}
            onClick={() => setActive(filter.slug)}
            className={clsx(
              "rounded-full border px-4 py-2 text-[14px] transition-colors",
              active === filter.slug ? "border-ink bg-ink text-paper" : "border-ink/15 bg-paper hover:border-ink"
            )}
          >
            {filter.label}
            <span className={clsx("ms-2 font-mono text-[12px]", active === filter.slug ? "text-paper/60" : "text-ink/40")}>
              {filter.slug === "all" ? items.length : counts[filter.slug]}
            </span>
          </button>
        ))}
      </div>
      <p aria-live="polite" className="sr-only">
        {visible.length} projects shown
      </p>
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {visible.map((item) => (
          <div key={item.key}>{item.card}</div>
        ))}
      </div>
    </>
  );
}
