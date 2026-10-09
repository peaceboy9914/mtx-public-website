type IconProps = { className?: string };

const stroke = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M6 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2L20 14.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 4.5 4.6 1.5 1.5 0 0 1 6 3Z" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconLinkedIn({ className }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5Z" />
      <path d="M5.25 7.02A1.96 1.96 0 1 0 5.25 3.1a1.96 1.96 0 0 0 0 3.92Z" />
      <path d="M20.94 20.5h-3.38v-6.16c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.37 1.6-2.37 3.25v6.27H9.76V8.5h3.24v1.64h.05c.45-.86 1.56-1.76 3.2-1.76 3.43 0 4.06 2.26 4.06 5.19v6.93Z" />
    </svg>
  );
}
