# build stage
FROM k3s.local:5000/library/node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn config set registry http://gitea-http.gitea:3000/api/packages/gitea_admin/npm/
RUN yarn config set -- '//gitea-http.gitea:3000/api/packages/gitea_admin/npm/:_authToken' "a6deb579cbdf60d9fa6d01b3128b375465f05dca"
COPY . .
RUN sed -i -e "s#https://registry.npmjs.org/#gitea-http.gitea:3000/api/packages/gitea_admin/npm/#g" yarn.lock
RUN yarn
RUN yarn build

# production stage
FROM k3s.local:5000/library/nginx:stable-alpine as production-stage
COPY  --from=build-stage /app/dist /usr/share/nginx/html
#COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]