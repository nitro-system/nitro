docker-compose -f docker-compose.production.yml down
docker-compose -f docker-compose.production.yml pull
docker-compose -f docker-compose.production.yml up --build -d --remove-orphans
