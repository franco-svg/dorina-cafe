import type { GalleryImage, SiteConfig } from "../../types";
import { cn } from "../../utils/cn";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

type GalleryProps = {
  images: GalleryImage[];
  section: SiteConfig["sections"]["gallery"];
};

export function Gallery({ images, section }: GalleryProps) {
  return (
    <section id="galeria" className="scroll-mt-20 bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />
        <div className="mt-10 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[220px] lg:mt-14 lg:grid-cols-4 lg:auto-rows-[240px]">
          {images.map((image) => (
            <figure
              key={image.id}
              className={cn(
                "group overflow-hidden rounded-lg border border-coffee/10 bg-linen shadow-soft",
                image.featured && "sm:col-span-2 sm:row-span-2",
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
