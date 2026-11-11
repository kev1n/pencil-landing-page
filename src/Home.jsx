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

// One install button, for the visitor's own browser.
function InstallButtons({ tweaks, location }) {
  return (
    <div className="cta">
      <StoreButton store={tweaks.browser} tweaks={tweaks} location={location} primary large />
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

function Scraps() {
  return (
    <div className="scraps" aria-hidden="true">
      {SCRAPS.map((s, i) => <Scrap key={s.id} scrap={s} index={i} />)}
    </div>
  );
}

// A headline word on a strip of cut paper.
function Word({ children }) {
  return <mark>{children}</mark>;
}

// The five things the hero can show. Each is the live demo, not an image.
const TOUR = [
  { id: "lazy", tab: "Schedules", site: PAPER, narrow: { x: 240, y: 44, w: 560, h: 540 }, render: () => <ScheduleScene autoplay /> },
  { id: "ctec", tab: "CTEC reports", site: PAPER, narrow: { x: 656, y: 0, w: 464, h: 700 }, render: () => <ScheduleScene openCtec="stat210" /> },
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
        <h2>CTEC reports</h2>
        <div className="seg" role="tablist" aria-label="CTEC views">
          {CTEC_VIEWS.map((v, i) => (
            <button key={v.label} type="button" role="tab" aria-selected={pick === i} className={pick === i ? "on" : ""} onClick={() => setPick(i)}>{v.label}</button>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <Frame site={PAPER}>
          <StageView narrowView={{ x: 656, y: 0, w: 464, h: 700 }}>
            <ScheduleScene openCtec="stat210" ctecView={pick < 0 ? null : CTEC_VIEWS[pick].view} onCtecTerm={onCtecTerm} label="CTEC report demo" />
          </StageView>
        </Frame>
      </Reveal>
    </section>
  );
}

function LazySection() {
  return (
    <section className="section wrap split">
      <Reveal className="split-copy">
        <h2>Every schedule that fits</h2>
        <p>Sorted by workload, rating or days on campus. Pin the sections you won&rsquo;t give up.</p>
      </Reveal>
      <Reveal className="split-demo">
        <Frame site={PAPER}>
          <StageView view={{ x: 240, y: 0, w: 880, h: 700 }} narrowView={{ x: 240, y: 44, w: 560, h: 540 }}>
            <ScheduleScene initialSort="lazy" label="Schedule combinations demo" />
          </StageView>
        </Frame>
      </Reveal>
    </section>
  );
}

function BeforeSection() {
  return (
    <section className="section wrap pair">
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
        <CtecSection />
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
