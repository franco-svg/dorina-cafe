# Dorina Café landing — diseño aprobado

Fecha: 2026-08-24  
Estado: aprobado y revisado por el usuario  
Proyecto previsto: `D:\Devs\dorinacafe\dorina-cafe`

## Objetivo

Adaptar la plantilla `https://github.com/franco-svg/Test_landing.git` para Dorina Café sin alterar su arquitectura general, orden de secciones ni configuración de build. La landing debe presentar la propuesta gastronómica, facilitar el acceso al menú, WhatsApp y las dos sucursales, y usar imágenes oficiales del comercio autorizadas por el usuario. Solo se modificarán los cinco componentes o contratos autorizados para resolver limitaciones confirmadas del template.

No se publicará, no se hará push y no se configurará hosting.

## Fuentes y evidencia

- Instagram vigente: `https://www.instagram.com/dorina.cafe/?hl=es`.
- WhatsApp: `https://wa.me/5491130014605`.
- Menú: `https://monline.com.ar/DorinaCafe`.
- Palermo: `https://maps.app.goo.gl/gpYkqomR3pMLu2CB6`.
- Villa Urquiza: `https://maps.app.goo.gl/YW5y63X1NykVK8NJ9`.
- El usuario autorizó el uso de imágenes oficiales publicadas por `@dorina.cafe`.

Los enlaces antiguos a `@dorinacafe` se consideran desactualizados porque ese perfil no está disponible. Se usará únicamente `@dorina.cafe`.

## Identidad y contenido

El nombre será **Dorina Café**. La descripción se limitará a café de especialidad, pastelería artesanal, desayunos, brunch y almuerzos. El tono será cálido, sencillo y urbano, sin inventar historia fundacional, trayectoria, certificaciones ni disponibilidad permanente.

Hero propuesto:

- Título: “Café de especialidad, pastelería artesanal y mucho más”.
- Subtítulo: “Desayunos, brunch y almuerzos para disfrutar en Palermo y Villa Urquiza”.
- CTA principal: WhatsApp, dentro de la jerarquía prevista por la plantilla.
- CTA secundario: menú completo.

Presentación propuesta:

> Dorina reúne café de especialidad, pastelería artesanal y platos para disfrutar durante todo el día en dos rincones de Buenos Aires.

Los productos destacados serán Flat White, Avocado Toast, Cheesecake de frutos rojos, Croissant con almendras, Brunch Roma y Limonada casera. Las tarjetas mostrarán nombre, descripción e imagen, **sin precios**. El menú externo conservará la información comercial actualizada.

Los diferenciales serán café de especialidad, pastelería artesanal, brunch disponible todo el día, propuesta dulce y salada, dos sucursales y opciones puntuales veganas, vegetarianas o sin TACC. No se afirmará que toda la carta cubre esas categorías.

## Datos operativos

- Palermo: Nicaragua 4816, C1414, CABA.
- Villa Urquiza: Av. Triunvirato 5600, C1431, CABA.
- WhatsApp: `+54 9 11 3001-4605` mediante `https://wa.me/5491130014605`.
- Instagram: `@dorina.cafe`.
- El único horario verificado para ambas sucursales es lunes de 8:30 a 20:00.
- Los demás horarios y el teléfono convencional se omitirán.

Cada sucursal tendrá su enlace de Google Maps correspondiente. No se mezclarán ambas direcciones en un único enlace.

## Arquitectura y superficies editables

La implementación conservará React, TypeScript, Vite y Tailwind CSS. Antes de editar se comprobará la estructura recién clonada contra el mapa de plantilla de la skill.

Los cambios de contenido se limitarán a:

- `src/config/siteConfig.ts`: identidad, SEO, hero, presentación, contacto, secciones y enlaces.
- `src/data/products.ts`: seis productos sin precios.
- `src/data/benefits.ts`: diferenciales respaldados.
- `src/data/gallery.ts`: inventario de imágenes oficiales.
- `src/data/testimonials.ts`: sin testimonios ficticios.
- `src/index.css`: únicamente los nueve tokens de color existentes.
- `public/images/`: imágenes oficiales optimizadas.

La inspección del template confirmó tres incompatibilidades con el brief: solo admite una sucursal, siempre muestra un teléfono y siempre renderiza testimonios. El usuario autorizó una ampliación mínima para modificar `src/types/index.ts`, `src/App.tsx`, `src/components/sections/Location.tsx`, `src/components/sections/Contact.tsx` y `src/components/layout/Footer.tsx`. Esos cambios solo permitirán dos sucursales, teléfono opcional, testimonios vacíos y la eliminación del crédito ficticio. No se modificará la configuración de build ni se rediseñarán otros componentes.

## Tratamiento de testimonios y crédito

No hay reseñas textuales verificables con autor. `testimonials` quedará sin contenido inventado y `App.tsx` no renderizará la sección cuando el arreglo esté vacío.

El usuario pidió eliminar por completo el crédito “Sitio desarrollado por” porque todavía no dispone de una landing propia. Se eliminarán también los campos `developer`, `Tu Marca` y `example.com` para no dejar datos ficticios ni enlaces vacíos.

## Recursos visuales

Se seleccionarán fotos oficiales de `@dorina.cafe` para hero, presentación, productos y galería. Cada imagen se asociará a un producto solo cuando este resulte identificable. Los recortes previstos serán horizontal para hero, editorial para presentación y cuadrados o verticales para productos y galería.

Antes de usar cada recurso se comprobarán resolución, encuadre y peso. Se mantendrá trazabilidad de URL de origen, función, archivo final y texto alternativo. No se usarán imágenes de terceros ni se generarán imágenes con IA.

Archivos previstos:

- `hero-dorina.jpg`
- `cafe-avocado.jpg`
- `almuerzos.jpg`
- `cheesecake.jpg`
- `mesa-brunch.jpg`
- `croissant-salado.jpg`

## Paleta

Los valores se escribirán como canales RGB separados por espacios:

| Token | RGB | Función |
|---|---:|---|
| `--color-cream` | `247 242 232` | Fondo principal |
| `--color-linen` | `238 228 214` | Fondo secundario |
| `--color-parchment` | `216 197 175` | Superficies y bordes |
| `--color-coffee` | `122 81 56` | Marca secundaria |
| `--color-espresso` | `43 27 22` | Fondos oscuros |
| `--color-forest` | `53 72 59` | Acción principal |
| `--color-sage` | `166 175 149` | Acento suave |
| `--color-copper` | `184 97 59` | Acento y foco |
| `--color-ink` | `21 19 17` | Texto principal |

## Manejo de faltantes e incompatibilidades

- Un dato no confirmado se omite.
- Una imagen insuficiente se reemplaza por otra imagen oficial autorizada; no se mejora con generación de contenido nuevo.
- Un enlace debe ser completo y verificable antes de incorporarse.
- Una incompatibilidad distinta de las cinco rutas autorizadas detiene la edición; no se amplía el alcance silenciosamente.
- No se sustituyen testimonios ni horarios faltantes por texto ficticio.

## Verificación

1. Comprobar que existan todas las rutas requeridas por el mapa de plantilla.
2. Instalar dependencias cuando falten y ejecutar `npm run build`.
3. Buscar restos de `Café Nómada`, `Cafe Nomada`, `@cafenomada`, `Tu Marca` y `example.com`.
4. Verificar WhatsApp, Instagram, menú y ambos enlaces de Google Maps.
5. Confirmar que toda imagen referenciada exista y tenga texto alternativo fiel.
6. Comparar textos, productos, diferenciales y paleta contra este diseño.
7. Revisar un viewport móvil cercano a `390 × 844` y uno de escritorio cercano a `1440 × 900`.
8. Revisar desbordes, recortes, deformaciones, contraste, foco visible y secciones vacías.

## Criterios de aceptación

- La landing mantiene la estructura general y el diseño del template, con solo las cinco rutas adicionales autorizadas.
- No contiene precios en productos destacados.
- No contiene datos operativos, reseñas o imágenes inventados.
- Muestra correctamente las dos sucursales y los tres canales principales: WhatsApp, menú e Instagram.
- Omite la sección de testimonios y el crédito de desarrollador.
- Usa únicamente imágenes oficiales autorizadas de Dorina Café.
- Compila sin errores y supera la revisión visual móvil y de escritorio.
- No queda publicada ni se realiza push.
