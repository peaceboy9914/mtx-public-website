import type { Faq } from "@/content/services";

/** Native <details> accordion: no client JS, and answers stay in the HTML for crawlers. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="border-t border-ink/15">
      {faqs.map((faq) => (
        <details key={faq.q} className="group reveal border-b border-ink/15">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[19px] font-medium tracking-[-0.015em] [&::-webkit-details-marker]:hidden">
            {faq.q}
            <span
              aria-hidden="true"
              className="mt-1 flex size-7 flex-none items-center justify-center rounded-full border border-ink/20 font-mono text-[14px] transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-7 text-[16px] leading-relaxed text-ink/70">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
