import { Star } from "lucide-react";
import type { SiteConfig, Testimonial } from "../../types";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

type TestimonialsProps = {
  section: SiteConfig["sections"]["testimonials"];
  testimonials: Testimonial[];
};

export function Testimonials({ section, testimonials }: TestimonialsProps) {
  return (
    <section id="opiniones" className="scroll-mt-20 bg-linen py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex h-full flex-col p-6">
              <div
                className="flex gap-1 text-copper"
                aria-label={`${testimonial.rating} de 5 estrellas`}
              >
                {Array.from({ length: 5 }, (_, index) => {
                  const isActive = index < testimonial.rating;
                  return (
                    <Star
                      key={`${testimonial.id}-${index}`}
                      size={18}
                      fill={isActive ? "currentColor" : "none"}
                      aria-hidden="true"
                      className={isActive ? "text-copper" : "text-coffee/25"}
                    />
                  );
                })}
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-7 text-ink/78">
                “{testimonial.comment}”
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-espresso">{testimonial.name}</p>
                {testimonial.detail ? (
                  <p className="mt-1 text-xs font-semibold uppercase text-coffee/70">
                    {testimonial.detail}
                  </p>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
