// The prerequisite tree demo on pencil.nu. This runs the extension's own
// prereq pipeline and tooltip renderer (imported from the extension repo at
// build time): CAESAR-sourced prerequisite text where Paper.nu's is stale,
// the parser, the retired-number cleanup and the sideways bracket tree.
// Course data is a slice of Paper.nu's public plan.json (prereq-courses.json);
// the course history is invented. Rebuild with scripts/build-ctec-embed.sh.
//
// ?course=COMP_SCI 343-0 picks the course. The page tells its parent how big
// the tooltip is with { pencilPrereq: { w, h } }.
import { injectDesignSystem, applyTheme } from "@ext/content/design";
import {
  aliasCourseId,
  buildCourseCatalog,
  canonicalizePrereqs,
  evaluateEligibility,
  parsePrereq,
  type EligibilityHistoryEntry,
  type PrereqRecord
} from "@ext/content/prereqs";
import overrides from "@ext/content/prereqs/overrides.json";
import { buildPrereqTooltipBody } from "@ext/content/augmentations/prereq-filter/tooltip";
import { injectPrereqFilterStyles } from "@ext/content/augmentations/prereq-filter/styles";
import { TOOLTIP_ID } from "@ext/content/augmentations/prereq-filter/constants";
import rows from "./prereq-courses.json";

injectDesignSystem((f) => "fonts/" + f);
applyTheme("bright");
injectPrereqFilterStyles(document);

const OVERRIDES: Record<string, string> = overrides;
const courses = (rows as [string, string, string, string][]).map(([id, name, prereqs, last]) => {
  const [subject, catalog] = id.split(" ");
  return { id, subject, catalog, name, units: "1.00", prereqs, terms: last ? [last] : [] };
});

// Same steps as the extension's cache.ts + prereq-filter/data.ts.
const records = new Map<string, PrereqRecord>();
for (const c of courses) {
  const raw = OVERRIDES[c.id] ?? c.prereqs ?? "";
  if (!raw.trim()) {
    records.set(c.id, { id: c.id, raw: "", parsed: { kind: "none" }, warnings: [] });
    continue;
  }
  const { parsed, warnings } = parsePrereq(raw, c.subject);
  records.set(c.id, { id: c.id, raw, parsed, warnings });
}
const parsedMap = canonicalizePrereqs(records, buildCourseCatalog(courses as any));

// A sample student. COMP_SCI 111 and 214 were taken under their old numbers.
const HISTORY: Array<[string, string]> = [
  ["COMP_SCI 111", "Taken"],
  ["COMP_SCI 150", "Taken"],
  ["COMP_SCI 211", "Taken"],
  ["COMP_SCI 214", "Taken"],
  ["COMP_SCI 213", "In Progress"],
  ["MATH 220-1", "Taken"],
];
const history = new Map<string, EligibilityHistoryEntry>();
for (const [code, status] of HISTORY) {
  const id = code.includes("-") ? code : code + "-0";
  history.set(aliasCourseId(id).replace(/-0$/, ""), { status, grade: status === "Taken" ? "A" : "" } as EligibilityHistoryEntry);
}

const id = new URLSearchParams(location.search).get("course") ?? "COMP_SCI 343-0";
const record = parsedMap.get(id);
const result = record ? evaluateEligibility(record.parsed, history) : { state: "no-data" as const, missing: [], notes: [] };
const [subject, number] = id.split(" ");
const tip = document.createElement("div");
tip.id = TOOLTIP_ID;
tip.dataset.visible = "1";
tip.appendChild(
  buildPrereqTooltipBody(document, result, record?.raw || null, record?.parsed ?? null, history, {
    parsedMap,
    target: { subject, number, state: result.state },
  })
);
document.body.appendChild(tip);

const report = () => {
  const r = tip.getBoundingClientRect();
  window.parent.postMessage({ pencilPrereq: { course: id, state: result.state, w: Math.ceil(r.width), h: Math.ceil(r.height) } }, "*");
};
document.fonts.ready.then(report);
new ResizeObserver(report).observe(tip);
(window as any).__prereq = { parsedMap, history, result };
