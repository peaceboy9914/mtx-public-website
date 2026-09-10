export function Stat({ value, label, tone = "dark" }: { value: string; label: string; tone?: "dark" | "light" }) {
  const isDark = tone === "dark";
  return (
    <div>
      <div className={"font-display text-[25px] font-bold " + (isDark ? "text-white" : "text-navy-900")}>
        {value}
      </div>
      <div className={"mt-[3px] text-[12.5px] " + (isDark ? "text-white/55" : "text-navy-900/50")}>{label}</div>
    </div>
  );
}

export function StatCompact({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-[18px] font-bold text-navy-900">{value}</div>
      <div className="text-xs text-navy-900/50">{label}</div>
    </div>
  );
}
