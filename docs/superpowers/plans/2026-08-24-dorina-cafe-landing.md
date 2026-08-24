# Dorina Café Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adaptar la aplicación existente para presentar Dorina Café con contenido real, dos sucursales, horarios propios, reseñas trazables, fotografías oficiales y accesos verificados a WhatsApp, menú, Instagram y Google Maps.

**Architecture:** Conservar React, TypeScript, Vite, Tailwind CSS y la composición de la plantilla. Centralizar identidad y enlaces en `siteConfig`, mantener productos, beneficios, galería y reseñas en sus módulos de datos, y ampliar el contrato de contacto para que cada sucursal posea dirección, Maps y horario propios.

**Tech Stack:** React 18, TypeScript 5.7, Vite 6, Tailwind CSS 3, lucide-react y npm.

## Global Constraints

- Proyecto destino: `D:\Devs\dorina-cafe`.
- Rama esperada: `feat/dorina-cafe-dev`.
- Remoto esperado: `origin -> https://github.com/franco-svg/dorina-cafe.git`.
- Fuente de plantilla en modo lectura: `https://github.com/franco-svg/Test_landing.git`.
- No publicar, no hacer push, no configurar hosting y no ejecutar `npm run deploy`.
- No mostrar precios ni inventar teléfono convencional, historia, certificaciones, disponibilidad, productos o reseñas.
- Usar exclusivamente `@dorina.cafe`; no usar el enlace antiguo `@dorinacafe`.
- Usar únicamente las seis fotografías oficiales aprobadas; no generar imágenes con IA.
- Eliminar `Café Nómada`, testimonios ficticios, `Tu Marca`, `example.com` y el bloque de crédito ficticio.
- Conservar la configuración de build y el orden general de secciones.
- Detenerse si una corrección exige modificar un componente distinto de `src/App.tsx`, `Location.tsx`, `Contact.tsx` o `Footer.tsx`.

---

## File Structure

- `src/types/index.ts`: contratos `ScheduleItem`, `Branch` y `SiteConfig`.
- `src/config/siteConfig.ts`: identidad, SEO, hero, presentación, contacto, sucursales, horarios, títulos y navegación.
- `src/components/sections/Location.tsx`: tarjetas de sucursales, horarios y enlaces de Maps.
- `src/components/sections/Contact.tsx`: WhatsApp, Instagram, teléfono opcional y menú.
- `src/components/layout/Footer.tsx`: marca, navegación y resumen de ambas sucursales.
- `src/App.tsx`: composición y propagación de los contratos actualizados.
- `src/data/products.ts`: seis productos respaldados por el menú.
- `src/data/benefits.ts`: cuatro diferenciales respaldados.
- `src/data/gallery.ts`: seis fotografías oficiales y textos alternativos.
- `src/data/testimonials.ts`: dos reseñas atribuidas y parafraseadas.
- `src/index.css`: nueve tokens RGB aprobados.
- `public/images/*.jpg`: fotografías oficiales descargadas desde Instagram.
- `public/images/SOURCES.md`: procedencia, uso y texto alternativo de cada imagen.

---

### Task 1: Verify the destination and baseline

**Files:**
- Verify: `package.json`
- Verify: `src/types/index.ts`
- Verify: `src/config/siteConfig.ts`
- Verify: `src/components/sections/Location.tsx`
- Verify: `src/components/sections/Contact.tsx`
- Verify: `src/components/layout/Footer.tsx`
- Verify: `src/App.tsx`

**Interfaces:**
- Consumes: repository already open at `D:\Devs\dorina-cafe`.
- Produces: recorded clean baseline and successful reference build.

- [ ] **Step 1: Record repository identity**

Run from `D:\Devs\dorina-cafe`:

```powershell
git rev-parse --show-toplevel
git branch --show-current
git remote -v
git status --short
```

Expected:

```text
D:/Devs/dorina-cafe
feat/dorina-cafe-dev
origin  https://github.com/franco-svg/dorina-cafe.git (fetch)
origin  https://github.com/franco-svg/dorina-cafe.git (push)
```

`git status --short` must be empty. If root, branch, remote or cleanliness differs, stop and report the mismatch.

- [ ] **Step 2: Verify the template contract paths**

Run:

```powershell
$dorinaRequiredPaths = @(
  'package.json',
  'src/types/index.ts',
  'src/config/siteConfig.ts',
  'src/data/products.ts',
  'src/data/benefits.ts',
  'src/data/gallery.ts',
  'src/data/testimonials.ts',
  'src/components/sections/Location.tsx',
  'src/components/sections/Contact.tsx',
  'src/components/layout/Footer.tsx',
  'src/App.tsx',
  'src/index.css',
  'public/images'
)
$dorinaRequiredPaths | Where-Object { -not (Test-Path -LiteralPath $_) }
```

Expected: no output.

- [ ] **Step 3: Capture the failing content audit**

Run:

```powershell
rg -n 'Café Nómada|Cafe Nomada|@cafenomada|Tu Marca|example\.com|Valentina R\.|Martin G\.|Lucia P\.|Santiago M\.' src
```

Expected: matches in configuration, testimonials and footer. These matches are the red baseline that later tasks must eliminate.

- [ ] **Step 4: Build the unmodified baseline**

Run:

```powershell
npm run build
```

Expected: TypeScript and Vite exit with code 0 and generate `dist/`.

---

### Task 2: Add the two-branch contact model and update its consumers

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/config/siteConfig.ts`
- Modify: `src/components/sections/Location.tsx`
- Modify: `src/components/sections/Contact.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `ScheduleItem`, `InternalLink`, `Button`, `Container` and `SectionHeading`.
- Produces: `Branch`, `SiteConfig["contact"]["branches"]`, `whatsappLabel`, optional `phone`, branch-owned schedules and consumers that no longer expect global `schedule` or `developer` properties.

- [ ] **Step 1: Record the structural red baseline**

Run:

```powershell
rg -n 'address: string|phone: string|mapsUrl: string|schedule: ScheduleItem\[\]|developer:|contact\.address|contact\.mapsUrl|siteConfig\.schedule|siteConfig\.developer' src
```

Expected: matches proving the template accepts one address, one schedule and a required developer credit.

- [ ] **Step 2: Define `Branch` and the new `SiteConfig` contract**

In `src/types/index.ts`, keep `ScheduleItem` and add immediately after it:

```ts
export type Branch = {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
  schedule: ScheduleItem[];
};
```

Replace the `contact`, global `schedule` and `developer` portions of `SiteConfig` so the complete contact shape is:

```ts
contact: {
  phone?: string;
  whatsappLabel: string;
  whatsappUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  menuUrl: string;
  branches: Branch[];
};
```

Remove the top-level `schedule: ScheduleItem[]` and the complete `developer` property from `SiteConfig`. Keep every unrelated type unchanged.

- [ ] **Step 3: Replace the fictitious configuration with the approved identity**

In `src/config/siteConfig.ts`, preserve the `SiteConfig` annotation and set the business-facing values to:

```ts
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
  text:
    "Dorina reúne café de especialidad, pastelería artesanal y platos para disfrutar durante todo el día en dos rincones de Buenos Aires.",
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
```

Set section copy to:

```ts
sections: {
  products: {
    eyebrow: "Favoritos",
    title: "Favoritos de Dorina",
    description: "Una selección de café, pastelería, brunch y opciones saladas de nuestra carta.",
  },
  benefits: {
    eyebrow: "Nuestra propuesta",
    title: "Para disfrutar durante todo el día",
    description: "Café, pastelería y platos dulces y salados en dos barrios de Buenos Aires.",
  },
  gallery: {
    eyebrow: "Galería",
    title: "Mirá todo lo que preparamos",
    description: "Una selección real de platos compartidos por Dorina Café.",
  },
  testimonials: {
    eyebrow: "Opiniones",
    title: "Lo que cuentan quienes nos visitan",
    description: "Reseñas públicas de las sucursales de Palermo y Villa Urquiza.",
  },
  location: {
    eyebrow: "Sucursales",
    title: "Dos sucursales, la misma propuesta",
    description: "Elegí la sede que te quede más cerca y abrí las indicaciones en Google Maps.",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos",
    description: "Escribinos por WhatsApp, mirá el menú o seguinos en Instagram.",
  },
},
```

Use these exact navigation arrays:

```ts
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
```

Do not add `phone`, a global `schedule` or `developer`.

- [ ] **Step 4: Render branch-owned schedules in `Location`**

Replace `LocationProps` with:

```ts
type LocationProps = {
  contact: SiteConfig["contact"];
  ctaLabel: string;
  section: SiteConfig["sections"]["location"];
};
```

Replace the component body with a section that keeps `SectionHeading` and renders this grid:

```tsx
<div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2">
  {contact.branches.map((branch) => (
    <article
      key={branch.id}
      className="rounded-lg border border-coffee/10 bg-linen p-6 shadow-soft sm:p-8"
    >
      <div className="flex gap-3">
        <MapPin className="mt-1 shrink-0 text-copper" size={22} aria-hidden="true" />
        <div>
          <h3 className="font-display text-2xl text-espresso">{branch.name}</h3>
          <p className="mt-2 text-sm leading-6 text-ink/72">{branch.address}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-3 border-t border-coffee/10 pt-6">
        <Clock className="mt-1 shrink-0 text-copper" size={22} aria-hidden="true" />
        <div className="w-full">
          <h4 className="font-semibold text-espresso">Horarios</h4>
          <div className="mt-2 grid gap-2 text-sm text-ink/72">
            {branch.schedule.map((item) => (
              <p key={item.day} className="flex justify-between gap-4">
                <span>{item.day}</span>
                <span className="text-right font-semibold text-espresso">{item.hours}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <Button href={branch.mapsUrl} external icon={<MapPin size={18} />} className="mt-6">
        {ctaLabel}
      </Button>
    </article>
  ))}
</div>
```

Remove iframe, map placeholder, single-address rendering and the `schedule` prop. Keep `Clock`, `MapPin`, `Button`, `Container` and `SectionHeading` imports.

- [ ] **Step 5: Make phone optional and add the menu in `Contact`**

Use imports:

```ts
import { BookOpen, Instagram, MessageCircle, Phone } from "lucide-react";
```

Build `contactItems` exactly as:

```ts
const contactItems = [
  {
    label: "WhatsApp",
    value: contact.whatsappLabel,
    href: contact.whatsappUrl,
    icon: MessageCircle,
    external: true,
  },
  ...(contact.phone
    ? [
        {
          label: "Teléfono",
          value: contact.phone,
          href: `tel:${contact.phone.replace(/\s/g, "")}`,
          icon: Phone,
          external: false,
        },
      ]
    : []),
  {
    label: "Instagram",
    value: contact.instagramHandle,
    href: contact.instagramUrl,
    icon: Instagram,
    external: true,
  },
];
```

Keep the existing contact-card rendering and add this button beside WhatsApp and Instagram:

```tsx
<Button
  href={contact.menuUrl}
  external
  icon={<BookOpen size={18} />}
  variant="outline"
  className="w-full sm:w-auto"
>
  Ver menú
</Button>
```

- [ ] **Step 6: Render both branches and remove the fictitious footer credit**

Change `FooterProps` to:

```ts
type FooterProps = {
  business: SiteConfig["business"];
  contact: SiteConfig["contact"];
  links: InternalLink[];
};
```

Change the function signature to:

```ts
export function Footer({ business, contact, links }: FooterProps) {
```

Replace the single address and global schedule with:

```tsx
<div className="space-y-5">
  <h2 className="text-sm font-bold uppercase text-parchment">Visitanos</h2>
  {contact.branches.map((branch) => (
    <div key={branch.id} className="space-y-2 border-b border-cream/10 pb-4 last:border-0">
      <p className="flex gap-2 text-sm leading-6 text-cream/72">
        <MapPin size={18} className="mt-0.5 shrink-0 text-copper" aria-hidden="true" />
        <span>
          <strong className="text-cream">{branch.name}:</strong> {branch.address}
        </span>
      </p>
      {branch.schedule.map((item) => (
        <p key={item.day} className="flex justify-between gap-3 pl-6 text-xs text-cream/65">
          <span>{item.day}</span>
          <span className="text-right text-cream">{item.hours}</span>
        </p>
      ))}
    </div>
  ))}
</div>
```

Remove the complete paragraph containing `developer.creditLabel`, `developer.url` and `developer.name`. Keep only the copyright paragraph inside the bottom container.

- [ ] **Step 7: Update `App` for the new props**

Render `Location` as:

```tsx
<Location
  contact={siteConfig.contact}
  ctaLabel={siteConfig.hero.primaryCtaLabel}
  section={siteConfig.sections.location}
/>
```

Render `Footer` as:

```tsx
<Footer
  business={siteConfig.business}
  contact={siteConfig.contact}
  links={siteConfig.footerLinks}
/>
```

Keep `Testimonials` unconditional because Task 3 supplies two verified entries. Keep the section order unchanged.

- [ ] **Step 8: Run the structural green checks**

Run:

```powershell
npm run build
rg -n 'contact\.address|contact\.mapsUrl|mapsEmbedUrl|mapPlaceholderImage|siteConfig\.schedule|siteConfig\.developer|developer=' src
rg -n 'whatsappLabel|menuUrl|branches: \[|gpYkqomR3pMLu2CB6|YW5y63X1NykVK8NJ9' src
```

Expected: build exits 0; the first search has no output; the second finds the new contract and both Maps links.

- [ ] **Step 9: Commit the branch model**

```powershell
git add src/types/index.ts src/config/siteConfig.ts src/components/sections/Location.tsx src/components/sections/Contact.tsx src/components/layout/Footer.tsx src/App.tsx
git commit -m "feat: support Dorina branches and contact links"
```

---

### Task 3: Replace demo content and apply the approved palette

**Files:**
- Modify: `src/data/products.ts`
- Modify: `src/data/benefits.ts`
- Modify: `src/data/gallery.ts`
- Modify: `src/data/testimonials.ts`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `Product`, `Benefit`, `GalleryImage`, `Testimonial` and image paths created in Task 4.
- Produces: approved arrays with stable IDs and the nine approved RGB tokens.

- [ ] **Step 1: Capture the demo-content failures**

Run:

```powershell
rg -n 'Cold Brew|Cookie de chocolate|Pet friendly|WiFi disponible|Valentina R\.|Martin G\.|Lucia P\.|Santiago M\.' src/data
```

Expected: matches for unapproved products, benefits and testimonials.

- [ ] **Step 2: Replace `products`**

Set `src/data/products.ts` to:

```ts
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
    description: "Masa madre, palta, huevo poché, tomates cherry, praliné de nueces y lima.",
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
    description: "Dos infusiones, tostadas, huevos revueltos, panceta, queso crema, medialuna y cookie.",
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
```

- [ ] **Step 3: Replace `benefits`**

Set `src/data/benefits.ts` to:

```ts
import type { Benefit } from "../types";

export const benefits: Benefit[] = [
  {
    id: "especialidad",
    icon: "coffee",
    title: "Café de especialidad",
    description: "Preparaciones de café para disfrutar en ambas sucursales.",
  },
  {
    id: "pasteleria",
    icon: "pastry",
    title: "Pastelería artesanal",
    description: "Tortas, croissants, cookies y otras opciones de pastelería.",
  },
  {
    id: "brunch",
    icon: "armchair",
    title: "Brunch todo el día",
    description: "Opciones de brunch disponibles durante toda la jornada.",
  },
  {
    id: "opciones",
    icon: "leaf",
    title: "Opciones puntuales",
    description: "Alternativas vegetarianas, veganas y sin TACC identificadas en la carta.",
  },
];
```

- [ ] **Step 4: Replace `galleryImages`**

Set `src/data/gallery.ts` to:

```ts
import type { GalleryImage } from "../types";

export const galleryImages: GalleryImage[] = [
  {
    id: "mesa",
    src: "/images/hero-dorina.jpg",
    alt: "Mesa de Dorina Café con platos dulces y salados.",
    featured: true,
  },
  {
    id: "cafe-avocado",
    src: "/images/cafe-avocado.jpg",
    alt: "Avocado toast con huevo poché y una taza de café.",
  },
  {
    id: "almuerzos",
    src: "/images/almuerzos.jpg",
    alt: "Tres platos salados de Dorina Café sobre una mesa de madera.",
  },
  {
    id: "cheesecake",
    src: "/images/cheesecake.jpg",
    alt: "Cheesecake de frutos rojos decorado con frutos y flores.",
    featured: true,
  },
  {
    id: "brunch",
    src: "/images/mesa-brunch.jpg",
    alt: "Mesa con mbejú, tostado y porciones de torta.",
  },
  {
    id: "croissant-salado",
    src: "/images/croissant-salado.jpg",
    alt: "Croissant salado con jamón y queso fundido.",
  },
];
```

- [ ] **Step 5: Replace fictitious testimonials with attributed paraphrases**

Set `src/data/testimonials.ts` to:

```ts
import type { Testimonial } from "../types";

export const testimonials: Testimonial[] = [
  {
    id: "carolina-blanco",
    name: "Carolina Blanco",
    rating: 5,
    comment: "Destacó las medialunas, el chocolate caliente, la variedad y la atención.",
    detail: "Villa Urquiza · Google Maps",
  },
  {
    id: "nicolas-guichot",
    name: "Nicolas Guichot",
    rating: 5,
    comment: "Destacó el ambiente acogedor, cálido y tranquilo, y las porciones abundantes.",
    detail: "Palermo · Google Maps",
  },
];
```

- [ ] **Step 6: Apply the nine RGB tokens**

Replace only the values inside `:root` in `src/index.css`:

```css
:root {
  --color-cream: 247 242 232;
  --color-linen: 238 228 214;
  --color-parchment: 216 197 175;
  --color-coffee: 122 81 56;
  --color-espresso: 43 27 22;
  --color-forest: 53 72 59;
  --color-sage: 166 175 149;
  --color-copper: 184 97 59;
  --color-ink: 21 19 17;
}
```

- [ ] **Step 7: Run the content green checks**

Run:

```powershell
npm run build
rg -n 'Cold Brew|Cookie de chocolate|Pet friendly|WiFi disponible|Valentina R\.|Martin G\.|Lucia P\.|Santiago M\.|\$[0-9]|price|precio' src/data
rg -n 'Carolina Blanco|Nicolas Guichot|Brunch Roma|Limonada casera|Croissant con almendras' src/data
```

Expected: build exits 0; the first search has no output; the second finds all approved content.

- [ ] **Step 8: Commit content and palette**

```powershell
git add src/data/products.ts src/data/benefits.ts src/data/gallery.ts src/data/testimonials.ts src/index.css
git commit -m "feat: add approved Dorina content and palette"
```

---

### Task 4: Add official images and provenance

**Files:**
- Create: `public/images/hero-dorina.jpg`
- Create: `public/images/cafe-avocado.jpg`
- Create: `public/images/almuerzos.jpg`
- Create: `public/images/cheesecake.jpg`
- Create: `public/images/mesa-brunch.jpg`
- Create: `public/images/croissant-salado.jpg`
- Create: `public/images/SOURCES.md`

**Interfaces:**
- Consumes: official `@dorina.cafe` assets discovered with the Browser `pageAssets` capability.
- Produces: six local JPEGs referenced by Task 2 and Task 3, plus a source manifest.

- [ ] **Step 1: Inventory the official Instagram profile**

Open `https://www.instagram.com/dorina.cafe/?hl=es` with the Browser skill, call `pageAssets.list()`, and identify these exact original filenames:

```text
758377268_17959534125170197_758737748609657417_n.jpg
759010601_17960208564170197_8041708447065871135_n.jpg
776443808_17962634625170197_1817265403585796569_n.jpg
760587581_17960208870170197_2557506532197467983_n.jpg
778899171_995029850221437_5191427253260825119_n.jpg
759835256_17960208903170197_5682963381771409039_n.jpg
```

Expected: all six filenames are present as `image` assets. Stop if any are absent; do not substitute a third-party image.

- [ ] **Step 2: Bundle only the six approved assets**

Call `pageAssets.bundle()` with the inventory ID and the six asset IDs corresponding to the filenames above.

Expected summary:

```text
requestedCount: 6
downloadedCount: 6
failedCount: 0
```

- [ ] **Step 3: Copy and rename the JPEGs**

Use the returned bundle manifest to map original name to final file exactly:

```text
758377268_17959534125170197_758737748609657417_n.jpg -> public/images/hero-dorina.jpg
759010601_17960208564170197_8041708447065871135_n.jpg -> public/images/cafe-avocado.jpg
776443808_17962634625170197_1817265403585796569_n.jpg -> public/images/almuerzos.jpg
760587581_17960208870170197_2557506532197467983_n.jpg -> public/images/cheesecake.jpg
778899171_995029850221437_5191427253260825119_n.jpg -> public/images/mesa-brunch.jpg
759835256_17960208903170197_5682963381771409039_n.jpg -> public/images/croissant-salado.jpg
```

Use `Copy-Item -LiteralPath` for each binary. Do not edit or re-encode the JPEG bytes.

- [ ] **Step 4: Create the provenance manifest**

Create `public/images/SOURCES.md` with:

```markdown
# Fuentes de imágenes

Uso autorizado por el usuario el 24 de agosto de 2026. Todas las imágenes provienen del perfil oficial `@dorina.cafe`.

| Archivo | Publicación oficial | Uso | Texto alternativo |
|---|---|---|---|
| `hero-dorina.jpg` | https://www.instagram.com/dorina.cafe/reel/DbLc4xrRCti/ | Hero y galería | Mesa de Dorina Café con platos dulces y salados. |
| `cafe-avocado.jpg` | https://www.instagram.com/dorina.cafe/p/DbeEPiflCPa/ | Flat White, Avocado Toast y galería | Avocado toast con huevo poché y una taza de café. |
| `almuerzos.jpg` | https://www.instagram.com/dorina.cafe/p/DcEK0w0lnWp/ | Presentación, limonada y galería | Tres platos salados de Dorina Café sobre una mesa de madera. |
| `cheesecake.jpg` | https://www.instagram.com/dorina.cafe/reel/Dbay61qxk3C/ | Cheesecake y galería | Cheesecake de frutos rojos decorado con frutos y flores. |
| `mesa-brunch.jpg` | https://www.instagram.com/dorina.cafe/reel/DcL4oVnBj8a/ | Brunch y galería | Mesa con mbejú, tostado y porciones de torta. |
| `croissant-salado.jpg` | https://www.instagram.com/dorina.cafe/reel/DbYKfVdhRPV/ | Galería | Croissant salado con jamón y queso fundido. |
```

- [ ] **Step 5: Verify binaries and references**

Run:

```powershell
$dorinaImages = @(
  'public/images/hero-dorina.jpg',
  'public/images/cafe-avocado.jpg',
  'public/images/almuerzos.jpg',
  'public/images/cheesecake.jpg',
  'public/images/mesa-brunch.jpg',
  'public/images/croissant-salado.jpg'
)
Get-Item -LiteralPath $dorinaImages | Select-Object Name, Length
rg -n '/images/(hero-dorina|cafe-avocado|almuerzos|cheesecake|mesa-brunch|croissant-salado)\.jpg' src
npm run build
```

Expected: six non-empty JPEG files, every final path referenced in `src`, and a successful build.

- [ ] **Step 6: Commit official assets**

```powershell
git add public/images
git commit -m "assets: add authorized Dorina photography"
```

---

### Task 5: Final factual, functional and visual verification

**Files:**
- Verify: all files modified in Tasks 2–4.
- Modify only if an adaptation-caused defect exists inside the authorized scope.

**Interfaces:**
- Consumes: completed landing and approved design document.
- Produces: successful build, clean source audit, verified links and responsive visual review.

- [ ] **Step 1: Run the final build**

Run:

```powershell
npm run build
```

Expected: exit code 0.

- [ ] **Step 2: Audit fictitious and unapproved content**

Run:

```powershell
rg -n 'Café Nómada|Cafe Nomada|@cafenomada|Tu Marca|example\.com|Valentina R\.|Martin G\.|Lucia P\.|Santiago M\.|\$[0-9]|price|precio|2345 6789' src public
```

Expected: no output.

- [ ] **Step 3: Audit approved facts and links**

Run:

```powershell
rg -n '5491130014605|dorina\.cafe|monline\.com\.ar/DorinaCafe|gpYkqomR3pMLu2CB6|YW5y63X1NykVK8NJ9|Nicaragua 4816|Triunvirato 5600|8:30 a 20:00|9:30 a 20:00|9:00 a 20:00|Carolina Blanco|Nicolas Guichot' src public/images/SOURCES.md
```

Expected: every approved datum is found.

- [ ] **Step 4: Start the local development server**

Run and retain the session:

```powershell
npm run dev -- --host 127.0.0.1
```

Expected: Vite prints a local URL such as `http://127.0.0.1:5173/`.

- [ ] **Step 5: Review desktop at 1440 × 900**

Using the Browser skill and the exact Vite URL:

- set viewport to `1440 × 900`;
- confirm Dorina hero copy and official hero image;
- confirm six product cards without prices;
- confirm four benefits, six gallery images and two attributed reviews;
- confirm two branch cards with different weekend hours and individual Maps buttons;
- confirm WhatsApp, Instagram and menu controls;
- confirm no developer credit or fictitious content;
- inspect console errors, horizontal overflow, broken images, malformed crops, text contrast and focus visibility.

Expected: all checks pass. If the hero crop is visibly unacceptable, choose another already-approved official photo; do not edit `Hero.tsx` or generate an image.

- [ ] **Step 6: Review mobile at 390 × 844**

Using the same browser tab:

- set viewport to `390 × 844`;
- open and close the mobile navigation;
- verify all eight navigation targets;
- verify card stacking, readable schedules, both Maps buttons and contact actions;
- tab through interactive elements and confirm visible focus;
- confirm no clipped text, horizontal overflow or distorted imagery.

Expected: all checks pass.

- [ ] **Step 7: Verify external hrefs without activating them**

Inspect rendered anchors and assert these exact `href` values exist:

```text
https://wa.me/5491130014605
https://www.instagram.com/dorina.cafe/?hl=es
https://monline.com.ar/DorinaCafe
https://maps.app.goo.gl/gpYkqomR3pMLu2CB6
https://maps.app.goo.gl/YW5y63X1NykVK8NJ9
```

Do not click WhatsApp or send any message.

- [ ] **Step 8: Fix only authorized defects and repeat affected checks**

For a defect caused by the adaptation, edit only the responsible file already listed in this plan, rerun `npm run build`, and repeat the affected viewport. If a fix requires another component or build configuration, stop and request scope approval.

- [ ] **Step 9: Commit verification fixes only when changes exist**

```powershell
git add src public/images
git commit -m "fix: polish Dorina responsive landing"
```

Do not create an empty commit.

- [ ] **Step 10: Confirm repository identity and prepare delivery**

Run:

```powershell
git rev-parse --show-toplevel
git branch --show-current
git remote -v
git status --short
git log -5 --oneline
```

Expected: root, branch and remotes match Task 1; worktree is clean; no push or deployment occurred.
