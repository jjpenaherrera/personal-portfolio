"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { projects, discoveryProject, type Project, type Locale } from "@/lib/projects";
import { ProjectIcon } from "./ProjectIcons";
import { Reveal } from "./Reveal";

function ProjectTile({
  project,
  locale,
  index,
  onOpen,
}: {
  project: Project;
  locale: Locale;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const t = useTranslations("work");
  const c = project[locale];
  const status = project.status[locale];

  return (
    <button type="button" className="tile pressable" onClick={() => onOpen(project)}>
      <Reveal as="span" className="tile-visual" ty={20} sc={0.96} dur={480} delay={index * 55}>
        <ProjectIcon name={project.icon} />
      </Reveal>
      <Reveal as="span" className="tile-body" ty={16} sc={0.985} dur={420} delay={index * 55 + 90}>
        <span className="tile-tag">
          {c.tags[0]}
          {c.tags[1] ? ` · ${c.tags[1]}` : ""}
        </span>
        <span className="tile-title">{c.title.split(",")[0]}</span>
        <span className="tile-dek">{c.dek}</span>
        {status ? <span className="tile-status">{status}</span> : null}
        <span className="tile-cta">{t("viewDetails")} →</span>
      </Reveal>
    </button>
  );
}

function DiscoveryStrip({
  locale,
  baseDelay,
  onOpen,
}: {
  locale: Locale;
  baseDelay: number;
  onOpen: (p: Project) => void;
}) {
  const t = useTranslations("work");
  const c = discoveryProject[locale];
  const status = discoveryProject.status[locale];

  return (
    <button type="button" className="discovery-strip pressable" onClick={() => onOpen(discoveryProject)}>
      <Reveal as="span" className="discovery-visual" ty={18} sc={0.96} dur={460} delay={baseDelay + 40}>
        <ProjectIcon name={discoveryProject.icon} />
      </Reveal>
      <Reveal as="span" className="discovery-body" ty={14} sc={0.99} dur={400} delay={baseDelay + 110}>
        <span className="discovery-tag">
          {c.tags[0]} · {c.tags[1]}
        </span>
        <span className="discovery-title">{c.title.split(",")[0]}</span>
        <span className="discovery-dek">{c.dek}</span>
      </Reveal>
      <Reveal as="span" className="discovery-foot" ty={10} dur={350} delay={baseDelay + 150}>
        {status ? <span className="tile-status">{status}</span> : null}
        <span className="tile-cta">{t("viewDetails")} →</span>
      </Reveal>
    </button>
  );
}

function ProjectModal({
  project,
  locale,
  onClose,
}: {
  project: Project | null;
  locale: Locale;
  onClose: () => void;
}) {
  const t = useTranslations("work");
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (project) {
      lastFocused.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setOpen(true));
      closeRef.current?.focus();
    } else {
      setOpen(false);
      document.body.style.overflow = "";
    }
  }, [project]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && project) onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  function handleClose() {
    onClose();
    lastFocused.current?.focus();
  }

  if (!project) return null;
  const c = project[locale];
  const status = project.status[locale];

  return (
    <div
      className={`modal-scrim${open ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-head">
          <div className="modal-tagrow">
            {c.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <button
            type="button"
            className="modal-close pressable"
            aria-label={t("close")}
            ref={closeRef}
            onClick={handleClose}
          >
            ×
          </button>
        </div>
        <h3 id="modal-title">{c.title}</h3>
        <p className="modal-dek">{c.dek}</p>
        <div className="steps">
          {c.steps.map((s, idx) => (
            <div className="step" key={s.t}>
              <span className="n">{String(idx + 1).padStart(2, "0")}</span>
              <div>
                <p className="t">{s.t}</p>
                <p className="d">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="modal-foot">
          {project.cta ? (
            <a className="btn btn-primary pressable" href={project.cta} target="_blank" rel="noopener">
              {t("viewDemo")}
            </a>
          ) : status ? (
            <span className="modal-status">{status}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function WorkSection() {
  const t = useTranslations("work");
  const locale = useLocale() as Locale;
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work">
      <div className="wrap">
        <Reveal as="div" className="work-head" ty={20} dur={450}>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2>{t("h2")}</h2>
        </Reveal>
        <Reveal as="p" className="work-lede" ty={18} dur={420} delay={60}>
          {t("lede")}
        </Reveal>

        <div className="tiles">
          {projects.map((p, i) => (
            <ProjectTile key={p.id} project={p} locale={locale} index={i} onOpen={setActiveProject} />
          ))}
        </div>

        <div className="discovery-block">
          <Reveal as="p" className="discovery-label" ty={12} dur={350} delay={280}>
            {t("discoveryLabel")}
          </Reveal>
          <DiscoveryStrip locale={locale} baseDelay={projects.length * 55} onOpen={setActiveProject} />
        </div>
      </div>

      <ProjectModal project={activeProject} locale={locale} onClose={() => setActiveProject(null)} />
    </section>
  );
}
