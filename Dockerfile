# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
COPY . .
RUN yarn
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
LABEL org.opencontainers.image.source=https://github.com/EikenDram/kube-home
LABEL org.opencontainers.image.description="Home page for kubernetes cluster"
LABEL org.opencontainers.image.licenses=MIT
ENV VITE_LOCALE=en
COPY  --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]