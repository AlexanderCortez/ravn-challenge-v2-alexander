#!/bin/sh

echo "Installing dependencies..."
echo "----APP ENV----"
echo ${APP_ENV}

if [[  "${APP_ENV}" == "production" ]]; then
  npm install --production --lock-file --no-optional --unsafe-perm
  npm cache clean --force
  npm run build
else
  npm install --no-optional --unsafe-perm
  npm cache clean --force
  npm run build
fi

