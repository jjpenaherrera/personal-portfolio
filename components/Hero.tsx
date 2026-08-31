import { getTranslations } from "next-intl/server";
import { LiveClock } from "./LiveClock";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h1 dangerouslySetInnerHTML={{ __html: t.raw("h1") }} />
          <p className="lede">{t("lede")}</p>
          <p className="chips-label">{t("positioningTag")}</p>
          <p className="status-line">
            <span className="status-dot" aria-hidden="true" />
            <span>{t("statusLive")}</span>
            <LiveClock />
          </p>
          <p className="chips-label">{t("chipsLabel")}</p>
          <div className="chips">
            <span className="chip">{t("chip1")}</span>
            <span className="chip">{t("chip2")}</span>
            <span className="chip">{t("chip3")}</span>
          </div>
        </div>

        <div className="panel">
          <div className="panel-bar">
            <span className="panel-dots">
              <span />
              <span />
              <span />
            </span>
            <span>
              InvestIQ, {t("panelLive")}
            </span>
          </div>
          <div className="panel-body">
            <div className="metric-row">
              <div className="metric">
                <div className="k">{t("metric1")}</div>
                <div className="v">$128,430</div>
              </div>
              <div className="metric">
                <div className="k">{t("metric2")}</div>
                <div className="v">
                  42<span style={{ fontSize: ".6em" }}>/100</span>
                </div>
              </div>
              <div className="metric">
                <div className="k">{t("metric3")}</div>
                <div className="v pos">+1.8%</div>
              </div>
            </div>
            <p className="panel-note">{t("panelNote")}</p>
            <svg className="spark" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
              <polyline
                points="0,44 30,39 60,42 90,28 120,33 150,19 180,25 210,12 240,18 270,9 300,14"
                fill="none"
                stroke="var(--accent-2)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="mini-rows" aria-hidden="true">
              <div className="mini-row">
                <span>AAPL · 18%</span>
                <span className="chg up">+2.1%</span>
              </div>
              <div className="mini-row">
                <span>VTI · 34%</span>
                <span className="chg down">−0.4%</span>
              </div>
            </div>
            <div className="panel-foot">
              <span>Next.js · Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
