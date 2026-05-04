import { Analytics } from '@vercel/analytics/react';
import Sketchbook from "./Sketchbook.jsx";

const TWEAKS = {
  nextReleaseISO: "2026-05-12T17:00:00",
  bucketLabel: "I–P",
  chromeUrl: "https://chromewebstore.google.com/",
  githubUrl: "https://github.com/kev1n/better-caesar",
  contactEmail: "team@pencil.nu",
  creator1: "Built by NU students",
  creator2: "Open-source · MIT licensed",
};

export default function App() {
  return (
    <>
      <Sketchbook tweaks={TWEAKS} />
      <Analytics />
    </>
  );
}
