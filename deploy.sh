#!/bin/bash

# Configuration
REPO_URL="https://github.com/mvkamyshev/basket-kgcho-landing.git"
APP_DIR="basket-kgcho-landing"

# Clone if not exists, otherwise pull
if [ ! -d "$APP_DIR" ]; then
    git clone $REPO_URL $APP_DIR
    cd $APP_DIR
else
    cd $APP_DIR
    git pull
fi

# Install dependencies
pnpm install

# Build the project
pnpm build:web

# Restart/Start with PM2
pm2 restart basket-site || pm2 start apps/web/dist/server/entry.mjs --name basket-site
