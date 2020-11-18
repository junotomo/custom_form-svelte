# Stage: 1
FROM node:14.14-alpine3.12 as build

LABEL autodelete="true"
LABEL maintainer="docker@lagden.in"

ARG PORT=3000
ARG NODE_ENV="development"
ARG PUBLIC_PATH="http://[::1]:3000"
ARG ENDPOINT="http://[::1]:3000"
ARG VERSION="dev"
ARG BASE="/home/node"

ENV PORT=$PORT
ENV NODE_ENV=$NODE_ENV
ENV PUBLIC_PATH=$PUBLIC_PATH
ENV ENDPOINT=$ENDPOINT
ENV VERSION=$VERSION
ENV BASE=$BASE
ENV APP=$BASE/app

# USER node
WORKDIR $BASE

RUN mkdir -p $APP/public

WORKDIR $APP
COPY . $APP

RUN npm ci --ignore-scripts
RUN NODE_ENV=production npm run build

# Stage: 2
FROM node:14.14-alpine3.12 as prod

LABEL autodelete="true"
LABEL maintainer="docker@lagden.in"

ARG PORT=3000
ARG BASE=/home/node

ENV PORT=$PORT
ENV NODE_ENV=production
ENV BASE=$BASE
ENV APP=$BASE/app

USER node
WORKDIR $BASE

RUN mkdir -p $APP

WORKDIR $APP
COPY --from=build $APP/public $APP/public
COPY --from=build $APP/server $APP/server
COPY --from=build $APP/package.json $APP
COPY --from=build $APP/package-lock.json $APP

RUN npm ci --production --ignore-scripts

# Stage: 3
FROM node:14.14-alpine3.12

LABEL maintainer="docker@lagden.in"

ARG PORT=3000
ARG BASE=/home/node

ENV PORT=$PORT
ENV NODE_ENV=production
ENV BASE=$BASE
ENV APP=$BASE/app

USER node
WORKDIR $BASE

RUN mkdir -p $APP

WORKDIR $APP
COPY --from=prod $APP $APP

EXPOSE $PORT
