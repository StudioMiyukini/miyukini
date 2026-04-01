#!/bin/bash
# =============================================================
# Miyukini Auto-Deploy — checks GitHub for changes, deploys if new
# Runs via cron every minute. Only downloads when commit SHA changes.
# =============================================================

REPO="StudioMiyukini/miyukini"
BRANCH="main"
DEPLOY_DIR="/var/www/portal"
STATE_FILE="/var/www/.miyukini-last-sha"
API_URL="https://api.github.com/repos/${REPO}/commits/${BRANCH}"
RAW_BASE="https://raw.githubusercontent.com/${REPO}/${BRANCH}"

# Files to deploy
FILES=(
    "portal/index.html:index.html"
    "portal/assets/style.css:assets/style.css"
    "portal/assets/main.js:assets/main.js"
)

# Get latest commit SHA
LATEST_SHA=$(curl -sf -H "Accept: application/vnd.github.sha" "$API_URL")

if [ -z "$LATEST_SHA" ]; then
    exit 0  # API error, skip
fi

# Compare with last deployed SHA
CURRENT_SHA=""
if [ -f "$STATE_FILE" ]; then
    CURRENT_SHA=$(cat "$STATE_FILE")
fi

if [ "$LATEST_SHA" = "$CURRENT_SHA" ]; then
    exit 0  # No changes
fi

# Deploy new files
echo "[$(date)] Deploying $LATEST_SHA..."

for ENTRY in "${FILES[@]}"; do
    SRC="${ENTRY%%:*}"
    DEST="${ENTRY##*:}"
    DEST_PATH="${DEPLOY_DIR}/${DEST}"
    mkdir -p "$(dirname "$DEST_PATH")"
    curl -sf "$RAW_BASE/$SRC" -o "$DEST_PATH"
done

# Reload nginx (only if config changed)
nginx -t 2>/dev/null && systemctl reload nginx 2>/dev/null

# Save new SHA
echo "$LATEST_SHA" > "$STATE_FILE"
echo "[$(date)] Deployed $LATEST_SHA successfully."
