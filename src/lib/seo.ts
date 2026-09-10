import type { Metadata } from "next";
import { address, founder, siteConfig, socialLinks } from "./site";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  /** Only pass when a real screenshot exists — otherwise the route's opengraph-image file convention is used. */
  image?: string;
  type?: "website" | "article";
};

export function pageMetadata({ title, description, path, image, type = "website" }: PageSeoInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${siteConfig.shortName}`;

  return {
    title: fullTitle,
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
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
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
    areaServed: "ET",
    founder: {
      "@type": "Person",
      name: founder.name,
      url: founder.linkedin,
    },
    sameAs: [socialLinks.linkedin, founder.linkedin],
    knowsAbout: [
      "Custom software development",
      "Enterprise resource planning",
      "Mobile app development",
      "Financial systems",
      "Healthcare information systems",
      "AI solutions",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en",
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
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
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
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
