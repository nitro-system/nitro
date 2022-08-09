export DOMAIN=$1
# cspell:ignore fullchain letsencrypt

FILE=/etc/letsencrypt/live/$DOMAIN/fullchain.pem

if ! test -f "$FILE"; then

  if ! command -v certbot &>/dev/null; then
    sudo snap install core
    sudo snap refresh core
    sudo snap install --classic certbot
    sudo ln -s /snap/bin/certbot /usr/bin/certbot
    sudo snap set certbot trust-plugin-with-root=ok
    sudo snap install certbot-dns-digitalocean
  fi

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
