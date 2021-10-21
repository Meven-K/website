FROM node:12.16.1-alpine As builder

ARG PROXY

WORKDIR /usr/src/app

ENV http_proxy ${PROXY}
ENV https_proxy ${PROXY}
ENV ftp_proxy ${PROXY}

RUN npm install

RUN npm install -g @angular/cli -y
