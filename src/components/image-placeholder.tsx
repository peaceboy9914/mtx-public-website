export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[linear-gradient(150deg,#101c3f,#0a1330)] p-4 text-center">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-40" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="#7FC6FF" strokeWidth="1.6" />
        <circle cx="9" cy="9.5" r="1.6" fill="#7FC6FF" />
        <path d="M4 17l5-5 3 3 4-4.5 4 4.5" stroke="#7FC6FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[11px] font-medium leading-snug text-white/45">{label}</span>
    </div>
  );
}
