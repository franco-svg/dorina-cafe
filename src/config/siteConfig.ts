import type { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  business: {
    name: "Café Nómada",
    tagline: "Café de especialidad y pastelería artesanal",
    description:
      "Cafetería de especialidad con pastelería artesanal y un ambiente cálido y tranquilo.",
    logo: "Café Nómada",
  },
  seo: {
    title: "Café Nómada | Café de especialidad en Palermo",
    description:
      "Café Nómada: café de especialidad, pastelería artesanal y un espacio cálido en Palermo, Ciudad Autónoma de Buenos Aires.",
  },
  hero: {
    title: "Un buen café cambia tu día",
    subtitle:
      "Café de especialidad, pastelería artesanal y un espacio para bajar un cambio.",
    image: "/images/hero-cafe.svg",
    imageAlt:
      "Interior cálido de una cafetería con tazas de café y pastelería artesanal.",
    primaryCtaLabel: "Cómo llegar",
  },
  about: {
    title: "Nuestra historia",
    text: "En Café Nómada creemos que una buena taza de café también puede ser una pausa. Seleccionamos cada grano, cuidamos cada preparación y creamos un espacio donde siempre den ganas de quedarse un poco más.",
    image: "/images/about-barista.svg",
    imageAlt: "Barista preparando café de especialidad en la barra.",
    highlightLabel: "Desde",
    highlightValue: "2021",
  },
  contact: {
    address: "Palermo, Ciudad Autónoma de Buenos Aires",
    phone: "+54 9 11 2345 6789",
    whatsappUrl: "https://wa.me/5491123456789",
    instagramHandle: "@cafenomada",
    instagramUrl: "https://www.instagram.com/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Palermo%2C%20Ciudad%20Autonoma%20de%20Buenos%20Aires",
    mapsEmbedUrl: "",
    mapPlaceholderImage: "/images/map-placeholder.svg",
  },
  schedule: [
    { day: "Lunes a viernes", hours: "8:00 a 20:00" },
    { day: "Sábados", hours: "9:00 a 21:00" },
    { day: "Domingos", hours: "9:00 a 19:00" },
  ],
  sections: {
    products: {
      eyebrow: "Favoritos",
      title: "Productos destacados",
      description:
        "Una selección breve de cafés, pastelería y opciones saladas para empezar a conocer la propuesta.",
    },
    benefits: {
      eyebrow: "Diferenciales",
      title: "Por qué elegirnos",
      description:
        "Cuidamos los detalles que hacen que una visita simple se convierta en una pausa disfrutable.",
    },
    gallery: {
      eyebrow: "Galería",
      title: "Un vistazo al espacio",
      description:
        "Café, pastelería, rincones tranquilos y la calidez del local en una composición simple.",
    },
    testimonials: {
      eyebrow: "Opiniones",
      title: "Lo que dicen nuestros clientes",
      description:
        "Comentarios ficticios incluidos como ejemplo para mostrar la estructura reutilizable de la sección.",
    },
    location: {
      eyebrow: "Ubicación",
      title: "Estamos en Palermo",
      description:
        "Encontranos en una zona tranquila de Palermo y acercate cuando quieras hacer una pausa.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      description:
        "Escribinos por WhatsApp, llamanos o seguinos en Instagram para ver novedades y productos de temporada.",
    },
  },
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Galería", href: "#galeria" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Contacto", href: "#contacto" },
  ],
  footerLinks: [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Galería", href: "#galeria" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Contacto", href: "#contacto" },
  ],
  developer: {
    creditLabel: "Sitio desarrollado por",
    name: "Tu Marca",
    url: "https://example.com",
  },
};
