# 1- Build AND Push Apps For staging
Docker build --tag nitrosystem/staging_build:latest . --target=dist --build-arg stage=staging
Docker push nitrosystem/staging_build

# 2- Run Backend Api App Image
Docker build --tag nitrosystem/staging_b_api:latest . --target=backend --build-arg stage=staging --build-arg app=b-api
Docker push nitrosystem/staging_b_api

# 3- Run Web Admin App Image
Docker build --tag nitrosystem/staging_w_admin:latest . --target=frontend --build-arg stage=staging --build-arg app=w-admin
Docker push nitrosystem/staging_w_admin

# 4- Run Mobile Admin App Image
Docker build --tag nitrosystem/staging_m_admin:latest . --target=frontend --build-arg stage=staging --build-arg app=m-admin
Docker push nitrosystem/staging_m_admin
