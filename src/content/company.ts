export const sectors = [
  "Banking & finance",
  "Microfinance",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Transport & logistics",
  "Retail & e-commerce",
  "Civil society",
  "Publishing",
];

/** What every MTX build shares, regardless of sector. */
export const foundations = [
  {
    title: "ETB-native reporting",
    body: "Ledgers, dashboards and exports are built around Ethiopian Birr and local fiscal periods from the first sprint — not retrofitted later.",
  },
  {
    title: "Bilingual by default",
    body: "Amharic and Afaan Oromoo interfaces, and integrations like Telebirr, are standard parts of the build, not a change request.",
  },
  {
    title: "Built for the network you have",
    body: "Sites and apps are tuned for low-bandwidth mobile connections, because that's what most of our users are actually on.",
  },
  {
    title: "Compliance-aware by construction",
    body: "Role-based access and full audit trails are part of the data model, not a feature bolted on before an audit.",
  },
];

export const principles = [
  {
    title: "One senior team, start to finish",
    body: "The engineers who scope the system are the ones who build and support it. No outsourced maintenance queue after launch.",
  },
  {
    title: "Systems your finance team can sign off on",
    body: "Every platform we ship carries an audit trail your accountants and auditors can actually follow.",
  },
  {
    title: "Scope moves, the date doesn't",
    body: "We work in two-week increments demoed to your team, so priorities can shift without the release date slipping.",
  },
  {
    title: "We stay after launch",
    body: "Monitoring, support hours and quarterly roadmap reviews — or a clean handover, if that's what you'd rather have.",
  },
];

export const deliveryProcess = [
  {
    phase: "Week 1–2",
    title: "Discovery",
    body: "Process mapping, system audit and a costed delivery plan. Fixed fee, fully creditable.",
  },
  {
    phase: "Week 3–5",
    title: "Architecture",
    body: "Data model, integration contracts and a working vertical slice in your environment.",
  },
  {
    phase: "Ongoing",
    title: "Build",
    body: "Two-week increments demoed to your team. Scope moves; the release date does not.",
  },
  {
    phase: "Post-launch",
    title: "Run",
    body: "Monitoring, support hours and quarterly roadmap reviews — or a clean handover.",
  },
];
