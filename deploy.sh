#!/bin/bash
# Miyukini Auto-Deploy — checks GitHub for changes, deploys if new
REPO="StudioMiyukini/miyukini"
BRANCH="main"
DEPLOY_DIR="/var/www/portal"
STATE_FILE="/var/www/.miyukini-last-sha"
API_URL="https://api.github.com/repos/${REPO}/commits/${BRANCH}"
RAW_BASE="https://raw.githubusercontent.com/${REPO}/${BRANCH}"

FILES=(
    "portal/index.html:index.html"
    "portal/assets/style.css:assets/style.css"
)

LATEST_SHA=$(curl -sf -H "Accept: application/vnd.github.sha" "$API_URL")
[ -z "$LATEST_SHA" ] && exit 0

CURRENT_SHA=""
[ -f "$STATE_FILE" ] && CURRENT_SHA=$(cat "$STATE_FILE")
[ "$LATEST_SHA" = "$CURRENT_SHA" ] && exit 0

echo "[$(date)] Deploying $LATEST_SHA..."
for ENTRY in "${FILES[@]}"; do
    SRC="${ENTRY%%:*}"; DEST="${ENTRY##*:}"
    mkdir -p "$(dirname "${DEPLOY_DIR}/${DEST}")"
    curl -sf "$RAW_BASE/$SRC" -o "${DEPLOY_DIR}/${DEST}"
done

nginx -t 2>/dev/null && systemctl reload nginx 2>/dev/null
echo "$LATEST_SHA" > "$STATE_FILE"
echo "[$(date)] Done."
