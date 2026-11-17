import Image from "next/image";
import { Screenshot } from "@/components/media/screenshot";
import { Eyebrow } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { quoteForProject } from "@/content/clients";
import { isPublishable, type WorkProject } from "@/content/work";
import { hasImage } from "@/lib/images";

/**
 * Optional case-study sections. Each returns null when its data is missing, so a project with only the
 * basic fields still renders as a complete page and new detail appears as soon as it's added to work.ts.
 */
export function CaseStudyDetail({ project }: { project: WorkProject }) {
  const clientQuote = quoteForProject(project.slug);
  const testimonial = isPublishable(project.testimonial)
    ? project.testimonial
    : clientQuote
      ? { ...clientQuote, approved: true }
      : undefined;

  return (
    <>
      <Narrative project={project} />
      <Results project={project} />
      <Features project={project} />
      <TimelineAndStack project={project} />
      {testimonial ? <Quote testimonial={testimonial} /> : null}
      <Gallery project={project} />
    </>
  );
}

function Narrative({ project }: { project: WorkProject }) {
  const blocks = [
    { label: "The client", body: project.client?.about ? [project.client.about] : undefined },
    { label: "The challenge", body: project.challenge },
    { label: "Our approach", body: project.approach },
  ].filter((block): block is { label: string; body: string[] } => Boolean(block.body?.length));

  if (blocks.length === 0) return null;

  return (
    <section className="border-t border-ink/10 bg-paper">
      <div className="shell grid gap-14 py-16 sm:py-24">
        {blocks.map((block) => (
          <div key={block.label} className="reveal grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>{block.label}</Eyebrow>
            </div>
            <div className="space-y-5 lg:col-span-8">
              {block.body.map((paragraph, i) => (
                <p key={i} className="max-w-3xl text-[18px] leading-relaxed text-ink/75">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Results({ project }: { project: WorkProject }) {
  if (!project.results?.length) return null;
  const sources = project.results.filter((metric) => metric.source);

  return (
    <section className="bg-ink text-paper">
      <div className="shell py-16 sm:py-24">
        <Eyebrow>Results</Eyebrow>
        <dl className="reveal mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {project.results.map((metric, i) => (
            <div key={`${i}-${metric.label}`} className="flex flex-col-reverse border-t border-paper/20 pt-5">
              <dt className="mt-3 text-[15px] text-paper/70">{metric.label}</dt>
              <dd className="text-[clamp(40px,5vw,64px)] leading-none font-semibold tracking-[-0.04em]">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
        {sources.length ? (
          <p className="mt-10 text-[13px] text-paper/50">
            Sources: {sources.map((metric) => `${metric.label}: ${metric.source}`).join(" · ")}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function Features({ project }: { project: WorkProject }) {
  if (!project.features?.length) return null;

  return (
    <section className="border-t border-ink/10 bg-paper">
      <div className="shell py-16 sm:py-24">
        <Eyebrow>What we built</Eyebrow>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature, i) => (
            <div key={`${i}-${feature.title}`} className="reveal bg-paper p-7">
              <h3 className="text-[19px] font-semibold tracking-[-0.02em]">{feature.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineAndStack({ project }: { project: WorkProject }) {
  const hasTimeline = Boolean(project.timeline?.length);
  const hasStack = Boolean(project.stack?.length);
  if (!hasTimeline && !hasStack) return null;

  return (
    <section className="border-t border-ink/10 bg-paper-2">
      <div className="shell grid gap-14 py-16 sm:py-24 lg:grid-cols-12">
        {hasTimeline ? (
          <div className={hasStack ? "lg:col-span-8" : "lg:col-span-12"}>
            <Eyebrow>Timeline</Eyebrow>
            <ol className="mt-8 border-l border-ink/15">
              {project.timeline!.map((step, i) => (
                <li key={`${i}-${step.title}`} className="reveal relative pb-8 pl-8 last:pb-0">
                  <span aria-hidden="true" className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-brand" />
                  <div className="label text-ink/50">{step.period}</div>
                  <div className="mt-1 text-[18px] font-semibold tracking-[-0.02em]">{step.title}</div>
                  {step.body ? <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink/65">{step.body}</p> : null}
                </li>
              ))}
            </ol>
          </div>
        ) : null}
        {hasStack ? (
          <div className={hasTimeline ? "lg:col-span-4" : "lg:col-span-12"}>
            <Eyebrow>Stack &amp; integrations</Eyebrow>
            <ul className="mt-8 flex flex-wrap gap-2">
              {project.stack!.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function Quote({ testimonial }: { testimonial: NonNullable<WorkProject["testimonial"]> }) {
  const photo = testimonial.photo && hasImage(testimonial.photo.src) ? testimonial.photo : undefined;

  return (
    <section className="border-t border-ink/10 bg-paper">
      <figure className="reveal shell max-w-4xl py-16 sm:py-24">
        <blockquote className="text-[clamp(24px,3vw,36px)] leading-snug font-medium tracking-[-0.025em]">
          <p>&ldquo;{testimonial.quote}&rdquo;</p>
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          {photo ? (
            <Image src={photo.src} alt={photo.alt} width={56} height={56} className="size-14 rounded-full object-cover" />
          ) : null}
          <div>
            {testimonial.name ? <div className="font-semibold">{testimonial.name}</div> : null}
            <div className={testimonial.name ? "text-[15px] text-ink/60" : "font-semibold"}>
              {testimonial.role ? `${testimonial.role}, ` : null}
              {testimonial.organization}
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

function Gallery({ project }: { project: WorkProject }) {
  const shots = project.gallery?.filter((shot) => hasImage(shot.src));
  if (!shots?.length) return null;

  return (
    <section className="border-t border-ink/10 bg-paper-2">
      <div className="shell grid gap-10 py-16 sm:grid-cols-2 sm:py-24">
        {shots.map((shot) =>
          shot.frame === "phone" ? (
            <div key={shot.src} className="reveal mx-auto w-[60%] max-w-[300px]">
              <Screenshot frame="phone" src={shot.src} alt={shot.alt} sizes="300px" />
            </div>
          ) : (
            <Screenshot key={shot.src} src={shot.src} alt={shot.alt} sizes="(min-width: 640px) 50vw, 100vw" className="reveal" />
          )
        )}
      </div>
    </section>
  );
}
