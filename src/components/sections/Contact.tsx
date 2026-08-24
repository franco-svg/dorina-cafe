import { Instagram, MessageCircle, Phone } from "lucide-react";
import type { SiteConfig } from "../../types";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

type ContactProps = {
  contact: SiteConfig["contact"];
  section: SiteConfig["sections"]["contact"];
};

export function Contact({ contact, section }: ContactProps) {
  const contactItems = [
    {
      label: "WhatsApp",
      value: contact.phone,
      href: contact.whatsappUrl,
      icon: MessageCircle,
      external: true,
    },
    {
      label: "Teléfono",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
      icon: Phone,
      external: false,
    },
    {
      label: "Instagram",
      value: contact.instagramHandle,
      href: contact.instagramUrl,
      icon: Instagram,
      external: true,
    },
  ];

  return (
    <section id="contacto" className="scroll-mt-20 bg-linen py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />

          <div className="rounded-lg border border-coffee/10 bg-cream p-5 shadow-soft sm:p-6">
            <div className="grid gap-1 sm:grid-cols-3 lg:grid-cols-1">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex min-h-14 items-center gap-3 rounded-md px-2 py-2 text-sm transition hover:bg-linen focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-copper"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-forest text-cream">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-semibold text-espresso">{item.label}</span>
                      <span className="block text-ink/70">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-coffee/10 pt-5 sm:flex-row">
              <Button
                href={contact.whatsappUrl}
                external
                icon={<MessageCircle size={18} />}
                className="w-full sm:w-auto"
              >
                WhatsApp
              </Button>
              <Button
                href={contact.instagramUrl}
                external
                icon={<Instagram size={18} />}
                variant="outline"
                className="w-full sm:w-auto"
              >
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
