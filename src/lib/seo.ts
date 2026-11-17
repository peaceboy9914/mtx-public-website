import type { Metadata } from "next";
import { platforms } from "@/content/platforms";
import { services, type Faq } from "@/content/services";
import { address, companyFacts, founder, googleBusiness, openingHours, siteConfig, socialLinks } from "@/content/site";

/** Stable node ids so every page's JSON-LD points at the same organization entity. */
const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;
const PERSON_ID = `${siteConfig.url}/about#founder`;

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  /**
   * A real screenshot or a route-generated `/…/opengraph-image` path. Pages that omit it fall back to the
   * root card explicitly, since a page-level `openGraph` would otherwise drop the inherited image.
   */
  image?: string;
  type?: "website" | "article";
  /** For type "article": ISO dates for open graph `article:published_time` / `article:modified_time`. */
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: PageSeoInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${siteConfig.shortName}`;
  const ogImage = image ?? "/opengraph-image";

  return {
    // `absolute` skips the root layout's "%s | MTX" template, which would double the suffix.
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      ...(type === "article" ? { type, publishedTime, modifiedTime, authors } : { type }),
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  const logo = `${siteConfig.url}/images/brand/mtx-logo.png`;

  return {
    "@context": "https://schema.org",
    // Organization + ProfessionalService: a services business at a real, physical Addis Ababa
    // address — the combined typing is what makes the site eligible for local search / map
    // features on top of the general org knowledge-panel signals.
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo,
    image: logo,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    areaServed: { "@type": "Country", name: "Ethiopia" },
    slogan: siteConfig.tagline,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      telephone: siteConfig.phoneHref,
      areaServed: "ET",
      availableLanguage: ["English", "Amharic", "Afaan Oromoo"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software development services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.name, url: `${siteConfig.url}/services/${service.slug}` },
      })),
    },
    founder: { "@type": "Person", "@id": PERSON_ID, name: founder.name, url: founder.linkedin },
    numberOfEmployees: { "@type": "QuantitativeValue", value: companyFacts.teamSize },
    sameAs: [socialLinks.linkedin, googleBusiness.profileUrl, ...(socialLinks.facebook ? [socialLinks.facebook] : [])],
    hasMap: googleBusiness.profileUrl,
    geo: { "@type": "GeoCoordinates", latitude: googleBusiness.coords.lat, longitude: googleBusiness.coords.lng },
    openingHoursSpecification: openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days.map((day) => `https://schema.org/${day}`),
      opens: slot.opens,
      closes: slot.closes,
    })),
    knowsAbout: [
      "Software development in Ethiopia",
      ...services.map((service) => service.name),
      ...platforms.map((platform) => platform.name),
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: founder.name,
    jobTitle: founder.role,
    description: founder.bio.join(" "),
    image: `${siteConfig.url}${founder.photo.src}`,
    url: founder.linkedin,
    sameAs: [founder.linkedin, founder.facebook],
    worksFor: { "@id": ORG_ID },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

const abs = (path: string) => (path.startsWith("http") ? path : `${siteConfig.url}${path}`);

/**
 * A case study as an Article published by MTX. `about` points at the client organisation and, for
 * products, at the SoftwareApplication node on the same page.
 */
export function caseStudyJsonLd(input: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  sector: string;
  keywords?: string[];
  datePublished: string;
  dateModified?: string;
  clientName?: string;
  softwareId?: string;
}) {
  const url = abs(input.path);
  const about: object[] = [];
  if (input.clientName) about.push({ "@type": "Organization", name: input.clientName });
  if (input.softwareId) about.push({ "@id": input.softwareId });
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: url,
    image: input.image ? abs(input.image) : undefined,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    articleSection: "Case studies",
    keywords: input.keywords?.length ? input.keywords.join(", ") : undefined,
    about: about.length ? about : input.sector,
    inLanguage: "en",
  };
}

/** A product or published app, credited to MTX. No ratings or prices: only facts the site can back up. */
export function softwareApplicationJsonLd(input: {
  path: string;
  name: string;
  description: string;
  category: string;
  os: string;
  image?: string;
  url?: string;
  inLanguage?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": input.os.toLowerCase().includes("android") ? ["SoftwareApplication", "MobileApplication"] : "SoftwareApplication",
    "@id": `${abs(input.path)}#software`,
    name: input.name,
    description: input.description,
    applicationCategory: input.category,
    operatingSystem: input.os,
    image: input.image ? abs(input.image) : undefined,
    url: input.url,
    inLanguage: input.inLanguage,
    creator: { "@id": ORG_ID },
  };
}

/** The company facts page: an AboutPage whose subject is the organization node. */
export function factsPageJsonLd(input: { name: string; description: string; path: string; dateModified: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: input.name,
    description: input.description,
    url: abs(input.path),
    about: { "@id": ORG_ID },
    mainEntity: { "@id": ORG_ID },
    dateModified: input.dateModified,
    inLanguage: "en",
  };
}

/** A blog post with a named author. */
export function blogPostingJsonLd(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorIsFounder: boolean;
  image?: string;
  keywords?: string[];
}) {
  const url = abs(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: url,
    image: input.image ? abs(input.image) : undefined,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: input.authorIsFounder ? { "@id": PERSON_ID } : { "@type": "Organization", name: input.authorName, url: siteConfig.url },
    publisher: { "@id": ORG_ID },
    keywords: input.keywords?.length ? input.keywords.join(", ") : undefined,
    inLanguage: "en",
  };
}

/** A service or system landing page, attributed to the MTX organization node. */
export function serviceJsonLd(input: { name: string; serviceType: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: `${siteConfig.url}${input.path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Ethiopia" },
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function itemListJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${siteConfig.url}${item.path}`,
    })),
  };
}
