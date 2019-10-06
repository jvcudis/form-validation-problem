#!/bin/sh

export CI=true

npm ci
npm run deploy
