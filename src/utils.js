import { useEffect, useState } from "react";

export function useNow(intervalMs = 1000) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}

export function diffParts(targetMs, now) {
  const d = Math.max(0, targetMs - now);
  return {
    done: d === 0,
    days: Math.floor(d / 86400000),
    hours: Math.floor((d % 86400000) / 3600000),
    mins: Math.floor((d % 3600000) / 60000),
    secs: Math.floor((d % 60000) / 1000),
  };
}

export const fmt = (n) => String(n).padStart(2, "0");

export function formatDate(iso) {
  const d = new Date(iso);
  return {
    long: d.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }),
    short: d.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" }),
    time: d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" }),
  };
}

export function buildSchedule(nextISO, currentBucketLabel) {
  const labels = ["A–H", "I–P", "Q–Z"];
  const idx = Math.max(0, labels.indexOf(currentBucketLabel));
  const next = new Date(nextISO).getTime();
  const week = 7 * 86400000;
  return labels.map((l, i) => ({
    label: l,
    iso: new Date(next + (i - idx) * week).toISOString(),
    name: ["Bucket A", "Bucket B", "Bucket C"][i],
  }));
}
