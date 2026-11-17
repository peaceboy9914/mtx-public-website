import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { clients } from "@/content/clients";

/** Client logo wall. Logos keep their own colours; each sits on a uniform tile so mixed backgrounds look intentional. */
export function ClientLogos({ className }: { className?: string }) {
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
