#!/bin/bash
# Miyukini Auto-Deploy — clones, builds Next.js, deploys static output
REPO="StudioMiyukini/miyukini"
BRANCH="main"
DEPLOY_DIR="/var/www/portal"
STATE_FILE="/var/www/.miyukini-last-sha"
API_URL="https://api.github.com/repos/${REPO}/commits/${BRANCH}"
TMP="/tmp/miyukini-build"

LATEST_SHA=$(curl -sf -H "Accept: application/vnd.github.sha" "$API_URL")
[ -z "$LATEST_SHA" ] && exit 0
[ -f "$STATE_FILE" ] && [ "$(cat "$STATE_FILE")" = "$LATEST_SHA" ] && exit 0

echo "[$(date)] Building $LATEST_SHA..."
rm -rf "$TMP"
git clone --depth 1 -b "$BRANCH" "https://github.com/${REPO}.git" "$TMP" 2>/dev/null || exit 1
cd "$TMP/site" || exit 1
npm ci 2>/dev/null || exit 1
npm run build 2>/dev/null || exit 1
[ -d "out" ] || exit 1

rm -rf "$DEPLOY_DIR"
cp -r out "$DEPLOY_DIR"
nginx -t 2>/dev/null && systemctl reload nginx 2>/dev/null
echo "$LATEST_SHA" > "$STATE_FILE"
echo "[$(date)] Deployed."
rm -rf "$TMP"
