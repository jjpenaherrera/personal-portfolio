"use client";

import { useEffect, useState } from "react";

function formatGmt5(): string {
  const utc = new Date();
  const d = new Date(utc.getTime() - 5 * 60 * 60 * 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} GMT-5`;
}

export function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTime(formatGmt5());
    const id = setInterval(() => setTime(formatGmt5()), reduceMotion ? 30000 : 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="status-time" suppressHydrationWarning>
      {time ?? "00:00:00 GMT-5"}
    </span>
  );
}
