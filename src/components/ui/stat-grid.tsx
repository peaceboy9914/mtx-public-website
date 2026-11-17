import clsx from "clsx";

/** Headline figures: two per row on small screens, all four in one row from `sm` up when `wide`. */
export function StatGrid({
  stats,
  wide,
  valueClassName = "text-[32px]",
  className,
}: {
  stats: { value: string; label: string }[];
  wide?: boolean;
  valueClassName?: string;
  className?: string;
}) {
  return (
    <dl className={clsx("grid grid-cols-2", wide && "sm:grid-cols-4", className)}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={clsx(
            "flex flex-col border-t border-ink/15 py-5 pr-4 odd:border-r even:pl-4",
            wide && "sm:border-r sm:pl-4 sm:first:pl-0 sm:last:border-r-0"
          )}
        >
          <dt className="label order-2 mt-1 text-ink/55">{stat.label}</dt>
          <dd className={clsx("font-semibold tracking-[-0.04em]", valueClassName)}>{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
