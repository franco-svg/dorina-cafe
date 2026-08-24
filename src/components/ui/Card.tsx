import type { PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

type CardProps = PropsWithChildren<{
  as?: "article" | "div";
  className?: string;
}>;

export function Card({ as = "article", children, className }: CardProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        "rounded-lg border border-coffee/10 bg-cream shadow-soft transition duration-200",
        className,
      )}
    >
      {children}
    </Component>
  );
}
