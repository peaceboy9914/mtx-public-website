import { LegalPage } from "@/components/legal/legal-page";
import { formattedAddress, siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

// Draft written from how this site actually works. Have it reviewed by counsel before relying on it.
const UPDATED = "2026-11-16";
const title = "Privacy policy";
const description = `How ${siteConfig.legalName} handles information you share through this website.`;

export const metadata = pageMetadata({ title, description, path: "/privacy" });

const mail = <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>;

export default function PrivacyPage() {
  return (
    <LegalPage
      title={title}
      path="/privacy"
      updated={UPDATED}
      intro={`${siteConfig.legalName} ("MTX", "we") runs this website. This page explains what information we receive through it, why, and what you can ask us to do with it.`}
      sections={[
        {
          heading: "Who is responsible",
          body: (
            <p>
              {siteConfig.legalName}, {formattedAddress}. Questions about this policy go to {mail} or{" "}
              {siteConfig.phone}.
            </p>
          ),
        },
        {
          heading: "What we collect",
          body: (
            <>
              <ul>
                <li>
                  <strong>Contact form:</strong> your name, email address, company (optional), project type and message.
                </li>
                <li>
                  <strong>Email and phone:</strong> whatever you choose to send us when you contact us directly.
                </li>
                <li>
                  <strong>Performance measurements:</strong> anonymous page-speed metrics (such as load time) collected by
                  our hosting provider&apos;s Speed Insights tool. It does not use cookies or identify you.
                </li>
                <li>
                  <strong>Server logs:</strong> our hosting provider records technical request data such as IP address,
                  browser type and the page requested, to run and secure the service.
                </li>
              </ul>
              <p>We don&apos;t run advertising trackers, and this site doesn&apos;t set its own cookies.</p>
            </>
          ),
        },
        {
          heading: "How we use it",
          body: (
            <p>
              To reply to your inquiry, prepare a proposal if you ask for one, and keep a record of our correspondence.
              We don&apos;t sell your information or add you to marketing lists without your consent.
            </p>
          ),
        },
        {
          heading: "Who else handles it",
          body: (
            <ul>
              <li>Our website hosting provider, which serves the site and its logs.</li>
              <li>Our email delivery provider, which forwards contact-form messages to our inbox.</li>
              <li>
                Google, for the map on the contact page. Google may set its own cookies when the map loads, under its own
                privacy policy.
              </li>
            </ul>
          ),
        },
        {
          heading: "How long we keep it",
          body: (
            <p>
              We keep inquiry correspondence for as long as we need it to respond and to keep ordinary business
              records. You can ask us to delete it sooner.
            </p>
          ),
        },
        {
          heading: "Your choices",
          body: (
            <p>
              Email {mail} to ask what we hold about you, to correct it, or to have it deleted. We&apos;ll respond
              within a reasonable time.
            </p>
          ),
        },
        {
          heading: "Changes",
          body: <p>If we change how we handle information, we&apos;ll update this page and its date.</p>,
        },
      ]}
    />
  );
}
