import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "flat-white",
    name: "Flat White",
    description: "Espresso intenso con leche texturizada y final aterciopelado.",
    image: "/images/product-flat-white.svg",
    imageAlt: "Taza de flat white con arte latte.",
    tag: "Favorito",
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description: "Café infusionado en frío, suave, refrescante y naturalmente dulce.",
    image: "/images/product-cold-brew.svg",
    imageAlt: "Vaso de cold brew con hielo.",
    tag: "Nuevo",
  },
  {
    id: "croissant-almendras",
    name: "Croissant de almendras",
    description: "Hojaldre artesanal con crema de almendras y toque tostado.",
    image: "/images/product-croissant.svg",
    imageAlt: "Croissant de almendras servido en plato cerámico.",
    tag: "Más pedido",
  },
  {
    id: "cookie-chocolate",
    name: "Cookie de chocolate",
    description: "Masa suave, bordes dorados y chips de chocolate semiamargo.",
    image: "/images/product-cookie.svg",
    imageAlt: "Cookie de chocolate con chips.",
  },
  {
    id: "tostado-masa-madre",
    name: "Tostado en pan de masa madre",
    description: "Pan dorado, queso fundido y relleno simple de estación.",
    image: "/images/product-toast.svg",
    imageAlt: "Tostado en pan de masa madre.",
  },
  {
    id: "cheesecake-frutos-rojos",
    name: "Cheesecake de frutos rojos",
    description: "Base crocante, crema suave y salsa casera de frutos rojos.",
    image: "/images/product-cheesecake.svg",
    imageAlt: "Porción de cheesecake con frutos rojos.",
  },
];
