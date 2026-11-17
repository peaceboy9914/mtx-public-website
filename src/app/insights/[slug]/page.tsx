import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/ui/cta-band";
import { JsonLd } from "@/components/ui/json-ld";
import { Eyebrow } from "@/components/ui/section";
import { ProjectCard } from "@/components/work/project-card";
import { getPost, publishedPosts, readingMinutes } from "@/content/insights";
import { founder, siteConfig } from "@/content/site";
import { requireWorkProject } from "@/content/work";
import { formatDate } from "@/lib/dates";
import { riseDelay } from "@/lib/motion";
import { blogPostingJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/insights/${post.slug}`,
    type: "article",
    publishedTime: post.published,
    modifiedTime: post.updated ?? post.published,
    authors: [post.author === "founder" ? founder.name : siteConfig.name],
  });
}

export default async function InsightPage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/insights/${post.slug}`;
  const byFounder = post.author === "founder";
  const authorName = byFounder ? founder.name : siteConfig.name;
  const updated = post.updated && post.updated !== post.published ? post.updated : undefined;
  const related = (post.relatedWork ?? []).map(requireWorkProject);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: post.title, path },
          ]),
          blogPostingJsonLd({
            headline: post.title,
            description: post.description,
            path,
            datePublished: post.published,
            dateModified: post.updated,
            authorName,
            authorIsFounder: byFounder,
            keywords: post.tags,
          }),
        ]}
      />

      <article>
        <header className="grid-paper border-b border-ink/10">
          <div className="shell max-w-4xl pt-10 pb-14 sm:pt-14 sm:pb-16">
            <nav aria-label="Breadcrumb" className="rise label flex flex-wrap items-center gap-2 text-ink/50">
              <Link href="/insights" className="hover:text-ink">
                Insights
              </Link>
            </nav>
            <div className="rise mt-10">
              <Eyebrow>{post.tags.join(" · ")}</Eyebrow>
            </div>
            <h1
              className="rise mt-6 text-[clamp(34px,5vw,64px)] leading-[1.02] font-semibold tracking-[-0.04em]"
              style={riseDelay(80)}
            >
              {post.title}
            </h1>
            <p className="rise mt-6 max-w-2xl text-[18px] leading-relaxed text-ink/70" style={riseDelay(160)}>
              {post.description}
            </p>
            <div className="rise mt-8 flex items-center gap-4" style={riseDelay(240)}>
              {byFounder ? (
                <Image
                  src={founder.photo.src}
                  alt={founder.photo.alt}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
              ) : null}
              <div className="text-[14.5px]">
                <div className="font-semibold">
                  {byFounder ? (
                    <Link href="/about" className="hover:underline">
                      {authorName}
                    </Link>
                  ) : (
                    authorName
                  )}
                </div>
                <div className="text-ink/55">
                  <time dateTime={post.published}>{formatDate(post.published)}</time> · {readingMinutes(post)} min read
                  {updated ? (
                    <>
                      {" "}
                      · Updated <time dateTime={updated}>{formatDate(updated)}</time>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-paper">
          <div className="shell max-w-3xl space-y-10 py-14 sm:py-20">
            {post.sections.map((section, index) => (
              <section key={section.heading ?? index}>
                {section.heading ? (
                  <h2 className="text-[clamp(22px,2.4vw,28px)] font-semibold tracking-[-0.025em]">{section.heading}</h2>
                ) : null}
                <div className={section.heading ? "mt-4 space-y-5" : "space-y-5"}>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[17.5px] leading-[1.75] text-ink/80">
                      {paragraph}
                    </p>
                  ))}
                  {section.list ? (
                    <ul className="ml-5 list-disc space-y-2 text-[17.5px] leading-[1.7] text-ink/80">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="border-t border-ink/10 bg-paper-2">
          <div className="shell py-14 sm:py-20">
            <Eyebrow>The project behind this article</Eyebrow>
            <div className="mt-8 grid gap-x-8 gap-y-16 md:grid-cols-2">
              {related.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        title={
          <>
            Planning something <span className="accent">similar?</span>
          </>
        }
        description="Tell us what you're running today and where it breaks. We'll scope it on a call."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "More insights", href: "/insights" }}
      />
    </>
  );
}
