export DOMAIN=$1

# cspell:ignore certbot certonly
certbot certonly \
  --dns-digitalocean \
  --dns-digitalocean-credentials ~/nitro/digitalocean.ini \
  -d $DOMAIN \
  -d "*.$DOMAIN"
