/* Mocks aim to match the real extension UI:
   - MockSearch: replicates the bc-cs-shell layout from
     class-search/views/{search-form,course-card,section-row}.ts.
   - MockSeats: shopping-cart row painted with notes/seats fetched on load.
   - MockChip: a paper.nu schedule card with the inlined CTEC chip strip
     (paper-ctec/widget-chips + chip-cart-coordinator).
   - MockModal: the CTEC analytics modal — KPI strip, heatmap, hours density.
     Mirrors paper-ctec/modal/{overview,heatmap,charts,hours-density}.
   - MockComments: comments tab — sentiment rail + comment cards with
     positive/mixed/critical badges (paper-ctec/modal/comments.ts).
   - MockTrend: per-metric trend line over loaded terms (modal/charts.ts). */

const cellPaper = {
  background: "#f7f1ea",
  border: "1px solid #e3d6c4",
  borderRadius: 8,
};

// Stylized paper-plane outline matching paper.nu's icon-borderless.png.
export function PaperLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path
        d="M14 44 L88 18 L70 84 L46 60 L36 68 L36 52 L70 28 L42 52 Z"
        stroke="#2a2a2e"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ── CAESAR mocks ───────────────────────────────────────────────────────────

export function MockSearch() {
  const sections = [
    { id: "21", comp: "LEC", time: "MoWeFr 10:00am–10:50am", who: "Riedl",    room: "TECH L160", status: "OPEN",     cart: "in-cart" },
    { id: "22", comp: "LEC", time: "MoWeFr 1:00pm–1:50pm",   who: "Pardo",    room: "TECH LR3",  status: "WAITLIST", cart: null },
    { id: "23", comp: "LEC", time: "TuTh 11:00am–12:20pm",   who: "Hartline", room: "TECH L168", status: "OPEN",     cart: null },
  ];
  const statusColor = (s) => (s === "OPEN" ? "#1c6b3a" : s === "WAITLIST" ? "#a85a14" : "#7c2d12");
  const statusBg = (s) => (s === "OPEN" ? "#e6f4ec" : s === "WAITLIST" ? "#faecd6" : "#fbe3da");
  return (
    <div className="mock-frame">
      <div className="mock-bar">
        <div className="mock-dots"><span /><span /><span /></div>
        <div className="mock-url">caesar.ent.northwestern.edu › class search</div>
      </div>

      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        <div style={{
          padding: "6px 12px", borderRadius: 6,
          background: "#2a2a2e", color: "#f6ecc0",
          fontFamily: "var(--font-pencil)", fontSize: 11, letterSpacing: ".06em",
        }}>Sharper Search</div>
        <div style={{
          padding: "6px 12px", borderRadius: 6,
          border: "1px dashed #c8c0a4",
          fontFamily: "var(--font-pencil)", fontSize: 11, color: "#7d8088",
        }}>Classic CAESAR</div>
      </div>

      <div style={{ marginBottom: 10 }}>
        <div style={{ fontFamily: "var(--font-pencil)", fontSize: 18, fontWeight: 400, lineHeight: 1 }}>
          Search for Classes
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#6b5d62", marginTop: 4, letterSpacing: ".04em" }}>
          catalog from paper.nu · live status from CAESAR
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 130px", gap: 8, marginBottom: 12 }}>
        <div style={{ ...cellPaper, padding: "8px 10px" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#7d8088", letterSpacing: ".1em", textTransform: "uppercase" }}>search</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#2a2a2e", marginTop: 2 }}>cs 31x</div>
        </div>
        <div style={{ ...cellPaper, padding: "8px 10px" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#7d8088", letterSpacing: ".1em", textTransform: "uppercase" }}>term</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#2a2a2e", marginTop: 2 }}>Spring 2026 ▾</div>
        </div>
      </div>

      <div style={{ background: "#fffaf3", border: "1px solid #d9cab4", borderRadius: 10, padding: 10, marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 4 }}>
          <div>
            <span style={{ fontFamily: "var(--font-pencil)", fontSize: 14, fontWeight: 600 }}>COMP_SCI 311</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#7d8088", marginLeft: 8 }}>1 unit</span>
          </div>
          <div style={{ fontSize: 12, color: "#4a4d52" }}>Theory of Computation</div>
        </div>
        <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
          {["Formal Studies", "Comp Lit"].map((p) => (
            <span key={p} style={{
              fontFamily: "var(--font-mono)", fontSize: 9, padding: "2px 6px",
              border: "1px solid #c8c0a4", borderRadius: 999, color: "#4a4d52", letterSpacing: ".04em",
            }}>{p}</span>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {sections.map((s, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "32px 36px 1fr auto auto auto",
              gap: 8, alignItems: "center",
              padding: "6px 8px", background: "#f7f1ea",
              border: "1px solid #e3d6c4", borderRadius: 6,
              fontSize: 11,
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>{s.id}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#7d8088" }}>{s.comp}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#4a4d52" }}>
                <div>{s.time}</div>
                <div style={{ color: "#7d8088" }}>{s.who} · {s.room}</div>
              </div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700,
                padding: "2px 6px", borderRadius: 4,
                color: statusColor(s.status), background: statusBg(s.status),
                letterSpacing: ".06em",
              }}>{s.status}</div>
              <div style={{
                fontFamily: "var(--font-pencil)", fontSize: 10,
                padding: "3px 8px", border: "1px solid #2a2a2e", borderRadius: 4, color: "#2a2a2e",
              }}>Details</div>
              {s.cart === "in-cart" ? (
                <div style={{
                  fontFamily: "var(--font-pencil)", fontSize: 10,
                  padding: "3px 8px", border: "1.5px solid #1c6b3a",
                  background: "#e6f4ec", color: "#1c6b3a", borderRadius: 4,
                }}>✓ In cart</div>
              ) : (
                <div style={{
                  fontFamily: "var(--font-pencil)", fontSize: 10,
                  padding: "3px 8px", background: "#2a2a2e", color: "#f6ecc0", borderRadius: 4,
                }}>Add to cart</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#66023c", letterSpacing: ".08em", textTransform: "uppercase" }}>
        ↳ adds to cart in place — no Search/Select/Next
      </div>
    </div>
  );
}

export function MockSeats() {
  const rows = [
    { c: "COMP_SCI 311",  t: "Theory of Computation",     s: 17, max: 30 },
    { c: "ENGLISH 270-2", t: "American Lit Traditions",   s: 3,  max: 25 },
    { c: "ECON 311-1",    t: "Macroeconomics",            s: 0,  max: 80, full: true },
    { c: "MUSIC 152",     t: "Western Music History",     s: 22, max: 40 },
  ];
  return (
    <div className="mock-frame">
      <div className="mock-bar">
        <div className="mock-dots"><span /><span /><span /></div>
        <div className="mock-url">caesar.ent.northwestern.edu › cart</div>
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#6b5d62", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 8 }}>
        Shopping Cart · Spring 2026
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: "grid", gridTemplateColumns: "auto 1fr auto auto",
          gap: 12, alignItems: "center", padding: "10px 12px",
          background: "#f7f1ea", borderRadius: 8, border: "1px solid #e3d6c4", marginBottom: 6,
        }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#6b5d62" }}>{String(i + 1).padStart(2, "0")}</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 13 }}>{r.c}</div>
            <div style={{ fontSize: 11, color: "#6b5d62" }}>{r.t}</div>
          </div>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
            color: r.full ? "#7c2d12" : r.s < 5 ? "#b45309" : "#064e3b",
          }}>
            {r.full ? "WAITLIST" : `${r.s} / ${r.max}`}
          </div>
          <div style={{ width: 64, height: 6, borderRadius: 3, background: "#e3d6c4", overflow: "hidden" }}>
            <div style={{
              width: `${(r.s / r.max) * 100}%`, height: "100%",
              background: r.full ? "#7c2d12" : r.s < 5 ? "#b45309" : "#064e3b",
            }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, color: "#66023c", letterSpacing: ".12em", textTransform: "uppercase" }}>
        ↳ live seat counts pulled in {"<"} 1s on cart load
      </div>
    </div>
  );
}

export function MockNav() {
  const rows = [{ t: "Spring 2026", on: true }, { t: "Winter 2026", on: false }, { t: "Fall 2025", on: false }];
  return (
    <div className="mock-frame">
      <div className="mock-bar">
        <div className="mock-dots"><span /><span /><span /></div>
        <div className="mock-url">caesar.ent.northwestern.edu › enrollment</div>
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#6b5d62", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 12 }}>
        Term Selection
      </div>
      <div style={{ position: "relative" }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            padding: "12px 16px", marginBottom: 8,
            background: r.on ? "#fdf2f8" : "#f7f1ea",
            border: `1px solid ${r.on ? "#f0d4e2" : "#e3d6c4"}`,
            borderRadius: 8, fontSize: 13,
            fontWeight: r.on ? 600 : 500,
            color: r.on ? "#66023c" : "#4a3f43",
            display: "flex", justifyContent: "space-between",
            opacity: i === 0 ? 1 : 0.5,
          }}>
            <span>{r.t}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>{r.on ? "✓ default" : ""}</span>
          </div>
        ))}
        <div style={{ position: "absolute", inset: "-8px -12px", border: "2px dashed #66023c", borderRadius: 12, pointerEvents: "none", opacity: 0.35 }} />
      </div>
      <div style={{ marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 11, color: "#6b5d62", padding: "10px 12px", background: "#f7f1ea", borderRadius: 8, border: "1px solid #e3d6c4" }}>
        <span style={{ color: "#66023c", fontWeight: 600 }}>skip →</span>{" "}
        jumps you to the search form
      </div>
    </div>
  );
}

// ── Paper.nu mocks ─────────────────────────────────────────────────────────

// Schedule card with the CTEC chip strip overlaid (the most visible
// paper-ctec surface on schedule cards).
export function MockChip() {
  return (
    <div className="mock-frame" style={{ padding: 12 }}>
      <div className="mock-bar">
        <div className="mock-dots"><span /><span /><span /></div>
        <div className="mock-url">paper.nu › schedule</div>
      </div>
      {/* paper.nu schedule card */}
      <div style={{
        background: "#fff", border: "1px solid #ddd6cc", borderRadius: 10,
        padding: 12, boxShadow: "0 4px 16px -10px rgba(0,0,0,.18)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16 }}>
            COMP_SCI 311 <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#7d8088", fontWeight: 400 }}>· 21</span>
          </div>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 9, padding: "2px 6px",
            background: "#fffbe6", border: "1px solid #f5e08a", borderRadius: 4,
            color: "#5c4500", letterSpacing: ".06em",
          }}>LEC</span>
        </div>
        <div style={{ fontSize: 12, color: "#4a4d52", marginTop: 2 }}>Theory of Computation · Riedl</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#6b5d62", marginTop: 4 }}>
          MoWeFr 10:00am–10:50am · TECH L160
        </div>

        {/* CTEC chip strip — five hue-mapped pills + Hours pill */}
        <div style={{ display: "flex", gap: 4, marginTop: 10, flexWrap: "wrap" }}>
          {[
            { l: "Instr", v: "5.4", h: "#1c6b3a" },
            { l: "Crse",  v: "5.1", h: "#1c6b3a" },
            { l: "Lect",  v: "5.3", h: "#1c6b3a" },
            { l: "Stim",  v: "4.8", h: "#a85a14" },
            { l: "Hours", v: "9.2", h: "#66023c" },
          ].map((c, i) => (
            <div key={i} style={{
              fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600,
              padding: "2px 7px", borderRadius: 999,
              background: "#fdf6ec", border: `1px solid ${c.h}33`, color: c.h,
              display: "inline-flex", gap: 4, alignItems: "center",
            }}>
              <span style={{ opacity: 0.7, fontWeight: 500 }}>{c.l}</span>
              <span>{c.v}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 6, fontFamily: "var(--font-hand)", fontSize: 13, color: "#7d8088" }}>
          aggregated · last 5 terms
        </div>
      </div>
      <div style={{ marginTop: 8, fontFamily: "var(--font-mono)", fontSize: 10, color: "#66023c", letterSpacing: ".08em", textTransform: "uppercase" }}>
        ↳ click any chip → opens the full CTEC viewer
      </div>
    </div>
  );
}

// CTEC analytics modal — KPI strip + heatmap + density chart.
export function MockModal() {
  return (
    <div className="mock-frame" style={{ padding: 12 }}>
      <div className="mock-bar">
        <div className="mock-dots"><span /><span /><span /></div>
        <div className="mock-url">paper.nu › CTEC viewer</div>
      </div>

      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        paddingBottom: 8, borderBottom: "1px dashed #d9cab4", marginBottom: 10,
      }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600 }}>COMP_SCI 311</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#7d8088", marginTop: 2 }}>
            12 terms · 487 responses · last 5 yrs
          </div>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {["Overview", "Terms", "Comments"].map((t, i) => (
            <div key={i} style={{
              fontFamily: "var(--font-pencil)", fontSize: 11,
              padding: "4px 8px", borderRadius: 4,
              background: i === 0 ? "#2a2a2e" : "transparent",
              color: i === 0 ? "#f6ecc0" : "#4a4d52",
              border: i === 0 ? "1px solid #2a2a2e" : "1px solid #d9cab4",
            }}>{t}</div>
          ))}
        </div>
      </div>

      {/* KPI strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, marginBottom: 10 }}>
        {[
          { l: "Global",      v: "5.2", c: "#1c6b3a" },
          { l: "Instructor",  v: "5.4", c: "#1c6b3a" },
          { l: "Course",      v: "5.1", c: "#1c6b3a" },
          { l: "Stim",        v: "4.8", c: "#a85a14" },
          { l: "Hours",       v: "9.2", c: "#66023c" },
        ].map((k, i) => (
          <div key={i} style={{
            background: "#f7f1ea", border: "1px solid #e3d6c4", borderRadius: 6,
            padding: "6px 4px", textAlign: "center",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: k.c }}>{k.v}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "#7d8088", letterSpacing: ".08em", textTransform: "uppercase", marginTop: 2 }}>{k.l}</div>
          </div>
        ))}
      </div>

      {/* Heatmap: term × grouped metrics (matches modal/heatmap.ts).
          Groups: Overall (Global), Quality (Instr/Course/Learned),
          Character (Challenge/Interest), Workload (Hours).
          Two shading scales — maroon for ratings, purple for hours. */}
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#7d8088", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>
          term × metric
        </div>
        {/* Group label row */}
        <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 3fr 2fr 1fr", gap: 2, marginBottom: 2 }}>
          <div />
          {[
            { l: "Overall",   bg: "#f1e0c9" },
            { l: "Quality",   bg: "#f1e0c9" },
            { l: "Character", bg: "#f1e0c9" },
            { l: "Workload",  bg: "#e9dff1" },
          ].map((g) => (
            <div key={g.l} style={{
              fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: ".08em", textTransform: "uppercase",
              color: "#4a4d52", textAlign: "center", padding: "2px 0",
              background: g.bg, borderRadius: 2,
            }}>{g.l}</div>
          ))}
        </div>
        {/* Per-metric header + term rows */}
        <div style={{ display: "grid", gridTemplateColumns: "60px repeat(7, 1fr)", gap: 2, fontFamily: "var(--font-mono)", fontSize: 9 }}>
          <div />
          {[
            { l: "Global", hours: false },
            { l: "Instr",  hours: false },
            { l: "Crse",   hours: false },
            { l: "Learn",  hours: false },
            { l: "Chal",   hours: false },
            { l: "Int",    hours: false },
            { l: "Hours",  hours: true },
          ].map((h) => (
            <div key={h.l} style={{ textAlign: "center", color: "#7d8088", paddingBottom: 2 }}>{h.l}</div>
          ))}
          {[
            { term: "F25", row: [5.40, 5.5, 5.4, 5.3, 4.4, 4.9, 9.2], hoursIdx: 6 },
            { term: "S25", row: [5.30, 5.4, 5.3, 5.2, 4.5, 4.8, 9.6], hoursIdx: 6 },
            { term: "W25", row: [5.20, 5.3, 5.1, 5.2, 4.6, 4.7, 9.0], hoursIdx: 6 },
            { term: "F24", row: [5.10, 5.2, 5.0, 5.0, 4.7, 4.6, 8.4], hoursIdx: 6 },
            { term: "S24", row: [4.95, 5.0, 4.9, 5.0, 4.8, 4.5, 8.0], hoursIdx: 6 },
          ].flatMap((r, ri) => [
            <div key={`l${ri}`} style={{ color: "#4a4d52", textAlign: "right", paddingRight: 4 }}>{r.term}</div>,
            ...r.row.map((v, ci) => {
              const isHours = ci === r.hoursIdx;
              // Rating shader: deep maroon → light. Hours shader: deep purple → light.
              const ratingBg = v >= 5.3 ? "#66023c" : v >= 5.1 ? "#8a2654" : v >= 4.9 ? "#b75683" : v >= 4.7 ? "#dba0bc" : "#efd0db";
              const hoursBg  = v >= 9.5 ? "#3b1f5e" : v >= 9.0 ? "#5a3f86" : v >= 8.5 ? "#8770ad" : v >= 8.0 ? "#b6a5cf" : "#dcd3e8";
              const bg = isHours ? hoursBg : ratingBg;
              const textLight = isHours ? v >= 8.5 : v >= 4.9;
              return (
                <div key={`${ri}-${ci}`} style={{
                  height: 18, borderRadius: 2, background: bg,
                  color: textLight ? "#fff" : "#2a2a2e",
                  fontSize: 9, fontWeight: 600,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{isHours ? v.toFixed(1) : v.toFixed(2).replace(/0$/, "")}</div>
              );
            })
          ])}
        </div>
      </div>

      {/* Hours density */}
      <div style={cellPaper}>
        <div style={{ padding: "6px 10px 0", fontFamily: "var(--font-mono)", fontSize: 9, color: "#7d8088", letterSpacing: ".1em", textTransform: "uppercase" }}>
          hours / week density
        </div>
        <svg viewBox="0 0 200 50" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path
            d="M0,48 C20,46 30,40 50,30 C70,20 90,8 110,12 C130,16 150,28 170,38 C180,42 195,46 200,48 Z"
            fill="#e57a90" fillOpacity="0.35" stroke="#e57a90" strokeWidth="1.5"
          />
          <line x1="92" y1="50" x2="92" y2="6" stroke="#66023c" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 10px 6px", fontFamily: "var(--font-mono)", fontSize: 8, color: "#7d8088" }}>
          <span>0h</span>
          <span style={{ color: "#66023c" }}>median 9h</span>
          <span>20+h</span>
        </div>
      </div>
    </div>
  );
}

// Comments tab with sentiment rail (positive / mixed / neutral / critical).
export function MockComments() {
  const comments = [
    { tone: "pos", body: "Riedl is the best lecturer I've had at NU. Be ready to think hard, but lectures are gold.", term: "F25" },
    { tone: "mix", body: "Conceptually beautiful. Workload uneven — some weeks light, others brutal. Pick your study group well.", term: "S25" },
    { tone: "neg", body: "Curve was rough. Wished there were more practice problems before the midterm.", term: "W24" },
  ];
  const toneFg = { pos: "#1c6b3a", mix: "#a85a14", neu: "#4a4d52", neg: "#7c2d12" };
  const toneBg = { pos: "#e6f4ec", mix: "#faecd6", neu: "#eee9df", neg: "#fbe3da" };
  const toneLabel = { pos: "Positive", mix: "Mixed", neu: "Neutral", neg: "Critical" };
  return (
    <div className="mock-frame" style={{ padding: 12 }}>
      <div className="mock-bar">
        <div className="mock-dots"><span /><span /><span /></div>
        <div className="mock-url">paper.nu › CTEC › comments</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 10 }}>
        {/* Rails: Sentiment → Frequent topics (bigrams w/ sentiment bars) → Term */}
        <aside style={{ ...cellPaper, padding: 8 }}>
          {/* Sentiment */}
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#7d8088", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>
            sentiment
          </div>
          {[
            { k: "all", l: "All",       n: 142, on: false, dot: "#2a2a2e" },
            { k: "pos", l: "Positive",  n: 91,  on: true,  dot: toneFg.pos },
            { k: "mix", l: "Mixed",     n: 28,  on: false, dot: toneFg.mix },
            { k: "neu", l: "Neutral",   n: 12,  on: false, dot: toneFg.neu },
            { k: "neg", l: "Critical",  n: 11,  on: false, dot: toneFg.neg },
          ].map((r) => (
            <div key={r.k} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "4px 8px", marginBottom: 2, borderRadius: 4,
              background: r.on ? "#fff" : "transparent",
              border: r.on ? "1px solid #2a2a2e" : "1px solid transparent",
              fontFamily: "var(--font-mono)", fontSize: 10,
              color: r.on ? "#2a2a2e" : "#4a4d52",
              fontWeight: r.on ? 700 : 500,
            }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: 99, background: r.dot }} />
                {r.l}
              </span>
              <span style={{ color: "#7d8088", fontWeight: 500 }}>{r.n}</span>
            </div>
          ))}

          {/* Frequent topics — bigrams with stacked sentiment bars */}
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#7d8088", letterSpacing: ".1em", textTransform: "uppercase", margin: "10px 0 6px" }}>
            frequent topics
          </div>
          {[
            { l: "problem sets", n: 38, on: false, s: { pos: 22, mix: 8,  neu: 4, neg: 4 } },
            { l: "office hours", n: 27, on: true,  s: { pos: 23, mix: 2,  neu: 1, neg: 1 } },
            { l: "the midterm",  n: 21, on: false, s: { pos: 6,  mix: 7,  neu: 3, neg: 5 } },
            { l: "lecture pace", n: 18, on: false, s: { pos: 11, mix: 4,  neu: 2, neg: 1 } },
            { l: "study group",  n: 14, on: false, s: { pos: 12, mix: 1,  neu: 1, neg: 0 } },
          ].map((t) => {
            const total = t.s.pos + t.s.mix + t.s.neu + t.s.neg;
            return (
              <div key={t.l} style={{
                padding: "4px 8px", marginBottom: 2, borderRadius: 4,
                background: t.on ? "#fff" : "transparent",
                border: t.on ? "1px solid #2a2a2e" : "1px solid transparent",
              }}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  color: t.on ? "#2a2a2e" : "#4a4d52",
                  fontWeight: t.on ? 700 : 500,
                  marginBottom: 3,
                }}>
                  <span>{t.l}</span>
                  <span style={{ color: "#7d8088", fontWeight: 500 }}>{t.n}</span>
                </div>
                {/* Stacked sentiment bar — pos / mix / neu / neg */}
                <div style={{ display: "flex", height: 4, borderRadius: 2, overflow: "hidden", background: "#eee9df" }}>
                  {(["pos","mix","neu","neg"]).map((tone) => (
                    <div key={tone} style={{
                      flexGrow: t.s[tone],
                      background: toneFg[tone],
                    }} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Term filter */}
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#7d8088", letterSpacing: ".1em", textTransform: "uppercase", margin: "10px 0 6px" }}>
            term
          </div>
          {[
            { l: "All terms", n: 142, on: true },
            { l: "F25",       n: 32,  on: false },
            { l: "S25",       n: 28,  on: false },
            { l: "W25",       n: 26,  on: false },
            { l: "F24",       n: 31,  on: false },
            { l: "S24",       n: 25,  on: false },
          ].map((r) => (
            <div key={r.l} style={{
              display: "flex", justifyContent: "space-between",
              padding: "3px 8px", marginBottom: 1, borderRadius: 4,
              background: r.on ? "#fff" : "transparent",
              border: r.on ? "1px solid #2a2a2e" : "1px solid transparent",
              fontFamily: "var(--font-mono)", fontSize: 10,
              color: r.on ? "#2a2a2e" : "#4a4d52",
              fontWeight: r.on ? 700 : 500,
            }}>
              <span>{r.l}</span>
              <span style={{ color: "#7d8088", fontWeight: 500 }}>{r.n}</span>
            </div>
          ))}
        </aside>

        {/* Main panel */}
        <div>
          <div style={{ display: "flex", gap: 4, marginBottom: 8, alignItems: "center" }}>
            <div style={{
              flex: 1, ...cellPaper, padding: "5px 8px",
              fontFamily: "var(--font-mono)", fontSize: 10, color: "#7d8088",
            }}>search comments…</div>
            <div style={{
              ...cellPaper, padding: "5px 8px",
              fontFamily: "var(--font-mono)", fontSize: 10,
            }}>newest ▾</div>
          </div>

          {comments.map((c, i) => (
            <div key={i} style={{
              background: "#fffaf3", border: "1px solid #e3d6c4", borderRadius: 8,
              padding: "8px 10px", marginBottom: 6,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700,
                  padding: "2px 6px", borderRadius: 3,
                  background: toneBg[c.tone], color: toneFg[c.tone],
                  letterSpacing: ".06em",
                }}>{toneLabel[c.tone]}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#7d8088" }}>{c.term}</span>
              </div>
              <div style={{ fontSize: 11.5, color: "#2a2a2e", lineHeight: 1.45, fontStyle: "italic" }}>
                “{c.body}”
              </div>
            </div>
          ))}

          <div style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 9, color: "#66023c", letterSpacing: ".06em" }}>
            ↳ classified locally · cross-filterable with topics + term
          </div>
        </div>
      </div>
    </div>
  );
}

// Trend chart — instructor rating over loaded terms.
export function MockTrend() {
  const points = [
    { t: "F22", v: 5.1 }, { t: "W23", v: 5.0 }, { t: "S23", v: 5.2 },
    { t: "F23", v: 5.4 }, { t: "W24", v: 5.5 }, { t: "S24", v: 5.3 },
    { t: "F24", v: 5.4 }, { t: "W25", v: 5.6 }, { t: "S25", v: 5.4 },
  ];
  const w = 280, h = 90, padL = 24, padR = 8, padT = 12, padB = 22;
  const xs = points.map((_, i) => padL + (i * (w - padL - padR)) / (points.length - 1));
  const ys = points.map((p) => padT + (1 - (p.v - 4) / 2) * (h - padT - padB));
  const path = points.map((_, i) => `${i === 0 ? "M" : "L"}${xs[i]},${ys[i]}`).join(" ");
  const areaPath = `${path} L${xs[xs.length - 1]},${h - padB} L${xs[0]},${h - padB} Z`;
  return (
    <div className="mock-frame" style={{ padding: 12 }}>
      <div className="mock-bar">
        <div className="mock-dots"><span /><span /><span /></div>
        <div className="mock-url">paper.nu › CTEC › trend</div>
      </div>
      <div style={{ fontFamily: "var(--font-pencil)", fontSize: 14, marginBottom: 2 }}>
        Instructor rating · 9 terms
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#7d8088", letterSpacing: ".06em", marginBottom: 8 }}>
        weighted by responses · zones shaded
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", display: "block" }}>
        {/* zones: 5+ green, 4–5 amber, <4 red */}
        <rect x="0" y={padT} width={w} height={(1 - (5 - 4) / 2) * (h - padT - padB) - padT + padT} fill="#c4644a" fillOpacity="0.06" />
        <rect x="0" y={padT + (1 - (5 - 4) / 2) * (h - padT - padB)} width={w} height={(h - padB) - (padT + (1 - (5 - 4) / 2) * (h - padT - padB))} fill="#e9a878" fillOpacity="0.0" />
        <rect x="0" y={padT} width={w} height={(1 - (5 - 4) / 2) * (h - padT - padB)} fill="#1c6b3a" fillOpacity="0.08" />
        {/* baseline */}
        <line x1={padL} y1={h - padB} x2={w - padR} y2={h - padB} stroke="#c8c0a4" strokeWidth="1" />
        {/* grid 5.0 line */}
        <line x1={padL} y1={padT + (1 - (5 - 4) / 2) * (h - padT - padB)} x2={w - padR} y2={padT + (1 - (5 - 4) / 2) * (h - padT - padB)} stroke="#c8c0a4" strokeWidth="0.6" strokeDasharray="3 3" />
        <text x={4} y={padT + (1 - (5 - 4) / 2) * (h - padT - padB) + 3} fontFamily="ui-monospace" fontSize="8" fill="#7d8088">5.0</text>
        {/* area + line */}
        <path d={areaPath} fill="#1c6b3a" fillOpacity="0.12" />
        <path d={path} stroke="#1c6b3a" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* points */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={xs[i]} cy={ys[i]} r="2.4" fill="#1c6b3a" />
            <text x={xs[i]} y={h - 6} fontFamily="ui-monospace" fontSize="7.5" fill="#7d8088" textAnchor="middle">{p.t}</text>
          </g>
        ))}
      </svg>
      <div style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 9, color: "#66023c", letterSpacing: ".06em" }}>
        ↳ also: course rating, hours
      </div>
    </div>
  );
}

// Backwards-compat: legacy pre-paper-section CTEC mock.
export function MockCtec() { return <MockModal />; }
