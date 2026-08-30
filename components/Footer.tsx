import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <p>
          {year}, {t("name")}
        </p>
      </div>
    </footer>
  );
}
