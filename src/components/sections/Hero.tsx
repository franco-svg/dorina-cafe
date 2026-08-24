import type { SiteConfig } from "../../types";
import { Container } from "../ui/Container";

type HeroProps = {
  businessTagline: string;
  hero: SiteConfig["hero"];
};

export function Hero({ businessTagline, hero }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[calc(88svh-4rem)] scroll-mt-16 items-center overflow-hidden bg-espresso py-20 text-cream"
    >
      <img
        src={hero.image}
        alt={hero.imageAlt}
        loading="eager"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso/90 via-espresso/62 to-forest/30" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-espresso/75 to-transparent" />

      <Container>
        <div className="max-w-3xl space-y-8 motion-safe:animate-fadeUp">
          <p className="inline-flex rounded-md border border-cream/25 bg-espresso/30 px-3 py-2 text-sm font-bold uppercase text-parchment backdrop-blur">
            {businessTagline}
          </p>
          <div className="space-y-5">
            <h1 className="font-display text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-cream/82 sm:text-xl">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
