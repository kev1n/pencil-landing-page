import { Icon, PencilGlyph } from "./demo/Stage.jsx";

// Small graphics for the feature cards. Like the hero pieces, each one is a
// cut-out of the real extension UI (or the real logos it works with).

const WORKLOAD = [
  ["COMP_SCI 211", 9.4, "green"],
  ["ECON 201", 4.1, "purple"],
  ["STAT 210", 3.4, "blue"],
  ["PSYCH 110", 2.8, "amber"],
];

const MY_COURSES = [
  ["COMP_SCI 111", "Taken", "ok"],
  ["COMP_SCI 211", "In progress", "progress"],
  ["MATH 220-1", "Transferred", "unknown"],
];

const ART = {
  export: (
    <div className="art-export">
      <span className="art-file">.ics</span>
      <Icon name="right" size={14} />
      <img src="/logos/google-calendar.svg" alt="Google Calendar" />
      <img src="/logos/apple-calendar.svg" alt="Apple Calendar" />
      <img src="/logos/outlook.svg" alt="Outlook" />
    </div>
  ),
  markdown: (
    <pre className="art-md">
      <b>## Winter 2027</b>{"\n"}
      - STAT 210 · MWF 10:00{"\n"}
      - COMP_SCI 211 · TuTh 11:00{"\n"}
      - ECON 201 · MWF 1:00
    </pre>
  ),
  workload: (
    <div className="art-load">
      <span className="pd-load"><b>≈ 20 hrs/wk</b> outside class</span>
      <div>
        {WORKLOAD.map(([code, hrs, color]) => (
          <p key={code}>
            <span>{code}</span>
            <i className={color} style={{ width: `${hrs * 7}px` }} />
            <b>{hrs}</b>
          </p>
        ))}
      </div>
    </div>
  ),
  compact: (
    <div className="art-compact">
      <span className="blue"><b>STAT 210</b><em>★ 5.2</em><em>3.4 h</em></span>
      <span className="green"><b>COMP_SCI 211</b><em>★ 5.1</em><em>9.4 h</em></span>
      <span className="purple"><b>ECON 201</b><em>★ 4.6</em><em>4.1 h</em></span>
    </div>
  ),
  filters: (
    <div className="pd-distros art-filters">
      {["Nat Sci", "Emp Ded", "Soc Beh", "History", "Ethics", "Lit Arts"].map((d) => (
        <button key={d} type="button" tabIndex={-1} className={d === "Soc Beh" ? "on" : ""}>{d}</button>
      ))}
    </div>
  ),
  courses: (
    <div className="art-courses">
      <span className="pd-eyebrow">My courses</span>
      {MY_COURSES.map(([code, status, tone]) => (
        <p key={code}><b>{code}</b><span className={"pd-status " + tone}><i />{status}</span></p>
      ))}
    </div>
  ),
  cart: (
    <div className="art-cart">
      <p><b>COMP_SCI 211</b><span className="pd-status open"><i />Open</span></p>
      <span className="pd-eyebrow">Seats</span>
      <b>22 of 110 open</b>
      <span className="pd-seatbar"><i style={{ width: "20%" }} /></span>
      <em>Attendance at the first class is mandatory.</em>
    </div>
  ),
  term: (
    <div className="art-term">
      <span className="pd-eyebrow">Select term</span>
      <p className="on"><b>2027 Winter</b><span>remembered</span></p>
      <p><b>2026 Fall</b></p>
      <p><b>2026 Summer</b></p>
    </div>
  ),
  header: (
    <div className="art-header">
      <b>CAESAR</b>
      <span className="pd-by"><PencilGlyph size={14} /> by Pencil</span>
      <span>Class Search</span>
      <span>Cart</span>
    </div>
  ),
  // CAESAR's Back button, working. Remove with the "back" line in Home.jsx.
  back: (
    <div className="art-back">
      <span className="art-back-nav">
        <i className="on"><Icon name="left" size={12} stroke={2.2} /></i>
        <i><Icon name="right" size={12} stroke={2.2} /></i>
      </span>
      <p className="on">Class Search</p>
      <p>Shopping Cart</p>
    </div>
  ),
  rate: (
    <div className="art-rate">
      <div>{Array.from({ length: 10 }, (_, i) => <i key={i} className={i < 3 ? "on" : ""} />)}</div>
      <p><b>3</b> at a time</p>
    </div>
  ),
  cache: (
    <div className="art-cache">
      <p><span>First open</span><b>1 request</b></p>
      <p className="on"><span>Open again</span><b>0 requests</b></p>
    </div>
  ),
  zero: (
    <div className="art-zero">
      <b>0</b>
      <span>servers<br />trackers<br />analytics</span>
    </div>
  ),
  nu: (
    <div className="art-nu">
      <b>CAESAR</b>
      <span><Icon name="check" size={11} stroke={2.6} /> Your own session</span>
    </div>
  ),
  source: (
    <div className="art-source">
      <img src="/logos/github.svg" alt="GitHub" />
      <span>kev1n/pencil</span>
      <b>MIT</b>
    </div>
  ),
};

// A feature card: a tilted cut-out on a tinted panel, then a title and a line.
export function ArtCard({ art, title, children, tilt = -3 }) {
  return (
    <div className="art-card">
      <div className="art-panel">
        <div className="art-paper" style={{ "--r": `${tilt}deg` }}>
          <div className="pd pd-inline">{ART[art]}</div>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

// Where a request goes: from the browser straight to Northwestern, and
// nowhere else.
export function FlowDiagram() {
  return (
    <div className="flow" role="img" aria-label="Pencil runs in your browser and talks only to Northwestern. There are no Pencil servers.">
      <div className="flow-node">
        <PencilGlyph size={30} />
        <b>Your browser</b>
        <span>Pencil runs here</span>
      </div>
      <div className="flow-line"><span>your own login</span></div>
      <div className="flow-node">
        <strong>CAESAR</strong>
        <b>Northwestern</b>
        <span>CAESAR and CTECs</span>
      </div>
      <div className="flow-node ghost">
        <b>Pencil servers</b>
        <span>None</span>
      </div>
    </div>
  );
}
