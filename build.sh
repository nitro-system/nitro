export APP_VERSION=$1
export APP_STAGE=$2

# 1- Build AND Push Apps For staging
docker build --push --tag nitrosystem/build:$APP_VERSION-$APP_STAGE . --target=dist --build-arg stage=$APP_STAGE

# 2- Run Backend Api App Image
docker build --push --tag nitrosystem/b_api:$APP_VERSION-$APP_STAGE . --target=backend --build-arg app=b-api --build-arg stage=$APP_STAGE --build-arg version=$APP_VERSION

# 3- Run Web Admin App Image
docker build --push --tag nitrosystem/w_admin:$APP_VERSION-$APP_STAGE . --target=frontend --build-arg app=w-admin --build-arg stage=$APP_STAGE --build-arg version=$APP_VERSION

# 4- Run Mobile Admin App Image
docker build --push --tag nitrosystem/m_admin:$APP_VERSION-$APP_STAGE . --target=frontend --build-arg app=m-admin --build-arg stage=$APP_STAGE --build-arg version=$APP_VERSION
