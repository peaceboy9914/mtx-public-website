export const siteConfig = {
  name: "MTX Digital Technologies",
  legalName: "MTX Digital Technologies PLC",
  shortName: "MTX",
  tagline: "Your partner in digital transformation",
  description:
    "MTX Digital Technologies builds financial systems, school and manufacturing ERP, hospital platforms, shareholder registries, marketplaces and mobile apps for Ethiopian institutions — designed, built and maintained by one senior team in Addis Ababa.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mtxdigitaltechnologies.com",
  email: "hello@mtxdigitaltechnologies.com",
  phone: "+251 991 329 914",
  phoneHref: "+251991329914",
  location: "Addis Ababa, Ethiopia",
};

/** From the registered Google Maps listing embedded on the Contact page. */
export const address = {
  streetAddress: "Gabon St",
  addressLocality: "Addis Ababa",
  postalCode: "1000",
  addressCountry: "ET",
  countryName: "Ethiopia",
};

export const formattedAddress = `${address.streetAddress}, ${address.addressLocality} ${address.postalCode}, ${address.countryName}`;

export const founder = {
  name: "Mahdi Nurazaman",
  role: "Founder",
  linkedin: "https://www.linkedin.com/in/mahdi-nurazaman/",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/company/mtx-digital-technologies",
};

/** Google Maps Platform "Locator Plus" embed — hosted by Google, wired in verbatim. */
export const mapEmbedSrc = "https://storage.googleapis.com/maps-solutions-xp7mz3vu5w/locator-plus/xvi4/locator-plus.html";

/** "Get directions" links resolve to the registered address via a Google Maps search. */
export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.legalName}, ${formattedAddress}`
)}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Platforms", href: "/platforms" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerPlatformLinks = [
  { label: "Financial systems", href: "/platforms#finance" },
  { label: "Healthcare", href: "/platforms#healthcare" },
  { label: "Manufacturing ERP", href: "/platforms#manufacturing" },
  { label: "Shareholder management", href: "/platforms#shareholder" },
];

export const footerCompanyLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
