import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";

export default function NotFound() {
  return (
    <section className="grid-paper border-b border-ink/10">
      <div className="shell py-28 sm:py-40">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-6 max-w-3xl text-[clamp(40px,7vw,92px)] leading-[0.98] font-semibold tracking-[-0.045em]">
          This page isn&apos;t <span className="accent text-brand">in production.</span>
        </h1>
        <p className="mt-8 max-w-lg text-[18px] leading-relaxed text-ink/70">
          The link may be old, or the page may have moved. Everything we&apos;ve shipped is on the work page.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/work" variant="outline" arrow={false}>
            See our work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
