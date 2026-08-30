import { getTranslations } from "next-intl/server";
import { Reveal } from "./Reveal";

export async function Contact() {
  const t = await getTranslations("contact");

  const cvHref =
    "mailto:jjpenaherrera@gmail.com?subject=" +
    encodeURIComponent(t("cvSubject")) +
    "&body=" +
    encodeURIComponent(t("cvBody"));
  const whatsappHref = "https://wa.me/593996176762?text=" + encodeURIComponent(t("whatsappText"));

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal as="p" className="eyebrow" ty={14} dur={380}>
          {t("eyebrow")}
        </Reveal>
        <Reveal as="h2" ty={22} dur={480} delay={40}>
          {t("h2")}
        </Reveal>
        <Reveal as="p" className="lede" ty={18} dur={420} delay={90}>
          {t("lede")}
        </Reveal>
        <Reveal as="div" className="contact-actions" ty={16} dur={400} delay={130}>
          <a className="btn btn-primary pressable" href={cvHref}>
            {t("cv")}
          </a>
          <a className="btn btn-ghost pressable" href="mailto:jjpenaherrera@gmail.com">
            {t("email")}
          </a>
          <a className="btn btn-ghost pressable" href={whatsappHref} target="_blank" rel="noopener">
            {t("whatsapp")}
          </a>
          <a
            className="btn btn-ghost pressable"
            href="https://github.com/jjpenaherrera"
            target="_blank"
            rel="noopener"
          >
            {t("github")}
          </a>
          <a
            className="btn btn-ghost pressable"
            href="https://www.linkedin.com/in/jjpenaherrera/"
            target="_blank"
            rel="noopener"
          >
            {t("linkedin")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
