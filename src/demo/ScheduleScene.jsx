import { useEffect, useMemo, useRef, useState } from "react";
import { Stage, Icon, PencilGlyph } from "./Stage.jsx";
import { COMBOS, DAYS, PREREQ_RESULTS, SORTS } from "./data.js";
import { ratingTone } from "./rating.js";

const FIRST_HOUR = 9;
const HOURS = 8;
const hourLabel = (h) => `${((h + 11) % 12) + 1} ${h < 12 ? "AM" : "PM"}`;

// Pencil's one line of CTEC facts: the rating in its colour, then hours.
export function CtecLine({ rating, hrs }) {
  return (
    <span className="pd-ctec-line">
      <span><b style={ratingTone(rating)}>{rating.toFixed(1)}</b><i>/6</i></span>
      <span><b>{hrs.toFixed(1)}</b> <i>hrs</i></span>
    </span>
  );
}

// The badge glyphs the extension draws on each search result.
const BADGE = { ready: "✓", "needs-consent": "!", blocked: "⊘", unknown: "?", taken: "✓" };

// The extension's real prerequisite tooltip, built from its own code and
// loaded in a frame (see embed/prereq-embed.ts). It reports its size.
function PrereqTip({ course }) {
  const ref = useRef(null);
  const [size, setSize] = useState(null);
  useEffect(() => {
    const onMessage = (e) => {
      if (e.source === ref.current?.contentWindow && e.data?.pencilPrereq) setSize(e.data.pencilPrereq);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);
  return (
    <iframe
      ref={ref}
      className="pd-prereq-frame"
      src={`/demo/prereq/index.html?course=${encodeURIComponent(course)}`}
      title={`Prerequisites for ${course.replace(/-0$/, "")}`}
      scrolling="no"
      style={size ? { width: size.w + 4, height: size.h + 4 } : { visibility: "hidden" }}
    />
  );
}

function Sidebar({ mode, initialOpen }) {
  const [fulfilledOnly, setFulfilledOnly] = useState(false);
  const [hideTaken, setHideTaken] = useState(true);
  const [open, setOpen] = useState(initialOpen);
  const results = PREREQ_RESULTS.filter(
    (r) => !(hideTaken && r.state === "taken") && !(fulfilledOnly && r.state === "blocked")
  );
  return (
    <aside className="pd-side">
      <div className="pd-paper-brand">
        <img src="/demo/paper-logo.png" alt="Paper" />
        <span className="pd-and-pencil">and pencil <PencilGlyph size={15} /></span>
      </div>
      <div className="pd-paper-tabs">
        <span>Plan</span>
        <span className="on"><Icon name="calendar" size={13} /> Schedule</span>
      </div>
      <div className="pd-side-panel">
        {mode === "prereq" ? (
          <>
            <div className="pd-paper-search filled"><Icon name="search" size={14} /> COMP_SCI 3</div>
            <div className="pd-switches">
              <button type="button" className={"pd-switch" + (hideTaken ? " on" : "")} onClick={() => setHideTaken((v) => !v)} aria-pressed={hideTaken}>
                <i /> Hide Taken
              </button>
              <button type="button" className={"pd-switch" + (fulfilledOnly ? " on" : "")} onClick={() => setFulfilledOnly((v) => !v)} aria-pressed={fulfilledOnly}>
                <i /> Show Only Prereq Fulfilled
              </button>
            </div>
            {results.map((r) => (
              <div
                key={r.code}
                className={"pd-result" + (open === r.code ? " open" : "")}
                onMouseEnter={() => setOpen(r.code)}
              >
                <span className="pd-result-main">
                  <b>{r.code}</b>
                  <span>{r.title}</span>
                </span>
                <button
                  type="button"
                  className={"pd-badge " + r.state}
                  aria-label={`Prerequisites for ${r.code}`}
                  aria-expanded={open === r.code}
                  onFocus={() => setOpen(r.code)}
                  onClick={() => setOpen(open === r.code ? null : r.code)}
                >
                  {BADGE[r.state]}
                </button>
                <span className="pd-tip" hidden={open !== r.code}>
                  <PrereqTip course={r.id} />
                </span>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="pd-paper-search"><Icon name="search" size={14} /> Search 2027 Winter…</div>
            <div className="pd-paper-filters">
              <span><Icon name="list" size={13} /></span>
              <span><Icon name="filter" size={13} /></span>
              <span className="term">2027 Winter</span>
            </div>
            <div className="pd-switches"><span className="pd-switch"><i /> Prereqs (Beta)</span></div>
            <div className="pd-paper-help">
              <Icon name="search" size={18} />
              <b>Search</b>
              <p>Search across every course offered 2027 Winter at Northwestern and view detailed information for each one.</p>
              <Icon name="right" size={18} />
              <b>Add</b>
              <p>Add any of the sections for a course to your schedule and watch as they appear at the appropriate time.</p>
            </div>
          </>
        )}
      </div>
      <div className="pd-paper-foot">
        <span className="on"><Icon name="search" size={13} />Search</span>
        <span><Icon name="bookmark" size={13} />Bookmarks</span>
        <span><Icon name="calendar" size={13} />Schedules</span>
      </div>
    </aside>
  );
}

function EnrollmentPopover() {
  return (
    <div className="pd-pop" role="dialog" aria-label="Enrollment dates">
      <h4>Enrollment Dates</h4>
      <p className="pd-pop-sub">Your registration appointments</p>
      <b>Regular Registration</b>
      <p>Wed, Nov 18, 10:30 AM CST</p>
      <p className="pd-pop-muted">Closes Sun, Jan 3, 12:59 PM CST</p>
      <span className="pd-pop-cta">Add to Google Calendar</span>
      <hr />
      <b>General Winter 2027 Registration Dates</b>
      <p className="pd-pop-muted">Open Enrollment Dates in CAESAR</p>
    </div>
  );
}

// Paper.nu's schedule page with Pencil's additions: a CTEC line and
// Analytics on each card, the Combinations bar, the workload total, prereq
// badges in search and the Enrollment Dates popover. `ctecView` steers the
// docked CTEC sheet ({ term, q, focus }); changing it reopens the sheet.
export default function ScheduleScene({ sidebar = "idle", popover = null, initialSort = "lazy", sort: sortProp = null, onSort, autoplay = false, openCtec = null, ctecView = null, onCtecTerm, prereqOpen = "COMP_SCI 348", label = "Paper.nu schedule with Pencil" }) {
  // The sort can be driven from outside (`sort` + `onSort`); a change from
  // outside starts again at the first schedule.
  const [ownSort, setOwnSort] = useState(initialSort);
  const sortId = sortProp ?? ownSort;
  const setSortId = (id) => { setOwnSort(id); onSort?.(id); };
  const [index, setIndex] = useState(0);
  const [lastSort, setLastSort] = useState(sortId);
  if (sortId !== lastSort) {
    setLastSort(sortId);
    setIndex(0);
  }
  const [pinned, setPinned] = useState(null);
  const [ctec, setCtec] = useState(openCtec);
  const [cart, setCart] = useState({});
  // A new view from outside reopens the sheet if the visitor closed it.
  const [lastView, setLastView] = useState(ctecView);
  if (ctecView !== lastView) {
    setLastView(ctecView);
    if (ctecView) setCtec(openCtec);
  }
  // Autoplay steps through schedules on its own until the visitor touches the demo.
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    if (!autoplay || touched || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % COMBOS.length), 2800);
    return () => clearInterval(id);
  }, [autoplay, touched]);

  const sort = SORTS.find((s) => s.id === sortId);
  const combos = useMemo(() => {
    const list = pinned
      ? COMBOS.filter((c) => c.picks.some((p) => p.course.id === pinned.course && p.section === pinned.section))
      : COMBOS;
    return [...list].sort(sort.cmp);
  }, [sort, pinned]);
  const combo = combos[Math.min(index, combos.length - 1)];
  const step = (d) => setIndex((i) => (Math.min(i, combos.length - 1) + d + combos.length) % combos.length);
  const nextSort = () => {
    setSortId(SORTS[(SORTS.findIndex((s) => s.id === sortId) + 1) % SORTS.length].id);
    setIndex(0);
  };
  const ctecPick = ctec && combo.picks.find((p) => p.course.id === ctec);

  return (
    <Stage label={label}>
      <div className="pd-paper" onPointerDown={() => setTouched(true)} onKeyDown={() => setTouched(true)}>
        <Sidebar mode={sidebar} initialOpen={prereqOpen} />
        <div className="pd-main">
          <div className="pd-topbar">
            <span className="pd-load"><b>≈ {Math.round(combo.hrs)} hrs/wk</b> outside class</span>
            <nav>
              <span><Icon name="info" size={13} /> About</span>
              <span className={popover === "enroll" ? "hot" : ""}>Enrollment Dates</span>
              <span><Icon name="map" size={13} /> Map</span>
              <span><Icon name="note" size={13} /> Notes</span>
              <span><Icon name="share" size={13} /> Share</span>
              <span><Icon name="gear" size={13} /> Settings</span>
              <span className="pd-signin">Sign in</span>
            </nav>
          </div>
          <div className="pd-cal">
            <div className="pd-combo-bar">
              <span className="pd-combo-toggle"><i /> Combinations</span>
              <span className="pd-combo-mid">
                <button type="button" onClick={() => step(-1)} aria-label="Previous schedule"><Icon name="caret" size={13} stroke={2} className="flip" /></button>
                <b>{Math.min(index, combos.length - 1) + 1} of {combos.length}</b>
                <button type="button" onClick={() => step(1)} aria-label="Next schedule"><Icon name="caret" size={13} stroke={2} /></button>
                <span className="pd-combo-rating"><b style={ratingTone(combo.rating)}>{combo.rating.toFixed(2)}</b> avg rating</span>
              </span>
              <button type="button" className="pd-combo-sort" onClick={nextSort} aria-label={`Sort: ${sort.label}. Click to change.`}>
                <span>Sort</span> {sort.label} <Icon name="caret" size={10} stroke={2.2} className="down" />
              </button>
              <span className="pd-combo-credits"><span>Credits</span> <b>3</b> to <b>5</b></span>
              <span className="pd-combo-end">
                <span><Icon name="plus" size={12} /> CUSTOM</span>
                <span className="export"><Icon name="export" size={12} /> EXPORT</span>
                <span><Icon name="trash" size={12} /> CLEAR</span>
              </span>
            </div>
            <div className="pd-days">{DAYS.map((d) => <span key={d}>{d}</span>)}</div>
            <div className="pd-grid">
              {Array.from({ length: HOURS + 1 }, (_, i) => (
                <div className="pd-hour" key={i} style={{ top: `${(i / HOURS) * 100}%` }}>
                  <span>{hourLabel(FIRST_HOUR + i)}</span>
                </div>
              ))}
              {combo.picks.flatMap(({ course, section }) =>
                section.days.map((day, di) => {
                  const isPinned = pinned?.course === course.id;
                  const inCart = cart[course.id] === section;
                  return (
                    <div
                      key={course.id + "-" + di}
                      className={"pd-card " + course.color}
                      style={{
                        left: `calc(${day * 20}% + 3px)`,
                        top: `${((section.start - FIRST_HOUR) / HOURS) * 100}%`,
                        height: `calc(${((section.end - section.start) / HOURS) * 100}% - 3px)`,
                      }}
                    >
                      <b>{course.code}</b>
                      <span className="pd-card-title">{course.title}</span>
                      {di === 0 && (
                        <>
                          <CtecLine rating={section.rating} hrs={section.hrs} />
                          <button
                            type="button"
                            className={"pd-pin" + (isPinned ? " on" : "")}
                            aria-label={isPinned ? `Unpin ${course.code}` : `Pin this ${course.code} section`}
                            aria-pressed={isPinned}
                            onClick={() => { setPinned(isPinned ? null : { course: course.id, section }); setIndex(0); }}
                          >
                            <Icon name="pin" size={11} />
                          </button>
                          <span className="pd-card-actions">
                            <button
                              type="button"
                              className={"pd-mini" + (inCart ? " done" : "")}
                              aria-label={inCart ? `${course.code} is in your cart` : `Add ${course.code} to cart`}
                              onClick={() => setCart((c) => ({ ...c, [course.id]: section }))}
                            >
                              <Icon name={inCart ? "check" : "plus"} size={11} stroke={2.2} />
                            </button>
                            <button type="button" className="pd-mini" onClick={() => setCtec(course.id)}>
                              <Icon name="chart" size={11} stroke={2} /> Analytics
                            </button>
                          </span>
                        </>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
          {popover === "enroll" && <EnrollmentPopover />}
        </div>
        {ctecPick && (
          <CtecFrame course={ctecPick.course} section={ctecPick.section} view={ctecView} onTerm={onCtecTerm} onClose={() => setCtec(null)} />
        )}
      </div>
    </Stage>
  );
}

// The extension's real CTEC side sheet, built from its own code and loaded
// in a frame docked to the right edge (see embed/ctec-embed.ts). `view`
// ({ term, q, focus }) can be driven from outside.
export function CtecFrame({ course, section, view, onClose, onTerm }) {
  const ref = useRef(null);
  const [first] = useState(view);
  const params = new URLSearchParams({ code: course.code, title: course.title, r: section.rating, h: section.hrs });
  if (first?.term != null) params.set("term", first.term);
  if (first?.q) params.set("q", first.q);
  if (first?.focus) params.set("focus", first.focus);
  const sent = useRef(false);
  useEffect(() => {
    // The first view is already in the URL.
    if (!sent.current) { sent.current = true; return; }
    if (view) ref.current?.contentWindow?.postMessage({ pencilCtec: view }, "*");
  }, [view]);
  useEffect(() => {
    const onMessage = (e) => {
      if (e.source !== ref.current?.contentWindow) return;
      if (e.data?.pencilCtec === "close") onClose?.();
      if (e.data?.pencilCtec === "term") onTerm?.(e.data.term);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [onClose, onTerm]);
  return (
    <div className="pd-sheet">
      <iframe ref={ref} className="pd-ctec-frame" src={`/demo/ctec/index.html?${params}`} title={`CTEC report for ${course.code}`} loading="lazy" />
    </div>
  );
}
