export APP_VERSION=$1
export APP_STAGE=$2

# 1- Build and push Apps For staging
docker build --push --tag nitrosystem/build:$APP_VERSION-$APP_STAGE . --target=dist --build-arg stage=$APP_STAGE

# 2- Build and push Backend Api App Image
docker build --push --tag nitrosystem/b_api:$APP_VERSION-$APP_STAGE . --target=backend --build-arg app=b-api --build-arg stage=$APP_STAGE --build-arg version=$APP_VERSION

# 3- Build and push Web Admin App Image
docker build --push --tag nitrosystem/w_admin:$APP_VERSION-$APP_STAGE . --target=frontend --build-arg app=w-admin --build-arg stage=$APP_STAGE --build-arg version=$APP_VERSION

# 4- Build and push Mobile Admin App Image
docker build --push --tag nitrosystem/m_admin:$APP_VERSION-$APP_STAGE . --target=frontend --build-arg app=m-admin --build-arg stage=$APP_STAGE --build-arg version=$APP_VERSION

# 5- Build and push Reverse Proxy Image
docker build --push --tag nitrosystem/reverse_proxy:$APP_VERSION-$APP_STAGE . --target=reverse-proxy --build-arg stage=$APP_STAGE --build-arg
