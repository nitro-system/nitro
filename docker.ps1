# 1- Build AND Push Apps For Production
Docker build --tag nitrosystem/production_build:latest . --target=dist --build-arg stage=production
Docker push nitrosystem/production_build

# 2- Run Backend Api App Image
Docker build --tag nitrosystem/production_b_api:latest . --target=backend --build-arg stage=production --build-arg app=b-api
Docker push nitrosystem/production_b_api

# 3- Run Web Admin App Image
Docker build --tag nitrosystem/production_w_admin:latest . --target=frontend --build-arg stage=production --build-arg app=w-admin
Docker push nitrosystem/production_w_admin

# 4- Run Mobile Admin App Image
Docker build --tag nitrosystem/production_m_admin:latest . --target=frontend --build-arg stage=production --build-arg app=m-admin
Docker push nitrosystem/production_m_admin

## Heroku app
Docker tag nitrosystem/production_b_api registry.heroku.com/ns-production-b-api/web
Docker push registry.heroku.com/ns-production-b-api/web
heroku container:release web --app ns-production-b-api

Docker tag nitrosystem/production_w_admin registry.heroku.com/ns-production-w-admin/web
Docker push registry.heroku.com/ns-production-w-admin/web
heroku container:release web --app ns-production-w-admin

Docker tag nitrosystem/production_m_admin registry.heroku.com/ns-production-m-admin/web
Docker push registry.heroku.com/ns-production-m-admin/web
heroku container:release web --app ns-production-m-admin
