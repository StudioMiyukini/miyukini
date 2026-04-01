#!/bin/bash
REPO="StudioMiyukini/miyukini"
BRANCH="main"
DEPLOY_DIR="/var/www/portal"
STATE_FILE="/var/www/.miyukini-last-sha"
RAW="https://raw.githubusercontent.com/${REPO}/${BRANCH}"

LATEST_SHA=$(curl -sf -H "Accept: application/vnd.github.sha" "https://api.github.com/repos/${REPO}/commits/${BRANCH}")
[ -z "$LATEST_SHA" ] && exit 0
[ -f "$STATE_FILE" ] && [ "$(cat "$STATE_FILE")" = "$LATEST_SHA" ] && exit 0

echo "[$(date)] Deploying $LATEST_SHA..."
mkdir -p "$DEPLOY_DIR/assets"
curl -sf "$RAW/portal/index.html" -o "$DEPLOY_DIR/index.html"
curl -sf "$RAW/portal/assets/style.css" -o "$DEPLOY_DIR/assets/style.css"
nginx -t 2>/dev/null && systemctl reload nginx 2>/dev/null
echo "$LATEST_SHA" > "$STATE_FILE"
echo "[$(date)] Done."
