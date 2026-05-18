import { useState } from "react";
import { usePostHog } from "@posthog/react";
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

// Small hand-drawn-ish glyphs sitting next to each hero pillar number.
// Stroke-only line drawings tilted a few degrees so they look sketched
// in pencil rather than dropped in from an icon set.
const pillarIcons = {
  // 1. Sharper class search — magnifying glass with a pencil tip
  search: (
    <svg viewBox="0 0 36 36" width="32" height="32" aria-hidden="true">
      <g fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="15" cy="15" r="9" />
        <line x1="22" y1="22" x2="30" y2="30" />
        <line x1="11" y1="15" x2="19" y2="15" stroke="var(--accent)" strokeWidth="1.4" />
        <line x1="15" y1="11" x2="15" y2="19" stroke="var(--accent)" strokeWidth="1.4" />
      </g>
    </svg>
  ),
  // 2. More powerful CTEC viewer — bar chart with a baseline tick
  bars: (
    <svg viewBox="0 0 36 36" width="32" height="32" aria-hidden="true">
      <g fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="29" x2="31" y2="29" />
        <rect x="7" y="20" width="5" height="9" fill="var(--pencil-yellow-soft)" />
        <rect x="15" y="14" width="5" height="15" fill="var(--accent)" fillOpacity="0.4" />
        <rect x="23" y="9"  width="5" height="20" fill="none" />
        <path d="M9 19 L17 13 L25 8" stroke="var(--accent)" strokeWidth="1.4" />
        <circle cx="9" cy="19" r="1.4" fill="var(--accent)" stroke="none" />
        <circle cx="17" cy="13" r="1.4" fill="var(--accent)" stroke="none" />
        <circle cx="25" cy="8"  r="1.4" fill="var(--accent)" stroke="none" />
      </g>
    </svg>
  ),
  // 3. Respects fill-to-view — checked box with a pencil-mark check
  check: (
    <svg viewBox="0 0 36 36" width="32" height="32" aria-hidden="true">
      <g fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="7" width="22" height="22" rx="3" />
        <path d="M12 19 L16 23 L25 12" stroke="var(--accent)" strokeWidth="2" />
      </g>
    </svg>
  ),
  // 4. Your session, not our keys — shield with a tick
  shield: (
    <svg viewBox="0 0 36 36" width="32" height="32" aria-hidden="true">
      <g fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M18 5 L29 9 V18 C29 24 24 29 18 31 C12 29 7 24 7 18 V9 Z"
          fill="var(--pencil-yellow-soft)"
          fillOpacity="0.6"
        />
        <path d="M13 18 L16.5 21.5 L23 14" stroke="var(--accent)" strokeWidth="2" />
      </g>
    </svg>
  ),
};

function DiscordIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
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
  const posthog = usePostHog();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  // Inline navigation list — section anchors + GitHub. Feedback and the
  // Chrome install live as dedicated buttons so they read as actions, not
  // navigation. The desktop topnav prepends `feedback` for parity, but
  // the mobile drawer renders the buttons in their own CTA row below.
  const sectionLinks = [
    { href: "#sched",  label: "schedule" },
    { href: "#paper",  label: "paper.nu" },
    { href: "#caesar", label: "caesar" },
    { href: "#safe",   label: "safety" },
    { href: tweaks.githubUrl, label: "github" },
    { href: tweaks.discordUrl, label: "discord" },
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
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => {
                  if (l.label === "feedback") posthog?.capture("feedback_clicked", { location: "top_nav" });
                  if (l.label === "github") posthog?.capture("github_clicked", { location: "top_nav" });
                }}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="top-actions">
            <a
              className="top-discord"
              href={tweaks.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="join our discord"
              title="join our discord"
              onClick={() => posthog?.capture("discord_clicked", { location: "top_nav" })}
            >
              <DiscordIcon />
            </a>
            <a className="top-cta" href={tweaks.installUrl} target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture("chrome_install_clicked", { location: "top_nav", browser: tweaks.browser })}>{tweaks.installLabelLower} →</a>
          </div>
          {/* Compact CTAs that stay visible alongside the hamburger on
              mobile — feedback (ghost) and add-to-chrome (filled). The
              full-size .top-cta above is hidden in the mobile media query. */}
          <a
            className="top-cta-mobile-ghost"
            href={tweaks.feedbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="leave feedback"
            onClick={() => posthog?.capture("feedback_clicked", { location: "top_nav_mobile" })}
          >
            feedback
          </a>
          <a className="top-cta-mobile" href={tweaks.installUrl} target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture("chrome_install_clicked", { location: "top_nav_mobile", browser: tweaks.browser })}>
            {tweaks.installLabelShort}
          </a>
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
              onClick={() => { posthog?.capture("feedback_clicked", { location: "mobile_menu" }); closeMenu(); }}
            >
              leave feedback ↗
            </a>
            <a
              className="mobile-cta"
              href={tweaks.installUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { posthog?.capture("chrome_install_clicked", { location: "mobile_menu", browser: tweaks.browser }); closeMenu(); }}
            >
              {tweaks.installLabelLower} →
            </a>
          </div>
        </div>
      </header>

      <section className="hero wrap">
        <div className="tag">— free, open-source · a small project for shopping week —</div>
        <h1>
          paper.nu and CAESAR,{" "}
          <span className="circle">sharpened</span>
          <br />by a <span className="underline">small extension</span>.
        </h1>
        <p className="lede">
          A <mark>sharper class search</mark> built straight into CAESAR — type{" "}
          <code>cs 31x</code> and add sections to your cart in place. Plus a{" "}
          <mark>more powerful CTEC viewer inlined into paper.nu</mark> — ratings, trends,
          heatmaps, and student comments classified by sentiment. One install.
          No new dashboard.
        </p>
        <div className="hero-ctas">
          <a className="btn-pencil" href={tweaks.installUrl} target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture("chrome_install_clicked", { location: "hero", browser: tweaks.browser })}>
            {tweaks.installLabelTitle}
            <span className="btn-pencil-free">free!</span>
          </a>
        </div>

        <div className="pillars-margin">
          <div className="pillar">
            <div className="pnum-row">
              <div className="pnum">1.</div>
              <div className="pillar-icon">{pillarIcons.search}</div>
            </div>
            <h4>Sharper class search</h4>
            <p>Replaces CAESAR's class search with a paper.nu-powered one. Whitespace-tokenized, digit wildcards, Add-to-cart in place.</p>
          </div>
          <div className="pillar">
            <div className="pnum-row">
              <div className="pnum">2.</div>
              <div className="pillar-icon">{pillarIcons.bars}</div>
            </div>
            <h4>More powerful CTEC viewer</h4>
            <p>Ratings, trends, heatmaps, hours density, and sentiment-tagged comments — inlined into paper.nu's class drawer.</p>
          </div>
          <div className="pillar">
            <div className="pnum-row">
              <div className="pnum">3.</div>
              <div className="pillar-icon">{pillarIcons.check}</div>
            </div>
            <h4>Respects "fill to view"</h4>
            <p>NU only shows CTECs to students who've filled their own out. We respect that — if you can't see a CTEC in the portal, we can't either.</p>
          </div>
          <div className="pillar">
            <div className="pnum-row">
              <div className="pnum">4.</div>
              <div className="pillar-icon">{pillarIcons.shield}</div>
            </div>
            <h4>Your session, not our keys</h4>
            <p>Uses the CAESAR session already in your browser. We never see your NetID, password, or any credentials.</p>
          </div>
        </div>
      </section>

      {/* ── Generally available ────────────────────────────────────────── */}
      <section id="sched">
        <div className="wrap">
          <div className="sec-mark">~ availability ~</div>
          <h2 className="sec-title">Pencil is <i>available to everyone!</i></h2>
          <p className="sec-blurb">
            Install the extension, sign into CAESAR, and you're in.
          </p>
        </div>
      </section>

      {/* ── On CAESAR ──────────────────────────────────────────────────── */}
      {/* On Paper.nu (now lead — the headline product is the CTEC viewer). */}
      <section id="paper" className="paper-section">
        <div className="wrap">
          <div className="paper-header">
            <div className="paper-mark">
              <PaperLogo size={48} />
              <div className="paper-mark-stack">
                <div className="sec-mark paper-mark-line">— on paper.nu —</div>
                <div className="paper-mark-sub">
                  <a href={tweaks.paperUrl} target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture("paper_nu_link_clicked", { location: "paper_section" })}>paper.nu ↗</a> · the schedule planner you already use
                </div>
              </div>
            </div>
            <h2 className="sec-title">A more powerful <i>CTEC viewer,</i> built into the page.</h2>
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

      {/* On CAESAR (was the lead; now follows the paper.nu story). */}
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

      {/* ── Safety ─────────────────────────────────────────────────────── */}
      <section id="safe">
        <div className="wrap">
          <div className="sec-mark">— a note for NU IT —</div>
          <h2 className="sec-title">We are doing everything we can to not be a problem.</h2>
          <p className="sec-blurb">
            Every student-built extension fails the same way — a thundering herd during
            shopping week. Here's exactly how we engineered against that, with the numbers
            from our source.
          </p>

          <div className="sb-safety">
            <div className="sb-safety-card big">
              <div className="ssc-h">★ the big one</div>
              <h4>We respect "fill out CTECs to see CTECs."</h4>
              <p>
                Northwestern only lets students view CTECs once they've filled
                out their own. We don't bypass that — if the portal hides a
                report from you, pencil can't fetch it either. Every CTEC
                request goes through your own existing CAESAR / NetID browser
                session: <strong>we never see your password, never collect your
                NetID, and never proxy auth through our code or servers.</strong>{" "}
                No cross-user caching, no shared credentials, ever.
              </p>
              <div className="ssc-num">your<small>session, your access</small></div>
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
              <p>free · MIT-licensed · open source. an unofficial extension drawn by NU students. not affiliated with the university. not affiliated with paper.nu either — we just love it.</p>
            </div>
            <div className="foot-col"><h5>get it</h5><ul>
              <li><a href={tweaks.installUrl} target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture("chrome_install_clicked", { location: "footer", browser: tweaks.browser })}>{tweaks.installStoreLabel}</a></li>
              <li><a href={tweaks.githubUrl} onClick={() => posthog?.capture("github_clicked", { location: "footer" })}>github</a></li>
              <li><a href={tweaks.feedbackUrl} target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture("feedback_clicked", { location: "footer" })}>leave feedback ↗</a></li>
            </ul></div>
            <div className="foot-col"><h5>trust</h5><ul>
              <li><a href="#safe">safety mechanisms</a></li>
              <li><a href={tweaks.githubUrl + "/issues"}>report an issue</a></li>
              <li><a href={tweaks.paperUrl} target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture("paper_nu_link_clicked", { location: "footer" })}>paper.nu ↗</a></li>
            </ul></div>
            <div className="foot-col"><h5>built by</h5><ul>
              {tweaks.creators.map((c) => (
                <li key={c.email}>
                  <a href={c.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "block", fontWeight: 700 }}>
                    {c.name}
                  </a>
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
            <span>made in Evanston with love :)</span>
          </div>
        </div>
      </footer>
    </>
  );
}
