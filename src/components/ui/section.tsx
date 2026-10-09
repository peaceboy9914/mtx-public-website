import clsx from "clsx";
import type { ReactNode } from "react";

type Tone = "paper" | "paper-2" | "white" | "ink";

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  "paper-2": "bg-paper-2 text-ink",
  white: "bg-white text-ink",
  ink: "bg-ink text-paper",
};

export function Section({
  children,
  tone = "paper",
  id,
  className,
  innerClassName,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section id={id} className={clsx(tones[tone], "scroll-mt-20", className)}>
      <div className={clsx("shell py-20 sm:py-28", innerClassName)}>{children}</div>
    </section>
  );
}

/** Mono label with an optional index number, e.g. "01 — What we build". */
export function Eyebrow({ index, children, className }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <div className={clsx("label flex items-center gap-3 opacity-70", className)}>
      {index ? <span>{index}</span> : null}
      {index ? <span aria-hidden="true" className="h-px w-6 bg-current opacity-50" /> : null}
      <span>{children}</span>
    </div>
  );
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("reveal mb-12 grid gap-6 sm:mb-16 lg:grid-cols-12 lg:items-end", className)}>
      <div className="lg:col-span-7">
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <h2 className="mt-5 text-[clamp(32px,4.4vw,56px)] leading-[1.02] font-semibold tracking-[-0.035em]">
          {title}
        </h2>
      </div>
      {description || action ? (
        <div className="flex flex-col items-start gap-6 lg:col-span-5 lg:pb-2">
          {description ? <p className="max-w-md text-[16.5px] leading-relaxed opacity-70">{description}</p> : null}
          {action}
        </div>
      ) : null}
    </div>
  );
}
