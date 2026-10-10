import Link from "next/link";
import { Fragment } from "react";

/** Visible breadcrumb trail; pair with breadcrumbJsonLd for the structured-data version. */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-2 text-ink/50">
      {items.map((item, index) => (
        <Fragment key={item.path}>
          {index > 0 ? <span aria-hidden="true">/</span> : null}
          {index === items.length - 1 ? (
            <span aria-current="page" className="text-ink">
              {item.name}
            </span>
          ) : (
            <Link href={item.path} className="hover:text-ink">
              {item.name}
            </Link>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
