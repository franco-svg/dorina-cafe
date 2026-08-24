import { Clock, MapPin } from "lucide-react";
import type { ScheduleItem, SiteConfig } from "../../types";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

type LocationProps = {
  contact: SiteConfig["contact"];
  ctaLabel: string;
  schedule: ScheduleItem[];
  section: SiteConfig["sections"]["location"];
};

export function Location({ contact, ctaLabel, schedule, section }: LocationProps) {
  const hasMapEmbed = contact.mapsEmbedUrl.trim().length > 0;

  return (
    <section id="ubicacion" className="scroll-mt-20 bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="space-y-8">
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />

            <div className="grid gap-4">
              <div className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-copper" size={22} aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-espresso">Dirección</h3>
                  <p className="mt-1 text-sm leading-6 text-ink/72">{contact.address}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="mt-1 shrink-0 text-copper" size={22} aria-hidden="true" />
                <div className="w-full">
                  <h3 className="font-semibold text-espresso">Horarios</h3>
                  <div className="mt-2 grid gap-2 text-sm text-ink/72">
                    {schedule.map((item) => (
                      <p key={item.day} className="flex justify-between gap-4">
                        <span>{item.day}</span>
                        <span className="font-semibold text-espresso">{item.hours}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <Button href={contact.mapsUrl} external icon={<MapPin size={18} />}>
              {ctaLabel}
            </Button>
          </div>

          <div className="min-h-[360px] overflow-hidden rounded-lg border border-coffee/10 bg-linen shadow-soft">
            {hasMapEmbed ? (
              <iframe
                title={`Mapa de ${contact.address}`}
                src={contact.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[360px] w-full"
              />
            ) : (
              <img
                src={contact.mapPlaceholderImage}
                alt={`Mapa visual de ${contact.address}`}
                loading="lazy"
                className="h-full min-h-[360px] w-full object-cover"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
