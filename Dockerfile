FROM node:12-alpine

ADD . /hawkeye

WORKDIR /hawkeye
RUN node --version
RUN yarn install
