import { Coffee, Instagram, MapPin, MessageCircle } from "lucide-react";
import type { InternalLink, SiteConfig } from "../../types";
import { Container } from "../ui/Container";

type FooterProps = {
  business: SiteConfig["business"];
  contact: SiteConfig["contact"];
  links: InternalLink[];
};

export function Footer({ business, contact, links }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1.2fr] lg:py-16">
        <div className="space-y-5">
          <a href="#inicio" className="inline-flex items-center gap-3 text-cream">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cream text-forest">
              <Coffee size={22} aria-hidden="true" />
            </span>
            <span className="font-display text-2xl font-bold">{business.logo}</span>
          </a>
          <p className="max-w-md text-sm leading-7 text-cream/72">{business.description}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-cream/20 px-3 text-sm font-semibold transition hover:bg-cream hover:text-forest"
            >
              <Instagram size={17} aria-hidden="true" />
              Instagram
            </a>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-cream/20 px-3 text-sm font-semibold transition hover:bg-cream hover:text-forest"
            >
              <MessageCircle size={17} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase text-parchment">Enlaces</h2>
          <nav className="mt-4 grid gap-2" aria-label="Enlaces del footer">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-cream/72 transition hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-5">
          <h2 className="text-sm font-bold uppercase text-parchment">Visitanos</h2>
          {contact.branches.map((branch) => (
            <div
              key={branch.id}
              className="space-y-2 border-b border-cream/10 pb-4 last:border-0"
            >
              <p className="flex gap-2 text-sm leading-6 text-cream/72">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-copper"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-cream">{branch.name}:</strong> {branch.address}
                </span>
              </p>
              {branch.schedule.map((item) => (
                <p
                  key={item.day}
                  className="flex justify-between gap-3 pl-6 text-xs text-cream/65"
                >
                  <span>{item.day}</span>
                  <span className="text-right text-cream">{item.hours}</span>
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="py-5 text-xs text-cream/60">
          <p>© {currentYear} {business.name}. Todos los derechos reservados.</p>
        </Container>
      </div>
    </footer>
  );
}
