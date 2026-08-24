import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "flat-white",
    name: "Flat White",
    description: "Dos shots de espresso con leche emulsionada.",
    image: "/images/cafe-avocado.jpg",
    imageAlt: "Taza de café junto a un avocado toast.",
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    description:
      "Masa madre, palta, huevo poché, tomates cherry, praliné de nueces y lima.",
    image: "/images/cafe-avocado.jpg",
    imageAlt: "Avocado toast con huevo poché y una taza de café.",
  },
  {
    id: "cheesecake-frutos-rojos",
    name: "Cheesecake de frutos rojos",
    description: "Una opción de pastelería sujeta a disponibilidad.",
    image: "/images/cheesecake.jpg",
    imageAlt: "Cheesecake de frutos rojos decorado con frutos y flores.",
  },
  {
    id: "croissant-almendras",
    name: "Croissant con almendras",
    description: "Parte de la selección de pastelería artesanal de Dorina.",
    image: "/images/hero-dorina.jpg",
    imageAlt: "Mesa de Dorina Café con platos dulces y salados.",
  },
  {
    id: "brunch-roma",
    name: "Brunch Roma",
    description:
      "Dos infusiones, tostadas, huevos revueltos, panceta, queso crema, medialuna y cookie.",
    image: "/images/mesa-brunch.jpg",
    imageAlt: "Mesa con mbejú, tostado y porciones de torta.",
  },
  {
    id: "limonada-casera",
    name: "Limonada casera",
    description: "Limonada casera con menta y jengibre.",
    image: "/images/almuerzos.jpg",
    imageAlt: "Tres platos salados de Dorina Café sobre una mesa de madera.",
  },
];
