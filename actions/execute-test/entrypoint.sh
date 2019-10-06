#!/bin/sh

export CI=true

npm ci
CI=true npm test
