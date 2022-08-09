export DOMAIN=$1

if ! command -v certbot &>/dev/null; then
  sudo snap install core
  sudo snap refresh core
  sudo snap install --classic certbot
  sudo ln -s /snap/bin/certbot /usr/bin/certbot
  sudo snap set certbot trust-plugin-with-root=ok
  sudo snap install certbot-dns-digitalocean

  # cspell:ignore certbot certonly
  certbot certonly \
    --dns-digitalocean \
    --dns-digitalocean-credentials ~/nitro/digitalocean.ini \
    -d $DOMAIN \
    -d "*.$DOMAIN" \
    -m "challengeromar97@gmail.com" \
    --agree-tos \
    --non-interactive
  exit
fi
