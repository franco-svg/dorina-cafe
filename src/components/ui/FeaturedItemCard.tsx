import { Card } from "./Card";

type FeaturedItemCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tag?: string;
};

export function FeaturedItemCard({
  description,
  image,
  imageAlt,
  tag,
  title,
}: FeaturedItemCardProps) {
  return (
    <Card className="group h-full overflow-hidden hover:-translate-y-1 hover:shadow-[0_24px_70px_rgb(42_27_20_/_0.16)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-linen">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        {tag ? (
          <span className="absolute left-3 top-3 rounded-md bg-forest px-3 py-1 text-xs font-semibold text-cream">
            {tag}
          </span>
        ) : null}
      </div>
      <div className="space-y-3 p-5">
        <h3 className="font-display text-2xl text-espresso">{title}</h3>
        <p className="text-sm leading-6 text-ink/75">{description}</p>
      </div>
    </Card>
  );
}
