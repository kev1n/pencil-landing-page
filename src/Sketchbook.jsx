import { useState } from "react";
import { useNow, diffParts, fmt, formatDate } from "./utils.js";
import {
  MockSeats,
  MockNav,
  MockSearch,
  MockChip,
  MockModal,
  MockComments,
  MockTrend,
  PaperLogo,
} from "./Mocks.jsx";

function Countdown({ iso, live }) {
  const now = useNow();
  const target = new Date(iso).getTime();
  const { days, hours, mins, secs, done } = diffParts(target, now);
  if (live || done) {
    return <div className="sb-cd live"><div className="cell wide"><div className="n">live ✓</div><div className="l">unlocked</div></div></div>;
  }
  return (
    <div className="sb-cd">
      <div className="cell"><div className="n">{fmt(days)}</div><div className="l">days</div></div>
      <div className="cell"><div className="n">{fmt(hours)}</div><div className="l">hrs</div></div>
      <div className="cell"><div className="n">{fmt(mins)}</div><div className="l">min</div></div>
      <div className="cell"><div className="n">{fmt(secs)}</div><div className="l">sec</div></div>
    </div>
  );
}

function PencilLogo() {
  return (
    <svg width="14" height="42" viewBox="14 0 14 42" fill="none" aria-hidden="true">
      <g transform="rotate(90 21 21)" stroke="#2a2a2e" strokeWidth="1.2" strokeLinejoin="round">
        <rect x="2" y="16" width="6" height="10" rx="1.6" fill="#ef8da6" />
        <rect x="8" y="16" width="5" height="10" fill="#c2c7cb" />
        <line x1="9.7" y1="16.4" x2="9.7" y2="25.6" stroke="#7d848a" strokeWidth="0.55" />
        <line x1="11.3" y1="16.4" x2="11.3" y2="25.6" stroke="#7d848a" strokeWidth="0.55" />
        <rect x="13" y="16" width="17" height="10" fill="#f5c842" />
        <polygon points="30,16 35,16 35,26 30,26" fill="#d4a373" />
        <polygon points="35,16 40,21 35,26" fill="#2a2a2e" stroke="none" />
        <polygon points="35,16 40,21 35,26" fill="none" stroke="#2a2a2e" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

export default function Sketchbook({ tweaks }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  // Inline navigation list — section anchors + GitHub. Feedback and the
  // Chrome install live as dedicated buttons so they read as actions, not
  // navigation. The desktop topnav prepends `feedback` for parity, but
  // the mobile drawer renders the buttons in their own CTA row below.
  const sectionLinks = [
    { href: "#sched",  label: "schedule" },
    { href: "#caesar", label: "caesar" },
    { href: "#paper",  label: "paper.nu" },
    { href: "#safe",   label: "safety" },
    { href: tweaks.githubUrl, label: "github" },
  ];
  const desktopNavLinks = [
    ...sectionLinks.slice(0, 4),
    { href: tweaks.feedbackUrl, label: "feedback", external: true },
    sectionLinks[4],
  ];
  return (
    <>
      <header className={"topbar-sticky" + (menuOpen ? " menu-open" : "")}>
        <div className="topbar wrap">
          <a className="brand" href="#top" onClick={closeMenu}><PencilLogo /> pencil.nu</a>
          <nav className="topnav">
            {desktopNavLinks.map((l) => (
              <a key={l.href} href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="top-cta" href={tweaks.chromeUrl}>add to chrome →</a>
          <button
            type="button"
            className="hamburger"
            aria-label={menuOpen ? "close menu" : "open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
        <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
          {sectionLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={closeMenu}>
              {l.label}
            </a>
          ))}
          <div className="mobile-cta-row">
            <a
              className="mobile-cta-ghost"
              href={tweaks.feedbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              leave feedback ↗
            </a>
            <a
              className="mobile-cta"
              href={tweaks.chromeUrl}
              onClick={closeMenu}
            >
              add to chrome →
            </a>
          </div>
        </div>
      </header>

      <section className="hero wrap">
        <div className="tag">— a small project for shopping week —</div>
        <h1>
          paper.nu and CAESAR,{" "}
          <span className="circle">sharpened</span>
          <br />by a <span className="underline">small extension</span>.
        </h1>
        <p className="lede">
          A <mark>sharper class search</mark> built straight into CAESAR — type{" "}
          <code>cs 31x</code> and add sections to your cart in place. Plus a{" "}
          <mark>full CTEC viewer inlined into paper.nu</mark> — ratings, trends,
          heatmaps, and student comments classified by sentiment. One install.
          No new dashboard.
        </p>
        <div className="hero-ctas">
          <a className="btn-pencil" href={tweaks.chromeUrl}>Add to Chrome</a>
          <a className="btn-ghost-pencil" href="#sched">when does mine unlock?</a>
          <span className="scribble-arrow">↙ unlock by grad year</span>
        </div>

        <div className="pillars-margin">
          <div className="pillar">
            <div className="pnum">1.</div>
            <h4>Sharper class search</h4>
            <p>Replaces CAESAR's class search with a paper.nu-powered one. Whitespace-tokenized, digit wildcards, Add-to-cart in place.</p>
          </div>
          <div className="pillar">
            <div className="pnum">2.</div>
            <h4>Full CTEC viewer</h4>
            <p>Ratings, trends, heatmaps, hours density, and sentiment-tagged comments — inlined into paper.nu's class drawer.</p>
          </div>
          <div className="pillar">
            <div className="pnum">3.</div>
            <h4>Permission-aware</h4>
            <p>Only fetches CTECs you can already see. Goes through Northwestern's own SSO every time.</p>
          </div>
          <div className="pillar">
            <div className="pnum">4.</div>
            <h4>No external servers</h4>
            <p>Talks to NU and nowhere else. Cached on your laptop, in your browser.</p>
          </div>
        </div>
      </section>

      {/* ── Rollout schedule ───────────────────────────────────────────── */}
      <section id="sched">
        <div className="wrap">
          <div className="sec-mark">~ rollout ~</div>
          <h2 className="sec-title">When does <i>your</i> grad year unlock?</h2>
          <p className="sec-blurb">
            We release in waves so we don't drop a thousand students on Northwestern's
            servers all at once. Each card has a live countdown. We figure out
            your wave from your CAESAR grad year after you sign in.
          </p>

          <div className="sb-rollout">
            {tweaks.schedule.map((b, i) => {
              const d = formatDate(b.iso);
              const status = b.live ? "live" : i === 1 ? "next" : "queued";
              const label = b.live ? "live ✓" : i === 1 ? "next up" : "queued";
              return (
                <div className="sb-card" key={i}>
                  <div className="sb-bucket-h">
                    <div className="sb-bucket">{b.label}</div>
                    <div className={"sb-stamp " + status}>{label}</div>
                  </div>
                  <div className="sb-name">{b.name}</div>
                  <div className="sb-date">
                    {b.live ? "available now" : `${d.short} · ${d.time}`}
                  </div>
                  <Countdown iso={b.iso} live={b.live} />
                </div>
              );
            })}
          </div>

          <div className="sb-rollout-foot">
            <span className="hand">↑</span> seniors and grad already in · 2028 wakes Saturday morning ·
            everyone else (incl. global release) Monday morning, all Chicago time.
          </div>
        </div>
      </section>

      {/* ── On CAESAR ──────────────────────────────────────────────────── */}
      <section id="caesar">
        <div className="wrap">
          <div className="sec-mark">— on CAESAR —</div>
          <h2 className="sec-title">Three small <i>fixes</i> in CAESAR.</h2>
          <p className="sec-blurb">
            CAESAR isn't going anywhere. We layer on top of it — same forms, same SSO,
            same shopping cart, just with the friction sanded down.
          </p>

          <div className="sb-features">
            <div className="sb-feat">
              <div className="copy">
                <div className="feat-num">1.</div>
                <h3>A <span className="marker">sharper</span> class search.</h3>
                <p>
                  Replaces the native CAESAR search with a paper.nu-powered one,
                  toggleable from a tab at the top. Type the way you'd talk —{" "}
                  <code>cs 311</code>, <code>stat 21x</code>, <code>machine learning</code> —
                  and Add a section to your cart without ever leaving the page.
                </p>
                <ul className="bullets">
                  <li>Subject shortcuts: <code>cs</code> → COMP_SCI, <code>bme</code> → BMD_ENG</li>
                  <li>Digit wildcards: <code>31x</code> matches 311, 314, 319…</li>
                  <li>Live status pills (open / waitlist / closed)</li>
                  <li>Add-to-cart in place — runs Search → Select → Next in the background</li>
                  <li>Persistent "✓ In cart" / "Enrolled" badges so you don't double-add</li>
                </ul>
              </div>
              <div><MockSearch /></div>
            </div>

            <div className="sb-feat flip">
              <div className="copy">
                <div className="feat-num">2.</div>
                <h3>Cart pages with <span className="marker">real seats.</span></h3>
                <p>CAESAR tells you almost nothing about what's already in your cart. We fix that — with notes, requirements, attributes, and live seat counts.</p>
                <ul className="bullets">
                  <li>Live counts in under a second</li>
                  <li>Color-coded urgency</li>
                  <li>Updates after every CAESAR action</li>
                </ul>
              </div>
              <div><MockSeats /></div>
            </div>

            <div className="sb-feat">
              <div className="copy">
                <div className="feat-num">3.</div>
                <h3>Skip the <span className="marker">term picker.</span></h3>
                <p>Same three clicks every time. We remember and skip — for every PeopleSoft sub-page.</p>
                <ul className="bullets">
                  <li>Default term per device</li>
                  <li>One keystroke to switch</li>
                  <li>Smoother redirects between enrollment screens</li>
                </ul>
              </div>
              <div><MockNav /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── On Paper.nu ────────────────────────────────────────────────── */}
      <section id="paper" className="paper-section">
        <div className="wrap">
          <div className="paper-header">
            <div className="paper-mark">
              <PaperLogo size={48} />
              <div className="paper-mark-stack">
                <div className="sec-mark paper-mark-line">— on paper.nu —</div>
                <div className="paper-mark-sub">
                  <a href={tweaks.paperUrl} target="_blank" rel="noopener noreferrer">paper.nu ↗</a> · the schedule planner you already use
                </div>
              </div>
            </div>
            <h2 className="sec-title">A full <i>CTEC viewer,</i> built into the page.</h2>
            <p className="sec-blurb">
              Paper.nu is great for sketching out a quarter. We graft Northwestern's
              entire CTEC archive onto its class drawer — so you never tab away to
              decide if you actually want to take the class you just dragged in.
            </p>
          </div>

          <div className="sb-features">
            <div className="sb-feat">
              <div className="copy">
                <div className="feat-num">A.</div>
                <h3>CTEC chips on every <span className="marker">schedule card.</span></h3>
                <p>
                  A compact pill strip shows aggregated ratings the moment a
                  course lands on your schedule. Hue-mapped by score. One click
                  expands the full viewer.
                </p>
                <ul className="bullets">
                  <li>Instructor · Course · Lecture · Stimulating · Hours</li>
                  <li>Response-weighted means across your most recent N terms</li>
                  <li>Three display modes: numeric /6, percent, or stars</li>
                  <li>Dense-card layout for tight Sunday-night schedules</li>
                </ul>
              </div>
              <div><MockChip /></div>
            </div>

            <div className="sb-feat flip">
              <div className="copy">
                <div className="feat-num">B.</div>
                <h3>The full <span className="marker">CTEC viewer.</span></h3>
                <p>
                  Click any chip to open the analytics modal: KPI strip, a
                  term × metric heatmap grouped Overall / Quality / Character /
                  Workload, and an hours-per-week density curve reconstructed
                  from Bluera's distribution images.
                </p>
                <ul className="bullets">
                  <li>Heatmap rows are terms; columns grouped by metric family — two shading scales (rating + hours)</li>
                  <li>Hours density shows the median and the long tail</li>
                  <li>Distribution counts pulled from Bluera PNGs via local pixel-scan — no server</li>
                </ul>
              </div>
              <div><MockModal /></div>
            </div>

            <div className="sb-feat">
              <div className="copy">
                <div className="feat-num">C.</div>
                <h3>Comments, tagged by <span className="marker">sentiment.</span></h3>
                <p>
                  Every CTEC comment is classified locally as positive, mixed,
                  neutral, or critical. Three rails — Sentiment, Frequent
                  topics (extracted bigrams), and Term — cross-filter each
                  other so you can find the comment you actually want to read.
                </p>
                <ul className="bullets">
                  <li>Sentiment rail: All / Positive / Mixed / Neutral / Critical</li>
                  <li>Frequent topics: bigrams like "problem sets" or "office hours" with mini sentiment bars</li>
                  <li>Term rail: filter to a specific quarter, counts respect the other rails</li>
                  <li>Search inside comments, sort by newest or by tone</li>
                  <li>Cached per-course so reopening costs zero requests</li>
                </ul>
              </div>
              <div><MockComments /></div>
            </div>

            <div className="sb-feat flip">
              <div className="copy">
                <div className="feat-num">D.</div>
                <h3>Trends across <span className="marker">every term.</span></h3>
                <p>
                  A per-metric line chart shows how a course or instructor has
                  drifted over the years — with shaded zones so a 4.9 reads as
                  "fine" and a 5.4 reads as "rare air."
                </p>
                <ul className="bullets">
                  <li>One trend per metric: instructor, course, hours, stimulating</li>
                  <li>Response-count weighting so a tiny term doesn't yank the line</li>
                  <li>Resize-aware SVGs that fit the modal at any width</li>
                </ul>
              </div>
              <div><MockTrend /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety ─────────────────────────────────────────────────────── */}
      <section id="safe">
        <div className="wrap">
          <div className="sec-mark">— a note for NU IT —</div>
          <h2 className="sec-title">We're trying really hard not to be a problem.</h2>
          <p className="sec-blurb">
            Every student-built extension fails the same way — a thundering herd during
            shopping week. Here's exactly how we engineered against that, with the numbers
            from our source.
          </p>

          <div className="sb-safety">
            <div className="sb-safety-card big">
              <div className="ssc-h">★ the big one</div>
              <h4>Only fetches CTECs for students who can already see them.</h4>
              <p>Every request flows through Northwestern's federated SSO and NetID.
                If you can't see it in the official portal, pencil can't fetch it either.
                We never proxy, never cache cross-user, never bypass access checks.</p>
              <div className="ssc-num">SSO<small>Northwestern federated auth</small></div>
            </div>
            <div className="sb-safety-card med">
              <div className="ssc-h">rate limit</div>
              <h4>20 CTEC loads / hour. Batches of 3.</h4>
              <p>Self-throttles against a rolling 60-min window before it could ever pile up.</p>
              <div className="ssc-num">20<small>per browser, per hour</small></div>
            </div>
            <div className="sb-safety-card med">
              <div className="ssc-h">local caching</div>
              <h4>Loaded once, cached on the user's laptop.</h4>
              <p>Stored in chrome.storage.local. Re-opening the same class costs zero requests.</p>
              <div className="ssc-num">0 req<small>on cache hit</small></div>
            </div>
            <div className="sb-safety-card sm">
              <div className="ssc-h">staggered</div>
              <h4>Waves by grad year.</h4>
              <p>Seniors first, juniors Saturday, everyone else Monday. We pause if anything looks off.</p>
              <div className="ssc-num">3<small>release waves</small></div>
            </div>
            <div className="sb-safety-card sm">
              <div className="ssc-h">no servers</div>
              <h4>NU and nowhere else.</h4>
              <p>No telemetry, no SDKs, no analytics.</p>
              <div className="ssc-num">0<small>servers of ours</small></div>
            </div>
            <div className="sb-safety-card sm">
              <div className="ssc-h">open source</div>
              <h4>Read it. Audit it. Fork it.</h4>
              <p>MIT licensed. Issues open at the GitHub link.</p>
              <div className="ssc-num">MIT<small>fully open</small></div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="b">pencil.nu</div>
              <p>an unofficial open-source extension. drawn by NU students. not affiliated with the university. not affiliated with paper.nu either — we just love it.</p>
            </div>
            <div className="foot-col"><h5>get it</h5><ul>
              <li><a href={tweaks.chromeUrl}>chrome web store</a></li>
              <li><a href={tweaks.githubUrl}>github</a></li>
              <li><a href={tweaks.feedbackUrl} target="_blank" rel="noopener noreferrer">leave feedback ↗</a></li>
            </ul></div>
            <div className="foot-col"><h5>trust</h5><ul>
              <li><a href="#safe">safety mechanisms</a></li>
              <li><a href={tweaks.githubUrl + "/issues"}>report an issue</a></li>
              <li><a href={tweaks.paperUrl} target="_blank" rel="noopener noreferrer">paper.nu ↗</a></li>
            </ul></div>
            <div className="foot-col"><h5>built by</h5><ul>
              {tweaks.creators.map((c) => (
                <li key={c.email}>
                  <span style={{ display: "block" }}>{c.name}</span>
                  <a href={`mailto:${c.email}`} style={{ fontSize: 12, color: "var(--ink-3)" }}>
                    {c.email}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: 6, fontFamily: "var(--font-hand)", fontSize: 16, color: "var(--ink-2)" }}>
                say hi about anything ↗
              </li>
            </ul></div>
          </div>
          <div className="foot-meta">
            <span>~ © 2026 pencil.nu · MIT ~</span>
            <span>made in Evanston</span>
          </div>
        </div>
      </footer>
    </>
  );
}
