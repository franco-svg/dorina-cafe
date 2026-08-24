# Dorina Café Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir una landing de Dorina Café basada en `Test_landing`, con dos sucursales, productos sin precios, imágenes oficiales, WhatsApp, menú e Instagram verificados.

**Architecture:** Conservar React, TypeScript, Vite, Tailwind y la estructura visual del template. El contenido seguirá centralizado en `siteConfig` y los archivos de `src/data`; una ampliación mínima del modelo permitirá múltiples sucursales, teléfono opcional, testimonios vacíos y la ausencia de crédito de desarrollador.

**Tech Stack:** React 18, TypeScript 5.7, Vite 6, Tailwind CSS 3, lucide-react, npm.

## Global Constraints

- Proyecto destino: `D:\Devs\dorinacafe\dorina-cafe`.
- Repositorio: `https://github.com/franco-svg/Test_landing.git`; clonar la rama predeterminada actual.
- No publicar, no hacer push, no configurar hosting y no ejecutar `npm run deploy`.
- No mostrar precios en productos destacados.
- No inventar horarios, teléfono convencional, reseñas, historia, productos ni atributos del local.
- Usar únicamente imágenes oficiales de `@dorina.cafe`, autorizadas por el usuario.
- Usar `@dorina.cafe`; no usar el enlace antiguo e inexistente `@dorinacafe`.
- Horario publicable: solamente lunes, 8:30–20:00, para ambas sucursales.
- Conservar componentes y layout salvo las rutas expresamente autorizadas en la Task 2.
- Eliminar por completo el crédito “Sitio desarrollado por”, `Tu Marca` y `example.com`.
- Detenerse si la estructura recién clonada no contiene las rutas requeridas o cambió sus interfaces de forma incompatible.

---

### Task 1: Clonar y validar la línea base

**Files:**
- Create: `D:\Devs\dorinacafe\dorina-cafe\` mediante clone
- Verify: `package.json`
- Verify: `src/config/siteConfig.ts`
- Verify: `src/data/products.ts`
- Verify: `src/data/benefits.ts`
- Verify: `src/data/gallery.ts`
- Verify: `src/data/testimonials.ts`
- Verify: `src/types/index.ts`
- Verify: `src/components/sections/Location.tsx`
- Verify: `src/components/sections/Contact.tsx`
- Verify: `src/components/sections/Testimonials.tsx`
- Verify: `src/components/layout/Footer.tsx`
- Verify: `src/App.tsx`
- Verify: `src/index.css`
- Verify: `public/images/`

**Interfaces:**
- Consumes: diseño aprobado en `D:\Devs\dorinacafe\docs\superpowers\specs\2026-08-24-dorina-cafe-landing-design.md`.
- Produces: checkout limpio, compatible y con build de referencia exitoso.

- [ ] **Step 1: Confirmar que el destino siga libre**

Run:

```powershell
Test-Path -LiteralPath 'D:\Devs\dorinacafe\dorina-cafe'
```

Expected: `False`. Si devuelve `True`, detenerse y no mezclar ni sobrescribir contenido.

- [ ] **Step 2: Clonar la plantilla en la ruta aprobada**

Run:

```powershell
git clone https://github.com/franco-svg/Test_landing.git 'D:\Devs\dorinacafe\dorina-cafe'
```

Expected: clone completo sin errores.

- [ ] **Step 3: Verificar todas las rutas requeridas**

Run from `D:\Devs\dorinacafe\dorina-cafe`:

```powershell
$required = @(
  'package.json',
  'src/config/siteConfig.ts',
  'src/data/products.ts',
  'src/data/benefits.ts',
  'src/data/gallery.ts',
  'src/data/testimonials.ts',
  'src/types/index.ts',
  'src/components/sections/Location.tsx',
  'src/components/sections/Contact.tsx',
  'src/components/sections/Testimonials.tsx',
  'src/components/layout/Footer.tsx',
  'src/App.tsx',
  'src/index.css',
  'public/images'
)
$missing = $required | Where-Object { -not (Test-Path -LiteralPath $_) }
$missing
```

Expected: sin salida. Si aparece una ruta, enumerarla y detenerse.

- [ ] **Step 4: Confirmar las interfaces conocidas antes de editar**

Run:

```powershell
rg -n 'address: string|mapsUrl: string|phone: string|developer:|<Testimonials|contact\.phone|contact\.address' src
```

Expected: una sola dirección/Maps en `SiteConfig`, teléfono obligatorio, crédito de desarrollador, `Testimonials` incondicional y consumidores en Location/Contact/Footer. Si la forma difiere, detenerse.

- [ ] **Step 5: Instalar dependencias y ejecutar el build de referencia**

Run:

```powershell
npm install
npm run build
```

Expected: TypeScript y Vite finalizan con código 0 y crean `dist/`.

- [ ] **Step 6: Confirmar que el checkout continúa limpio**

Run:

```powershell
git status --short
```

Expected: sin cambios versionados. No crear commit para esta task porque aún no hay modificaciones del proyecto.

---

### Task 2: Adaptar el template a dos sucursales y datos opcionales

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/config/siteConfig.ts`
- Modify: `src/components/sections/Location.tsx`
- Modify: `src/components/sections/Contact.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `ScheduleItem`, `InternalLink` y componentes UI existentes.
- Produces: `Branch`, `SiteConfig["contact"]["branches"]`, `SiteConfig["contact"]["phone"]?: string`; `Location`, `Contact` y `Footer` compatibles con esos campos.

- [ ] **Step 1: Capturar las limitaciones actuales como prueba de cambio**

Run:

```powershell
rg -n 'address: string|mapsUrl: string|phone: string|developer:|<Testimonials|label: "Teléfono"' src
```

Expected: aparecen los campos y renders que el brief prohíbe. Esta es la línea base que debe desaparecer.

- [ ] **Step 2: Definir el contrato de sucursal y contacto opcional**

In `src/types/index.ts`, add this type after `ScheduleItem`:

```ts
export type Branch = {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
};
```

Replace the `contact` shape inside `SiteConfig` with:

```ts
contact: {
  phone?: string;
  whatsappUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  menuUrl: string;
  branches: Branch[];
};
```

Remove the complete `developer` property from `SiteConfig`.

- [ ] **Step 3: Reemplazar la configuración ficticia por la identidad y enlaces aprobados**

In `src/config/siteConfig.ts`, keep the existing `SiteConfig` object shape except for the approved contact extension and use these exact values:

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
  imageAlt: "Mesa de Dorina Café con platos dulces y salados junto a una ventana.",
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
    },
    {
      id: "villa-urquiza",
      name: "Villa Urquiza",
      address: "Av. Triunvirato 5600, C1431, CABA",
      mapsUrl: "https://maps.app.goo.gl/YW5y63X1NykVK8NJ9",
    },
  ],
},
schedule: [{ day: "Lunes", hours: "8:30 a 20:00" }],
```

Use these section and navigation values:

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
    description: "Una selección real de platos y momentos compartidos por Dorina Café.",
  },
  testimonials: {
    eyebrow: "",
    title: "",
    description: "",
  },
  location: {
    eyebrow: "Sucursales",
    title: "Dos sucursales, la misma esencia",
    description: "Elegí la sede que te quede más cerca y abrí las indicaciones en Google Maps.",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos",
    description: "Escribinos por WhatsApp, mirá el menú o seguinos en Instagram.",
  },
},
navigation: [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Sucursales", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
],
footerLinks: [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Sucursales", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
],
```

Do not include `phone`, `developer`, prices or unverified schedule entries.

- [ ] **Step 4: Renderizar dos sucursales dentro del layout de Location**

In `src/components/sections/Location.tsx`, remove the single map/embed branch and render `contact.branches` as cards in the existing two-column section. Each card must use this structure:

```tsx
{contact.branches.map((branch) => (
  <article
    key={branch.id}
    className="rounded-lg border border-coffee/10 bg-linen p-6 shadow-soft"
  >
    <div className="flex gap-3">
      <MapPin className="mt-1 shrink-0 text-copper" size={22} aria-hidden="true" />
      <div>
        <h3 className="font-display text-xl font-bold text-espresso">{branch.name}</h3>
        <p className="mt-2 text-sm leading-6 text-ink/72">{branch.address}</p>
      </div>
    </div>
    <Button href={branch.mapsUrl} external icon={<MapPin size={18} />} className="mt-5">
      {ctaLabel}
    </Button>
  </article>
))}
```

Keep the verified schedule once, alongside the section heading. Do not show an iframe, map placeholder or combined Maps link.

- [ ] **Step 5: Omitir teléfono y agregar acceso al menú en Contact**

In `src/components/sections/Contact.tsx`, build the contact items with the phone entry only when `contact.phone` exists:

```tsx
const contactItems = [
  {
    label: "WhatsApp",
    value: "+54 9 11 3001-4605",
    href: contact.whatsappUrl,
    icon: MessageCircle,
    external: true,
  },
  ...(contact.phone
    ? [{
        label: "Teléfono",
        value: contact.phone,
        href: `tel:${contact.phone.replace(/\s/g, "")}`,
        icon: Phone,
        external: false,
      }]
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

Add an outline button linking to `contact.menuUrl` with label `Ver menú`. Preserve the WhatsApp and Instagram buttons and existing card layout.

- [ ] **Step 6: Mostrar ambas direcciones y eliminar el crédito en Footer**

In `src/components/layout/Footer.tsx`:

- remove `developer` from `FooterProps` and the function parameters;
- replace the single `contact.address` paragraph with `contact.branches.map(...)`, showing branch name and address;
- delete the paragraph containing `developer.creditLabel`, `developer.url` and `developer.name`;
- keep copyright, navigation, schedule, Instagram and WhatsApp.

The branch output must use stable keys:

```tsx
{contact.branches.map((branch) => (
  <p key={branch.id} className="flex gap-2 text-sm leading-6 text-cream/72">
    <MapPin size={18} className="mt-0.5 shrink-0 text-copper" aria-hidden="true" />
    <span><strong className="text-cream">{branch.name}:</strong> {branch.address}</span>
  </p>
))}
```

- [ ] **Step 7: Omitir testimonios vacíos y ajustar Footer en App**

In `src/App.tsx`, replace the unconditional testimonial render with:

```tsx
{testimonials.length > 0 ? (
  <Testimonials testimonials={testimonials} section={siteConfig.sections.testimonials} />
) : null}
```

Remove `developer={siteConfig.developer}` from `<Footer />`. Keep all other section order unchanged.

- [ ] **Step 8: Ejecutar la verificación estructural**

Run:

```powershell
npm run build
rg -n 'Tu Marca|example\.com|developer:|contact\.address|contact\.mapsUrl|label: "Teléfono"' src
```

Expected: build exitoso; búsqueda sin resultados. `Phone` may remain imported only if the conditional phone item uses it.

- [ ] **Step 9: Commit**

```powershell
git add src/types/index.ts src/config/siteConfig.ts src/components/sections/Location.tsx src/components/sections/Contact.tsx src/components/layout/Footer.tsx src/App.tsx
git commit -m "feat: support Dorina locations and optional content"
```

---

### Task 3: Cargar productos, diferenciales, galería y paleta

**Files:**
- Modify: `src/data/products.ts`
- Modify: `src/data/benefits.ts`
- Modify: `src/data/gallery.ts`
- Modify: `src/data/testimonials.ts`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `Product`, `Benefit`, `GalleryImage`, `Testimonial` y las rutas de imágenes definidas en Task 4.
- Produces: arrays estáticos respaldados y los nueve tokens RGB aprobados.

- [ ] **Step 1: Reemplazar los productos sin incluir precios**

Set `products` to these six objects:

```ts
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
    description: "Tostón de masa madre con palta, huevo poché, tomates cherry, praliné de nueces y lima.",
    image: "/images/cafe-avocado.jpg",
    imageAlt: "Avocado toast con huevo poché y una taza de café.",
  },
  {
    id: "cheesecake-frutos-rojos",
    name: "Cheesecake de frutos rojos",
    description: "Porción de cheesecake de frutos rojos, sujeta a disponibilidad.",
    image: "/images/cheesecake.jpg",
    imageAlt: "Cheesecake de frutos rojos decorado con frutos y flores.",
  },
  {
    id: "croissant-almendras",
    name: "Croissant con almendras",
    description: "Croissant con almendras de la selección de pastelería artesanal.",
    image: "/images/hero-dorina.jpg",
    imageAlt: "Mesa con platos dulces y salados de Dorina Café.",
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

Run:

```powershell
rg -n '\$|precio|price' src/data/products.ts
```

Expected: sin resultados.

- [ ] **Step 2: Reemplazar diferenciales no verificados**

Set `benefits` to:

```ts
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

Do not retain pet-friendly, WiFi or ambience claims from the template.

- [ ] **Step 3: Crear la galería con descripciones fieles**

Set `galleryImages` to:

```ts
export const galleryImages: GalleryImage[] = [
  { id: "mesa", src: "/images/hero-dorina.jpg", alt: "Mesa de Dorina Café con platos dulces y salados junto a una ventana.", featured: true },
  { id: "cafe-avocado", src: "/images/cafe-avocado.jpg", alt: "Avocado toast con huevo poché y una taza de café." },
  { id: "almuerzos", src: "/images/almuerzos.jpg", alt: "Tres platos salados de Dorina Café sobre una mesa de madera." },
  { id: "cheesecake", src: "/images/cheesecake.jpg", alt: "Cheesecake de frutos rojos decorado con frutos y flores.", featured: true },
  { id: "brunch", src: "/images/mesa-brunch.jpg", alt: "Mesa con mbejú, tostado y porciones de torta." },
  { id: "croissant-salado", src: "/images/croissant-salado.jpg", alt: "Croissant salado con jamón y queso fundido." },
];
```

- [ ] **Step 4: Eliminar los testimonios ficticios**

Replace the export in `src/data/testimonials.ts` with:

```ts
import type { Testimonial } from "../types";

export const testimonials: Testimonial[] = [];
```

- [ ] **Step 5: Aplicar los nueve tokens RGB aprobados**

In `src/index.css`, keep all selectors and replace only the `:root` values:

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

- [ ] **Step 6: Build y búsqueda de afirmaciones heredadas**

Run:

```powershell
npm run build
rg -n 'Café Nómada|Cafe Nomada|@cafenomada|Pet friendly|WiFi disponible|Cliente frecuente|Trabajo remoto|\$[0-9]' src
```

Expected: build exitoso y búsqueda sin resultados.

- [ ] **Step 7: Commit**

```powershell
git add src/data/products.ts src/data/benefits.ts src/data/gallery.ts src/data/testimonials.ts src/index.css
git commit -m "feat: add Dorina menu content and visual palette"
```

---

### Task 4: Incorporar imágenes oficiales y registrar procedencia

**Files:**
- Create: `public/images/hero-dorina.jpg`
- Create: `public/images/cafe-avocado.jpg`
- Create: `public/images/almuerzos.jpg`
- Create: `public/images/cheesecake.jpg`
- Create: `public/images/mesa-brunch.jpg`
- Create: `public/images/croissant-salado.jpg`
- Create: `public/images/SOURCES.md`

**Interfaces:**
- Consumes: inventario `pageAssets` de `https://www.instagram.com/dorina.cafe/?hl=es` y la autorización del usuario.
- Produces: seis JPEG locales, cada uno menor de 100 KB en la muestra investigada, y un registro de fuente/uso/alt.

- [ ] **Step 1: Volver a inventariar los recursos oficiales**

Use the Browser `pageAssets` capability on the official Instagram profile. Bundle only the six image assets whose original names are:

```text
758377268_17959534125170197_758737748609657417_n.jpg
759010601_17960208564170197_8041708447065871135_n.jpg
776443808_17962634625170197_1817265403585796569_n.jpg
760587581_17960208870170197_2557506532197467983_n.jpg
778899171_995029850221437_5191427253260825119_n.jpg
759835256_17960208903170197_5682963381771409039_n.jpg
```

Expected: six successful JPEG downloads and zero failures. If one source is unavailable, stop; do not substitute a third-party image.

- [ ] **Step 2: Copiar y renombrar los binarios según el manifest**

From the bundle manifest, map original `name` to destination exactly as follows:

```text
758377268_17959534125170197_758737748609657417_n.jpg -> public/images/hero-dorina.jpg
759010601_17960208564170197_8041708447065871135_n.jpg -> public/images/cafe-avocado.jpg
776443808_17962634625170197_1817265403585796569_n.jpg -> public/images/almuerzos.jpg
760587581_17960208870170197_2557506532197467983_n.jpg -> public/images/cheesecake.jpg
778899171_995029850221437_5191427253260825119_n.jpg -> public/images/mesa-brunch.jpg
759835256_17960208903170197_5682963381771409039_n.jpg -> public/images/croissant-salado.jpg
```

Use `Copy-Item -LiteralPath` for these binary files; do not alter the JPEG bytes.

- [ ] **Step 3: Escribir el registro de procedencia**

Create `public/images/SOURCES.md` with this table:

```markdown
# Fuentes de imágenes

Uso autorizado por el usuario el 24 de agosto de 2026. Todas las imágenes provienen del perfil oficial `@dorina.cafe`.

| Archivo | Publicación oficial | Uso | Texto alternativo |
|---|---|---|---|
| `hero-dorina.jpg` | https://www.instagram.com/dorina.cafe/reel/DbLc4xrRCti/ | Hero y galería | Mesa de Dorina Café con platos dulces y salados junto a una ventana. |
| `cafe-avocado.jpg` | https://www.instagram.com/dorina.cafe/p/DbeEPiflCPa/ | Flat White, Avocado Toast y galería | Avocado toast con huevo poché y una taza de café. |
| `almuerzos.jpg` | https://www.instagram.com/dorina.cafe/p/DcEK0w0lnWp/ | Presentación, limonada y galería | Tres platos salados de Dorina Café sobre una mesa de madera. |
| `cheesecake.jpg` | https://www.instagram.com/dorina.cafe/reel/Dbay61qxk3C/ | Cheesecake y galería | Cheesecake de frutos rojos decorado con frutos y flores. |
| `mesa-brunch.jpg` | https://www.instagram.com/dorina.cafe/reel/DcL4oVnBj8a/ | Brunch y galería | Mesa con mbejú, tostado y porciones de torta. |
| `croissant-salado.jpg` | https://www.instagram.com/dorina.cafe/reel/DbYKfVdhRPV/ | Galería | Croissant salado con jamón y queso fundido. |
```

- [ ] **Step 4: Verificar dimensiones, peso y referencias**

Run:

```powershell
Get-Item public/images/hero-dorina.jpg, public/images/cafe-avocado.jpg, public/images/almuerzos.jpg, public/images/cheesecake.jpg, public/images/mesa-brunch.jpg, public/images/croissant-salado.jpg | Select-Object Name,Length
rg -n '/images/(hero-dorina|cafe-avocado|almuerzos|cheesecake|mesa-brunch|croissant-salado)\.jpg' src
npm run build
```

Expected: six non-empty JPEG files, every path referenced in `src`, all files below 100 KB unless the current official asset is higher resolution, and build exitoso.

- [ ] **Step 5: Commit**

```powershell
git add public/images src/config/siteConfig.ts src/data/products.ts src/data/gallery.ts
git commit -m "assets: add authorized Dorina photography"
```

---

### Task 5: Verificación factual, funcional y visual

**Files:**
- Verify: all modified files
- Modify only if verification exposes an adaptation-caused defect within the authorized scope

**Interfaces:**
- Consumes: complete landing from Tasks 1–4.
- Produces: successful build, clean source audit, link audit and responsive visual review.

- [ ] **Step 1: Ejecutar el build final desde cero**

Run:

```powershell
npm run build
```

Expected: exit code 0; TypeScript and Vite complete successfully.

- [ ] **Step 2: Auditar datos ficticios y precios**

Run:

```powershell
rg -n 'Café Nómada|Cafe Nomada|@cafenomada|Tu Marca|example\.com|Valentina R\.|Martin G\.|Lucia P\.|Santiago M\.|\$[0-9]|price|precio' src public
```

Expected: sin resultados. Separately inspect every remaining `Palermo` match because Palermo is a real Dorina branch.

- [ ] **Step 3: Auditar enlaces y datos operativos**

Run:

```powershell
rg -n '5491130014605|dorina\.cafe|monline\.com\.ar/DorinaCafe|gpYkqomR3pMLu2CB6|YW5y63X1NykVK8NJ9|Nicaragua 4816|Triunvirato 5600|8:30 a 20:00' src
rg -n 'dorinacafe|2345 6789|Lunes a viernes|Sábados|Domingos' src
```

Expected: first command finds every approved datum; second command returns no stale values. The `dorinacafe` search must not be satisfied by `dorina.cafe` because the dot is literal in the first pattern.

- [ ] **Step 4: Confirmar que no existan secciones o enlaces vacíos**

Run:

```powershell
rg -n '#opiniones|<Testimonials|testimonials\.length > 0|developer=' src/App.tsx src/config/siteConfig.ts src/components
```

Expected: only the conditional `testimonials.length > 0` and the `Testimonials` component definition remain; no navigation to `#opiniones` and no `developer=` prop.

- [ ] **Step 5: Iniciar el servidor local para revisión**

Run:

```powershell
npm run dev -- --host 127.0.0.1
```

Expected: Vite reports `http://127.0.0.1:5173/`; if that port is occupied, record the exact alternate localhost URL printed by Vite. Keep the process running only for the review.

- [ ] **Step 6: Revisar escritorio en 1440 × 900**

Using the Browser skill and its local-web-development guidance:

- set the viewport to `1440 × 900`;
- open the local Vite URL;
- confirm hero copy, six product cards without prices, four benefits, six gallery images, no testimonials, two branch cards and no developer credit;
- inspect console logs;
- verify no horizontal overflow, broken image, malformed crop, low contrast or invisible focus state.

Expected: no console errors and all checks pass.

- [ ] **Step 7: Revisar móvil en 390 × 844**

Using the same local tab:

- set the viewport to `390 × 844`;
- verify navbar behavior, card stacking, text wrapping, both Maps buttons, WhatsApp/menu/Instagram controls and footer addresses;
- tab through interactive elements and confirm visible focus;
- confirm no horizontal overflow or clipped content.

Expected: no visual or interaction defects.

- [ ] **Step 8: Verificar hrefs sin activar servicios externos**

Inspect the rendered DOM and assert these exact hrefs are present:

```text
https://wa.me/5491130014605
https://www.instagram.com/dorina.cafe/?hl=es
https://monline.com.ar/DorinaCafe
https://maps.app.goo.gl/gpYkqomR3pMLu2CB6
https://maps.app.goo.gl/YW5y63X1NykVK8NJ9
```

Expected: each exact URL appears at least once; do not send a WhatsApp message or perform any external write.

- [ ] **Step 9: Corregir solo defectos causados por la adaptación y repetir verificaciones**

For each defect, edit only the already authorized file responsible, rerun `npm run build`, then repeat the affected viewport check. If a fix requires a new component or route outside the authorized list, stop and ask for scope approval.

- [ ] **Step 10: Commit final de verificación, si hubo correcciones**

```powershell
git add src public/images
git commit -m "fix: polish Dorina responsive landing"
```

If Step 9 made no changes, do not create an empty commit.

- [ ] **Step 11: Preparar la entrega sin publicar**

Run:

```powershell
git status --short
git log -4 --oneline
```

Expected: worktree limpio and local commits present. Report project path, changed files, build result, viewports, image sources, omitted data and explicit confirmation that no publish or push occurred.
