"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";

const projectTypes = ["Web application", "Mobile application", "Enterprise / ERP system", "AI solution", "Not sure yet"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const projectType = String(data.get("projectType") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `New project inquiry from ${name || "website"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `Project type: ${projectType}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Company (optional)" htmlFor="company">
          <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
        </Field>
        <Field label="Project type" htmlFor="projectType">
          <select id="projectType" name="projectType" required className={inputClass} defaultValue="">
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
          className={inputClass}
        />
      </Field>
      <button
        type="submit"
        className="gradient-cta mt-1 inline-flex items-center justify-center rounded-[9px] px-6 py-[15px] text-[15px] font-semibold text-white shadow-[0_16px_34px_-14px_rgba(47,155,255,.9)] transition-transform hover:-translate-y-px"
      >
        Send project details
      </button>
      <p className="text-xs text-navy-900/45" role="status">
        {submitted
          ? "Opening your email app with these details filled in — send it across and we'll reply within a couple of days."
          : "This opens your email app with the message pre-filled to " + siteConfig.email + "."}
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-[9px] border border-navy-900/12 bg-white px-4 py-3 text-[14.5px] text-navy-900 outline-none transition-colors placeholder:text-navy-900/35 focus:border-blue-600";

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2 text-[13.5px] font-medium text-navy-900/70">
      {label}
      {children}
    </label>
  );
}
