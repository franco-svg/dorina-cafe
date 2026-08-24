import {
  Armchair,
  CakeSlice,
  Coffee,
  Leaf,
  PawPrint,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { Benefit, BenefitIcon, SiteConfig } from "../../types";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

type BenefitsProps = {
  benefits: Benefit[];
  section: SiteConfig["sections"]["benefits"];
};

const iconMap: Record<BenefitIcon, LucideIcon> = {
  coffee: Coffee,
  pastry: CakeSlice,
  leaf: Leaf,
  paw: PawPrint,
  wifi: Wifi,
  armchair: Armchair,
};

export function Benefits({ benefits, section }: BenefitsProps) {
  return (
    <section id="beneficios" className="scroll-mt-20 bg-parchment/55 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];

            return (
              <Card key={benefit.id} className="h-full p-6 hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-forest text-cream">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl text-espresso">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/72">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
