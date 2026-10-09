import Link from "next/link";
import clsx from "clsx";
import { Screenshot } from "@/components/media/screenshot";
import { IconArrowUpRight } from "@/components/ui/icons";
import type { WorkProject } from "@/content/work";

/** Portfolio card. Phone projects sit on a tinted stage so they share the browser cards' aspect ratio. */
export function ProjectCard({ project, className }: { project: WorkProject; className?: string }) {
  return (
    <Link href={`/work/${project.slug}`} className={clsx("group reveal flex flex-col", className)}>
      <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-paper-2 transition-colors duration-300 group-hover:bg-ink">
        {project.platform === "mobile" ? (
          <div className="absolute inset-x-0 top-8 mx-auto w-[34%] transition-transform duration-500 group-hover:-translate-y-2">
            <Screenshot frame="phone" src={project.image.src} alt={project.image.alt} sizes="240px" />
          </div>
        ) : (
          <div className="absolute top-8 right-0 left-8 transition-transform duration-500 group-hover:-translate-y-2">
            <Screenshot
              src={project.image.src}
              alt={project.image.alt}
              sizes="(min-width: 1024px) 560px, 100vw"
              bleed
            />
          </div>
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <div className="label text-ink/55">{project.sector}</div>
          <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.02em]">{project.name}</h3>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink/65">{project.cardSummary}</p>
        </div>
        <span className="mt-1 flex size-10 flex-none items-center justify-center rounded-full border border-ink/15 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
          <IconArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
