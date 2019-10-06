#!/bin/sh

npm ci
npm run predeploy

npm install gh-pages && \
gh-pages -r "https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git" \
         -b "gh-pages2" \
         -m "Update page content" \
         -u "${GITHUB_ACTOR}" \
         -d build \
         -x
