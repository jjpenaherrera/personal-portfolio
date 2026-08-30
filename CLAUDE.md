# Personal Portfolio — Juan José Peñaherrera

## Qué es esto

Sitio personal bilingüe (ES/EN) de Juan José Peñaherrera, para usar como URL única en bio de
LinkedIn, Instagram y CV. Público objetivo: reclutadores internacionales para roles de
**Product Manager / Product Analyst**.

Posicionamiento (no negociable, decidido explícitamente por el usuario): el hero debe combinar
las **3 identidades** — Product Manager, Product Analyst, AI Builder ("vibe coder") — sin elegir
una sola etiqueta. El ángulo de AI Builder es un diferenciador, no un anexo: demuestra que puede
prototipar/construir producto funcional con IA sin depender de un equipo de ingeniería.

## Estado actual (2026-08-30)

- **Fase: discovery + diseño visual.** No hay código de aplicación todavía. No usar `run` /
  levantar dev server — no existe proyecto Next.js aún.
- Se corrió `product-discovery` (WebSearch real, no inventado) sobre buenas prácticas de
  portafolios de PM.
- Se publicó un **mockup de UI en Claude Artifact** (HTML/CSS/JS estático, sin backend):
  https://claude.ai/code/artifact/54411e4d-4da0-4f12-b5f2-6e75457f9455
- **El mockup todavía NO está aprobado por el usuario** — está en iteración de feedback visual.
  No empezar a portar a Next.js hasta aprobación explícita.
- El dominio propio se define y compra más adelante, dentro de este mismo proyecto.

## Decisiones de producto y contenido (confirmadas)

- **Case study confirmado:** InvestIQ — Investment Intelligence Dashboard
  (`../complete-course/Investment Intelligence Dashboard`, proyecto separado del usuario).
  Estructura: Problema → Enfoque → Construcción → Resultado.
- **Otros proyectos del usuario (FitOS, Condominio SaaS, Customer Retention Platform) NO están
  aprobados como case studies.** El mockup los deja fuera a propósito, con 2 tarjetas
  placeholder "en progreso". No inventar copy/narrativa para ellos sin aprobación explícita del
  usuario — su contenido debe salir de él, no fabricarse.
- Bilingüe ES/EN con toggle real (no solo banderita decorativa) — ya prototipado en el mockup con
  diccionario JS; en la implementación real se usa `next-intl` con rutas localizadas (`/es`, `/en`).
- Secciones del sitio: Hero (panel tipo dashboard, guiño a InvestIQ) → Work (case studies) →
  Approach (Discover → Decide → Build → Ship) → Skills (columnas Product / Build) → Contact.

## Sistema de diseño (fuente de verdad hasta que se apruebe/cambie)

Definido en el mockup del Artifact — al portar a código, replicar exactamente estos tokens salvo
feedback nuevo del usuario:

**Color**
| Token | Claro | Oscuro |
|---|---|---|
| surface | `#ECEEE8` | `#10171A` |
| surface-raised | `#F6F6F0` | `#17201F` |
| ink (texto) | `#1B211D` | `#EAE8DE` |
| accent (bronce) | `#A8752A` | `#D9A857` |
| accent-2 (teal, datos) | `#3F6F68` | `#63ABA1` |

**Tipografía** (Google Fonts)
- Display: `Fraunces` (títulos, con restraint)
- Cuerpo: `IBM Plex Sans`
- Datos/labels/mono: `IBM Plex Mono` (métricas con `tabular-nums`, eyebrows en mayúsculas)

## Stack técnico decidido

- Next.js (App Router) + Vercel — mismo stack que el usuario ya domina (InvestIQ, FitOS).
- `next-intl` para i18n con rutas localizadas.
- Se descartó Framer/Webflow: el usuario no necesita edición no-code, y un portafolio "hecho en
  builder no-code" resta credibilidad como evidencia de ejecución técnica (ángulo AI Builder).
- Dominio propio (no subdominio `.vercel.app`) por SEO y percepción profesional — pendiente de
  elegir y comprar.

## Control de versiones

- Repo git **propio y aislado** en esta carpeta (rama `main`), creado 2026-08-30.
- Antes vivía sin querer dentro del repo git del `$HOME` del usuario (mezclado con dotfiles y con
  el proyecto "Investment Intelligence Dashboard" bajo `../complete-course/`). Se separó a pedido
  explícito del usuario. No volver a anidar este proyecto dentro de otro repo.

## Pendiente de confirmación / próximos pasos

1. Aprobación del usuario sobre el mockup de UI (paleta, tipografía, layout, copy).
2. Copy final de cada sección (el del mockup es borrador, marcado como tal en el footer).
3. Decisión sobre un 2º y 3er case study (candidatos no aprobados: FitOS, Condominio SaaS,
   Customer Retention Platform).
4. Registro y conexión del dominio propio.
5. URL real de LinkedIn (el botón en el mockup es placeholder, `href="#"`).
6. Recién después de 1–2: scaffold real del proyecto Next.js + next-intl + Vercel.

## Memoria relacionada

Contexto adicional sobre el usuario y otros proyectos vive en el sistema de memoria del agente
(`~/.claude/projects/-Users-jjpenaherrera/memory/`), notablemente `project_investiq.md` y
`project_fitos.md` — no duplicar esa información acá, solo lo específico de este proyecto.
