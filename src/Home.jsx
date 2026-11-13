import { useEffect, useRef, useState } from "react";
import { usePostHog } from "@posthog/react";
import { Icon, PencilGlyph, StageView } from "./demo/Stage.jsx";
import ScheduleScene, { CtecLine } from "./demo/ScheduleScene.jsx";
import { ratingTone } from "./demo/rating.js";
import SearchScene from "./demo/SearchScene.jsx";
import { ArtCard, FlowDiagram } from "./Art.jsx";

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
  );
}

// A product demo inside a plain window bar that names the site it runs on.
function Frame({ site, children, className = "" }) {
  return (
    <div className={"frame " + className}>
      <div className="frame-bar"><span>{site}</span></div>
      {children}
    </div>
  );
}

// Fades a block up the first time it scrolls into view.
function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${shown ? "in " : ""}${className}`} {...rest}>{children}</Tag>;
}

const PAPER = "paper.nu";
const CAESAR = "caesar.ent.northwestern.edu";

const STORES = {
  chrome: { label: "Add to Chrome", logo: "/logos/chrome.svg", url: "chromeUrl" },
  firefox: { label: "Add to Firefox", logo: "/logos/firefox.svg", url: "firefoxUrl" },
};

function StoreButton({ store, tweaks, location, primary, large }) {
  const posthog = usePostHog();
  const s = STORES[store];
  return (
    <a
      className={`btn ${primary ? "btn-primary" : "btn-quiet"}${large ? " btn-lg" : ""}`}
      href={tweaks[s.url]}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => posthog?.capture("chrome_install_clicked", { location, browser: store })}
    >
      <img src={s.logo} alt="" width={large ? 22 : 18} height={large ? 22 : 18} />
      {s.label}
    </a>
  );
}

// The Mac app, offered beside the extension to visitors on a Mac. /download/mac
// redirects to the current release's disk image (see vercel.json).
const IS_MAC = typeof navigator !== "undefined" && /Mac/.test(navigator.platform) && !navigator.maxTouchPoints;

function MacButton({ location }) {
  const posthog = usePostHog();
  return (
    <a className="btn btn-quiet btn-lg" href="/download/mac" onClick={() => posthog?.capture("mac_download_clicked", { location })}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
      </svg>
      Download for Mac
      <span className="btn-badge">Beta</span>
    </a>
  );
}

// One install button, for the visitor's own browser.
function InstallButtons({ tweaks, location }) {
  return (
    <div className="cta">
      <StoreButton store={tweaks.browser} tweaks={tweaks} location={location} primary large />
      {IS_MAC && <MacButton location={location} />}
    </div>
  );
}

// Blocks of the sample week, for the snapshot cut-out: [day, start row, rows, color].
const SNAPSHOT = [
  [0, 1, 1, "blue"], [2, 1, 1, "blue"], [4, 1, 1, "blue"],
  [1, 2, 2, "green"], [3, 2, 2, "green"],
  [0, 4, 1, "purple"], [2, 4, 1, "purple"], [4, 4, 1, "purple"],
  [1, 5, 2, "amber"], [3, 5, 2, "amber"],
];

// Scrapbook pieces: cut-outs of the real extension UI plus a few paper
// extras. `at` is [x from center, y from top, tilt]; they sit in two columns
// either side of the headline, never over it. The first six are the ones narrow screens keep.
const SCRAPS = [
  {
    id: "card", pins: ["tape-yellow tl", "tape-yellow br"], z: 1, at: [505, 50, 4],
    node: (
      <div className="pd-card blue scrap-card">
        <b>STAT 210</b>
        <span className="pd-card-title">Introduction to Probability and Statistics</span>
        <CtecLine rating={5.2} hrs={3.4} />
        <span className="pd-card-actions"><span className="pd-mini"><Icon name="chart" size={11} stroke={2} /> Analytics</span></span>
      </div>
    ),
  },
  {
    id: "kpi", pins: ["tack-red"], z: 1, at: [-500, 44, -5],
    node: (
      <div className="pd-kpi">
        <span className="pd-kpi-num"><b style={ratingTone(5.2)}>5.2</b> /6</span>
        <span className="pd-kpi-label">Overall rating</span>
      </div>
    ),
  },
  {
    id: "prereq", pins: ["clip"], z: 2, at: [-492, 226, -3],
    node: (
      <div className="pd-result open">
        <span className="pd-result-main"><b>COMP_SCI 348</b><span>Prerequisites met</span></span>
        <span className="pd-badge ready">✓</span>
      </div>
    ),
  },
  {
    id: "seats", pins: ["clip-right"], z: 2, at: [482, 264, 3],
    node: (
      <div className="scrap-seats">
        <span className="pd-eyebrow">Seats</span>
        <b>14 of 120 open</b>
        <span className="pd-seatbar"><i style={{ width: "12%" }} /></span>
      </div>
    ),
  },
  {
    id: "comment", pins: ["tape-blue tl", "tape-blue br"], z: 1, at: [-540, 372, 2],
    node: (
      <div className="pd-comment positive">
        <p>Office hours were the most useful part of the course.</p>
        <span>Fall 2026</span>
      </div>
    ),
  },
  {
    id: "cart", pins: ["staple"], z: 2, at: [540, 424, 3],
    node: (
      <div className="scrap-cart">
        <span className="pd-in-cart">In cart</span>
        <span className="pd-detail-btn on">Hide</span>
      </div>
    ),
  },
  {
    id: "sticky", bare: true, pins: [], z: 1, at: [-545, 158, 4],
    node: <div className="scrap-sticky">lazy mode =<br />least hours<br />per week</div>,
  },
  {
    id: "snapshot", pins: ["tack-yellow"], z: 1, at: [560, 186, -4],
    node: (
      <div className="scrap-snapshot">
        <div>
          {SNAPSHOT.map(([day, row, span, color], i) => (
            <i key={i} className={color} style={{ gridColumn: day + 1, gridRow: `${row} / span ${span}` }} />
          ))}
        </div>
        <span>schedule 1 of 16</span>
      </div>
    ),
  },
  {
    id: "ticket", bare: true, pins: ["tape-yellow tr"], z: 1, at: [540, 374, -3],
    node: (
      <div className="scrap-ticket">
        <span>Registration opens</span>
        <b>Wed, Nov 18 · 10:30 AM</b>
      </div>
    ),
  },
  {
    id: "search", pins: ["staple"], z: 2, at: [-468, 442, -3],
    node: <div className="scrap-search"><Icon name="search" size={13} /> cs 21x</div>,
  },
  {
    id: "pencil", bare: true, pins: [], z: 1, at: [-600, 545, -20],
    node: <PencilGlyph size={84} rotate={0} />,
  },
];

// What holds each piece down. Tape runs off a corner onto the page, a tack
// goes through the paper, and clips and staples join one piece to the piece
// it overlaps. The clip's back wire is cut off at the paper's edge, so it
// reads as slid over the paper rather than drawn on it.
const PIN_ART = {
  clip: (
    <svg viewBox="0 0 26 58" fill="none" stroke="#8b929b" strokeWidth="2.4" strokeLinecap="round">
      <path d="M1 30V18" />
      <path d="M17 16V41a5 5 0 0 1-10 0V11a8 8 0 0 1 16 0V30" />
    </svg>
  ),
  tack: <i />,
};

// Mouse and pen can pick a piece up and leave it anywhere. Touch is left
// alone so swiping still scrolls the page.
function Scrap({ scrap, index }) {
  const ref = useRef(null);
  const drag = useRef(null);
  const [held, setHeld] = useState(false);
  const onPointerDown = (e) => {
    if (e.pointerType === "touch") return;
    const [x = 0, y = 0] = (ref.current.style.translate || "0px 0px").split(" ").map(parseFloat);
    drag.current = { startX: e.clientX - x, startY: e.clientY - y };
    ref.current.setPointerCapture(e.pointerId);
    setHeld(true);
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    ref.current.style.translate = `${e.clientX - drag.current.startX}px ${e.clientY - drag.current.startY}px`;
  };
  const onPointerUp = () => {
    drag.current = null;
    setHeld(false);
  };
  const [x, y, r] = scrap.at;
  return (
    <div
      ref={ref}
      className={`scrap${held ? " held" : ""}`}
      style={{
        "--x": `${x}px`, "--y": `${y}px`, "--r": `${r}deg`,
        "--delay": `${300 + index * 70}ms`,
        zIndex: scrap.z,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className={`scrap-paper${scrap.bare ? " bare" : ""}${scrap.pins[0]?.startsWith("tack") ? " hung" : ""}`}>
        <div className="pd pd-inline">{scrap.node}</div>
        {scrap.pins.map((pin) => {
          const kind = pin.split("-")[0];
          return <span key={pin} className={`pin pin-${kind} pin-${pin}`}>{PIN_ART[kind]}</span>;
        })}
      </div>
    </div>
  );
}

function Scraps({ list = SCRAPS }) {
  return (
    <div className="scraps" aria-hidden="true">
      {list.map((s, i) => <Scrap key={s.id} scrap={s} index={i} />)}
    </div>
  );
}

// A divider the pencil draws by hand (the wobble is deliberate: lines bow,
// corners miss, the circle overlaps itself): the line is drawn the first time it scrolls
// into view, with the pencil riding its tip, and the pencil stays where
// the line ends.
const STROKES = {
  // One unbroken line that stops to doodle a star, a heart and a peace sign.
  doodles: "M24 66 C 37.2 65.5, 76.9 64.2, 103.3 63.3 C 129.8 62.4, 156.2 61, 182.7 60.6 C 209.1 60.2, 248.8 60.9, 262 61 Q 242 48.7, 224 33.7 Q 247.7 33.4, 271.2 30.7 Q 253 45.4, 235.3 60.8 Q 242.8 37.4, 251 14.3 Q 258.7 38.2, 269.1 61 C 282.8 60.9, 324 60.5, 351.4 60.4 C 378.8 60.3, 406.3 59.8, 433.7 60.2 C 461.1 60.6, 502.3 62.5, 516 63 C 516.8 62.1, 519.1 59.9, 520.7 57.8 C 522.3 55.6, 523.2 52.5, 525.9 50.1 C 528.6 47.8, 533.4 46.5, 537 43.7 C 540.6 41, 545.2 36.9, 547.4 33.6 C 549.6 30.3, 550.9 26.8, 550.2 24 C 549.4 21.2, 545.6 18.6, 542.7 16.8 C 539.8 15.1, 535.8 13.2, 532.6 13.5 C 529.4 13.8, 525.4 16.9, 523.5 18.8 C 521.5 20.6, 521.8 23.6, 521.1 24.7 C 520.4 25.8, 520.2 26.4, 519.3 25.4 C 518.5 24.3, 517.7 20.5, 516.2 18.5 C 514.6 16.5, 512.9 13.8, 510.2 13.2 C 507.5 12.6, 502.4 12.9, 499.8 14.9 C 497.1 16.8, 495 21.4, 494.4 24.8 C 493.8 28.2, 494.6 31.9, 496.2 35.1 C 497.8 38.2, 501.1 41, 504.1 43.7 C 507.1 46.5, 511.7 49, 514.1 51.5 C 516.6 53.9, 517.2 56.4, 519 58.5 C 520.8 60.6, 524.1 63, 525.2 63.9 C 540.3 63.9, 585.8 64.7, 616.1 63.9 C 646.4 63.2, 676.7 59.8, 707.1 59.3 C 737.4 58.9, 782.8 60.7, 798 61 C 796.5 60.6, 792 60.3, 789.2 58.6 C 786.4 56.9, 783.5 53.6, 781.2 50.9 C 778.8 48.1, 776 45.2, 775.1 42.1 C 774.2 39, 775.1 35.5, 776 32.2 C 776.8 28.9, 778 25.1, 780.2 22.3 C 782.3 19.6, 785.6 17.6, 788.9 16 C 792.2 14.3, 796.3 12.6, 800 12.5 C 803.6 12.4, 807.5 13.9, 810.8 15.5 C 814.2 17.1, 817.6 19.3, 820.1 22.1 C 822.5 24.8, 824.5 28.6, 825.6 32 C 826.7 35.4, 827.7 39.3, 826.8 42.6 C 825.9 46, 822.8 49.2, 820.2 52 C 817.6 54.8, 814.5 57.8, 811.2 59.5 C 807.9 61.2, 802.1 61.8, 800.2 62.2 Q 800.7 37.5, 801.5 12.8 Q 800.9 25.6, 799.4 38.2 Q 791.1 47.1, 782.3 55.5 Q 791.1 45.5, 800.7 36.3 Q 809.2 45.2, 817.4 54.4 C 820.7 56.1, 826.6 62.8, 837.1 64.7 C 847.5 66.7, 873 66, 880.2 66.3 C 892.6 66, 929.5 64.7, 954.2 64.5 C 978.8 64.2, 1003.5 64.7, 1028.1 64.7 C 1052.8 64.7, 1077.4 64.5, 1102.1 64.5 C 1126.7 64.6, 1163.7 64.9, 1176 65",
  // The same idea with a lightning bolt, a cube and a paper plane.
  sketches: "M24 64 C 36.6 63.7, 74.2 61.9, 99.3 62.4 C 124.4 62.8, 149.6 66.5, 174.7 66.8 C 199.8 67, 237.4 64.5, 250 64 Q 265.6 48.3, 281.5 32.9 Q 272.7 32.8, 264 33.9 Q 268.7 21.9, 275.5 11 Q 267.8 11.2, 260.2 12.7 Q 253.5 26.5, 245.6 39.6 Q 254.2 38.7, 262.8 37.4 Q 257.1 51.7, 250.6 65.6 C 264.4 65.6, 305.8 65.9, 333.4 65.5 C 361 65.1, 388.6 63.8, 416.2 63.2 C 443.8 62.6, 485.2 62.2, 499 62 Q 500.7 45.6, 500 29.1 Q 508 22.8, 515.2 15.7 Q 534.8 17.3, 554.4 16.6 Q 547.1 24.7, 538.9 31.8 Q 520.3 29.4, 501.6 29.6 Q 521.8 28.8, 542 30 Q 540 46, 538 62.1 Q 518.3 63.1, 498.7 64.2 Q 519.6 61.3, 540.6 60.2 Q 546.8 53.1, 553.5 46.5 Q 554.5 31.1, 553.8 15.6 C 557.7 17.9, 570.9 22.1, 577.2 29 C 583.5 35.9, 581.1 50.9, 591.7 57 C 602.2 63.1, 632.4 64, 640.5 65.4 C 651.3 64.8, 683.7 62.5, 705.2 61.9 C 726.8 61.4, 759.2 62, 770 62 C 774.9 58.9, 794.7 46.5, 799.7 43.3 Q 802.9 52.7, 805.8 62.1 Q 811.4 54.5, 816.8 46.7 Q 828.6 31.4, 842.3 17.7 Q 809.2 27.1, 775.7 35.1 Q 788.7 40.5, 802 45 Q 821.8 30.7, 843.5 19.6 C 847.1 21.9, 858.1 26.8, 864.9 33.7 C 871.7 40.5, 871.8 55.3, 884.2 60.7 C 896.7 66.2, 930.3 65.5, 939.6 66.4 C 952.7 65.9, 992.1 63, 1018.4 63.3 C 1044.6 63.6, 1070.9 67.7, 1097.2 68.1 C 1123.5 68.6, 1162.9 66.4, 1176 66",
};

function Stroke({ shape }) {
  const d = STROKES[shape];
  return (
    <Reveal className={`stroke stroke-${shape} wrap`} aria-hidden="true">
      <svg viewBox="0 0 1200 80" fill="none">
        <path className="stroke-line" d={d} pathLength="1" />
        <g className="stroke-pencil" style={{ offsetPath: `path("${d}")` }}>
          <g transform="rotate(-38) scale(.62) translate(-64 -32)" stroke="#2a2a2e" strokeWidth="2" strokeLinejoin="round">
            <rect x="4" y="22" width="10" height="20" rx="3" fill="#ef8da6" />
            <rect x="14" y="22" width="9" height="20" fill="#c2c7cb" />
            <rect x="23" y="22" width="26" height="20" fill="#f5c842" />
            <polygon points="49,22 56,22 56,42 49,42" fill="#d4a373" />
            <polygon points="56,22 64,32 56,42" fill="#2a2a2e" />
          </g>
        </g>
      </svg>
    </Reveal>
  );
}

// A headline word on a strip of cut paper.
function Word({ children }) {
  return <mark>{children}</mark>;
}

// The five things the hero can show. Each is the live demo, not an image.
const TOUR = [
  { id: "lazy", tab: "Schedules", site: PAPER, narrow: { x: 240, y: 44, w: 560, h: 540 }, render: () => <ScheduleScene autoplay /> },
  { id: "ctec", tab: "CTEC reports", site: PAPER, narrow: { x: 600, y: 0, w: 520, h: 700 }, render: () => <ScheduleScene openCtec="stat210" /> },
  { id: "prereq", tab: "Prerequisites", site: PAPER, narrow: { x: 150, y: 40, w: 640, h: 420 }, render: () => <ScheduleScene sidebar="prereq" /> },
  { id: "search", tab: "Class search", site: CAESAR, narrow: { x: 110, y: 46, w: 720, h: 640 }, render: () => <SearchScene /> },
  { id: "enroll", tab: "Registration time", site: PAPER, narrow: { x: 440, y: 0, w: 560, h: 460 }, render: () => <ScheduleScene popover="enroll" /> },
];

function Hero({ tweaks }) {
  const [active, setActive] = useState("lazy");
  const scene = TOUR.find((s) => s.id === active);
  return (
    <section className="hero wrap">
      <div className="hero-top">
        <h1>
          <Word>CTECs</Word>, <Word>prerequisites</Word> and <Word>open seats</Word>, right on your <Word>schedule</Word>.
        </h1>
        <p className="lede">A free extension for Paper.nu and CAESAR.</p>
        <InstallButtons tweaks={tweaks} location="hero" />
        <Scraps />
      </div>
      <div className="tour-tabs" role="tablist" aria-label="Pencil features">
        {TOUR.map((s) => (
          <button key={s.id} type="button" role="tab" aria-selected={s.id === active} className={s.id === active ? "on" : ""} onClick={() => setActive(s.id)}>
            {s.tab}
          </button>
        ))}
      </div>
      <Frame site={scene.site} className="frame-hero">
        <StageView narrowView={scene.narrow}>
          <div key={scene.id} className="swap">{scene.render()}</div>
        </StageView>
      </Frame>
    </section>
  );
}

// Each view is something the real sheet does: every term at once, one
// term on its own, or a search through the comments.
const CTEC_VIEWS = [
  { label: "All terms", view: { term: null, focus: "top" } },
  { label: "2026 Fall", view: { term: 0, focus: "top" } },
  { label: "Comments", view: { term: null, q: "office hours", focus: "comments" } },
];

function CtecSection() {
  const [pick, setPick] = useState(0);
  // A term picked inside the sheet moves the control with it.
  const onCtecTerm = (term) => setPick(term === 0 ? 1 : term == null ? 0 : -1);
  return (
    <section id="paper" className="section wrap">
      <Reveal className="section-head row">
        <h2><Word>CTEC</Word> reports</h2>
        <div className="seg" role="tablist" aria-label="CTEC views">
          {CTEC_VIEWS.map((v, i) => (
            <button key={v.label} type="button" role="tab" aria-selected={pick === i} className={pick === i ? "on" : ""} onClick={() => setPick(i)}>{v.label}</button>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <Frame site={PAPER}>
          <StageView narrowView={{ x: 600, y: 0, w: 520, h: 700 }}>
            <ScheduleScene openCtec="stat210" ctecView={pick < 0 ? null : CTEC_VIEWS[pick].view} onCtecTerm={onCtecTerm} label="CTEC report demo" />
          </StageView>
        </Frame>
      </Reveal>
    </section>
  );
}

// The three ways to sort, as sticky notes tacked beside the heading. They
// are the demo's sort control: picking one re-sorts the schedules below.
const NOTES = [
  { id: "lazy", tone: "yellow", tilt: -3, lines: ["lazy mode", "least hours a week"] },
  { id: "rated", tone: "pink", tilt: 2, lines: ["top rated", "best CTECs first"] },
  { id: "days", tone: "blue", tilt: -1.5, lines: ["fewest days", "on campus"] },
];

function LazySection() {
  const [sort, setSort] = useState("lazy");
  return (
    <section className="section wrap">
      <Reveal className="section-head row board">
        <h2>Every schedule that <Word>fits</Word></h2>
        <div className="notes" role="tablist" aria-label="Sort schedules">
          {NOTES.map((n) => (
            <button key={n.id} type="button" role="tab" aria-selected={sort === n.id} className={`note note-${n.tone}${sort === n.id ? " on" : ""}`} style={{ "--r": `${n.tilt}deg` }} onClick={() => setSort(n.id)}>
              <span className="pin pin-tack pin-tack-red"><i /></span>
              <b>{n.lines[0]}</b>
              <span>{n.lines[1]}</span>
            </button>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <Frame site={PAPER}>
          <StageView narrowView={{ x: 240, y: 44, w: 560, h: 540 }}>
            <ScheduleScene sort={sort} onSort={setSort} label="Schedule combinations demo" />
          </StageView>
        </Frame>
      </Reveal>
    </section>
  );
}

// A student's own checklist on a taped-up strip of notebook paper, above the
// two things that answer it.
const TODOS = [
  { done: true, text: "prereqs for CS 348?" },
  { done: true, text: "hide what I already took" },
  { done: false, text: "reg opens Wed 10:30 AM" },
  { done: false, text: "put it in my calendar" },
];

function BeforeSection() {
  return (
    <section className="section wrap">
      <Reveal className="section-head row board">
        <h2>Before you <Word>register</Word></h2>
        <div className="ruled" aria-hidden="true">
          <span className="pin pin-tape pin-tape-yellow tl" />
          <span className="pin pin-tape pin-tape-blue br" />
          <ul>
            {TODOS.map((t) => (
              <li key={t.text} className={t.done ? "done" : ""}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 5.2 C 9 4.4, 15 4.9, 19.4 4.6 C 19.9 9.5, 19.3 14.6, 19.7 19.3 C 14.8 19.9, 9.4 19.2, 4.4 19.6 C 4.9 14.7, 4.1 9.8, 4.5 5.2" />
                  {t.done && <path className="tick" d="M7.2 12.4 C 8.6 14, 9.6 15.2, 10.6 16.8 C 13 12, 17 6.5, 22.5 2.2" />}
                </svg>
                {t.text}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <div className="pair">
      <Reveal as="article">
        <Frame site={PAPER}>
          <StageView view={{ x: 0, y: 0, w: 800, h: 520 }} narrowView={{ x: 150, y: 40, w: 640, h: 420 }}>
            <ScheduleScene sidebar="prereq" label="Prerequisite tree demo" />
          </StageView>
        </Frame>
        <h3>Prerequisites</h3>
        <p>Today&rsquo;s course numbers, checked against your CAESAR history.</p>
      </Reveal>
      <Reveal as="article" style={{ "--reveal-delay": "120ms" }}>
        <Frame site={PAPER}>
          <StageView view={{ x: 520, y: 0, w: 600, h: 520 }}>
            <ScheduleScene popover="enroll" label="Enrollment dates demo" />
          </StageView>
        </Frame>
        <h3>Registration time</h3>
        <p>Yours, one click from Google Calendar.</p>
      </Reveal>
      </div>
    </section>
  );
}

const TRY_QUERIES = ["cs 21x", "machine learning", "econ 3xx", "photography"];

const CAESAR_EXTRAS = [
  ["cart", 3, "Seats and notes in your cart", "Live seat counts, requirements and class notes beside every class."],
  ["term", -3, "No term picker", "Pencil remembers your term and skips the screen."],
  ["header", 2, "Header shortcuts", "Class Search, Cart, Enrollment Dates and Course History."],
  ["back", -2, "Back button works", "Back and Forward move between CAESAR pages."],
];

function CaesarSection() {
  const [query, setQuery] = useState("cs 21x");
  return (
    <section id="caesar" className="section section-tint">
      <div className="wrap">
        <Reveal className="section-head row">
          <h2>Class search in CAESAR</h2>
          <div className="try-row">
            <span>Try</span>
            {TRY_QUERIES.map((q) => (
              <button key={q} type="button" className={q === query ? "on" : ""} onClick={() => setQuery(q)}>{q}</button>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <Frame site={CAESAR}>
            <StageView narrowView={{ x: 110, y: 46, w: 720, h: 640 }}>
              <SearchScene query={query} onQuery={setQuery} showDetails />
            </StageView>
          </Frame>
        </Reveal>
        <Reveal className="trio">
          {CAESAR_EXTRAS.map(([art, tilt, title, text]) => (
            <ArtCard key={art} art={art} tilt={tilt} title={title}>{text}</ArtCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const ALSO = [
  ["export", -3, "Calendar export", "Google Calendar, Apple Calendar or Outlook."],
  ["markdown", 2, "Copy as text", "Your schedule as Markdown."],
  ["workload", -2, "Weekly workload", "Out-of-class hours, totaled per week."],
  ["compact", 3, "Compact cards", "A denser layout for packed quarters."],
  ["filters", -2, "Discipline filters", "Filter search by Foundational Discipline."],
  ["courses", 3, "My courses", "Your course history, in the popup."],
];

function AlsoSection() {
  return (
    <section className="section wrap">
      <Reveal className="section-head"><h2>More</h2></Reveal>
      <Reveal className="art-grid">
        {ALSO.map(([art, tilt, title, text]) => (
          <ArtCard key={art} art={art} tilt={tilt} title={title}>{text}</ArtCard>
        ))}
      </Reveal>
    </section>
  );
}

const TRUST = [
  ["rate", -2, "Small batches", "CTECs load three at a time, never all at once."],
  ["cache", 2, "Cached locally", "Reports load once and stay in your browser."],
  ["zero", -3, "Private", "No telemetry or analytics in the extension."],
  ["nu", 3, "Northwestern only", "Works only inside your own CAESAR session."],
];

function TrustSection({ tweaks }) {
  return (
    <section id="safe" className="section wrap trust">
      <Reveal className="section-head">
        <h2>Privacy</h2>
        <p>
          Concerns? <a href={`mailto:${tweaks.creators.map((c) => c.email).join(",")}`}>Contact us</a>.
        </p>
      </Reveal>
      <Reveal className="trust-lead">
        <div>
          <h3>It respects &ldquo;fill out CTECs to see CTECs.&rdquo;</h3>
          <p>
            If Northwestern hides a report from you, Pencil can&rsquo;t fetch
            it either. Every request goes through your own CAESAR session. We
            never see your password or NetID, and nothing is shared across
            users.
          </p>
        </div>
        <FlowDiagram />
      </Reveal>
      <Reveal className="art-grid art-grid-5">
        {TRUST.map(([art, tilt, title, text]) => (
          <ArtCard key={art} art={art} tilt={tilt} title={title}>{text}</ArtCard>
        ))}
        <ArtCard art="source" tilt={-2} title="Open source">
          MIT licensed. <a href={tweaks.githubUrl}>Read the code</a>.
        </ArtCard>
      </Reveal>
    </section>
  );
}

export default function Home({ tweaks }) {
  const posthog = usePostHog();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const links = [
    { href: "#paper", label: "Paper.nu" },
    { href: "#caesar", label: "CAESAR" },
    { href: "/guide/", label: "Guide" },
    { href: "#safe", label: "Privacy" },
    { href: tweaks.feedbackUrl, label: "Feedback", event: "feedback_clicked", external: true },
    { href: tweaks.githubUrl, label: "GitHub", event: "github_clicked", external: true },
  ];
  const linkProps = (l, location) => ({
    href: l.href,
    ...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
    onClick: () => {
      if (l.event) posthog?.capture(l.event, { location });
      closeMenu();
    },
  });
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top" onClick={closeMenu}><PencilGlyph size={22} /> pencil.nu</a>
          <nav className="nav-links" aria-label="Main">
            {links.map((l) => <a key={l.label} {...linkProps(l, "top_nav")}>{l.label}</a>)}
          </nav>
          <div className="nav-end">
            <a className="nav-icon" href={tweaks.discordUrl} target="_blank" rel="noopener noreferrer" aria-label="Join our Discord" onClick={() => posthog?.capture("discord_clicked", { location: "top_nav" })}>
              <DiscordIcon />
            </a>
            <StoreButton store={tweaks.browser} tweaks={tweaks} location="top_nav" primary />
            <button type="button" className="nav-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((v) => !v)}>
              <span /><span />
            </button>
          </div>
        </div>
        <nav id="mobile-menu" className="nav-drawer wrap" hidden={!menuOpen} aria-label="Mobile">
          {links.map((l) => <a key={l.label} {...linkProps(l, "mobile_menu")}>{l.label}</a>)}
          <a href={tweaks.discordUrl} target="_blank" rel="noopener noreferrer" onClick={() => { posthog?.capture("discord_clicked", { location: "mobile_menu" }); closeMenu(); }}>Discord</a>
        </nav>
      </header>

      <main id="top">
        <Hero tweaks={tweaks} />
        <p className="proof wrap">Free and open source<i />Built by Northwestern students</p>
        <Stroke shape="sketches" />
        <CtecSection />
        <Stroke shape="doodles" />
        <LazySection />
        <BeforeSection />
        <CaesarSection />
        <AlsoSection />
        <TrustSection tweaks={tweaks} />

        <Reveal as="section" className="closing wrap">
          <h2>Get Pencil</h2>
          <InstallButtons tweaks={tweaks} location="closing" />
        </Reveal>
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <a className="brand" href="#top"><PencilGlyph size={20} /> pencil.nu</a>
            <p>
              Free, MIT licensed and open source. An unofficial extension made
              by Northwestern students. Not affiliated with the university or
              with Paper.nu. We just love it.
            </p>
          </div>
          <div>
            <h4>Get it</h4>
            <a href={tweaks.installUrl} target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture("chrome_install_clicked", { location: "footer", browser: tweaks.browser })}>{tweaks.installStoreLabel}</a>
            <a href={tweaks.githubUrl} onClick={() => posthog?.capture("github_clicked", { location: "footer" })}>GitHub</a>
            <a href={tweaks.feedbackUrl} target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture("feedback_clicked", { location: "footer" })}>Leave feedback</a>
            <a href={tweaks.discordUrl} target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture("discord_clicked", { location: "footer" })}>Discord</a>
          </div>
          <div>
            <h4>Learn</h4>
            <a href="/guide/">User guide</a>
            <a href="#safe">Privacy</a>
            <a href={tweaks.githubUrl + "/issues"}>Report an issue</a>
            <a href={tweaks.paperUrl} target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture("paper_nu_link_clicked", { location: "footer" })}>Paper.nu</a>
          </div>
          <div>
            <h4>Built by</h4>
            {tweaks.creators.map((c) => (
              <p key={c.email} className="creator">
                <a href={c.linkedin} target="_blank" rel="noopener noreferrer">{c.name}</a>
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </p>
            ))}
          </div>
        </div>
        <div className="wrap footer-meta">
          <span>© 2026 pencil.nu</span>
          <span>Made in Evanston</span>
        </div>
      </footer>
    </>
  );
}
