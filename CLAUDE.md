# Personal Portfolio — Juan José Peñaherrera

## Qué es esto

Sitio personal bilingüe (ES/EN) de Juan José Peñaherrera, para usar como URL única en bio de
LinkedIn, Instagram y CV. Público objetivo: reclutadores internacionales para roles de
**Product Manager / Product Analyst**.

Posicionamiento (no negociable, decidido explícitamente por el usuario): el hero debe combinar
las **3 identidades** — Product Manager, Product Analyst, AI Builder ("vibe coder") — sin elegir
una sola etiqueta. El ángulo de AI Builder es un diferenciador, no un anexo: demuestra que puede
prototipar/construir producto funcional con IA sin depender de un equipo de ingeniería. Ojo: en
el copy público esto se enmarca siempre como una decisión de velocidad ("ship it myself when
that's what moves things faster"), nunca como "no tengo/no sé trabajar en equipo" — el usuario
corrigió explícitamente varias frases que sonaban así.

## Estado actual (2026-08-30)

- **El mockup de UI quedó aprobado por el usuario en esta sesión.** Vive en un Claude Artifact
  (HTML/CSS/JS estático, sin backend), iterado varias rondas:
  https://claude.ai/code/artifact/32236f56-74e7-4b63-909c-bcb7600305ec
  (el artifact anterior, `54411e4d...`, es la v1 descartada: paleta bronce/teal rechazada por el
  usuario y estructura de "Work" con bento-grid genérico; no usar como referencia).
- **Siguiente fase: scaffold real del proyecto Next.js + next-intl, y salida a producción en
  Vercel.** Ya se puede levantar dev server y crear código de aplicación real.
- **Decisión de dominio (revertida respecto al plan original):** NO se compra dominio propio.
  Se usa un subdominio gratis de Vercel. Nombre elegido: probar primero
  **`jjpenaherrera.vercel.app`**; si está tomado, usar **`jjpr.vercel.app`** como fallback (calza
  con el wordmark de la nav, ver abajo). Más adelante se pondrá ese link detrás de un acortador
  gratis en los puntos de contacto (bio de LinkedIn/Instagram, CV) para que no se note que es un
  subdominio de Vercel ni que el hosting es gratuito.

## Decisiones de producto y contenido (confirmadas)

- **Siete proyectos en la sección Work, todos con contenido real (ya no hay restricción de
  "no inventar copy sin aprobación" — el usuario aprobó explícitamente avanzar con los 4 que
  antes estaban bloqueados, y luego sumó Rhomus y PR-Abogados):**
  1. **InvestIQ** — Investment Intelligence Dashboard. Fintech, 7 vistas, demo pública:
     https://investiq-v2.vercel.app/dashboard. Proyecto fuente:
     `../complete-course/Investment Intelligence Dashboard` (repo separado del usuario).
  2. **Condominio SaaS** — plataforma de administración de condominios, cliente real en
     producción (**CAMBORIU**). Sin nombre de marca propio confirmado todavía (hay un
     `identidad-marca.md` sin leer en detalle). **Sin demo pública todavía** (pendiente de que el
     usuario la construya) — no poner botón de "ver demo" hasta que exista. Proyecto fuente:
     `../plataforma administracion de residentes`.
  3. **FitOS** — "FitOS, Sistema de Recomposición". PWA personal (nutrición + entrenamiento) para
     el propio usuario y otra usuaria real (Pamela), con Claude Vision para análisis corporal.
     Demo pública: https://fitness-os-jjpr.vercel.app/login. Proyecto fuente:
     `../complete-course/fitness-os`.
  4. **Cátedra** — generador de exámenes universitarios, construido para la competencia CoderCup
     de Coderhouse. Cliente/caso de uso real: Pamela (docente universitaria, permiso escrito para
     usar su material). Demo pública: https://catedra-examenes.vercel.app. Proyecto fuente:
     `../CoderCup`.
  5. **Rhomus** — sitio institucional para **Rhombus ISCP** (firma de seguridad privada de alto
     perfil en Guayaquil: protección ejecutiva, seguridad corporativa, eventos, protección armada).
     Cliente real, trabajo freelance. Demo pública: https://rhombus-security.vercel.app/. Next.js
     en Vercel. Sin repo público confirmado (no está en el GitHub del usuario).
  6. **PR-Abogados** — sitio institucional para **Peñaherrera Romero & Asociados**, estudio
     jurídico ecuatoriano (penal y constitucional), Guayaquil con red en Quito/Cuenca. Cliente
     real, trabajo freelance. Demo pública: https://pr-abogados-ec.vercel.app/. Next.js en Vercel.
     Sin repo público confirmado (no está en el GitHub del usuario).
  7. **Customer Retention Platform** — NO es un build, es un caso de estudio de **criterio de
     producto**: discovery cerrado el 17-ago-2026 al confirmar que la tesis de negocio original no
     pasaba unit economics. Se presenta con status "In progress" (hay una tesis alternativa sin
     validar), nunca como "cancelado". En el sitio va como una franja horizontal distinta debajo
     de la grilla de los 6 builds, no como una tarjeta más — así no se ve como un "sobrante".
- Bilingüe ES/EN con toggle real — en el mockup con diccionario JS; en la implementación real se
  usa `next-intl` con rutas localizadas (`/es`, `/en`).
- **Regla de copy no negociable:** cero guiones largos (—) en ningún texto, en ningún idioma.
  Tono cercano, profesional, natural. Nada de "open to new roles" ni frases que suenen a búsqueda
  de trabajo activa (el usuario tiene empleo 9-5 y no quiere que se note ahí). El status line del
  hero tampoco debe mencionar que el sitio se construyó con Claude Code u otra herramienta de IA.
- Secciones del sitio: Hero (panel tipo dashboard, guiño a InvestIQ, con reloj en vivo GMT-5 como
  detalle distintivo real, no decorativo) → Work (6 builds en grilla de 3x2 + 1 franja de
  discovery) → Perspective/Approach (Discover → Decide → Build → Ship) → Skills (columnas
  **"Direction / Delivery"**, ES "Rumbo / Entrega", no "Product/Build") → Contact.
- Nav: wordmark **"JJPR"** (no "JJ · P").
- Contact CTAs reales: "Solicitar mi CV" (mailto bilingüe con asunto/cuerpo prellenado según
  idioma activo), botón de Email directo (`mailto:jjpenaherrera@gmail.com`), WhatsApp
  (`+593996176762`, mensaje prellenado bilingüe y genérico: "new opportunities", no "a product
  role"), GitHub (https://github.com/jjpenaherrera), LinkedIn
  (https://www.linkedin.com/in/jjpenaherrera/).
- Skills > Delivery: generalizado a propósito, sin nombrar un solo stack/plataforma ("modern web
  frameworks" en vez de "Next.js and React", "Claude Code, Codex, Gemini, and other AI tools" en
  vez de lista cerrada, "Ship production-ready experiences" sin "on Vercel") — para no cerrarse a
  una sola tecnología, aunque el resto del sitio sí mencione Next.js/Vercel como hechos concretos
  de proyectos puntuales.

## Sistema de diseño (fuente de verdad, ya aprobado)

Paleta elegida tras un proceso con 3 agentes (director creativo, UI designer, UX writer): opción
**"Archivo + tinta técnica"**. Reemplaza por completo la paleta bronce/teal de la v1 del mockup.

**Color**
| Token | Claro | Oscuro |
|---|---|---|
| surface | `#F4F1E9` | `#14100B` |
| surface-raised | `#FBF8F0` | `#1F1810` |
| ink (texto) | `#1B1712` | `#EFE8D8` |
| ink-soft | `#6B5F4F` | `#B3A68F` |
| accent (terracota, marca/CTA) | `#C1521E` | `#E37A45` |
| accent-2 (verde-dato, solo métricas positivas) | `#0F6E56` | `#3FBF9C` |
| negative (solo datos negativos/riesgo) | `#9E2B25` | `#E2645A` |
| line | `#DED5C0` | `#362C1E` |

**Tipografía** (Google Fonts, sin cambios respecto al plan original)
- Display: `Fraunces` (títulos, con restraint)
- Cuerpo: `IBM Plex Sans`
- Datos/labels/mono: `IBM Plex Mono` (métricas con `tabular-nums`, eyebrows en mayúsculas)

**Interacción/motion** (ver skill `apple-design` para el detalle): scroll reveal en capas por
grupo (visual primero, texto después, staggered 40-70ms), `IntersectionObserver` una sola vez por
elemento, feedback instantáneo en `pointerdown` para todo lo pulsable, modal de detalle de
proyecto anclado a su trigger (scrim + cierre con Escape/click-fuera/botón, sin saltos), spotlight
de cursor sutil en el preview de InvestIQ gateado a `(hover:hover) and (pointer:fine)`. Nav es la
única superficie translúcida (blur); todo lo demás es sólido.

## Stack técnico decidido

- Next.js (App Router) + Vercel — mismo stack que el usuario ya domina (InvestIQ, FitOS).
- `next-intl` para i18n con rutas localizadas.
- Se descartó Framer/Webflow: el usuario no necesita edición no-code, y resta credibilidad como
  evidencia de ejecución técnica (ángulo AI Builder).
- Subdominio gratis de Vercel (`jjpenaherrera.vercel.app` o `jjpr.vercel.app`), sin dominio propio
  comprado. Ver "Estado actual" arriba.

## Control de versiones

- Repo git **propio y aislado** en esta carpeta (rama `main`), creado 2026-08-30. No anidar este
  proyecto dentro de otro repo (ya se separó una vez del repo del `$HOME` del usuario).

## Pendiente de confirmación / próximos pasos

1. Confirmar disponibilidad de `jjpenaherrera.vercel.app` al crear el proyecto en Vercel; si está
   tomado, usar `jjpr.vercel.app`.
2. Scaffold real: `next-intl` + App Router, portar tokens de diseño y motion del Artifact
   aprobado, portar contenido de los 5 proyectos (texto ya redactado y aprobado, ver arriba).
3. Deploy a Vercel (preview primero, luego producción).
4. Elegir y configurar un acortador de links gratis para los puntos de contacto (bio de
   LinkedIn/Instagram, CV), apuntando al subdominio de Vercel.
5. Pendiente del lado del usuario, no del agente: construir un camino de demo pública segura para
   Condominio SaaS (hoy no existe; no hay botón "ver demo" para ese proyecto todavía).
6. Confirmar si hay nombre de marca propio para Condominio SaaS (revisar `identidad-marca.md` del
   proyecto fuente, no leído en detalle todavía) y si InvestIQ realmente tiene 9 páginas en vez de
   7 (el copy actual dice 7 vistas, simplificación editorial ya aceptada, no cambiar sin pedir
   confirmación explícita).

## Memoria relacionada

Contexto adicional sobre el usuario y otros proyectos vive en el sistema de memoria del agente
(`~/.claude/projects/-Users-jjpenaherrera-Desktop-Personal-Portfolio/memory/`), notablemente
`project_investiq.md` y `project_fitos.md` si existen — no duplicar esa información acá, solo lo
específico de este proyecto.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
