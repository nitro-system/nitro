ARG stage
ARG version=latest

# STAGE: Build Application
FROM node:16.10.0-alpine3.14 AS build
ARG stage
WORKDIR /usr/src/app
COPY . .
RUN cat package.json
RUN npm i -g npm@latest
RUN npm i
RUN npx nx run-many --target=build --all --configuration=${stage} --parallel=false
RUN export PROJECT=m-admin && npx ionic cap sync --prod --no-build

# STAGE: Build Application
FROM nginx:latest AS dist
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./
COPY --from=build /usr/src/app/android ./android
COPY --from=build /usr/src/app/ios ./ios

FROM nitrosystem/build:${version}-${stage} AS distImg

# Stage: Start Frontend Application
FROM nginx:latest AS frontend
ARG app
ENV PORT=80
COPY ./nginx.conf  /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=distImg /usr/src/app/apps/${app} .
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
EXPOSE ${PORT}

# Stage: Start Backend Application
FROM node:16.10.0-alpine3.14 AS backend
ARG app
ENV PORT=3000
WORKDIR /usr/src/app
COPY --from=distImg /usr/src/app/apps/${app} .
RUN npm i -g npm@latest
RUN npm install --omit=dev
CMD node main --bind 0.0.0.0:${PORT}
EXPOSE ${PORT}
