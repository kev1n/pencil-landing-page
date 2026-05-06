#!/usr/bin/env bash
# Renders each asset HTML through headless Chrome at its exact viewport,
# then flattens the resulting PNG to a 24-bit JPEG (no alpha) via sips —
# satisfying the Chrome Web Store spec ("JPEG or 24-bit PNG, no alpha").
#
# Why JPEG: Chrome's --screenshot writes PNGs that include an alpha
# channel, and the Web Store rejects PNGs with alpha. sips re-encodes
# to JPEG which has no alpha at all and flattens onto the asset's
# already-painted cream background, preserving fidelity.

set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="$HERE/src"
OUT="$HERE/out"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [ ! -x "$CHROME" ]; then
  echo "Google Chrome not found at $CHROME" >&2
  exit 1
fi

mkdir -p "$OUT"

# Each row: html-stem  width  height
shoot() {
  local stem=$1 w=$2 h=$3
  local html="$SRC/$stem.html"
  local png="$OUT/$stem.png"
  local jpg="$OUT/$stem.jpg"

  echo "→ $stem (${w}x${h})"
  "$CHROME" \
    --headless=new \
    --disable-gpu --no-sandbox --hide-scrollbars \
    --force-device-scale-factor=1 \
    --window-size="$w,$h" \
    --virtual-time-budget=4000 \
    --default-background-color=00000000 \
    --screenshot="$png" \
    "file://$html" >/dev/null 2>&1

  # sips: PNG → JPEG, q≈92, drops alpha against the page's painted bg.
  sips -s format jpeg -s formatOptions 92 \
    "$png" --out "$jpg" >/dev/null

  # Verify dimensions in case Chrome silently letterboxed.
  local pw ph
  pw=$(sips -g pixelWidth "$jpg" | awk '/pixelWidth/ {print $2}')
  ph=$(sips -g pixelHeight "$jpg" | awk '/pixelHeight/ {print $2}')
  echo "   wrote $jpg  (${pw}x${ph})"
}

shoot screenshot-1   1280 800
shoot screenshot-2   1280 800
shoot screenshot-3   1280 800
shoot screenshot-4   1280 800
shoot screenshot-5   1280 800
shoot promo-small     440 280
shoot promo-marquee  1400 560

echo
echo "Done. Files in $OUT:"
ls -lh "$OUT" | grep -E "\.(jpg|png)$"
