"use client";

import { startTransition, useActionState, useEffect, useRef, type FormEvent, type ReactNode } from "react";
import { submitInquiry } from "@/app/contact/actions";
import { buttonClass } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";
import { siteConfig } from "@/content/site";
import { inquirySubject, inquiryText, projectTypes, type InquiryField, type InquiryState } from "@/lib/inquiry";

const initialState: InquiryState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const loadedAt = useRef(0);

  // Recorded after hydration so it reflects when this visitor loaded the form, not build time.
  useEffect(() => {
    loadedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (state.status === "sent") formRef.current?.reset();
    if (state.status === "fallback") {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        inquirySubject(state.values)
      )}&body=${encodeURIComponent(inquiryText(state.values))}`;
    }
  }, [state]);

  // Submitting through onSubmit (rather than <form action>) keeps the visitor's input when validation fails.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.set("startedAt", String(loadedAt.current));
    startTransition(() => formAction(data));
  }

  const errors = state.status === "invalid" ? state.errors : {};
  const errorFor = (field: InquiryField) =>
    errors[field] ? (
      <p id={`${field}-error`} className="text-[13px] text-red-700">
        {errors[field]}
      </p>
    ) : null;
  const a11y = (field: InquiryField) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Honeypot: hidden from people and assistive tech; bots tend to fill every field. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" type="text" required maxLength={120} autoComplete="name" className={inputClass} {...a11y("name")} />
          {errorFor("name")}
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={inputClass} {...a11y("email")} />
          {errorFor("email")}
        </Field>
        <Field label="Company (optional)" htmlFor="company">
          <input id="company" name="company" type="text" maxLength={160} autoComplete="organization" className={inputClass} {...a11y("company")} />
          {errorFor("company")}
        </Field>
        <Field label="Project type" htmlFor="projectType">
          <select id="projectType" name="projectType" required defaultValue="" className={inputClass} {...a11y("projectType")}>
            <option value="" disabled>
              Choose one
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errorFor("projectType")}
        </Field>
      </div>
      <Field label="What process keeps breaking?" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={5000}
          rows={5}
          placeholder="Tell us what you're running today and where it's falling over."
          className={`${inputClass} resize-y`}
          {...a11y("message")}
        />
        {errorFor("message")}
      </Field>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={pending} className={`${buttonClass("primary")} disabled:opacity-60`}>
          {pending ? "Sending…" : "Send project details"}
          <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
        <p className="max-w-xs text-[13px] leading-snug text-ink/55" role="status" aria-live="polite">
          {statusMessage(state)}
        </p>
      </div>
    </form>
  );
}

function statusMessage(state: InquiryState) {
  switch (state.status) {
    case "sent":
      return "Thanks, your message is with us. We reply within a couple of business days.";
    case "fallback":
      return `Opening your email app with these details filled in. Send it to ${siteConfig.email} and we'll reply within a couple of business days.`;
    case "invalid":
      return "Please check the highlighted fields.";
    default:
      return `Goes straight to our team at ${siteConfig.email}.`;
  }
}

const inputClass =
  "w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-[16px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-brand focus:shadow-[0_1px_0_0_var(--color-brand)] focus-visible:outline-none aria-invalid:border-red-600";

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={htmlFor} className="label text-ink/55">
        {label}
      </label>
      {children}
    </div>
  );
}
