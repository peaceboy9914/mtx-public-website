export function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex-none rounded-[9px] border border-navy-900/10 bg-white px-4 py-2.5 text-[13px] font-semibold text-navy-900/70 shadow-[0_10px_24px_-16px_rgba(14,28,66,.35)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
