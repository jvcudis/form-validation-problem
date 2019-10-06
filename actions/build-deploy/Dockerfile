FROM node:10-alpine

LABEL "com.github.actions.name"="Build & Deploy"
LABEL "com.github.actions.description"="Build and deploy static content to Github Pages"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="yellow"

LABEL "repository"="https://github.com/jvcudis/form-validation-problem"
LABEL "homepage"="https://www.anncudis.com/form-validation-problem"
LABEL "maintainer"="Ann Cudis <jvcudis@gmail.com>"

RUN apk --update add git
COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
