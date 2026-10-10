import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import { Screenshot } from "@/components/media/screenshot";
import { IconArrowRight } from "@/components/ui/icons";
import type { Platform } from "@/content/platforms";
import type { Service } from "@/content/services";
import { requireWorkProject } from "@/content/work";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Grid of link cards separated by hairlines; pass `tone="ink"` on dark sections.
 * Lines come from each card's right/bottom border so a part-filled last row leaves clean empty space.
 */
export function CardGrid({ children, tone = "paper", className }: { children: ReactNode; tone?: "paper" | "ink"; className?: string }) {
  return (
    <div
      className={clsx(
        "grid border-t border-l sm:grid-cols-2 lg:grid-cols-3",
        tone === "ink" ? "border-paper/15" : "border-ink/15",
        className
      )}
    >
      {children}
    </div>
  );
}

function CatalogCard({
  href,
  index,
  label,
  title,
  body,
  tone = "paper",
}: {
  href: string;
  index?: number;
  label: string;
  title: string;
  body: string;
  tone?: "paper" | "ink";
}) {
  const ink = tone === "ink";
  return (
    <Link
      href={href}
      className={clsx(
        "group reveal flex flex-col border-r border-b p-6 transition-colors sm:p-8",
        ink ? "border-paper/15 hover:bg-ink-2" : "border-ink/15 hover:bg-white"
      )}
    >
      <div className={clsx("label flex gap-3", ink ? "text-brand-2" : "text-ink/50")}>
        {index !== undefined ? <span>{pad(index + 1)}</span> : null}
        <span>{label}</span>
      </div>
      <h3
        className={clsx(
          "mt-5 text-[22px] leading-tight font-semibold tracking-[-0.02em] transition-colors",
          ink ? "text-paper" : "group-hover:text-brand"
        )}
      >
        {title}
      </h3>
      <p className={clsx("mt-3 flex-1 text-[15px] leading-relaxed", ink ? "text-paper/60" : "text-ink/65")}>{body}</p>
      <IconArrowRight
        className={clsx(
          "mt-6 size-5 transition-all group-hover:translate-x-1",
          ink ? "text-paper/40 group-hover:text-paper" : "text-ink/35 group-hover:text-brand"
        )}
      />
    </Link>
  );
}

export function ServiceCard({ service, index, tone }: { service: Service; index?: number; tone?: "paper" | "ink" }) {
  return (
    <CatalogCard
      href={`/services/${service.slug}`}
      index={index}
      label={service.category}
      title={service.name}
      body={service.summary}
      tone={tone}
    />
  );
}

export function SystemCard({ platform, index, tone }: { platform: Platform; index?: number; tone?: "paper" | "ink" }) {
  return (
    <CatalogCard
      href={`/platforms/${platform.slug}`}
      index={index}
      label={platform.sector}
      title={platform.name}
      body={platform.summary}
      tone={tone}
    />
  );
}

/** Screenshot from the linked case study, or a module manifest for internal systems with no public screens. */
export function SystemVisual({ platform, priority }: { platform: Platform; priority?: boolean }) {
  const project = platform.caseStudy ? requireWorkProject(platform.caseStudy) : undefined;

  if (project?.platform === "mobile") {
    return (
      <div className="grid-paper flex justify-center overflow-hidden rounded-2xl bg-paper-2 px-6 pt-12">
        <Screenshot
          frame="phone"
          src={project.image.src}
          alt={project.image.alt}
          priority={priority}
          className="w-[52%] max-w-[260px] translate-y-6"
        />
      </div>
    );
  }
  if (project) {
    return <Screenshot src={project.image.src} alt={project.image.alt} url={project.domain} priority={priority} />;
  }
  return <ModuleManifest platform={platform} />;
}

function ModuleManifest({ platform }: { platform: Platform }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-ink p-8 text-paper sm:p-10">
      <div aria-hidden="true" className="brand-gradient absolute inset-x-0 top-0 h-1" />
      <div className="label flex justify-between gap-4 text-paper/50">
        <span className="truncate">mtx / {platform.slug}</span>
        <span className="flex flex-none items-center gap-2">
          <span className="size-1.5 rounded-full bg-emerald-400" /> In production
        </span>
      </div>
      <ul className="mt-10 font-mono text-[14px]">
        {platform.modules.slice(0, 6).map((module, index) => (
          <li key={module} className="flex gap-4 border-t border-paper/10 py-3.5">
            <span className="text-paper/35">{pad(index + 1)}</span>
            <span className="text-paper/85">{module}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-[14px] leading-relaxed text-paper/55">
        Runs as an internal system for clients — screens are available to walk through on a call.
      </p>
    </div>
  );
}
