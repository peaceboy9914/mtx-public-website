"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { buttonClass } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";
import { siteConfig } from "@/content/site";

const projectTypes = ["Web application", "Mobile application", "Enterprise / ERP system", "AI solution", "Not sure yet"];

/** No backend: submitting opens the visitor's email app with the inquiry pre-filled. */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    const name = field("name");
    const company = field("company");

    const subject = `New project inquiry from ${name || "website"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${field("email")}`,
      company ? `Company: ${company}` : null,
      `Project type: ${field("projectType")}`,
      "",
      field("message"),
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
        <Field label="Company (optional)" htmlFor="company">
          <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
        </Field>
        <Field label="Project type" htmlFor="projectType">
          <select id="projectType" name="projectType" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Choose one
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="What process keeps breaking?" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you're running today and where it's falling over."
          className={`${inputClass} resize-y`}
        />
      </Field>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className={buttonClass("primary")}>
          Send project details
          <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
        <p className="max-w-xs text-[13px] leading-snug text-ink/55" role="status">
          {submitted
            ? "Opening your email app with these details filled in — send it across and we'll reply within a couple of days."
            : `Opens your email app with the message pre-filled to ${siteConfig.email}.`}
        </p>
      </div>
    </form>
  );
}

const inputClass =
  "w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-[16px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-brand focus:shadow-[0_1px_0_0_var(--color-brand)] focus-visible:outline-none";

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
