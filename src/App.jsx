import Home from "./Home.jsx";

const TWEAKS = {
  chromeUrl:
    "https://chromewebstore.google.com/detail/pencilnu/klgfglapoogiaggfghlbcbfjhhgebahf",
  firefoxUrl: "https://addons.mozilla.org/en-US/firefox/addon/pencil-nu/",
  githubUrl: "https://github.com/kev1n/better-caesar",
  discordUrl: "https://discord.gg/c5r8K2Ry",
  paperUrl: "https://paper.nu",
  feedbackUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSc34UX2cWyPx3jwgYDxyU7P7nx_--G91b1cepX1t1xS6tI7-w/viewform?usp=dialog",
  creators: [
    {
      name: "Kevin Wang",
      email: "kevinwang2027@u.northwestern.edu",
      linkedin: "https://www.linkedin.com/in/kevin-wang-08836a175/",
    },
    {
      name: "Jason Latz",
      email: "jasonlatz2027@u.northwestern.edu",
      linkedin: "https://linkedin.com/in/jasonlatz",
    },
  ],
};

// Chrome, Edge, Brave, Arc, Opera and the rest of the Chromium family install
// from the Chrome Web Store. Every other browser gets the Firefox add-on.
function detectBrowser() {
  if (typeof navigator === "undefined") return "chrome";
  const brands = navigator.userAgentData?.brands;
  if (brands) return brands.some((b) => /chrom/i.test(b.brand)) ? "chrome" : "firefox";
  return /chrome|chromium|crios|edg/i.test(navigator.userAgent) ? "chrome" : "firefox";
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
    installStoreLabel: isFirefox ? "Firefox Add-ons" : "Chrome Web Store",
  };
  return <Home tweaks={tweaks} />;
}
