import Sketchbook from "./Sketchbook.jsx";

// Schedule is now grad-year-based (replacing the old A–H / I–P / Q–Z buckets).
// Times are Chicago local — May is CDT (UTC-5), so the offsets below land on
// 9:00 AM CT on the listed weekday. The first row uses {live:true} so
// utils.diffParts collapses to "live ✓" without needing a past timestamp.
const TWEAKS = {
  schedule: [
    {
      label: "≤ 2027",
      name: "Rising seniors & grad",
      iso: "2026-05-06T00:00:00-05:00",
      live: true,
      note: "live now",
    },
    {
      label: "2028",
      name: "Rising juniors",
      iso: "2026-05-09T09:00:00-05:00",
      note: "Sat · 9 AM CT",
    },
    {
      label: "2029 +",
      name: "Everyone else · global release",
      iso: "2026-05-11T09:00:00-05:00",
      note: "Mon · 9 AM CT",
    },
  ],
  chromeUrl:
    "https://chromewebstore.google.com/detail/pencilnu/klgfglapoogiaggfghlbcbfjhhgebahf",
  firefoxUrl: "https://addons.mozilla.org/en-US/firefox/addon/pencil-nu/",
  githubUrl: "https://github.com/kev1n/better-caesar",
  discordUrl: "https://discord.gg/c5r8K2Ry",
  paperUrl: "https://paper.nu",
  feedbackUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSc34UX2cWyPx3jwgYDxyU7P7nx_--G91b1cepX1t1xS6tI7-w/viewform?usp=dialog",
  creators: [
    { name: "Kevin Wang", email: "kevinwang2027@u.northwestern.edu" },
    { name: "Jason Latz", email: "jasonlatz2027@u.northwestern.edu" },
  ],
};

// Firefox is the only non-Chromium browser we ship a build for. Edge, Brave,
// Arc, Opera, etc. all install from the Chrome Web Store, so a positive
// Firefox sniff is enough — everything else falls through to chromeUrl.
function detectBrowser() {
  if (typeof navigator === "undefined") return "chrome";
  return /firefox/i.test(navigator.userAgent) ? "firefox" : "chrome";
}

export default function App() {
  const browser = detectBrowser();
  const isFirefox = browser === "firefox";
  const tweaks = {
    ...TWEAKS,
    browser,
    installUrl: isFirefox ? TWEAKS.firefoxUrl : TWEAKS.chromeUrl,
    installLabelLower: isFirefox ? "add to firefox" : "add to chrome",
    installLabelTitle: isFirefox ? "Add to Firefox" : "Add to Chrome",
    installLabelShort: isFirefox ? "+ firefox" : "+ chrome",
    installStoreLabel: isFirefox ? "firefox add-ons" : "chrome web store",
  };
  return <Sketchbook tweaks={tweaks} />;
}
