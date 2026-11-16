# MTX Digital Technologies website

Marketing site for [MTX Digital Technologies PLC](https://mtxdigitaltechnologies.com), a software development company in Addis Ababa, Ethiopia.

Built with Next.js 16 (App Router), React 19 and Tailwind CSS 4. Every page is statically generated from the content files below.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # also type-checks
```

> Next.js 16 differs from older versions. Read the bundled docs in `node_modules/next/dist/docs/` before changing framework code (see `AGENTS.md`).

## Where things live

| Path | What it holds |
| --- | --- |
| `src/content/site.ts` | Company name, contact details, founder, headline stats and company facts |
| `src/content/company.ts` | Track record (drives the sector list), principles, delivery process |
| `src/content/services.ts` | Service pages (`/services/[slug]`) with FAQs |
| `src/content/platforms.ts` | System pages (`/platforms/[slug]`) |
| `src/content/work.ts` | Case studies (`/work/[slug]`) |
| `src/lib/seo.ts` | Page metadata and JSON-LD helpers |
| `src/app/llms.txt`, `sitemap.ts`, `robots.ts` | Machine-readable summaries for search engines and AI assistants |
| `public/images/work/` | Case-study screenshots (a labelled placeholder shows until a file exists) |

### Adding to a case study

Everything beyond the basics in `WorkProject` is optional: client, year, duration, status, services, challenge, approach, features, stack, timeline, results, testimonial and gallery. Each section of the case-study page appears only once its data is filled in.

Content rules:

- Every result metric gets a `source`.
- A testimonial is shown only when `approved: true`, which should be set only once the client has agreed in writing.
- Don't publish client logos without permission.

## Contact form

The form posts to a server action (`src/app/contact/actions.ts`) with validation, a honeypot field, a timing check and a basic rate limit. It sends email through [Resend](https://resend.com) when these are set:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Enables sending. Without it, the form opens the visitor's email app pre-filled instead. |
| `CONTACT_TO_EMAIL` | Inbox for inquiries (defaults to the site email) |
| `CONTACT_FROM_EMAIL` | Sender on a domain verified in Resend (defaults to `noreply@<site domain>`) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (defaults to the production domain) |

## Deployment

Deployed on Vercel. CI (`.github/workflows/ci.yml`) runs lint and build on every pull request and on pushes to `main`.
