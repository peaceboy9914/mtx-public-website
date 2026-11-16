import Link from "next/link";
import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

// Draft. Have it reviewed by counsel before relying on it.
const UPDATED = "2026-11-16";
const title = "Terms of use";
const description = `Terms for using the ${siteConfig.name} website.`;

export const metadata = pageMetadata({ title, description, path: "/terms" });

export default function TermsPage() {
  return (
    <LegalPage
      title={title}
      path="/terms"
      updated={UPDATED}
      intro={`These terms cover your use of this website, operated by ${siteConfig.legalName}. By using the site you agree to them.`}
      sections={[
        {
          heading: "About the information here",
          body: (
            <p>
              The site describes our services, systems and past work for general information. It isn&apos;t an offer
              or a quote. Scope, price and timelines for any project are set in a separate written agreement.
            </p>
          ),
        },
        {
          heading: "Our content",
          body: (
            <p>
              Text, design, logos and code on this site belong to {siteConfig.legalName} unless stated otherwise.
              Screenshots of client projects appear with our clients&apos; permission and remain theirs. Please
              don&apos;t copy or republish them without asking.
            </p>
          ),
        },
        {
          heading: "Links to other sites",
          body: (
            <p>
              We link to client websites, app stores and other services. We don&apos;t control them and aren&apos;t
              responsible for their content or practices.
            </p>
          ),
        },
        {
          heading: "Availability",
          body: (
            <p>
              We work to keep the site accurate and online, but we provide it as it is and can&apos;t guarantee it
              will always be available or error-free.
            </p>
          ),
        },
        {
          heading: "Privacy",
          body: (
            <p>
              How we handle information you send us is covered in our <Link href="/privacy">privacy policy</Link>.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
