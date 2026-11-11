#!/bin/sh
# Rebuilds the two embeds that run the extension's real code:
#   public/demo/ctec/ctec.js      the CTEC side sheet
#   public/demo/prereq/prereq.js  the prerequisite tree tooltip
# Usage: scripts/build-ctec-embed.sh /path/to/pencil-extension-checkout
set -e
EXT="${1:?path to the extension repo}"
cd "$(dirname "$0")/.."
for name in ctec prereq; do
  mkdir -p "public/demo/$name/fonts"
  "$EXT/node_modules/.bin/esbuild" "embed/$name-embed.ts" --bundle --minify \
    --alias:@ext="$EXT/src" --outfile="public/demo/$name/$name.js" --log-level=warning
  cp "$EXT"/src/assets/fonts/inter-*.woff2 "public/demo/$name/fonts/"
done
