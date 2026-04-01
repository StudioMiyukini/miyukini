#!/bin/bash
# =============================================================
# Miyukini Auto-Deploy — clones repo, builds Next.js, deploys
# Runs via cron every minute. Only builds when commit SHA changes.
# =============================================================

REPO="StudioMiyukini/miyukini"
BRANCH="main"
DEPLOY_DIR="/var/www/portal"
STATE_FILE="/var/www/.miyukini-last-sha"
API_URL="https://api.github.com/repos/${REPO}/commits/${BRANCH}"
TMP_DIR="/tmp/miyukini-build"

# Get latest commit SHA
LATEST_SHA=$(curl -sf -H "Accept: application/vnd.github.sha" "$API_URL")

if [ -z "$LATEST_SHA" ]; then
    exit 0
fi

# Compare with last deployed SHA
CURRENT_SHA=""
if [ -f "$STATE_FILE" ]; then
    CURRENT_SHA=$(cat "$STATE_FILE")
fi

if [ "$LATEST_SHA" = "$CURRENT_SHA" ]; then
    exit 0
fi

echo "[$(date)] New commit $LATEST_SHA — building..."

# Clone, install, build
rm -rf "$TMP_DIR"
git clone --depth 1 -b "$BRANCH" "https://github.com/${REPO}.git" "$TMP_DIR" 2>/dev/null

if [ ! -d "$TMP_DIR/portal-app-src" ]; then
    echo "[$(date)] ERROR: portal-app-src not found"
    rm -rf "$TMP_DIR"
    exit 1
fi

cd "$TMP_DIR/portal-app-src"
npm ci --production=false 2>/dev/null
npm run build 2>/dev/null

if [ ! -d "out" ]; then
    echo "[$(date)] ERROR: build failed"
    rm -rf "$TMP_DIR"
    exit 1
fi

# Deploy
rm -rf "$DEPLOY_DIR"
cp -r out "$DEPLOY_DIR"

# Reload nginx
nginx -t 2>/dev/null && systemctl reload nginx 2>/dev/null

# Save SHA
echo "$LATEST_SHA" > "$STATE_FILE"
echo "[$(date)] Deployed $LATEST_SHA successfully."

# Cleanup
rm -rf "$TMP_DIR"
