export APP_VERSION=$1
export APP_STAGE=$2

docker-compose -f docker-compose.yml down
docker-compose -f docker-compose.yml pull
docker-compose -f docker-compose.yml up --build -d --remove-orphans
