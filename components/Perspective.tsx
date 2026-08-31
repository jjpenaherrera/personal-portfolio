import { getTranslations } from "next-intl/server";
import { Reveal } from "./Reveal";

export async function Perspective() {
  const t = await getTranslations("perspective");
  const steps = [
    { n: "01", t: t("a1t"), d: t("a1d"), delay: 0 },
    { n: "02", t: t("a2t"), d: t("a2d"), delay: 55 },
    { n: "03", t: t("a3t"), d: t("a3d"), delay: 110 },
    { n: "04", t: t("a4t"), d: t("a4d"), delay: 165 },
  ];

  return (
    <section id="perspective">
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
        <div className="instrument">
          {steps.map((s) => (
            <Reveal as="div" className="astep" key={s.n} ty={18} dur={420} delay={s.delay}>
              <span className="n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
