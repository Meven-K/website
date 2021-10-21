FROM node:12.16.1-alpine As builder

WORKDIR /usr/src/app

ARG PROXY

COPY ./app/ .

ENV http_proxy ${PROXY}
ENV https_proxy ${PROXY}
ENV ftp_proxy ${PROXY}

RUN npm install

RUN npm run build --prod

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/src/ /usr/share/nginx/html