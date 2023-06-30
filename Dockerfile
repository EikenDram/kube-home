# build stage
FROM k3s.local:5000/library/node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

# production stage
FROM k3s.local:5000/library/nginx:stable-alpine as production-stage
COPY  --from=build-stage /app/dist /usr/share/nginx/html
#COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]