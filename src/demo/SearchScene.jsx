import { useEffect, useRef, useState } from "react";
import { Stage, Icon, PencilGlyph } from "./Stage.jsx";
import { DISTROS, searchCatalog } from "./data.js";
import { CtecLine } from "./ScheduleScene.jsx";

// A steady sample CTEC for each section, so the chip doesn't change between renders.
function sampleCtec(course, s) {
  if (s.topic) return null;
  const h = [...(course.code + s.n)].reduce((n, c) => (n * 31 + c.charCodeAt(0)) % 997, 7);
  return { rating: 4.3 + (h % 14) / 10, hrs: 2.5 + (h % 9) * 0.8 };
}

// The same five seat tones the extension uses, by how full the class is.
const seatTone = (s) => { const f = 1 - s.open / s.cap; return f >= 0.95 ? "full" : f >= 0.8 ? "warn" : f >= 0.6 ? "tight" : f >= 0.35 ? "room" : "open"; };

function SectionRow({ course, s, showDetails = false }) {
  const [cart, setCart] = useState("idle");
  const [details, setDetails] = useState(showDetails);
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);
  const add = () => {
    if (cart !== "idle") return;
    setCart("adding");
    timer.current = setTimeout(() => setCart("done"), 900);
  };
  const ctec = sampleCtec(course, s);
  const enrolled = s.cap - s.open;
  const waitlist = s.status === "Waitlist" ? 6 : 0;
  return (
    <div className="pd-sec">
      {s.topic && <p className="pd-sec-topic">{s.topic}</p>}
      <div className="pd-sec-row">
        <b>{s.n}</b>
        <span className="pd-sec-comp">LEC</span>
        <span className="pd-sec-time">
          <small>Jan 4 – Mar 13, 2027</small>
          <span>{s.time}</span>
        </span>
        <span>{s.who}</span>
        <span className="pd-sec-room">{s.room}</span>
        <span className={"pd-status " + s.status.toLowerCase()}><i />{s.status === "Waitlist" ? "Wait List" : s.status}</span>
        <span className="pd-sec-ctec">
          {ctec ? <span className="pd-chip"><Icon name="chart" size={11} stroke={2} /><CtecLine rating={ctec.rating} hrs={ctec.hrs} /></span> : <span className="pd-muted">No CTEC</span>}
        </span>
        <span className="pd-sec-actions">
          <button type="button" className={"pd-detail-btn" + (details ? " on" : "")} onClick={() => setDetails((v) => !v)} aria-expanded={details}>{details ? "Hide" : "Details"}</button>
          {s.status !== "Closed" && (
            cart === "done"
              ? <span className="pd-in-cart">In cart</span>
              : <button type="button" className={"pd-add " + cart} onClick={add} disabled={cart === "adding"} aria-label={`Add ${course.code} section ${s.n} to cart`}>{cart === "adding" ? "Adding…" : "Add to cart"}</button>
          )}
        </span>
      </div>
      {details && (
        <div className="pd-details">
          <div className="pd-stats">
            {[[s.open, "Open seats"], [s.cap, "Capacity"], [enrolled, "Enrolled"], [20, "Waitlist size"], [waitlist, "On waitlist"]].map(([n, label], i) => (
              <span key={label}><b className={i === 0 ? "pd-seat-chip " + seatTone(s) : undefined}>{n}</b>{label}</span>
            ))}
          </div>
          <div className="pd-detail-part">
            <span>Enrollment requirements</span>
            <p>Reserved for majors and minors until the second day of registration.</p>
          </div>
          <div className="pd-detail-part">
            <span>Class notes</span>
            <p>Attendance at the first class is mandatory. Discussion sections meet weekly.</p>
          </div>
        </div>
      )}
    </div>
  );
}

function CourseCard({ course, defaultOpen, showDetails }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="pd-course">
      <div className="pd-course-head">
        <b>{course.code}</b>
        <span>{course.title}</span>
        <small>{course.units} unit</small>
      </div>
      <p className="pd-course-blurb">{course.blurb}</p>
      <button type="button" className="pd-course-toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <Icon name="caret" size={10} stroke={2.2} className={open ? "down" : ""} /> {course.sections.length} section{course.sections.length === 1 ? "" : "s"}
      </button>
      {open && course.sections.map((s, i) => <SectionRow key={s.n} course={course} s={s} showDetails={showDetails && i === 0} />)}
    </div>
  );
}

// CAESAR's class search page with Pencil's Sharper Search tab active.
export default function SearchScene({ query, onQuery, showDetails = false }) {
  const [local, setLocal] = useState("cs 21x");
  const [distro, setDistro] = useState(null);
  const q = query ?? local;
  const setQ = onQuery ?? setLocal;
  const results = searchCatalog(q, distro);
  const sections = results.reduce((n, c) => n + c.sections.length, 0);
  return (
    <Stage label="CAESAR class search with Pencil's Sharper Search">
      <div className="pd-caesar">
        <header className="pd-caesar-head">
          <b>CAESAR</b>
          <nav>
            <span className="pd-by"><PencilGlyph size={14} /> by Pencil</span>
            <span>Class Search</span>
            <span>Cart</span>
            <span>Enrollment Dates</span>
            <span>Course History</span>
          </nav>
        </header>
        <div className="pd-caesar-body">
          <div className="pd-caesar-tabs">
            <span className="on">Sharper Search</span>
            <span>Classic CAESAR</span>
          </div>
          <div className="pd-caesar-title">
            <h3>Search for classes</h3>
            <span>Classes from <u>Paper.nu</u>. Seats and status come from CAESAR.</span>
          </div>
          <div className="pd-searchbox">
            <input className="pd-input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="cs 21x, machine learning, econ 3xx…" spellCheck={false} aria-label="Search classes" />
            <span className="pd-input pd-select">2027 Winter <Icon name="caret" size={11} className="down" /></span>
          </div>
          <div className="pd-searchbox-foot">
            <span>{results.length} course{results.length === 1 ? "" : "s"} · {sections} section{sections === 1 ? "" : "s"}</span>
            <span className="pd-distros">
              {DISTROS.map((d) => (
                <button key={d} type="button" className={distro === d ? "on" : ""} aria-pressed={distro === d} onClick={() => setDistro(distro === d ? null : d)}>{d}</button>
              ))}
            </span>
          </div>
          <div className="pd-results">
            {results.map((c, i) => <CourseCard key={c.code + q} course={c} defaultOpen={i === 0} showDetails={showDetails && i === 0} />)}
            {!results.length && <p className="pd-empty">No classes match. Try “cs 21x” or “machine learning”.</p>}
          </div>
        </div>
      </div>
    </Stage>
  );
}
