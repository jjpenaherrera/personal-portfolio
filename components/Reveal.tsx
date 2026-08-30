"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  className?: string;
  ty?: number;
  sc?: number;
  dur?: number;
  delay?: number;
  children: ReactNode;
};

export function Reveal({
  as: Tag = "div",
  className = "",
  ty = 20,
  sc,
  dur = 450,
  delay = 0,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties & Record<string, string> = {
    "--ty": `${ty}px`,
    "--dur": `${dur}ms`,
    "--delay": `${delay}ms`,
  };
  if (sc !== undefined) style["--sc"] = String(sc);

  return (
    <Tag
      ref={ref}
      className={`reveal${isIn ? " is-in" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
