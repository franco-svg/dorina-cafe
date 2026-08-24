import { cn } from "../../utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  align = "left",
  className,
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-bold uppercase text-coffee">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl text-espresso sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-8 text-ink/70 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
