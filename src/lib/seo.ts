import type { Metadata } from "next";
import { platforms } from "@/content/platforms";
import { services, type Faq } from "@/content/services";
import { address, founder, siteConfig, socialLinks } from "@/content/site";

/** Stable node ids so every page's JSON-LD points at the same organization entity. */
const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;

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
};

export function pageMetadata({ title, description, path, image, type = "website" }: PageSeoInput): Metadata {
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
      type,
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
    founder: {
      "@type": "Person",
      name: founder.name,
      url: founder.linkedin,
    },
    sameAs: [socialLinks.linkedin],
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
    name: founder.name,
    jobTitle: founder.role,
    url: founder.linkedin,
    sameAs: [founder.linkedin],
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

export function creativeWorkJsonLd(project: {
  name: string;
  description: string;
  path: string;
  image?: string;
  sector: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: `${siteConfig.url}${project.path}`,
    image: project.image ? `${siteConfig.url}${project.image}` : undefined,
    about: project.sector,
    creator: { "@id": ORG_ID },
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
