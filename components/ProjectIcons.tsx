export type IconName = "spark" | "ring" | "ledger" | "doc" | "stop" | "shield" | "scale";

export function ProjectIcon({ name }: { name: IconName }) {
  switch (name) {
    case "spark":
      return (
        <svg viewBox="0 0 120 40" width="100%" height="40" preserveAspectRatio="none" aria-hidden="true">
          <polyline
            points="0,30 15,26 30,28 45,16 60,20 75,9 90,14 105,5 120,9"
            fill="none"
            stroke="var(--accent-2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ring":
      return (
        <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
          <circle cx="20" cy="20" r="15" fill="none" stroke="var(--line)" strokeWidth="4" />
          <circle
            cx="20"
            cy="20"
            r="15"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="70 94"
            transform="rotate(-90 20 20)"
          />
        </svg>
      );
    case "ledger":
      return (
        <svg viewBox="0 0 60 40" width="60" height="40" aria-hidden="true">
          <g fill="none" stroke="var(--line-strong)" strokeWidth="1.6">
            <rect x="1" y="3" width="16" height="10" rx="2" />
            <rect x="22" y="3" width="16" height="10" rx="2" />
            <rect x="43" y="3" width="16" height="10" rx="2" />
            <rect x="1" y="17" width="16" height="10" rx="2" />
            <rect x="22" y="17" width="16" height="10" rx="2" />
          </g>
          <path
            d="M45 21 L49 25 L57 17"
            fill="none"
            stroke="var(--accent-2)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "doc":
      return (
        <svg viewBox="0 0 34 40" width="34" height="40" aria-hidden="true">
          <rect x="2" y="2" width="30" height="36" rx="3" fill="none" stroke="var(--line-strong)" strokeWidth="1.8" />
          <line x1="8" y1="12" x2="26" y2="12" stroke="var(--ink-soft)" strokeWidth="1.6" />
          <line x1="8" y1="19" x2="26" y2="19" stroke="var(--ink-soft)" strokeWidth="1.6" />
          <circle cx="11" cy="27.5" r="3.4" fill="none" stroke="var(--accent)" strokeWidth="1.8" />
          <path
            d="M10 27.5 L10.8 28.3 L12.4 26.5"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="18" y1="27.5" x2="26" y2="27.5" stroke="var(--ink-soft)" strokeWidth="1.6" />
        </svg>
      );
    case "stop":
      return (
        <svg viewBox="0 0 70 40" width="70" height="40" aria-hidden="true">
          <path d="M2 30 Q 20 30 34 20" fill="none" stroke="var(--ink-soft)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="36" cy="19" r="4.2" fill="var(--negative)" />
          <path
            d="M40 19 Q 50 12 68 12"
            fill="none"
            stroke="var(--accent-2)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1 6"
          />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 34 40" width="34" height="40" aria-hidden="true">
          <path
            d="M17 2 L31 8 V19 C31 28 25 34.5 17 38 C9 34.5 3 28 3 19 V8 Z"
            fill="none"
            stroke="var(--line-strong)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M11 19.5 L15.5 24 L24 13.5"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "scale":
      return (
        <svg viewBox="0 0 50 40" width="50" height="40" aria-hidden="true">
          <line x1="25" y1="3" x2="25" y2="33" stroke="var(--line-strong)" strokeWidth="1.8" />
          <line x1="9" y1="9" x2="41" y2="9" stroke="var(--line-strong)" strokeWidth="1.8" />
          <rect x="19" y="33" width="12" height="4" rx="1.2" fill="none" stroke="var(--line-strong)" strokeWidth="1.6" />
          <path
            d="M9 9 L3 20 A6 6 0 0 0 15 20 Z"
            fill="none"
            stroke="var(--ink-soft)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M41 9 L35 20 A6 6 0 0 0 47 20 Z"
            fill="none"
            stroke="var(--accent-2)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="25" cy="6" r="2.4" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
        </svg>
      );
  }
}
