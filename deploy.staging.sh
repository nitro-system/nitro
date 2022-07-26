docker-compose -f docker-compose.staging.yml down
docker-compose -f docker-compose.staging.yml pull
docker-compose -f docker-compose.staging.yml up --build -d --remove-orphans
