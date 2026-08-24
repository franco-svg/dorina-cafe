import { Clock, MapPin } from "lucide-react";
import type { SiteConfig } from "../../types";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

type LocationProps = {
  contact: SiteConfig["contact"];
  ctaLabel: string;
  section: SiteConfig["sections"]["location"];
};

export function Location({ contact, ctaLabel, section }: LocationProps) {
  return (
    <section id="ubicacion" className="scroll-mt-20 bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2">
          {contact.branches.map((branch) => (
            <article
              key={branch.id}
              className="rounded-lg border border-coffee/10 bg-linen p-6 shadow-soft sm:p-8"
            >
              <div className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-copper" size={22} aria-hidden="true" />
                <div>
                  <h3 className="font-display text-2xl text-espresso">{branch.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/72">{branch.address}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-3 border-t border-coffee/10 pt-6">
                <Clock className="mt-1 shrink-0 text-copper" size={22} aria-hidden="true" />
                <div className="w-full">
                  <h4 className="font-semibold text-espresso">Horarios</h4>
                  <div className="mt-2 grid gap-2 text-sm text-ink/72">
                    {branch.schedule.map((item) => (
                      <p key={item.day} className="flex justify-between gap-4">
                        <span>{item.day}</span>
                        <span className="text-right font-semibold text-espresso">
                          {item.hours}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                href={branch.mapsUrl}
                external
                icon={<MapPin size={18} />}
                className="mt-6"
              >
                {ctaLabel}
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
