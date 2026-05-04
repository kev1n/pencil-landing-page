import { useNow, diffParts, fmt, formatDate, buildSchedule } from "./utils.js";
import { MockSeats, MockNav, MockCtec } from "./Mocks.jsx";

function Countdown({ iso }) {
  const now = useNow();
  const { days, hours, mins, secs, done } = diffParts(new Date(iso).getTime(), now);
  return (
    <div className={"sb-cd" + (done ? " live" : "")}>
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
        {/* eraser */}
        <rect x="2" y="16" width="6" height="10" rx="1.6" fill="#ef8da6" />
        {/* ferrule (silver) with grooves */}
        <rect x="8" y="16" width="5" height="10" fill="#c2c7cb" />
        <line x1="9.7" y1="16.4" x2="9.7" y2="25.6" stroke="#7d848a" strokeWidth="0.55" />
        <line x1="11.3" y1="16.4" x2="11.3" y2="25.6" stroke="#7d848a" strokeWidth="0.55" />
        {/* yellow body */}
        <rect x="13" y="16" width="17" height="10" fill="#f5c842" />
        {/* exposed wood */}
        <polygon points="30,16 35,16 35,26 30,26" fill="#d4a373" />
        {/* graphite tip */}
        <polygon points="35,16 40,21 35,26" fill="#2a2a2e" stroke="none" />
        <polygon points="35,16 40,21 35,26" fill="none" stroke="#2a2a2e" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

export default function Sketchbook({ tweaks }) {
  const schedule = buildSchedule(tweaks.nextReleaseISO, tweaks.bucketLabel);
  const now = Date.now();
  return (
    <>
      <header className="topbar wrap">
        <div className="brand"><PencilLogo /> pencil.nu</div>
        <nav className="topnav">
          <a href="#sched">schedule</a>
          <a href="#feat">features</a>
          <a href="#safe">safety</a>
          <a href={tweaks.githubUrl}>github</a>
        </nav>
        <a className="top-cta" href={tweaks.chromeUrl}>add to chrome →</a>
      </header>

      <section className="hero wrap">
        <div className="tag">— a small project for shopping week —</div>
        <h1>
          paper.nu and CAESAR,{" "}
          <span className="circle">sharpened</span>
          <br />by a <span className="underline">small extension</span>.
        </h1>
        <p className="lede">
          The big one: <mark>full CTECs inlined into paper.nu</mark> — ratings, hour
          distributions, and student comments, right in the class drawer you already open.
          Plus seat counts in your CAESAR cart and one less click on every term selector.
          No new app to learn.
        </p>
        <div className="hero-ctas">
          <a className="btn-pencil" href={tweaks.chromeUrl}>Add to Chrome</a>
          <a className="btn-ghost-pencil" href="#sched">when does mine unlock?</a>
          <span className="scribble-arrow">↙ next round soon</span>
        </div>

        <div className="pillars-margin">
          <div className="pillar">
            <div className="pnum">1.</div>
            <h4>CTECs inside paper.nu</h4>
            <p>The big one. Ratings, hour distributions, student comments — pulled into the class drawer you already use.</p>
          </div>
          <div className="pillar">
            <div className="pnum">2.</div>
            <h4>Permission-aware</h4>
            <p>Only fetches CTECs you can already see. Goes through Northwestern's own SSO every time.</p>
          </div>
          <div className="pillar">
            <div className="pnum">3.</div>
            <h4>Improves what you already do</h4>
            <p>Skips the term picker. Shows live seat counts. No new tab, no new dashboard.</p>
          </div>
          <div className="pillar">
            <div className="pnum">4.</div>
            <h4>No external servers</h4>
            <p>Talks to NU and nowhere else. Cached on your laptop, in your browser.</p>
          </div>
        </div>
      </section>

      <section id="sched">
        <div className="wrap">
          <div className="sec-mark">~ rollout ~</div>
          <h2 className="sec-title">When does <i>your</i> last name unlock?</h2>
          <p className="sec-blurb">
            We release in three waves so we don't drop a thousand students on Northwestern's
            servers all at once. Each card below has a live countdown. We figure out your
            bucket from your last initial after you sign in to CAESAR.
          </p>

          <div className="sb-rollout">
            {schedule.map((b, i) => {
              const target = new Date(b.iso).getTime();
              const isLive = now >= target;
              const isNext = !isLive && schedule.slice(0, i).every(s => now >= new Date(s.iso).getTime());
              const status = isLive ? "live" : isNext ? "next" : "queued";
              const label = isLive ? "live ✓" : isNext ? "next up" : "queued";
              const d = formatDate(b.iso);
              return (
                <div className="sb-card" key={i}>
                  <div className="sb-bucket-h">
                    <div className="sb-bucket">{b.label}</div>
                    <div className={"sb-stamp " + status}>{label}</div>
                  </div>
                  <div className="sb-name">{b.name}</div>
                  <div className="sb-date">{d.short} · {d.time}</div>
                  <Countdown iso={b.iso} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="feat">
        <div className="wrap">
          <div className="sec-mark">— what it does —</div>
          <h2 className="sec-title">Three small <i>fixes.</i></h2>
          <p className="sec-blurb">No new website, no new account. Install once and the pages you already use just get better.</p>

          <div className="sb-features">
            <div className="sb-feat">
              <div className="copy">
                <div className="feat-num">1.</div>
                <h3>Full CTECs <span className="marker">inlined</span> into paper.nu.</h3>
                <p>Ratings, hour distributions, and student comments pulled into paper.nu's class drawer.
                  No more juggling tabs between paper, CAESAR, and the CTEC portal.</p>
                <ul className="bullets">
                  <li>Instructor + course ratings inline</li>
                  <li>Hour and grade histograms</li>
                  <li>Cached locally — instant re-opens</li>
                </ul>
              </div>
              <div><MockCtec /></div>
            </div>

            <div className="sb-feat flip">
              <div className="copy">
                <div className="feat-num">2.</div>
                <h3>Cart pages with <span className="marker">real seats.</span></h3>
                <p>CAESAR tells you almost nothing about what's already in your cart. We fix that.</p>
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
                <p>Same three clicks every time. We remember and skip.</p>
                <ul className="bullets">
                  <li>Default term per device</li>
                  <li>One keystroke to switch</li>
                  <li>Every PeopleSoft sub-page</li>
                </ul>
              </div>
              <div><MockNav /></div>
            </div>
          </div>
        </div>
      </section>

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
              <h4>Three waves, ~1 week apart.</h4>
              <p>A–H · I–P · Q–Z. We pause between waves if anything looks off.</p>
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
              <p>an unofficial open-source extension. drawn by NU students. not affiliated with the university.</p>
            </div>
            <div className="foot-col"><h5>get it</h5><ul>
              <li><a href={tweaks.chromeUrl}>chrome web store</a></li>
              <li><a href={tweaks.githubUrl}>github</a></li>
            </ul></div>
            <div className="foot-col"><h5>trust</h5><ul>
              <li><a href="#safe">safety mechanisms</a></li>
              <li><a href={tweaks.githubUrl + "/issues"}>report an issue</a></li>
            </ul></div>
            <div className="foot-col"><h5>say hi</h5><ul>
              <li>{tweaks.creator1}</li>
              <li>{tweaks.creator2}</li>
              <li><a href={`mailto:${tweaks.contactEmail}`}>{tweaks.contactEmail}</a></li>
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
