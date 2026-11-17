"use server";

import { headers } from "next/headers";
import { siteConfig } from "@/content/site";
import {
  MIN_FILL_MS,
  inquirySubject,
  inquiryText,
  validateInquiry,
  type InquiryState,
  type InquiryValues,
} from "@/lib/inquiry";

/** Per-instance limiter: enough to blunt a single noisy client without extra infrastructure. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

/**
 * Sends a contact-form inquiry by email via Resend (https://resend.com) when RESEND_API_KEY is set.
 * Without it, or if sending fails, the client falls back to opening the visitor's email app,
 * so an inquiry is never silently dropped.
 */
export async function submitInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  const field = (name: string) => String(formData.get(name) ?? "").trim();
  const values: InquiryValues = {
    name: field("name"),
    email: field("email"),
    company: field("company"),
    projectType: field("projectType"),
    message: field("message"),
  };

  // Spam traps: a hidden field people never fill, and a form submitted faster than a person can type.
  const startedAt = Number(field("startedAt"));
  const tooFast = !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS;
  if (field("website") || tooFast) return { status: "sent" };

  const errors = validateInquiry(values);
  if (Object.keys(errors).length > 0) return { status: "invalid", errors, values };

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return { status: "invalid", errors: { message: "Too many messages from this connection. Please email us directly." }, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { status: "fallback", values };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? `MTX website <noreply@${new URL(siteConfig.url).hostname}>`,
        to: [process.env.CONTACT_TO_EMAIL ?? siteConfig.email],
        reply_to: values.email,
        subject: inquirySubject(values),
        text: inquiryText(values),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error("Contact form: Resend responded", response.status, await response.text());
      return { status: "fallback", values };
    }
    return { status: "sent" };
  } catch (error) {
    console.error("Contact form: send failed", error);
    return { status: "fallback", values };
  }
}
