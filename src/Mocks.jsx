export function MockSeats() {
  const rows = [
    { c: "COMP_SCI 396", t: "Theory of Computation", s: 17, max: 30 },
    { c: "ENGLISH 270-2", t: "American Lit Traditions", s: 3, max: 25 },
    { c: "ECON 311-1", t: "Macroeconomics", s: 0, max: 80, full: true },
    { c: "MUSIC 152", t: "Western Music History", s: 22, max: 40 },
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
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#6b5d62" }}>
            {String(i + 1).padStart(2, "0")}
          </div>
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
        ↳ Live seat counts pulled in {"<"} 1s on cart load
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
        <div className="mock-url">caesar.ent.northwestern.edu › class search</div>
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

export function MockCtec() {
  return (
    <div className="mock-frame">
      <div className="mock-bar">
        <div className="mock-dots"><span /><span /><span /></div>
        <div className="mock-url">paper.nu › COMP_SCI 396</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600 }}>COMP_SCI 396</div>
          <div style={{ fontSize: 12, color: "#6b5d62" }}>Theory of Computation · Riedl</div>
        </div>
        <div style={{ background: "#66023c", color: "#fff", fontFamily: "var(--font-mono)", fontSize: 10, padding: "4px 8px", borderRadius: 4, letterSpacing: ".1em" }}>CTEC LOADED</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 10 }}>
        {[
          { l: "Instruction", v: "5.4" }, { l: "Course", v: "5.1" },
          { l: "Hours/wk", v: "9.2" }, { l: "Responses", v: "42" },
        ].map((s, i) => (
          <div key={i} style={{ background: "#f7f1ea", border: "1px solid #e3d6c4", borderRadius: 8, padding: "10px 8px", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "#66023c" }}>{s.v}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: ".1em", textTransform: "uppercase", color: "#6b5d62", marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: "10px 12px", background: "#fdf2f8", border: "1px solid #f0d4e2", borderRadius: 8, fontSize: 12, color: "#66023c", fontStyle: "italic", lineHeight: 1.45 }}>
        “Riedl is the best lecturer I've had at NU. Be ready to think hard…”
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, marginTop: 6, color: "#6b5d62", letterSpacing: ".1em", fontStyle: "normal" }}>
          ↳ comments + histograms inlined into paper.nu
        </div>
      </div>
    </div>
  );
}
