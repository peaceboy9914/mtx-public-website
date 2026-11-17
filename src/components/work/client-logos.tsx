import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { clients } from "@/content/clients";

/** Client logo wall. Logos keep their own colours; each sits on a uniform tile so mixed backgrounds look intentional. */
export function ClientLogos({ className, compact }: { className?: string; compact?: boolean }) {
  if (compact) {
    return (
      <ul className={clsx("grid flex-1 grid-cols-5 items-center gap-x-6 gap-y-5 sm:grid-cols-10", className)}>
        {clients.map((client) => (
          <li key={client.name} className="flex justify-center">
            <Link
              href={client.slug ? `/work/${client.slug}` : "/about#clients"}
              title={client.name}
              className="block opacity-90 transition-opacity hover:opacity-100"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={64}
                height={64}
                className="h-12 w-auto object-contain sm:h-14"
              />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className={clsx("grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5", className)}>
      {clients.map((client) => {
        const tile = (
          <span className="flex aspect-[4/3] items-center justify-center rounded-xl border border-ink/10 bg-white p-5 transition-colors group-hover:border-ink/30">
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={180}
              height={135}
              className="max-h-full w-auto object-contain"
            />
          </span>
        );
        return (
          <li key={client.name}>
            {client.slug ? (
              <Link href={`/work/${client.slug}`} className="group block" title={client.name}>
                {tile}
              </Link>
            ) : (
              <span className="group block" title={client.name}>
                {tile}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
