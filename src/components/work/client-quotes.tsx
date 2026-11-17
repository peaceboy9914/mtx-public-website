import Link from "next/link";
import { clientQuotes } from "@/content/clients";

/** Approved client quotes. Renders nothing until at least one quote is approved. */
export function ClientQuotes() {
  const quotes = clientQuotes.filter((quote) => quote.approved);
  if (quotes.length === 0) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {quotes.map((quote) => (
        <figure key={`${quote.name}-${quote.organization}`} className="reveal flex flex-col rounded-2xl border border-ink/10 bg-white p-7 sm:p-8">
          <blockquote className="flex-1 text-[18px] leading-relaxed text-ink/85">
            <p>&ldquo;{quote.quote}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-6 text-[15px]">
            <div className="font-semibold">{quote.name}</div>
            <div className="text-ink/60">
              {quote.role},{" "}
              {quote.slug ? (
                <Link href={`/work/${quote.slug}`} className="underline decoration-ink/25 underline-offset-4 hover:decoration-ink">
                  {quote.organization}
                </Link>
              ) : (
                quote.organization
              )}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
