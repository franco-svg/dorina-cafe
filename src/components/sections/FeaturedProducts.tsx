import type { Product, SiteConfig } from "../../types";
import { Container } from "../ui/Container";
import { FeaturedItemCard } from "../ui/FeaturedItemCard";
import { SectionHeading } from "../ui/SectionHeading";

type FeaturedProductsProps = {
  products: Product[];
  section: SiteConfig["sections"]["products"];
};

export function FeaturedProducts({ products, section }: FeaturedProductsProps) {
  return (
    <section id="productos" className="scroll-mt-20 bg-linen py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {products.map((product) => (
            <FeaturedItemCard
              key={product.id}
              title={product.name}
              description={product.description}
              image={product.image}
              imageAlt={product.imageAlt}
              tag={product.tag}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
