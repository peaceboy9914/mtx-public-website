/** Shared between the contact form (client) and its server action. */
export const projectTypes = [
  "Web application",
  "Mobile application",
  "Enterprise / ERP system",
  "AI solution",
  "Not sure yet",
] as const;

export type InquiryValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

export type InquiryField = keyof InquiryValues;

export type InquiryState =
  | { status: "idle" }
  | { status: "invalid"; errors: Partial<Record<InquiryField, string>>; values: InquiryValues }
  | { status: "sent" }
  /** No mail provider configured, or it failed: the form falls back to the visitor's email app. */
  | { status: "fallback"; values: InquiryValues };

/** Minimum time between page load and submit; faster than this is a bot. */
export const MIN_FILL_MS = 3000;

export function validateInquiry(values: InquiryValues): Partial<Record<InquiryField, string>> {
  const errors: Partial<Record<InquiryField, string>> = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  else if (values.name.length > 120) errors.name = "That name is too long.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email) || values.email.length > 200)
    errors.email = "Please enter a valid email address.";
  if (values.company.length > 160) errors.company = "That company name is too long.";
  if (!(projectTypes as readonly string[]).includes(values.projectType)) errors.projectType = "Please choose a project type.";
  if (values.message.length < 20) errors.message = "A sentence or two helps us prepare (20 characters minimum).";
  else if (values.message.length > 5000) errors.message = "Please keep it under 5,000 characters.";
  return errors;
}

export function inquirySubject(values: InquiryValues) {
  return `New project inquiry from ${values.name || "website"}`;
}

export function inquiryText(values: InquiryValues) {
  return [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.company ? `Company: ${values.company}` : null,
    `Project type: ${values.projectType}`,
    "",
    values.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}
