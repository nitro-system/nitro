# cspell:ignore certbot certonly
certbot certonly \
  --dns-digitalocean \
  --dns-digitalocean-credentials ~/nitro/digitalocean.ini \
  -d staging.nitro.ng-omar.com \
  -d '*.staging.nitro.ng-omar.com'
