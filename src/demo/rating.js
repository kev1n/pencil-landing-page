// The extension's rating colour: a hue from red through amber to green,
// interpolated between the same stops as paper-ctec's pickMetricHue.
const RATING_STOPS = [[0, 4], [0.35, 18], [0.55, 34], [0.72, 58], [0.85, 92], [0.95, 116]];
export function ratingTone(value) {
  const s = Math.max(0, Math.min(1, value / 6));
  let hue = RATING_STOPS[RATING_STOPS.length - 1][1];
  for (let i = 0; i < RATING_STOPS.length - 1; i++) {
    const [a, ha] = RATING_STOPS[i];
    const [b, hb] = RATING_STOPS[i + 1];
    if (s >= a && s <= b) { hue = ha + ((s - a) / (b - a)) * (hb - ha); break; }
  }
  if (s <= 0) hue = RATING_STOPS[0][1];
  return { background: `hsl(${hue} 85% 80%)`, color: `hsl(${hue} 60% 16%)` };
}
