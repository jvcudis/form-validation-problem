#!/bin/sh

npm ci
npm run build

cd build
remote_repo="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
remote_branch="gh-pages"

git init
git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"

# Add all files in build
git add .
echo 'Files to Commit:' && ls -l | wc -l
git commit -m 'Published by build-deploy action'

echo 'Force pushing to remote branch...'
git push --force $remote_repo master:$remote_branch
