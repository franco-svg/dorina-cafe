# Landing page para cafeterias

Plantilla frontend reutilizable creada con React, TypeScript, Vite y Tailwind CSS. El contenido de ejemplo usa la cafeteria ficticia **Cafe Nomada**, ubicada en Palermo, Ciudad Autonoma de Buenos Aires.

## 1. Instalar el proyecto

```bash
npm install
```

## 2. Ejecutar en desarrollo

```bash
npm run dev
```

Vite mostrara una URL local, normalmente `http://localhost:5173`.

## 3. Generar el build

```bash
npm run build
```

Para previsualizar el build:

```bash
npm run preview
```

## 4. Cambiar los datos del negocio

La informacion principal se modifica en:

```text
src/config/siteConfig.ts
```

Alli podes cambiar:

- Nombre del negocio
- Tagline
- Descripcion
- Logo o texto de marca
- Textos del hero
- Direccion
- Telefono
- WhatsApp
- Instagram
- Google Maps
- Horarios
- Datos del desarrollador
- Enlaces de navegacion y footer

## 5. Reemplazar imagenes

Las imagenes placeholder estan en:

```text
public/images/
```

Para reemplazarlas por fotos reales, podes mantener los mismos nombres de archivo o actualizar las rutas en:

```text
src/config/siteConfig.ts
src/data/products.ts
src/data/gallery.ts
```

Recomendaciones:

- Usar imagenes horizontales para hero, historia y mapa visual.
- Usar imagenes cuadradas o 4:3 para productos.
- Optimizar peso antes de subirlas.
- Mantener textos `alt` descriptivos.

## 6. Modificar colores

Los colores estan centralizados como variables CSS en:

```text
src/index.css
```

Edita los valores dentro de `:root`, por ejemplo:

```css
--color-cream: 255 248 236;
--color-forest: 23 63 53;
--color-coffee: 107 68 47;
```

Tailwind consume esas variables desde:

```text
tailwind.config.js
```

Asi podes cambiar la identidad visual sin tocar los componentes.

## 7. Agregar o eliminar productos destacados

Edita:

```text
src/data/products.ts
```

Cada producto tiene:

- `name`
- `description`
- `image`
- `imageAlt`
- `tag` opcional

Los productos se renderizan automaticamente con `.map()`.

## 8. Modificar beneficios

Edita:

```text
src/data/benefits.ts
```

Cada beneficio tiene:

- `title`
- `description`
- `icon`

Los iconos disponibles estan tipados en:

```text
src/types/index.ts
```

## 9. Cambiar opiniones

Edita:

```text
src/data/testimonials.ts
```

Cada opinion tiene:

- `name`
- `rating`
- `comment`
- `detail` opcional

No hay integracion con Google Reviews.

## 10. Configurar ubicacion, contacto y horarios

Edita:

```text
src/config/siteConfig.ts
```

En `contact` podes cambiar:

- `address`
- `phone`
- `whatsappUrl`
- `instagramHandle`
- `instagramUrl`
- `mapsUrl`
- `mapsEmbedUrl`
- `mapPlaceholderImage`

La landing muestra la ubicacion y el mapa en una seccion propia, y WhatsApp, telefono e Instagram en una seccion separada de contacto.

En `schedule` podes agregar, quitar o modificar los dias y horarios. Si `mapsEmbedUrl` queda vacio, la pagina muestra un placeholder visual local.

## 11. Desplegar en Vercel

1. Subi el proyecto a un repositorio de GitHub.
2. En Vercel, elegi **Add New Project**.
3. Importa el repositorio.
4. Vercel detectara Vite automaticamente.
5. Verifica esta configuracion:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Publica el proyecto.

## Estructura principal

```text
src/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── config/
├── data/
├── types/
├── App.tsx
├── main.tsx
└── index.css
```

La plantilla es exclusivamente frontend. No incluye backend, base de datos, autenticacion, carrito, pagos, reservas ni integraciones complejas.
﻿
