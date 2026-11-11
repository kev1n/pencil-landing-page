// The CTEC report demo on pencil.nu. This renders the extension's own
// analytics side sheet (imported from the extension repo at build time) with
// invented sample data, so the site always shows the real UI. Rebuild with
// scripts/build-ctec-embed.sh after the sheet changes in the extension.
//
// The page is only as wide as the sheet; the site draws the schedule beside
// the frame. The parent can drive it with
//   postMessage({ pencilCtec: { term: number | null, q: string, focus: "top" | "comments" } })
// and hears back { pencilCtec: "close" } and { pencilCtec: "term", term }.
import { injectDesignSystem, applyTheme } from "@ext/content/design";
import { injectStyles } from "@ext/content/augmentations/paper-ctec/styles";
import { createModalView } from "@ext/content/augmentations/paper-ctec/modal";
import { buildModalDisplayData } from "@ext/content/augmentations/paper-ctec/modal-data";

const q = new URLSearchParams(location.search);
injectDesignSystem((f) => "fonts/" + f);
applyTheme("bright");
injectStyles();

const Q = { instruction: "Provide an overall rating of the instruction", course: "Provide an overall rating of the course", learned: "Estimate how much you learned in the course", challenging: "Rate the effectiveness of the course in challenging you intellectually", stimulating: "Rate the effectiveness of the instructor in stimulating your interest in the subject" };
const HOURS = ["3 or fewer", "4 - 7", "8 - 11", "12 - 15", "16 - 19", "20 or more"];
const COMMENTS = ["Practice questions before each exam matched what was actually tested.", "Office hours were the most useful part of the course. Go early in the quarter.", "The content is interesting, but the pace picks up a lot after the midterm.", "Lectures were organized and the slides went up ahead of time.", "Weekly problem sets, two midterms and a final. No surprises.", "The final covered material we barely touched in lecture. Really frustrating.", "Homework is fair, though the feedback on problem sets could be clearer.", "Workload was steady all quarter, which made it easy to plan around.", "Best intro class I could have asked for. Clear, patient, and funny.", "Grading on the group project felt arbitrary and took weeks to come back.", "Attendance isn't taken but the clicker questions count for a few points.", "The labs were genuinely useful and I still use what I learned.", "Great lecturer, but the textbook is useless. Rely on the slides instead.", "Exams are fair if you do the practice sets. Nothing comes out of nowhere.", "Go to office hours. The TAs walk through the problem sets step by step.", "The slides are all you need, and the practice sets are close to the exams.", "The second midterm was much harder than the practice sets suggested.", "Labs take longer than they say, but they're where it finally clicked.", "Two midterms, weekly problem sets, and labs every other week.", "Don't buy the textbook. We never opened it.", "Office hours saved me before the midterm.", "Clear slides, fair exams, and a professor who actually cares."];
const TERMS = ["2026 Fall", "2026 Spring", "2026 Winter", "2025 Fall", "2025 Spring"];

const base = Number(q.get("r") ?? 5.2);
const hours = Number(q.get("h") ?? 3.4);
const code = q.get("code") ?? "STAT 210";
const title = q.get("title") ?? "Introductory Statistics";
const [subject, number] = code.split(" ");
const vals = { instruction: base + 0.2, course: base - 0.1, learned: base + 0.1, challenging: base - 0.4, stimulating: base - 0.2 };
const hourShares = (() => {
  const raw = [2, 5.5, 9.5, 13.5, 17.5, 22].map((c) => Math.exp(-((c - hours) ** 2) / 30));
  const t = raw.reduce((a, b) => a + b, 0);
  return raw.map((r) => r / t);
})();
const entries = TERMS.map((term, i) => {
  const d = [0, -0.1, 0.1, -0.3, -0.2][i];
  const n = [62, 48, 55, 71, 44][i];
  const m = (v: number) => ({ mean: Math.min(6, +(v + d).toFixed(2)), responseCount: n });
  const counts = (v: number) => {
    const raw = [1, 2, 3, 4, 5, 6].map((k) => Math.exp(-((k - (v + d)) ** 2) / 1.2));
    const t = raw.reduce((a, b) => a + b, 0);
    return raw.map((r) => Math.round((r / t) * n));
  };
  const hb = hourShares.map((share, k) => ({ label: HOURS[k], count: Math.round(share * n) }));
  return {
    term, description: `${subject} ${number}-0-20 ${title}`, instructor: "Sample Instructor", url: "https://example.com/" + i, status: "ready" as const,
    metrics: { instruction: m(vals.instruction), course: m(vals.course), learned: m(vals.learned), challenging: m(vals.challenging), stimulating: m(vals.stimulating), hours: { mean: +(hours + [0.1, -0.1, 0.2, -0.2, 0][i]).toFixed(1), responseCount: n, buckets: hb } },
    charts: Object.entries(Q).map(([k, question]) => ({ question, imageUrl: "", alt: null, counts: counts((vals as any)[k]) })),
    commentGroups: [{ prompt: "Please summarize your reaction to this course focusing on the aspects that were most important to you.", comments: COMMENTS.filter((_, k) => k % TERMS.length === i) }],
  };
});
const snapshot: any = { recentAggregate: {}, entries, allFetched: true, pendingDiscoveryCount: 0 };
const data = buildModalDisplayData(snapshot, { subject, catalogNumber: number + "-0", instructor: "Sample Instructor" }, title, "combo");

const termId = (i: string | number | null | undefined) => (i == null || i === "" ? null : data?.terms[+i]?.id ?? null);
const view = createModalView({ doc: document });
// On Paper.nu the sheet lives inside Paper.nu's own Section Info panel,
// with a Paper.nu / CTECs tab pair in its header row. This is a copy of that panel's frame.
const panel = document.createElement("div");
panel.className = "si-panel";
panel.innerHTML = `<div class="si-head"><p>SECTION INFO</p>
  <div class="bc-paper-ctec-side-tabs"><button type="button" class="bc-paper-ctec-side-tab si-paper">Paper.nu</button><button type="button" class="bc-paper-ctec-side-tab is-active">CTECs</button></div>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/></svg>
  <button type="button" class="si-x" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 18 18 6M6 6l12 12"/></svg></button></div>
  <section class="bc-paper-ctec-analytics-panel"></section>`;
document.body.append(panel);
view.setHost(panel.querySelector<HTMLElement>("section"));
const state: any = { selectedTermId: termId(q.get("term")), commentsQuery: q.get("q") ?? "", commentsSentimentFilter: "all", commentsVisibleCount: 50, dryRun: null, dryRunDismissed: false, activePreset: null };
const input: any = { identity: { subject, catalog: number + "-0", title, instructor: "Sample Instructor", sectionTerm: "2027 Winter" }, data, loading: false, errorMessage: null, notFound: false, canRefresh: true, canLoadMore: false, loadMoreBatchSize: 3, remainingTerms: 0, parsedTermCount: TERMS.length, backgroundRefreshing: false, refreshFlash: null, strategy: "combo", freshLensLoading: false, courseLensRedundant: false, instructorLensRedundant: false };

const tell = (msg: unknown) => window.parent.postMessage({ pencilCtec: msg }, "*");
const noop = () => {};
const rerender = () => view.open(input, state, cb);
const cb: any = new Proxy({
  onClose: () => tell("close"),
  onTermChange: (id: string | null) => {
    state.selectedTermId = id;
    state.commentsVisibleCount = 50;
    rerender();
    const index = data?.terms.findIndex((t) => t.id === id) ?? -1;
    window.parent.postMessage({ pencilCtec: "term", term: index < 0 ? null : index }, "*");
  },
  onCommentsSentimentChange: (f: string) => { state.commentsSentimentFilter = f; rerender(); },
  onStrategyChange: (s: string) => { input.strategy = s; rerender(); },
}, { get: (t: any, k) => t[k] ?? noop });

const scrollTo = (focus: string | null) => requestAnimationFrame(() => {
  const com = document.querySelector<HTMLElement>(".bc-sheet-com");
  panel.scrollTo({ top: focus === "comments" && com ? com.offsetTop + 96 : 0, behavior: "smooth" });
});

rerender();
panel.querySelector(".si-x")?.addEventListener("click", () => tell("close"));
panel.querySelector(".si-paper")?.addEventListener("click", () => tell("close"));
if (q.get("focus")) scrollTo(q.get("focus"));
window.addEventListener("message", (e) => {
  const m = e.data?.pencilCtec;
  if (!m || typeof m !== "object") return;
  state.selectedTermId = termId(m.term);
  state.commentsQuery = m.q ?? "";
  state.commentsSentimentFilter = "all";
  state.commentsVisibleCount = 50;
  rerender();
  scrollTo(m.focus ?? "top");
});
