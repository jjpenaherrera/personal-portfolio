import { projects, discoveryProject, type Locale } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

const personName = "Juan José Peñaherrera";
const personAlternateName = "Juan Jose Penaherrera";
const sameAs = [
  "https://www.linkedin.com/in/jjpenaherrera/",
  "https://github.com/jjpenaherrera",
];

const jobTitle = {
  en: ["AI Product Builder", "Product Manager", "Product Analyst"],
  es: ["AI Product Builder", "Product Manager", "Product Analyst"],
} satisfies Record<Locale, string[]>;

const knowsAbout = [
  "Product Management",
  "Product Analytics",
  "AI-native product development",
  "Next.js",
  "Vibe coding",
];

const personDescription = {
  en: "AI Product Builder, Product Manager, and Product Analyst based in Ecuador, shipping end-to-end products with AI as the execution layer.",
  es: "AI Product Builder, Product Manager y Product Analyst en Ecuador, que entrega productos de punta a punta usando la IA como capa de ejecución.",
} satisfies Record<Locale, string>;

function projectSchema(locale: Locale, id: string, cta: string | null, content: (typeof projects)[number][Locale]) {
  return {
    "@type": "CreativeWork",
    "@id": `${siteUrl}/${locale}#${id}`,
    name: content.title,
    description: content.dek,
    ...(cta ? { url: cta } : {}),
    inLanguage: locale,
    creator: { "@id": `${siteUrl}/${locale}#person` },
  };
}

export function StructuredData({ locale }: { locale: Locale }) {
  const path = `${siteUrl}/${locale}`;

  const person = {
    "@type": "Person",
    "@id": `${path}#person`,
    name: personName,
    alternateName: personAlternateName,
    jobTitle: jobTitle[locale].join(", "),
    description: personDescription[locale],
    url: path,
    sameAs,
    knowsAbout,
    homeLocation: {
      "@type": "Place",
      name: "Ecuador",
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: personName,
    url: siteUrl,
    inLanguage: ["en", "es"],
    author: { "@id": `${path}#person` },
  };

  const works = [
    ...projects.map((p) => projectSchema(locale, p.id, p.cta, p[locale])),
    projectSchema(locale, discoveryProject.id, discoveryProject.cta, discoveryProject[locale]),
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, website, ...works],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
