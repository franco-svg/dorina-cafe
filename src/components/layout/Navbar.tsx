import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";
import type { InternalLink, SiteConfig } from "../../types";
import { cn } from "../../utils/cn";
import { Container } from "../ui/Container";

type NavbarProps = {
  business: SiteConfig["business"];
  links: InternalLink[];
};

export function Navbar({ business, links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-coffee/10 bg-cream">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex items-center gap-3 text-forest transition hover:text-coffee"
          onClick={closeMenu}
          aria-label={`${business.name} - ir al inicio`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest text-cream">
            <Coffee size={22} aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold">{business.logo}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-ink/75 transition hover:bg-linen hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-coffee/15 text-forest transition hover:bg-linen lg:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-coffee/10 bg-cream transition lg:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <Container className="py-4">
          <nav className="grid gap-2" aria-label="Navegación móvil">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-semibold text-ink/80 transition hover:bg-linen hover:text-forest"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
