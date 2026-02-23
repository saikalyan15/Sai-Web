---
category: automation
title: "How I Self-Hosted n8n on Oracle Cloud with Custom Subdomain & HTTPS"
date: "2025-06-09"
slug: "self-hosted-n8n-oracle-cloud"
excerpt: "A step-by-step guide to setting up n8n securely on Oracle Cloud Free Tier with HTTPS, custom subdomain, and zero open ports using Cloudflare Tunnel."
featuredImage: "/images/blog/n8n-oracle-cloud.jpg"
---

# 🚀 How I Self-Hosted n8n on Oracle Cloud with Custom Subdomain & HTTPS

Setting up [n8n](https://n8n.io) on a budget? Here's how I got it running **securely on Oracle Cloud Free Tier** — complete with HTTPS, a custom subdomain, and zero open ports (thanks to Cloudflare Tunnel!). Let's walk through what worked, step by step.

## 🛠️ Prerequisites

- Oracle Cloud Free Tier VM already set up (Ubuntu 22.04)
- A domain (e.g., `yourdomain.com`)
- Basic DNS management access (Cloudflare or similar)

👉 Don't have an Oracle VM yet? Follow [this guide](https://docs.oracle.com/en/cloud/get-started/free-tier.html).

## 🧱 Step 1: Install Docker & Docker Compose

SSH into your Oracle instance and install Docker:

```bash
sudo apt update
sudo apt install -y docker.io docker-compose
sudo usermod -aG docker $USER
newgrp docker
```

Verify:

```bash
docker --version
```

## 📦 Step 2: Run n8n with Docker

Create a folder and a docker-compose.yml:

```bash
mkdir ~/n8n && cd ~/n8n
nano docker-compose.yml
```

Paste this config:

```yaml
version: "3"

services:
  n8n:
    image: n8nio/n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=securepassword
      - WEBHOOK_TUNNEL_URL=https://n8n.yourdomain.com
    volumes:
      - ~/.n8n:/home/node/.n8n
```

Start it:

```bash
docker-compose up -d
```

## 🌐 Step 3: Point Subdomain to Oracle VM

Log into your DNS provider (e.g., Cloudflare) and add:

```
Type: A
Name: n8n
Value: <Oracle_VM_Public_IP>
TTL: Auto
```

You should now be able to access http://n8n.yourdomain.com:5678.

## 🔒 Step 4: Enable HTTPS with Nginx & Certbot

Install Nginx & Certbot:

```bash
sudo apt install nginx certbot python3-certbot-nginx -y
```

Create a config file:

```bash
sudo nano /etc/nginx/sites-available/n8n
```

Paste:

```nginx
server {
    listen 80;
    server_name n8n.yourdomain.com;

    location / {
        proxy_pass http://localhost:5678;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Enable the config:

```bash
sudo ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Get SSL:

```bash
sudo certbot --nginx -d n8n.yourdomain.com
```

Now, you can access n8n at https://n8n.yourdomain.com securely 🎉

## 🛡️ BONUS: Zero Port Access via Cloudflare Tunnel (Optional)

If you want maximum security, skip exposing any ports and use Cloudflare Tunnel.

1. Install cloudflared:
```bash
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb
```

2. Authenticate:
```bash
cloudflared tunnel login
```

3. Create and route tunnel:
```bash
cloudflared tunnel create n8n-tunnel
cloudflared tunnel route dns n8n-tunnel n8n.yourdomain.com
```

Create ~/.cloudflared/config.yml:

```yaml
tunnel: n8n-tunnel
credentials-file: /home/ubuntu/.cloudflared/n8n-tunnel.json

ingress:
  - hostname: n8n.yourdomain.com
    service: http://localhost:5678
  - service: http_status:404
```

Start the tunnel:

```bash
cloudflared tunnel run n8n-tunnel
```

Done — no ports exposed! You now access n8n securely via HTTPS.

## ✅ Conclusion

Here's what worked and what didn't:

| Attempt                         | Result                  | Why We Didn't Use It / Chose It |
| ------------------------------- | ----------------------- | ------------------------------- |
| Raw Oracle VM IP access         | But no HTTPS            | Not secure or production-ready  |
| Nginx + Let's Encrypt (Certbot) | Works beautifully       | Full control, HTTPS enabled     |
| Cloudflare Tunnel               | No open ports needed    | Most secure and stealthy option |
| Ngrok for testing               | Temporary, not scalable | Good for dev only               |
| DNS config + subdomain          | Works great             | Makes access easy and branded   |

This is now a secure, production-ready setup with your own subdomain and HTTPS. Let me know if you need a follow-up on CI/CD or backups!

Happy automating 🤖✨ 
#### Note: Special thanks to ChatGPT and Claude for helping me through my debug sessions and compiling all the steps in this post.
