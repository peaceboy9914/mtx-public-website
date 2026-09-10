export function Badge({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  const isDark = tone === "dark";
  return (
    <div
      className={
        "inline-flex items-center gap-2.5 rounded-full border px-3.5 py-[7px] pl-2.5 font-medium text-xs " +
        (isDark ? "border-white/16 bg-white/5 text-white/80" : "border-navy-900/10 bg-navy-900/[0.03] text-navy-900/70")
      }
    >
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(47,155,255,0.22)]" />
      {children}
    </div>
  );
}
