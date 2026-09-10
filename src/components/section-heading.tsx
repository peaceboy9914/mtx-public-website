import { Reveal } from "./reveal";

export function SectionEyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <div
      className={
        "font-semibold text-[11.5px] tracking-[.14em] " + (tone === "dark" ? "text-blue-300" : "text-blue-600")
      }
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>
      <h2
        className={
          "mt-3.5 font-display text-[clamp(28px,3.4vw,40px)] leading-[1.12] font-bold tracking-[-.028em] text-balance " +
          (tone === "dark" ? "text-white" : "text-navy-900")
        }
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            "mt-4 max-w-2xl text-[16px] leading-[1.66] text-pretty " +
            (tone === "dark" ? "text-white/68" : "text-navy-900/62")
          }
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
