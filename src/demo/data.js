// Sample data for the product demos. Course codes and titles are public
// catalog entries; every rating, hour count and instructor name here is
// invented for illustration.

export const DAYS = ["Mo", "Tu", "We", "Th", "Fr"];
const MWF = [0, 2, 4];
const TTH = [1, 3];

export const COURSES = [
  {
    id: "cs211", code: "COMP_SCI 211", title: "Programming in Systems-Level Languages", color: "green",
    sections: [
      { days: TTH, start: 11, end: 12 + 20 / 60, rating: 5.1, hrs: 9.4 },
      { days: MWF, start: 14, end: 14 + 50 / 60, rating: 4.7, hrs: 11.2 },
    ],
  },
  {
    id: "stat210", code: "STAT 210", title: "Introduction to Probability and Statistics", color: "blue",
    sections: [
      { days: MWF, start: 10, end: 10 + 50 / 60, rating: 5.2, hrs: 3.4 },
      { days: TTH, start: 15.5, end: 16 + 50 / 60, rating: 4.9, hrs: 4.6 },
    ],
  },
  {
    id: "econ201", code: "ECON 201", title: "Introduction to Macroeconomics", color: "purple",
    sections: [
      { days: MWF, start: 13, end: 13 + 50 / 60, rating: 4.6, hrs: 4.1 },
      { days: TTH, start: 9.5, end: 10 + 50 / 60, rating: 5.0, hrs: 5.3 },
    ],
  },
  {
    id: "psych110", code: "PSYCH 110", title: "Introduction to Psychology", color: "amber",
    sections: [
      { days: TTH, start: 14, end: 15 + 20 / 60, rating: 5.4, hrs: 2.8 },
      { days: MWF, start: 11, end: 11 + 50 / 60, rating: 5.0, hrs: 3.5 },
    ],
  },
];

// Every way to take one section of each course (none of these overlap).
export const COMBOS = (() => {
  const out = [];
  for (let mask = 0; mask < 1 << COURSES.length; mask++) {
    const picks = COURSES.map((c, i) => ({ course: c, section: c.sections[(mask >> i) & 1] }));
    const days = new Set(picks.flatMap((p) => p.section.days));
    out.push({
      id: mask,
      picks,
      rating: picks.reduce((s, p) => s + p.section.rating, 0) / picks.length,
      hrs: picks.reduce((s, p) => s + p.section.hrs, 0),
      days: days.size,
    });
  }
  return out;
})();

export const SORTS = [
  { id: "lazy", label: "Lazy mode", cmp: (a, b) => a.hrs - b.hrs },
  { id: "rated", label: "Top CTEC rating", cmp: (a, b) => b.rating - a.rating },
  { id: "days", label: "Fewest days on campus", cmp: (a, b) => a.days - b.days || a.hrs - b.hrs },
];

// Paper.nu search results. The tooltip for each is the extension's real
// prerequisite tree (public/demo/prereq/), drawn for a sample student who
// took COMP_SCI 111 and 214 before they were renumbered 180 and 208.
export const PREREQ_RESULTS = [
  { code: "COMP_SCI 348", id: "COMP_SCI 348-0", title: "Introduction to Artificial Intelligence", state: "ready" },
  { code: "COMP_SCI 343", id: "COMP_SCI 343-0", title: "Operating Systems", state: "ready" },
  { code: "COMP_SCI 335", id: "COMP_SCI 335-0", title: "Introduction to the Theory of Computation", state: "needs-consent" },
  { code: "COMP_SCI 336", id: "COMP_SCI 336-0", title: "Design & Analysis of Algorithms", state: "unknown" },
  { code: "COMP_SCI 338-2", id: "COMP_SCI 338-2", title: "Forge: AI in Practice Building Technical Ownership and Modeling Teamwork - Part 2", state: "blocked" },
  { code: "COMP_SCI 211", id: "COMP_SCI 211-0", title: "Programming in Systems-Level Languages", state: "taken" },
];

export const CATALOG = [
  {
    code: "COMP_SCI 211", title: "Programming in Systems-Level Languages", units: "1.00", distro: [],
    blurb: "Programming in statically typed imperative languages. Pointers, address manipulation and manual memory management, then object-oriented design.",
    sections: [
      { n: "1", time: "TuTh 12:30pm–1:50pm", who: "A. Marsh", room: "Tech Institute LR2", status: "Open", open: 14, cap: 120 },
      { n: "2", time: "TuTh 3:30pm–4:50pm", who: "A. Marsh", room: "Tech Institute LR2", status: "Open", open: 31, cap: 120 },
    ],
  },
  {
    code: "COMP_SCI 212", title: "Math Foundations of CS Part 1: Discrete Math for CS", units: "1.00", distro: ["Emp Ded"],
    blurb: "Proof techniques, sets, functions and relations, induction, counting, discrete probability and graphs.",
    sections: [{ n: "1", time: "MoWeFr 10:00am–10:50am", who: "R. Oyelaran", room: "Annenberg G15", status: "Open", open: 8, cap: 90 }],
  },
  {
    code: "COMP_SCI 213", title: "Introduction to Computer System", units: "1.00", distro: [],
    blurb: "The hierarchy of abstractions in computer systems: data representation, machine code, memory, linking, processes and I/O.",
    sections: [{ n: "1", time: "TuTh 2:00pm–3:20pm", who: "D. Feng", room: "Tech Institute M345", status: "Waitlist", open: 0, cap: 150 }],
  },
  {
    code: "COMP_SCI 217", title: "Applied Data Management", units: "1.00", distro: [],
    blurb: "Working with real data: relational databases, SQL, cleaning and transforming data, and building small data applications.",
    sections: [
      { n: "1", time: "TuTh 11:00am–12:20pm", who: "J. Halloran", room: "Tech Institute L361", status: "Open", open: 22, cap: 110 },
      { n: "2", time: "MoWeFr 2:00pm–2:50pm", who: "S. Iyer", room: "Annenberg G21", status: "Open", open: 40, cap: 110 },
    ],
  },
  {
    code: "COMP_SCI 349", title: "Machine Learning", units: "1.00", distro: [],
    blurb: "Supervised and unsupervised learning: decision trees, nearest neighbor methods, linear models, neural networks and evaluation.",
    sections: [{ n: "1", time: "MoWe 3:30pm–4:50pm", who: "L. Brandt", room: "Tech Institute L211", status: "Open", open: 5, cap: 100 }],
  },
  {
    code: "COMP_SCI 396", title: "Special Topics in Computer Science", units: "1.00", distro: [],
    blurb: "Topics vary by section. Check each section for its subject and prerequisites.",
    sections: [
      { n: "4", topic: "Computational Photography", time: "TuTh 9:30am–10:50am", who: "M. Okafor", room: "Mudd 3514", status: "Open", open: 12, cap: 40 },
      { n: "7", topic: "Machine Learning Systems", time: "MoWe 11:00am–12:20pm", who: "T. Wendel", room: "Mudd 3514", status: "Closed", open: 0, cap: 35 },
    ],
  },
  {
    code: "STAT 210", title: "Introduction to Probability and Statistics", units: "1.00", distro: ["Emp Ded"],
    blurb: "Data collection and summarization, probability, sampling distributions, estimation, hypothesis tests and regression.",
    sections: [{ n: "20", time: "MoWeFr 10:00am–10:50am", who: "C. Abara", room: "Harris 107", status: "Open", open: 45, cap: 200 }],
  },
  {
    code: "ECON 201", title: "Introduction to Macroeconomics", units: "1.00", distro: ["Soc Beh"],
    blurb: "Scarcity and choice, national income and output, unemployment, inflation, and monetary and fiscal policy.",
    sections: [{ n: "20", time: "MoWeFr 1:00pm–1:50pm", who: "P. Lindqvist", room: "Ryan Auditorium", status: "Open", open: 63, cap: 350 }],
  },
  {
    code: "ECON 310-1", title: "Microeconomics", units: "1.00", distro: ["Soc Beh"],
    blurb: "Consumer behavior and the theory of demand, production and cost, and price and output under perfect competition.",
    sections: [{ n: "20", time: "TuTh 11:00am–12:20pm", who: "G. Navarro", room: "Leverone Auditorium", status: "Open", open: 19, cap: 180 }],
  },
  {
    code: "ECON 323-1", title: "Economic History of the United States Before 1865", units: "1.00", distro: ["Soc Beh", "History"],
    blurb: "The economic development of the United States from the colonial period to the Civil War.",
    sections: [{ n: "20", time: "TuTh 2:00pm–3:20pm", who: "E. Castellan", room: "Harris 107", status: "Open", open: 27, cap: 120 }],
  },
  {
    code: "PSYCH 110", title: "Introduction to Psychology", units: "1.00", distro: ["Soc Beh"],
    blurb: "A survey of psychology as a science: perception, learning, cognition, development, personality and social behavior.",
    sections: [{ n: "20", time: "TuTh 2:00pm–3:20pm", who: "N. Whitlock", room: "Fisk 217", status: "Open", open: 88, cap: 300 }],
  },
];

export const DISTROS = ["Nat Sci", "Emp Ded", "Soc Beh", "History", "Ethics", "Lit Arts"];

const ALIASES = { cs: "COMP_SCI", compsci: "COMP_SCI", econ: "ECON", stat: "STAT", stats: "STAT", psych: "PSYCH" };

// Same shape as the extension's search: whitespace tokens, subject shortcuts,
// `x` as a digit wildcard, and free text matched against titles and topics.
export function searchCatalog(query, distro) {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const out = [];
  for (const course of CATALOG) {
    if (distro && !course.distro.includes(distro)) continue;
    const [subject, number] = course.code.split(" ");
    let topicHits = null;
    const ok = tokens.every((t) => {
      const alias = ALIASES[t];
      if (alias) return subject === alias;
      if (subject.toLowerCase().startsWith(t) && t.length > 1) return true;
      if (/^\d[\dx]{1,2}(-\d)?$/.test(t)) return new RegExp("^" + t.replace(/x/g, "\\d")).test(number);
      if (course.title.toLowerCase().includes(t)) return true;
      const hits = course.sections.filter((s) => s.topic?.toLowerCase().includes(t));
      if (hits.length) {
        topicHits = topicHits ? topicHits.filter((s) => hits.includes(s)) : hits;
        return topicHits.length > 0;
      }
      return false;
    });
    if (ok && (tokens.length || distro)) out.push({ ...course, sections: topicHits ?? course.sections });
  }
  return out;
}
