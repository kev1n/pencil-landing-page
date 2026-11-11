import { createContext, useContext, useLayoutEffect, useRef, useState } from "react";
import "./demo.css";

// Every product demo is laid out at a fixed design size and scaled to its
// container, so it keeps the proportions of a real screenshot at any width
// while staying interactive.
//
// `view` crops to a sub-rectangle of the design canvas ({x, y, w, h});
// `narrowView` replaces it when the container is phone-width, so the UI stays
// legible instead of shrinking the whole screen.
const NARROW = 620;
const ViewContext = createContext(null);

// Lets a section set the crop for the scene it wraps without every scene
// having to forward the props.
export function StageView({ view, narrowView, children }) {
  return <ViewContext.Provider value={{ view, narrowView }}>{children}</ViewContext.Provider>;
}

export function Stage({ width = 1120, height = 700, className = "", label, children }) {
  const { view, narrowView } = useContext(ViewContext) ?? {};
  const ref = useRef(null);
  const [box, setBox] = useState(null);
  useLayoutEffect(() => {
    const el = ref.current;
    const measure = () => setBox(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const full = { x: 0, y: 0, w: width, h: height };
  const v = (box !== null && box < NARROW && narrowView) || view || full;
  const scale = box ? box / v.w : 1;
  return (
    <div
      ref={ref}
      className={"pd-stage " + className}
      style={{ aspectRatio: `${v.w} / ${v.h}` }}
      role="group"
      aria-label={label}
    >
      <div
        className="pd"
        style={{
          width,
          height,
          transform: `scale(${scale}) translate(${-v.x}px, ${-v.y}px)`,
          visibility: box ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// The extension's own pencil mark (same drawing as the toolbar icon).
export function PencilGlyph({ size = 16, rotate = 135 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g transform={`rotate(${rotate} 32 32)`} stroke="#2a2a2e" strokeWidth="2" strokeLinejoin="round">
        <rect x="4" y="22" width="10" height="20" rx="3" fill="#ef8da6" />
        <rect x="14" y="22" width="9" height="20" fill="#c2c7cb" />
        <line x1="17" y1="23" x2="17" y2="41" stroke="#7d848a" strokeWidth="1" />
        <line x1="20" y1="23" x2="20" y2="41" stroke="#7d848a" strokeWidth="1" />
        <rect x="23" y="22" width="26" height="20" fill="#f5c842" />
        <polygon points="49,22 56,22 56,42 49,42" fill="#d4a373" />
        <polygon points="56,22 64,32 56,42" fill="#2a2a2e" />
      </g>
    </svg>
  );
}

const paths = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  pin: <><path d="M12 17v5M9 3h6l-1 6 3 4H7l3-4-1-6Z" /></>,
  x: <><path d="M6 6l12 12M18 6 6 18" /></>,
  left: <><path d="M19 12H5M11 6l-6 6 6 6" /></>,
  right: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  check: <><path d="m5 12 5 5 9-10" /></>,
  ban: <><circle cx="12" cy="12" r="9" /><path d="m6 6 12 12" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01" /></>,
  export: <><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  trash: <><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5h.01" /></>,
  map: <><path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6ZM9 4v14M15 6v14" /></>,
  note: <><path d="M4 20h4L19 9l-4-4L4 16v4ZM13 7l4 4" /></>,
  share: <><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="m8.2 10.9 7.6-3.8M8.2 13.1l7.6 3.8" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M8 3v4M16 3v4" /></>,
  bookmark: <><path d="M7 4h10v16l-5-4-5 4V4Z" /></>,
  filter: <><path d="M4 5h16l-6 8v6l-4-2v-4L4 5Z" /></>,
  list: <><path d="M5 7h14M5 12h14M5 17h14" /></>,
  refresh: <><path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5" /></>,
  external: <><path d="M9 5h10v10M19 5 6 18" /></>,
  caret: <><path d="m9 6 6 6-6 6" /></>,
};

export function Icon({ name, size = 14, stroke = 1.8, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
