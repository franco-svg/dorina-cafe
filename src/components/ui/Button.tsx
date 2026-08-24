import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "light" | "outlineLight";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
  external?: boolean;
  icon?: ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-forest bg-forest text-cream hover:bg-espresso hover:border-espresso",
  secondary:
    "border-cream bg-cream text-forest hover:bg-linen hover:border-linen",
  outline:
    "border-coffee/35 bg-transparent text-forest hover:border-forest hover:bg-forest hover:text-cream",
  light:
    "border-cream bg-cream text-forest hover:bg-parchment hover:border-parchment",
  outlineLight:
    "border-cream/70 bg-transparent text-cream hover:bg-cream hover:text-forest",
};

export function Button({
  children,
  className,
  external = false,
  icon,
  rel,
  target,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold transition duration-200",
        "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-copper",
        variants[variant],
        className,
      )}
      rel={external ? "noopener noreferrer" : rel}
      target={external ? "_blank" : target}
      {...props}
    >
      {icon ? <span className="shrink-0" aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
    </a>
  );
}
