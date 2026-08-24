import type { SiteConfig } from "../../types";
import { Container } from "../ui/Container";

type AboutProps = {
  about: SiteConfig["about"];
};

export function About({ about }: AboutProps) {
  return (
    <section id="nosotros" className="scroll-mt-20 bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="space-y-6">
            <p className="text-sm font-bold uppercase text-copper">Nosotros</p>
            <h2 className="font-display text-3xl text-espresso sm:text-4xl lg:text-5xl">
              {about.title}
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-ink/72">{about.text}</p>
            <div className="flex max-w-sm items-center gap-5 border-l-4 border-copper bg-linen p-5">
              <span className="text-sm font-bold uppercase text-coffee">{about.highlightLabel}</span>
              <span className="font-display text-4xl text-forest">{about.highlightValue}</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-coffee/10 bg-linen shadow-soft">
            <img
              src={about.image}
              alt={about.imageAlt}
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
