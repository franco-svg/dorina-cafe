import type { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  business: {
    name: "Dorina Café",
    tagline: "Café de especialidad y pastelería artesanal",
    description:
      "Café de especialidad, pastelería artesanal, desayunos, brunch y almuerzos en Palermo y Villa Urquiza.",
    logo: "Dorina Café",
  },
  seo: {
    title: "Dorina Café | Palermo y Villa Urquiza",
    description:
      "Café de especialidad, pastelería artesanal, desayunos, brunch y almuerzos en las dos sucursales de Dorina Café.",
  },
  hero: {
    title: "Café de especialidad, pastelería artesanal y mucho más",
    subtitle:
      "Desayunos, brunch y almuerzos para disfrutar en Palermo y Villa Urquiza.",
    image: "/images/hero-dorina.jpg",
    imageAlt: "Mesa de Dorina Café con platos dulces y salados.",
    primaryCtaLabel: "Cómo llegar",
  },
  about: {
    title: "Un momento rico, a cualquier hora",
    text: "Dorina reúne café de especialidad, pastelería artesanal y platos para disfrutar durante todo el día en dos rincones de Buenos Aires.",
    image: "/images/almuerzos.jpg",
    imageAlt: "Tres platos salados de Dorina Café sobre una mesa de madera.",
    highlightLabel: "Encontranos en",
    highlightValue: "Palermo y Villa Urquiza",
  },
  contact: {
    whatsappLabel: "+54 9 11 3001-4605",
    whatsappUrl: "https://wa.me/5491130014605",
    instagramHandle: "@dorina.cafe",
    instagramUrl: "https://www.instagram.com/dorina.cafe/?hl=es",
    menuUrl: "https://monline.com.ar/DorinaCafe",
    branches: [
      {
        id: "palermo",
        name: "Palermo",
        address: "Nicaragua 4816, C1414, CABA",
        mapsUrl: "https://maps.app.goo.gl/gpYkqomR3pMLu2CB6",
        schedule: [
          { day: "Lunes a viernes", hours: "8:30 a 20:00" },
          { day: "Sábados y domingos", hours: "9:30 a 20:00" },
        ],
      },
      {
        id: "villa-urquiza",
        name: "Villa Urquiza",
        address: "Av. Triunvirato 5600, C1431, CABA",
        mapsUrl: "https://maps.app.goo.gl/YW5y63X1NykVK8NJ9",
        schedule: [
          { day: "Lunes a viernes", hours: "8:30 a 20:00" },
          { day: "Sábados y domingos", hours: "9:00 a 20:00" },
        ],
      },
    ],
  },
  sections: {
    products: {
      eyebrow: "Favoritos",
      title: "Favoritos de Dorina",
      description:
        "Una selección de café, pastelería, brunch y opciones saladas de nuestra carta.",
    },
    benefits: {
      eyebrow: "Nuestra propuesta",
      title: "Para disfrutar durante todo el día",
      description:
        "Café, pastelería y platos dulces y salados en dos barrios de Buenos Aires.",
    },
    gallery: {
      eyebrow: "Galería",
      title: "Mirá todo lo que preparamos",
      description: "Una selección real de platos compartidos por Dorina Café.",
    },
    testimonials: {
      eyebrow: "Opiniones",
      title: "Lo que cuentan quienes nos visitan",
      description:
        "Reseñas públicas de las sucursales de Palermo y Villa Urquiza.",
    },
    location: {
      eyebrow: "Sucursales",
      title: "Dos sucursales, la misma propuesta",
      description:
        "Elegí la sede que te quede más cerca y abrí las indicaciones en Google Maps.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      description:
        "Escribinos por WhatsApp, mirá el menú o seguinos en Instagram.",
    },
  },
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Favoritos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Propuesta", href: "#beneficios" },
    { label: "Galería", href: "#galeria" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Sucursales", href: "#ubicacion" },
    { label: "Contacto", href: "#contacto" },
  ],
  footerLinks: [
    { label: "Inicio", href: "#inicio" },
    { label: "Favoritos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Propuesta", href: "#beneficios" },
    { label: "Galería", href: "#galeria" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Sucursales", href: "#ubicacion" },
    { label: "Contacto", href: "#contacto" },
  ],
};
