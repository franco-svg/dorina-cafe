export type InternalLink = {
  label: string;
  href: `#${string}`;
};

export type ScheduleItem = {
  day: string;
  hours: string;
};

export type ProductTag = "Favorito" | "Nuevo" | "Más pedido";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  tag?: ProductTag;
};

export type BenefitIcon =
  | "coffee"
  | "pastry"
  | "leaf"
  | "paw"
  | "wifi"
  | "armchair";

export type Benefit = {
  id: string;
  icon: BenefitIcon;
  title: string;
  description: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  featured?: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  detail?: string;
};

export type SiteConfig = {
  business: {
    name: string;
    tagline: string;
    description: string;
    logo: string;
  };
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    primaryCtaLabel: string;
  };
  about: {
    title: string;
    text: string;
    image: string;
    imageAlt: string;
    highlightLabel: string;
    highlightValue: string;
  };
  contact: {
    address: string;
    phone: string;
    whatsappUrl: string;
    instagramHandle: string;
    instagramUrl: string;
    mapsUrl: string;
    mapsEmbedUrl: string;
    mapPlaceholderImage: string;
  };
  schedule: ScheduleItem[];
  sections: {
    products: {
      eyebrow: string;
      title: string;
      description: string;
    };
    benefits: {
      eyebrow: string;
      title: string;
      description: string;
    };
    gallery: {
      eyebrow: string;
      title: string;
      description: string;
    };
    testimonials: {
      eyebrow: string;
      title: string;
      description: string;
    };
    location: {
      eyebrow: string;
      title: string;
      description: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      description: string;
    };
  };
  navigation: InternalLink[];
  footerLinks: InternalLink[];
  developer: {
    creditLabel: string;
    name: string;
    url: string;
  };
};
