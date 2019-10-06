#!/bin/sh

export CI=true

git config user.name "${GITHUB_ACTOR}" && \
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"

npm ci
npm run deploy
