# Miyukini Portal & Domain Setup

Portal landing page for **miyukini.com** and Nginx configuration to route subdomains.

## Structure

```
portal/          → Static site served at miyukini.com
  index.html     → Main portal page
  assets/        → CSS and static assets
nginx/           → Nginx server configuration
  miyukini.com.conf
```

## Domain Routing

| Domain | Content |
|---|---|
| `miyukini.com` | Portal — projects showcase & identity |
| `cog.miyukini.com` | Miyukini COG platform (existing site) |

## Deployment on Hostinger VPS

### 1. DNS Configuration

In your Hostinger DNS panel, create/update these A records pointing to your VPS IP:

```
miyukini.com        → YOUR_VPS_IP
www.miyukini.com    → YOUR_VPS_IP
cog.miyukini.com    → YOUR_VPS_IP
```

### 2. Deploy portal files

```bash
# Copy portal to the VPS
sudo mkdir -p /var/www/miyukini/portal
sudo cp -r portal/* /var/www/miyukini/portal/

# Move existing COG site (adjust source path to wherever it currently lives)
sudo mv /var/www/html /var/www/miyukini-cog
# OR if COG is already in a different location:
# sudo ln -s /path/to/current/cog/site /var/www/miyukini-cog
```

### 3. Install Nginx config

```bash
# Copy the config
sudo cp nginx/miyukini.com.conf /etc/nginx/sites-available/miyukini.com.conf

# Remove old default site config if it serves COG on miyukini.com
sudo rm -f /etc/nginx/sites-enabled/default

# Enable new config
sudo ln -sf /etc/nginx/sites-available/miyukini.com.conf /etc/nginx/sites-enabled/

# Test & reload
sudo nginx -t && sudo systemctl reload nginx
```

### 4. SSL with Let's Encrypt

```bash
# Install certbot if not already installed
sudo apt install -y certbot python3-certbot-nginx

# Get certificates for both domains
sudo certbot --nginx -d miyukini.com -d www.miyukini.com
sudo certbot --nginx -d cog.miyukini.com

# Auto-renewal is set up automatically by certbot
```

### 5. Verify

- https://miyukini.com → Portal page
- https://cog.miyukini.com → COG platform (same content as before)
