export type Locale = "en" | "es";

export type ProjectStep = { t: string; d: string };

export type ProjectContent = {
  tags: string[];
  title: string;
  dek: string;
  steps: ProjectStep[];
};

export type Project = {
  id: string;
  cta: string | null;
  icon: "spark" | "ring" | "ledger" | "doc" | "stop" | "shield" | "scale";
  status: Record<Locale, string | null>;
  en: ProjectContent;
  es: ProjectContent;
};

export const projects: Project[] = [
  {
    id: "investiq",
    cta: "https://investiq-v2.vercel.app/dashboard",
    icon: "spark",
    status: { en: null, es: null },
    en: {
      tags: ["Next.js", "AI-assisted build", "Fintech · Dashboard", "Solo project"],
      title: "InvestIQ, an investment dashboard that explains itself",
      dek: "A seven-surface product for retail investors juggling performance, risk, and rebalancing across spreadsheets and half a dozen apps.",
      steps: [
        { t: "Problem", d: "No single view of performance, risk, and rebalancing signals. Just scattered spreadsheets and app tabs." },
        { t: "Approach", d: "Scoped seven surfaces around decisions, not vanity charts: Dashboard, Performance, Risk, DCA Planner, Alerts, AI Agent, Asset detail." },
        { t: "Build", d: "Designed the information architecture, then built the full Next.js app end to end with AI as the engineering team. No handoff, no backlog." },
        { t: "Outcome", d: "Seven working surfaces, deployed on Vercel. Proof that one person can pair PM judgment with AI execution and ship a real product, not a slide deck." },
      ],
    },
    es: {
      tags: ["Next.js", "Construido con IA", "Fintech · Dashboard", "Proyecto individual"],
      title: "InvestIQ, un dashboard de inversión que se explica solo",
      dek: "Un producto de siete vistas para inversores retail que hacían malabares entre hojas de cálculo y media docena de apps para rastrear rendimiento, riesgo y rebalanceo.",
      steps: [
        { t: "Problema", d: "No existía una vista única de rendimiento, riesgo y señales de rebalanceo. Solo hojas de cálculo y pestañas dispersas." },
        { t: "Enfoque", d: "Definí siete vistas alrededor de decisiones, no de gráficos vanidosos: Dashboard, Performance, Risk, DCA Planner, Alerts, AI Agent, Asset detail." },
        { t: "Construcción", d: "Diseñé la arquitectura de información y luego construí toda la app en Next.js de punta a punta con IA como equipo de ingeniería. Sin handoffs, sin backlog." },
        { t: "Resultado", d: "Siete vistas funcionando, desplegadas en Vercel. La prueba de que una sola persona puede combinar criterio de PM con ejecución de IA y entregar un producto real, no una presentación." },
      ],
    },
  },
  {
    id: "condominio",
    cta: null,
    icon: "ledger",
    status: { en: "Public demo coming soon", es: "Demo pública en camino" },
    en: {
      tags: ["Multi-tenant SaaS", "Real production client", "Python accounting engine", "Monorepo"],
      title: "Condo SaaS, full administration for a real building",
      dek: "A platform that runs a condominium's full operation: billing, common area bookings, announcements, security. In production today for a real client, CAMBORIU.",
      steps: [
        { t: "Problem", d: "The condo had tracked its accounting across 143 separate spreadsheets since July 2016. Closing the monthly balance by hand was slow and error prone." },
        { t: "Approach", d: "Built a separate calculation engine that reconciles the bank against the full historical ledger, and only accepts a balance when the difference is exactly zero." },
        { t: "Build", d: "Common area bookings, announcements, visitor invitations with single-use codes, billing with versioned fees, and an annual financial report." },
        { t: "Outcome", d: "In production since August 23, 2026, with automatic deploys on every merge to main, and three active roles: admin, resident, and security guard." },
      ],
    },
    es: {
      tags: ["SaaS multi tenant", "Cliente real en producción", "Motor contable en Python", "Monorepo"],
      title: "SaaS de condominios, administración completa para un edificio real",
      dek: "Una plataforma que corre toda la operación de un condominio: cobranza, reservas de áreas comunes, comunicados, seguridad. En producción hoy para un cliente real, CAMBORIU.",
      steps: [
        { t: "Problema", d: "El condominio llevaba su contabilidad en 143 hojas de cálculo separadas desde julio de 2016. Cuadrar el balance mensual a mano era lento y propenso a errores." },
        { t: "Enfoque", d: "Construí un motor de cálculo separado que reconcilia el banco contra el histórico completo, y que solo acepta un balance cuando la diferencia da exactamente cero." },
        { t: "Construcción", d: "Reservas de áreas comunes, comunicados, invitaciones de visita con código de un solo uso, cobranza con cuotas versionadas e informe económico anual." },
        { t: "Resultado", d: "En producción desde el 23 de agosto de 2026, con despliegue automático en cada cambio a la rama principal, y tres roles activos: administrador, residente y guardia de seguridad." },
      ],
    },
  },
  {
    id: "fitos",
    cta: "https://fitness-os-jjpr.vercel.app/login",
    icon: "ring",
    status: { en: null, es: null },
    en: {
      tags: ["Personal project", "Computer vision", "AI coaching", "Bilingual PWA"],
      title: "FitOS, a recomposition system with real memory",
      dek: "A PWA I use myself, alongside another real user, to follow a body recomposition plan. It reads photos of meals and bioimpedance scales with computer vision, and remembers each person's progress through an AI coach.",
      steps: [
        { t: "Problem", d: "Following a serious nutrition and training plan means constant measuring, and most people don't have the time or expertise to do it well." },
        { t: "Approach", d: "Let AI carry the measuring and advising, through photos and text, so the person only needs to stick to the plan." },
        { t: "Build", d: "A dashboard with rule-based alerts, weekly check-ins, photo-based macro estimation, body analysis with Claude Vision, a 24-week training program in 3 phases, and a chat with persistent memory acting as a coach." },
        { t: "Outcome", d: "Two real people, Juan José and Pamela, following their own plans today, plus a public demo mode with synthetic data so anyone can explore it without exposing real health information." },
      ],
    },
    es: {
      tags: ["Producto personal", "Visión por computadora", "Coaching con IA", "PWA bilingüe"],
      title: "FitOS, un sistema de recomposición con memoria real",
      dek: "Una PWA que uso yo mismo, junto con otra usuaria real, para seguir un plan de recomposición corporal. Lee fotos de comidas y de básculas de bioimpedancia con visión por computadora, y recuerda el progreso de cada persona a través de un coach con IA.",
      steps: [
        { t: "Problema", d: "Seguir un plan de nutrición y entrenamiento serio exige medir todo constantemente, y casi nadie tiene el tiempo ni el conocimiento para hacerlo bien." },
        { t: "Enfoque", d: "Que la IA cargue con el trabajo de medir y aconsejar, a partir de fotos y texto, dejando a la persona solo la disciplina de seguir el plan." },
        { t: "Construcción", d: "Dashboard con alertas automáticas, check in semanal, estimación de macros por foto, análisis corporal con Claude Vision, un programa de entrenamiento de 24 semanas en 3 fases, y un chat con memoria que actúa como coach." },
        { t: "Resultado", d: "Dos personas reales, Juan José y Pamela, siguiendo hoy sus propios planes, más un modo demo público con datos sintéticos para explorarlo sin exponer información real." },
      ],
    },
  },
  {
    id: "catedra",
    cta: "https://catedra-examenes.vercel.app",
    icon: "doc",
    status: { en: null, es: null },
    en: {
      tags: ["Next.js · AI SDK", "AI-assisted build", "EdTech", "Real client"],
      title: "Cátedra, an exam generator that stops re-fighting the same AI battle",
      dek: "Pamela, a university professor, was losing 40 to 60 minutes per exam re-explaining her material to AI every single time. Cátedra loads the subject once and remembers it.",
      steps: [
        { t: "Problem", d: "Every exam started from zero. Without reloading the full material, the AI only produced shallow questions, costing Pamela 40 to 60 minutes per exam." },
        { t: "Approach", d: "Designed a flow where the subject loads once and every question cites the exact source text and author, with a validator that checks 7 quality rules the professor herself defined before any question gets shown." },
        { t: "Build", d: "Built the full app in Next.js with the AI SDK and Claude, with 379 automated tests running against the generator, to compete in CoderCup, Coderhouse's AI competition." },
        { t: "Outcome", d: "Cátedra now generates real exams for Pamela's courses, with her permission to show that material publicly, and two open demo paths: one with her real subject already loaded, one to upload your own material." },
      ],
    },
    es: {
      tags: ["Next.js · AI SDK", "Construido con IA", "EdTech", "Cliente real"],
      title: "Cátedra, un generador de exámenes que no repite la misma pelea con la IA",
      dek: "Pamela, docente universitaria, perdía entre 40 y 60 minutos por examen volviendo a explicarle todo el material a la IA cada vez. Cátedra carga la materia una sola vez y la recuerda.",
      steps: [
        { t: "Problema", d: "Cada examen empezaba de cero. Sin recargar el material completo, la IA solo devolvía preguntas superficiales, y eso le costaba a Pamela entre 40 y 60 minutos por examen." },
        { t: "Enfoque", d: "Diseñé un flujo donde la materia se carga una sola vez y cada reactivo cita el texto y el autor exacto de donde sale, con un validador que revisa 7 criterios de calidad que la propia docente definió antes de mostrar cualquier pregunta." },
        { t: "Construcción", d: "Construí la app completa en Next.js con AI SDK y Claude, con 379 pruebas automatizadas corriendo sobre el generador, para competir en CoderCup, la competencia de IA de Coderhouse." },
        { t: "Resultado", d: "Hoy Cátedra genera exámenes reales para las materias de Pamela, con permiso suyo para mostrar su contenido en público, y con dos caminos de demo abiertos: uno con su materia real cargada y otro para subir cualquier material propio." },
      ],
    },
  },
  {
    id: "rhombus",
    cta: "https://rhombus-security.vercel.app/",
    icon: "shield",
    status: { en: null, es: null },
    en: {
      tags: ["Next.js", "Real client · Freelance", "Private security", "Marketing site"],
      title: "Rhombus, a site built to earn trust before the first call",
      dek: "A private security firm in Guayaquil needed a site that reads as discreet and professional to high-profile clients, with WhatsApp as the only front door.",
      steps: [
        { t: "Problem", d: "A firm offering executive protection and armed security had no web presence matching the seriousness of the service it sells." },
        { t: "Approach", d: "Structured the site around the firm's four service lines, restraint over sales language, and one clear path to contact." },
        { t: "Build", d: "Built and deployed the full site in Next.js on Vercel as a freelance engagement, from first draft to production." },
        { t: "Outcome", d: "Live site for Rhombus ISCP, routing every inquiry straight to WhatsApp for a direct, confidential first conversation." },
      ],
    },
    es: {
      tags: ["Next.js", "Cliente real · Freelance", "Seguridad privada", "Sitio institucional"],
      title: "Rhombus, un sitio construido para generar confianza antes de la primera llamada",
      dek: "Una firma de seguridad privada en Guayaquil necesitaba un sitio que se leyera discreto y profesional frente a clientes de alto perfil, con WhatsApp como única puerta de entrada.",
      steps: [
        { t: "Problema", d: "Una firma que ofrece protección ejecutiva y seguridad armada no tenía presencia web a la altura de la seriedad del servicio que vende." },
        { t: "Enfoque", d: "Estructuré el sitio alrededor de las cuatro líneas de servicio de la firma, con sobriedad en vez de lenguaje de venta, y un solo camino claro de contacto." },
        { t: "Construcción", d: "Construí y desplegué el sitio completo en Next.js sobre Vercel como trabajo freelance, desde el primer borrador hasta producción." },
        { t: "Resultado", d: "Sitio en vivo para Rhombus ISCP, que dirige cada consulta directo a WhatsApp para una primera conversación directa y confidencial." },
      ],
    },
  },
  {
    id: "pr-abogados",
    cta: "https://pr-abogados-ec.vercel.app/",
    icon: "scale",
    status: { en: null, es: null },
    en: {
      tags: ["Next.js", "Real client · Freelance", "Legal services", "Marketing site"],
      title: "PR Abogados, a law firm's case for why they're the right call",
      dek: "An Ecuadorian criminal and constitutional law firm needed a site to present its team, its practice areas, and a clear way to book a consultation.",
      steps: [
        { t: "Problem", d: "A firm with 18 years of practice in high-complexity criminal and constitutional cases had no site laying out its team and track record for someone deciding who to call." },
        { t: "Approach", d: "Organized the site around the firm's practice areas, the three attorneys' profiles, and national coverage across Guayaquil, Quito, and Cuenca." },
        { t: "Build", d: "Built and deployed the full site in Next.js on Vercel as a freelance engagement, including consultation booking and direct contact channels." },
        { t: "Outcome", d: "Live site for Peñaherrera Romero & Asociados, giving prospective clients a clear path from the firm's case for itself to a booked consultation." },
      ],
    },
    es: {
      tags: ["Next.js", "Cliente real · Freelance", "Servicios legales", "Sitio institucional"],
      title: "PR Abogados, el caso de un estudio jurídico para explicar por qué llamarlos a ellos",
      dek: "Un estudio ecuatoriano de derecho penal y constitucional necesitaba un sitio para presentar a su equipo, sus áreas de práctica y una forma clara de agendar una consulta.",
      steps: [
        { t: "Problema", d: "Un estudio con 18 años de trayectoria en casos penales y constitucionales de alta complejidad no tenía un sitio que mostrara su equipo y trayectoria a quien estuviera decidiendo a quién llamar." },
        { t: "Enfoque", d: "Organicé el sitio alrededor de las áreas de práctica del estudio, los perfiles de los tres abogados y la cobertura nacional entre Guayaquil, Quito y Cuenca." },
        { t: "Construcción", d: "Construí y desplegué el sitio completo en Next.js sobre Vercel como trabajo freelance, incluyendo agendamiento de consultas y canales de contacto directo." },
        { t: "Resultado", d: "Sitio en vivo para Peñaherrera Romero & Asociados, que le da a cada cliente potencial un camino claro desde el caso del estudio hasta una consulta agendada." },
      ],
    },
  },
];

export const discoveryProject: Project = {
  id: "retention",
  cta: null,
  icon: "stop",
  status: { en: "In progress", es: "En progreso" },
  en: {
    tags: ["Product discovery", "Unit economics", "Product judgment", "In progress"],
    title: "Customer Retention Platform, stopping before building on numbers that don't work",
    dek: "A real discovery process for a customer retention platform, closed on August 17, 2026 as soon as the unit economics analysis showed the original business thesis wasn't viable.",
    steps: [
      { t: "Hypothesis", d: "There was a real business opportunity in a platform dedicated to customer retention." },
      { t: "Analysis", d: "Running the unit economics showed the thesis, as originally framed, didn't add up." },
      { t: "Decision", d: "Closed the project the same day the problem was confirmed, instead of building further on a foundation that didn't work." },
      { t: "Finding", d: "An alternative thesis was identified, still unvalidated, pending the experiments needed to confirm or rule it out." },
    ],
  },
  es: {
    tags: ["Discovery de producto", "Unit economics", "Criterio de producto", "En progreso"],
    title: "Customer Retention Platform, parar antes de construir sobre números que no cierran",
    dek: "Un proceso real de discovery para una plataforma de retención de clientes, cerrado el 17 de agosto de 2026 apenas el análisis mostró que la tesis de negocio original no era viable.",
    steps: [
      { t: "Hipótesis", d: "Existía una oportunidad de negocio real en una plataforma dedicada a retención de clientes." },
      { t: "Análisis", d: "Correr los números de unit economics mostró que la tesis, tal como estaba planteada, no cerraba." },
      { t: "Decisión", d: "Cerré el proyecto el mismo día en que se confirmó el problema, en vez de seguir construyendo sobre una base que no funcionaba." },
      { t: "Hallazgo", d: "Quedó identificada una tesis alternativa, todavía sin validar, a la espera de los experimentos que la confirmen o la descarten." },
    ],
  },
};
