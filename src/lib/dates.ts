/**
 * Date the general site content (services, systems, company pages) was last reviewed.
 * Bump it when that content changes meaningfully; individual items can override it with their own `updated`.
 */
export const SITE_CONTENT_UPDATED = "2026-11-17";

/** "17 November 2026" — the format used for visible "Last updated" lines. */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
