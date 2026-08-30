import { getTranslations } from "next-intl/server";
import { Reveal } from "./Reveal";

export async function Skills() {
  const t = await getTranslations("skills");
  const direction = [t("d1"), t("d2"), t("d3"), t("d4"), t("d5"), t("d6")];
  const delivery = [t("s1"), t("s2"), t("s3"), t("s4"), t("s5"), t("s6")];

  return (
    <section id="skills">
      <div className="wrap">
        <Reveal as="p" className="eyebrow" ty={14} dur={380}>
          {t("eyebrow")}
        </Reveal>
        <Reveal as="h2" ty={20} dur={450} delay={40}>
          {t("h2")}
        </Reveal>
        <Reveal as="p" className="lede" ty={18} dur={420} delay={80}>
          {t("lede")}
        </Reveal>
        <div className="skills-grid">
          <Reveal as="div" className="skills-col product" ty={18} dur={420} delay={80}>
            <p className="label">{t("direction")}</p>
            <ul>
              {direction.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal as="div" className="skills-col build" ty={18} dur={420} delay={140}>
            <p className="label">{t("delivery")}</p>
            <ul>
              {delivery.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
