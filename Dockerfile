FROM node:12.16.1-alpine as base

ARG APP_DIR=/workspace
ARG NODE_OPTIONS="--max-old-space-size=768"

ENV APP_DIR=${APP_DIR}
ENV APP_ENV=production
ENV NODE_ENV=production
ENV NODE_OPTIONS=${NODE_OPTIONS}
ENV PORT=3000
ENV PATH=${APP_DIR}/node_modules/.bin:${PATH}

RUN mkdir -p ${APP_DIR}

WORKDIR ${APP_DIR}

COPY . .

RUN ci-cd/docker/install-deps.sh

CMD [ "npm", "run", "start:prod" ]